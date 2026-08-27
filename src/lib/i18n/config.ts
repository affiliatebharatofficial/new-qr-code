export const SUPPORTED_LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'it', 'hi'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleMetadata {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  dateFormat: string;
}

export const LOCALE_METADATA: Record<Locale, LocaleMetadata> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
    dateFormat: 'MM/DD/YYYY',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    dateFormat: 'DD.MM.YYYY',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
  },
};

export function isValidLocale(lang: string | undefined): lang is Locale {
  if (!lang) return false;
  return SUPPORTED_LOCALES.includes(lang as Locale);
}

export function extractLocaleFromPath(pathname: string): { locale: Locale; cleanPath: string } {
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/');
  const firstSegment = segments[0];

  if (isValidLocale(firstSegment)) {
    const cleanSegments = segments.slice(1);
    const cleanPath = cleanSegments.length > 0 ? `/${cleanSegments.join('/')}` : '/';
    return { locale: firstSegment, cleanPath };
  }

  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return { locale: DEFAULT_LOCALE, cleanPath };
}
