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

  const existingRes = await db.prepare('SELECT id, email, status FROM users WHERE id = ?').bind(userId).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'User not found.', 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const newStatus = body.status === 'disabled' ? 'disabled' : 'active';
  const reason = body.reason || 'Admin status change';
  const now = Date.now();

  try {
    await db.prepare('UPDATE users SET status = ?, updated_at = ? WHERE id = ?').bind(newStatus, now, userId).run();

    await recordAdminAudit(
      admin.id,
      newStatus === 'disabled' ? 'user_disabled' : 'user_enabled',
      'user',
      userId,
      { targetEmail: existing.email, reason },
      locals
    );

    return jsonSuccess({
      message: `User account is now ${newStatus}.`,
      status: newStatus,
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to update user status.', 500);
  }
};
