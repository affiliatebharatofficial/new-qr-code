import { describe, it, expect } from 'vitest';
import {
  buildUrlPayload,
  buildTextPayload,
  buildWifiPayload,
  buildVCardPayload,
  buildEmailPayload,
  buildPhonePayload,
  buildSmsPayload,
  buildWhatsAppPayload,
  buildLocationPayload,
  buildUpiPayload,
  buildSocialPayload,
  buildAppPayload,
  buildEventPayload,
  buildReviewPayload,
  generatePayload,
  sanitizeUrl,
} from '../src/lib/qr/payloads';
import { QR_TYPE_METADATA } from '../src/lib/qr/types';

describe('Phase 7: Advanced QR Types & Payload Architecture', () => {
  describe('1. Centralized QR Type Registry', () => {
    it('should register all 14 QR types with metadata and category mapping', () => {
      const types = Object.keys(QR_TYPE_METADATA);
      expect(types).toContain('url');
      expect(types).toContain('text');
      expect(types).toContain('wifi');
      expect(types).toContain('vcard');
      expect(types).toContain('email');
      expect(types).toContain('phone');
      expect(types).toContain('sms');
      expect(types).toContain('whatsapp');
      expect(types).toContain('location');
      expect(types).toContain('upi');
      expect(types).toContain('social');
      expect(types).toContain('app');
      expect(types).toContain('event');
      expect(types).toContain('review');
      expect(types.length).toBeGreaterThanOrEqual(14);
    });
  });

  describe('2. URL QR Payload & Protocol Security', () => {
    it('should allow valid http and https URLs', () => {
      expect(buildUrlPayload('https://example.com')).toBe('https://example.com');
      expect(buildUrlPayload('http://sub.domain.org/page?query=1#hash')).toBe('http://sub.domain.org/page?query=1#hash');
      expect(buildUrlPayload('example.com/promo')).toBe('https://example.com/promo');
    });

    it('should strictly reject dangerous URL protocols', () => {
      expect(() => buildUrlPayload('javascript:alert(1)')).toThrow(/Dangerous URL scheme/);
      expect(() => buildUrlPayload('data:text/html,<script>alert(1)</script>')).toThrow(/Dangerous URL scheme/);
      expect(() => buildUrlPayload('file:///etc/passwd')).toThrow(/Dangerous URL scheme/);
      expect(() => buildUrlPayload('vbscript:msgbox(1)')).toThrow(/Dangerous URL scheme/);
    });
  });

  describe('3. Text QR & Multilingual Unicode', () => {
    it('should support full Unicode, multi-language scripts and emojis', () => {
      const textHindi = 'नमस्ते दुनिया 🚀';
      const textArabic = 'مرحبا بالعالم ✨';
      const textChinese = '你好世界 🔥';
      expect(buildTextPayload(textHindi)).toBe(textHindi);
      expect(buildTextPayload(textArabic)).toBe(textArabic);
      expect(buildTextPayload(textChinese)).toBe(textChinese);
    });
  });

  describe('4. Wi-Fi QR & Special Character Escaping', () => {
    it('should generate valid WPA and open Wi-Fi payloads', () => {
      const wpa = buildWifiPayload({ ssid: 'HomeNetwork', password: 'SecretPassword123', security: 'WPA' });
      expect(wpa).toBe('WIFI:S:HomeNetwork;T:WPA;P:SecretPassword123;H:false;;');

      const openNet = buildWifiPayload({ ssid: 'FreeCafe', security: 'None' });
      expect(openNet).toBe('WIFI:S:FreeCafe;T:nopass;H:false;;');
    });

    it('should escape special characters in SSID and password', () => {
      const escaped = buildWifiPayload({
        ssid: 'My;Special:SSID\\Name',
        password: 'Pass"word,123;',
        security: 'WPA',
      });
      expect(escaped).toBe('WIFI:S:My\\;Special\\:SSID\\\\Name;T:WPA;P:Pass\\"word\\,123\\;;H:false;;');
    });
  });

  describe('5. vCard QR Standard (RFC 6350 / vCard 3.0)', () => {
    it('should generate standards-compliant vCard with full contact information', () => {
      const vcard = buildVCardPayload({
        firstName: 'John',
        lastName: 'Doe',
        company: 'Acme Corp, Inc.',
        jobTitle: 'VP of Engineering; Architecture',
        phone: '+15551234567',
        email: 'john@example.com',
        website: 'https://example.com',
        address: '123 Main St, Suite 400',
        city: 'San Francisco',
        state: 'CA',
        zip: '94105',
        country: 'USA',
        note: 'Special client account',
      });

      expect(vcard).toContain('BEGIN:VCARD');
      expect(vcard).toContain('VERSION:3.0');
      expect(vcard).toContain('N:Doe;John;;;');
      expect(vcard).toContain('FN:John Doe');
      expect(vcard).toContain('ORG:Acme Corp\\, Inc.');
      expect(vcard).toContain('TITLE:VP of Engineering\\; Architecture');
      expect(vcard).toContain('TEL;TYPE=CELL,VOICE:+15551234567');
      expect(vcard).toContain('EMAIL;TYPE=INTERNET,PREF:john@example.com');
      expect(vcard).toContain('ADR;TYPE=WORK,POSTAL:;;123 Main St\\, Suite 400;San Francisco;CA;94105;USA');
      expect(vcard).toContain('NOTE:Special client account');
      expect(vcard).toContain('END:VCARD');
    });
  });

  describe('6. Email, Phone & SMS Payloads', () => {
    it('should build mailto payload with query encoding', () => {
      const mail = buildEmailPayload({ email: 'support@example.com', subject: 'Need Help?', message: 'Hello & Welcome' });
      expect(mail).toContain('mailto:support@example.com?');
      expect(mail).toContain('subject=Need+Help%3F');
      expect(mail).toContain('body=Hello+%26+Welcome');
    });

    it('should build tel payload with international characters', () => {
      expect(buildPhonePayload('+1 (555) 123-4567')).toBe('tel:+15551234567');
    });

    it('should build smsto payload', () => {
      expect(buildSmsPayload({ phone: '+15551234567', message: 'Promo code' })).toBe('smsto:+15551234567:Promo code');
    });
  });

  describe('7. WhatsApp & UPI Payloads', () => {
    it('should normalize WhatsApp phone numbers to clean digits without + or dashes', () => {
      const wa = buildWhatsAppPayload({ phone: '+91 98765-43210', message: 'Hello There!' });
      expect(wa).toBe('https://wa.me/919876543210?text=Hello%20There!');
    });

    it('should build standard UPI payment URI with INR currency', () => {
      const upi = buildUpiPayload({ upiId: 'merchant@okhdfcbank', payeeName: 'Coffee Shop', amount: 150.5, note: 'Order #42' });
      expect(upi).toContain('upi://pay?');
      expect(upi).toContain('pa=merchant%40okhdfcbank');
      expect(upi).toContain('pn=Coffee+Shop');
      expect(upi).toContain('am=150.50');
      expect(upi).toContain('cu=INR');
    });
  });

  describe('8. Social, Location, Review, App & Event Payloads', () => {
    it('should build social media profile URLs across networks', () => {
      expect(buildSocialPayload({ platform: 'instagram', input: 'mybrand' })).toBe('https://instagram.com/mybrand');
      expect(buildSocialPayload({ platform: 'x', input: '@elonmusk' })).toBe('https://x.com/elonmusk');
      expect(buildSocialPayload({ platform: 'telegram', input: 'channel_news' })).toBe('https://t.me/channel_news');
      expect(buildSocialPayload({ platform: 'github', input: 'torvalds' })).toBe('https://github.com/torvalds');
    });

    it('should build location maps URL and validate coordinate bounds', () => {
      expect(buildLocationPayload({ latitude: 37.7749, longitude: -122.4194 })).toBe('https://www.google.com/maps/search/?api=1&query=37.7749,-122.4194');
      expect(() => buildLocationPayload({ latitude: 95, longitude: 0 })).toThrow(/Valid coordinates are required/);
    });

    it('should build review destination URL', () => {
      expect(buildReviewPayload({ reviewUrl: 'https://g.page/r/example/review' })).toBe('https://g.page/r/example/review');
    });

    it('should build app download URL', () => {
      expect(buildAppPayload({ iosUrl: 'https://apps.apple.com/app/id123456', androidUrl: 'https://play.google.com/store/apps/id=com.app' }))
        .toBe('https://apps.apple.com/app/id123456');
    });

    it('should generate iCalendar VEVENT payload for event QRs', () => {
      const event = buildEventPayload({
        title: 'Global Tech Summit',
        startDate: '2026-10-15',
        startTime: '10:00',
        endDate: '2026-10-15',
        endTime: '18:00',
        location: 'Silicon Valley Center',
        description: 'Annual technology conference',
      });

      expect(event).toContain('BEGIN:VCALENDAR');
      expect(event).toContain('BEGIN:VEVENT');
      expect(event).toContain('SUMMARY:Global Tech Summit');
      expect(event).toContain('DTSTART:20261015T100000');
      expect(event).toContain('DTEND:20261015T180000');
      expect(event).toContain('LOCATION:Silicon Valley Center');
      expect(event).toContain('DESCRIPTION:Annual technology conference');
      expect(event).toContain('END:VEVENT');
      expect(event).toContain('END:VCALENDAR');
    });
  });

  describe('9. Universal Payload Dispatcher', () => {
    it('should correctly route all QR types via generatePayload()', () => {
      expect(generatePayload('url', 'https://example.com')).toBe('https://example.com');
      expect(generatePayload('text', 'Hello World')).toBe('Hello World');
      expect(generatePayload('phone', '+15551234567')).toBe('tel:+15551234567');
      expect(generatePayload('review', { reviewUrl: 'https://g.page/r/123/review' })).toBe('https://g.page/r/123/review');
    });
  });
});
