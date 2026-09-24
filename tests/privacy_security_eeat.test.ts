import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { hashIp, extractScanContext } from '../src/lib/analytics/tracker';

describe('Privacy, Security, and Trust Transparency Audit (Step 3)', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('verifies /privacy policy accurately reflects codebase implementation', () => {
    const privacyContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/privacy.astro'),
      'utf-8'
    );

    // Static QR browser-side processing
    expect(privacyContent).toContain('Static QR generation is performed locally in the browser');
    expect(privacyContent).toContain('qr-code-styling');
    expect(privacyContent).toContain('qrcode-generator');
    expect(privacyContent).toContain('FileReader');

    // Dynamic QR & Edge infrastructure
    expect(privacyContent).toContain('Cloudflare Workers');
    expect(privacyContent).toContain('Cloudflare D1');
    expect(privacyContent).toContain('Cloudflare R2');

    // Cookies and storage audit
    expect(privacyContent).toContain('qr_session');
    expect(privacyContent).toContain('_ga');
    expect(privacyContent).toContain('theme');
    expect(privacyContent).toContain('pending_qr_save');

    // Third-party processors
    expect(privacyContent).toContain('Lemon Squeezy');
    expect(privacyContent).toContain('G-60W44NFJNJ');

    // Payment and Social QR transparency
    expect(privacyContent).toContain('NOT a payment gateway');
    expect(privacyContent).toContain('not affiliated with, sponsored by, or endorsed by');

    // Self-service deletion
    expect(privacyContent).toContain('Self-Service Account Deletion');
    expect(privacyContent).toContain('Danger Zone');

    // No unsubstantiated absolute claims
    expect(privacyContent).not.toContain('100% secure');
    expect(privacyContent).not.toContain('unhackable');
    expect(privacyContent).not.toContain('military-grade');
    expect(privacyContent).not.toContain('zero-risk');
    expect(privacyContent).not.toContain('GDPR Compliant'); // must not claim formal certification
  });

  it('verifies /security page exists and documents verified controls', () => {
    const securityContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/security.astro'),
      'utf-8'
    );

    // Schemas
    expect(securityContent).toContain("'@type': 'WebPage'");
    expect(securityContent).toContain("'@type': 'BreadcrumbList'");

    // Documented controls
    expect(securityContent).toContain('Client-Side Static QR Isolation');
    expect(securityContent).toContain('Transport &amp; Network Security');
    expect(securityContent).toContain('TLS 1.3');
    expect(securityContent).toContain('PBKDF2');
    expect(securityContent).toContain('100,000 iterations');
    expect(securityContent).toContain('HttpOnly');
    expect(securityContent).toContain('Parameterized SQL Queries');
    expect(securityContent).toContain('Strict URI Scheme Filtering');
    expect(securityContent).toContain('SVG Content Neutralization');
    expect(securityContent).toContain('IP Anonymization');

    // Vulnerability disclosure & contact
    expect(securityContent).toContain('Vulnerability Reporting');
    expect(securityContent).toContain(
      'If you discover a potential security issue, please report it through our contact channel with sufficient technical details to reproduce the issue.'
    );

    // No absolute hype
    expect(securityContent).not.toContain('100% secure');
    expect(securityContent).not.toContain('unhackable');
    expect(securityContent).not.toContain('military-grade');
  });

  it('verifies IP hashing function produces deterministic 16-hex character salted hashes without raw IP', async () => {
    const ip = '198.51.100.42';
    const hash = await hashIp(ip);

    // 8 bytes in hex = 16 hex characters
    expect(hash).toHaveLength(16);
    expect(hash).toMatch(/^[0-9a-f]{16}$/);

    // Does not leak raw IP
    expect(hash).not.toContain('198');
    expect(hash).not.toContain('51');
    expect(hash).not.toContain('100');
    expect(hash).not.toContain('42');

    // Empty IP fallback
    const emptyHash = await hashIp('');
    expect(emptyHash).toBe('anon');
  });

  it('verifies extractScanContext extracts headers and anonymized IP hash', async () => {
    const mockRequest = new Request('https://freeqrcode-generator.com/r/test123', {
      headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        'cf-ipcountry': 'US',
        'cf-region': 'California',
        'cf-ipcity': 'San Francisco',
        'referer': 'https://example.com/blog',
        'cf-connecting-ip': '203.0.113.195',
      },
    });

    const context = await extractScanContext(mockRequest);
    expect(context.country).toBe('US');
    expect(context.region).toBe('California');
    expect(context.city).toBe('San Francisco');
    expect(context.deviceType).toBe('mobile');
    expect(context.os).toBe('iOS');
    expect(context.browser).toBe('Safari');
    expect(context.referrer).toBe('example.com');
    expect(context.ipHash).toHaveLength(16);
  });

  it('verifies user API endpoint supports GET, PATCH, and DELETE with cookie clearance', () => {
    const apiUserContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/api/user/index.ts'),
      'utf-8'
    );

    expect(apiUserContent).toContain('export const GET: APIRoute');
    expect(apiUserContent).toContain('export const PATCH: APIRoute');
    expect(apiUserContent).toContain('export const DELETE: APIRoute');
    expect(apiUserContent).toContain('DELETE FROM users WHERE id = ?');
    expect(apiUserContent).toContain('DELETE FROM qr_codes WHERE user_id = ?');
    expect(apiUserContent).toContain('qr_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
  });

  it('verifies account settings page includes danger zone and self-service account deletion', () => {
    const accountPageContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/dashboard/account/index.astro'),
      'utf-8'
    );

    expect(accountPageContent).toContain('Danger Zone');
    expect(accountPageContent).toContain('delete-account-btn');
    expect(accountPageContent).toContain("fetch('/api/user', { method: 'DELETE' })");
  });

  it('verifies navigation, footer, and sitemap contain new trust and security routes', () => {
    const footerContent = fs.readFileSync(
      path.join(rootDir, 'src/components/layout/Footer.astro'),
      'utf-8'
    );
    expect(footerContent).toContain('/methodology');
    expect(footerContent).toContain('/data-sources');
    expect(footerContent).toContain('/security');
    expect(footerContent).toContain('/privacy');

    const sitemapContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/sitemap.xml.ts'),
      'utf-8'
    );
    expect(sitemapContent).toContain("{ path: 'methodology'");
    expect(sitemapContent).toContain("{ path: 'data-sources'");
    expect(sitemapContent).toContain("{ path: 'security'");
  });

  it('verifies Google Analytics tag and Content Security Policy compatibility', () => {
    const middlewareContent = fs.readFileSync(
      path.join(rootDir, 'src/middleware.ts'),
      'utf-8'
    );
    // CSP must explicitly permit Google Tag Manager and Google Analytics
    expect(middlewareContent).toContain('https://www.googletagmanager.com');
    expect(middlewareContent).toContain('https://*.googletagmanager.com');
    expect(middlewareContent).toContain('https://www.google-analytics.com');
    expect(middlewareContent).toContain('https://*.google-analytics.com');

    const baseLayoutContent = fs.readFileSync(
      path.join(rootDir, 'src/layouts/BaseLayout.astro'),
      'utf-8'
    );
    // Script tag must have is:inline to avoid Vite/Astro bundling corruption
    expect(baseLayoutContent).toContain(
      '<script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-60W44NFJNJ"></script>'
    );
    expect(baseLayoutContent).toContain("gtag('config', 'G-60W44NFJNJ');");
  });
});

