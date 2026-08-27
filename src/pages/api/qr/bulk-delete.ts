import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const POST: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const ids = body?.ids;
  if (!Array.isArray(ids) || ids.length === 0) {
    return jsonError('VALIDATION_ERROR', 'No QR IDs provided for deletion.', 400);
  }

  const db = getDb(locals);
  let deletedCount = 0;

  for (const id of ids) {
    // Strict IDOR ownership check
    const checkRes = await db.prepare('SELECT id FROM qr_codes WHERE id = ? AND user_id = ?').bind(id, user.id).all();
    if (checkRes.results && checkRes.results.length > 0) {
      await db.prepare('DELETE FROM qr_codes WHERE id = ?').bind(id).run();
      deletedCount++;
    }
  }

  return jsonSuccess({
    message: `Successfully deleted ${deletedCount} QR code${deletedCount === 1 ? '' : 's'}.`,
    deletedCount,
  });
};
