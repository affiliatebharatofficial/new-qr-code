export type QRType = 
  | 'url'
  | 'text'
  | 'wifi'
  | 'vcard'
  | 'email'
  | 'phone'
  | 'sms'
  | 'whatsapp'
  | 'location'
  | 'upi'
  | 'venmo'
  | 'paypal'
  | 'zelle'
  | 'cash_app'
  | 'social'
  | 'app'
  | 'event'
  | 'review';

export type QRCategory = 'popular' | 'business' | 'payment' | 'personal' | 'other';

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type DotType = 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';

export type EyeFrameType = 'square' | 'rounded' | 'circle';

export type EyeDotType = 'square' | 'rounded' | 'circle';

export interface GradientColorStop {
  offset: number;
  color: string;
}

export interface GradientConfig {
  type: 'linear' | 'radial';
  rotation: number;
  colorStops: GradientColorStop[];
}

export interface ColorConfig {
  foreground: string;
  background: string;
  isTransparent: boolean;
  useGradient: boolean;
  gradient?: GradientConfig;
}

export interface LogoConfig {
  src?: string; // Data URL or R2 URL
  sizeRatio: number; // e.g. 0.25 (25% of QR width)
  margin: number;
  hideBackgroundDots: boolean;
  backgroundBadge: boolean;
  badgeColor: string;
  badgeRadius: number;
}

export interface QRDesignOptions {
  type: QRType;
  payload: string;
  size: number;
  margin: number;
  errorCorrection: ErrorCorrectionLevel;
  dotType: DotType;
  eyeFrameType: EyeFrameType;
  eyeDotType: EyeDotType;
  colors: ColorConfig;
  logo: LogoConfig;
}

export interface ScannabilityWarning {
  level: 'warning' | 'error' | 'info';
  message: string;
}

export interface QRTypeMetadata {
  id: QRType;
  name: string;
  description: string;
  category: QRCategory;
  iconName: string;
  slug: string;
  popular: boolean;
  supportsDynamic: boolean;
}

export const QR_TYPE_METADATA: Record<QRType, QRTypeMetadata> = {
  url: {
    id: 'url',
    name: 'Website URL',
    description: 'Open website links, landing pages, or digital content',
    category: 'popular',
    iconName: 'Globe',
    slug: 'url-to-qr-code',
    popular: true,
    supportsDynamic: true,
  },
  wifi: {
    id: 'wifi',
    name: 'Wi-Fi Network',
    description: 'Connect to Wi-Fi instantly without typing passwords',
    category: 'popular',
    iconName: 'Wifi',
    slug: 'wifi-qr-code-generator',
    popular: true,
    supportsDynamic: false,
  },
  vcard: {
    id: 'vcard',
    name: 'vCard / Contact',
    description: 'Save contact details, name, phone, email & address',
    category: 'business',
    iconName: 'Contact',
    slug: 'vcard-qr-code-generator',
    popular: true,
    supportsDynamic: false,
  },
  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Start instant WhatsApp conversations with pre-filled message',
    category: 'popular',
    iconName: 'MessageCircle',
    slug: 'whatsapp-qr-code-generator',
    popular: true,
    supportsDynamic: true,
  },
  venmo: {
    id: 'venmo',
    name: 'Venmo',
    description: 'Direct customers to your Venmo profile or payment destination',
    category: 'payment',
    iconName: 'DollarSign',
    slug: 'venmo-qr-code-generator',
    popular: true,
    supportsDynamic: true,
  },
  paypal: {
    id: 'paypal',
    name: 'PayPal',
    description: 'Direct payments to PayPal.Me link or merchant payment page',
    category: 'payment',
    iconName: 'CreditCard',
    slug: 'paypal-qr-code-generator',
    popular: true,
    supportsDynamic: true,
  },
  zelle: {
    id: 'zelle',
    name: 'Zelle',
    description: 'Encode registered Zelle recipient email, phone, or bank link',
    category: 'payment',
    iconName: 'Zap',
    slug: 'zelle-qr-code-generator',
    popular: true,
    supportsDynamic: false,
  },
  cash_app: {
    id: 'cash_app',
    name: 'Cash App',
    description: 'Direct payments to $Cashtag profile and payment destination',
    category: 'payment',
    iconName: 'DollarSign',
    slug: 'cash-app-qr-code-generator',
    popular: true,
    supportsDynamic: true,
  },
  upi: {
    id: 'upi',
    name: 'UPI Payment',
    description: 'Generate standard UPI payment QRs for instant mobile transfers',
    category: 'payment',
    iconName: 'IndianRupee',
    slug: 'upi-qr-code-generator',
    popular: true,
    supportsDynamic: false,
  },
  social: {
    id: 'social',
    name: 'Social Media',
    description: 'Link Instagram, LinkedIn, YouTube, X, TikTok & Facebook profiles',
    category: 'personal',
    iconName: 'Share2',
    slug: 'social-media-qr-code',
    popular: true,
    supportsDynamic: true,
  },
  review: {
    id: 'review',
    name: 'Business Review',
    description: 'Direct customers to Google, Yelp, or TripAdvisor review pages',
    category: 'business',
    iconName: 'Star',
    slug: 'google-reviews-qr-code',
    popular: true,
    supportsDynamic: true,
  },
  event: {
    id: 'event',
    name: 'Event / Calendar',
    description: 'Add events, webinars, or reminders to Google/Apple calendars',
    category: 'business',
    iconName: 'Calendar',
    slug: 'event-qr-code-generator',
    popular: false,
    supportsDynamic: false,
  },
  app: {
    id: 'app',
    name: 'App Download',
    description: 'Direct users to iOS App Store or Google Play Store',
    category: 'business',
    iconName: 'Smartphone',
    slug: 'app-store-qr-code-generator',
    popular: false,
    supportsDynamic: true,
  },
  email: {
    id: 'email',
    name: 'Email Message',
    description: 'Pre-fill recipient email, subject line, and body message',
    category: 'business',
    iconName: 'Mail',
    slug: 'email-qr-code-generator',
    popular: false,
    supportsDynamic: false,
  },
  phone: {
    id: 'phone',
    name: 'Phone Call',
    description: 'Dial phone numbers directly from camera scans',
    category: 'personal',
    iconName: 'Phone',
    slug: 'phone-qr-code-generator',
    popular: false,
    supportsDynamic: false,
  },
  sms: {
    id: 'sms',
    name: 'SMS Text',
    description: 'Send pre-composed SMS messages to a specified number',
    category: 'personal',
    iconName: 'MessageSquare',
    slug: 'sms-qr-code-generator',
    popular: false,
    supportsDynamic: false,
  },
  location: {
    id: 'location',
    name: 'Location / Maps',
    description: 'Open exact coordinates or places on Google Maps / Apple Maps',
    category: 'business',
    iconName: 'MapPin',
    slug: 'location-qr-code-generator',
    popular: false,
    supportsDynamic: true,
  },
  text: {
    id: 'text',
    name: 'Plain Text',
    description: 'Display raw text, messages, notes, or promo codes',
    category: 'other',
    iconName: 'FileText',
    slug: 'text-to-qr-code',
    popular: false,
    supportsDynamic: false,
  },
};
