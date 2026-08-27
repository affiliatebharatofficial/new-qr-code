import type { APIRoute } from 'astro';
import { getDb } from '../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const POST: APIRoute = async ({ params, request, locals }) => {
  const pageId = params.id;
  const db = getDb(locals);

  const existingRes = await db.prepare('SELECT id FROM landing_pages WHERE id = ? OR slug = ?').bind(pageId, pageId).all();
  const existing = existingRes.results?.[0] as any;
  if (!existing) return jsonError('NOT_FOUND', 'Page not found.', 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed payload.', 400);
  }

  const reason = body.reason?.trim();
  const description = body.description?.trim() || '';

  if (!reason) {
    return jsonError('VALIDATION_ERROR', 'Please select a reason for the report.', 400);
  }

  const reportId = `rep_${crypto.randomUUID()}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO landing_page_reports (id, page_id, reason, description, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      reportId,
      existing.id,
      reason,
      description,
      now
    ).run();

    return jsonSuccess({ message: 'Thank you. The report has been submitted for review.' });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to submit report.', 500);
  }
};
