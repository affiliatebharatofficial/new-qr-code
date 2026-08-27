import { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALE_METADATA, extractLocaleFromPath, type Locale } from './config';

export const SITE_BASE_URL = 'https://qrcode.page';

/**
 * Returns the localized URL path for a given path and target locale.
 * Default locale ('en') has no prefix (e.g. '/wifi-qr-code-generator').
 * Other locales get prefixed (e.g. '/es/wifi-qr-code-generator').
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const { cleanPath } = extractLocaleFromPath(pathname);
  const normalizedClean = cleanPath.replace(/\/+$/, '') || '';

  if (targetLocale === DEFAULT_LOCALE) {
    return normalizedClean ? `${normalizedClean}` : '/';
  }

  return normalizedClean ? `/${targetLocale}${normalizedClean}` : `/${targetLocale}`;
}

/**
 * Generates valid hreflang link elements for all 7 supported locales plus x-default.
 */
export function getHreflangTags(pathname: string): { lang: string; href: string }[] {
  const { cleanPath } = extractLocaleFromPath(pathname);
  const tags: { lang: string; href: string }[] = [];

  for (const loc of SUPPORTED_LOCALES) {
    const locPath = getLocalizedPath(cleanPath, loc);
    tags.push({
      lang: loc,
      href: `${SITE_BASE_URL}${locPath === '/' ? '' : locPath}`,
    });
  }

  // x-default points to canonical default language (English)
  const defaultPath = getLocalizedPath(cleanPath, DEFAULT_LOCALE);
  tags.push({
    lang: 'x-default',
    href: `${SITE_BASE_URL}${defaultPath === '/' ? '' : defaultPath}`,
  });

  return tags;
}

/**
 * Returns language switcher metadata items with active status and target URLs.
 */
export function getLanguageSwitcherLinks(currentPathname: string): {
  locale: Locale;
  name: string;
  nativeName: string;
  flag: string;
  href: string;
  active: boolean;
}[] {
  const { locale: currentLocale, cleanPath } = extractLocaleFromPath(currentPathname);

  return SUPPORTED_LOCALES.map((loc) => {
    const meta = LOCALE_METADATA[loc];
    const locPath = getLocalizedPath(cleanPath, loc);

    return {
      locale: loc,
      name: meta.name,
      nativeName: meta.nativeName,
      flag: meta.flag,
      href: locPath,
      active: loc === currentLocale,
    };
  });
}
