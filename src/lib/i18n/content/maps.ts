import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';
import { getLocationContent } from './location';

export function getMapsContent(locale: Locale): LocalizedPageContent {
  const locBase = getLocationContent(locale);
  return {
    ...locBase,
    slug: 'google-maps-qr-code',
    qrTypeId: 'location',
    title:
      locale === 'es'
        ? 'Generador de Código QR de Google Maps — Navegación GPS en 1 Toque'
        : locale === 'de'
          ? 'Google Maps QR Code Generator — GPS Navigation per Scan'
          : locale === 'fr'
            ? 'Générateur de QR Code Google Maps — Navigation GPS en 1 Clic'
            : locale === 'pt'
              ? 'Gerador de QR Code do Google Maps — Navegação GPS com 1 Toque'
              : locale === 'it'
                ? 'Generatore QR Code Google Maps — Navigazione GPS in un Tocco'
                : locale === 'hi'
                  ? 'Google Maps QR कोड जेनरेटर — एक स्कैन में जीपीएस नेविगेशन खोलें'
                  : 'Google Maps QR Code Generator — Open GPS Route in 1 Scan',
    h1:
      locale === 'es'
        ? 'Generador de Código QR de Google Maps'
        : locale === 'de'
          ? 'Google Maps QR Code Generator'
          : locale === 'fr'
            ? 'Générateur de QR Code Google Maps'
            : locale === 'pt'
              ? 'Gerador de QR Code do Google Maps'
              : locale === 'it'
                ? 'Generatore QR Code Google Maps'
                : locale === 'hi'
                  ? 'Google Maps QR कोड जेनरेटर'
                  : 'Google Maps QR Code Generator',
  };
}
