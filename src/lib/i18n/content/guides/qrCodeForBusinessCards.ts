import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForBusinessCardsData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code on Business Card: How to Add One (Free)',
    description:
      'Add a QR code on your business card that actually gets scanned — vCard vs URL steps, size, placement, and free design tips.',
    badge: 'Guides',
    h1: 'QR Code on Business Card: How to Add One That Gets Scanned',
    subheadline:
      'A business card has room for a name, a title, and maybe one phone number — and then it runs out of space. A QR code on a business card fixes that in one small square: one scan saves your full contact details, opens your portfolio, or books a meeting, without anyone typing anything. But a card code only works if it is big enough, high-contrast enough, and linked to the right destination. This guide covers all three — which code type to pick, how to make it free, and the size and placement rules that keep it scannable after printing.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'vCard is the classic choice',
        text: 'A vCard QR code saves your name, phone, email, and company straight into the scanner’s phone contacts — no typing, no lost card.',
      },
      {
        label: 'Minimum size is 2 cm',
        text: 'On a standard 85 × 55 mm card, print the code at least 2 × 2 cm, with a clear quiet zone around all four sides.',
      },
      {
        label: 'Link to something lasting',
        text: 'Your own website or contact page outlives a social profile or a short-lived offer. Never link a card code to a URL you might delete.',
      },
      {
        label: 'Test the printed card',
        text: 'A code that scans on screen can fail on glossy card stock. Print one proof, scan it with a real phone, then approve the batch.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-add-qr-code-to-business-card',
        heading: 'Why Put a QR Code on a Business Card?',
        paragraphs: [
          'A paper business card is a brilliant networking tool with one flaw: it cannot hold much. Your name, job title, phone number, email, and website already crowd a small rectangle, and that is before you add a logo, an address, or social handles. Something always gets cut, and what gets cut is usually the thing that would have won the work — the portfolio link, the booking page, or the WhatsApp number. A QR code on a business card removes that trade-off: the card stays clean and readable, and the code carries everything else.',
          'The second advantage is accuracy. Nobody types a phone number or an email address off a card perfectly at a noisy event, and every mistyped digit is a lost lead. A scan transfers the details exactly — no transcription errors, no “I think the email was dot-com or dot-in”. A vCard code goes further and drops the contact straight into the phone’s address book, so the new contact is saved before the conversation is even over.',
          'There is also a tracking and updating angle that paper alone cannot offer. A code linked to your website or a link page can be measured — you can see visits coming from the card — and if you ever change your number or role, you update the destination page instead of reprinting a thousand cards. That only works if the code points at a URL you control, which is why destination choice matters more than decoration, as the next section explains.',
        ],
        callout: {
          title: 'The card still has to work without the code',
          text: 'Not everyone scans. Your name, phone number, and email should still be printed in plain text on the card, so the card is useful even to someone who never points a camera at it.',
          type: 'info',
        },
      },
      {
        id: 'vcard-vs-url-vs-link-page',
        heading: 'vCard vs URL vs Link Page: Which Destination Should Your Card Code Use?',
        paragraphs: [
          'The most common choice is a vCard code, which encodes your contact details directly in the code itself: name, phone, email, company, job title, and website. When scanned, the phone offers to save a new contact with those fields pre-filled. It needs no internet connection to work, it never breaks because a website went down, and it is the closest digital equivalent of handing over a card. Its limit is capacity: a vCard with a photo, a long bio, and ten fields becomes a dense code that needs a larger print size to scan reliably, so keep the vCard to the essentials.',
          'A URL code, by contrast, sends the scanner to a web page — your homepage, your portfolio, a booking form, or a WhatsApp chat link. It is the right choice when the goal is an action rather than a saved contact: booking a call, viewing work samples, or starting a chat. The risk is link rot. If that page moves, gets deleted, or changes its address, every card you already handed out points at a dead end. So link URL codes only to stable pages you control, ideally your own domain, and avoid linking to a social profile that could change its handle or a campaign page with an expiry date.',
          'A link page is the middle path, and for many professionals it is the best one. The code points to one simple page — your website’s contact page, or a single page listing your phone, email, portfolio, booking link, and social profiles — and the scanner picks what they need. One code then serves every purpose, and if your number or portfolio changes, you edit the page once and every card in circulation updates with it. If you can only print one code on your card, a link page on your own domain is usually the safest long-term bet.',
        ],
        subsections: [
          {
            subheading: 'vCard code',
            text: 'Best when the goal is “save my contact”. Works offline, never breaks, but keep the fields short so the code stays easy to scan.',
          },
          {
            subheading: 'URL code',
            text: 'Best when the goal is one action — book, view portfolio, or chat. Link only to a stable page on a domain you control.',
          },
          {
            subheading: 'Link page code',
            text: 'Best all-rounder: one code leading to phone, email, portfolio, and booking. Update the page and every printed card updates too.',
          },
        ],
      },
      {
        id: 'how-to-make-qr-code-for-business-card',
        heading: 'How to Make a QR Code for a Business Card (Free, Step by Step)',
        paragraphs: [
          'First, decide the destination and gather the exact details before you generate anything. For a vCard, that means your full name, one phone number, one email address, company name, and job title — spelled exactly as they should appear in someone else’s contacts, including the country code on the phone number (for example +91 for India). For a URL or link page, copy the full address including https://, and open it in a browser first to confirm it loads the right page.',
          'Next, open the free QR code generator and choose the matching type from the type selector: vCard for a contact code, URL for a website or booking page. Enter your details carefully — a vCard code is only as good as the data inside it, and a single wrong digit in a phone number is worse than no code at all, because the scanner saves the wrong number with confidence. Double-check the number and email by reading them back before you move on.',
          'Then customize lightly. You can add a small logo in the centre or use a brand colour for the modules, but keep both restrained on a card code: the code will be printed small, so a large logo or a light-coloured module set can push it below the scannability threshold. Black modules on a white background remain the most reliable combination, and if you add a logo, use a high error-correction level so the code still reads with the centre covered.',
          'Finally, download the code as a high-resolution PNG for digital proofs, or as SVG for the print designer — vector is the better choice for cards, because it scales to the exact print size without going blurry. Send the designer the file, not a screenshot, and tell them the minimum size: at least 2 × 2 cm on the card, with a clear margin around it. Keep the original file saved, so reprints and card redesigns never need a fresh code.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for making a QR code on a business card',
            caption: 'The free generator homepage — your business card QR code starts here, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing URL, WiFi, text, and vCard options for a business card QR code',
            caption: 'Pick the type first — vCard to save a contact, URL to send scanners to a page.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a business card QR code as PNG or SVG for print',
            caption: 'Download SVG for your print designer, or high-resolution PNG for digital proofs.',
          },
        ],
      },
      {
        id: 'size-placement-and-design-rules',
        heading: 'Size, Placement, and Design Rules for a Card QR Code',
        paragraphs: [
          'Size is the rule that breaks most card codes. A standard business card is 85 × 55 mm, and a code smaller than 2 × 2 cm forces the phone camera to work too hard — especially in dim event lighting or on textured stock. Aim for 2 to 2.5 cm on a standard card, and go larger if the vCard holds many fields, because denser codes need more physical size to stay readable. If the code will also be scanned from a little distance, such as from a card held up at a stall, err on the larger side.',
          'Placement matters almost as much. The back of the card is the classic spot: it gives the code room, keeps the front clean for your name and title, and lets the code sit on a plain background. If it must go on the front, put it in a corner with nothing else competing for attention, and never place it over a photo, a pattern, or a coloured panel. Wherever it sits, keep the quiet zone — a blank margin at least four modules wide on all four sides — completely clear of text, logos, and card edges. A code crowded by other elements is a code phones struggle to find.',
          'Design restraint is what separates a professional card from a gimmicky one. One code is enough; two codes on one card confuse people about which to scan. Keep the modules dark and the background light — dark modules on a white or pale panel scan in almost any light, while light modules on a dark card, or a code printed in a pale brand colour, fail often. If your card is dark, print the code inside a white rounded square rather than inverting it. And match the code to the card’s finish: matte stock scans more reliably than glossy stock under event lights, because glare on gloss can wash the modules out.',
        ],
        bullets: [
          'Minimum print size: 2 × 2 cm on a standard 85 × 55 mm card; larger for dense vCards.',
          'Keep a quiet zone of at least four modules of clear space on all four sides.',
          'Back of the card is the usual spot; front corners work only with a plain background.',
          'Dark modules on a light background — never invert to light modules on a dark card.',
          'One code per card. Two codes make scanners hesitate about which to scan.',
          'Prefer matte stock over glossy to avoid glare washing out the modules.',
        ],
        callout: {
          title: 'Add a short call to action',
          text: 'People scan more when they know what they get. Print “Scan to save my contact” or “Scan to view my work” beside the code — three to five words is enough.',
          type: 'tip',
        },
      },
      {
        id: 'common-business-card-qr-mistakes',
        heading: 'Common Mistakes That Make Card QR Codes Fail',
        paragraphs: [
          'The most common failure is a code printed too small or too low-contrast to scan in real conditions. Designers shrink the code to protect the layout, or render it in a light brand colour, and it looks elegant on screen — then fails under a trade-show spotlight or on a textured card. The fix is unglamorous but effective: bigger, darker, plainer. A code that looks slightly boring and scans every time beats a beautiful one that scans sometimes.',
          'The second failure is a dead or wrong destination. A code linked to a personal social profile that later changes handle, a campaign page that expires, or a URL typed with a typo sends every recipient to the wrong place, and unlike a website you cannot recall printed cards. This is why vCards and your own domain are safer destinations than borrowed platforms: a vCard works forever with no server involved, and a page on your own domain stays under your control.',
          'The third failure is cramming the code with too much data. A vCard stuffed with a photo, a biography, five phone numbers, and every social link becomes a dense, hard-to-scan square that needs a large print size the card cannot spare. Keep the vCard to the fields someone actually needs to reach you, and put the rest — portfolio, socials, booking — on the link page instead. If you do add a logo to the centre, test it: a logo that covers too much of a dense code is the fastest way to break an otherwise good card.',
        ],
        callout: {
          title: 'Never print the code from a screenshot',
          text: 'A screenshot of a QR code is low-resolution and often slightly distorted. Always send your designer the original PNG or SVG download, so the printed modules stay sharp at final size.',
          type: 'warning',
        },
      },
      {
        id: 'testing-and-printing-checklist',
        heading: 'Testing Checklist Before You Print the Batch',
        paragraphs: [
          'Testing a card code takes five minutes and saves a reprint. First, print a single proof at final size on the actual card stock you plan to use — not on office paper, because gloss, texture, and colour shift all affect scanning. Scan the proof with a real phone camera from a normal holding distance, in ordinary room light, and confirm it opens the right destination: the correct contact fields for a vCard, the correct page for a URL.',
          'Then test a second phone if you can — ideally one iPhone and one Android — and test in the kind of light where the card will actually be used, such as a dim hall or outdoors. If either phone hesitates, enlarge the code, increase the contrast, or simplify the vCard before approving the run. Also check the printed text beside the code: the call to action should be legible, and the name and number in plain text should match the code’s contents exactly.',
          'Finally, keep the source file and a note of the destination somewhere safe. When your number, role, or portfolio changes, you will either regenerate the vCard or update the link page — and knowing which one your printed cards use tells you whether a reprint is needed at all. A link-page code survives most changes with no reprint; a vCard code needs new cards only when the contact details themselves change.',
        ],
        bullets: [
          'Print one proof on the real card stock, at final size, before the full batch.',
          'Scan with a real phone in normal light — and a second phone model if possible.',
          'Confirm the destination: correct contact fields, or the correct page, every time.',
          'Check the plain-text details on the card match the code’s contents.',
          'Save the source file so reprints never need a fresh code.',
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What should a QR code on a business card link to?',
        answer:
          'Most often a vCard, which saves your name, phone, email, and company into the scanner’s contacts, or a link page with your phone, portfolio, and booking links. A vCard works offline and never breaks; a link page lets you update details without reprinting. Avoid linking to pages you do not control or that might expire.',
      },
      {
        question: 'How big should a QR code be on a business card?',
        answer:
          'At least 2 × 2 cm on a standard 85 × 55 mm card, with a clear quiet zone around all four sides. Dense vCards with many fields need a slightly larger code to scan reliably. Smaller than 2 cm, most phone cameras struggle, especially in dim event lighting or on glossy stock.',
      },
      {
        question: 'Should the QR code go on the front or back of a business card?',
        answer:
          'The back is the usual choice: it gives the code room and keeps the front clean for your name and title. A front-corner code works too, as long as it sits on a plain, light background with nothing crowding it. Wherever it goes, keep the quiet zone clear and add a short line like “Scan to save my contact”.',
      },
      {
        question: 'Can I add my logo to a business card QR code?',
        answer:
          'Yes, a small centred logo works if you use a high error-correction level and keep the code large enough. Keep the logo modest — covering too much of a small, dense code breaks scanning. Always test the printed proof on a real phone before approving the batch.',
      },
      {
        question: 'Do QR codes on business cards still work if my details change?',
        answer:
          'A vCard code contains the details themselves, so if your phone number or email changes, old cards carry the old details and need reprinting. A code linked to a page on your own domain survives changes: edit the page once and every card in circulation points at the new information.',
      },
      {
        question: 'How do I make a QR code for a business card for free?',
        answer:
          'Use a free QR code generator: choose vCard for a contact code or URL for a page, enter your details exactly, keep the design dark-on-light, and download SVG for your print designer or high-resolution PNG for proofs. No account is needed, and the code itself never expires.',
      },
    ],
    ctaTitle: 'Make Your Business Card QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create a QR code for your business card that saves your contact or sends scanners to your work.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
