import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'How to Add a Logo to a QR Code (Free, No Sign-Up)',
  description:
    'Learn how to add a logo to a QR code free in seconds. Upload your logo, keep it scannable with error correction, and download PNG or SVG — no sign-up.',
  badge: 'Step-by-Step Guide',
  h1: 'How to Add a Logo to a QR Code',
  subheadline:
    'Put your brand in the center of your QR code without breaking scannability. This guide shows you how to add a logo to any QR code free — plus the sizing and error-correction rules professionals use.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'Error correction is the key',
      text: 'QR codes can recover up to 30% of damaged data. Set error correction to High before adding a logo.',
    },
    {
      label: 'Keep the logo small',
      text: 'Your logo should cover no more than 20-30% of the code area, and never touch the three corner squares.',
    },
    {
      label: 'It is free',
      text: 'You can add a logo to a QR code free with no account — upload a PNG or SVG and download instantly.',
    },
    {
      label: 'Always test-scan',
      text: 'Scan the finished code with two different phones before printing a single copy.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'why-add-logo',
      heading: 'Why Add a Logo to Your QR Code?',
      paragraphs: [
        'A plain black-and-white QR code works, but nobody knows who it belongs to. Adding your logo turns an anonymous barcode into a branded asset — people are far more likely to scan a code they recognize than a mysterious square of dots. For businesses, that recognition directly translates into higher scan rates on packaging, business cards, menus, and signage.',
        'There is also a trust factor. Scam QR codes are a real concern, and cautious customers hesitate before pointing their camera at an unknown code. A familiar logo in the center signals legitimacy instantly. It tells the scanner "this code is from us" before they even open their camera app.',
        'The good news: you do not need design software or a paid plan. A logo QR code is just a standard QR code with an image overlaid in the center, protected by the QR standard\u2019s built-in error correction. Below is exactly how to do it right.',
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How Logo QR Codes Stay Scannable',
      paragraphs: [
        'Covering part of a QR code with a logo sounds like it should break it — and it would, if QR codes did not have error correction baked into the standard. Every QR code includes Reed-Solomon error correction at one of four levels: L (recovers ~7% of damaged data), M (~15%), Q (~25%), and H (~30%).',
        'When you place a logo in the center, you are deliberately "damaging" those modules. As long as the obscured area stays within what the error correction level can reconstruct, scanners read the code perfectly. This is why the single most important setting when adding a logo is cranking error correction up to High (H).',
        'One more structural detail: the three large squares in the corners — called finder patterns — are how a phone camera locates and orients the code. Your logo must never cover or touch these. Keep the logo strictly in the center, and the finder patterns untouched, and the code will scan from any angle.',
      ],
      callout: {
        title: 'The golden rule',
        text: 'Logo in the center + error correction on High + finder patterns untouched = a scannable branded QR code, every time.',
        type: 'tip',
      },
    },
    {
      id: 'step-by-step',
      heading: 'How to Add a Logo to a QR Code: Step by Step',
      paragraphs: [
        'You can do this free in under a minute. Here is the exact process:',
      ],
      subsections: [
        {
          subheading: '1. Generate your base QR code',
          text: 'Enter your URL, text, Wi-Fi details, or vCard into a free QR generator. Do this first — the logo goes on top of a finished code, not the other way around.',
        },
        {
          subheading: '2. Set error correction to High',
          text: 'Before uploading anything, switch error correction to level H (30%). This reserves the maximum data-recovery budget for the area your logo will cover.',
        },
        {
          subheading: '3. Upload your logo',
          text: 'Upload a PNG with a transparent background or an SVG for the sharpest result. A good generator centers it automatically and clears the modules underneath so the logo sits on a clean patch.',
        },
        {
          subheading: '4. Size it correctly',
          text: 'Scale the logo to cover roughly 15-20% of the code area (never more than 30%). It should sit comfortably in the middle with clear space around all three corner squares.',
        },
        {
          subheading: '5. Test-scan on two phones',
          text: 'Scan with an iPhone and an Android phone, ideally in the default camera app with no QR app installed. If either struggles, shrink the logo or simplify the design.',
        },
        {
          subheading: '6. Download in high resolution',
          text: 'Export as vector SVG for print (it scales infinitely) or high-resolution PNG for digital use. Both are free with no watermark.',
        },
      ],
      figures: [
        {
          src: '/guides/screenshots/qr-type-selector.png',
          alt: 'Choose a QR code type like Website URL, Wi-Fi or vCard in the free QR generator',
          caption: 'Step 1 — Pick your QR code type. Website URL works for most logo QR codes.',
        },
        {
          src: '/guides/screenshots/logo-upload.png',
          alt: 'Upload Brand Logo tab in the QR code customization panel',
          caption: 'Step 3 — Open the Logo tab and upload your PNG or SVG. It is centered automatically.',
        },
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'Download the finished QR code with logo as PNG or vector SVG',
          caption: 'Step 6 — Export as print-ready SVG or high-resolution PNG, free with no watermark.',
        },
      ],
    },
    {
      id: 'logo-size-rules',
      heading: 'Logo Sizing Rules: How Big Is Too Big?',
      paragraphs: [
        'Size is where most logo QR codes fail. The rule of thumb used by print professionals: the logo should occupy no more than 30% of the QR code\u2019s total area, and 15-20% is the sweet spot for maximum reliability. Remember that "area" means the full square including the quiet zone (the white margin around the code).',
        'Just as important as size is placement. The logo must sit dead center. Drifting toward any corner risks overlapping a finder pattern, and even partial coverage of those three squares can make the code unscannable. If your generator lets you drag the logo, resist the urge — centered is correct.',
        'Also keep contrast in mind. A dark logo on the dark modules of a code disappears; a light logo on a light background washes out. The logo needs to stand clearly apart from the QR pattern around it. When in doubt, put the logo on a small white rounded square "badge" — it guarantees contrast and looks professional.',
      ],
      bullets: [
        'Maximum logo coverage: 30% of code area (aim for 15-20%)',
        'Never cover or touch the three corner finder patterns',
        'Keep the mandatory quiet zone (white margin) empty — no logo bleed',
        'Ensure strong contrast between the logo and surrounding modules',
      ],
    },
    {
      id: 'common-mistakes',
      heading: '5 Mistakes That Make Logo QR Codes Unscannable',
      paragraphs: [
        'Almost every broken logo QR code fails for one of these five reasons. Check your design against each one before you print:',
      ],
      bullets: [
        'Logo too large — covering more than 30% of the code overwhelms even High error correction.',
        'Low error correction — leaving it on the default Low/Medium setting while adding a logo is the #1 cause of scan failures.',
        'Busy or low-contrast logo — intricate details and similar tones confuse scanners; simplify and boost contrast.',
        'Covering finder patterns — any overlap with the three corner squares breaks detection entirely.',
        'Skipping the test scan — always verify on real phones (iPhone + Android) at the actual print size before bulk printing.',
      ],
      callout: {
        title: 'Warning sign',
        text: 'If your phone takes more than a second to recognize the code, the logo is too big or the contrast is too low. Shrink it and try again.',
        type: 'warning',
      },
    },
    {
      id: 'best-formats',
      heading: 'Best Logo File Formats for QR Codes',
      paragraphs: [
        'Not all image formats are equal when it comes to logo overlays. SVG (vector) is the ideal choice: it scales to any size without pixelation, keeps file sizes tiny, and renders razor-sharp inside both PNG and SVG QR downloads.',
        'PNG with a transparent background is the next best option and the most common — just make sure it is high resolution (at least 500px wide) so it stays crisp when the QR code is printed large. Avoid JPG for logos: it has no transparency, so your logo will sit on an ugly white or colored box, and its compression artifacts blur fine edges.',
        'WebP works fine in modern browsers and supports transparency, making it a solid alternative to PNG if that is what you have on hand.',
      ],
    },
  ],
  faqsTitle: 'Logo QR Code FAQs',
  faqs: [
    {
      question: 'Can I add a logo to a QR code for free?',
      answer:
        'Yes. Free QR generators let you upload a PNG, JPG, WebP, or SVG logo, place it in the center automatically, and download the finished code with no account, no watermark, and no payment.',
    },
    {
      question: 'Will adding a logo make my QR code unscannable?',
      answer:
        'Not if you follow the rules: set error correction to High, keep the logo under 30% of the code area (15-20% is ideal), never cover the three corner finder patterns, and test-scan on real phones before printing.',
    },
    {
      question: 'What size should my logo be inside a QR code?',
      answer:
        'Aim for 15-20% of the total QR code area, centered, with a hard maximum of 30%. Larger logos overwhelm error correction and cause scan failures, especially on small printed codes.',
    },
    {
      question: 'Which file format is best for a QR code logo?',
      answer:
        'SVG is best (infinitely scalable, tiny file size). PNG with transparency is the best raster option — use at least 500px wide. Avoid JPG since it lacks transparency and adds compression blur.',
    },
    {
      question: 'Can I add a logo to a QR code I already generated?',
      answer:
        'If you still have the project in your generator, yes — just upload the logo and re-download. If you only have the final PNG/JPG image, you would need to recreate the code, since the logo must be merged before final export with proper error correction applied.',
    },
  ],
  ctaTitle: 'Add Your Logo to a QR Code Now',
  ctaDesc:
    'Upload your logo and generate a branded, scannable QR code in seconds — free forever, no sign-up required.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getHowToAddLogoToQrCodeData(locale: Locale): GuideArticleData {
  // English-first: daily articles ship in English; all locales fall back to it.
  return enData;
}
