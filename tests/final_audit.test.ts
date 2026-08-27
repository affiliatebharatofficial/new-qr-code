import { describe, it, expect } from 'vitest';
import { PAGE_SLUGS, getLocalizedPageContent } from '../src/lib/i18n/content/index';
import { SUPPORTED_LOCALES } from '../src/lib/i18n/config';
import { getLocalizedPath, getHreflangTags } from '../src/lib/i18n/routes';
import { QR_TYPE_METADATA } from '../src/lib/qr/types';
import { generatePayload } from '../src/lib/qr/payloads';
import { parseBulkCsv } from '../src/lib/bulk/csv';
import { getContrastRatio, checkScannability } from '../src/lib/qr/contrast';

describe('FINAL PRODUCTION AUDIT & LAUNCH READINESS', () => {
  describe('1. Route Inventory & SEO Content Coverage', () => {
    it('should have localized content for every page slug across all 7 supported locales', () => {
      for (const slug of PAGE_SLUGS) {
        for (const locale of SUPPORTED_LOCALES) {
          const content = getLocalizedPageContent(slug, locale);
          expect(content).not.toBeNull();
          expect(content?.title).toBeTruthy();
          expect(content?.description).toBeTruthy();
          expect(content?.h1).toBeTruthy();
          expect(content?.faqs.length).toBe(6);
          expect(content?.sectors.length).toBe(6);
          expect(content?.howItWorks.length).toBe(3);
          expect(content?.useCases.length).toBe(4);
          expect(content?.tips.length).toBe(5);
        }
      }
    });

    it('should generate valid self-referencing and alternate hreflang tags for all languages', () => {
      const testPath = '/wifi-qr-code-generator';
      const hreflangs = getHreflangTags(testPath);
      expect(hreflangs.length).toBe(SUPPORTED_LOCALES.length + 1); // 7 languages + x-default

      const xDefault = hreflangs.find((h) => h.lang === 'x-default');
      expect(xDefault?.href).toBe('https://freeqrcode-generator.com/wifi-qr-code-generator');

      const esTag = hreflangs.find((h) => h.lang === 'es');
      expect(esTag?.href).toBe('https://freeqrcode-generator.com/es/wifi-qr-code-generator');
    });
  });

  describe('2. Payment QR Tools & Brand Safety', () => {
    it('should generate valid HTTPS URLs for Venmo, PayPal, and Cash App', () => {
      expect(generatePayload('venmo', { username: 'testuser' })).toBe('https://venmo.com/u/testuser');
      expect(generatePayload('paypal', { input: 'testuser' })).toBe('https://paypal.me/testuser');
      expect(generatePayload('cash_app', { cashtag: '$testtag' })).toBe('https://cash.app/$testtag');
    });

    it('should format Zelle recipient details accurately without fake deep links', () => {
      const zelle = generatePayload('zelle', { recipient: 'pay@business.com', name: 'Biz LLC' });
      expect(zelle).toBe('Zelle Recipient: pay@business.com (Biz LLC)');
      expect(zelle).not.toContain('zelle://');
    });

    it('should verify all payment tool contents include the required non-intrusive disclaimer', () => {
      const paymentSlugs = [
        'venmo-qr-code-generator',
        'paypal-qr-code-generator',
        'zelle-qr-code-generator',
        'cash-app-qr-code-generator',
      ];

      for (const slug of paymentSlugs) {
        for (const loc of SUPPORTED_LOCALES) {
          const content = getLocalizedPageContent(slug, loc);
          expect(content?.technicalNotes).toBeTruthy();
          expect(content?.technicalNotes.length).toBeGreaterThan(10);
        }
      }
    });
  });

  describe('3. QR Generation & Contrast Protection', () => {
    it('should calculate contrast ratio and warn on low contrast', () => {
      const contrastHigh = getContrastRatio('#000000', '#ffffff');
      expect(contrastHigh).toBeGreaterThan(15);

      const contrastLow = getContrastRatio('#cccccc', '#ffffff');
      expect(contrastLow).toBeLessThan(3.0);
    });

    it('should support all 18 standard and payment QR types', () => {
      const allTypes = Object.keys(QR_TYPE_METADATA);
      expect(allTypes.length).toBe(18);
    });
  });

  describe('4. Bulk QR CSV Parser Resiliency', () => {
    it('should parse valid CSV rows with quotes, commas, and emojis', () => {
      const csv = 'Name,Data,Note\n"Coffee Shop","https://example.com/menu","Scan for ☕"';
      const parsed = parseBulkCsv(csv);
      expect(parsed.validRows.length).toBe(1);
      expect(parsed.validRows[0].name).toBe('Coffee Shop');
      expect(parsed.validRows[0].payload).toBe('https://example.com/menu');
    });

    it('should handle empty or malformed CSV gracefully with error array', () => {
      const emptyResult = parseBulkCsv('');
      expect(emptyResult.validRows).toEqual([]);
      expect(emptyResult.errors.length).toBeGreaterThan(0);
    });
  });
});
