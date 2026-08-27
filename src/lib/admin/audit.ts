import { getDb } from '../db/client';
import { getCurrentUser, type UserSessionPayload } from '../auth/jwt';

export type AdminAuditAction =
  | 'user_disabled'
  | 'user_enabled'
  | 'qr_disabled'
  | 'qr_enabled'
  | 'landing_page_disabled'
  | 'landing_page_enabled'
  | 'report_resolved'
  | 'report_dismissed'
  | 'template_deleted';

export type AdminResourceType = 'user' | 'qr_code' | 'landing_page' | 'abuse_report' | 'template';

/**
 * Ensures the incoming request is made by an authenticated administrator.
 * Throws an error or returns null if not an admin.
 */
export async function requireAdmin(request: Request, locals?: any): Promise<UserSessionPayload | null> {
  const user = await getCurrentUser(request, locals);
  if (!user || user.role !== 'admin') {
    return null;
  }
  return user;
}

/**
 * Appends an immutable audit log entry for tracking platform moderation operations.
 */
export async function recordAdminAudit(
  adminUserId: string,
  action: AdminAuditAction,
  resourceType: AdminResourceType,
  resourceId: string,
  metadata?: Record<string, any>,
  locals?: any
): Promise<void> {
  const db = getDb(locals);
  const logId = `audit_${crypto.randomUUID()}`;
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO admin_audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      logId,
      adminUserId,
      action,
      resourceType,
      resourceId,
      metadata ? JSON.stringify(metadata) : null,
      now
    ).run();
  } catch (err) {
    // Non-blocking fallback in dev / mock environment
    console.error('Failed to append admin audit log:', err);
  }
}
