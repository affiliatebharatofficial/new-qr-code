import type { QRType } from './types';

/**
 * Safe standards-compliant payload generators for all QR types.
 * Strictly sanitizes and rejects dangerous URI schemes (javascript:, data:, file:, etc.)
 */

export function sanitizeUrl(inputUrl: string): string {
  const trimmed = inputUrl.trim();
  if (!trimmed) return '';
  
  // Reject dangerous schemes
  const lower = trimmed.toLowerCase();
  if (
    lower.startsWith('javascript:') ||
    lower.startsWith('data:') ||
    lower.startsWith('file:') ||
    lower.startsWith('vbscript:')
  ) {
    throw new Error('Dangerous URL scheme detected. Only http:// and https:// URLs are allowed.');
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      throw new Error('Invalid URL protocol. Only HTTP and HTTPS are permitted.');
    }
    return withProtocol;
  } catch (err: any) {
    throw new Error(err?.message || 'Please enter a valid URL.');
  }
}

export function buildUrlPayload(url: string): string {
  return sanitizeUrl(url);
}

export function buildTextPayload(text: string): string {
  if (text === undefined || text === null) return '';
  return String(text);
}

export interface WifiPayloadOptions {
  ssid: string;
  password?: string;
  security: 'WPA' | 'WEP' | 'nopass' | 'WPA/WPA2' | 'WPA3' | 'None';
  hidden?: boolean;
}

