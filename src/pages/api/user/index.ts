import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { getR2Storage } from '../../../lib/storage/r2';
import { updateUserProfileSchema } from '../../../lib/validation/schemas';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const db = getDb(locals);
  const userRes = await db.prepare('SELECT id, email, name, role, plan, status, created_at FROM users WHERE id = ?').bind(user.id).all();
  const profile = userRes.results?.[0];

  if (!profile) {
    return jsonError('USER_NOT_FOUND', 'User profile not found.', 404);
  }

  return jsonSuccess({ user: profile });
};

export const PATCH: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const validation = updateUserProfileSchema.safeParse(body);
  if (!validation.success) {
    return jsonError('VALIDATION_ERROR', validation.error.errors[0]?.message || 'Invalid display name.', 400);
  }

  const { name } = validation.data;
  const db = getDb(locals);
  const now = Date.now();

  await db.prepare('UPDATE users SET name = ?, updated_at = ? WHERE id = ?').bind(name.trim(), now, user.id).run();

  return jsonSuccess({
    message: 'Profile updated successfully.',
    user: { id: user.id, email: user.email, name: name.trim() },
  });
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    return jsonError('UNAUTHORIZED', 'Authentication required.', 401);
  }

  const db = getDb(locals);
  const r2 = getR2Storage(locals);

  try {
    // 1. Delete associated R2 assets
    const assetsRes = await db.prepare('SELECT r2_key FROM qr_assets WHERE user_id = ?').bind(user.id).all();
    for (const asset of assetsRes.results || []) {
      if ((asset as any).r2_key) {
        try {
          await r2.delete((asset as any).r2_key);
        } catch {
          // Best effort cleanup
        }
      }
    }

    // 2. Cascade delete database records
    await db.prepare('DELETE FROM qr_scans WHERE qr_id IN (SELECT id FROM qr_codes WHERE user_id = ?)').bind(user.id).run();
    await db.prepare('DELETE FROM qr_assets WHERE user_id = ?').bind(user.id).run();
    await db.prepare('DELETE FROM qr_codes WHERE user_id = ?').bind(user.id).run();
    await db.prepare('DELETE FROM subscriptions WHERE user_id = ?').bind(user.id).run();
    await db.prepare('DELETE FROM usage WHERE user_id = ?').bind(user.id).run();
    await db.prepare('DELETE FROM users WHERE id = ?').bind(user.id).run();

    // 3. Clear session cookie and return confirmation
    return new Response(JSON.stringify({ success: true, message: 'Account and associated data deleted permanently.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'qr_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0',
      },
    });
  } catch (err: any) {
    return jsonError('DATABASE_ERROR', 'Failed to delete account.', 500);
  }
};
