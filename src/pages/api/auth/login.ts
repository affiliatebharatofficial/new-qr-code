import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { verifyPassword, createSessionToken } from '../../../lib/auth/jwt';
import { loginSchema } from '../../../lib/validation/schemas';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

export const POST: APIRoute = async ({ request, locals }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const validation = loginSchema.safeParse(body);
  if (!validation.success) {
    return jsonError('VALIDATION_ERROR', validation.error.errors[0]?.message || 'Invalid login details.', 400);
  }

  const { email, password } = validation.data;
  const db = getDb(locals);
  const normalizedEmail = email.toLowerCase().trim();

  const userRes = await db.prepare('SELECT * FROM users WHERE email = ?').bind(normalizedEmail).all();
  const user = userRes.results?.[0];

  // Generic credential error to avoid user enumeration
  if (!user) {
    return jsonError('INVALID_CREDENTIALS', 'Invalid email or password.', 401);
  }

  if (user.status === 'suspended') {
    return jsonError('ACCOUNT_SUSPENDED', 'Your account has been suspended. Please contact support.', 403);
  }

  const isValid = await verifyPassword(password, user.password_hash);
  if (!isValid) {
    return jsonError('INVALID_CREDENTIALS', 'Invalid email or password.', 401);
  }

  const envSecret = (locals as any)?.runtime?.env?.JWT_SECRET;
  const sessionToken = await createSessionToken({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    plan: user.plan,
  }, envSecret);

  const isSecure = (locals as any)?.runtime?.env?.ENVIRONMENT === 'production';
  const cookieFlags = `Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}${isSecure ? '; Secure' : ''}`;

  return jsonSuccess({
    user: { id: user.id, email: user.email, name: user.name, role: user.role, plan: user.plan },
  }, 200, {
    'Set-Cookie': `qr_session=${encodeURIComponent(sessionToken)}; ${cookieFlags}`,
  });
};
