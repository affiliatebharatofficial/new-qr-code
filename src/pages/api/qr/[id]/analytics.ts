import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { getCurrentUser } from '../../../../lib/auth/jwt';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const GET: APIRoute = async ({ params, request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const id = params.id;
  const db = getDb(locals);

  // Check ownership
  const qrRes = await db.prepare('SELECT id, user_id, name, type, short_code, destination, status FROM qr_codes WHERE id = ?').bind(id).all();
  const qr = qrRes.results?.[0];
  if (!qr) {
    return jsonError('NOT_FOUND', 'QR Code not found.', 404);
  }

  // IDOR Protection: verify user ownership
  if (qr.user_id !== user.id && user.role !== 'admin') {
    return jsonError('FORBIDDEN', 'You do not have permission to view analytics for this QR code.', 403);
  }

  // Fetch scan records
  const scansRes = await db.prepare('SELECT * FROM qr_scans WHERE qr_id = ? ORDER BY scanned_at DESC').bind(id).all();
  const scans = scansRes.results || [];

  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;

  let todayCount = 0;
  let last7dCount = 0;
  let last30dCount = 0;

  const uniqueIps = new Set<string>();
  const devicesMap: Record<string, number> = {};
  const countriesMap: Record<string, number> = {};
  const browsersMap: Record<string, number> = {};
  const osMap: Record<string, number> = {};
  const referrersMap: Record<string, number> = {};

  // Build daily timeline for the last 30 days
  const timelineMap: Record<string, number> = {};
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now - i * 24 * 60 * 60 * 1000);
    const dateKey = d.toISOString().split('T')[0];
    timelineMap[dateKey] = 0;
  }

  for (const s of scans) {
    if (s.ip_hash) uniqueIps.add(s.ip_hash);

    if (s.scanned_at >= oneDayAgo) todayCount++;
    if (s.scanned_at >= sevenDaysAgo) last7dCount++;
    if (s.scanned_at >= thirtyDaysAgo) last30dCount++;

    const dateKey = new Date(s.scanned_at).toISOString().split('T')[0];
    if (timelineMap[dateKey] !== undefined) {
      timelineMap[dateKey]++;
    }

    const dev = s.device_type || 'Unknown';
    devicesMap[dev] = (devicesMap[dev] || 0) + 1;

    const c = s.country || 'Unknown';
    countriesMap[c] = (countriesMap[c] || 0) + 1;

    const b = s.browser || 'Unknown';
    browsersMap[b] = (browsersMap[b] || 0) + 1;

    const o = s.os || 'Unknown';
    osMap[o] = (osMap[o] || 0) + 1;

    const r = s.referrer || 'Direct';
    referrersMap[r] = (referrersMap[r] || 0) + 1;
  }

  const timeline = Object.entries(timelineMap).map(([date, count]) => ({ date, count }));
  const topCountries = Object.entries(countriesMap).map(([country, count]) => ({ country, count })).sort((a, b) => b.count - a.count);
  const topDevices = Object.entries(devicesMap).map(([device, count]) => ({ device, count })).sort((a, b) => b.count - a.count);
  const topBrowsers = Object.entries(browsersMap).map(([browser, count]) => ({ browser, count })).sort((a, b) => b.count - a.count);
  const topOs = Object.entries(osMap).map(([os, count]) => ({ os, count })).sort((a, b) => b.count - a.count);
  const topReferrers = Object.entries(referrersMap).map(([referrer, count]) => ({ referrer, count })).sort((a, b) => b.count - a.count);

  return jsonSuccess({
    summary: {
      totalScans: scans.length,
      uniqueScans: uniqueIps.size,
      today: todayCount,
      last7d: last7dCount,
      last30d: last30dCount,
    },
    qr: {
      id: qr.id,
      name: qr.name,
      type: qr.type,
      shortCode: qr.short_code,
      destination: qr.destination,
      status: qr.status,
    },
    timeline,
    countries: topCountries,
    devices: topDevices,
    browsers: topBrowsers,
    operatingSystems: topOs,
    referrers: topReferrers,
  });
};
