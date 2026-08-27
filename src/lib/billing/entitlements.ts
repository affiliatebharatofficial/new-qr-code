import { getDb } from '../db/client';
import { getPlanConfig, type PlanConfig, type PlanId } from './plans';

export interface UserUsage {
  savedQrCount: number;
  dynamicQrCount: number;
  logoStorageBytes: number;
  templateCount: number;
  landingPageCount: number;
}

export interface UserEntitlements {
  plan: PlanConfig;
  status: 'active' | 'trialing' | 'past_due' | 'cancelled' | 'expired' | 'free';
  currentPeriodEnd: number | null;
  usage: UserUsage;
  canCreateSavedQr: boolean;
  canCreateDynamicQr: boolean;
  canUploadLogo: boolean;
  canUseBulkQr: boolean;
  canCreateTemplate: boolean;
  canCreateLandingPage: boolean;
  maxSavedQrs: number | null;
  maxDynamicQrs: number | null;
  bulkBatchLimit: number;
  templateLimit: number | null;
  landingPageLimit: number | null;
  remainingSavedQrs: number | null;
  remainingDynamicQrs: number | null;
  remainingTemplates: number | null;
  remainingLandingPages: number | null;
}

/**
 * Derives user plan from D1 database checking active subscriptions and grace period.
 */
export async function getUserPlanId(userId: string, locals?: any): Promise<{ planId: PlanId; status: string; currentPeriodEnd: number | null }> {
  const db = getDb(locals);

  // Check active subscription
  const subRes = await db.prepare(
    'SELECT plan, status, current_period_end FROM subscriptions WHERE user_id = ? ORDER BY created_at DESC LIMIT 1'
  ).bind(userId).all();

  const sub = subRes.results?.[0] as any;
  const now = Date.now();

  if (sub) {
    const status = sub.status;
    const periodEnd = sub.current_period_end;

    // If active or trialing
    if (status === 'active' || status === 'trialing') {
      return { planId: (sub.plan as PlanId) || 'free', status, currentPeriodEnd: periodEnd };
    }

    // If cancelled but still within the active billing period (grace period)
    if (status === 'cancelled' && periodEnd && now < periodEnd) {
      return { planId: (sub.plan as PlanId) || 'free', status: 'cancelled', currentPeriodEnd: periodEnd };
    }
  }

  // Fallback to user table plan or free
  const userRes = await db.prepare('SELECT plan, status FROM users WHERE id = ?').bind(userId).all();
  const user = userRes.results?.[0] as any;
  const userPlan = (user?.plan as PlanId) || 'free';

  return { planId: userPlan, status: 'free', currentPeriodEnd: null };
}

/**
 * Calculates current resource usage for an authenticated user.
 */
export async function getUserUsage(userId: string, locals?: any): Promise<UserUsage> {
  const db = getDb(locals);

  // 1. Total saved QR codes
  const savedRes = await db.prepare('SELECT COUNT(*) as total FROM qr_codes WHERE user_id = ?').bind(userId).all();
  const savedQrCount = (savedRes.results?.[0] as any)?.total || 0;

  // 2. Active + paused dynamic QR codes
  const dynRes = await db.prepare(
    "SELECT COUNT(*) as total FROM qr_codes WHERE user_id = ? AND is_dynamic = 1 AND status IN ('active', 'paused')"
  ).bind(userId).all();
  const dynamicQrCount = (dynRes.results?.[0] as any)?.total || 0;

  // 3. Logo storage
  const assetRes = await db.prepare('SELECT SUM(file_size) as total_bytes FROM qr_assets WHERE user_id = ?').bind(userId).all();
  const logoStorageBytes = (assetRes.results?.[0] as any)?.total_bytes || 0;

  // 4. Saved Visual Templates
  const templateRes = await db.prepare('SELECT COUNT(*) as total FROM templates WHERE user_id = ?').bind(userId).all();
  const templateCount = (templateRes.results?.[0] as any)?.total || 0;

  // 5. Hosted Landing Pages
  const landingRes = await db.prepare('SELECT COUNT(*) as total FROM landing_pages WHERE user_id = ?').bind(userId).all();
  const landingPageCount = (landingRes.results?.[0] as any)?.total || 0;

  return {
    savedQrCount,
    dynamicQrCount,
    logoStorageBytes,
    templateCount,
    landingPageCount,
  };
}

/**
 * Retrieves full entitlements report for user.
 */
