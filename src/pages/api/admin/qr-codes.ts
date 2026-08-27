import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { parseSessionCookie, verifySessionToken } from '../../../lib/auth/jwt';

export const POST: APIRoute = async ({ request, locals }) => {
  const sessionToken = parseSessionCookie(request.headers.get('cookie'));
  const user = sessionToken ? await verifySessionToken(sessionToken) : null;
  if (!user || user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { qrId, status } = await request.json();
  if (!qrId || !status) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
  }

  const db = getDb(locals);
  await db.prepare('UPDATE qr_codes SET status = ?, updated_at = ? WHERE id = ?').bind(status, Date.now(), qrId).run();

  return new Response(JSON.stringify({ success: true, message: 'QR status updated.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
