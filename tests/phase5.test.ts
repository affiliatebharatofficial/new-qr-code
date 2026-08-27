import { describe, it, expect, beforeEach } from 'vitest';
import { getDb } from '../src/lib/db/client';
import { PLANS, getPlanConfig } from '../src/lib/billing/plans';
import { getUserEntitlements, canCreateSavedQr, canCreateDynamicQr } from '../src/lib/billing/entitlements';
import { verifyLemonSqueezySignature, mapSubscriptionStatus, mapPlanFromVariant } from '../src/lib/billing/lemonsqueezy';
import { hashPassword } from '../src/lib/auth/jwt';

describe('Phase 5: Monetization, Plans, Usage Limits & Lemon Squeezy', () => {
  const db = getDb();

  const userFree = {
    id: 'usr_phase5_free',
    email: 'free_user@example.com',
    name: 'Free User',
    role: 'user' as const,
    plan: 'free' as const,
  };

  const userPro = {
    id: 'usr_phase5_pro',
    email: 'pro_user@example.com',
    name: 'Pro User',
    role: 'user' as const,
    plan: 'pro' as const,
  };

  beforeEach(async () => {
    await db.prepare('DELETE FROM webhook_events').run();
    await db.prepare('DELETE FROM subscriptions').run();
    await db.prepare('DELETE FROM qr_scans').run();
    await db.prepare('DELETE FROM qr_codes').run();
    await db.prepare('DELETE FROM users').run();

    const now = Date.now();
    const hash = await hashPassword('Password123!');

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userFree.id, userFree.email, hash, userFree.name, userFree.role, userFree.plan, 'active', now, now).run();

    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(userPro.id, userPro.email, hash, userPro.name, userPro.role, userPro.plan, 'active', now, now).run();
  });

  describe('1. Plan Architecture & Configuration', () => {
    it('should have consistent limits across Free, Pro, and Business plans', () => {
      expect(PLANS.free.savedQrLimit).toBe(25);
      expect(PLANS.free.dynamicQrLimit).toBe(3);
      expect(PLANS.free.monthlyPrice).toBe(0);

      expect(PLANS.pro.savedQrLimit).toBe(500);
      expect(PLANS.pro.dynamicQrLimit).toBe(100);
      expect(PLANS.pro.monthlyPrice).toBe(9);

      expect(PLANS.business.savedQrLimit).toBeNull(); // Unlimited
      expect(PLANS.business.dynamicQrLimit).toBe(1000);
      expect(PLANS.business.monthlyPrice).toBe(29);
    });

    it('should safely fallback to Free plan for invalid plan identifiers', () => {
      expect(getPlanConfig('non_existent_plan').id).toBe('free');
      expect(getPlanConfig(null).id).toBe('free');
    });
  });

  describe('2. Entitlements & Usage Enforcement', () => {
    it('should allow dynamic QR creation when under free quota (0/3)', async () => {
      const check = await canCreateDynamicQr(userFree.id);
      expect(check.allowed).toBe(true);
    });

    it('should block dynamic QR creation when user reaches free quota (3/3)', async () => {
      const now = Date.now();

      // Insert 3 dynamic QR codes for userFree
      for (let i = 1; i <= 3; i++) {
        await db.prepare(`
          INSERT INTO qr_codes (id, user_id, short_code, name, type, payload, is_dynamic, status, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(`qr_free_dyn_${i}`, userFree.id, `code_${i}`, `Dynamic QR ${i}`, 'url', `https://freeqrcode-generator.com/r/code_${i}`, 1, 'active', now, now).run();
      }

      const check = await canCreateDynamicQr(userFree.id);
      expect(check.allowed).toBe(false);
      expect(check.reason).toContain('reached your limit of 3 dynamic QR codes');
    });

    it('should allow higher limits for Pro users', async () => {
      const now = Date.now();

      // Pro user has 5 dynamic QRs
      for (let i = 1; i <= 5; i++) {
        await db.prepare(`
          INSERT INTO qr_codes (id, user_id, short_code, name, type, payload, is_dynamic, status, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(`qr_pro_dyn_${i}`, userPro.id, `pro_code_${i}`, `Pro QR ${i}`, 'url', `https://freeqrcode-generator.com/r/pro_code_${i}`, 1, 'active', now, now).run();
      }

      const check = await canCreateDynamicQr(userPro.id);
      expect(check.allowed).toBe(true); // Pro allows up to 100
    });

    it('should calculate remaining quotas accurately in getUserEntitlements', async () => {
      const ent = await getUserEntitlements(userFree.id);
      expect(ent.plan.id).toBe('free');
      expect(ent.remainingDynamicQrs).toBe(3);
      expect(ent.remainingSavedQrs).toBe(25);
    });
  });

  describe('3. Lemon Squeezy HMAC Signature & Webhook Verification', () => {
    const secret = 'test-secret-key-12345';
    const samplePayload = JSON.stringify({
      meta: { event_name: 'subscription_created' },
      data: { id: '1001', type: 'subscriptions' },
    });

    it('should verify valid HMAC SHA-256 signature', async () => {
      const enc = new TextEncoder();
      const key = await crypto.subtle.importKey(
        'raw',
        enc.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );
      const signatureBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(samplePayload));
      const hexSignature = Array.from(new Uint8Array(signatureBuffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');

      const isValid = await verifyLemonSqueezySignature(samplePayload, hexSignature, secret);
      expect(isValid).toBe(true);
    });

    it('should reject invalid or tampered signatures', async () => {
      const isFakeValid = await verifyLemonSqueezySignature(samplePayload, 'fake_hex_signature_123', secret);
      expect(isFakeValid).toBe(false);
    });
  });

  describe('4. Subscription Lifecycle & Grace Period Handling', () => {
    it('should correctly map Lemon Squeezy subscription status', () => {
      expect(mapSubscriptionStatus('active')).toBe('active');
      expect(mapSubscriptionStatus('on_trial')).toBe('trialing');
      expect(mapSubscriptionStatus('past_due')).toBe('past_due');
      expect(mapSubscriptionStatus('cancelled')).toBe('cancelled');
      expect(mapSubscriptionStatus('expired')).toBe('expired');
    });

    it('should correctly map variant names to plan IDs', () => {
      expect(mapPlanFromVariant('QR Generator Pro Monthly')).toBe('pro');
      expect(mapPlanFromVariant('Business Agency Annual')).toBe('business');
      expect(mapPlanFromVariant('Standard Free')).toBe('free');
    });

    it('should honor cancellation grace period until current_period_end', async () => {
      const now = Date.now();
      const futurePeriodEnd = now + 15 * 24 * 60 * 60 * 1000; // 15 days remaining

      // User has cancelled subscription with active prepaid period
      await db.prepare(`
        INSERT INTO subscriptions (
          id, user_id, plan, provider, status, current_period_start, current_period_end, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('sub_cancelled_grace', userFree.id, 'pro', 'lemonsqueezy', 'cancelled', now - 15 * 24 * 60 * 60 * 1000, futurePeriodEnd, now, now).run();

      const ent = await getUserEntitlements(userFree.id);
      expect(ent.plan.id).toBe('pro'); // Still Pro during grace period!
      expect(ent.status).toBe('cancelled');
      expect(ent.currentPeriodEnd).toBe(futurePeriodEnd);
    });

    it('should downgrade after current_period_end expires', async () => {
      const now = Date.now();
      const pastPeriodEnd = now - 1000; // Expired 1 second ago

      await db.prepare(`
        INSERT INTO subscriptions (
          id, user_id, plan, provider, status, current_period_start, current_period_end, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind('sub_expired_test', userFree.id, 'pro', 'lemonsqueezy', 'cancelled', now - 30 * 24 * 60 * 60 * 1000, pastPeriodEnd, now, now).run();

      const ent = await getUserEntitlements(userFree.id);
      expect(ent.plan.id).toBe('free'); // Reverted to free after expiration
    });
  });
});
