import type { APIRoute } from 'astro';
import { requireAdmin, recordAdminAudit } from '../../../../../lib/admin/audit';
import { getDb } from '../../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  const userId = params.id;
  if (!userId) return jsonError('BAD_REQUEST', 'User ID required.', 400);
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT id, email, plan, status FROM users WHERE id = ?').bind(userId).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'User not found.', 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const newPlan = body.plan || 'free';
  const reason = body.reason || 'Admin plan override / manual upgrade';
  const now = Date.now();

  try {
    await db.prepare('UPDATE users SET plan = ?, updated_at = ? WHERE id = ?').bind(newPlan, now, userId).run();

    // Also record / update or upsert in subscriptions table for traceability
    const existingSubRes = await db.prepare('SELECT id FROM subscriptions WHERE user_id = ?').bind(userId).all();
    const existingSub = existingSubRes.results?.[0] as any;

    if (existingSub) {
      await db.prepare(`
        UPDATE subscriptions 
        SET plan = ?, status = 'active', updated_at = ? 
        WHERE user_id = ?
      `).bind(newPlan, now, userId).run();
    } else {
      const subId = `sub_manual_${Date.now()}`;
      await db.prepare(`
        INSERT INTO subscriptions (id, user_id, plan, status, customer_id, current_period_end, cancel_at_period_end, created_at, updated_at)
        VALUES (?, ?, ?, 'active', 'manual_admin_grant', ?, 0, ?, ?)
      `).bind(subId, userId, newPlan, now + (365 * 24 * 60 * 60 * 1000), now, now).run();
    }

    await recordAdminAudit(
      admin.id,
      'user_plan_updated',
      'user',
      userId,
      { targetEmail: existing.email, previousPlan: existing.plan, newPlan, reason },
      locals
    );

    return jsonSuccess({
      message: `User plan successfully updated to ${newPlan.toUpperCase()}.`,
      plan: newPlan,
      userId,
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', err?.message || 'Failed to update user plan.', 500);
  }
};
