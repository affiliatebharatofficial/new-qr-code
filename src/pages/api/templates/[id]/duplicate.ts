import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { canCreateTemplate } from '../../../../lib/billing/entitlements';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const check = await canCreateTemplate(user.id, locals);
  if (!check.allowed) {
    return jsonError('PLAN_LIMIT_REACHED', check.reason || 'Template limit reached.', 403);
  }

  const id = params.id;
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT * FROM templates WHERE id = ?').bind(id).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Template not found.', 404);

  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  const newId = `tpl_${crypto.randomUUID()}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO templates (id, user_id, name, description, style_config, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      newId,
      user.id,
      `${existing.name} (Copy)`,
      existing.description,
      existing.style_config,
      now,
      now
    ).run();

    return jsonSuccess({
      message: 'Template duplicated successfully.',
      template: {
        id: newId,
        name: `${existing.name} (Copy)`,
      },
    }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to duplicate template.', 500);
  }
};
