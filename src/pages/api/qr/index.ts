import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { saveQrSchema } from '../../../lib/validation/schemas';
import { canCreateSavedQr, canCreateDynamicQr } from '../../../lib/billing/entitlements';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

// Generate secure unambiguous short codes
function generateShortCode(): string {
  const chars = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const url = new URL(request.url);
  const search = url.searchParams.get('q')?.trim().toLowerCase() || '';
  const typeFilter = url.searchParams.get('type')?.trim().toLowerCase() || '';
  const limit = Math.min(Number(url.searchParams.get('limit')) || 50, 100);
  const offset = Number(url.searchParams.get('offset')) || 0;

  const db = getDb(locals);

  let query = 'SELECT * FROM qr_codes WHERE user_id = ?';
  const params: any[] = [user.id];

  if (typeFilter) {
    query += ' AND type = ?';
    params.push(typeFilter);
  }

  if (search) {
    query += ' AND (LOWER(name) LIKE ? OR LOWER(payload) LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }

  query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);

  try {
    const qrs = await db.prepare(query).bind(...params).all();
    
    // Parse style_config safely
    const formatted = (qrs.results || []).map((qr: any) => {
      let config = {};
      try {
        config = typeof qr.style_config === 'string' ? JSON.parse(qr.style_config) : (qr.style_config || {});
      } catch {
        config = {};
      }
      return {
        ...qr,
        style_config: config,
      };
    });

    return jsonSuccess({
      results: formatted,
      count: formatted.length,
      limit,
      offset,
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to retrieve saved QR codes.', 500);
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Please log in to save your QR codes.', 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const validation = saveQrSchema.safeParse(body);
  if (!validation.success) {
    return jsonError('VALIDATION_ERROR', validation.error.errors[0]?.message || 'Invalid QR configuration.', 400);
  }

  const { name, type, payload, destination, styleConfig, isDynamic } = validation.data;

  // 1. Server-side Plan & Entitlement Enforcement
  if (isDynamic) {
    const dynamicCheck = await canCreateDynamicQr(user.id, locals);
    if (!dynamicCheck.allowed) {
      return jsonError('PLAN_LIMIT_REACHED', dynamicCheck.reason || 'Dynamic QR limit reached for your plan.', 403);
    }
  } else {
    const saveCheck = await canCreateSavedQr(user.id, locals);
    if (!saveCheck.allowed) {
      return jsonError('PLAN_LIMIT_REACHED', saveCheck.reason || 'Saved QR limit reached for your plan.', 403);
    }
  }

  const db = getDb(locals);
  const id = `qr_${crypto.randomUUID()}`;
  const now = Date.now();
  let finalShortCode: string | null = null;
  let finalPayload = payload;
  let finalDestination = destination || payload;

  if (isDynamic) {
    // Generate collision-resistant unique short code
    let unique = false;
    let attempts = 0;
    while (!unique && attempts < 5) {
      attempts++;
      const candidate = generateShortCode();
      const existing = await db.prepare('SELECT id FROM qr_codes WHERE short_code = ?').bind(candidate).all();
      if (!existing.results || existing.results.length === 0) {
        finalShortCode = candidate;
        unique = true;
      }
    }

    if (!finalShortCode) {
      return jsonError('COLLISION_ERROR', 'Failed to generate unique short code. Please try again.', 500);
    }

    const host = request.headers.get('host') || 'freeqrcode-generator.com';
    const proto = request.headers.get('x-forwarded-proto') || 'https';
    finalPayload = `${proto}://${host}/r/${finalShortCode}`;
  }

  try {
    await db.prepare(`
      INSERT INTO qr_codes (
        id, user_id, short_code, name, type, destination, payload, style_config, is_dynamic, status, scans_count, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      user.id,
      finalShortCode,
      name.trim(),
      type,
      isDynamic ? finalDestination : (destination || null),
      finalPayload,
      JSON.stringify(styleConfig || {}),
      isDynamic ? 1 : 0,
      'active',
      0,
      now,
      now
    ).run();

    return jsonSuccess({
      message: 'QR code saved successfully.',
      qr: {
        id,
        userId: user.id,
        shortCode: finalShortCode,
        name: name.trim(),
        type,
        payload: finalPayload,
        destination: isDynamic ? finalDestination : (destination || null),
        styleConfig,
        isDynamic,
        createdAt: now,
      },
    }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to save QR code to database.', 500);
  }
};
