import type { APIRoute } from 'astro';
import { SITE_BASE_URL } from '../lib/i18n/routes';

export const GET: APIRoute = async () => {
  // lastmod is the real last-content-change date per page (guides: article
  // dateModified; other pages: last git commit touching the page). Never use
  // today's date for every URL — Google learns to ignore a lying lastmod.
  // New articles: add lastmod = publish date. Edited pages: bump lastmod.
  const publicRoutes = [
    { path: '', priority: '1.0', changefreq: 'daily', lastmod: '2026-10-07' },
    { path: 'pricing', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-29' },
    // QR Type Generators
    { path: 'wifi-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-09-23' },
    { path: 'vcard-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-09-23' },
    { path: 'whatsapp-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'venmo-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'paypal-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'zelle-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'cash-app-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'upi-qr-code-generator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'url-to-qr-code', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'text-to-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'email-qr-code-generator', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'phone-qr-code-generator', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'sms-qr-code-generator', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'location-qr-code-generator', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'event-qr-code-generator', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'google-reviews-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'app-store-qr-code-generator', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    // Use-Case Landing Pages
    { path: 'digital-business-card', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'restaurant-menu-qr-code', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'event-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-09-23' },
    { path: 'app-download-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-09-23' },
    { path: 'review-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'product-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-09-23' },
    { path: 'contact-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-09-23' },
    { path: 'social-media-qr-code', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-27' },
    // Utilities & Sizing Calculators
    { path: 'qr-code-size-calculator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    { path: 'qr-code-print-size-calculator', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-27' },
    // Guides Hub & Articles
    { path: 'guides', priority: '0.8', changefreq: 'weekly', lastmod: '2026-11-01' },
    { path: 'guides/what-is-a-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-08' },
    { path: 'guides/static-vs-dynamic-qr', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-08' },
    { path: 'guides/how-to-create-a-wifi-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-08' },
    { path: 'guides/how-to-create-a-vcard-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-08' },
    { path: 'guides/how-to-use-qr-codes-for-restaurants', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-08' },
    { path: 'guides/how-to-add-logo-to-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-07' },
    { path: 'guides/how-to-scan-qr-code-android', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-08' },
    { path: 'guides/how-to-make-qr-code-for-google-form', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-09' },
    { path: 'guides/upi-qr-code-for-merchants', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-10' },
    { path: 'guides/do-qr-codes-expire', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-11' },
    { path: 'guides/how-to-create-qr-code-for-pdf', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-12' },
    { path: 'guides/qr-code-print-size-guide', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-13' },
    { path: 'guides/how-to-make-youtube-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-14' },
    { path: 'guides/instagram-profile-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-15' },
    { path: 'guides/whatsapp-business-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-16' },
    { path: 'guides/qr-code-error-correction-explained', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-17' },
    { path: 'guides/qr-code-for-event-tickets', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-18' },
    { path: 'guides/wedding-qr-code-ideas', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-19' },
    { path: 'guides/qr-code-for-real-estate', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-20' },
    { path: 'guides/how-to-track-qr-code-scans', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-21' },
    { path: 'guides/qr-code-for-email-signup', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-22' },
    { path: 'guides/bulk-qr-code-from-excel', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-23' },
    { path: 'guides/qr-code-design-best-practices', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-24' },
    { path: 'guides/how-to-make-qr-code-for-zoom', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-25' },
    { path: 'guides/spotify-playlist-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-26' },
    { path: 'guides/telegram-channel-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-27' },
    { path: 'guides/qr-code-for-phone-number', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-28' },
    { path: 'guides/cryptocurrency-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-29' },
    { path: 'guides/qr-code-for-gyms', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-30' },
    { path: 'guides/how-to-make-location-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-10-31' },
    { path: 'guides/qr-code-for-product-packaging', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-01' },
    { path: 'guides/hotel-wifi-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-02' },
    { path: 'guides/qr-code-vs-barcode', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-03' },
    { path: 'guides/transparent-background-qr-code', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-04' },
    { path: 'guides/qr-code-for-business-cards', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-05' },
    { path: 'guides/qr-code-for-attendance-tracking', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-06' },
    { path: 'guides/qr-code-for-feedback-form', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-07' },
    { path: 'guides/how-to-make-qr-code-for-audio', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-08' },
    { path: 'guides/qr-code-for-google-review', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-09' },
    { path: 'guides/qr-code-for-app-download', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-10' },
    { path: 'guides/how-to-scan-qr-code-iphone', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-11' },
    // Legal & Support & Company & Author
    { path: 'about', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'about/firoz-khan', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'methodology', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'data-sources', priority: '0.6', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'security', priority: '0.6', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'report-problem', priority: '0.6', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'privacy', priority: '0.5', changefreq: 'monthly', lastmod: '2026-09-23' },
    { path: 'terms', priority: '0.5', changefreq: 'monthly', lastmod: '2026-08-27' },
    { path: 'disclaimer', priority: '0.5', changefreq: 'monthly', lastmod: '2026-08-27' },
    { path: 'contact', priority: '0.6', changefreq: 'monthly', lastmod: '2026-09-23' },
  ];

  // English-only sitemap. Locale routes (/es/, /de/, ...) serve the same
  // English content and canonicalize to the English URL, so listing them
  // here would re-introduce the 7x duplicate-content problem.
  const allEntries: { loc: string; priority: string; changefreq: string; lastmod: string }[] = [];
  for (const r of publicRoutes) {
    const fullUrl = r.path ? `${SITE_BASE_URL}/${r.path}` : `${SITE_BASE_URL}/`;
    allEntries.push({
      loc: fullUrl,
      priority: r.priority,
      changefreq: r.changefreq,
      lastmod: r.lastmod,
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
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
