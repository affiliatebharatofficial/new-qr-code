import type { APIRoute } from 'astro';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { createCheckoutUrl } from '../../../lib/billing/lemonsqueezy';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const POST: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Please log in to upgrade your subscription.', 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const planId = body?.planId?.toLowerCase();
  if (planId !== 'pro' && planId !== 'business') {
    return jsonError('INVALID_PLAN', 'Valid upgrade plans are "pro" or "business".', 400);
  }

  const env = (locals as any)?.runtime?.env || process.env;
  const storeId = env.LEMONSQUEEZY_STORE_ID || 'qrcodegenerator';
  const variantId = planId === 'business'
    ? (env.LEMONSQUEEZY_BUSINESS_VARIANT_ID || 'variant_biz_123')
    : (env.LEMONSQUEEZY_PRO_VARIANT_ID || 'variant_pro_123');

  const apiKey = env.LEMONSQUEEZY_API_KEY;

  const url = new URL(request.url);
  const redirectUrl = `${url.origin}/dashboard/billing?success=1`;

  try {
    const checkoutUrl = await createCheckoutUrl({
      storeId,
      variantId,
      userId: user.id,
      userEmail: user.email,
      userName: user.name,
      redirectUrl,
      apiKey,
    });

    return jsonSuccess({
      checkoutUrl,
      planId,
    });
  } catch (err: any) {
    return jsonError('CHECKOUT_ERROR', 'Failed to generate checkout session.', 500);
  }
};
