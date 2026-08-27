import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const GET: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const res = await db.prepare('SELECT * FROM templates WHERE id = ?').bind(id).all();
  const template = res.results?.[0] as any;
  if (!template) return jsonError('NOT_FOUND', 'Template not found.', 404);

  // IDOR Protection
  if (template.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  let config = {};
  try {
    config = typeof template.style_config === 'string' ? JSON.parse(template.style_config) : (template.style_config || {});
  } catch {
    config = {};
  }

  return jsonSuccess({
    template: { ...template, style_config: config },
  });
};

export const PUT: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT * FROM templates WHERE id = ?').bind(id).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Template not found.', 404);

  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const name = body.name?.trim() || existing.name;
  const description = body.description !== undefined ? body.description?.trim() : existing.description;
  const styleConfig = body.styleConfig || existing.style_config;
  const now = Date.now();

  try {
    await db.prepare(`
      UPDATE templates SET name = ?, description = ?, style_config = ?, updated_at = ? WHERE id = ?
    `).bind(
      name,
      description,
      typeof styleConfig === 'string' ? styleConfig : JSON.stringify(styleConfig),
      now,
      id
    ).run();

    return jsonSuccess({
      message: 'Template updated successfully.',
      template: { id, name, description, styleConfig, updatedAt: now },
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to update template.', 500);
  }
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const id = params.id;
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT * FROM templates WHERE id = ?').bind(id).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Template not found.', 404);

  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  await db.prepare('DELETE FROM templates WHERE id = ?').bind(id).run();
  return jsonSuccess({ message: 'Template deleted successfully.' });
};
