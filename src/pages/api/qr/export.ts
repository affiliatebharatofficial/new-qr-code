import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { generateExportCsv } from '../../../lib/bulk/csv';
import { jsonError } from '../../../lib/api/response';

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const url = new URL(request.url);
  const format = url.searchParams.get('format')?.toLowerCase() || 'csv';

  const db = getDb(locals);
  const res = await db.prepare(
    'SELECT name, type, is_dynamic, payload, destination, short_code, scans_count, status, created_at, updated_at FROM qr_codes WHERE user_id = ? ORDER BY created_at DESC'
  ).bind(user.id).all();

  const qrs = res.results || [];

  if (format === 'json') {
    return new Response(JSON.stringify({ qrs }, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="qr-codes-export-${Date.now()}.json"`,
      },
    });
  }

  const csv = generateExportCsv(qrs);
  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="qr-codes-export-${Date.now()}.csv"`,
    },
  });
};
