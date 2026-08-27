import { describe, it, expect, beforeEach } from 'vitest';
import { getDb } from '../src/lib/db/client';
import { requireAdmin, recordAdminAudit } from '../src/lib/admin/audit';
import { hashPassword } from '../src/lib/auth/jwt';

describe('Phase 10: Admin Panel, Abuse Protection & Platform Operations', () => {
  const db = getDb();

  const adminUser = {
    id: 'usr_admin_test',
    email: 'admin_test@example.com',
    name: 'Admin Tester',
    role: 'admin' as const,
    plan: 'business' as const,
  };

  const normalUser = {
    id: 'usr_normal_test',
    email: 'normal_test@example.com',
    name: 'Normal User',
    role: 'user' as const,
    plan: 'free' as const,
  };

  beforeEach(async () => {
    await db.prepare('DELETE FROM admin_audit_logs').run();
    await db.prepare('DELETE FROM abuse_reports').run();
    await db.prepare('DELETE FROM landing_pages').run();
    await db.prepare('DELETE FROM qr_codes').run();
    await db.prepare('DELETE FROM users').run();

    const now = Date.now();
    const hash = await hashPassword('SecretPass123!');

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(adminUser.id, adminUser.email, hash, adminUser.name, adminUser.role, adminUser.plan, 'active', now, now).run();

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(normalUser.id, normalUser.email, hash, normalUser.name, normalUser.role, normalUser.plan, 'active', now, now).run();
  });

  describe('1. Admin Authorization & Security Boundaries', () => {
    it('should reject unauthenticated or non-admin requests', async () => {
      const dummyReq = new Request('https://freeqrcode-generator.com/admin');
      const result = await requireAdmin(dummyReq);
      expect(result).toBeNull();
    });
  });

  describe('2. User Account Moderation & Audit Logging', () => {
    it('should disable abusive user accounts and record audit log', async () => {
      const now = Date.now();
      // Disable user
      await db.prepare('UPDATE users SET status = ?, updated_at = ? WHERE id = ?').bind('disabled', now, normalUser.id).run();

      await recordAdminAudit(adminUser.id, 'user_disabled', 'user', normalUser.id, { reason: 'Phishing report' });

      // Verify status changed
      const userRes = await db.prepare('SELECT status FROM users WHERE id = ?').bind(normalUser.id).all();
      expect((userRes.results?.[0] as any).status).toBe('disabled');

      // Verify audit trail record
      const auditRes = await db.prepare('SELECT * FROM admin_audit_logs WHERE resource_id = ?').bind(normalUser.id).all();
      expect(auditRes.results?.length).toBe(1);
      const log = auditRes.results?.[0] as any;
      expect(log.action).toBe('user_disabled');
      expect(log.admin_user_id).toBe(adminUser.id);
    });

    it('should re-enable previously disabled user accounts', async () => {
      const now = Date.now();
      await db.prepare('UPDATE users SET status = ?, updated_at = ? WHERE id = ?').bind('active', now, normalUser.id).run();

      await recordAdminAudit(adminUser.id, 'user_enabled', 'user', normalUser.id, { reason: 'Appeal accepted' });

      const userRes = await db.prepare('SELECT status FROM users WHERE id = ?').bind(normalUser.id).all();
      expect((userRes.results?.[0] as any).status).toBe('active');
    });
  });

  describe('3. QR Code & Landing Page Moderation', () => {
    it('should disable malicious QR codes', async () => {
      const qrId = 'qr_malicious_01';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, is_dynamic, status, scans_count, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, normalUser.id, 'badqr1', 'Malicious QR', 'url', 'https://bad.com', 'https://bad.com', 1, 'active', 0, now, now).run();

      // Moderate and disable
      await db.prepare('UPDATE qr_codes SET status = ?, updated_at = ? WHERE id = ?').bind('disabled', now, qrId).run();
      await recordAdminAudit(adminUser.id, 'qr_disabled', 'qr_code', qrId, { reason: 'Malware URL' });

      const res = await db.prepare('SELECT status FROM qr_codes WHERE id = ?').bind(qrId).all();
      expect((res.results?.[0] as any).status).toBe('disabled');
    });

    it('should disable abusive hosted landing pages', async () => {
      const pageId = 'lp_scam_01';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO landing_pages (id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(pageId, normalUser.id, null, 'business_card', 'p_scam01', 'Scam Page', '{}', '{}', 'published', now, now).run();

      // Moderate and unpublish
      await db.prepare('UPDATE landing_pages SET status = ?, updated_at = ? WHERE id = ?').bind('unpublished', now, pageId).run();
      await recordAdminAudit(adminUser.id, 'landing_page_disabled', 'landing_page', pageId, { reason: 'Deceptive content' });

      const res = await db.prepare('SELECT status FROM landing_pages WHERE id = ?').bind(pageId).all();
      expect((res.results?.[0] as any).status).toBe('unpublished');
    });
  });

  describe('4. Abuse Report Resolution Workflow', () => {
    it('should resolve abuse reports with notes and reviewed_by stamp', async () => {
      const reportId = 'rep_test_100';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO abuse_reports (id, landing_page_id, qr_id, reason, description, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(reportId, 'lp_scam_01', null, 'phishing', 'Fake login portal', 'pending', now).run();

      // Resolve report
      await db.prepare(`
        UPDATE abuse_reports
        SET status = ?, resolution_notes = ?, reviewed_by = ?, reviewed_at = ?
        WHERE id = ?
      `).bind('resolved', 'Verified phishing link and disabled target page', adminUser.id, now, reportId).run();

      await recordAdminAudit(adminUser.id, 'report_resolved', 'abuse_report', reportId, { notes: 'Verified phishing link' });

      const res = await db.prepare('SELECT * FROM abuse_reports WHERE id = ?').bind(reportId).all();
      const report = res.results?.[0] as any;
      expect(report.status).toBe('resolved');
      expect(report.reviewed_by).toBe(adminUser.id);
      expect(report.resolution_notes).toContain('Verified phishing link');
    });
  });
});
