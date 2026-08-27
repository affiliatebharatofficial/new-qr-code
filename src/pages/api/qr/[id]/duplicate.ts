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
  const existing = qrRes.results?.[0];
  if (!existing) {
    return jsonError('NOT_FOUND', 'QR Code not found.', 404);
  }

  // IDOR Protection: only allow owner to duplicate
  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'You do not have permission to duplicate this QR code.', 403);
  }

  const newId = `qr_${crypto.randomUUID()}`;
  const newName = `${existing.name} (Copy)`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO qr_codes (
        id, user_id, short_code, name, type, destination, payload, style_config, is_dynamic, status, scans_count, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      newId,
      user.id,
      null, // static duplicate
      newName,
      existing.type,
      existing.destination || null,
      existing.payload,
      existing.style_config,
      0, // clone as static
      'active',
      0,
      now,
      now
    ).run();

    return jsonSuccess({
      message: 'QR Code duplicated successfully.',
      qr: {
        id: newId,
        name: newName,
        type: existing.type,
        payload: existing.payload,
      },
    }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to duplicate QR code.', 500);
  }
};
