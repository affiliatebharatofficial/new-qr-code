import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getR2Storage } from '../../../../lib/storage/r2';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { updateQrSchema } from '../../../../lib/validation/schemas';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const GET: APIRoute = async ({ params, request, locals }) => {
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

  // IDOR Protection: strictly verify ownership
  if (qr.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'You do not have permission to access this QR code.', 403);
  }

  let styleConfig = {};
  try {
    styleConfig = typeof qr.style_config === 'string' ? JSON.parse(qr.style_config) : (qr.style_config || {});
  } catch {
    styleConfig = {};
  }

  return jsonSuccess({
    qr: {
      ...qr,
      style_config: styleConfig,
    },
  });
};

export const PUT: APIRoute = async ({ params, request, locals }) => {
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

  // IDOR Protection
  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'You do not have permission to modify this QR code.', 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const validation = updateQrSchema.safeParse(body);
  if (!validation.success) {
    return jsonError('VALIDATION_ERROR', validation.error.errors[0]?.message || 'Invalid update parameters.', 400);
  }

  const { name, payload, destination, styleConfig, status } = validation.data;
  const now = Date.now();

  try {
    await db.prepare(`
      UPDATE qr_codes SET
        name = COALESCE(?, name),
        payload = COALESCE(?, payload),
        destination = COALESCE(?, destination),
        style_config = COALESCE(?, style_config),
        status = COALESCE(?, status),
        updated_at = ?
      WHERE id = ? AND user_id = ?
    `).bind(
      name ? name.trim() : null,
      payload || null,
      destination || null,
      styleConfig ? JSON.stringify(styleConfig) : null,
      status || null,
      now,
      id,
      existing.user_id
    ).run();

    return jsonSuccess({
      message: 'QR Code updated successfully.',
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to update QR code.', 500);
  }
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const id = params.id;
  const db = getDb(locals);
  const r2 = getR2Storage(locals);

  const qrRes = await db.prepare('SELECT * FROM qr_codes WHERE id = ?').bind(id).all();
  const existing = qrRes.results?.[0];
  if (!existing) {
    return jsonError('NOT_FOUND', 'QR Code not found.', 404);
  }

  // IDOR Protection
  if (existing.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'You do not have permission to delete this QR code.', 403);
  }

  try {
    // 1. Fetch attached assets and delete from R2
    const assetsRes = await db.prepare('SELECT r2_key FROM qr_assets WHERE qr_id = ?').bind(id).all();
    for (const asset of assetsRes.results || []) {
      if (asset.r2_key) {
        await r2.delete(asset.r2_key);
      }
    }

    // 2. Delete DB records
    await db.prepare('DELETE FROM qr_assets WHERE qr_id = ?').bind(id).run();
    await db.prepare('DELETE FROM qr_scans WHERE qr_id = ?').bind(id).run();
    await db.prepare('DELETE FROM qr_codes WHERE id = ? AND user_id = ?').bind(id, existing.user_id).run();

    return jsonSuccess({
      message: 'QR Code deleted successfully.',
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to delete QR code.', 500);
  }
};
