import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
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
