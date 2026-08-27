export type PlanId = 'free' | 'pro' | 'business';

export interface PlanConfig {
  id: PlanId;
  name: string;
  badge: string;
  description: string;
  monthlyPrice: number;
  currency: string;
  savedQrLimit: number | null; // null represents unlimited
  dynamicQrLimit: number | null;
  analyticsRetentionDays: number;
  logoStorageLimitBytes: number; // in bytes
  bulkBatchLimit: number; // Max rows per bulk batch (0 for disabled)
  templateLimit: number | null; // Max saved visual style templates
  landingPageLimit: number | null; // Max hosted QR landing pages
  advancedCustomization: boolean;
  highResSvgExport: boolean;
  apiAccess: boolean;
  bulkQr: boolean;
  prioritySupport: boolean;
  features: string[];
}

export const PLANS: Record<PlanId, PlanConfig> = {
  free: {
    id: 'free',
    name: 'Free',
    badge: 'Standard',
    description: 'Essential client-side QR code generator for personal and one-off use.',
    monthlyPrice: 0,
    currency: 'USD',
    savedQrLimit: 25,
    dynamicQrLimit: 3,
    analyticsRetentionDays: 30,
    logoStorageLimitBytes: 10 * 1024 * 1024, // 10 MB
    bulkBatchLimit: 0, // Disabled on Free
    templateLimit: 3,
    landingPageLimit: 1, // 1 hosted QR landing page
    advancedCustomization: true,
    highResSvgExport: true,
    apiAccess: false,
    bulkQr: false,
    prioritySupport: false,
    features: [
      'Unlimited client-side static QR generation',
      'High-resolution PNG & Vector SVG download',
      'Custom colors, module shapes & frames',
      'Save up to 25 QR codes in your account',
      '3 active Dynamic QR codes with editable URLs',
      '1 hosted QR landing page (Business card/Menu)',
      '30-day scan telemetry & analytics',
      '3 saved QR visual design templates',
    ],
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular',
    description: 'Powerful dynamic QR campaigns and advanced tracking for creators & businesses.',
    monthlyPrice: 9,
    currency: 'USD',
    savedQrLimit: 500,
    dynamicQrLimit: 100,
    analyticsRetentionDays: 365,
    logoStorageLimitBytes: 500 * 1024 * 1024, // 500 MB
    bulkBatchLimit: 500, // 500 QR / batch
    templateLimit: 50,
    landingPageLimit: 25, // 25 hosted landing pages
    advancedCustomization: true,
    highResSvgExport: true,
    apiAccess: false,
    bulkQr: true,
    prioritySupport: true,
    features: [
      'Everything in Free plan',
      'Save up to 500 QR codes',
      '100 active Dynamic QR codes with editable URLs',
      '25 hosted QR landing pages (Menus, Bio, Cards)',
      '365-day detailed scan analytics & charts',
      'Bulk CSV generation (up to 500 QR / batch)',
      'Up to 50 saved design templates & ZIP export',
      '500 MB persistent brand logo storage',
      'Priority email customer support',
    ],
  },
  business: {
    id: 'business',
    name: 'Business',
    badge: 'Enterprise',
    description: 'High-volume dynamic QR infrastructure for agencies and growing enterprises.',
    monthlyPrice: 29,
    currency: 'USD',
    savedQrLimit: null, // Unlimited
    dynamicQrLimit: 1000,
    analyticsRetentionDays: 730,
    logoStorageLimitBytes: 5 * 1024 * 1024 * 1024, // 5 GB
    bulkBatchLimit: 5000, // 5000 QR / batch
    templateLimit: 500,
    landingPageLimit: 250, // 250 hosted landing pages
    advancedCustomization: true,
    highResSvgExport: true,
    apiAccess: true,
    bulkQr: true,
    prioritySupport: true,
    features: [
      'Everything in Pro plan',
      'Unlimited saved QR codes',
      '1,000 Dynamic QR codes with instant redirects',
      '250 hosted QR landing pages & digital menus',
      'Bulk CSV generation (up to 5,000 QR / batch)',
      'Up to 500 saved design templates',
      '2-year (730 days) historical scan analytics',
      '5 GB persistent cloud asset storage',
      'Dedicated priority SLA support',
    ],
  },
};

export function getPlanConfig(planId?: string | null): PlanConfig {
  if (!planId) return PLANS.free;
  const clean = planId.toLowerCase().trim() as PlanId;
  return PLANS[clean] || PLANS.free;
}

export function formatPrice(price: number, currency = 'USD'): string {
  if (price === 0) return '$0';
  return `$${price}`;
}
