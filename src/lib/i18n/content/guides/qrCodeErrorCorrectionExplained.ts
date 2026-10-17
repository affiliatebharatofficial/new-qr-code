import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeErrorCorrectionExplainedData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code Error Correction Levels: L, M, Q, H Explained',
    description:
      'QR code error correction levels L, M, Q and H explained: recovery percentages, how Reed-Solomon math works, and which level to use for logos and print.',
    badge: 'Guides',
    h1: 'QR Code Error Correction Levels Explained (L, M, Q, H)',
    subheadline:
      'Every QR code can survive damage — scratches, stains, even a logo covering its center — thanks to four levels of Reed-Solomon error correction. This guide explains what L, M, Q and H actually mean, how much damage each can recover, and which level to choose so your code always scans.',
    readingTime: '9 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'The four levels',
        text: 'L recovers ~7%, M ~15%, Q ~25%, and H ~30% of damaged or covered modules — defined by the ISO/IEC 18004 standard.',
      },
      {
        label: 'M is the default',
        text: 'Level M is the default in almost every generator and is right for most clean digital and print use.',
      },
      {
        label: 'Logos need H',
        text: 'Put your logo in the center only with level H, keep coverage under 30%, and never cover the corner finder patterns.',
      },
      {
        label: 'Higher level, denser code',
        text: 'Error correction trades data capacity for redundancy: an H-level code is denser than the same data at level M.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-error-correction',
        heading: 'What QR Code Error Correction Actually Is',
        paragraphs: [
          'QR code error correction is a built-in self-healing system: extra mathematical redundancy woven into the code so a scanner can reconstruct the original data even when part of the code is unreadable. Scratch a printed flyer, spill coffee on a menu, or paste your logo over the middle of the code — the scanner reads around the damage and still delivers the link.',
          'The math behind it is the Reed-Solomon error-correction algorithm, the same technique used to keep scratched music CDs playing and satellite transmissions intact. When the code is generated, the encoder runs the data through polynomial equations and appends a block of redundant "error correction codewords" alongside the actual data. During scanning, the decoder compares what it reads against these codewords, spots inconsistencies, and mathematically reconstructs any missing or garbled pieces — no internet lookup required.',
          'The standard defines four selectable levels of this redundancy: L (Low), M (Medium), Q (Quartile), and H (High). Each level guarantees a maximum percentage of damaged modules the code can tolerate: roughly 7%, 15%, 25%, and 30% respectively. Everything else about error correction — logos, printing decisions, capacity trade-offs — flows from those four numbers.',
        ],
        callout: {
          title: 'Damage is measured in modules, not area',
          text: 'The percentages refer to codewords — chunks of data modules — not to the visual square inches of damage. A long scratch through dense data modules hurts more than the same scratch across the quiet zone or through the format information area.',
          type: 'info',
        },
      },
      {
        id: 'the-four-levels',
        heading: 'The 4 QR Code Error Correction Levels (L, M, Q, H)',
        paragraphs: [
          'Each level buys you a specific amount of recoverable damage. Knowing what each one is for — rather than blindly picking the highest — is what separates a clean, scannable code from a needlessly dense one.',
        ],
        subsections: [
          {
            subheading: 'Level L (Low) — up to ~7%',
            text: 'Minimal redundancy. Best for codes displayed on clean screens: presentation slides, TV graphics, app onboarding flows, and digital signage in controlled environments. The code stays as small and sparse as possible, which scans fastest at a distance.',
          },
          {
            subheading: 'Level M (Medium) — up to ~15%',
            text: 'The default in virtually every QR generator, and the right choice for most uses: flyers, product labels, packaging, business cards, and website downloads. It handles ordinary wear — slight creases, minor print smudges, fading — without inflating the code.',
          },
          {
            subheading: 'Level Q (Quartile) — up to ~25%',
            text: 'For codes that will take a beating: outdoor signage exposed to sun and rain, delivery vehicles, factory floors, and industrial labels. Also the pragmatic minimum if you plan a small centered graphic that covers noticeably more than a logo badge.',
          },
          {
            subheading: 'Level H (High) — up to ~30%',
            text: 'Maximum redundancy and the mandatory choice whenever you embed a logo or image in the center of the code. It also suits harsh environments — construction sites, shipping containers, machinery plates — where heavy abrasion is guaranteed.',
          },
        ],
      },
      {
        id: 'how-it-works',
        heading: 'How Error Correction Works: Reed-Solomon in Plain English',
        paragraphs: [
          'Imagine packing a suitcase with a checklist. Reed-Solomon packs the "checklist" — extra equations describing your data — inside the QR code itself. When your phone scans the code, it reads both the data modules and the checklist modules. If a scratch erased a chunk of data, the decoder works backwards from the surviving checklist equations to fill in the blanks. As long as enough of both survive, the original message pops out perfectly.',
          'Here is the key nuance most people miss: error correction does not just "fix blurry modules." The decoder classifies damage into two kinds. Erasures are parts the scanner knows are missing — like the area under your logo, which reads as a uniform patch rather than modules. Errors are parts the scanner misreads — like glare turning a light module dark. Reed-Solomon handles both, but it can recover roughly twice as many known erasures as unknown errors. That is why a cleanly covered logo (an erasure) is cheaper than random print damage of the same size.',
          'This is also why the four levels are not magic shields. The percentages assume the damage is spread across data codewords, not concentrated on the finder patterns — the three large squares in the corners. If all three finder patterns are destroyed, the scanner cannot even orient the code, and no amount of error correction helps. Damage to structure matters more than damage to data.',
        ],
      },
      {
        id: 'capacity-tradeoff',
        heading: 'The Trade-Off: Error Correction vs Data Capacity',
        paragraphs: [
          'Redundancy takes space. Every error-correction codeword is modules that could otherwise have carried your data, so raising the level shrinks how much you can encode — or makes the code denser for the same payload. This is the real cost of error correction, and it is why "just use H for everything" is bad advice.',
          'The numbers make this concrete. At the largest standard version (Version 40, 177×177 modules) in byte mode, level L holds about 2,953 bytes of data, while level H holds only about 1,273 bytes — less than half. In numeric mode the maximum drops from 7,089 digits at level L to roughly 3,057 digits at level H. Your encoder automatically bumps the code to a denser version when the data no longer fits, which means more, smaller modules.',
          'Denser codes are harder to scan: smaller modules need sharper prints, better cameras, and closer distances. So the practical rule is simple — use the lowest level that still covers your expected damage. A short URL at level M is a sparse, forgiving code; the same URL at level H is visibly busier with zero extra benefit unless you are covering the middle with a logo.',
        ],
        bullets: [
          'Same data, level L → smallest, sparsest code. Fastest scanning at a distance.',
          'Level M → slightly denser. The default sweet spot for almost all everyday uses.',
          'Level Q → noticeably denser. Justified for weather, abrasion, or centered graphics.',
          'Level H → densest of all. Worth it only for logos/images or genuinely harsh conditions.',
        ],
      },
      {
        id: 'which-level-to-use',
        heading: 'Which Error Correction Level Should You Use?',
        paragraphs: [
          'Most generators hide this choice and default to level M — and that is fine for the majority of codes. You only need to think about it when your situation deviates from "clean print or clean screen." Run through this decision tree before you generate.',
          'Ask first: will anything cover part of the code? If you are adding a logo, brand mark, or any centered image, choose H and size the graphic to cover at most 20–25% of the code area (comfortably under the 30% recovery ceiling), keeping the three corner finder patterns completely untouched. If there is no logo but the code will live outdoors, on vehicles, machinery, or surfaces that get handled, Q is your level. If the code sits on clean screens, slides, or crisp short-run prints with no abuse expected, L keeps the code as clean and scannable as possible.',
          'For everything else — menus, business cards, flyers, packaging, receipts, onboarding flows — stay on M, the default. One more practical note: shorter data encodes to sparser codes, so a short URL with a redirect link scans more reliably than a long raw URL at any error correction level. Keep the payload small and the right level is doing the rest.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator with live preview and customization options',
            caption:
              'Generate with the free tool — the default level M suits most clean prints and screens; switch your thinking to H when a logo goes in the middle.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'QR code download options showing PNG and SVG buttons',
            caption:
              'Download PNG for screens or vector SVG for print — then scan-test the code before you commit to a full print run.',
          },
        ],
      },
      {
        id: 'logos-and-error-correction',
        heading: 'Logos and Error Correction: How Much of the Code Can You Cover?',
        paragraphs: [
          'The classic use of error correction is the branded QR code — a company logo sitting in the center, and the code still scanning perfectly. This works because the logo area is a clean erasure: the decoder knows exactly which modules are missing and reconstructs them from the redundancy. But it only works within strict rules.',
          'First, the level must be H — no exceptions. Level H recovers up to 30% of codewords, and a centered logo typically covers 15–25% of the code area. Anything lower than H leaves no safety margin, and real-world codes also pick up incidental damage (a crease, a smudge) on top of the logo. Second, keep the logo well under 30% of the code area; 20% is the comfortable target. Third, never let the logo touch the three finder patterns in the corners, the timing patterns along the edges, or the quiet zone border — those are structural and their damage is not recoverable the same way.',
          'Finally, always test. Scan the branded code with at least two different phones — an iPhone and an Android — from your intended scanning distance, in realistic lighting. A code that scans on your desk may fail on a glossy menu under restaurant lights. If it struggles, shrink the logo before you reprint; that one tweak fixes nearly every logo QR problem.',
        ],
        figures: [
          {
            src: '/guides/screenshots/logo-upload.png',
            alt: 'QR code logo upload panel with a centered brand logo inside the code',
            caption:
              'Add your logo in the center — with level H, up to 30% of covered modules are reconstructed and the code still scans.',
          },
        ],
        callout: {
          title: 'Never cover the corner squares',
          text: 'The three finder patterns are the scanner\u2019s orientation anchors. Even a sliver of overlap with a logo can make the whole code unscannable, regardless of error correction level. Keep logos strictly centered.',
          type: 'warning',
        },
      },
      {
        id: 'myths-mistakes',
        heading: '5 Myths About QR Code Error Correction',
        paragraphs: [
          'Error correction is powerful but misunderstood. These are the mistakes that keep showing up in printed QR codes.',
        ],
        bullets: [
          'Myth: "Level H makes my code indestructible." Reality: H recovers up to 30% of data codewords. Destroy the finder patterns or cover half the code and it still fails.',
          'Myth: "Higher is always better." Reality: each level up costs data capacity and makes modules smaller and harder to scan. Overshooting the level can make a code worse, not better.',
          'Myth: "Error correction fixes bad contrast." Reality: it recovers missing or garbled modules, but it cannot fix a code printed in light gray on white or on a busy photo background. Contrast is a separate, non-negotiable requirement.',
          'Myth: "I can test damage tolerance by covering part of the code on screen." Reality: that actually works — carefully. It is a legitimate test, but do it with the final printed code in final lighting, not just on your monitor.',
          'Myth: "Dynamic QR codes have better error correction." Reality: static vs dynamic is about where the data lives (in the code vs on a redirect server). The error correction level is an independent setting that applies to both.',
        ],
      },
    ],
    faqsTitle: 'QR Code Error Correction FAQs',
    faqs: [
      {
        question: 'What are the four levels of QR code error correction?',
        answer:
          'The four levels are L (Low, recovers ~7% of damaged modules), M (Medium, ~15%), Q (Quartile, ~25%), and H (High, ~30%). They are defined by the ISO/IEC 18004 QR code standard and use Reed-Solomon mathematics to rebuild missing or misread data without any internet lookup.',
      },
      {
        question: 'Which error correction level should I use?',
        answer:
          'Use M (the default) for most codes — flyers, business cards, packaging, and screens. Choose L for pristine digital displays where you want the smallest code, Q for outdoor or high-abrasion use, and H whenever you embed a logo or image in the center. Pick the lowest level that covers your expected damage, since higher levels make codes denser.',
      },
      {
        question: 'Does a higher error correction level make the QR code bigger?',
        answer:
          'Yes, effectively. Higher levels reserve more modules for redundancy instead of data, so the same payload encodes to a denser code with smaller modules — or a larger version. That is why level H is only worth it for logos or harsh conditions: for ordinary use it just makes the code harder to scan.',
      },
      {
        question: 'Can a QR code still scan if it is damaged or partly covered?',
        answer:
          'Yes, up to the limit of its error correction level — roughly 7%, 15%, 25%, or 30% of data codewords for L, M, Q, and H. Scratches, stains, creases, and even a centered logo can be reconstructed. But damage to the three corner finder patterns or the quiet zone border usually kills the scan regardless of level.',
      },
      {
        question: 'What error correction level should I use with a logo?',
        answer:
          'Always level H. Keep the logo centered, covering no more than about 20–25% of the code area, and never touching the corner finder patterns or the quiet zone border. Then scan-test with at least two phones in realistic lighting before printing.',
      },
      {
        question: 'Is error correction the same as a dynamic QR code?',
        answer:
          'No. Error correction is the code\u2019s built-in damage resistance — a generator setting (L, M, Q, H). Static vs dynamic is about where the payload lives: a static code holds the data itself, while a dynamic code holds a redirect link you can change later. Both static and dynamic codes have an error correction level.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Create a free QR code with the right error correction for the job — logo-ready, high-resolution, and ready to scan anywhere. No sign-up.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };

  return enData;
}
