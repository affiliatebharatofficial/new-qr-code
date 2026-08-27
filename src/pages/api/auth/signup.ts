import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { hashPassword, createSessionToken } from '../../../lib/auth/jwt';
import { signupSchema } from '../../../lib/validation/schemas';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const POST: APIRoute = async ({ request, locals }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const validation = signupSchema.safeParse(body);
  if (!validation.success) {
    return jsonError('VALIDATION_ERROR', validation.error.errors[0]?.message || 'Invalid registration data.', 400);
  }

  const { name, email, password } = validation.data;
  const db = getDb(locals);
  const normalizedEmail = email.toLowerCase().trim();

  // Check existing user
  const existingRes = await db.prepare('SELECT id FROM users WHERE email = ?').bind(normalizedEmail).all();
  if (existingRes.results && existingRes.results.length > 0) {
    return jsonError('EMAIL_EXISTS', 'An account with this email address already exists.', 409);
  }

  const userId = `usr_${crypto.randomUUID()}`;
  const passwordHash = await hashPassword(password);
  const now = Date.now();

  try {
    await db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      userId,
      normalizedEmail,
      passwordHash,
      name.trim(),
      'user',
      'free',
      'active',
      now,
      now
    ).run();

    const envSecret = (locals as any)?.runtime?.env?.JWT_SECRET;
    const sessionToken = await createSessionToken({
      id: userId,
      email: normalizedEmail,
      name: name.trim(),
      role: 'user',
      plan: 'free',
    }, envSecret);

    const isSecure = (locals as any)?.runtime?.env?.ENVIRONMENT === 'production';
    const cookieFlags = `Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}${isSecure ? '; Secure' : ''}`;

    return jsonSuccess({
      user: { id: userId, email: normalizedEmail, name: name.trim(), role: 'user', plan: 'free' },
    }, 201, {
      'Set-Cookie': `qr_session=${encodeURIComponent(sessionToken)}; ${cookieFlags}`,
    });
  } catch (err: any) {
    return jsonError('SERVER_ERROR', 'Failed to create user account.', 500);
  }
};
