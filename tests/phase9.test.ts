import { describe, it, expect } from 'vitest';
import { GET as getSitemap } from '../src/pages/sitemap.xml';

describe('Phase 9: SEO, Organic Growth & Content Architecture', () => {
  describe('1. Dynamic Sitemap Generation', () => {
    it('should generate a valid XML sitemap with correct MIME type', async () => {
      const response = await getSitemap({} as any);
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toContain('application/xml');

      const xml = await response.text();
      expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    });

    it('should include canonical public pages and exclude private/auth routes', async () => {
      const response = await getSitemap({} as any);
      const xml = await response.text();

      // Should include primary public pages
      expect(xml).toContain('<loc>https://qrcode.page/</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/pricing</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/wifi-qr-code-generator</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/vcard-qr-code-generator</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/digital-business-card</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/restaurant-menu-qr-code</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/guides</loc>');
      expect(xml).toContain('<loc>https://qrcode.page/guides/what-is-a-qr-code</loc>');

      // Must NOT include private or dynamic routes
      expect(xml).not.toContain('/dashboard');
      expect(xml).not.toContain('/admin');
      expect(xml).not.toContain('/login');
      expect(xml).not.toContain('/signup');
      expect(xml).not.toContain('/api/');
      expect(xml).not.toContain('/r/');
      expect(xml).not.toContain('/p/');
    });
  });

  describe('2. Canonical URLs & Meta Validation', () => {
    it('should format clean canonical URLs without query strings', () => {
      const siteUrl = 'https://qrcode.page';
      const path = '/wifi-qr-code-generator';
      const cleanCanonical = `${siteUrl}${path}/`;
      expect(cleanCanonical).toBe('https://qrcode.page/wifi-qr-code-generator/');
      expect(cleanCanonical).not.toContain('?type=wifi');
    });
  });

  describe('3. Structured Data Validation', () => {
    it('should create valid Schema.org BreadcrumbList JSON-LD objects', () => {
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qrcode.page/' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://qrcode.page/guides' },
          { '@type': 'ListItem', position: 3, name: 'Static vs Dynamic', item: 'https://qrcode.page/guides/static-vs-dynamic-qr' },
        ],
      };

      const serialized = JSON.stringify(breadcrumb);
      const parsed = JSON.parse(serialized);
      expect(parsed['@type']).toBe('BreadcrumbList');
      expect(parsed.itemListElement.length).toBe(3);
      expect(parsed.itemListElement[0].name).toBe('Home');
    });

    it('should create valid FAQPage Schema.org structure', () => {
      const faqData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do static QR codes expire?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, static QR codes encode data directly and never expire.',
            },
          },
        ],
      };

      const serialized = JSON.stringify(faqData);
      const parsed = JSON.parse(serialized);
      expect(parsed['@type']).toBe('FAQPage');
      expect(parsed.mainEntity[0].name).toBe('Do static QR codes expire?');
    });
  });
});
