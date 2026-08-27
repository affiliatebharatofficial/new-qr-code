import type { APIRoute } from 'astro';
import { requireAdmin, recordAdminAudit } from '../../../../lib/admin/audit';
import { getDb } from '../../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../../lib/api/response';

export const GET: APIRoute = async ({ request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  const db = getDb(locals);
  const contactsRes = await db.prepare(`
    SELECT c.*, COUNT(n.id) as notes_count 
    FROM crm_contacts c
    LEFT JOIN crm_notes n ON c.id = n.contact_id
    GROUP BY c.id
    ORDER BY c.created_at DESC
  `).all();

  return jsonSuccess({ contacts: contactsRes.results || [] });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const admin = await requireAdmin(request, locals);
  if (!admin) return jsonError('FORBIDDEN', 'Administrator access required.', 403);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const { name, email, company, status = 'lead', plan = 'free', source = 'admin_entry', tag } = body;
  if (!name || !email) {
    return jsonError('VALIDATION_ERROR', 'Name and Email are required.', 400);
  }

  const db = getDb(locals);
  const contactId = `crm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO crm_contacts (id, name, email, company, status, plan, source, assigned_admin, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(contactId, name, email.toLowerCase().trim(), company || '', status, plan, source, admin.name || admin.email, now, now).run();

    if (tag) {
      const tagId = `tag_${Date.now()}`;
      await db.prepare('INSERT INTO crm_tags (id, contact_id, tag_name, created_at) VALUES (?, ?, ?, ?)').bind(tagId, contactId, tag, now).run();
    }

    await recordAdminAudit(
      admin.id,
      'crm_contact_created',
      'crm_contact',
      contactId,
      { name, email, company, status, plan },
      locals
    );

    return jsonSuccess({ message: 'CRM contact created successfully.', contactId }, 201);
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', err?.message || 'Failed to create CRM contact.', 500);
  }
};
