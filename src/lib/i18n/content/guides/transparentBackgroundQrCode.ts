import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getTransparentBackgroundQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code Transparent Background: How to Make One Free',
    description:
      'Make a QR code with a transparent background that blends into any design. Free PNG and SVG steps, contrast rules, and mistakes to avoid.',
    badge: 'Guides',
    h1: 'QR Code Transparent Background: How to Make One That Scans',
    subheadline:
      'A QR code with a transparent background drops cleanly onto a coloured poster, a product photo, or a branded banner — no ugly white box around it. But transparency is also the easiest way to accidentally break a code: put dark modules on a dark photo and no phone can read it, or save it as a JPEG and watch the transparency silently turn white. This guide shows how to make a transparent QR code properly — the right file format, the right contrast, and the right test before you print or publish.',
    readingTime: '8 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'PNG and SVG keep transparency',
        text: 'Download PNG for digital use or SVG for print. JPEG cannot store transparency — it fills the background, usually with white.',
      },
      {
        label: 'Contrast still decides everything',
        text: 'A transparent code has no background of its own, so whatever sits behind it becomes the background. Dark modules need a light surface behind them.',
      },
      {
        label: 'One checkbox does it',
        text: 'In the free generator, open the Colors tab and tick “Transparent Background” before downloading. No image editor needed.',
      },
      {
        label: 'Test on the real surface',
        text: 'A code that scans on a white screen can fail on a busy photo. Always test the finished design on a real phone before printing.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-transparent-qr-code',
        heading: 'What Is a QR Code With a Transparent Background?',
        paragraphs: [
          'A normal QR code is a square of dark modules on a solid white background. A transparent QR code keeps the dark modules but removes that white square: the space between the modules becomes see-through, so whatever is behind the code — a brand colour, a photograph, a gradient — shows through. The code itself is exactly the same data; only the background changes from opaque white to alpha transparency.',
          'That matters because a white box is a design problem. On a dark poster, a coloured product label, or a photo banner, a white square looks pasted on. Designers end up either shrinking the code until it looks like an afterthought, or hiding it in a corner where nobody scans it. A transparent code solves the layout problem: it sits on the design the way a logo sits on a design, and it can be placed over any flat, light-coloured area without breaking the look.',
          'Transparency is stored in the file itself, not in the QR data. PNG files support an alpha channel, which records how transparent each pixel is, and SVG files describe the code as shapes with no background rectangle at all. That is why format choice is half the job here: the same code saved as a JPEG loses its transparency entirely, because JPEG has no alpha channel. If you have ever downloaded a “transparent” image and found it on a white box, the file format — not the code — was the culprit.',
        ],
        callout: {
          title: 'Transparency is not invisibility',
          text: 'A transparent background removes the white square; it does not remove the modules. The dark squares, the finder patterns in the corners, and the quiet zone around the code all still need to be clearly visible against whatever sits behind them.',
          type: 'info',
        },
      },
      {
        id: 'when-to-use-transparent-background',
        heading: 'When a Transparent Background Helps — and When It Hurts',
        paragraphs: [
          'Transparent QR codes shine on branded materials. A product package with a coloured label, a shop window decal, a vehicle wrap, a T-shirt print, a presentation slide over a brand gradient, or a website hero image — anywhere the code must share space with a design rather than sit in a white box. Print designers especially like SVG versions, because a vector code scales from a business card to a billboard without going blurry, and the transparent background means it overlays cleanly on any artwork layer.',
          'But transparency is the wrong choice on busy or dark backgrounds. Scanners read a QR code by finding dark modules against a light area; if the modules sit on a dark photo, a patterned fabric, or a gradient that turns dark halfway across the code, the camera cannot separate code from background and the scan fails. The same code on a plain white card would have scanned instantly. As a rule, use a transparent code only where the area behind it is light, flat, and uncluttered — and use a solid white background everywhere else.',
          'There is also a middle option worth knowing: a semi-transparent white panel. Many designers place the transparent code over a soft white rounded rectangle at 80–90% opacity, which keeps most of the design visible while guaranteeing contrast. It is not a pure transparent code, but for a poster or a video overlay it is often the best compromise between looking good and actually scanning.',
        ],
        subsections: [
          {
            subheading: 'Great for',
            text: 'Coloured packaging, branded posters and banners, vehicle graphics, apparel prints, slides and video overlays, and any flat light-coloured surface.',
          },
          {
            subheading: 'Avoid on',
            text: 'Dark photos, busy patterns, gradients that cross from light to dark, glass or reflective surfaces, and anything where the background changes under the code.',
          },
          {
            subheading: 'The safe compromise',
            text: 'A white panel at 80–90% opacity behind the code. It preserves most of the design while giving scanners the contrast they need.',
          },
        ],
      },
      {
        id: 'how-to-make-transparent-qr-code',
        heading: 'How to Make a QR Code With a Transparent Background (Free)',
        paragraphs: [
          'Start by deciding what the code should do, because that picks the code type: a URL for a website or landing page, WiFi for a guest network, text for a short message, or vCard for a contact card. Open the free QR code generator, choose the matching type from the type selector, and enter your content carefully — a URL needs its full https:// address, and a WiFi code needs the network name and password copied character for character, since both are case-sensitive.',
          'Next, open the Customize panel and go to the Colors tab. You will see foreground and background colour pickers; leave the foreground dark (black or a dark brand colour) and tick the “Transparent Background” checkbox. The preview should immediately show the code with no white box behind it — if your generator preview sits on a dark page background, the modules may look faint, which is itself a useful warning about how the code will behave on dark surfaces.',
          'Finally, download the code in a format that keeps transparency: PNG for websites, social posts, and documents, or SVG for print and large-format work. Do not download JPEG — it cannot store transparency, and the background will be filled in. Save at the highest resolution offered for print, and keep the original file: if you later need a white-background version, it is faster to regenerate than to paint a background back in.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for making a QR code with a transparent background',
            caption: 'The free generator homepage — your transparent QR code starts here, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing URL, WiFi, text, and vCard options for a transparent QR code',
            caption: 'Pick the type first — URL, WiFi, text, or contact — then turn on transparency in the Colors tab.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a transparent background QR code as PNG or SVG',
            caption: 'Download PNG for digital use or SVG for print — never JPEG, which cannot store transparency.',
          },
        ],
      },
      {
        id: 'contrast-and-scannability-rules',
        heading: 'Contrast Rules: The Difference Between Pretty and Scannable',
        paragraphs: [
          'The single rule for transparent codes is that the modules must stay clearly darker than whatever is behind them. Phone cameras do not read colour; they read light and dark. Black modules on a white or pale-yellow surface scan perfectly, while black modules on a dark blue photo do not, even if the code looks sharp to your eye. If your brand colour is dark, use a light version of the code instead — dark modules are not mandatory, but a dark-on-light relationship is.',
          'Keep the quiet zone intact. The quiet zone is the blank margin around all four sides of the code, at least four modules wide, and scanners use it to find where the code starts and ends. With a transparent background it is tempting to crop tight or let a photo element crowd the edges, but that breaks detection. When you place the code, leave clear space around it — no text, no logos, no photo details crossing the margin.',
          'Size matters more for transparent codes than for white-background ones, because a busy backdrop adds visual noise the scanner must ignore. For print, keep the code at least 2 cm across for close scanning (a business card or label) and larger for anything scanned from a distance; a poster code meant to be scanned from a metre away should be at least 10 cm. When in doubt, print bigger — a code that is too small on a photo background fails silently, and nobody tells you it failed.',
        ],
        bullets: [
          'Modules must be darker than the background behind them — dark-on-light, always.',
          'Keep a quiet zone of at least four modules of clear space on all four sides.',
          'Avoid gradients or photos that change brightness underneath the code.',
          'Minimum print size: 2 cm for close scanning, larger for posters and signage.',
          'Never invert to light modules on a dark background — most phone cameras cannot read inverted codes.',
        ],
        callout: {
          title: 'The one-minute contrast test',
          text: 'Squint at the finished design until it blurs. If the square of the code still stands out clearly from its background, scanners will find it. If it melts into the photo, add a light panel behind it or move it to a plainer area.',
          type: 'tip',
        },
      },
      {
        id: 'file-formats-for-transparent-qr-codes',
        heading: 'PNG vs SVG vs JPEG: Which Format Keeps Transparency?',
        paragraphs: [
          'PNG is the workhorse for transparent QR codes. It stores an alpha channel, so the background stays see-through in browsers, documents, slide decks, and social posts, and it is lossless, meaning the sharp module edges never blur. Use PNG whenever the code will appear on screen or in a document. The only cost is file size: a high-resolution PNG is larger than a JPEG, but for a QR code the file is still small by any modern standard.',
          'SVG is the right choice for print and design work. Because SVG describes the code as vector shapes rather than pixels, it scales to any size without losing sharpness — a business card and a shopfront banner can use the same file — and it has no background rectangle unless you add one. Designers can drop an SVG code straight into Illustrator, Figma, Canva, or InDesign and recolour the modules if needed. If your printer or designer asks for a file, send SVG first.',
          'JPEG is the format to avoid here. It has no alpha channel, so any transparency is replaced — usually with white, sometimes with black — the moment you save. It also compresses with lossy artefacts that soften the sharp edges scanners rely on, which is a second reason not to use it for codes. JPEG is fine for photographs; for a transparent QR code it quietly undoes the whole job.',
        ],
        subsections: [
          {
            subheading: 'PNG',
            text: 'Best for web, social, documents, and slides. Lossless, supports transparency, universally compatible.',
          },
          {
            subheading: 'SVG',
            text: 'Best for print, packaging, and design tools. Infinitely scalable, no background rectangle, editable in vector apps.',
          },
          {
            subheading: 'JPEG',
            text: 'Do not use for transparent codes. No alpha channel, lossy compression softens module edges, and transparency is lost on save.',
          },
        ],
      },
      {
        id: 'common-mistakes-and-testing',
        heading: 'Common Mistakes — and How to Test Before You Publish',
        paragraphs: [
          'The most common mistake is saving as JPEG and assuming the code is still transparent, followed closely by placing a transparent code over a dark or busy image and never testing it. A third frequent error is forgetting the quiet zone: cropping the code tight in an editor, or letting a logo or headline overlap its edge, so phones cannot find the code at all. All three mistakes share one trait — the code looks fine on the designer’s screen and fails in the customer’s hand.',
          'Testing takes two minutes and prevents all of it. First, open the downloaded file and check the transparency itself: place it over a coloured background in any editor or slide, and confirm the colour shows through rather than a white box. Then place it in the finished design — the actual poster, package, or page — and scan it with a real phone camera from the distance your audience will stand at, under normal light, not studio light. Test with both an iPhone and an Android phone if you can, and test the printed version too, since glossy paper and low light change the result.',
          'If a test scan fails, fix the background before redesigning the code: move it to a lighter, plainer area, add a soft white panel behind it, or switch to a solid white version for that placement. Do not fix a failing transparent code by shrinking it, recolouring the modules lighter, or adding a logo over the centre — each of those makes scanning harder. A code that scans reliably on a plain background is worth more than a beautiful one that scans only sometimes.',
        ],
        callout: {
          title: 'Print one, scan one',
          text: 'Never print a full batch from an untested file. Print a single copy at final size, scan it on a real phone, and only then approve the run. Reprinting hundreds of labels costs far more than one test print.',
          type: 'warning',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make a QR code with a transparent background for free?',
        answer:
          'Use a free QR code generator with a transparency option: choose your code type, enter your content, open the Customize Colors tab, tick “Transparent Background”, and download as PNG or SVG. No image editor or account is needed, and the whole process takes under a minute.',
      },
      {
        question: 'Which file format keeps a QR code transparent?',
        answer:
          'PNG and SVG both keep transparency — PNG for digital use and SVG for print and design work. JPEG cannot store transparency at all: it fills the background, usually with white, and its lossy compression also softens the sharp module edges scanners need.',
      },
      {
        question: 'Will a transparent QR code still scan?',
        answer:
          'Yes, as long as the modules stay clearly darker than whatever sits behind them and the quiet zone around the code stays clear. Transparent codes fail when placed on dark or busy backgrounds, because the camera cannot separate the modules from the image behind them. Test on a real phone before publishing.',
      },
      {
        question: 'Can I put a transparent QR code on a coloured background?',
        answer:
          'Yes, if the colour is light enough — pale yellow, light grey, pastel shades, and white all work well with dark modules. Dark colours like navy, black, or deep red do not, because the contrast disappears. If your brand colour is dark, use a light panel behind the code or a white-background version instead.',
      },
      {
        question: 'Can I add a logo to a transparent QR code?',
        answer:
          'Yes, but keep the logo small and centred, and use a high error-correction level so the code still scans with the middle covered. Test carefully: a logo plus a busy background is the combination most likely to break scanning, so test the finished design on a real phone, not just the preview.',
      },
      {
        question: 'Why does my transparent QR code show a white background?',
        answer:
          'Almost always because it was saved as JPEG, which has no transparency support, or because the app you opened it in displays transparency as white. Check the file extension first — it should be .png or .svg — and view it over a coloured background to confirm the transparency is really there.',
      },
    ],
    ctaTitle: 'Make Your Transparent QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create a QR code with a transparent background that blends into your design and still scans every time.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
