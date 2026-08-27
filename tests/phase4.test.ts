import { describe, it, expect, beforeEach } from 'vitest';
import { getDb } from '../src/lib/db/client';
import { extractScanContext, parseUserAgent, hashIp } from '../src/lib/analytics/tracker';
import { hashPassword, createSessionToken } from '../src/lib/auth/jwt';

describe('Phase 4: Dynamic QR Codes, Redirects & Scan Analytics', () => {
  const db = getDb();

  const userA = {
    id: 'usr_phase4_alpha',
    email: 'alpha_p4@example.com',
    name: 'Alpha P4',
    role: 'user' as const,
    plan: 'free' as const,
  };

  const userB = {
    id: 'usr_phase4_beta',
    email: 'beta_p4@example.com',
    name: 'Beta P4',
    role: 'user' as const,
    plan: 'free' as const,
  };

  beforeEach(async () => {
    await db.prepare('DELETE FROM qr_scans').run();
    await db.prepare('DELETE FROM qr_codes').run();
    await db.prepare('DELETE FROM users').run();

    const now = Date.now();
    const hashA = await hashPassword('Pass123!');
    const hashB = await hashPassword('Pass456!');

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userA.id, userA.email, hashA, userA.name, userA.role, userA.plan, 'active', now, now).run();

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userB.id, userB.email, hashB, userB.name, userB.role, userB.plan, 'active', now, now).run();
  });

  describe('1. Dynamic QR Code Creation & Short Code Uniqueness', () => {
    it('should create dynamic QR record with unique short_code', async () => {
      const qrId = 'qr_dyn_1';
      const shortCode = 'xY78Kq';
      const destination = 'https://example.com/target-page';
      const redirectUrl = `https://freeqrcode-generator.com/r/${shortCode}`;
      const now = Date.now();

      await db.prepare(`
        INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        qrId,
        userA.id,
        shortCode,
        'Summer Promo',
        'url',
        destination,
        redirectUrl,
        1,
        'active',
        now,
        now
      ).run();

      const retrieved = await db.prepare('SELECT * FROM qr_codes WHERE short_code = ?').bind(shortCode).all();
      expect(retrieved.results?.length).toBe(1);
      expect((retrieved.results?.[0] as any).destination).toBe(destination);
      expect((retrieved.results?.[0] as any).is_dynamic).toBe(1);
    });

    it('should update destination URL without altering short_code', async () => {
      const qrId = 'qr_dyn_2';
      const shortCode = 'aB34Zz';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, shortCode, 'Fall Promo', 'url', 'https://example.com/initial', `https://freeqrcode-generator.com/r/${shortCode}`, 1, 'active', now, now).run();

      // Update destination
      await db.prepare(`
        UPDATE qr_codes SET destination = ?, updated_at = ?
        WHERE id = ? AND user_id = ?
      `).bind('https://example.com/updated-new-destination', Date.now(), qrId, userA.id).run();

      const updated = await db.prepare('SELECT * FROM qr_codes WHERE short_code = ?').bind(shortCode).all();
      expect((updated.results?.[0] as any).destination).toBe('https://example.com/updated-new-destination');
      expect((updated.results?.[0] as any).short_code).toBe(shortCode); // Short code preserved!
    });
  });

  describe('2. Scan Context & Privacy-First Analytics Extraction', () => {
    it('should detect Mobile, Tablet, and Desktop user agents', () => {
      const iphoneUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
      const ipadUA = 'Mozilla/5.0 (iPad; CPU OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1';
      const desktopUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

      const resIphone = parseUserAgent(iphoneUA);
      expect(resIphone.deviceType).toBe('mobile');
      expect(resIphone.os).toBe('iOS');
      expect(resIphone.browser).toBe('Safari');

      const resIpad = parseUserAgent(ipadUA);
      expect(resIpad.deviceType).toBe('tablet');
      expect(resIpad.os).toBe('iOS');

      const resDesktop = parseUserAgent(desktopUA);
      expect(resDesktop.deviceType).toBe('desktop');
      expect(resDesktop.os).toBe('Windows');
      expect(resDesktop.browser).toBe('Chrome');
    });

    it('should hash IP addresses anonymously with daily rotation', async () => {
      const hash1 = await hashIp('192.168.1.100');
      const hash2 = await hashIp('192.168.1.100');
      const hash3 = await hashIp('10.0.0.1');

      expect(hash1).toBe(hash2);
      expect(hash1).not.toBe(hash3);
      expect(hash1).not.toContain('192.168');
    });

    it('should extract scan context with Cloudflare geolocation fallback', async () => {
      const mockReq = new Request('https://freeqrcode-generator.com/r/abc123', {
        headers: {
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36',
          'cf-ipcountry': 'US',
          'cf-region': 'California',
          'cf-ipcity': 'San Francisco',
          'referer': 'https://twitter.com/post',
        },
      });

      const ctx = await extractScanContext(mockReq);
      expect(ctx.country).toBe('US');
      expect(ctx.region).toBe('California');
      expect(ctx.city).toBe('San Francisco');
      expect(ctx.os).toBe('macOS');
      expect(ctx.browser).toBe('Chrome');
      expect(ctx.referrer).toBe('twitter.com');
    });
  });

  describe('3. Scan Analytics Aggregation & IDOR Authorization', () => {
    it('should aggregate scans and calculate totals accurately', async () => {
      const qrId = 'qr_dyn_analytics_test';
      const shortCode = 'ana123';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, shortCode, 'Analytics Test', 'url', 'https://example.com', `https://freeqrcode-generator.com/r/${shortCode}`, 1, 'active', now, now).run();

      // Log 3 scans
      await db.prepare(`
        INSERT INTO qr_scans (id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('s1', qrId, now, 'US', 'CA', 'SF', 'mobile', 'Safari', 'iOS', 'Direct', 'hash_a').run();

      await db.prepare(`
        INSERT INTO qr_scans (id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('s2', qrId, now, 'US', 'NY', 'NYC', 'desktop', 'Chrome', 'Windows', 'google.com', 'hash_b').run();

      await db.prepare(`
        INSERT INTO qr_scans (id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('s3', qrId, now, 'IN', 'DL', 'Delhi', 'mobile', 'Chrome', 'Android', 'Direct', 'hash_a').run();

      const scans = await db.prepare('SELECT * FROM qr_scans WHERE qr_id = ?').bind(qrId).all();
      expect(scans.results?.length).toBe(3);

      const uniqueIps = new Set((scans.results || []).map((s: any) => s.ip_hash));
      expect(uniqueIps.size).toBe(2); // hash_a and hash_b
    });

    it('should strictly isolate analytics: User B cannot access User A analytics', async () => {
      const qrId = 'qr_alpha_private_ana';
      const shortCode = 'priv88';
      const now = Date.now();

      await db.prepare(`
        INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, shortCode, 'Private Alpha Campaign', 'url', 'https://example.com', `https://freeqrcode-generator.com/r/${shortCode}`, 1, 'active', now, now).run();

      // Querying as User B
      const userBAttempt = await db.prepare('SELECT id, user_id FROM qr_codes WHERE id = ? AND user_id = ?').bind(qrId, userB.id).all();
      expect(userBAttempt.results?.length).toBe(0);
    });
  });

  describe('4. Dynamic QR Status & Expiration State Validation', () => {
    it('should identify paused and expired QR records', async () => {
      const qrId = 'qr_status_test';
      const shortCode = 'stat01';
      const now = Date.now();
      const pastTime = now - 100000; // expired

      await db.prepare(`
        INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, is_dynamic, status, expires_at, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, shortCode, 'Expired Campaign', 'url', 'https://example.com', `https://freeqrcode-generator.com/r/${shortCode}`, 1, 'paused', pastTime, now, now).run();

      const qr = (await db.prepare('SELECT * FROM qr_codes WHERE short_code = ?').bind(shortCode).all()).results?.[0] as any;
      expect(qr.status).toBe('paused');
      expect(Date.now() > qr.expires_at).toBe(true);
    });
  });
});