export async function getUserEntitlements(userId: string, locals?: any): Promise<UserEntitlements> {
  const { planId, status, currentPeriodEnd } = await getUserPlanId(userId, locals);
  const plan = getPlanConfig(planId);
  const usage = await getUserUsage(userId, locals);

  const canCreateSavedQr = plan.savedQrLimit === null || usage.savedQrCount < plan.savedQrLimit;
  const canCreateDynamicQr = plan.dynamicQrLimit === null || usage.dynamicQrCount < plan.dynamicQrLimit;
  const canUploadLogo = usage.logoStorageBytes < plan.logoStorageLimitBytes;
  const canUseBulkQr = plan.bulkQr && plan.bulkBatchLimit > 0;
  const canCreateTemplate = plan.templateLimit === null || usage.templateCount < plan.templateLimit;
  const canCreateLandingPage = plan.landingPageLimit === null || usage.landingPageCount < plan.landingPageLimit;

  const remainingSavedQrs = plan.savedQrLimit === null ? null : Math.max(0, plan.savedQrLimit - usage.savedQrCount);
  const remainingDynamicQrs = plan.dynamicQrLimit === null ? null : Math.max(0, plan.dynamicQrLimit - usage.dynamicQrCount);
  const remainingTemplates = plan.templateLimit === null ? null : Math.max(0, plan.templateLimit - usage.templateCount);
  const remainingLandingPages = plan.landingPageLimit === null ? null : Math.max(0, plan.landingPageLimit - usage.landingPageCount);

  return {
    plan,
    status: status as any,
    currentPeriodEnd,
    usage,
    canCreateSavedQr,
    canCreateDynamicQr,
    canUploadLogo,
    canUseBulkQr,
    canCreateTemplate,
    canCreateLandingPage,
    maxSavedQrs: plan.savedQrLimit,
    maxDynamicQrs: plan.dynamicQrLimit,
    bulkBatchLimit: plan.bulkBatchLimit,
    templateLimit: plan.templateLimit,
    landingPageLimit: plan.landingPageLimit,
    remainingSavedQrs,
    remainingDynamicQrs,
    remainingTemplates,
    remainingLandingPages,
  };
}

/**
 * Server-side gate functions for API mutations
 */
export async function canCreateSavedQr(userId: string, locals?: any): Promise<{ allowed: boolean; reason?: string }> {
  const ent = await getUserEntitlements(userId, locals);
  if (!ent.canCreateSavedQr) {
    return {
      allowed: false,
      reason: `You have reached your limit of ${ent.maxSavedQrs} saved QR codes on the ${ent.plan.name} plan. Please upgrade to Pro for higher limits.`,
    };
  }
  return { allowed: true };
}

export async function canCreateDynamicQr(userId: string, locals?: any): Promise<{ allowed: boolean; reason?: string }> {
  const ent = await getUserEntitlements(userId, locals);
  if (!ent.canCreateDynamicQr) {
    return {
      allowed: false,
      reason: `You have reached your limit of ${ent.maxDynamicQrs} dynamic QR codes on the ${ent.plan.name} plan. Please upgrade to Pro to create more dynamic QR codes.`,
    };
  }
  return { allowed: true };
}

export async function canUploadLogoBytes(userId: string, newFileBytes: number, locals?: any): Promise<{ allowed: boolean; reason?: string }> {
  const ent = await getUserEntitlements(userId, locals);
  if (ent.usage.logoStorageBytes + newFileBytes > ent.plan.logoStorageLimitBytes) {
    const limitMb = Math.round(ent.plan.logoStorageLimitBytes / (1024 * 1024));
    return {
      allowed: false,
      reason: `Uploading this file exceeds your ${limitMb} MB logo storage limit on the ${ent.plan.name} plan. Upgrade to increase storage capacity.`,
    };
  }
  return { allowed: true };
}

export async function canUseBulkQr(userId: string, requestedBatchSize: number, locals?: any): Promise<{ allowed: boolean; reason?: string }> {
  const ent = await getUserEntitlements(userId, locals);
  if (!ent.canUseBulkQr) {
    return {
      allowed: false,
      reason: 'Bulk QR generation is a Pro feature. Please upgrade your plan to generate QR codes in bulk.',
    };
  }
  if (requestedBatchSize > ent.bulkBatchLimit) {
    return {
      allowed: false,
      reason: `Your ${ent.plan.name} plan allows up to ${ent.bulkBatchLimit} QR codes per batch (requested: ${requestedBatchSize}).`,
    };
  }
  return { allowed: true };
}

export async function canCreateTemplate(userId: string, locals?: any): Promise<{ allowed: boolean; reason?: string }> {
  const ent = await getUserEntitlements(userId, locals);
  if (!ent.canCreateTemplate) {
    return {
      allowed: false,
      reason: `You have reached your limit of ${ent.templateLimit} saved design templates on the ${ent.plan.name} plan. Upgrade for more template slots.`,
    };
  }
  return { allowed: true };
}

export async function canCreateLandingPage(userId: string, locals?: any): Promise<{ allowed: boolean; reason?: string }> {
  const ent = await getUserEntitlements(userId, locals);
  if (!ent.canCreateLandingPage) {
    return {
      allowed: false,
      reason: `You have reached your limit of ${ent.landingPageLimit} hosted landing pages on the ${ent.plan.name} plan. Upgrade to Pro for more hosted pages.`,
    };
  }
  return { allowed: true };
}
