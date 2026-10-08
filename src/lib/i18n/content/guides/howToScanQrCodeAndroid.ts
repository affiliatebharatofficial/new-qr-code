import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'How to Scan a QR Code on Android (Camera, Lens & Tips)',
  description:
    'Learn how to scan a QR code on Android with the camera app, Google Lens, or quick settings — no extra app needed. Includes fixes for failed scans.',
  badge: 'Step-by-Step Guide',
  h1: 'How to Scan a QR Code on Android',
  subheadline:
    'Every modern Android phone can scan QR codes out of the box — no third-party app required. This guide shows you the three built-in ways to do it, brand-by-brand differences, and exactly what to do when a scan fails.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'No app needed',
      text: 'Android 9 and later scan QR codes natively — just point the default camera app at the code.',
    },
    {
      label: 'Three built-in scanners',
      text: 'Use the Camera app, Google Lens, or the Quick Settings QR tile depending on your phone.',
    },
    {
      label: 'Scan from screenshots',
      text: 'Google Lens can read QR codes saved in your photos or screenshots — no second device needed.',
    },
    {
      label: 'Check before you tap',
      text: 'Android shows a URL preview before opening it. Verify the link looks legitimate before tapping.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'can-android-scan-qr-codes',
      heading: 'Can Android Phones Scan QR Codes Without an App?',
      paragraphs: [
        'Yes — and this is the single most common misconception about scanning QR codes on Android. Since Android 9 (Pie, released 2018), QR code detection has been baked into the operating system and Google\u2019s camera software. Any phone running a reasonably recent Android version scans QR codes the moment you point the default Camera app at one.',
        'That means you do not need to download a "QR scanner" app from the Play Store. In fact, most dedicated QR scanner apps are a bad idea: they are typically stuffed with ads, request permissions they do not need (contacts, location, full photo access), and offer nothing the built-in scanner cannot do. If you searched "how to scan qr code on android" hoping for an app recommendation, you can stop — the best scanner is already on your phone.',
        'There are three native ways to scan, and which one is fastest depends on your phone brand and Android version: the default Camera app, Google Lens, and the Quick Settings tile. All three are free, offline-capable for basic URL codes, and private — scans stay on your device.',
      ],
      callout: {
        title: 'Quick check',
        text: 'Not sure your phone is up to date? Open Settings → About phone → Android version. Anything Android 9 or newer has native QR scanning.',
        type: 'info',
      },
    },
    {
      id: 'scan-with-camera-app',
      heading: 'How to Scan a QR Code on Android With the Camera App',
      paragraphs: [
        'The Camera app is the fastest method and works on nearly every Android phone. Here is the exact process:',
      ],
      subsections: [
        {
          subheading: '1. Open the default Camera app',
          text: 'Launch the pre-installed Camera app — not a third-party camera. Point it at the QR code so the whole code, including the white margin around it, is inside the viewfinder.',
        },
        {
          subheading: '2. Hold steady for 1-2 seconds',
          text: 'Hold the phone about 15-25 cm (6-10 inches) from the code and keep it still. The camera needs a sharp, in-focus frame to decode the pattern — waving the phone around is the most common reason scans fail.',
        },
        {
          subheading: '3. Wait for the detection indicator',
          text: 'The phone will highlight the code with a frame or corner brackets and show a pop-up banner or chip with the decoded content (a URL, Wi-Fi name, or text preview).',
        },
        {
          subheading: '4. Tap the banner to open it',
          text: 'Tap the pop-up to open the link in your browser, connect to the Wi-Fi network, or save the contact. Nothing opens automatically — you always confirm first, which is a built-in safety feature.',
        },
        {
          subheading: '5. If nothing appears, enable it',
          text: 'On some phones the feature is off by default. Open the Camera app → Settings (gear icon) → turn on "Scan QR codes" (Samsung) or "Google Lens suggestions" (Pixel). Then try again.',
        },
      ],
      figures: [
        {
          src: '/guides/screenshots/generator-hero.png',
          alt: 'Free QR code generator homepage where you can create a test QR code to practice scanning on Android',
          caption: 'Tip — Create a free test QR code on the generator and point your Android camera at your computer screen to practice.',
        },
      ],
    },
    {
      id: 'scan-with-google-lens',
      heading: 'Scan With Google Lens (When the Camera Misses It)',
      paragraphs: [
        'Google Lens is Google\u2019s visual search engine, and it doubles as the most capable QR scanner on Android. If your Camera app does not detect a code — or you want extra options like copying text out of it — Lens is the answer. It is pre-installed on most Android phones as part of Google services.',
        'There are several ways to launch it: open the Google app and tap the Lens icon in the search bar, say "Hey Google, scan this QR code," or look for a Lens button inside your Camera app (many brands put it right in the viewfinder). Once open, point it at the code or tap the shutter button — Lens will decode it and show the link or content as an overlay.',
        'Lens shines in tricky situations. It reads damaged, curved, or partially obscured codes that the basic camera scanner gives up on, and it works from odd angles. It also translates and copies text found inside the code, which is handy for QR codes on foreign-language signage or business cards.',
      ],
      callout: {
        title: 'Lens vs Camera',
        text: 'The Camera app is faster for a quick scan. Google Lens is more powerful for damaged codes, odd angles, and extracting text. Use the camera first; fall back to Lens.',
        type: 'tip',
      },
    },
    {
      id: 'scan-from-photo-screenshot',
      heading: 'Scan a QR Code From a Photo or Screenshot on Android',
      paragraphs: [
        'What if the QR code is in your gallery — a screenshot someone sent you, a saved flyer, or a photo of a restaurant menu? You cannot point your camera at your own screen, but Google Lens can read images directly.',
        'Open the Photos app (or your gallery), find the image containing the QR code, and tap the Lens icon. Lens scans the saved image and presents the decoded link or content just like a live scan. On newer Pixel and Samsung phones, the Camera app\u2019s Lens mode also offers a gallery picker for the same purpose.',
        'One more place QR codes hide on Android: Google Wallet and payment apps often display your own codes (boarding passes, loyalty cards) — but those are for others to scan, not you. For any code sent to you as an image, Lens-from-gallery is the workflow.',
      ],
    },
    {
      id: 'brand-specific-scanners',
      heading: 'Samsung, Pixel, Xiaomi & OnePlus: Where the Scanner Hides',
      paragraphs: [
        'The built-in scanner exists on all major brands, but the exact location and any extra steps vary slightly. Here is where to find it on the most popular Android phones:',
      ],
      subsections: [
        {
          subheading: 'Samsung Galaxy',
          text: 'Open Camera → tap Settings → enable "Scan QR codes." Alternatively, swipe down twice to open Quick Settings and tap the "Scan QR code" tile (add it via the + button if missing). Bixby Vision also scans from the camera.',
        },
        {
          subheading: 'Google Pixel',
          text: 'The Camera app detects QR codes automatically — no setting to enable. Google Lens is built into the viewfinder modes. Circle to Search (long-press the home bar) can also scan any code visible on screen.',
        },
        {
          subheading: 'Xiaomi / Redmi / POCO',
          text: 'MIUI\u2019s Camera app scans QR codes by default. You can also open the built-in "Scanner" system app, or use the QR tile in the Control Center (swipe down from the top-right corner).',
        },
        {
          subheading: 'OnePlus / Oppo / Realme',
          text: 'The Camera app detects QR codes automatically on recent OxygenOS/ColorOS versions. A "Scan" tile is also available in Quick Settings, and Google Lens is integrated into the camera modes.',
        },
        {
          subheading: 'Older or budget phones',
          text: 'If the Camera app shows no QR option, install Google Lens from the Play Store (it is Google\u2019s own app, free, no ads) — it brings full scanning to any phone running Android 6 or newer.',
        },
      ],
    },
    {
      id: 'scan-failures-fixed',
      heading: 'Why Your Android Won\u2019t Scan a QR Code (7 Fixes)',
      paragraphs: [
        'If the camera stares at a QR code and nothing happens, work through these fixes in order — one of them resolves nearly every failed scan:',
      ],
      bullets: [
        'Get closer, then back off — hold the phone 15-25 cm away so the entire code plus its white border fills the viewfinder without cropping.',
        'Clean your camera lens — a smudged lens is the #1 physical cause of failed scans. Wipe it with a soft cloth.',
        'Add light — QR scanning fails in dim rooms. Turn on your phone\u2019s flashlight (Quick Settings torch) when scanning in low light.',
        'Hold still and let it focus — tap the code on screen to force focus, then keep the phone steady for two full seconds.',
        'Straighten the angle — extreme tilt confuses detection. Face the code as squarely as you can.',
        'Check the code itself — tiny codes (under 2 cm), codes printed on curved or reflective surfaces, and codes with damaged corner squares may simply be unscannable.',
        'Try Google Lens — when the camera scanner gives up, Lens often succeeds on the same code.',
      ],
      callout: {
        title: 'Still nothing?',
        text: 'If a printed code fails on two different phones in good light, the code itself is probably broken (bad contrast, wrong size, or corrupted data) — not your phone. Ask the publisher for a fresh one.',
        type: 'warning',
      },
    },
    {
      id: 'scan-safety',
      heading: 'Is It Safe to Scan QR Codes on Android?',
      paragraphs: [
        'Scanning itself is safe — a QR code cannot run code on your phone or install anything by being scanned. The risk is what the code points to: a malicious QR code can link to a phishing site designed to steal passwords, or trigger a payment or download prompt.',
        'Android protects you with a simple but effective habit to build: always read the preview. Before tapping the banner, check the URL shown. A legitimate code from your bank shows the bank\u2019s real domain; a scam shows a misspelled lookalike. Be especially cautious with QR codes on stickers placed over legitimate ones (a common scam on parking meters and EV chargers), codes in unsolicited emails, and any code that immediately asks for payment or login credentials.',
        'As a rule of thumb: scan freely when the code\u2019s source is trusted (a restaurant menu, your office Wi-Fi card, a product box), and pause to inspect the URL preview when the source is unknown or the sticker looks tampered with.',
      ],
      figures: [
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'Download a high-resolution QR code as PNG or SVG so printed codes scan reliably on any Android phone',
          caption: 'Making your own codes? Download them in high resolution — crisp, high-contrast codes scan instantly on any Android camera.',
        },
      ],
    },
  ],
  faqsTitle: 'Android QR Scanning FAQs',
  faqs: [
    {
      question: 'Do I need to download an app to scan QR codes on Android?',
      answer:
        'No. Android 9 and newer scan QR codes natively — just point the default Camera app at the code and tap the pop-up banner. Third-party QR scanner apps are unnecessary and often loaded with ads and excessive permission requests.',
    },
    {
      question: 'How do I scan a QR code from a screenshot on Android?',
      answer:
        'Open the screenshot in Google Photos (or your gallery app) and tap the Google Lens icon. Lens reads the QR code from the saved image and shows the link or content — no second device required.',
    },
    {
      question: 'Why is my Android phone not scanning QR codes?',
      answer:
        'The most common causes are a dirty camera lens, poor lighting, holding the phone too close or at an angle, or the QR feature being disabled in the Camera app settings. Clean the lens, add light, hold 15-25 cm away, and enable "Scan QR codes" in camera settings.',
    },
    {
      question: 'Where is the QR code scanner on a Samsung phone?',
      answer:
        'On Samsung Galaxy phones, open the Camera app, tap the gear icon, and turn on "Scan QR codes." You can also swipe down twice for Quick Settings and tap the "Scan QR code" tile — add it with the + button if it is not visible.',
    },
    {
      question: 'Is it safe to scan QR codes on Android?',
      answer:
        'Scanning itself is safe — a code cannot install malware just by being scanned. The risk is phishing links. Always read the URL preview Android shows before tapping, and be wary of QR stickers placed over legitimate codes in public places.',
    },
  ],
  ctaTitle: 'Make Your Own Scannable QR Code',
  ctaDesc:
    'Generate a crisp, high-contrast QR code free — optimized to scan instantly on any Android or iPhone camera. No sign-up required.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getHowToScanQrCodeAndroidData(locale: Locale): GuideArticleData {
  // English-first: daily articles ship in English; all locales fall back to it.
  return enData;
}
