import { describe, it, expect, beforeEach } from 'vitest';
import { hashPassword, verifyPassword, createSessionToken, verifySessionToken } from '../src/lib/auth/jwt';
import { getDb } from '../src/lib/db/client';
import { getR2Storage, validateLogoUpload, sanitizeSvgContent, generateAssetKey } from '../src/lib/storage/r2';
import { saveQrSchema, signupSchema, loginSchema, updateQrSchema } from '../src/lib/validation/schemas';

describe('Phase 3: Authentication, D1, R2, Saved QR & Dashboard', () => {
  const testDb = getDb();
  const testR2 = getR2Storage();

  const userA = {
    id: 'usr_test_user_a',
    email: 'user_a@example.com',
    name: 'User Alpha',
    role: 'user' as const,
    plan: 'free' as const,
  };

  const userB = {
    id: 'usr_test_user_b',
    email: 'user_b@example.com',
    name: 'User Beta',
    role: 'user' as const,
    plan: 'free' as const,
  };

  beforeEach(async () => {
    // Reset test database records
    await testDb.prepare('DELETE FROM qr_assets').run();
    await testDb.prepare('DELETE FROM qr_codes').run();
    await testDb.prepare('DELETE FROM users').run();

    // Seed users
    const hashA = await hashPassword('Password123!');
    const hashB = await hashPassword('SecretKey456!');
    const now = Date.now();

    await testDb.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userA.id, userA.email, hashA, userA.name, userA.role, userA.plan, 'active', now, now).run();

    await testDb.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userB.id, userB.email, hashB, userB.name, userB.role, userB.plan, 'active', now, now).run();
  });

  describe('1. Authentication & Session Handling', () => {
    it('should hash and verify passwords correctly with PBKDF2', async () => {
      const raw = 'SuperSecret!123';
      const hash = await hashPassword(raw);
      expect(hash).toContain(':');
      expect(await verifyPassword(raw, hash)).toBe(true);
      expect(await verifyPassword('WrongPassword', hash)).toBe(false);
    });

    it('should validate signup schema with password matching', () => {
      const valid = signupSchema.safeParse({
        name: 'Alice',
        email: 'alice@example.com',
        password: 'StrongPassword123!',
        confirmPassword: 'StrongPassword123!',
      });
      expect(valid.success).toBe(true);

      const mismatch = signupSchema.safeParse({
        name: 'Alice',
        email: 'alice@example.com',
        password: 'StrongPassword123!',
        confirmPassword: 'DifferentPassword123!',
      });
      expect(mismatch.success).toBe(false);
    });

    it('should create and verify JWT session tokens', async () => {
      const token = await createSessionToken(userA);
      const verified = await verifySessionToken(token);
      expect(verified).not.toBeNull();
      expect(verified?.id).toBe(userA.id);
      expect(verified?.email).toBe(userA.email);
    });
  });

  describe('2. QR Code CRUD & Ownership Isolation (IDOR Protection)', () => {
    it('should allow User A to create and retrieve their own QR code', async () => {
      const qrId = 'qr_alpha_1';
      const now = Date.now();
      const styleConfig = { colors: { foreground: '#000000', background: '#ffffff' } };

      await testDb.prepare(`
        INSERT INTO qr_codes (id, user_id, name, type, payload, style_config, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, 'Alpha Website', 'url', 'https://alpha.example.com', JSON.stringify(styleConfig), 0, 'active', now, now).run();

      const userAQrs = await testDb.prepare('SELECT * FROM qr_codes WHERE user_id = ?').bind(userA.id).all();
      expect(userAQrs.results?.length).toBe(1);
      expect((userAQrs.results?.[0] as any).name).toBe('Alpha Website');
    });

    it('should enforce strict ownership: User B cannot see or query User A QR codes', async () => {
      const qrId = 'qr_alpha_secret';
      const now = Date.now();

      await testDb.prepare(`
        INSERT INTO qr_codes (id, user_id, name, type, payload, style_config, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, 'Alpha Private WiFi', 'wifi', 'WIFI:S:AlphaNet;;', '{}', 0, 'active', now, now).run();

      // Querying as User B
      const userBQrs = await testDb.prepare('SELECT * FROM qr_codes WHERE id = ? AND user_id = ?').bind(qrId, userB.id).all();
      expect(userBQrs.results?.length).toBe(0);
    });

    it('should allow User A to duplicate their QR code with a new ID', async () => {
      const origId = 'qr_alpha_to_clone';
      const now = Date.now();

      await testDb.prepare(`
        INSERT INTO qr_codes (id, user_id, name, type, payload, style_config, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(origId, userA.id, 'Original Campaign', 'url', 'https://campaign.example.com', '{}', 0, 'active', now, now).run();

      const cloneId = 'qr_alpha_cloned';
      const cloneName = 'Original Campaign (Copy)';

      await testDb.prepare(`
        INSERT INTO qr_codes (id, user_id, name, type, payload, style_config, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(cloneId, userA.id, cloneName, 'url', 'https://campaign.example.com', '{}', 0, 'active', now, now).run();

      const count = await testDb.prepare('SELECT COUNT(*) as total FROM qr_codes WHERE user_id = ?').bind(userA.id).all();
      expect((count.results?.[0] as any).total).toBe(2);
    });

    it('should allow User A to delete their QR code and clean up records', async () => {
      const qrId = 'qr_alpha_to_delete';
      const now = Date.now();

      await testDb.prepare(`
        INSERT INTO qr_codes (id, user_id, name, type, payload, style_config, is_dynamic, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(qrId, userA.id, 'Temporary QR', 'text', 'Note', '{}', 0, 'active', now, now).run();

      await testDb.prepare('DELETE FROM qr_codes WHERE id = ? AND user_id = ?').bind(qrId, userA.id).run();

      const deleted = await testDb.prepare('SELECT * FROM qr_codes WHERE id = ?').bind(qrId).all();
      expect(deleted.results?.length).toBe(0);
    });
  });

  describe('3. R2 Logo Storage & SVG Security', () => {
    it('should validate logo file formats and reject unsupported MIME types', () => {
      const validPng = new File(['mock_png'], 'logo.png', { type: 'image/png' });
      expect(validateLogoUpload(validPng).valid).toBe(true);

      const validSvg = new File(['<svg></svg>'], 'logo.svg', { type: 'image/svg+xml' });
      expect(validateLogoUpload(validSvg).valid).toBe(true);

      const invalidExe = new File(['malware'], 'setup.exe', { type: 'application/x-msdownload' });
      expect(validateLogoUpload(invalidExe).valid).toBe(false);
    });

    it('should sanitize dangerous SVG elements and scripts', () => {
      const dirtySvg = `<svg xmlns="http://www.w3.org/2000/svg">
        <script>alert("XSS")</script>
        <circle cx="50" cy="50" r="40" onload="alert(1)" />
        <foreignObject width="100" height="50">
          <body xmlns="http://www.w3.org/1999/xhtml"><script>alert(2)</script></body>
        </foreignObject>
      </svg>`;

      const cleanSvg = sanitizeSvgContent(dirtySvg);
      expect(cleanSvg).not.toContain('<script');
      expect(cleanSvg).not.toContain('onload');
      expect(cleanSvg).not.toContain('<foreignObject');
      expect(cleanSvg).toContain('<circle');
    });

    it('should generate secure storage keys without raw user filenames', () => {
      const key = generateAssetKey(userA.id, 'logos', 'png');
      expect(key).toMatch(new RegExp(`^users/${userA.id}/logos/[a-f0-9]+\\.png$`));
      expect(key).not.toContain('..');
    });

    it('should store and retrieve logo assets in R2 storage', async () => {
      const key = generateAssetKey(userA.id, 'logos', 'png');
      const testData = new Uint8Array([137, 80, 78, 71]); // PNG magic bytes

      await testR2.put(key, testData);
      const retrieved = await testR2.get(key);
      expect(retrieved).not.toBeNull();
      expect(retrieved.size).toBe(4);

      await testR2.delete(key);
      const afterDelete = await testR2.get(key);
      expect(afterDelete).toBeNull();
    });
  });
});
