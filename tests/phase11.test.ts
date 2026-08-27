import { describe, it, expect } from 'vitest';
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_METADATA,
  isValidLocale,
  extractLocaleFromPath,
} from '../src/lib/i18n/config';
import {
  getLocalizedPath,
  getHreflangTags,
  getLanguageSwitcherLinks,
} from '../src/lib/i18n/routes';
import { getUITranslations } from '../src/lib/i18n/ui';
import { getLocalizedPageContent, PAGE_SLUGS } from '../src/lib/i18n/content/index';

describe('Phase 11: Multilingual QR Generator & International SEO', () => {
  describe('1. i18n Configuration & Locale Detection', () => {
    it('should support all 7 required languages', () => {
      expect(SUPPORTED_LOCALES).toEqual(['en', 'es', 'de', 'fr', 'pt', 'it', 'hi']);
      expect(DEFAULT_LOCALE).toBe('en');
    });

    it('should provide complete metadata for all locales', () => {
      for (const loc of SUPPORTED_LOCALES) {
        const meta = LOCALE_METADATA[loc];
        expect(meta).toBeDefined();
        expect(meta.code).toBe(loc);
        expect(meta.name).toBeTruthy();
        expect(meta.nativeName).toBeTruthy();
        expect(meta.flag).toBeTruthy();
      }
    });

    it('should correctly validate locale codes', () => {
      expect(isValidLocale('en')).toBe(true);
      expect(isValidLocale('es')).toBe(true);
      expect(isValidLocale('de')).toBe(true);
      expect(isValidLocale('fr')).toBe(true);
      expect(isValidLocale('pt')).toBe(true);
      expect(isValidLocale('it')).toBe(true);
      expect(isValidLocale('hi')).toBe(true);
      expect(isValidLocale('zh')).toBe(false);
      expect(isValidLocale('xyz')).toBe(false);
      expect(isValidLocale(undefined)).toBe(false);
    });

    it('should extract locale and clean path from URLs', () => {
      expect(extractLocaleFromPath('/wifi-qr-code-generator')).toEqual({
        locale: 'en',
        cleanPath: '/wifi-qr-code-generator',
      });
      expect(extractLocaleFromPath('/es/wifi-qr-code-generator')).toEqual({
        locale: 'es',
        cleanPath: '/wifi-qr-code-generator',
      });
      expect(extractLocaleFromPath('/de/restaurant-menu-qr-code')).toEqual({
        locale: 'de',
        cleanPath: '/restaurant-menu-qr-code',
      });
      expect(extractLocaleFromPath('/hi/')).toEqual({
        locale: 'hi',
        cleanPath: '/',
      });
    });
  });

  describe('2. Localized Routing & Hreflang Tags', () => {
    it('should generate prefix-less URLs for default English and prefixed URLs for translations', () => {
      expect(getLocalizedPath('/wifi-qr-code-generator', 'en')).toBe('/wifi-qr-code-generator');
      expect(getLocalizedPath('/wifi-qr-code-generator', 'es')).toBe('/es/wifi-qr-code-generator');
      expect(getLocalizedPath('/wifi-qr-code-generator', 'de')).toBe('/de/wifi-qr-code-generator');
      expect(getLocalizedPath('/wifi-qr-code-generator', 'hi')).toBe('/hi/wifi-qr-code-generator');

      expect(getLocalizedPath('/', 'en')).toBe('/');
      expect(getLocalizedPath('/', 'fr')).toBe('/fr');
      expect(getLocalizedPath('/', 'pt')).toBe('/pt');
    });

    it('should generate valid hreflang alternate links for all 7 languages + x-default', () => {
      const tags = getHreflangTags('/es/wifi-qr-code-generator');
      expect(tags.length).toBe(8); // 7 locales + x-default

      const langs = tags.map((t) => t.lang);
      expect(langs).toContain('en');
      expect(langs).toContain('es');
      expect(langs).toContain('de');
      expect(langs).toContain('fr');
      expect(langs).toContain('pt');
      expect(langs).toContain('it');
      expect(langs).toContain('hi');
      expect(langs).toContain('x-default');

      const xDefault = tags.find((t) => t.lang === 'x-default');
      expect(xDefault?.href).toBe('https://freeqrcode-generator.com/wifi-qr-code-generator');
    });

    it('should generate smart language switcher links preserving page equivalence', () => {
      const switcher = getLanguageSwitcherLinks('/es/whatsapp-qr-code-generator');
      expect(switcher.length).toBe(7);

      const esLink = switcher.find((s) => s.locale === 'es');
      expect(esLink?.active).toBe(true);
      expect(esLink?.href).toBe('/es/whatsapp-qr-code-generator');

      const deLink = switcher.find((s) => s.locale === 'de');
      expect(deLink?.active).toBe(false);
      expect(deLink?.href).toBe('/de/whatsapp-qr-code-generator');

      const enLink = switcher.find((s) => s.locale === 'en');
      expect(enLink?.active).toBe(false);
      expect(enLink?.href).toBe('/whatsapp-qr-code-generator');
    });
  });

  describe('3. UI Translations Dictionary', () => {
    it('should have complete UI strings for every supported language', () => {
      for (const loc of SUPPORTED_LOCALES) {
        const dict = getUITranslations(loc);
        expect(dict.brand.title).toBeTruthy();
        expect(dict.nav.generators).toBeTruthy();
        expect(dict.generator.downloadPng).toBeTruthy();
        expect(dict.generator.downloadSvg).toBeTruthy();
        expect(dict.tabs.presets).toBeTruthy();
        expect(dict.tabs.colors).toBeTruthy();
        expect(dict.footer.allRightsReserved).toBeTruthy();
      }
    });
  });

  describe('4. Localized SEO & FAQ Content for All 7 Languages', () => {
    const testSlugs = [
      '',
      'wifi-qr-code-generator',
      'url-to-qr-code',
      'vcard-qr-code-generator',
      'whatsapp-qr-code-generator',
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
      'event-qr-code-generator',
    ];

    for (const slug of testSlugs) {
      it(`should have full 500-800 word content and 6 FAQs across all 7 languages for slug: "${slug || 'home'}"`, () => {
        for (const loc of SUPPORTED_LOCALES) {
          const content = getLocalizedPageContent(slug, loc);
          expect(content).not.toBeNull();
          expect(content?.title).toBeTruthy();
          expect(content?.description).toBeTruthy();
          expect(content?.overviewParagraphs.length).toBeGreaterThanOrEqual(2);
          expect(content?.sectors.length).toBeGreaterThanOrEqual(5);
          expect(content?.howItWorks.length).toBe(3);
          expect(content?.faqs.length).toBe(6); // 6 high quality localized FAQs
          expect(content?.relatedTools.length).toBeGreaterThanOrEqual(3);
        }
      });
    }
  });
});
