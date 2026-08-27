import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';

// Import individual localized page content builders or modules
import { getWifiContent } from './wifi';
import { getUrlContent } from './url';
import { getVcardContent } from './vcard';
import { getWhatsappContent } from './whatsapp';
import { getUpiContent } from './upi';
import { getVenmoContent } from './venmo';
import { getPayPalContent } from './paypal';
import { getZelleContent } from './zelle';
import { getCashAppContent } from './cashApp';
import { getReviewContent } from './review';
import { getMenuContent } from './menu';
import { getDigitalBusinessCardContent } from './businessCard';
import { getSocialContent } from './social';
import { getEmailContent } from './email';
import { getPhoneContent } from './phone';
import { getSmsContent } from './sms';
import { getTextContent } from './text';
import { getLocationContent } from './location';
import { getAppContent } from './app';
import { getEventContent } from './event';
import { getMapsContent } from './maps';
import { getProductContent } from './product';
import { getContactContent } from './contact';
import { getHomeContent } from './home';

export const PAGE_SLUGS = [
  'wifi-qr-code-generator',
  'url-to-qr-code',
  'vcard-qr-code-generator',
  'whatsapp-qr-code-generator',
  'venmo-qr-code-generator',
  'paypal-qr-code-generator',
  'zelle-qr-code-generator',
  'cash-app-qr-code-generator',
  'upi-qr-code-generator',
  'google-reviews-qr-code',
  'restaurant-menu-qr-code',
  'digital-business-card',
  'social-media-qr-code',
  'email-qr-code-generator',
  'phone-qr-code-generator',
  'sms-qr-code-generator',
  'text-to-qr-code',
  'location-qr-code-generator',
  'app-store-qr-code-generator',
  'app-download-qr-code',
  'event-qr-code-generator',
  'event-qr-code',
  'google-maps-qr-code',
  'product-qr-code',
  'contact-qr-code',
  'review-qr-code',
  'qr-code-generator',
] as const;

export function getLocalizedPageContent(slug: string, locale: Locale): LocalizedPageContent | null {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '');

  if (normalizedSlug === '' || normalizedSlug === 'qr-code-generator') {
    return getHomeContent(locale);
  }

  switch (normalizedSlug) {
    case 'wifi-qr-code-generator':
      return getWifiContent(locale);
    case 'url-to-qr-code':
      return getUrlContent(locale);
    case 'vcard-qr-code-generator':
      return getVcardContent(locale);
    case 'whatsapp-qr-code-generator':
      return getWhatsappContent(locale);
    case 'venmo-qr-code-generator':
      return getVenmoContent(locale);
    case 'paypal-qr-code-generator':
      return getPayPalContent(locale);
    case 'zelle-qr-code-generator':
      return getZelleContent(locale);
    case 'cash-app-qr-code-generator':
      return getCashAppContent(locale);
    case 'upi-qr-code-generator':
      return getUpiContent(locale);
    case 'google-reviews-qr-code':
    case 'review-qr-code':
      return getReviewContent(locale);
    case 'restaurant-menu-qr-code':
      return getMenuContent(locale);
    case 'digital-business-card':
      return getDigitalBusinessCardContent(locale);
    case 'social-media-qr-code':
      return getSocialContent(locale);
    case 'email-qr-code-generator':
      return getEmailContent(locale);
    case 'phone-qr-code-generator':
      return getPhoneContent(locale);
    case 'sms-qr-code-generator':
      return getSmsContent(locale);
    case 'text-to-qr-code':
      return getTextContent(locale);
    case 'location-qr-code-generator':
      return getLocationContent(locale);
    case 'app-store-qr-code-generator':
    case 'app-download-qr-code':
      return getAppContent(locale);
    case 'event-qr-code-generator':
    case 'event-qr-code':
      return getEventContent(locale);
    case 'google-maps-qr-code':
      return getMapsContent(locale);
    case 'product-qr-code':
      return getProductContent(locale);
    case 'contact-qr-code':
      return getContactContent(locale);
    default:
      return null;
  }
}
