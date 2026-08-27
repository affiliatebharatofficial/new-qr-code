import { z } from 'zod';

// URL schema with safe scheme validation
export const urlSchema = z.string()
  .trim()
  .min(1, 'URL is required')
  .max(2048, 'URL exceeds maximum length of 2048 characters')
  .refine((val) => {
    const lower = val.toLowerCase().trim();
    return !lower.startsWith('javascript:') && !lower.startsWith('data:') && !lower.startsWith('file:') && !lower.startsWith('vbscript:');
  }, 'Dangerous URL schemes (javascript, data, file) are prohibited.')
  .refine((val) => {
    try {
      const formatted = /^https?:\/\//i.test(val.trim()) ? val.trim() : `https://${val.trim()}`;
      const parsed = new URL(formatted);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  }, 'Please enter a valid web URL.');

// Text schema
export const textSchema = z.string()
  .min(1, 'Text content is required')
  .max(4000, 'Text exceeds maximum length of 4000 characters');

// Wi-Fi schema
export const wifiSchema = z.object({
  ssid: z.string().trim().min(1, 'Network SSID is required').max(64, 'SSID too long'),
  password: z.string().max(128, 'Password too long').optional().default(''),
  security: z.enum(['WPA', 'WEP', 'nopass', 'WPA/WPA2', 'None']).default('WPA'),
  hidden: z.boolean().default(false),
});

// vCard schema
export const vCardSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().max(100).optional().default(''),
  company: z.string().max(150).optional().default(''),
  jobTitle: z.string().max(150).optional().default(''),
  phone: z.string().max(50).optional().default(''),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  website: z.string().max(2048).optional().default(''),
  address: z.string().max(200).optional().default(''),
  city: z.string().max(100).optional().default(''),
  state: z.string().max(100).optional().default(''),
  zip: z.string().max(30).optional().default(''),
  country: z.string().max(100).optional().default(''),
});

// Email schema
export const emailSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Invalid email format'),
  subject: z.string().max(200).optional().default(''),
  message: z.string().max(2000).optional().default(''),
});

// Phone schema
export const phoneSchema = z.string()
  .trim()
  .min(3, 'Phone number is too short')
  .max(30, 'Phone number is too long')
  .regex(/^[0-9+()#\-.\s]+$/, 'Invalid phone number format')
  .refine((val) => val.replace(/[^0-9]/g, '').length >= 3, 'Phone number must contain at least 3 digits');

// SMS schema
export const smsSchema = z.object({
  phone: phoneSchema,
  message: z.string().max(1000).optional().default(''),
});

// WhatsApp schema
export const whatsAppSchema = z.object({
  phone: z.string()
    .trim()
    .min(5, 'Phone number with country code is required')
    .max(30)
    .regex(/^[0-9+]+$/, 'WhatsApp number must contain digits with country code'),
  message: z.string().max(2000).optional().default(''),
});

// Location schema
export const locationSchema = z.object({
  latitude: z.union([z.number(), z.string()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= -90 && val <= 90, 'Latitude must be between -90 and 90'),
  longitude: z.union([z.number(), z.string()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= -180 && val <= 180, 'Longitude must be between -180 and 180'),
  query: z.string().max(200).optional().default(''),
});

// UPI schema
export const upiSchema = z.object({
  upiId: z.string()
    .trim()
    .min(3, 'UPI ID is required')
    .max(100)
    .regex(/^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z]{2,}$/, 'Invalid UPI ID format (e.g. username@okhdfcbank)'),
  payeeName: z.string().max(100).optional().default(''),
  amount: z.union([z.number(), z.string()])
    .optional()
    .transform((val) => {
      if (!val) return undefined;
      const num = Number(val);
      return !isNaN(num) && num > 0 ? num : undefined;
    }),
  currency: z.string().max(5).default('INR'),
  note: z.string().max(200).optional().default(''),
});

// User auth schemas
export const signupSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Invalid email address').max(150),
  password: z.string().min(8, 'Password must be at least 8 characters').max(128),
  confirmPassword: z.string().optional(),
}).refine((data) => {
  if (data.confirmPassword !== undefined && data.confirmPassword !== data.password) {
    return false;
  }
  return true;
}, {
  message: 'Passwords do not match.',
  path: ['confirmPassword'],
});

export const loginSchema = z.object({
  email: z.string().trim().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const updateUserProfileSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
});

// Save QR Code schema (Static & Dynamic)
export const saveQrSchema = z.object({
  name: z.string().trim().min(1, 'QR Name is required').max(120),
  type: z.enum([
    'url', 'text', 'wifi', 'vcard', 'email', 'phone', 'sms', 'whatsapp', 'location', 'upi', 'social',
    'app', 'event', 'review', 'product', 'contact', 'menu', 'business_card',
    'venmo', 'paypal', 'zelle', 'cash_app'
  ]),
  payload: z.string().min(1, 'Payload is required').max(4000),
  destination: z.string().max(2048).optional(),
  styleConfig: z.record(z.any()).default({}),
  isDynamic: z.boolean().default(false),
});

export const updateQrSchema = z.object({
  name: z.string().trim().min(1, 'QR Name is required').max(120).optional(),
  payload: z.string().min(1).max(4000).optional(),
  destination: z.string().max(2048).optional(),
  styleConfig: z.record(z.any()).optional(),
  status: z.enum(['active', 'paused', 'expired', 'deleted']).optional(),
});
