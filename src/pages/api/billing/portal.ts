import type { APIRoute } from 'astro';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { getDb } from '../../../lib/db/client';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const db = getDb(locals);
  const subRes = await db.prepare(
    "SELECT provider_customer_id, provider_subscription_id FROM subscriptions WHERE user_id = ? AND provider = 'lemonsqueezy' ORDER BY created_at DESC LIMIT 1"
  ).bind(user.id).all();

  const sub = subRes.results?.[0] as any;
  if (!sub || !sub.provider_customer_id) {
    return jsonError('NO_SUBSCRIPTION', 'No active billing subscription found.', 404);
  }

  const env = (locals as any)?.runtime?.env || process.env;
  const storeId = env.LEMONSQUEEZY_STORE_ID || 'qrcodegenerator';
  const portalUrl = `https://${storeId}.lemonsqueezy.com/billing`;

  return jsonSuccess({
    portalUrl,
  });
};
