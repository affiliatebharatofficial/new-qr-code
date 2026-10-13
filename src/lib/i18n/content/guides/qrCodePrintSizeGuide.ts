import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'QR Code Print Size Guide (Exact Sizes for Print)',
  description:
    'QR code print size guide: the 10% distance rule, exact sizes for business cards, flyers, posters and billboards, plus SVG vs PNG for crisp print. Free.',
  badge: 'QR How-To',
  h1: 'QR Code Print Size Guide',
  subheadline:
    'Print a QR code too small and nobody can scan it; too big and it eats your layout. This guide gives you the one distance rule that determines the right size, exact minimums for business cards, flyers, posters, and billboards, and the print settings (DPI, format, error correction) that keep codes scannable on paper.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'The 10% distance rule',
      text: 'Your QR code should be at least 10% of the distance people will scan it from — a 2 cm code works when scanned at 20 cm, but a poster read from 2 metres away needs a 20 cm code.',
    },
    {
      label: 'Never go below 2 × 2 cm',
      text: '2 cm × 2 cm is the practical minimum for any printed QR code. Smaller than that and phone cameras cannot resolve the individual modules reliably.',
    },
    {
      label: 'Print at 300 DPI from SVG',
      text: 'Download your code as an SVG (vector) so it scales to any print size without blurring. If you use PNG, export it at 300 DPI relative to the final printed size.',
    },
    {
      label: 'Always leave a quiet zone',
      text: 'Keep a margin of white space at least 4 QR modules wide around the code. Text or images touching the code will break scanning more often than size mistakes do.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'the-10-percent-distance-rule',
      heading: 'The 10% Rule: Size Depends on Scan Distance',
      paragraphs: [
        'There is no single "correct" QR code size, and anyone selling you one is oversimplifying. The right size is determined by one thing: how far away the scanner\'s phone will be. A code on a business card is scanned from 15–20 cm away; a code on a shop-window poster might be scanned from across the pavement; a billboard code has to work from the far side of the road. The pattern is identical — only the scale changes.',
        'The industry rule of thumb is the 1:10 ratio: the QR code should be at least one-tenth of the scan distance. If people will hold the flyer in their hands at roughly 30 cm, the code needs to be at least 3 cm wide. If they\'re scanning a restaurant wall menu from 1.5 metres away, the code must be at least 15 cm wide. It is a minimum, not a target — going 20–30% larger than the rule costs you nothing in print and buys real forgiveness in awkward light and cheap cameras.',
        'Why does distance dominate? Because a phone camera has to resolve each black-and-white module (the tiny squares) as distinct pixels. As the code gets farther away, the modules shrink in the camera\'s view until they blur together. A denser code — one encoding a long URL, which forces more modules into the same square — needs to be physically larger at the same distance. Two rules of thumb fall out of this: keep the encoded URL short, and when in doubt, print bigger.',
      ],
      callout: {
        title: 'Do the math in 5 seconds',
        text: 'Guess the scan distance in metres, move the decimal point one place left, and that\'s your minimum code size in metres. 0.3 m distance → 3 cm code. 5 m distance → 50 cm code. Round up.',
        type: 'tip',
      },
    },
    {
      id: 'exact-sizes-for-common-print-jobs',
      heading: 'Exact Sizes for Common Print Jobs',
      paragraphs: [
        'Here are concrete minimums for the materials people actually print. Each assumes a typical viewing distance; adjust upward with the 10% rule whenever your scenario differs:',
      ],
      subsections: [
        {
          subheading: 'Business cards — 2 × 2 cm',
          text: 'The card is held in the hand at 15–20 cm, so 2 cm satisfies the 10% rule. Any smaller and older phone cameras struggle to resolve the modules. Put the code on the back or a corner so it doesn\'t fight your name for attention.',
        },
        {
          subheading: 'Flyers and brochures — 3 × 3 cm',
          text: 'Read at arm\'s length (~30 cm), so 3 cm is the minimum. If the flyer will be pinned to a noticeboard and read from a step back, go 4–5 cm. This is the most common size range for printed marketing.',
        },
        {
          subheading: 'Posters and shop windows — 8–15 cm',
          text: 'A poster viewed from 1–1.5 metres needs an 8–15 cm code. For shop-window decals scanned from the pavement, measure the farthest reasonable standing spot and apply the 10% rule — pavement scans often need 20 cm or more.',
        },
        {
          subheading: 'Banners and billboards — 30 cm and up',
          text: 'A banner read from 3 metres needs a 30 cm code; a roadside billboard scanned from 10 metres needs a full metre. Also keep the URL short here — billboard codes are usually photographed from distance, and a low-density code scans far more forgivingly.',
        },
        {
          subheading: 'Stickers, labels, and packaging — 2–3 cm',
          text: 'Hand-held scanning means 2–3 cm works, but packaging brings wrinkles and curves into play. Never let the code wrap over a fold or a seam, and prefer a flat panel. Matte laminate beats glossy — reflections are the #1 killer of packaging scans.',
        },
        {
          subheading: 'Receipts and tickets — 2 × 2 cm',
          text: 'Scanned at close range by staff or gates, 2 cm is plenty. Thermal printers are the catch: use a fresh ribbon/roll, because a faded print on a receipt fades the modules into each other and gates start rejecting them.',
        },
      ],
      callout: {
        title: 'Bigger is always safer',
        text: 'These are minimums. A code at 150% of the minimum scans faster, from wider angles, and on worse cameras. If your layout has room, take it.',
        type: 'info',
      },
    },
    {
      id: 'resolution-dpi-pixel-math',
      heading: 'Why Resolution Matters More Than You Think',
      paragraphs: [
        'A QR code that looks razor-sharp on screen can print as a blurry mush — and the culprit is resolution. Screens display at roughly 72–150 pixels per inch, while commercial printing expects 300 dots per inch (DPI). If you download a 300-pixel QR code image and print it at 10 cm wide, it prints at about 76 DPI. Each module becomes a soft grey blob instead of a crisp square, and scanners fail.',
        'The pixel math is simple: pixels needed = printed width in inches × 300. A 3 cm code (≈1.18 inches) needs about 355 pixels across; a 15 cm poster code (≈5.9 inches) needs about 1,770 pixels. Many free generators let you download high-resolution PNGs — always choose the largest option when printing. Our free generator\'s downloads go up to sizes that cover even poster work.',
        'There is one exception to all this arithmetic, and it is the best option for print: SVG. An SVG is a vector file — it describes the code as shapes, not pixels — so it renders perfectly sharp at any size, from a 2 cm business card to a 2 metre banner, from the same file. If your print shop accepts SVG, stop worrying about DPI entirely and use it.',
      ],
      figures: [
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'QR code download options showing high-resolution PNG and SVG formats for print-size QR codes',
          caption:
            'Download as SVG for print — it scales to any size without losing sharpness. Choose a high-resolution PNG only if your printer can\'t take vector files.',
        },
      ],
      callout: {
        title: 'The quick check',
        text: 'Before sending anything to print, open the downloaded file at 100% zoom and count: can you see crisp, distinct modules with clean edges? If the edges look soft at 100%, they will look worse on paper.',
        type: 'warning',
      },
    },
    {
      id: 'svg-vs-png-for-print',
      heading: 'SVG vs PNG: Which Format for Print?',
      paragraphs: [
        'For anything printed, SVG (Scalable Vector Graphics) is the correct answer almost every time. Because it is resolution-independent, one file serves the business card, the flyer, and the trade-show banner — no re-downloading, no pixel math, no quality loss. Professional print shops, signage printers, and most online print services all accept SVG.',
        'Use PNG only when your printer or software cannot take SVG — some older print shops and basic office tools only accept raster images. In that case, export the PNG at 300 DPI relative to your final printed size (see the pixel math in the previous section) and never let anyone "enlarge" a small PNG in the design file. Enlarging a 300-pixel PNG to poster size in Illustrator or Word just stretches the same pixels — the file must be big before it enters the design.',
        'One format to avoid for print: JPEG. Its lossy compression adds artifacts around the module edges — exactly the crisp boundaries a scanner needs. The file may look fine to your eye while the phone camera chokes on the noise. Stick to SVG first, high-res PNG second, and never JPEG.',
      ],
    },
    {
      id: 'make-it-scannable-at-any-size',
      heading: 'Make Your Code Scannable at Any Size',
      paragraphs: [
        'Correct size gets you most of the way there, but several smaller settings decide whether a printed code scans on the first try or the fifth. The most violated one is the quiet zone: the border of empty space around the code. Scanners use it to find where the code starts. The spec requires at least 4 modules of white space on all four sides — at small sizes people routinely let text, borders, or photos touch the code, and scanning reliability falls off a cliff. When in doubt, add more margin than you think you need; white space is free.',
        'Next, set error correction to High (level H) before generating. Error correction lets a QR code survive damage — scratches, dirt, creases, and even a coffee stain — by encoding redundant data. Level H lets the code survive up to 30% damage, which is exactly what printed materials endure. It makes the code slightly denser, so pair it with a short URL: a 30-character link at error correction H scans far more easily at small sizes than a 200-character link at level L.',
        'Colour and contrast matter more in print than on screen. Black on white is the safest combination ever invented — maximum contrast, zero ambiguity. You can use brand colours, but keep the foreground dark and the background light, and never invert to light-on-dark for print: many scanner apps fail on inverted codes, and print contrast is always lower than your monitor suggests. Glossy paper adds a final trap: reflections can wipe out modules under store lighting, so choose matte stock for anything that will be scanned indoors.',
        'Finally, generate the code from this site\'s free generator and do a real test: print one copy at the actual size on the actual paper, then scan it with your phone\'s default camera app from the actual viewing distance. Not a scanner app, not your flagship phone only — borrow an average phone if you can. The test print is a two-minute ritual that has saved countless print runs.',
      ],
      figures: [
        {
          src: '/guides/screenshots/generator-hero.png',
          alt: 'The free QR code generator used to create a print-ready QR code at high error correction',
          caption:
            'Generate your code here first — then download it as SVG so it prints crisply at any size.',
        },
      ],
      callout: {
        title: 'Shorten the URL first',
        text: 'A short link means a less dense code, and a less dense code scans better at small sizes. Use your own short domain or a simple redirect — never encode a 150-character tracking URL directly into a print code.',
        type: 'tip',
      },
    },
    {
      id: 'printing-mistakes-that-break-scans',
      heading: '6 Printing Mistakes That Break QR Codes',
      paragraphs: [
        'Nearly every unscannable printed QR code comes down to one of these six errors. They are all cheap to avoid and expensive to discover after a 5,000-copy print run:',
      ],
      bullets: [
        'Printing below 2 × 2 cm — under the practical minimum, phone cameras cannot resolve the modules. No amount of resolution or contrast fixes a code that is physically too small.',
        'Killing the quiet zone — text, borders, or background photos touching the code. Keep 4 modules of clear white space on every side.',
        'Downloading a small PNG and enlarging it — stretching a 300-pixel image to poster size blurs every module edge. Use SVG, or export the PNG at the full printed size × 300 DPI.',
        'Glossy or reflective stock — reflections under store and event lighting can blank out whole sections of the code. Choose matte paper or laminate for scannable materials.',
        'Inverted or low-contrast colours — light-on-dark codes and pale brand colours on white fail on many scanner apps. Dark foreground, light background, always.',
        'Placing the code on a fold, seam, or curve — a crease through the pattern destroys the geometry scanners rely on. Keep codes on flat panels, and re-test packaging after it is folded and assembled.',
      ],
      callout: {
        title: 'The one-page checklist',
        text: 'Before approving any print run: size passes the 10% rule ✓ · quiet zone is clear ✓ · SVG or 300 DPI PNG ✓ · error correction set to High ✓ · dark-on-light colours ✓ · one test copy scans from the real distance ✓.',
        type: 'info',
      },
    },
  ],
  faqsTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What is the minimum size for a printed QR code?',
      answer:
        'The practical minimum is 2 cm × 2 cm (about 0.8 × 0.8 inches). Below that, phone cameras cannot reliably resolve the individual modules. That minimum assumes close-range, hand-held scanning — if people will scan from farther away, use the 10% rule: the code should be at least one-tenth of the scan distance.',
    },
    {
      question: 'How big should a QR code be on a poster?',
      answer:
        'Apply the 10% distance rule: a poster read from 1 metre away needs a code at least 10 cm wide; from 2 metres, 20 cm. For most indoor posters viewed at 1–1.5 metres, 10–15 cm works well. When in doubt, go larger — oversized codes scan faster and forgive bad lighting.',
    },
    {
      question: 'Does DPI matter for QR code printing?',
      answer:
        'Yes, if you print from a PNG. Print at 300 DPI: multiply your code\'s printed width in inches by 300 to get the pixels you need (a 3 cm code needs roughly 355 pixels across). If you download the code as SVG (vector), DPI becomes irrelevant — the file prints perfectly sharp at any size.',
    },
    {
      question: 'Should I print QR codes in black and white?',
      answer:
        'Black on white is the most reliable combination for print. Brand colours work if the foreground stays dark and the background stays light with strong contrast. Avoid inverted codes (light on dark) — many scanner apps fail on them — and avoid glossy paper, since reflections can wipe out modules under indoor lighting.',
    },
    {
      question: 'Why won\'t my printed QR code scan?',
      answer:
        'Check the usual suspects in order: the code is printed smaller than 2 × 2 cm; the quiet zone is violated by text or design elements touching it; a small PNG was enlarged (blurry modules); the paper is glossy and reflecting light; colours are inverted or low-contrast; or the code sits on a fold or curve. Print one test copy at final size and scan it from the real viewing distance before ordering a full run.',
    },
  ],
  ctaTitle: 'Make Your QR Code Now',
  ctaDesc:
    'Generate a free print-ready QR code in seconds — download it as SVG for perfectly crisp print at any size, no sign-up needed.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getQrCodePrintSizeGuideData(_locale: Locale): GuideArticleData {
  return enData;
}
