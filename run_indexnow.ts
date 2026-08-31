import { SUPPORTED_LOCALES } from './src/lib/i18n/config';
import { PAGE_SLUGS } from './src/lib/i18n/content/index';
import { INDEXNOW_KEY, INDEXNOW_HOST, INDEXNOW_KEY_LOCATION } from './src/lib/seo/indexnow';

const baseDomain = 'https://freeqrcode-generator.com';

const extraSlugs = [
  '',
  'pricing',
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

const allSlugs = Array.from(new Set([...extraSlugs, ...PAGE_SLUGS]));

const urls: string[] = [];

// English root URLs
for (const slug of allSlugs) {
  urls.push(slug ? `${baseDomain}/${slug}` : `${baseDomain}/`);
}

// Multilingual URLs
for (const locale of SUPPORTED_LOCALES) {
  if (locale === 'en') continue;
  for (const slug of allSlugs) {
    urls.push(slug ? `${baseDomain}/${locale}/${slug}` : `${baseDomain}/${locale}`);
  }
}

const uniqueUrls = Array.from(new Set(urls));
console.log(`Total URLs collected for IndexNow submission: ${uniqueUrls.length}`);

const payload = {
  host: INDEXNOW_HOST,
  key: INDEXNOW_KEY,
  keyLocation: INDEXNOW_KEY_LOCATION,
  urlList: uniqueUrls,
};

console.log(`Submitting with Key: ${INDEXNOW_KEY}`);
console.log(`Key location: ${INDEXNOW_KEY_LOCATION}`);

async function pingEndpoint(name: string, endpoint: string) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'FreeQRCodeGenerator-IndexNow/1.0',
      },
      body: JSON.stringify(payload),
    });
    console.log(`[${name}] Status: ${res.status} ${res.statusText}`);
    const text = await res.text();
    if (text) console.log(`[${name}] Response Body:`, text);
  } catch (err: any) {
    console.error(`[${name}] Error:`, err.message);
  }
}

async function run() {
  await pingEndpoint('IndexNow Universal API', 'https://api.indexnow.org/indexnow');
  await pingEndpoint('Bing IndexNow', 'https://www.bing.com/indexnow');
  await pingEndpoint('Yandex IndexNow', 'https://yandex.com/indexnow');
}

run();
