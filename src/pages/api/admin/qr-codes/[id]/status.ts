import type { APIRoute } from 'astro';
import { requireAdmin, recordAdminAudit } from '../../../../../lib/admin/audit';
import { getDb } from '../../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  const qrId = params.id;
  if (!qrId) return jsonError('BAD_REQUEST', 'QR ID required.', 400);
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT id, name, status, user_id FROM qr_codes WHERE id = ?').bind(qrId).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'QR code not found.', 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const newStatus = body.status === 'disabled' ? 'disabled' : 'active';
  const reason = body.reason || 'Admin moderation';
  const now = Date.now();

  try {
    await db.prepare('UPDATE qr_codes SET status = ?, updated_at = ? WHERE id = ?').bind(newStatus, now, qrId).run();

    await recordAdminAudit(
      admin.id,
      newStatus === 'disabled' ? 'qr_disabled' : 'qr_enabled',
      'qr_code',
      qrId,
      { qrName: existing.name, ownerId: existing.user_id, reason },
      locals
    );

    return jsonSuccess({
      message: `QR code is now ${newStatus}.`,
      status: newStatus,
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to update QR status.', 500);
  }
};
