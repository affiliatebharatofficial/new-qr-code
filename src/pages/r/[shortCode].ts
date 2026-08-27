import type { APIRoute } from 'astro';
import { getDb } from '../../lib/db/client';
import { extractScanContext } from '../../lib/analytics/tracker';

function renderStatusPage(title: string, message: string, statusCode = 404): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; text-align: center; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 24px; padding: 40px 32px; max-width: 420px; width: 100%; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
    .icon { width: 56px; height: 56px; border-radius: 16px; background: rgba(99, 102, 241, 0.15); color: #818cf8; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
    h1 { font-size: 20px; font-weight: 700; margin: 0 0 8px; }
    p { font-size: 14px; color: #94a3b8; line-height: 1.5; margin: 0 0 24px; }
    a { display: inline-block; background: #6366f1; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 20px; border-radius: 12px; transition: background 0.15s; }
    a:hover { background: #4f46e5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">
      <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="/">Create a QR Code</a>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: statusCode,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}

export const GET: APIRoute = async ({ params, request, locals }) => {
  const shortCode = params.shortCode;
  if (!shortCode) {
    return renderStatusPage('Invalid QR Code', 'The requested QR link is malformed.', 400);
  }

  const db = getDb(locals);

  try {
    // 1. Fast D1 Lookup
    const qrRes = await db.prepare(
      'SELECT id, destination, status, expires_at FROM qr_codes WHERE short_code = ?'
    ).bind(shortCode).all();

    const qr = qrRes.results?.[0];
    if (!qr) {
      return renderStatusPage('QR Code Not Found', 'This QR code link does not exist or has been removed.', 404);
    }

    if (qr.status === 'paused') {
      return renderStatusPage('QR Code Unavailable', 'This QR code is currently paused by its owner.', 403);
    }

    if (qr.status === 'deleted') {
      return renderStatusPage('QR Code Removed', 'This QR code link is no longer available.', 410);
    }

    if (qr.expires_at && Date.now() >= qr.expires_at) {
      return renderStatusPage('QR Code Expired', 'This QR code campaign has expired.', 410);
    }

    let destination = qr.destination || 'https://freeqrcode-generator.com';
    if (!/^https?:\/\//i.test(destination.trim())) {
      destination = `https://${destination.trim()}`;
    }

    // 2. Non-blocking Analytics Logging
    const cf = (locals as any)?.runtime?.cf;
    const scanId = `scn_${crypto.randomUUID()}`;
    const scannedAt = Date.now();

    // Fire and forget scan recording
    try {
      const scanContext = await extractScanContext(request, cf);
      await db.prepare(`
        INSERT INTO qr_scans (id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        scanId,
        qr.id,
        scannedAt,
        scanContext.country,
        scanContext.region,
        scanContext.city,
        scanContext.deviceType,
        scanContext.browser,
        scanContext.os,
        scanContext.referrer,
        scanContext.ipHash
      ).run();
    } catch {
      // Analytics failure must never break redirect
    }

    // 3. Temporary 302 Redirect with no-cache headers
    return new Response(null, {
      status: 302,
      headers: {
        Location: destination,
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        Pragma: 'no-cache',
      },
    });
  } catch (err: any) {
    return renderStatusPage('Server Error', 'Failed to resolve destination redirect.', 500);
  }
};
