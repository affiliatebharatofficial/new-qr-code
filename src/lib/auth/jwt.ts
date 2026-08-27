import * as jose from 'jose';

const DEFAULT_SECRET = 'dev-jwt-secret-min-32-chars-long-example-key!';

export function getJwtSecret(envSecret?: string): Uint8Array {
  const secret = envSecret || (typeof process !== 'undefined' ? process.env.JWT_SECRET : undefined) || DEFAULT_SECRET;
  return new TextEncoder().encode(secret.padEnd(32, '!'));
}

export interface UserSessionPayload {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  plan: 'free' | 'pro' | 'business';
}

export async function createSessionToken(user: UserSessionPayload, envSecret?: string): Promise<string> {
  const secret = getJwtSecret(envSecret);
  return await new jose.SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    plan: user.plan,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(secret);
}

export async function verifySessionToken(token: string, envSecret?: string): Promise<UserSessionPayload | null> {
  try {
    const secret = getJwtSecret(envSecret);
    const { payload } = await jose.jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });
    return {
      id: payload.id as string,
      email: payload.email as string,
      name: payload.name as string,
      role: (payload.role as 'user' | 'admin') || 'user',
      plan: (payload.plan as 'free' | 'pro' | 'business') || 'free',
    };
  } catch {
    return null;
  }
}

/**
 * Secure password hashing using Web Crypto API PBKDF2 / SHA-256
 */
export async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const saltHex = Array.from(salt).map((b) => b.toString(16).padStart(2, '0')).join('');

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const hashHex = Array.from(new Uint8Array(derivedBits)).map((b) => b.toString(16).padStart(2, '0')).join('');
  return `${saltHex}:${hashHex}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const parts = storedHash.split(':');
  if (parts.length !== 2) return false;
  const [saltHex, expectedHashHex] = parts;

  const salt = new Uint8Array(saltHex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || []);
  const enc = new TextEncoder();

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const actualHashHex = Array.from(new Uint8Array(derivedBits)).map((b) => b.toString(16).padStart(2, '0')).join('');
  return actualHashHex === expectedHashHex;
}

export function parseSessionCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/(?:^|;\s*)qr_session=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Authentication Helpers for API Routes & Middleware
 */
export async function getCurrentUser(request: Request, locals?: any): Promise<UserSessionPayload | null> {
  const cookieHeader = request.headers.get('cookie');
  const token = parseSessionCookie(cookieHeader);
  if (!token) return null;
  const envSecret = locals?.runtime?.env?.JWT_SECRET;
  return await verifySessionToken(token, envSecret);
}

export async function requireUser(request: Request, locals?: any): Promise<UserSessionPayload> {
  const user = await getCurrentUser(request, locals);
  if (!user) {
    throw new Error('UNAUTHORIZED');
  }
  return user;
}

export async function requireAdmin(request: Request, locals?: any): Promise<UserSessionPayload> {
  const user = await requireUser(request, locals);
  if (user.role !== 'admin') {
    throw new Error('FORBIDDEN');
  }
  return user;
}
