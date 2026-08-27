import { describe, it, expect, beforeEach } from 'vitest';
import { getDb } from '../src/lib/db/client';
import { parseBulkCsv, sanitizeCsvCell, generateErrorCsv, generateExportCsv } from '../src/lib/bulk/csv';
import { canUseBulkQr, canCreateTemplate } from '../src/lib/billing/entitlements';
import { hashPassword } from '../src/lib/auth/jwt';

describe('Phase 6: Bulk QR Generation, Templates & Import/Export', () => {
  const db = getDb();

  const userFree = {
    id: 'usr_p6_free',
    email: 'free_p6@example.com',
    name: 'Free User P6',
    role: 'user' as const,
    plan: 'free' as const,
  };

  const userPro = {
    id: 'usr_p6_pro',
    email: 'pro_p6@example.com',
    name: 'Pro User P6',
    role: 'user' as const,
    plan: 'pro' as const,
  };

  beforeEach(async () => {
    await db.prepare('DELETE FROM templates').run();
    await db.prepare('DELETE FROM bulk_job_items').run();
    await db.prepare('DELETE FROM bulk_jobs').run();
    await db.prepare('DELETE FROM qr_codes').run();
    await db.prepare('DELETE FROM users').run();

    const now = Date.now();
    const hash = await hashPassword('TestPass123!');

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userFree.id, userFree.email, hash, userFree.name, userFree.role, userFree.plan, 'active', now, now).run();

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userPro.id, userPro.email, hash, userPro.name, userPro.role, userPro.plan, 'active', now, now).run();
  });

  describe('1. CSV Parsing, Validation & Formula Sanitization', () => {
    it('should parse valid CSV rows with headers', () => {
      const csv = `name,type,data\nGoogle,URL,https://google.com\nTwitter,URL,https://twitter.com\nWiFi Guest,WIFI,WIFI:S:Guest;P:Pass;;`;
      const res = parseBulkCsv(csv);

      expect(res.totalRows).toBe(3);
      expect(res.validRows.length).toBe(3);
      expect(res.invalidRows.length).toBe(0);
      expect(res.validRows[0].name).toBe('Google');
      expect(res.validRows[0].payload).toBe('https://google.com');
      expect(res.validRows[2].type).toBe('wifi');
    });

    it('should identify invalid rows and generate error report', () => {
      const csv = `name,type,data\nValid Site,URL,https://example.com\nMissing Data,URL,\nInvalid Dynamic,TEXT,Raw Text`;
      const res = parseBulkCsv(csv, true); // dynamic mode

      expect(res.validRows.length).toBe(1);
      expect(res.invalidRows.length).toBe(2);
      expect(res.errors.length).toBe(2);

      const errorCsv = generateErrorCsv(res.invalidRows);
      expect(errorCsv).toContain('Missing Data');
      expect(errorCsv).toContain('Invalid Dynamic');
    });

    it('should sanitize formula injection characters when exporting CSV cells', () => {
      expect(sanitizeCsvCell('=SUM(A1:A10)')).toBe("'=SUM(A1:A10)");
      expect(sanitizeCsvCell('+123456')).toBe("'+123456");
      expect(sanitizeCsvCell('-500')).toBe("'-500");
      expect(sanitizeCsvCell('@danger')).toBe("'@danger");
      expect(sanitizeCsvCell('Normal Text')).toBe('Normal Text');
    });

    it('should generate properly structured export CSV', () => {
      const qrs = [
        {
          name: 'My Website',
          type: 'url',
          is_dynamic: 1,
          payload: 'https://qrcode.page/r/abc123',
          destination: 'https://example.com',
          short_code: 'abc123',
          scans_count: 42,
          status: 'active',
          created_at: Date.now(),
        },
      ];

      const csv = generateExportCsv(qrs);
      expect(csv).toContain('name,type,is_dynamic,payload,destination,short_code,scans_count,status,created_at');
      expect(csv).toContain('My Website,url,1,https://qrcode.page/r/abc123,https://example.com,abc123,42,active');
    });
  });

  describe('2. Design Templates & Plan Limits', () => {
    it('should create and retrieve templates for user', async () => {
      const tplId = 'tpl_test_01';
      const now = Date.now();
      const style = { colors: { foreground: '#4f46e5', background: '#ffffff' }, dotType: 'rounded' };

      await db.prepare(`
        INSERT INTO templates (id, user_id, name, description, style_config, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(tplId, userFree.id, 'Indigo Brand Style', 'Brand template', JSON.stringify(style), now, now).run();

      const res = await db.prepare('SELECT * FROM templates WHERE id = ?').bind(tplId).all();
      expect(res.results?.length).toBe(1);
      expect((res.results?.[0] as any).name).toBe('Indigo Brand Style');
    });

    it('should isolate templates between User A and User B (IDOR Protection)', async () => {
      const tplId = 'tpl_private_pro';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO templates (id, user_id, name, description, style_config, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(tplId, userPro.id, 'Pro Private Template', 'Pro only', '{}', now, now).run();

      // Free user attempt
      const attempt = await db.prepare('SELECT * FROM templates WHERE id = ? AND user_id = ?').bind(tplId, userFree.id).all();
      expect(attempt.results?.length).toBe(0);
    });

    it('should enforce template plan quota', async () => {
      const now = Date.now();

      // Free plan allows 3 templates
      for (let i = 1; i <= 3; i++) {
        await db.prepare(`
          INSERT INTO templates (id, user_id, name, description, style_config, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `).bind(`tpl_free_${i}`, userFree.id, `Template ${i}`, '', '{}', now, now).run();
      }

      const check = await canCreateTemplate(userFree.id);
      expect(check.allowed).toBe(false);
      expect(check.reason).toContain('limit of 3 saved design templates');
    });
  });

  describe('3. Bulk QR Generation & Entitlement Controls', () => {
    it('should block bulk QR creation for Free users (quota: 0)', async () => {
      const check = await canUseBulkQr(userFree.id, 10);
      expect(check.allowed).toBe(false);
      expect(check.reason).toContain('Bulk QR generation is a Pro feature');
    });

    it('should allow bulk QR creation for Pro users within limits (50/500)', async () => {
      const check = await canUseBulkQr(userPro.id, 50);
      expect(check.allowed).toBe(true);
    });

    it('should reject bulk batches that exceed plan limits (600/500 for Pro)', async () => {
      const check = await canUseBulkQr(userPro.id, 600);
      expect(check.allowed).toBe(false);
      expect(check.reason).toContain('allows up to 500 QR codes per batch');
    });

    it('should record bulk jobs and job items in D1', async () => {
      const jobId = 'job_test_01';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO bulk_jobs (id, user_id, name, type, status, total_items, processed_items, successful_items, failed_items, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(jobId, userPro.id, 'Product Catalog Batch', 'static', 'completed', 2, 2, 2, 0, now).run();

      await db.prepare(`
        INSERT INTO bulk_job_items (id, job_id, row_number, name, type, payload, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('bji_1', jobId, 1, 'Product A', 'url', 'https://store.com/a', 'success', now).run();

      await db.prepare(`
        INSERT INTO bulk_job_items (id, job_id, row_number, name, type, payload, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('bji_2', jobId, 2, 'Product B', 'url', 'https://store.com/b', 'success', now).run();

      const job = (await db.prepare('SELECT * FROM bulk_jobs WHERE id = ?').bind(jobId).all()).results?.[0] as any;
      expect(job.status).toBe('completed');
      expect(job.total_items).toBe(2);

      const items = await db.prepare('SELECT * FROM bulk_job_items WHERE job_id = ?').bind(jobId).all();
      expect(items.results?.length).toBe(2);
    });
  });
});
