import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const GET: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const jobRes = await db.prepare('SELECT * FROM bulk_jobs WHERE id = ?').bind(id).all();
  const job = jobRes.results?.[0] as any;
  if (!job) return jsonError('NOT_FOUND', 'Bulk job not found.', 404);

  // IDOR Protection
  if (job.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  // Fetch job items
  const itemsRes = await db.prepare('SELECT * FROM bulk_job_items WHERE job_id = ? ORDER BY row_number ASC').bind(id).all();
  const items = itemsRes.results || [];

  return jsonSuccess({
    job,
    items,
  });
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const jobRes = await db.prepare('SELECT * FROM bulk_jobs WHERE id = ?').bind(id).all();
  const job = jobRes.results?.[0] as any;
  if (!job) return jsonError('NOT_FOUND', 'Bulk job not found.', 404);

  if (job.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  await db.prepare('DELETE FROM bulk_jobs WHERE id = ?').bind(id).run();
  return jsonSuccess({ message: 'Bulk job deleted successfully.' });
};
