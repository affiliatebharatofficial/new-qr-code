import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/admin/audit';
import { getDb } from '../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const POST: APIRoute = async ({ request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const { contactId, note } = body;
  if (!contactId || !note) {
    return jsonError('VALIDATION_ERROR', 'Contact ID and Note text are required.', 400);
  }

  const db = getDb(locals);
  const noteId = `note_${Date.now()}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO crm_notes (id, contact_id, admin_id, admin_name, note, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(noteId, contactId, admin.id, admin.name || admin.email, note.trim(), now).run();

    return jsonSuccess({ message: 'Note added successfully.', noteId }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', err?.message || 'Failed to add CRM note.', 500);
  }
};
