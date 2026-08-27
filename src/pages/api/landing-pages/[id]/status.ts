import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT * FROM landing_pages WHERE id = ?').bind(id).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Landing page not found.', 404);

  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const newStatus = body.status === 'published' ? 'published' : 'unpublished';
  const now = Date.now();

  await db.prepare('UPDATE landing_pages SET status = ?, updated_at = ? WHERE id = ?').bind(newStatus, now, id).run();

  return jsonSuccess({
    message: `Landing page is now ${newStatus}.`,
    status: newStatus,
  });
};
