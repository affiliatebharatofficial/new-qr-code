import type { APIRoute } from 'astro';
import { requireAdmin, recordAdminAudit } from '../../../../../lib/admin/audit';
import { getDb } from '../../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  const pageId = params.id;
  if (!pageId) return jsonError('BAD_REQUEST', 'Page ID required.', 400);
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT id, title, status, user_id FROM landing_pages WHERE id = ?').bind(pageId).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Landing page not found.', 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const newStatus = body.status === 'disabled' ? 'unpublished' : 'published';
  const reason = body.reason || 'Admin moderation';
  const now = Date.now();

  try {
    await db.prepare('UPDATE landing_pages SET status = ?, updated_at = ? WHERE id = ?').bind(newStatus, now, pageId).run();

    await recordAdminAudit(
      admin.id,
      newStatus === 'unpublished' ? 'landing_page_disabled' : 'landing_page_enabled',
      'landing_page',
      pageId,
      { pageTitle: existing.title, ownerId: existing.user_id, reason },
      locals
    );

    return jsonSuccess({
      message: `Landing page is now ${newStatus}.`,
      status: newStatus,
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to update landing page status.', 500);
  }
};
