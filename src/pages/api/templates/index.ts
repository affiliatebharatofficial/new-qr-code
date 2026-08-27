import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { canCreateTemplate } from '../../../lib/billing/entitlements';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const db = getDb(locals);
  const res = await db.prepare('SELECT * FROM templates WHERE user_id = ? ORDER BY created_at DESC').bind(user.id).all();
  const templates = (res.results || []).map((t: any) => {
    let config = {};
    try {
      config = typeof t.style_config === 'string' ? JSON.parse(t.style_config) : (t.style_config || {});
    } catch {
      config = {};
    }
    return { ...t, style_config: config };
  });

  return jsonSuccess({ templates });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  // 1. Entitlement check
  const check = await canCreateTemplate(user.id, locals);
  if (!check.allowed) {
    return jsonError('PLAN_LIMIT_REACHED', check.reason || 'Template limit reached for your plan.', 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const name = body.name?.trim();
  const description = body.description?.trim() || null;
  const styleConfig = body.styleConfig || {};

  if (!name) {
    return jsonError('VALIDATION_ERROR', 'Template name is required.', 400);
  }

  const db = getDb(locals);
  const id = `tpl_${crypto.randomUUID()}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO templates (id, user_id, name, description, style_config, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      user.id,
      name,
      description,
      JSON.stringify(styleConfig),
      now,
      now
    ).run();

    return jsonSuccess({
      message: 'Template saved successfully.',
      template: {
        id,
        userId: user.id,
        name,
        description,
        styleConfig,
        createdAt: now,
      },
    }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to save template.', 500);
  }
};
