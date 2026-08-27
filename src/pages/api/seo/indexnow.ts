import type { APIRoute } from 'astro';
import { submitToIndexNow, INDEXNOW_KEY } from '../../../lib/seo/indexnow';
import { SUPPORTED_LOCALES } from '../../../lib/i18n/config';
import { getLocalizedPath, SITE_BASE_URL } from '../../../lib/i18n/routes';

export const POST: APIRoute = async ({ request }) => {
  const publicRoutes = [
    '',
    'pricing',
    'wifi-qr-code-generator',
    'vcard-qr-code-generator',
    'whatsapp-qr-code-generator',
    'venmo-qr-code-generator',
    'paypal-qr-code-generator',
    'zelle-qr-code-generator',
    'cash-app-qr-code-generator',
    'upi-qr-code-generator',
    'url-to-qr-code',
    'text-to-qr-code',
    'email-qr-code-generator',
    'phone-qr-code-generator',
    'sms-qr-code-generator',
    'location-qr-code-generator',
    'event-qr-code-generator',
    'google-reviews-qr-code',
    'app-store-qr-code-generator',
    'digital-business-card',
    'restaurant-menu-qr-code',
    'event-qr-code',
    'app-download-qr-code',
    'review-qr-code',
    'product-qr-code',
    'contact-qr-code',
    'social-media-qr-code',
    'qr-code-size-calculator',
    'qr-code-print-size-calculator',
    'guides',
    'guides/what-is-a-qr-code',
    'guides/static-vs-dynamic-qr',
    'guides/how-to-create-a-wifi-qr-code',
    'guides/how-to-create-a-vcard-qr-code',
    'guides/how-to-use-qr-codes-for-restaurants',
    'about',
    'privacy',
    'terms',
    'disclaimer',
    'contact',
  ];

  const allUrls: string[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const r of publicRoutes) {
      const locPath = getLocalizedPath(r ? `/${r}` : '/', locale);
      const fullUrl = locPath === '/' ? `${SITE_BASE_URL}/` : `${SITE_BASE_URL}${locPath}`;
      allUrls.push(fullUrl);
    }
  }

  const result = await submitToIndexNow(allUrls);

  return new Response(
    JSON.stringify({
      status: result.success ? 'success' : 'error',
      result,
    }),
    {
      status: result.statusCode === 202 ? 200 : result.statusCode,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
