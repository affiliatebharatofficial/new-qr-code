import type { Locale } from '../config';
import type { LocalizedPageContent } from './types';
import { getUrlContent } from './url';
import { getVcardContent } from './vcard';

export function getProductContent(locale: Locale): LocalizedPageContent {
  const urlBase = getUrlContent(locale);
  return {
    ...urlBase,
    slug: 'product-qr-code',
    qrTypeId: 'url',
    title: locale === 'es' ? 'Generador de Código QR para Productos y Embalajes — Manuales y Garantías' :
           locale === 'de' ? 'Produktverpackung QR Code Generator — Anleitungen & Garantie' :
           locale === 'fr' ? 'Générateur de QR Code Produit et Emballage — Manuels & Garantie' :
           locale === 'pt' ? 'Gerador de QR Code de Produto e Embalagem — Manuais e Garantias' :
           locale === 'it' ? 'Generatore QR Code per Prodotti e Packaging — Manuali e Garanzie' :
           locale === 'hi' ? 'प्रोडक्ट पैकेजिंग QR कोड जेनरेटर — डिजिटल मैन्युअल व वारंटी' :
           'Product Packaging QR Code Generator — Digital User Manuals & Warranty',
    h1: locale === 'es' ? 'Generador de Código QR para Productos y Embalajes' : 'Product Packaging QR Code Generator',
    subheadline: locale === 'es' ? 'Conecta tus envases y productos físicos con manuales de instrucciones, vídeos tutoriales y registros de garantía con un escaneo.' :
                 'Connect physical retail packaging with digital user manuals, unboxing video tutorials, and warranty registration portals in one scan.',
    heading: 'Product Packaging QR Code',
    subheading: 'Upgrade retail product packaging with interactive digital user experiences.',
  };
}

export function getContactContent(locale: Locale): LocalizedPageContent {
  const vcardBase = getVcardContent(locale);
  return {
    ...vcardBase,
    slug: 'contact-qr-code',
    qrTypeId: 'vcard',
    title: locale === 'es' ? 'Generador de Código QR de Contacto — Guardar en la Agenda' :
           locale === 'de' ? 'Kontakt QR Code Generator — Im Telefonbuch speichern' :
           locale === 'fr' ? 'Générateur de QR Code de Contact — Enregistrer le Contact' :
           locale === 'pt' ? 'Gerador de QR Code de Contato — Salvar na Agenda' :
           locale === 'it' ? 'Generatore QR Code di Contatto — Salva in Rubrica' :
           locale === 'hi' ? 'कॉन्टैक्ट QR कोड जेनरेटर — सीधे फ़ोनबुक में नंबर सेव करें' :
           'Contact QR Code Generator — Save Contact to Address Book',
    h1: locale === 'es' ? 'Generador de Código QR de Contacto' : 'Contact QR Code Generator',
    subheadline: locale === 'es' ? 'Comparte tus datos de contacto profesionales para que clientes y compañeros los guarden en su agenda con un solo toque.' :
                 'Share complete verified contact information so clients, partners, and patients can save your details directly into their mobile address books.',
  };
}
