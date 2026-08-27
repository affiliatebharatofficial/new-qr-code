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
  sanitizeUrl,
} from '../src/lib/qr/payloads';

describe('Phase 1 QR Payload Builders Unit Tests', () => {
  describe('URL QR', () => {
    it('should format valid https and http URLs', () => {
      expect(buildUrlPayload('https://example.com/shop?cat=electronics#top')).toBe(
        'https://example.com/shop?cat=electronics#top'
      );
      expect(buildUrlPayload('http://subdomain.example.org')).toBe('http://subdomain.example.org');
    });

    it('should normalize and auto-prepend https:// when missing', () => {
      expect(buildUrlPayload('example.com')).toBe('https://example.com');
      expect(buildUrlPayload('docs.astro.build/en/getting-started')).toBe('https://docs.astro.build/en/getting-started');
    });

    it('should throw on dangerous & unsafe protocols', () => {
      expect(() => sanitizeUrl('javascript:alert(document.cookie)')).toThrow(/Dangerous URL scheme/);
      expect(() => sanitizeUrl('data:text/html,<script>alert(1)</script>')).toThrow(/Dangerous URL scheme/);
      expect(() => sanitizeUrl('file:///etc/passwd')).toThrow(/Dangerous URL scheme/);
      expect(() => sanitizeUrl('vbscript:msgbox("test")')).toThrow(/Dangerous URL scheme/);
    });

    it('should return empty string on empty input', () => {
      expect(buildUrlPayload('')).toBe('');
    });
  });

  describe('Text QR', () => {
    it('should support plain text, multiline text, and special unicode', () => {
      expect(buildTextPayload('Hello World 123')).toBe('Hello World 123');
      const multiline = 'Line 1\nLine 2\nLine 3';
      expect(buildTextPayload(multiline)).toBe(multiline);
      const unicode = 'QR Code Generator ✨ 🚀 日本語 100% 💖';
      expect(buildTextPayload(unicode)).toBe(unicode);
    });
  });

  describe('Wi-Fi QR', () => {
    it('should generate standard WPA Wi-Fi payload', () => {
      const payload = buildWifiPayload({
        ssid: 'MyHomeWiFi',
        password: 'SecretPassword',
        security: 'WPA',
        hidden: false,
      });
      expect(payload).toBe('WIFI:S:MyHomeWiFi;T:WPA;P:SecretPassword;H:false;;');
    });

    it('should escape special characters (; , : \\ ") in SSID and password', () => {
      const payload = buildWifiPayload({
        ssid: 'Cafe;WiFi:5G',
        password: 'Pass,word;123"\\',
        security: 'WPA',
      });
      expect(payload).toContain('S:Cafe\\;WiFi\\:5G;');
      expect(payload).toContain('P:Pass\\,word\\;123\\"\\\\;');
    });

    it('should handle open / unencrypted networks without password', () => {
      const payload = buildWifiPayload({
        ssid: 'PublicLibrary',
        security: 'nopass',
      });
      expect(payload).toBe('WIFI:S:PublicLibrary;T:nopass;H:false;;');
    });

    it('should handle hidden networks', () => {
      const payload = buildWifiPayload({
        ssid: 'SecretSSID',
        password: '123',
        security: 'WPA',
        hidden: true,
      });
      expect(payload).toBe('WIFI:S:SecretSSID;T:WPA;P:123;H:true;;');
    });

    it('should throw if SSID is empty', () => {
      expect(() => buildWifiPayload({ ssid: '', security: 'WPA' })).toThrow(/SSID/);
    });
  });

  describe('vCard QR', () => {
    it('should generate minimal valid vCard', () => {
      const payload = buildVCardPayload({ firstName: 'Alex' });
      expect(payload).toContain('BEGIN:VCARD');
      expect(payload).toContain('VERSION:3.0');
      expect(payload).toContain('FN:Alex');
      expect(payload).toContain('END:VCARD');
    });

    it('should generate full vCard 3.0 with escaped fields and address', () => {
      const payload = buildVCardPayload({
        firstName: 'John, Jr.',
        lastName: 'Doe; Smith',
        company: 'Acme; Inc.',
        jobTitle: 'Software Architect',
        phone: '+15551234567',
        email: 'john.doe@example.com',
        website: 'https://johndoe.me',
        address: '123 Market St, Suite 400',
        city: 'San Francisco',
        state: 'CA',
        zip: '94105',
        country: 'USA',
      });

      expect(payload).toContain('N:Doe\\; Smith;John\\, Jr.;;;');
      expect(payload).toContain('FN:John\\, Jr. Doe\\; Smith');
      expect(payload).toContain('ORG:Acme\\; Inc.');
      expect(payload).toContain('TEL;TYPE=CELL,VOICE:+15551234567');
      expect(payload).toContain('EMAIL;TYPE=INTERNET,PREF:john.doe@example.com');
      expect(payload).toContain('URL:https://johndoe.me');
      expect(payload).toContain('ADR;TYPE=WORK,POSTAL:;;123 Market St\\, Suite 400;San Francisco;CA;94105;USA');
    });
  });

  describe('Email QR', () => {
    it('should generate mailto URI with encoded subject and body', () => {
      const payload = buildEmailPayload({
        email: 'contact@example.com',
        subject: 'General Inquiry & Support',
        message: 'Hello, please send details: #1024',
      });
      expect(payload).toBe(
        'mailto:contact@example.com?subject=General+Inquiry+%26+Support&body=Hello%2C+please+send+details%3A+%231024'
      );
    });

    it('should throw if email is empty', () => {
      expect(() => buildEmailPayload({ email: '' })).toThrow(/Email address is required/);
    });
  });

  describe('Phone QR', () => {
    it('should format tel URI removing spaces, dashes and parens', () => {
      expect(buildPhonePayload('+1 (555) 123-4567')).toBe('tel:+15551234567');
    });

    it('should throw on empty or invalid phone', () => {
      expect(() => buildPhonePayload('   ')).toThrow(/valid phone number/);
      expect(() => buildPhonePayload('abcdef')).toThrow(/valid phone number/);
    });
  });

  describe('SMS QR', () => {
    it('should generate smsto URI with phone and message body', () => {
      expect(buildSmsPayload({ phone: '+15551234567', message: 'Hello There!' })).toBe(
        'smsto:+15551234567:Hello There!'
      );
    });

    it('should throw if phone is missing', () => {
      expect(() => buildSmsPayload({ phone: '', message: 'hi' })).toThrow(/Phone number is required/);
    });
  });

  describe('WhatsApp QR', () => {
    it('should generate valid wa.me URL with clean digits and encoded text', () => {
      const payload = buildWhatsAppPayload({
        phone: '+1 (555) 123-4567',
        message: 'Hi! I want to order #1.',
      });
      expect(payload).toBe('https://wa.me/15551234567?text=Hi!%20I%20want%20to%20order%20%231.');
    });

    it('should throw if phone is missing', () => {
      expect(() => buildWhatsAppPayload({ phone: '' })).toThrow(/WhatsApp phone number is required/);
    });
  });

  describe('Location QR', () => {
    it('should generate Google Maps coordinate link for valid lat/lng', () => {
      const payload = buildLocationPayload({ latitude: 37.7749, longitude: -122.4194 });
      expect(payload).toBe('https://www.google.com/maps/search/?api=1&query=37.7749,-122.4194');
    });

    it('should encode location query when provided', () => {
      const payload = buildLocationPayload({
        latitude: 37.7749,
        longitude: -122.4194,
        query: 'Empire State Building, NY',
      });
      expect(payload).toBe('https://www.google.com/maps/search/?api=1&query=Empire%20State%20Building%2C%20NY');
    });

    it('should throw on out-of-bounds coordinates', () => {
      expect(() => buildLocationPayload({ latitude: 95, longitude: 0 })).toThrow(/Valid coordinates/);
      expect(() => buildLocationPayload({ latitude: 0, longitude: 200 })).toThrow(/Valid coordinates/);
      expect(() => buildLocationPayload({ latitude: 'invalid', longitude: 0 })).toThrow(/Valid coordinates/);
    });
  });

  describe('UPI Payment QR', () => {
    it('should generate NPCI compliant upi://pay URI with optional amount', () => {
      const withAmount = buildUpiPayload({
        upiId: 'merchant@okhdfcbank',
        payeeName: 'Acme Coffee',
        amount: 250.5,
        currency: 'INR',
        note: 'Order #42',
      });
      expect(withAmount).toContain('upi://pay?');
      expect(withAmount).toContain('pa=merchant%40okhdfcbank');
      expect(withAmount).toContain('pn=Acme+Coffee');
      expect(withAmount).toContain('am=250.50');
      expect(withAmount).toContain('cu=INR');
      expect(withAmount).toContain('tn=Order+%2342');

      const withoutAmount = buildUpiPayload({
        upiId: 'user@paytm',
      });
      expect(withoutAmount).toBe('upi://pay?pa=user%40paytm&cu=INR');
    });

    it('should throw on invalid UPI ID without @', () => {
      expect(() => buildUpiPayload({ upiId: 'invalid-vpa' })).toThrow(/valid UPI ID/);
    });
  });

  describe('Social QR', () => {
    it('should convert usernames to full platform URLs or preserve URLs', () => {
      expect(buildSocialPayload({ platform: 'instagram', input: '@designhub' })).toBe('https://instagram.com/designhub');
      expect(buildSocialPayload({ platform: 'linkedin', input: 'john-doe' })).toBe('https://linkedin.com/in/john-doe');
      expect(buildSocialPayload({ platform: 'youtube', input: 'acme-studio' })).toBe('https://youtube.com/@acme-studio');
      expect(buildSocialPayload({ platform: 'x', input: 'techradar' })).toBe('https://x.com/techradar');
      expect(buildSocialPayload({ platform: 'generic', input: 'https://example.com/me' })).toBe('https://example.com/me');
    });
  });
});
