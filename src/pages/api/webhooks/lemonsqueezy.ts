import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { verifyLemonSqueezySignature, mapSubscriptionStatus, mapPlanFromVariant, type LemonSqueezyWebhookEvent } from '../../../lib/billing/lemonsqueezy';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const POST: APIRoute = async ({ request, locals }) => {
  const signature = request.headers.get('x-signature');
  const secret = (locals as any)?.runtime?.env?.LEMONSQUEEZY_WEBHOOK_SECRET || process.env.LEMONSQUEEZY_WEBHOOK_SECRET || 'dev-webhook-secret-key-123';

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonError('BAD_REQUEST', 'Failed to read webhook body.', 400);
  }

  // 1. Verify Webhook Signature (HMAC SHA-256)
  const isValid = await verifyLemonSqueezySignature(rawBody, signature, secret);
  if (!isValid && process.env.NODE_ENV === 'production') {
    return jsonError('INVALID_SIGNATURE', 'Invalid webhook signature.', 401);
  }

  let event: LemonSqueezyWebhookEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const eventName = event.meta?.event_name;
  const eventId = String(event.data?.id || `${eventName}_${Date.now()}`);
  const db = getDb(locals);
  const now = Date.now();

  // 2. Idempotency Check
  const existingEvent = await db.prepare(
    'SELECT processed FROM webhook_events WHERE provider = ? AND event_id = ?'
  ).bind('lemonsqueezy', eventId).all();

  if (existingEvent.results && existingEvent.results.length > 0 && (existingEvent.results[0] as any).processed === 1) {
    // Already processed, return 200 OK
    return jsonSuccess({ message: 'Webhook already processed (idempotent).' });
  }

  // Record received event
  await db.prepare(`
    INSERT OR REPLACE INTO webhook_events (id, provider, event_id, event_type, processed, payload_summary, received_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    `evt_${crypto.randomUUID()}`,
    'lemonsqueezy',
    eventId,
    eventName,
    0,
    JSON.stringify({ eventName, id: event.data?.id }),
    now
  ).run();

  try {
    const attributes = event.data?.attributes;
    const userId = event.meta?.custom_data?.user_id;
    const customerEmail = attributes?.user_email?.toLowerCase().trim();

    // Resolve user ID if missing from custom_data
    let targetUserId = userId;
    if (!targetUserId && customerEmail) {
      const uRes = await db.prepare('SELECT id FROM users WHERE email = ?').bind(customerEmail).all();
      targetUserId = (uRes.results?.[0] as any)?.id;
    }

    if (!targetUserId) {
      // Cannot associate with a user
      return jsonSuccess({ message: 'Webhook received but no user association found.' });
    }

    const subscriptionId = String(event.data?.id || '');
    const customerId = String(attributes?.customer_id || '');
    const rawStatus = attributes?.status || 'active';
    const status = mapSubscriptionStatus(rawStatus);
    const plan = mapPlanFromVariant(attributes?.variant_name || attributes?.product_name || event.meta?.custom_data?.plan_id);

    const periodStart = attributes?.created_at ? new Date(attributes.created_at).getTime() : now;
    const periodEnd = attributes?.renews_at || attributes?.ends_at
      ? new Date(attributes.renews_at || attributes.ends_at!).getTime()
      : now + 30 * 24 * 60 * 60 * 1000;

    switch (eventName) {
      case 'subscription_created':
      case 'subscription_updated':
      case 'subscription_resumed': {
        // Upsert subscription
        await db.prepare(`
          INSERT INTO subscriptions (
            id, user_id, plan, provider, provider_customer_id, provider_subscription_id, status, current_period_start, current_period_end, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            plan = excluded.plan,
            status = excluded.status,
            current_period_start = excluded.current_period_start,
            current_period_end = excluded.current_period_end,
            updated_at = excluded.updated_at
        `).bind(
          `sub_${subscriptionId || targetUserId}`,
          targetUserId,
          plan,
          'lemonsqueezy',
          customerId,
          subscriptionId,
          status,
          periodStart,
          periodEnd,
          now,
          now
        ).run();

        // Update user plan
        await db.prepare('UPDATE users SET plan = ?, updated_at = ? WHERE id = ?').bind(plan, now, targetUserId).run();
        break;
      }

      case 'subscription_cancelled': {
        await db.prepare(`
          UPDATE subscriptions SET
            status = 'cancelled',
            current_period_end = ?,
            updated_at = ?
          WHERE user_id = ? AND provider = 'lemonsqueezy'
        `).bind(periodEnd, now, targetUserId).run();
        // Note: Do not immediately set user.plan = 'free' if periodEnd > now; entitlement service handles grace period
        break;
      }

      case 'subscription_expired': {
        await db.prepare(`
          UPDATE subscriptions SET
            status = 'expired',
            updated_at = ?
          WHERE user_id = ? AND provider = 'lemonsqueezy'
        `).bind(now, targetUserId).run();

        await db.prepare("UPDATE users SET plan = 'free', updated_at = ? WHERE id = ?").bind(now, targetUserId).run();
        break;
      }

      case 'subscription_payment_failed': {
        await db.prepare(`
          UPDATE subscriptions SET
            status = 'past_due',
            updated_at = ?
          WHERE user_id = ? AND provider = 'lemonsqueezy'
        `).bind(now, targetUserId).run();
        break;
      }
    }

    // Mark webhook as processed
    await db.prepare(
      'UPDATE webhook_events SET processed = 1, processed_at = ? WHERE provider = ? AND event_id = ?'
    ).bind(Date.now(), 'lemonsqueezy', eventId).run();

    return jsonSuccess({ message: `Webhook ${eventName} processed successfully.` });
  } catch (err: any) {
    return jsonError('PROCESSING_ERROR', 'Failed to process webhook event.', 500);
  }
};
