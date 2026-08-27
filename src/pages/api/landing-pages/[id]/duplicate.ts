import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { canCreateLandingPage } from '../../../../lib/billing/entitlements';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

function generateShortCode(): string {
  const chars = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export const POST: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const check = await canCreateLandingPage(user.id, locals);
  if (!check.allowed) {
    return jsonError('PLAN_LIMIT_REACHED', check.reason || 'Landing page limit reached.', 403);
  }

  const id = params.id;
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT * FROM landing_pages WHERE id = ?').bind(id).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Landing page not found.', 404);

  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  const newId = `lp_${crypto.randomUUID()}`;
  const newSlug = `p_${generateShortCode()}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO landing_pages (
        id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      newId,
      user.id,
      null, // Fresh clone without connected QR
      existing.type,
      newSlug,
      `${existing.title} (Copy)`,
      existing.content_json,
      existing.design_json,
      'draft',
      now,
      now
    ).run();

    return jsonSuccess({
      message: 'Landing page duplicated successfully.',
      page: {
        id: newId,
        slug: newSlug,
        title: `${existing.title} (Copy)`,
      },
    }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to duplicate landing page.', 500);
  }
};
