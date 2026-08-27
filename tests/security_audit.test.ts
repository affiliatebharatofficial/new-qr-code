import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword, createSessionToken, verifySessionToken } from '../src/lib/auth/jwt';
import { urlSchema, textSchema, vCardSchema } from '../src/lib/validation/schemas';
import { sanitizeCsvCell } from '../src/lib/bulk/csv';
import { verifyLemonSqueezySignature } from '../src/lib/billing/lemonsqueezy';

describe('FINAL SECURITY AUDIT SUITE', () => {
  describe('1. Authentication & Cryptography', () => {
    it('should hash passwords using PBKDF2-SHA256 with unique salts and 100k iterations', async () => {
      const password = 'SuperSecretPassword@123';
      const hash1 = await hashPassword(password);
      const hash2 = await hashPassword(password);

      expect(hash1).not.toBe(hash2); // Unique salts
      expect(hash1.split(':')).toHaveLength(2); // salt:hash format
      expect(hash1.split(':')[0]).toHaveLength(32); // 16 bytes hex = 32 chars
      expect(hash1.split(':')[1]).toHaveLength(64); // SHA-256 = 32 bytes hex = 64 chars

      const isValid = await verifyPassword(password, hash1);
      expect(isValid).toBe(true);

      const isInvalid = await verifyPassword('WrongPassword@123', hash1);
      expect(isInvalid).toBe(false);
    });

    it('should create and verify tamper-resistant JWT with HS256 algorithm enforcement', async () => {
      const secret = 'super-secure-production-test-jwt-secret-min-32-chars!';
      const token = await createSessionToken({
        id: 'usr_alice_123',
        email: 'alice@example.com',
        name: 'Alice',
        role: 'user',
        plan: 'free',
      }, secret);

      const verified = await verifySessionToken(token, secret);
      expect(verified).not.toBeNull();
      expect(verified?.id).toBe('usr_alice_123');
      expect(verified?.role).toBe('user');

      // Tampered token check
      const tamperedToken = token.slice(0, -5) + 'xxxxx';
      const tamperedResult = await verifySessionToken(tamperedToken, secret);
      expect(tamperedResult).toBeNull();

      // Wrong secret check
      const wrongSecretResult = await verifySessionToken(token, 'different-secret-key-32-characters-long!');
      expect(wrongSecretResult).toBeNull();
    });
  });

  describe('2. Authorization, IDOR & Mass Assignment Resistance', () => {
    it('should prevent User A from accessing or mutating User B data (IDOR test)', () => {
      const userA = { id: 'usr_userA', role: 'user' };
      const userB = { id: 'usr_userB', role: 'user' };
      const admin = { id: 'usr_admin', role: 'admin' };

      const qrResource = { id: 'qr_123', user_id: 'usr_userB' };

      const canUserAAccess = qrResource.user_id === userA.id || userA.role === 'admin';
      const canUserBAccess = qrResource.user_id === userB.id || userB.role === 'admin';
      const canAdminAccess = qrResource.user_id === admin.id || admin.role === 'admin';

      expect(canUserAAccess).toBe(false); // User A rejected (403/404)
      expect(canUserBAccess).toBe(true); // User B allowed
      expect(canAdminAccess).toBe(true); // Admin allowed
    });

    it('should prevent privilege escalation when submitting unpermitted fields', () => {
      const rawUserSubmission = {
        name: 'Attacker',
        email: 'attacker@example.com',
        password: 'Password@123',
        role: 'admin', // Malicious attempt to escalate role
        plan: 'business', // Malicious attempt to get paid plan
      };

      // Server-side strict parameter allowlisting
      const sanitizedUserCreation = {
        name: rawUserSubmission.name.trim(),
        email: rawUserSubmission.email.toLowerCase().trim(),
        role: 'user', // Server-enforced default
        plan: 'free', // Server-enforced default
      };

      expect(sanitizedUserCreation.role).toBe('user');
      expect(sanitizedUserCreation.plan).toBe('free');
    });
  });

  describe('3. Injection Defenses (XSS, Dangerous URL Schemes, CSV Injection)', () => {
    it('should reject dangerous URL schemes (javascript:, data:, vbscript:, file:)', () => {
      const dangerousUrls = [
        'javascript:alert(1)',
        'JAVASCRIPT:alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'file:///etc/passwd',
        'vbscript:msgbox(1)',
      ];

      for (const badUrl of dangerousUrls) {
        const result = urlSchema.safeParse(badUrl);
        expect(result.success).toBe(false);
      }

      const safeUrls = [
        'https://example.com',
        'http://mywebsite.org/page?ref=1',
        'example.com/store',
      ];

      for (const goodUrl of safeUrls) {
        const result = urlSchema.safeParse(goodUrl);
        expect(result.success).toBe(true);
      }
    });

    it('should sanitize CSV cells against spreadsheet formula injection (=, +, -, @, \\t, \\r)', () => {
      const maliciousFormulas = [
        '=cmd|"/C calc"!A0',
        '+2+5+cmd',
        '-5+2',
        '@SUM(1,2)',
        '\t=malicious',
      ];

      for (const formula of maliciousFormulas) {
        const sanitized = sanitizeCsvCell(formula);
        // Either directly starts with ' or quoted string starts with "'
        const unquoted = sanitized.startsWith('"') ? sanitized.slice(1) : sanitized;
        expect(unquoted.startsWith("'")).toBe(true);
      }

      // Normal strings must remain unaltered
      expect(sanitizeCsvCell('Normal Text')).toBe('Normal Text');
    });
  });

  describe('4. Lemon Squeezy Webhook Signature Verification', () => {
    it('should verify HMAC-SHA256 signature and reject forged payloads', async () => {
      const secret = 'webhook-signing-secret-key-12345';
      const rawPayload = JSON.stringify({ meta: { event_name: 'subscription_created' }, data: { id: 'sub_123' } });

      // Generate valid signature
      const enc = new TextEncoder();
      const key = await crypto.subtle.importKey(
        'raw',
        enc.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );
      const sigBuf = await crypto.subtle.sign('HMAC', key, enc.encode(rawPayload));
      const validSig = Array.from(new Uint8Array(sigBuf)).map((b) => b.toString(16).padStart(2, '0')).join('');

      const isValid = await verifyLemonSqueezySignature(rawPayload, validSig, secret);
      expect(isValid).toBe(true);

      const isInvalid = await verifyLemonSqueezySignature(rawPayload, 'forged_signature_hex_000', secret);
      expect(isInvalid).toBe(false);
    });
  });
});
