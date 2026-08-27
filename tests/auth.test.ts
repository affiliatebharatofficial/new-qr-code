import { describe, it, expect } from 'vitest';
import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  verifySessionToken,
  parseSessionCookie,
} from '../src/lib/auth/jwt';

describe('Auth & Session Security', () => {
  it('should hash and verify passwords using Web Crypto PBKDF2', async () => {
    const password = 'MySuperSecretPassword123!';
    const hash = await hashPassword(password);

    expect(hash).toContain(':');
    expect(hash.length).toBeGreaterThan(40);

    const isMatch = await verifyPassword(password, hash);
    expect(isMatch).toBe(true);

    const isWrong = await verifyPassword('WrongPassword', hash);
    expect(isWrong).toBe(false);
  });

  it('should sign and verify JWT session tokens', async () => {
    const userPayload = {
      id: 'usr_123',
      email: 'alex@example.com',
      name: 'Alex Developer',
      role: 'user' as const,
      plan: 'pro' as const,
    };

    const token = await createSessionToken(userPayload);
    expect(typeof token).toBe('string');

    const decoded = await verifySessionToken(token);
    expect(decoded).not.toBeNull();
    expect(decoded?.id).toBe('usr_123');
    expect(decoded?.email).toBe('alex@example.com');
    expect(decoded?.role).toBe('user');
    expect(decoded?.plan).toBe('pro');
  });

  it('should parse session tokens from Cookie headers', () => {
    const cookieHeader = 'theme=dark; qr_session=eyJh...; other=123';
    const token = parseSessionCookie(cookieHeader);
    expect(token).toBe('eyJh...');

    expect(parseSessionCookie(null)).toBeNull();
    expect(parseSessionCookie('theme=dark')).toBeNull();
  });
});