export function escapeWifiString(str: string): string {
  // Wi-Fi QR standard escapes: \ ; , : "
  return str.replace(/([\\;,:\"])/g, '\\$1');
}

export function buildWifiPayload(options: WifiPayloadOptions): string {
  const { ssid, password = '', security, hidden = false } = options;
  if (!ssid.trim()) {
    throw new Error('SSID (Network Name) is required.');
  }

  let secType = 'WPA';
  if (security === 'WEP') secType = 'WEP';
  else if (security === 'nopass' || security === 'None') secType = 'nopass';
  else if (security === 'WPA3') secType = 'WPA';
  else secType = 'WPA';

  const escapedSsid = escapeWifiString(ssid.trim());
  const escapedPass = escapeWifiString(password);
  const hiddenFlag = hidden ? 'true' : 'false';

  if (secType === 'nopass') {
    return `WIFI:S:${escapedSsid};T:nopass;H:${hiddenFlag};;`;
  }
  return `WIFI:S:${escapedSsid};T:${secType};P:${escapedPass};H:${hiddenFlag};;`;
}

export interface VCardPayloadOptions {
  firstName: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  note?: string;
}

export function escapeVCardString(str: string): string {
  return str.replace(/([\\,;])/g, '\\$1').replace(/\r?\n/g, '\\n');
}

export function buildVCardPayload(data: VCardPayloadOptions): string {
  const firstName = (data.firstName || '').trim();
  if (!firstName) {
    throw new Error('First name is required for vCard.');
  }

  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0'];

  const n = `${escapeVCardString(data.lastName || '')};${escapeVCardString(firstName)};;;`;
  const fn = [firstName, data.lastName].filter((s): s is string => Boolean(s)).map(escapeVCardString).join(' ');
  lines.push(`N:${n}`);
  lines.push(`FN:${fn}`);

  if (data.company?.trim()) lines.push(`ORG:${escapeVCardString(data.company.trim())}`);
  if (data.jobTitle?.trim()) lines.push(`TITLE:${escapeVCardString(data.jobTitle.trim())}`);
  if (data.phone?.trim()) lines.push(`TEL;TYPE=CELL,VOICE:${data.phone.trim()}`);
  if (data.email?.trim()) lines.push(`EMAIL;TYPE=INTERNET,PREF:${data.email.trim()}`);
  if (data.website?.trim()) lines.push(`URL:${sanitizeUrl(data.website.trim())}`);

  if (data.address || data.city || data.state || data.zip || data.country) {
    const street = escapeVCardString(data.address || '');
    const city = escapeVCardString(data.city || '');
    const state = escapeVCardString(data.state || '');
    const zip = escapeVCardString(data.zip || '');
    const country = escapeVCardString(data.country || '');
    lines.push(`ADR;TYPE=WORK,POSTAL:;;${street};${city};${state};${zip};${country}`);
  }

  if (data.note?.trim()) lines.push(`NOTE:${escapeVCardString(data.note.trim())}`);

  lines.push('END:VCARD');
  return lines.join('\n');
}

export interface EmailPayloadOptions {
  email: string;
  subject?: string;
  message?: string;
}

export function buildEmailPayload(options: EmailPayloadOptions): string {
  const email = (options.email || '').trim();
  if (!email || !email.includes('@')) {
    throw new Error('Email address is required.');
  }

  const params = new URLSearchParams();
  if (options.subject?.trim()) params.set('subject', options.subject.trim());
  if (options.message?.trim()) params.set('body', options.message.trim());

  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}

export function buildPhonePayload(phone: string): string {
  const cleanPhone = phone.trim().replace(/[^0-9+*#]/g, '');
  if (!cleanPhone) {
    throw new Error('Please enter a valid phone number.');
  }
  return `tel:${cleanPhone}`;
}

export interface SmsPayloadOptions {
  phone: string;
  message?: string;
}

export function buildSmsPayload(options: SmsPayloadOptions): string {
  const cleanPhone = (options.phone || '').trim().replace(/[^0-9+*#]/g, '');
  if (!cleanPhone) {
    throw new Error('Phone number is required.');
  }

  const message = (options.message || '').trim();
  return message ? `smsto:${cleanPhone}:${message}` : `smsto:${cleanPhone}`;
}

export interface WhatsAppPayloadOptions {
  phone: string;
  message?: string;
}

export function buildWhatsAppPayload(options: WhatsAppPayloadOptions): string {
  // Strip all non-digits except a leading +
  const cleanPhone = (options.phone || '').trim().replace(/[^0-9]/g, '');
  if (!cleanPhone) {
    throw new Error('WhatsApp phone number is required.');
  }

  const message = (options.message || '').trim();
  if (message) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${cleanPhone}`;
}

export interface LocationPayloadOptions {
  latitude?: string | number;
  longitude?: string | number;
  query?: string;
}

export function buildLocationPayload(options: LocationPayloadOptions): string {
  const query = (options.query || '').trim();

  if (query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  if (options.latitude !== undefined || options.longitude !== undefined) {
    const lat = Number(options.latitude);
    const lng = Number(options.longitude);
    if (isNaN(lat) || lat < -90 || lat > 90 || isNaN(lng) || lng < -180 || lng > 180) {
      throw new Error('Valid coordinates are required: Latitude between -90 and 90, Longitude between -180 and 180.');
    }
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }

  throw new Error('Please enter valid GPS coordinates or a location query.');
}

export interface UpiPayloadOptions {
  upiId: string;
  payeeName?: string;
  amount?: string | number;
  currency?: string;
  note?: string;
}

export function buildUpiPayload(options: UpiPayloadOptions): string {
  const upiId = options.upiId.trim();
  if (!upiId || !upiId.includes('@')) {
    throw new Error('Please enter a valid UPI ID (e.g. merchant@upi).');
  }

  const params = new URLSearchParams();
  params.set('pa', upiId);
  if (options.payeeName?.trim()) params.set('pn', options.payeeName.trim());
  if (options.amount) {
    const num = Number(options.amount);
    if (!isNaN(num) && num > 0) {
      params.set('am', num.toFixed(2));
    }
  }
  params.set('cu', options.currency?.trim() || 'INR');
  if (options.note?.trim()) params.set('tn', options.note.trim());

  return `upi://pay?${params.toString()}`;
}

export interface VenmoPayloadOptions {
  username: string;
  amount?: string | number;
  note?: string;
}

export function buildVenmoPayload(options: VenmoPayloadOptions): string {
  const rawInput = (options.username || '').trim();
  if (!rawInput) {
    throw new Error('Please enter a Venmo username or profile URL.');
  }

  // If user provided a full URL, validate and sanitize
  if (/^https?:\/\//i.test(rawInput)) {
    const cleanUrl = sanitizeUrl(rawInput);
    const parsed = new URL(cleanUrl);
    if (!parsed.hostname.includes('venmo.com')) {
      throw new Error('Please enter a valid Venmo destination URL (e.g. https://venmo.com/username).');
    }
    return cleanUrl;
  }

  const cleanHandle = rawInput.replace(/^@/, '').trim();
  if (!cleanHandle || !/^[a-zA-Z0-9_-]+$/.test(cleanHandle)) {
    throw new Error('Please enter a valid alphanumeric Venmo username (e.g. yourname or @yourname).');
  }

  const params = new URLSearchParams();
  if (options.amount) {
    const num = Number(options.amount);
    if (!isNaN(num) && num > 0) {
      params.set('txn', 'pay');
      params.set('amount', num.toFixed(2));
    }
  }
  if (options.note?.trim()) {
    if (!params.has('txn')) params.set('txn', 'pay');
    params.set('note', options.note.trim());
  }

  const query = params.toString();
  return `https://venmo.com/u/${cleanHandle}${query ? `?${query}` : ''}`;
}

export interface PayPalPayloadOptions {
  input: string;
  amount?: string | number;
  currency?: string;
  description?: string;
}

export function buildPayPalPayload(options: PayPalPayloadOptions): string {
  const rawInput = (options.input || '').trim();
  if (!rawInput) {
    throw new Error('Please enter a PayPal.Me username, email, or PayPal payment link.');
  }

  // If user provided a full URL, validate and sanitize
  if (/^https?:\/\//i.test(rawInput)) {
    const cleanUrl = sanitizeUrl(rawInput);
    const parsed = new URL(cleanUrl);
    if (!parsed.hostname.includes('paypal.me') && !parsed.hostname.includes('paypal.com')) {
      throw new Error('Please enter a valid PayPal URL (e.g. https://paypal.me/yourname or https://www.paypal.com/...).');
    }
    return cleanUrl;
  }

  // If username / PayPal.me handle
  const cleanHandle = rawInput.replace(/^@/, '').replace(/^paypal\.me\//i, '').trim();
  if (!cleanHandle || !/^[a-zA-Z0-9_.-]+$/.test(cleanHandle)) {
    throw new Error('Please enter a valid PayPal.Me username or payment link.');
  }

  let baseUrl = `https://paypal.me/${cleanHandle}`;
  if (options.amount) {
    const num = Number(options.amount);
    if (!isNaN(num) && num > 0) {
      const cur = (options.currency || 'USD').trim().toUpperCase();
      baseUrl += `/${num.toFixed(2)}${cur}`;
    }
  }

  return baseUrl;
}

export interface ZellePayloadOptions {
  recipient: string; // Email, phone (+1...), or supported bank recipient destination link
  name?: string;
  note?: string;
}

export function buildZellePayload(options: ZellePayloadOptions): string {
  const rawRecipient = (options.recipient || '').trim();
  if (!rawRecipient) {
    throw new Error('Please enter a registered Zelle email address, phone number, or supported recipient URL.');
  }

  // If user provided a bank-specific or verified recipient URL
  if (/^https?:\/\//i.test(rawRecipient)) {
    return sanitizeUrl(rawRecipient);
  }

  // If email address
  if (rawRecipient.includes('@')) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawRecipient)) {
      throw new Error('Please enter a valid Zelle-enrolled email address.');
    }
    return `Zelle Recipient: ${rawRecipient}${options.name?.trim() ? ` (${options.name.trim()})` : ''}`;
  }

  // If phone number
  const cleanPhone = rawRecipient.replace(/[^0-9+]/g, '');
  if (cleanPhone.length >= 10) {
    return `Zelle Recipient: ${cleanPhone}${options.name?.trim() ? ` (${options.name.trim()})` : ''}`;
  }

  return `Zelle Recipient: ${rawRecipient}${options.name?.trim() ? ` (${options.name.trim()})` : ''}`;
}

export interface CashAppPayloadOptions {
  cashtag: string;
  amount?: string | number;
  note?: string;
}

export function buildCashAppPayload(options: CashAppPayloadOptions): string {
  const rawInput = (options.cashtag || '').trim();
  if (!rawInput) {
    throw new Error('Please enter a Cash App $Cashtag or profile URL.');
  }

  // If user provided a full URL
  if (/^https?:\/\//i.test(rawInput)) {
    const cleanUrl = sanitizeUrl(rawInput);
    const parsed = new URL(cleanUrl);
    if (!parsed.hostname.includes('cash.app')) {
      throw new Error('Please enter a valid Cash App destination URL (e.g. https://cash.app/$username).');
    }
    return cleanUrl;
  }

  const cleanTag = rawInput.replace(/^\$/, '').trim();
  if (!cleanTag || !/^[a-zA-Z0-9_-]+$/.test(cleanTag)) {
    throw new Error('Please enter a valid Cash App $Cashtag (e.g. $yourname or yourname).');
  }

  let baseUrl = `https://cash.app/$${cleanTag}`;
  if (options.amount) {
    const num = Number(options.amount);
    if (!isNaN(num) && num > 0) {
      baseUrl += `/${num.toFixed(2)}`;
    }
  }

  if (options.note?.trim()) {
    const params = new URLSearchParams();
    params.set('note', options.note.trim());
    baseUrl += `?${params.toString()}`;
  }

  return baseUrl;
}

export type SocialPlatform = 
  | 'instagram' 
  | 'facebook' 
  | 'x' 
  | 'linkedin' 
  | 'youtube' 
  | 'tiktok' 
  | 'telegram' 
  | 'pinterest' 
  | 'snapchat' 
  | 'github' 
  | 'generic';

export interface SocialPayloadOptions {
  platform: SocialPlatform;
  input: string; // Username or URL
}

export function buildSocialPayload(options: SocialPayloadOptions): string {
  const input = options.input.trim();
  if (!input) throw new Error('Social username or URL is required.');

  if (input.startsWith('http://') || input.startsWith('https://')) {
    return sanitizeUrl(input);
  }

  const cleanHandle = input.replace(/^@/, '');
  switch (options.platform) {
    case 'instagram':
      return `https://instagram.com/${cleanHandle}`;
    case 'facebook':
      return `https://facebook.com/${cleanHandle}`;
    case 'x':
      return `https://x.com/${cleanHandle}`;
    case 'linkedin':
      return `https://linkedin.com/in/${cleanHandle}`;
    case 'youtube':
      return `https://youtube.com/@${cleanHandle}`;
    case 'tiktok':
      return `https://tiktok.com/@${cleanHandle}`;
    case 'telegram':
      return `https://t.me/${cleanHandle}`;
    case 'pinterest':
      return `https://pinterest.com/${cleanHandle}`;
    case 'snapchat':
      return `https://snapchat.com/add/${cleanHandle}`;
    case 'github':
      return `https://github.com/${cleanHandle}`;
    default:
      return sanitizeUrl(input);
  }
}

export interface AppPayloadOptions {
  iosUrl?: string;
  androidUrl?: string;
  fallbackUrl?: string;
}

export function buildAppPayload(options: AppPayloadOptions): string {
  const ios = options.iosUrl?.trim();
  const android = options.androidUrl?.trim();
  const fallback = options.fallbackUrl?.trim() || ios || android;

  if (!fallback) {
    throw new Error('Please provide at least an iOS App Store URL or Google Play Store URL.');
  }

  return sanitizeUrl(fallback);
}

export interface EventPayloadOptions {
  title: string;
  startDate: string; // YYYY-MM-DD or YYYYMMDD
  startTime?: string; // HH:mm
  endDate?: string;
  endTime?: string;
  location?: string;
  description?: string;
  url?: string;
}

export function formatIcsDate(dateStr: string, timeStr?: string): string {
  const cleanDate = dateStr.replace(/[^0-9]/g, '');
  if (!timeStr) return `${cleanDate}`;
  const cleanTime = timeStr.replace(/[^0-9]/g, '').padEnd(6, '0').slice(0, 6);
  return `${cleanDate}T${cleanTime}`;
}

export function buildEventPayload(options: EventPayloadOptions): string {
  const title = (options.title || '').trim();
  if (!title) throw new Error('Event title is required.');
  if (!options.startDate) throw new Error('Event start date is required.');

  const dtStart = formatIcsDate(options.startDate, options.startTime);
  const dtEnd = options.endDate ? formatIcsDate(options.endDate, options.endTime || options.startTime) : dtStart;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//QR Code Generator//EN',
    'BEGIN:VEVENT',
    `SUMMARY:${escapeVCardString(title)}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
  ];

  if (options.location?.trim()) lines.push(`LOCATION:${escapeVCardString(options.location.trim())}`);
  if (options.description?.trim()) lines.push(`DESCRIPTION:${escapeVCardString(options.description.trim())}`);
  if (options.url?.trim()) lines.push(`URL:${sanitizeUrl(options.url.trim())}`);

  lines.push('END:VEVENT');
  lines.push('END:VCALENDAR');

  return lines.join('\n');
}

export interface ReviewPayloadOptions {
  businessName?: string;
  reviewUrl: string;
  platform?: 'google' | 'tripadvisor' | 'yelp' | 'trustpilot' | 'facebook' | 'other';
}

export function buildReviewPayload(options: ReviewPayloadOptions): string {
  const url = (options.reviewUrl || '').trim();
  if (!url) throw new Error('Review destination URL is required.');
  return sanitizeUrl(url);
}

/**
 * Universal dispatcher function
 */
export function generatePayload(type: QRType, data: any): string {
  switch (type) {
    case 'url':
      return typeof data === 'string' ? buildUrlPayload(data) : buildUrlPayload(data.url);
    case 'text':
      return typeof data === 'string' ? buildTextPayload(data) : buildTextPayload(data.text);
    case 'wifi':
      return buildWifiPayload(data);
    case 'vcard':
      return buildVCardPayload(data);
    case 'email':
      return buildEmailPayload(data);
    case 'phone':
      return typeof data === 'string' ? buildPhonePayload(data) : buildPhonePayload(data.phone);
    case 'sms':
      return buildSmsPayload(data);
    case 'whatsapp':
      return buildWhatsAppPayload(data);
    case 'location':
      return buildLocationPayload(data);
    case 'upi':
      return buildUpiPayload(data);
    case 'venmo':
      return typeof data === 'string' ? buildVenmoPayload({ username: data }) : buildVenmoPayload(data);
    case 'paypal':
      return typeof data === 'string' ? buildPayPalPayload({ input: data }) : buildPayPalPayload(data);
    case 'zelle':
      return typeof data === 'string' ? buildZellePayload({ recipient: data }) : buildZellePayload(data);
    case 'cash_app':
      return typeof data === 'string' ? buildCashAppPayload({ cashtag: data }) : buildCashAppPayload(data);
    case 'social':
      return buildSocialPayload(data);
    case 'app':
      return buildAppPayload(data);
    case 'event':
      return buildEventPayload(data);
    case 'review':
      return buildReviewPayload(data);
    default:
      return typeof data === 'string' ? sanitizeUrl(data) : JSON.stringify(data);
  }
}
