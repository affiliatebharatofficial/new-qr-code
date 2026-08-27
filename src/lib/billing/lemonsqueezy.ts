import type { PlanId } from './plans';

export interface LemonSqueezyWebhookEvent {
  meta: {
    event_name: string;
    custom_data?: {
      user_id?: string;
      plan_id?: string;
    };
  };
  data: {
    id: string;
    type: string;
    attributes: {
      store_id: number;
      customer_id: number;
      order_id?: number;
      order_number?: number;
      user_name?: string;
      user_email?: string;
      status: string;
      status_formatted?: string;
      variant_id?: number;
      product_id?: number;
      product_name?: string;
      variant_name?: string;
      card_brand?: string;
      card_last_four?: string;
      renews_at?: string;
      ends_at?: string;
      created_at: string;
      updated_at: string;
      urls?: {
        update_payment_method?: string;
        customer_portal?: string;
      };
    };
  };
}

/**
 * Validates HMAC SHA-256 webhook signature using Web Crypto API.
 */
export async function verifyLemonSqueezySignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): Promise<boolean> {
  if (!signatureHeader || !secret || !rawBody) return false;

  try {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    // Signature header is hex encoded
    const sigBytes = new Uint8Array(
      signatureHeader.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || []
    );

    return await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(rawBody));
  } catch {
    return false;
  }
}

/**
 * Maps Lemon Squeezy status to application subscription status.
 */
export function mapSubscriptionStatus(lsStatus: string): 'active' | 'trialing' | 'past_due' | 'paused' | 'cancelled' | 'expired' {
  switch (lsStatus.toLowerCase()) {
    case 'active':
      return 'active';
    case 'on_trial':
      return 'trialing';
    case 'paused':
      return 'paused';
    case 'past_due':
    case 'unpaid':
      return 'past_due';
    case 'cancelled':
      return 'cancelled';
    case 'expired':
      return 'expired';
    default:
      return 'active';
  }
}

/**
 * Maps variant or product name to internal plan ID ('free' | 'pro' | 'business').
 */
export function mapPlanFromVariant(variantIdOrName?: string | number): PlanId {
  const str = String(variantIdOrName || '').toLowerCase();
  if (str.includes('business') || str.includes('enterprise')) return 'business';
  if (str.includes('pro')) return 'pro';
  return 'free';
}

/**
 * Generates Lemon Squeezy Checkout URL with user metadata.
 */
export async function createCheckoutUrl(options: {
  storeId: string;
  variantId: string;
  userId: string;
  userEmail: string;
  userName?: string;
  redirectUrl?: string;
  apiKey?: string;
}): Promise<string> {
  const { storeId, variantId, userId, userEmail, userName, redirectUrl, apiKey } = options;

  if (apiKey) {
    try {
      const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/vnd.api+json',
        },
        body: JSON.stringify({
          data: {
            type: 'checkouts',
            attributes: {
              checkout_data: {
                email: userEmail,
                name: userName || '',
                custom: {
                  user_id: userId,
                },
              },
              product_options: {
                redirect_url: redirectUrl || 'https://freeqrcode-generator.com/dashboard/billing?success=1',
              },
            },
            relationships: {
              store: {
                data: {
                  type: 'stores',
                  id: storeId,
                },
              },
              variant: {
                data: {
                  type: 'variants',
                  id: variantId,
                },
              },
            },
          },
        }),
      });

      if (response.ok) {
        const json = await response.json();
        const url = json.data?.attributes?.url;
        if (url) return url;
      }
    } catch {
      // Fallback to direct checkout link
    }
  }

  // Fallback to hosted checkout link with query parameters
  const params = new URLSearchParams({
    'checkout[email]': userEmail,
    'checkout[name]': userName || '',
    'checkout[custom][user_id]': userId,
  });

  return `https://${storeId}.lemonsqueezy.com/checkout/buy/${variantId}?${params.toString()}`;
}
