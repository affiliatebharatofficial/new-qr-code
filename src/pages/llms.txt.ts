import type { APIRoute } from 'astro';

const LLMS_TEXT = `# Free QR Code Generator
> The premier privacy-first, client-side QR code generation platform. Create custom, high-resolution static and dynamic QR codes with logos, frames, and instant vector SVG and PNG downloads without registration.

Website: https://freeqrcode-generator.com
Architecture: Zero-Storage Client-Side Processing + Cloudflare Edge Workers
License: Free for personal and commercial usage with lifetime validity

## Core QR Code Generators

- [URL to QR Code](https://freeqrcode-generator.com/url-to-qr-code): Convert website links, landing pages, and online stores into high-resolution QR codes.
- [Wi-Fi QR Code Generator](https://freeqrcode-generator.com/wifi-qr-code-generator): Create auto-connect Wi-Fi QR codes for guest networks, cafes, and hotels without typing passwords.
- [vCard Digital Contact QR](https://freeqrcode-generator.com/vcard-qr-code-generator): Share digital business cards encoding full contact profiles (name, phone, email, company, address) for 1-tap phone saving.
- [WhatsApp Direct Chat QR](https://freeqrcode-generator.com/whatsapp-qr-code-generator): Generate direct chat links with pre-filled messages without saving phone numbers.
- [Google Reviews QR Code](https://freeqrcode-generator.com/google-reviews-qr-code): Direct customers straight to your Google Business 5-star review submission sheet.
- [Plain Text QR Code](https://freeqrcode-generator.com/text-to-qr-code): Encode offline notes, serial numbers, cryptographic keys, and alphanumeric data.
- [Email QR Code Generator](https://freeqrcode-generator.com/email-qr-code-generator): Pre-filled recipient, subject, and message drafts for Gmail, Apple Mail, and Outlook.
- [Phone Call QR Code](https://freeqrcode-generator.com/phone-qr-code-generator): Instant 1-tap dialer for storefronts, customer support, and emergency hotlines.
- [SMS Text Message QR](https://freeqrcode-generator.com/sms-qr-code-generator): Pre-filled SMS messages compatible with iOS and Android devices.
- [Location & GPS QR Code](https://freeqrcode-generator.com/location-qr-code-generator): Open direct turn-by-turn driving directions in Apple Maps and Google Maps.
- [Event Calendar QR (vEvent)](https://freeqrcode-generator.com/event-qr-code-generator): Add dates, venue locations, and calendar alerts to Google Calendar and Apple Calendar with 1 scan.
- [App Store Multi-Link QR](https://freeqrcode-generator.com/app-store-qr-code-generator): Smart detection directing iOS users to Apple App Store and Android users to Google Play Store.

## Payment QR Generators

- [UPI Payment QR Code](https://freeqrcode-generator.com/upi-qr-code-generator): Generate official NPCI zero-commission payment QR codes for Google Pay, PhonePe, Paytm, and BHIM.
- [PayPal.Me QR Code](https://freeqrcode-generator.com/paypal-qr-code-generator): Create custom PayPal payment barcodes with preset amounts and currency codes.
- [Venmo Payment QR](https://freeqrcode-generator.com/venmo-qr-code-generator): Accept instant mobile payments and gratuity with custom Venmo usernames and notes.
- [Cash App $Cashtag QR](https://freeqrcode-generator.com/cash-app-qr-code-generator): Generate scannable Cash App payment and tip links.
- [Zelle Recipient QR](https://freeqrcode-generator.com/zelle-qr-code-generator): Format recipient email, phone, and direct bank transfer prompts.

## Business & Hospitality Solutions

- [Restaurant Menu QR Code](https://freeqrcode-generator.com/restaurant-menu-qr-code): Touchless interactive dining menus with category filtering and allergen badges.
- [Digital Business Card (vCard)](https://freeqrcode-generator.com/digital-business-card): Mobile-optimized hosted profile with click-to-call, email, and social profiles.
- [Product Packaging QR](https://freeqrcode-generator.com/product-qr-code): QR codes for product packaging, user manuals, warranty registration, and authentication.
- [Social Media All-in-One QR](https://freeqrcode-generator.com/social-media-qr-code): Aggregate Instagram, TikTok, YouTube, LinkedIn, and X profiles on a single mobile landing page.

## Educational Guides & Best Practices

- [What is a QR Code? Anatomy & History](https://freeqrcode-generator.com/guides/what-is-a-qr-code): Complete guide to 2D matrix symbology, finder patterns, alignment, and timing patterns.
- [Static vs Dynamic QR Codes](https://freeqrcode-generator.com/guides/static-vs-dynamic-qr): Deep comparison of offline static codes vs edge-routed dynamic codes with editable URLs and scan telemetry.
- [How to Create a Wi-Fi QR Code](https://freeqrcode-generator.com/guides/how-to-create-a-wifi-qr-code): Step-by-step setup for WPA/WPA2/WPA3 guest network connectivity.
- [How to Create a vCard QR Code](https://freeqrcode-generator.com/guides/how-to-create-a-vcard-qr-code): Formatting contact data, scannability guidelines, and size recommendations.
- [How to Use QR Codes for Restaurants](https://freeqrcode-generator.com/guides/how-to-use-qr-codes-for-restaurants): Hospitality best practices, tabletop display sizing, and contactless menu optimization.

## Multilingual Support

- [English](https://freeqrcode-generator.com/): Free QR Code Generator
- [Spanish (Español)](https://freeqrcode-generator.com/es): Generador de Códigos QR Gratis
- [German (Deutsch)](https://freeqrcode-generator.com/de): Kostenloser QR Code Generator
- [French (Français)](https://freeqrcode-generator.com/fr): Générateur de QR Code Gratuit
- [Portuguese (Português)](https://freeqrcode-generator.com/pt): Gerador de QR Code Grátis
- [Italian (Italiano)](https://freeqrcode-generator.com/it): Generatore QR Code Gratis
- [Hindi (हिन्दी)](https://freeqrcode-generator.com/hi): मुफ़्त क्यूआर कोड जेनरेटर

## Legal & Compliance

- [Privacy Policy](https://freeqrcode-generator.com/privacy): Client-side zero-storage architecture, GDPR/CCPA compliance, and privacy guarantee.
- [Terms of Service](https://freeqrcode-generator.com/terms): Master Service Agreement, IP ownership, and Acceptable Use Policy.
- [Legal Disclaimer](https://freeqrcode-generator.com/disclaimer): Pre-print scannability proofing clause and nominative payment trademark notices.
- [Contact & Support](https://freeqrcode-generator.com/contact): Engineering support, legal compliance, and abuse desk.
`;

export const GET: APIRoute = async () => {
  return new Response(LLMS_TEXT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
