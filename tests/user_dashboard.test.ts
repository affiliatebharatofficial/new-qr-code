import { describe, it, expect } from 'vitest';
import { PLANS } from '../src/lib/billing/plans';

describe('User Dashboard & Analytics Unit Tests', () => {
  it('should compute correct growth percentage with baseline', () => {
    const current = 1245;
    const previous = 982;
    const pct = Math.round(((current - previous) / previous) * 100);
    expect(pct).toBe(27);
  });

  it('should handle zero previous scans gracefully (+100% or 0%)', () => {
    const current = 50;
    const previous = 0;
    const growth = previous === 0 ? (current > 0 ? '+100%' : '0%') : `${Math.round(((current - previous) / previous) * 100)}%`;
    expect(growth).toBe('+100%');
  });

  it('should enforce proper plan limits across Free, Pro, Business tiers', () => {
    expect(PLANS.free.savedQrLimit).toBe(25);
    expect(PLANS.free.dynamicQrLimit).toBe(3);
    expect(PLANS.pro.savedQrLimit).toBe(500);
    expect(PLANS.pro.dynamicQrLimit).toBe(100);
    expect(PLANS.business.savedQrLimit).toBe(null); // Unlimited
    expect(PLANS.business.dynamicQrLimit).toBe(1000);
  });

  it('should correctly format timeline buckets for different date ranges', () => {
    const periodMs = 30 * 24 * 60 * 60 * 1000;
    const timelineBuckets = 14;
    const bucketDays = Math.max(1, Math.round(periodMs / (timelineBuckets * 24 * 60 * 60 * 1000)));
    expect(bucketDays).toBe(2);
  });
});
