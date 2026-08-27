import type { APIRoute } from 'astro';
import { getR2Storage, validateLogoUpload, generateAssetKey, sanitizeSvgContent } from '../../../../lib/storage/r2';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required to persist logos.', 401);
  }

  const qrId = params.id;
  const db = getDb(locals);

  // If attaching to existing QR, verify ownership
  if (qrId && qrId !== 'temp') {
    const qrRes = await db.prepare('SELECT user_id FROM qr_codes WHERE id = ?').bind(qrId).all();
    const qr = qrRes.results?.[0];
    if (qr && qr.user_id !== user.id && user.role !== 'admin') {
      return jsonError('FORBIDDEN', 'You do not have permission to attach logos to this QR code.', 403);
    }
  }

  const formData = await request.formData();
  const file = formData.get('logo') as File | null;

  if (!file) {
    return jsonError('MISSING_FILE', 'No logo file provided.', 400);
  }

  const validation = validateLogoUpload(file);
  if (!validation.valid) {
    return jsonError('INVALID_FILE', validation.error || 'Invalid logo file.', 400);
  }

  const r2 = getR2Storage(locals);
  const ext = file.name.split('.').pop() || 'png';
  const assetKey = generateAssetKey(user.id, 'logos', ext);
  const assetId = `ast_${crypto.randomUUID()}`;
  const now = Date.now();

  try {
    let arrayBuffer: ArrayBuffer;

    // Sanitize SVG before storing
    if (file.type === 'image/svg+xml') {
      const rawText = await file.text();
      const cleanSvg = sanitizeSvgContent(rawText);
      arrayBuffer = new TextEncoder().encode(cleanSvg).buffer;
    } else {
      arrayBuffer = await file.arrayBuffer();
    }

    await r2.put(assetKey, arrayBuffer, {
      httpMetadata: { contentType: file.type },
    });

    await db.prepare(`
      INSERT INTO qr_assets (id, qr_id, user_id, r2_key, asset_type, mime_type, file_size, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      assetId,
      qrId && qrId !== 'temp' ? qrId : null,
      user.id,
      assetKey,
      'logo',
      file.type,
      arrayBuffer.byteLength,
      now
    ).run();

    return jsonSuccess({
      message: 'Logo uploaded and persisted successfully.',
      assetId,
      assetKey,
      mimeType: file.type,
    }, 201);
  } catch (err: any) {
    return jsonError('STORAGE_ERROR', 'Failed to upload logo asset.', 500);
  }
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const qrId = params.id;
  const db = getDb(locals);
  const r2 = getR2Storage(locals);

  // IDOR Protection
  const assetsRes = await db.prepare('SELECT id, r2_key, user_id FROM qr_assets WHERE qr_id = ?').bind(qrId).all();
  const assets = assetsRes.results || [];

  for (const asset of assets) {
    if (asset.user_id === user.id || user.role === 'admin') {
      if (asset.r2_key) {
        await r2.delete(asset.r2_key);
      }
      await db.prepare('DELETE FROM qr_assets WHERE id = ?').bind(asset.id).run();
    }
  }

  return jsonSuccess({
    message: 'Logo asset deleted.',
  });
};
