import { describe, it, expect, beforeEach } from 'vitest';
import { getDb } from '../src/lib/db/client';
import { canCreateLandingPage } from '../src/lib/billing/entitlements';
import { hashPassword } from '../src/lib/auth/jwt';
import { buildVCardPayload, buildEventPayload } from '../src/lib/qr/payloads';

describe('Phase 8: QR Landing Pages & Use-Case QR', () => {
  const db = getDb();

  const userFree = {
    id: 'usr_p8_free',
    email: 'free_p8@example.com',
    name: 'Free User P8',
    role: 'user' as const,
    plan: 'free' as const,
  };

  const userPro = {
    id: 'usr_p8_pro',
    email: 'pro_p8@example.com',
    name: 'Pro User P8',
    role: 'user' as const,
    plan: 'pro' as const,
  };

  beforeEach(async () => {
    await db.prepare('DELETE FROM landing_page_reports').run();
    await db.prepare('DELETE FROM landing_pages').run();
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

  describe('1. Landing Page CRUD & Dynamic QR Linkage', () => {
    it('should create a landing page and store JSON content', async () => {
      const pageId = 'lp_test_01';
      const slug = 'p_test01';
      const now = Date.now();
      const content = { name: 'Alex Morgan', title: 'Product Director', phone: '+15551234567' };
      const design = { theme: 'dark', primaryColor: '#4f46e5' };

      await db.prepare(`
        INSERT INTO landing_pages (id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(pageId, userFree.id, null, 'business_card', slug, 'Alex Morgan Card', JSON.stringify(content), JSON.stringify(design), 'published', now, now).run();

      const res = await db.prepare('SELECT * FROM landing_pages WHERE slug = ?').bind(slug).all();
      expect(res.results?.length).toBe(1);
      const row = res.results?.[0] as any;
      expect(row.title).toBe('Alex Morgan Card');
      expect(row.type).toBe('business_card');
      expect(row.status).toBe('published');
    });

    it('should update landing page details and toggle status', async () => {
      const pageId = 'lp_test_02';
      const slug = 'p_test02';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO landing_pages (id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(pageId, userPro.id, null, 'menu', slug, 'Downtown Bistro Menu', '{}', '{}', 'published', now, now).run();

      // Unpublish page
      await db.prepare('UPDATE landing_pages SET status = ?, updated_at = ? WHERE id = ?').bind('unpublished', Date.now(), pageId).run();

      const res = await db.prepare('SELECT status FROM landing_pages WHERE id = ?').bind(pageId).all();
      expect((res.results?.[0] as any).status).toBe('unpublished');
    });

    it('should isolate landing page data between users (IDOR Protection)', async () => {
      const pageId = 'lp_pro_private';
      const slug = 'p_pro01';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO landing_pages (id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(pageId, userPro.id, null, 'product', slug, 'Pro Product', '{}', '{}', 'published', now, now).run();

      const attempt = await db.prepare('SELECT * FROM landing_pages WHERE id = ? AND user_id = ?').bind(pageId, userFree.id).all();
      expect(attempt.results?.length).toBe(0);
    });
  });

  describe('2. Plan Limits & Entitlements', () => {
    it('should allow 1 landing page on Free plan and block excess', async () => {
      const check1 = await canCreateLandingPage(userFree.id);
      expect(check1.allowed).toBe(true);

      // Create 1 page for Free user
      await db.prepare(`
        INSERT INTO landing_pages (id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('lp_free_1', userFree.id, null, 'contact', 'p_free1', 'Free Contact', '{}', '{}', 'published', Date.now(), Date.now()).run();

      const check2 = await canCreateLandingPage(userFree.id);
      expect(check2.allowed).toBe(false);
      expect(check2.reason).toContain('limit of 1 hosted landing pages');
    });

    it('should allow up to 25 landing pages on Pro plan', async () => {
      const check = await canCreateLandingPage(userPro.id);
      expect(check.allowed).toBe(true);
    });
  });

  describe('3. Action Payloads (vCard & Calendar Sync)', () => {
    it('should generate vCard download string from landing page data', () => {
      const card = buildVCardPayload({
        firstName: 'Sarah',
        lastName: 'Connor',
        company: 'Cyberdyne Resistance',
        phone: '+15559876543',
        email: 'sarah@example.com',
      });

      expect(card).toContain('BEGIN:VCARD');
      expect(card).toContain('FN:Sarah Connor');
      expect(card).toContain('TEL;TYPE=CELL,VOICE:+15559876543');
    });

    it('should generate iCalendar .ics format from event landing page data', () => {
      const event = buildEventPayload({
        title: 'Launch Keynote 2026',
        startDate: '2026-11-20',
        startTime: '14:00',
        location: 'Auditorium 1',
        description: 'Product release announcement',
      });

      expect(event).toContain('BEGIN:VCALENDAR');
      expect(event).toContain('SUMMARY:Launch Keynote 2026');
      expect(event).toContain('DTSTART:20261120T140000');
    });
  });

  describe('4. Abuse Reporting System', () => {
    it('should store abuse reports for public pages in D1', async () => {
      const pageId = 'lp_abuse_target';
      const repId = 'rep_01';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO landing_pages (id, user_id, qr_id, type, slug, title, content_json, design_json, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(pageId, userPro.id, null, 'review', 'p_abuse01', 'Review Target', '{}', '{}', 'published', now, now).run();

      await db.prepare(`
        INSERT INTO landing_page_reports (id, page_id, reason, description, created_at)
        VALUES (?, ?, ?, ?, ?)
      `).bind(repId, pageId, 'spam', 'Contains phishing URL', now).run();

      const repRes = await db.prepare('SELECT * FROM landing_page_reports WHERE page_id = ?').bind(pageId).all();
      expect(repRes.results?.length).toBe(1);
      expect((repRes.results?.[0] as any).reason).toBe('spam');
    });
  });
});
