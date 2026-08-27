import type { APIRoute } from 'astro';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../lib/i18n/config';
import { getLocalizedPath, SITE_BASE_URL } from '../lib/i18n/routes';

export const GET: APIRoute = async () => {
  const publicRoutes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'pricing', priority: '0.8', changefreq: 'weekly' },
    // QR Type Generators
    { path: 'wifi-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'vcard-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'whatsapp-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'venmo-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'paypal-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'zelle-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'cash-app-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'upi-qr-code-generator', priority: '0.9', changefreq: 'weekly' },
    { path: 'url-to-qr-code', priority: '0.9', changefreq: 'weekly' },
    { path: 'text-to-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'email-qr-code-generator', priority: '0.8', changefreq: 'weekly' },
    { path: 'phone-qr-code-generator', priority: '0.8', changefreq: 'weekly' },
    { path: 'sms-qr-code-generator', priority: '0.8', changefreq: 'weekly' },
    { path: 'location-qr-code-generator', priority: '0.8', changefreq: 'weekly' },
    { path: 'event-qr-code-generator', priority: '0.8', changefreq: 'weekly' },
    { path: 'google-reviews-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'app-store-qr-code-generator', priority: '0.8', changefreq: 'weekly' },
    // Use-Case Landing Pages
    { path: 'digital-business-card', priority: '0.9', changefreq: 'weekly' },
    { path: 'restaurant-menu-qr-code', priority: '0.9', changefreq: 'weekly' },
    { path: 'event-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'app-download-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'review-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'product-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'contact-qr-code', priority: '0.8', changefreq: 'weekly' },
    { path: 'social-media-qr-code', priority: '0.8', changefreq: 'weekly' },
    // Guides Hub & Articles
    { path: 'guides', priority: '0.8', changefreq: 'weekly' },
    { path: 'guides/what-is-a-qr-code', priority: '0.7', changefreq: 'monthly' },
    { path: 'guides/static-vs-dynamic-qr', priority: '0.7', changefreq: 'monthly' },
    { path: 'guides/how-to-create-a-wifi-qr-code', priority: '0.7', changefreq: 'monthly' },
    { path: 'guides/how-to-create-a-vcard-qr-code', priority: '0.7', changefreq: 'monthly' },
    { path: 'guides/how-to-use-qr-codes-for-restaurants', priority: '0.7', changefreq: 'monthly' },
  ];

  // Generate URLs across all 7 supported languages
  const allEntries: { loc: string; priority: string; changefreq: string }[] = [];

  for (const locale of SUPPORTED_LOCALES) {
    for (const r of publicRoutes) {
      const locPath = getLocalizedPath(r.path ? `/${r.path}` : '/', locale);
      const fullUrl = locPath === '/' ? `${SITE_BASE_URL}/` : `${SITE_BASE_URL}${locPath}`;
      allEntries.push({
        loc: fullUrl,
        priority: locale === DEFAULT_LOCALE ? r.priority : (parseFloat(r.priority) * 0.9).toFixed(1),
        changefreq: r.changefreq,
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
