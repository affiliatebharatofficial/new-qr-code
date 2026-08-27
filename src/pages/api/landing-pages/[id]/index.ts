import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const GET: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const res = await db.prepare('SELECT * FROM landing_pages WHERE id = ?').bind(id).all();
  const page = res.results?.[0] as any;
  if (!page) return jsonError('NOT_FOUND', 'Landing page not found.', 404);

  // IDOR Protection
  if (page.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  let content = {};
  let design = {};
  try {
    content = typeof page.content_json === 'string' ? JSON.parse(page.content_json) : (page.content_json || {});
    design = typeof page.design_json === 'string' ? JSON.parse(page.design_json) : (page.design_json || {});
  } catch {
    content = {};
    design = {};
  }

  return jsonSuccess({
    page: { ...page, content_json: content, design_json: design },
  });
};

export const PUT: APIRoute = async ({ params, request, locals }) => {
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

  const title = body.title?.trim() || existing.title;
  const content = body.content || existing.content_json;
  const design = body.design || existing.design_json;
  const status = body.status || existing.status;
  const now = Date.now();

  try {
    await db.prepare(`
      UPDATE landing_pages SET
        title = ?,
        content_json = ?,
        design_json = ?,
        status = ?,
        updated_at = ?
      WHERE id = ?
    `).bind(
      title,
      typeof content === 'string' ? content : JSON.stringify(content),
      typeof design === 'string' ? design : JSON.stringify(design),
      status,
      now,
      id
    ).run();

    return jsonSuccess({
      message: 'Landing page updated successfully.',
      page: { id, title, status, updatedAt: now },
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to update landing page.', 500);
  }
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
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

  await db.prepare('DELETE FROM landing_pages WHERE id = ?').bind(id).run();
  return jsonSuccess({ message: 'Landing page deleted successfully.' });
};
