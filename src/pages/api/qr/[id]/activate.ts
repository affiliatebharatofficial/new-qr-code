import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const id = params.id;
  const db = getDb(locals);

  const qrRes = await db.prepare('SELECT * FROM qr_codes WHERE id = ?').bind(id).all();
  const qr = qrRes.results?.[0];
  if (!qr) {
    return jsonError('NOT_FOUND', 'QR Code not found.', 404);
  }

  if (qr.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'Permission denied.', 403);
  }

  const now = Date.now();
  await db.prepare('UPDATE qr_codes SET status = ?, updated_at = ? WHERE id = ?').bind('active', now, id).run();

  return jsonSuccess({
    message: 'QR Code activated.',
    status: 'active',
  });
};
