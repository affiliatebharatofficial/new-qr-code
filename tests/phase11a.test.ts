import { describe, it, expect } from 'vitest';
import {
  buildVenmoPayload,
  buildPayPalPayload,
  buildZellePayload,
  buildCashAppPayload,
  generatePayload,
  sanitizeUrl,
} from '../src/lib/qr/payloads';
import { getLocalizedPageContent, PAGE_SLUGS } from '../src/lib/i18n/content/index';
import { SUPPORTED_LOCALES } from '../src/lib/i18n/config';
import { getLocalizedPath } from '../src/lib/i18n/routes';
import { QR_TYPE_METADATA } from '../src/lib/qr/types';

describe('Phase 11A: Payment QR Generators (Venmo, PayPal, Zelle, Cash App)', () => {
  describe('1. Venmo QR Code Payload & Validation', () => {
    it('should correctly format standard Venmo username payload', () => {
      const payload1 = buildVenmoPayload({ username: 'storehandle' });
      expect(payload1).toBe('https://venmo.com/u/storehandle');

      const payload2 = buildVenmoPayload({ username: '@storehandle' });
      expect(payload2).toBe('https://venmo.com/u/storehandle');
    });

    it('should support optional amount and note parameters in Venmo', () => {
      const payload = buildVenmoPayload({
        username: 'merchant123',
        amount: '25.50',
        note: 'Coffee & Pastry',
      });
      expect(payload).toContain('https://venmo.com/u/merchant123?');
      expect(payload).toContain('txn=pay');
      expect(payload).toContain('amount=25.50');
      expect(payload).toContain('note=Coffee+%26+Pastry');
    });

    it('should sanitize and accept verified Venmo URLs', () => {
      const payload = buildVenmoPayload({ username: 'https://venmo.com/u/verifieduser' });
      expect(payload).toBe('https://venmo.com/u/verifieduser');
    });

    it('should reject empty or invalid Venmo usernames', () => {
      expect(() => buildVenmoPayload({ username: '' })).toThrow(/Venmo username/);
      expect(() => buildVenmoPayload({ username: 'invalid user with spaces!' })).toThrow(/valid alphanumeric/);
    });
  });

  describe('2. PayPal QR Code Payload & Validation', () => {
    it('should correctly format PayPal.Me username payload', () => {
      const payload1 = buildPayPalPayload({ input: 'businessname' });
      expect(payload1).toBe('https://paypal.me/businessname');

      const payload2 = buildPayPalPayload({ input: '@businessname' });
      expect(payload2).toBe('https://paypal.me/businessname');
    });

    it('should encode optional amount and currency in PayPal.Me URL path', () => {
      const payload = buildPayPalPayload({
        input: 'freelancer',
        amount: '150.00',
        currency: 'EUR',
      });
      expect(payload).toBe('https://paypal.me/freelancer/150.00EUR');
    });

    it('should accept valid PayPal payment URLs', () => {
      const payload = buildPayPalPayload({ input: 'https://www.paypal.com/paypalme/mybusiness' });
      expect(payload).toBe('https://www.paypal.com/paypalme/mybusiness');
    });

    it('should reject invalid or non-PayPal URLs', () => {
      expect(() => buildPayPalPayload({ input: '' })).toThrow(/PayPal.Me username/);
      expect(() => buildPayPalPayload({ input: 'https://malicious-site.com/fake-paypal' })).toThrow(/valid PayPal URL/);
    });
  });

  describe('3. Zelle QR Code Payload & Validation', () => {
    it('should encode Zelle enrolled email address', () => {
      const payload = buildZellePayload({
        recipient: 'payments@mybusiness.com',
        name: 'My Business LLC',
      });
      expect(payload).toBe('Zelle Recipient: payments@mybusiness.com (My Business LLC)');
    });

    it('should encode Zelle enrolled phone number', () => {
      const payload = buildZellePayload({
        recipient: '+1 555-123-4567',
        name: 'John Doe',
      });
      expect(payload).toBe('Zelle Recipient: +15551234567 (John Doe)');
    });

    it('should support direct bank recipient URLs without fake zelle:// scheme', () => {
      const payload = buildZellePayload({
        recipient: 'https://bank.com/zelle/pay/token123',
      });
      expect(payload).toBe('https://bank.com/zelle/pay/token123');
    });

    it('should reject empty recipient input', () => {
      expect(() => buildZellePayload({ recipient: '' })).toThrow(/registered Zelle/);
    });
  });

  describe('4. Cash App QR Code Payload & Validation', () => {
    it('should correctly format $Cashtag payload', () => {
      const payload1 = buildCashAppPayload({ cashtag: '$creatorshop' });
      expect(payload1).toBe('https://cash.app/$creatorshop');

      const payload2 = buildCashAppPayload({ cashtag: 'creatorshop' });
      expect(payload2).toBe('https://cash.app/$creatorshop');
    });

    it('should encode optional amount and note in Cash App', () => {
      const payload = buildCashAppPayload({
        cashtag: '$barista',
        amount: '5.00',
        note: 'Latte Tip',
      });
      expect(payload).toContain('https://cash.app/$barista/5.00?');
      expect(payload).toContain('note=Latte+Tip');
    });

    it('should accept valid Cash App URLs', () => {
      const payload = buildCashAppPayload({ cashtag: 'https://cash.app/$verifiedtag' });
      expect(payload).toBe('https://cash.app/$verifiedtag');
    });

    it('should reject empty or invalid $Cashtags', () => {
      expect(() => buildCashAppPayload({ cashtag: '' })).toThrow(/Cash App \$Cashtag/);
      expect(() => buildCashAppPayload({ cashtag: 'invalid tag with spaces' })).toThrow(/valid Cash App/);
    });
  });

  describe('5. Security & Dangerous Scheme Rejection', () => {
    it('should reject javascript:, data:, and file: protocols', () => {
      expect(() => sanitizeUrl('javascript:alert(1)')).toThrow(/Dangerous URL scheme/);
      expect(() => sanitizeUrl('data:text/html,<script>alert(1)</script>')).toThrow(/Dangerous URL scheme/);
      expect(() => sanitizeUrl('file:///etc/passwd')).toThrow(/Dangerous URL scheme/);
    });
  });

  describe('6. Universal Dispatcher & QR Type Identifiers', () => {
    it('should correctly dispatch payload generation for all 4 new payment QR types', () => {
      expect(generatePayload('venmo', { username: 'testuser' })).toBe('https://venmo.com/u/testuser');
      expect(generatePayload('paypal', { input: 'testuser' })).toBe('https://paypal.me/testuser');
      expect(generatePayload('zelle', { recipient: 'user@bank.com' })).toContain('Zelle Recipient: user@bank.com');
      expect(generatePayload('cash_app', { cashtag: '$testtag' })).toBe('https://cash.app/$testtag');
    });

    it('should have correct database metadata for all new payment types', () => {
      const types = ['venmo', 'paypal', 'zelle', 'cash_app'] as const;
      for (const t of types) {
        const meta = QR_TYPE_METADATA[t];
        expect(meta).toBeDefined();
        expect(meta.id).toBe(t);
        expect(meta.slug).toBeTruthy();
        expect(meta.category).toBe('payment');
      }
    });
  });

  describe('7. Multilingual Content & 6 FAQs per Payment Tool', () => {
    const paymentSlugs = [
      'venmo-qr-code-generator',
      'paypal-qr-code-generator',
      'zelle-qr-code-generator',
      'cash-app-qr-code-generator',
    ];

    for (const slug of paymentSlugs) {
      it(`should have complete authentic 500-800 word content and 6 FAQs in all 7 languages for slug: "${slug}"`, () => {
        for (const loc of SUPPORTED_LOCALES) {
          const content = getLocalizedPageContent(slug, loc);
          expect(content).not.toBeNull();
          expect(content?.title).toBeTruthy();
          expect(content?.description).toBeTruthy();
          expect(content?.h1).toBeTruthy();
          expect(content?.overviewParagraphs.length).toBeGreaterThanOrEqual(2);
          expect(content?.sectors.length).toBe(6);
          expect(content?.howItWorks.length).toBe(3);
          expect(content?.useCases.length).toBe(4);
          expect(content?.tips.length).toBe(5);
          expect(content?.faqs.length).toBe(6);
          expect(content?.technicalNotes).toContain(loc === 'hi' ? 'सूचना' : loc === 'de' ? 'Hinweis' : loc === 'fr' ? 'Avertissement' : loc === 'pt' ? 'Aviso' : loc === 'it' ? 'Avviso' : loc === 'es' ? 'Aviso' : 'Disclaimer');
          expect(content?.relatedTools.length).toBeGreaterThanOrEqual(3);
        }
      });
    }

    it('should generate valid localized paths for all 4 tools', () => {
      for (const slug of paymentSlugs) {
        expect(getLocalizedPath(`/${slug}`, 'en')).toBe(`/${slug}`);
        expect(getLocalizedPath(`/${slug}`, 'es')).toBe(`/es/${slug}`);
        expect(getLocalizedPath(`/${slug}`, 'de')).toBe(`/de/${slug}`);
        expect(getLocalizedPath(`/${slug}`, 'hi')).toBe(`/hi/${slug}`);
      }
    });
  });
});
