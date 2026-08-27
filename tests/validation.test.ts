import { describe, it, expect } from 'vitest';
import {
  urlSchema,
  upiSchema,
  locationSchema,
  phoneSchema,
  signupSchema,
  emailSchema,
  wifiSchema,
  smsSchema,
} from '../src/lib/validation/schemas';
import { validateLogoUpload } from '../src/lib/storage/r2';

describe('Validation Schemas & Security', () => {
  describe('URL Schema', () => {
    it('should validate valid URLs', () => {
      expect(urlSchema.safeParse('https://google.com').success).toBe(true);
      expect(urlSchema.safeParse('http://subdomain.example.org/path?q=1').success).toBe(true);
      expect(urlSchema.safeParse('example.com').success).toBe(true);
    });

    it('should reject dangerous and malicious protocols', () => {
      expect(urlSchema.safeParse('javascript:alert(document.cookie)').success).toBe(false);
      expect(urlSchema.safeParse('data:text/html,<script>alert(1)</script>').success).toBe(false);
      expect(urlSchema.safeParse('file:///etc/shadow').success).toBe(false);
      expect(urlSchema.safeParse('vbscript:msgbox').success).toBe(false);
    });
  });

  describe('Email Schema', () => {
    it('should validate RFC compliant email addresses', () => {
      expect(emailSchema.safeParse({ email: 'alex@example.com' }).success).toBe(true);
      expect(emailSchema.safeParse({ email: 'notanemail' }).success).toBe(false);
    });
  });

  describe('Wi-Fi Schema', () => {
    it('should validate Wi-Fi configurations', () => {
      expect(wifiSchema.safeParse({ ssid: 'HomeNet', security: 'WPA', password: '123' }).success).toBe(true);
      expect(wifiSchema.safeParse({ ssid: '', security: 'WPA' }).success).toBe(false);
    });
  });

  describe('Phone and SMS Schemas', () => {
    it('should validate phone formats', () => {
      expect(phoneSchema.safeParse('+15551234567').success).toBe(true);
      expect(phoneSchema.safeParse('   ').success).toBe(false);
    });

    it('should validate SMS options', () => {
      expect(smsSchema.safeParse({ phone: '+15551234567', message: 'Hello' }).success).toBe(true);
      expect(smsSchema.safeParse({ phone: '' }).success).toBe(false);
    });
  });

  describe('UPI Schema', () => {
    it('should validate standard VPA format', () => {
      expect(upiSchema.safeParse({ upiId: 'user@paytm' }).success).toBe(true);
      expect(upiSchema.safeParse({ upiId: 'merchant.store@okhdfcbank', amount: '100' }).success).toBe(true);
    });

    it('should reject invalid UPI formats without bank handle', () => {
      expect(upiSchema.safeParse({ upiId: 'invalid-vpa-without-at' }).success).toBe(false);
    });
  });

  describe('Coordinates Schema', () => {
    it('should validate real coordinates', () => {
      expect(locationSchema.safeParse({ latitude: 37.7749, longitude: -122.4194 }).success).toBe(true);
    });

    it('should reject out-of-bounds coordinates', () => {
      expect(locationSchema.safeParse({ latitude: 95, longitude: 0 }).success).toBe(false);
      expect(locationSchema.safeParse({ latitude: 0, longitude: 200 }).success).toBe(false);
    });
  });

  describe('Logo Upload Validation', () => {
    it('should validate permitted MIME types', () => {
      const validFile = new File(['content'], 'logo.png', { type: 'image/png' });
      expect(validateLogoUpload(validFile).valid).toBe(true);

      const invalidFile = new File(['content'], 'script.exe', { type: 'application/x-msdownload' });
      expect(validateLogoUpload(invalidFile).valid).toBe(false);
    });
  });

  describe('User Signup Schema', () => {
    it('should enforce password length >= 8', () => {
      expect(signupSchema.safeParse({ name: 'Bob', email: 'bob@example.com', password: '123' }).success).toBe(false);
      expect(signupSchema.safeParse({ name: 'Bob', email: 'bob@example.com', password: 'StrongPassword123!' }).success).toBe(true);
    });
  });
});
