import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { SUPPORTED_LOCALES } from '../src/lib/i18n/config';
import {
  getWhatIsAQRCodeData,
  getStaticVsDynamicData,
  getWiFiQRCodeData,
  getVCardQRCodeData,
  getRestaurantQRCodeData,
  getGuideHubData,
} from '../src/lib/i18n/content/guides/index';

describe('Guides and Articles Suite', () => {
  const guideSlugs = [
    'what-is-a-qr-code',
    'static-vs-dynamic-qr',
    'how-to-create-a-wifi-qr-code',
    'how-to-create-a-vcard-qr-code',
    'how-to-use-qr-codes-for-restaurants',
  ];

  it('all 5 guide components exist and contain detailed content', () => {
    const componentsDir = path.resolve(__dirname, '../src/components/guides');
    expect(fs.existsSync(componentsDir)).toBe(true);

    const files = fs.readdirSync(componentsDir);
    expect(files.length).toBeGreaterThanOrEqual(5);

    files
      .filter((f) => f.startsWith('Article'))
      .forEach((file) => {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
        expect(content.length).toBeGreaterThan(3000);
        expect(content).toContain('FAQPage');
        expect(content).toContain('Article');
        expect(content).toContain('BreadcrumbList');
      });
  });

  it('both /guides/<slug> and /<slug> page routes exist for all 5 guides', () => {
    const pagesDir = path.resolve(__dirname, '../src/pages');

    guideSlugs.forEach((slug) => {
      // Check /guides/<slug>/index.astro
      const subguidePath = path.join(pagesDir, 'guides', slug, 'index.astro');
      expect(fs.existsSync(subguidePath)).toBe(true);

      // Check root /<slug>.astro
      const rootGuidePath = path.join(pagesDir, `${slug}.astro`);
      expect(fs.existsSync(rootGuidePath)).toBe(true);
    });
  });

  it('multilingual [lang]/[...slug].astro supports guide routing without 404', () => {
    const langSlugPath = path.resolve(__dirname, '../src/pages/[lang]/[...slug].astro');
    const content = fs.readFileSync(langSlugPath, 'utf-8');

    expect(content).toContain('isGuideWhatIsAQRCode');
    expect(content).toContain('isGuideStaticVsDynamic');
    expect(content).toContain('isGuideWiFi');
    expect(content).toContain('isGuideVCard');
    expect(content).toContain('isGuideRestaurant');
    expect(content).toContain('isGuidesIndex');
  });

  it('all 5 guides and hub return complete localized content for all 7 languages', () => {
    SUPPORTED_LOCALES.forEach((locale) => {
      // Hub
      const hub = getGuideHubData(locale);
      expect(hub.title).toBeTruthy();
      expect(hub.h1).toBeTruthy();
      expect(hub.guides.length).toBe(5);

      // What Is A QR Code
      const whatIs = getWhatIsAQRCodeData(locale);
      expect(whatIs.title).toBeTruthy();
      expect(whatIs.h1).toBeTruthy();
      expect(whatIs.sections.length).toBeGreaterThan(3);
      expect(whatIs.faqs.length).toBeGreaterThan(2);

      // Static vs Dynamic
      const staticVsDyn = getStaticVsDynamicData(locale);
      expect(staticVsDyn.title).toBeTruthy();
      expect(staticVsDyn.h1).toBeTruthy();
      expect(staticVsDyn.sections.length).toBeGreaterThan(1);

      // WiFi
      const wifi = getWiFiQRCodeData(locale);
      expect(wifi.title).toBeTruthy();
      expect(wifi.h1).toBeTruthy();
      expect(wifi.sections.length).toBeGreaterThan(1);

      // vCard
      const vcard = getVCardQRCodeData(locale);
      expect(vcard.title).toBeTruthy();
      expect(vcard.h1).toBeTruthy();
      expect(vcard.sections.length).toBeGreaterThan(1);

      // Restaurant
      const rest = getRestaurantQRCodeData(locale);
      expect(rest.title).toBeTruthy();
      expect(rest.h1).toBeTruthy();
      expect(rest.sections.length).toBeGreaterThan(1);
    });
  });
});
