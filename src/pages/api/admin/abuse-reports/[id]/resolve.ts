import type { APIRoute } from 'astro';
import { requireAdmin, recordAdminAudit } from '../../../../../lib/admin/audit';
import { getDb } from '../../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  const reportId = params.id;
  if (!reportId) return jsonError('BAD_REQUEST', 'Report ID required.', 400);
  const db = getDb(locals);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const action = body.action || 'resolved'; // 'resolved' | 'dismissed'
  const notes = body.notes?.trim() || '';
  const now = Date.now();

  try {
    await db.prepare(`
      UPDATE abuse_reports
      SET status = ?, resolution_notes = ?, reviewed_by = ?, reviewed_at = ?
      WHERE id = ?
    `).bind(action, notes, admin.id, now, reportId).run();

    await recordAdminAudit(
      admin.id,
      action === 'resolved' ? 'report_resolved' : 'report_dismissed',
      'abuse_report',
      reportId,
      { notes },
      locals
    );

    return jsonSuccess({
      message: `Report has been marked as ${action}.`,
      status: action,
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to resolve abuse report.', 500);
  }
};
