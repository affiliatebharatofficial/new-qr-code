import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeDesignBestPracticesData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code Design Best Practices: 2026 Guide (Free)',
    description:
      'QR code design best practices that keep codes scannable: contrast, quiet zone, error correction, colors, logos, frames, CTAs, and print specs — free.',
    badge: 'Guides',
    h1: 'QR Code Design Best Practices: What Actually Keeps Codes Scannable',
    subheadline:
      'A pretty QR code that nobody can scan is just a decorative mistake. Most "creative" QR designs fail for boring, technical reasons — inverted colors, a missing quiet zone, or a logo that ate too much of the pattern. This guide covers the QR code design best practices that let you brand your codes without breaking them: the non-negotiable rules of contrast and structure, how to use color and styling safely, where to put logos and frames for maximum scans, and the print specs that keep your design crisp from business card to billboard.',
    readingTime: '9 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Contrast is king',
        text: 'Dark pattern on a light background is the only safe combination. Inverted colors fail on most phone cameras — avoid them entirely.',
      },
      {
        label: 'Never skip the quiet zone',
        text: 'A clear margin of at least 4 modules around the code is required by the QR spec. Crowding text or graphics against the edge kills scans.',
      },
      {
        label: 'Style within limits',
        text: 'Custom colors, rounded modules, and centered logos are fine — as long as contrast stays high, error correction is set to Q or H, and the logo covers under 30% of the pattern.',
      },
      {
        label: 'Always test before print',
        text: 'Scan the final design with at least two different phones at the real viewing distance before any print run. A broken code is expensive to fix.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-qr-code-design-matters',
        heading: 'Why QR Code Design Actually Matters for Scans',
        paragraphs: [
          'Every QR code is a trade-off between branding and reliability. The default black-and-white code is the most scannable thing you can possibly print — every scanner on the planet was tuned against it. Any design change you make moves away from that optimum. Good design moves a little; bad design moves a lot, and the scan failure rate climbs with it. The goal of QR code design is not to make the prettiest code — it is to make the most branded code that still scans essentially 100% of the time.',
          'The stakes are higher than they look. A scan failure is silent: the user points their phone, nothing happens, and they move on. You never get feedback, your analytics record nothing, and the person assumes your business is amateurish. In A/B-style field tests, plain well-built codes routinely out-scan heavily styled ones by 15-30 percentage points on first attempt. Worse, failures are unevenly distributed — older phones, budget Android cameras, and low-light conditions fail first, which means your most price-sensitive customers are the ones your fancy design alienates.',
          'The good news is that the rules are simple and mechanical. Scannability is not taste — it is physics: contrast ratio, pattern integrity, and the scanner\'s ability to find three position squares in a sea of noise. Follow the handful of rules in this guide and you can use your brand colors, your logo, rounded dots, and a nice frame while keeping first-scan success rates essentially identical to the boring black-and-white version.',
        ],
        callout: {
          title: 'Design for the worst phone, not the best',
          text: 'Test your standards against a 3-4 year old budget Android phone in mediocre lighting. If it scans there in under two seconds, it scans everywhere.',
          type: 'info',
        },
      },
      {
        id: 'contrast-quiet-zone-error-correction',
        heading: 'The 3 Non-Negotiable Rules: Contrast, Quiet Zone, Error Correction',
        paragraphs: [
          'These three rules are not suggestions. Breaking any of them can make a QR code unreadable regardless of how good everything else is. They come straight from the QR spec (ISO/IEC 18004) and from how every phone camera actually decodes.',
          'Rule one: dark modules on a light background, always. Scanners binarize the image — they decide every pixel is either "dark" or "light" — and they expect the pattern to be dark. White-on-black or light-on-dark inverted codes fail on most built-in phone cameras (iOS and many Android cameras simply refuse to read them). Low-contrast combinations like light gray on white, pastels on white, or colored patterns on busy photos also fail because the binarization threshold cannot cleanly separate the modules. Aim for a strong luminance difference: deep navy, dark green, or your brand\'s darkest color on white or off-white is fine; anything close in brightness to the background is not.',
          'Rule two: preserve the quiet zone. The spec requires a blank margin around all four sides at least 4 modules wide — about 10% of the code\'s width. Scanners use this margin to detect where the code starts. Graphics, borders, text, and photos creeping into the quiet zone confuse that detection and cause intermittent failures that are maddening to debug. If you want a frame or a "scan me" label, place it outside the quiet zone, never touching the pattern edge.',
          'Rule three: raise the error correction level when styling. QR codes carry built-in Reed-Solomon error correction at four levels — L (~7% recovery), M (~15%), Q (~25%), H (~30%). A logo or heavy styling deliberately damages part of the pattern, so set Q or H before you add any branding element. Most free generators default to M; bump it to Q or H for anything beyond a plain code. The cost is slightly denser modules, which is irrelevant for any realistic print size.',
        ],
        bullets: [
          'Contrast: dark-on-light only — inverted codes fail on most stock phone cameras.',
          'Quiet zone: minimum 4 modules of clear space on all four sides, per ISO/IEC 18004.',
          'Error correction: use Q or H whenever you add a logo, colors, or styled modules.',
          'Background: solid and light beats textured, photo, or gradient backgrounds every time.',
        ],
        callout: {
          title: 'The one-minute scannability audit',
          text: 'Squint at your design from arm\'s length: do the three corner squares read clearly? Is there obvious dark-on-light contrast with nothing touching the edges? If yes, your code almost certainly scans.',
          type: 'tip',
        },
      },
      {
        id: 'color-and-branding',
        heading: 'Using Brand Colors Without Breaking the Scan',
        paragraphs: [
          'A colored QR code can absolutely work — if the color behaves like black from the scanner\'s perspective. What matters is luminance contrast, not hue. A dark brand blue, deep green, maroon, or charcoal on white scans as reliably as black. The failures start when designers pick colors for aesthetics: medium grays, soft pastels, gold on cream, or any color-on-photo combination where parts of the background are as dark as the modules.',
          'Two practical constraints keep colored codes safe. First, keep a single dark color for all modules — gradients across the pattern are dangerous because the light end of the gradient can drop below the contrast threshold in parts of the code. Second, never place the code on a colored or photo background without a solid light backing panel behind it (white box with padding). That backing panel doubles as your quiet zone, which solves two rules at once. If your brand palette is all pastels with no dark option, use black for the code and brand everything around it instead — the frame, the CTA, and the surrounding layout are where your identity shows.',
          'Styled modules — rounded dots, circles instead of squares, custom eye shapes on the three corner squares — are popular and generally safe. The decoders work on module centers, so rounding the corners of modules rarely breaks anything as long as each module still reads as mostly-dark. One exception: extremely small gaps between rounded modules can blur together at small print sizes, so keep the overall code large enough (follow the 10:1 distance rule from our print size guide) and raise error correction to Q or H as insurance.',
        ],
        subsections: [
          {
            subheading: 'Safe: one dark brand color',
            text: 'Deep navy, dark green, maroon, or charcoal on a solid white background. Single color, full coverage, high luminance contrast — scanners treat it like black.',
          },
          {
            subheading: 'Risky: gradients and multi-color patterns',
            text: 'Gradient fills across modules and rainbow codes fail where the light end dips below the contrast threshold. If you must, keep every part of the gradient darker than mid-gray.',
          },
          {
            subheading: 'Broken: inverted and low-contrast',
            text: 'White modules on dark backgrounds fail on most native phone cameras. Light gray on white or colored modules on busy photos fail the binarization step.',
          },
          {
            subheading: 'Best practice: back it with a white panel',
            text: 'Place any colored or styled code on a solid white rounded panel with padding. This guarantees the quiet zone and kills background interference in one move.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator showing QR type and customization options for brand colors',
            caption: 'Use a free generator with color and style controls — pick one dark brand color and keep the background solid and light.',
          },
        ],
        callout: {
          title: 'The grayscale test',
          text: 'Convert your design to grayscale or view it through your phone\'s camera in black-and-white mode. If the code is still clearly readable, your contrast is fine.',
          type: 'tip',
        },
      },
      {
        id: 'logos-frames-and-ctas',
        heading: 'Logos, Frames & CTAs: The Scans-Boosting Extras',
        paragraphs: [
          'A centered logo is the single most popular QR customization — and it works fine within strict limits. With error correction set to H, the code can survive up to ~30% damage, but logos should stay well under that: keep the logo within the central 20-25% of the code area, and make sure it never touches the three position-detection squares in the corners. A circular logo badge with a white border ring around it is the safest format — the white ring restores the quiet contrast the decoder needs at the boundary.',
          'Frames and "scan me" callouts do something a logo cannot: they raise the scan rate. A bare code relies on the viewer knowing what to do with it; a simple frame with "Scan to get 10% off" or "Scan for the menu" tells them why they should bother. Field data consistently shows codes with a short benefit-driven CTA get scanned far more often than naked ones — the design element that matters most is not in the code at all, it is the two or three words next to it. Keep the frame outside the quiet zone, and make the CTA about the payoff ("Scan for today\'s menu"), not the technology ("Scan this QR code").',
          'Custom eye shapes and corner decorations are cosmetic and harmless as long as the three position squares stay high-contrast and geometrically recognizable. Some scanners actually key off the standard square-in-square eyes, so extreme redesigns of the corner markers add risk for zero user benefit. Change the module dots freely; leave the corner eyes mostly alone — or use your color there and keep their shape standard.',
        ],
        figures: [
          {
            src: '/guides/screenshots/logo-upload.png',
            alt: 'Adding a logo to the center of a QR code with a white border badge',
            caption: 'Center the logo with a white badge border, keep it in the middle 20-25% of the pattern, and set error correction to H first.',
          },
        ],
        bullets: [
          'Logo: centered, max ~20-25% of the code area, white border ring, never over the corner squares.',
          'Error correction: always H when a logo is present — no exceptions.',
          'Frame + CTA: "Scan to get 10% off" beats a bare code every time; keep the frame outside the quiet zone.',
          'Corner eyes: recolor them freely, but keep their square-in-square geometry recognizable.',
        ],
        callout: {
          title: 'Sell the payoff, not the tech',
          text: '"Scan for the full menu" outperforms "Scan this QR code" because it answers the only question the viewer asks: what do I get? Never assume everyone knows what a QR code is.',
          type: 'info',
        },
      },
      {
        id: 'size-and-print-specs',
        heading: 'Size & Print Specs: Keep Your Design Crisp in the Real World',
        paragraphs: [
          'A perfect on-screen design dies at the printer if the modules blur together. The 10:1 rule governs size: a code viewed from 1 meter away must be at least 10 cm wide, and the requirement scales linearly (2 meters of viewing distance needs 20 cm of code). Business cards scanned from 30 cm need a minimum of about 3 cm of code — but the code shares space with the quiet zone, so add the margin to your layout math.',
          'Resolution is the second killer. Download PNGs at the highest available resolution — 1000px or more for anything printed — or use SVG/vector output for professional print work so the design scales without pixelation. Modules are sharp edges by definition; a low-resolution export rounds them off, which is exactly the kind of damage that hurts scanning. If your design includes a logo or frame, re-export those at high resolution too: a fuzzy logo edge bleeding into the quiet zone is a real failure mode.',
          'Materials and finishes matter more than most designers expect. Glossy laminated prints create specular reflections under spotlights that wash out modules at certain angles — matte finishes are safer for window displays and event signage. Curved surfaces (bottles, cups) distort the grid, so test-scan the actual object, not just the flat proof. And dark-mode surprises: a design that looks fine in the proof can fail on colored stock — always print on light stock or use a white underlay panel behind the code.',
        ],
        figures: [
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Downloading a designed QR code as high-resolution PNG or SVG for professional printing',
            caption: 'Download at maximum resolution (PNG 1000px+) or as SVG — crisp module edges are part of the design spec, not a nice-to-have.',
          },
        ],
        callout: {
          title: 'Matte beats glossy',
          text: 'For anything under direct lighting — shop windows, event banners, table tents — choose a matte finish. Glossy reflections are the #1 cause of "it scanned on my desk but not in the store" complaints.',
          type: 'warning',
        },
      },
      {
        id: 'test-before-you-print',
        heading: 'Test Your Design Before Anything Gets Printed',
        paragraphs: [
          'Testing is the step everyone skips and the one that catches every design sin above. The protocol is simple: scan the final exported file (not the on-screen preview) with at least two different phones — one iPhone, one Android, ideally including a budget model — from the actual viewing distance, in the actual lighting conditions. If it scans in under two seconds on both, the design is good. If either phone hesitates, fix the design, not the phones.',
          'Run three specific checks beyond the basic scan. First, the partial-cover test: cover the code halfway with your thumb and scan — this approximates glare, a finger in the frame, or a sticker overlap, and error correction should save it. Second, the distance test: scan from the maximum intended viewing distance plus 50% — print placement is always more optimistic than reality. Third, the bad-light test: dim the room or tilt the screen — scans that need perfect lighting are scans that fail in the real world.',
          'Keep a printed proof of the final design and scan it before the full print run. Screens lie about contrast — a code that looks crisp on a retina display can look muddy on newsprint. One proof scan on the real paper stock costs almost nothing and has caught more failures than any amount of screen-checking.',
        ],
        bullets: [
          'Two-phone test: one iPhone + one Android (budget model if possible) from real viewing distance.',
          'Partial-cover test: thumb over half the code — error correction should still recover it.',
          'Distance test: scan from 150% of the intended viewing distance.',
          'Proof test: scan one printed copy on the actual paper stock before the full run.',
        ],
        callout: {
          title: 'Test the file you ship',
          text: 'Scan the exported PNG or SVG, never the live preview in the generator. Export settings (resolution, format, background) are part of the design — test them too.',
          type: 'tip',
        },
      },
      {
        id: 'design-mistakes-to-avoid',
        heading: '7 Design Mistakes That Kill Scans',
        paragraphs: [
          'If you remember nothing else from this guide, avoid these seven. Each one is responsible for a large share of real-world "my QR code doesn\'t work" failures, and each is fixable in minutes.',
        ],
        subsections: [
          {
            subheading: '1. Inverting the colors',
            text: 'White-on-black looks sleek and fails on most stock phone cameras. If your design is dark-mode themed, put the code on a white panel — never invert the pattern itself.',
          },
          {
            subheading: '2. Crowding the quiet zone',
            text: 'Text, borders, or photos touching the code edge break the detector\'s ability to find the code. Four modules of clear margin on all sides, always — treat it as untouchable.',
          },
          {
            subheading: '3. Logos that cover too much',
            text: 'A logo covering 40%+ of the pattern destroys more data than error correction H can rebuild. Cap logos at ~20-25% of the code area, centered, never over the corner squares.',
          },
          {
            subheading: '4. Gradient and photo backgrounds',
            text: 'Modules on a busy photo or gradient fail the binarization step in unpredictable patches. Solid light backing panel first, always.',
          },
          {
            subheading: '5. Printing too small',
            text: 'A 2 cm code on a flyer scanned from a meter away is a decoration, not a link. Use the 10:1 distance rule and add the quiet zone to your size math.',
          },
          {
            subheading: '6. Styling without raising error correction',
            text: 'Adding a logo or colored modules while error correction sits at M is asking for trouble. Set Q or H before you style, not after something breaks.',
          },
          {
            subheading: '7. Skipping the real-world scan test',
            text: 'Screen previews hide contrast and resolution problems. One proof scan on real paper, two phones, real lighting — non-negotiable before any print run.',
          },
        ],
      },
    ],
    faqsTitle: 'FAQs: QR Code Design Best Practices',
    faqs: [
      {
        question: 'Can I change the color of a QR code?',
        answer:
          'Yes, as long as the new color stays dark on a light background. Scanners care about luminance contrast, not hue: deep navy, dark green, maroon, or charcoal on white scans as reliably as black. Avoid light colors, low-contrast pairings, and gradients across the pattern — the light end of a gradient can drop below the contrast threshold and break scanning in patches.',
      },
      {
        question: 'Can I put a logo in the middle of a QR code?',
        answer:
          'Yes, within limits. Set error correction to H, keep the logo in the central 20-25% of the code area, give it a white border ring, and never cover the three corner position squares. Test-scan with two different phones before printing. Logos that cover more than ~30% of the pattern exceed what error correction can rebuild and cause real failures.',
      },
      {
        question: 'What is the quiet zone of a QR code?',
        answer:
          'The quiet zone is the mandatory blank margin around all four sides of a QR code — at least 4 modules wide (about 10% of the code width) per ISO/IEC 18004. Scanners need it to detect where the code begins. Text, borders, graphics, or photos touching the code edge cause intermittent scan failures. A white backing panel with padding doubles as a quiet zone.',
      },
      {
        question: 'Do rounded dots and custom shapes affect scanning?',
        answer:
          'Rarely. Decoders read module centers, so rounded or circular modules scan fine as long as each module still reads as mostly dark with clear gaps between them. The exception is very small print sizes, where rounded modules can blur together. Heavily redesigned corner "eye" shapes add more risk — recolor the corner squares freely but keep their standard square-in-square geometry.',
      },
      {
        question: 'Why won\'t my designed QR code scan?',
        answer:
          'The usual suspects, in order: inverted or low-contrast colors, a missing or crowded quiet zone, a logo covering too much of the pattern, error correction left at M while styling was added, or a code printed too small or on glossy stock under harsh lighting. Audit in that order — the fix is usually obvious within a minute. And always test-scan the exported file on two phones before blaming the design.',
      },
      {
        question: 'Should I use SVG or PNG for a designed QR code?',
        answer:
          'Use SVG (vector) for professional printing — it scales to any size with perfectly crisp module edges. Use PNG at 1000px or higher resolution for office printers, web use, and quick jobs. Low-resolution exports round off module edges, which is exactly the damage that hurts scanning, so never download a small PNG for a large print.',
      },
    ],
    ctaTitle: 'Design Your QR Code Now',
    ctaDesc:
      'Apply these best practices with the free generator: pick a dark brand color, add your logo with error correction set high, and download a print-ready PNG or SVG — no sign-up, no watermark.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
    ctaSecondaryText: 'QR Code Print Size Guide',
    ctaSecondaryLink: '/guides/qr-code-print-size-guide',
  };

  return enData;
}
