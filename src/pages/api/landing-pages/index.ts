import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { canCreateLandingPage } from '../../../lib/billing/entitlements';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

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
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const db = getDb(locals);
  const res = await db.prepare('SELECT * FROM landing_pages WHERE user_id = ? ORDER BY created_at DESC').bind(user.id).all();
  const pages = (res.results || []).map((p: any) => {
    let content = {};
    let design = {};
    try {
      content = typeof p.content_json === 'string' ? JSON.parse(p.content_json) : (p.content_json || {});
      design = typeof p.design_json === 'string' ? JSON.parse(p.design_json) : (p.design_json || {});
    } catch {
      content = {};
      design = {};
    }
    return { ...p, content_json: content, design_json: design };
  });

  return jsonSuccess({ pages });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const check = await canCreateLandingPage(user.id, locals);
  if (!check.allowed) {
    return jsonError('PLAN_LIMIT_REACHED', check.reason || 'Landing page limit reached.', 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const type = body.type || 'business_card';
  const title = body.title?.trim() || 'Untitled Page';
  const content = body.content || {};
  const design = body.design || { theme: 'light', primaryColor: '#4f46e5' };
  const status = body.status === 'draft' ? 'draft' : 'published';

  const db = getDb(locals);
  const pageId = `lp_${crypto.randomUUID()}`;
  const slug = `p_${generateShortCode()}`;
  const now = Date.now();

  const host = request.headers.get('host') || 'qrcode.page';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const publicPageUrl = `${proto}://${host}/p/${slug}`;

  // Optionally create linked dynamic QR code
  const qrId = `qr_${crypto.randomUUID()}`;
  const qrShortCode = generateShortCode();
  const dynamicRedirectUrl = `${proto}://${host}/r/${qrShortCode}`;

  try {
    // 1. Create Dynamic QR pointing to public page
    await db.prepare(`
      INSERT INTO qr_codes (
        id, user_id, short_code, name, type, destination, payload, is_dynamic, status, scans_count, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      qrId,
      user.id,
      qrShortCode,
      `QR: ${title}`,
      'url',
      publicPageUrl,
      dynamicRedirectUrl,
      1,
      'active',
      0,
      now,
      now
    ).run();

    // 2. Create Landing Page
    await db.prepare(`
      INSERT INTO landing_pages (
        id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      pageId,
      user.id,
      qrId,
      type,
      slug,
      title,
      JSON.stringify(content),
      JSON.stringify(design),
      status,
      now,
      now
    ).run();

    return jsonSuccess({
      message: 'Landing page created successfully.',
      page: {
        id: pageId,
        slug,
        title,
        type,
        status,
        publicUrl: publicPageUrl,
        qrId,
        qrShortCode,
        dynamicRedirectUrl,
      },
    }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to create landing page.', 500);
  }
};
