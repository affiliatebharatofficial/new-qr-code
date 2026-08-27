import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { parseSessionCookie, verifySessionToken } from '../../../lib/auth/jwt';

export const GET: APIRoute = async ({ request, locals }) => {
  const sessionToken = parseSessionCookie(request.headers.get('cookie'));
  const user = sessionToken ? await verifySessionToken(sessionToken) : null;
  if (!user || user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const db = getDb(locals);
  const userCount = await db.prepare('SELECT COUNT(*) as count FROM users').all();
  const qrCount = await db.prepare('SELECT COUNT(*) as count FROM qr_codes').all();
  const scanCount = await db.prepare('SELECT COUNT(*) as count FROM qr_scans').all();

  return new Response(JSON.stringify({
    success: true,
    users: userCount.results?.[0]?.count || 0,
    qrs: qrCount.results?.[0]?.count || 0,
    scans: scanCount.results?.[0]?.count || 0,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
