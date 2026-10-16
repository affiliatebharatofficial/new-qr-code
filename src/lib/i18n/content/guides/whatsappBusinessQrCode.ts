import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getWhatsappBusinessQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'WhatsApp QR Code: Create One Free for Your Business',
    description:
      'Create a free WhatsApp QR code for your business: build a wa.me chat link, use WhatsApp Business\u2019s in-app QR, or make a branded code \u2014 no sign-up.',
    badge: 'Guides',
    h1: 'How to Create a WhatsApp QR Code for Your Business',
    subheadline:
      'A WhatsApp QR code lets customers start a chat with your business in one scan \u2014 no typing your number, no saving a contact. Here is how to make one in under two minutes, free, with no sign-up: either with the generator below or straight inside the WhatsApp Business app.',
    readingTime: '8 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Fastest method',
        text: 'Select the WhatsApp type in the free generator, enter your number with country code, and download a print-ready code.',
      },
      {
        label: 'Official in-app option',
        text: 'WhatsApp Business can generate its own QR code under Tools > Short link > View QR code.',
      },
      {
        label: 'Prefilled messages',
        text: 'Add ?text= with URL-encoded text to your wa.me link so the chat opens with a message ready to send.',
      },
      {
        label: 'No expiry',
        text: 'WhatsApp QR codes do not expire; the in-app code only changes if you reset it or delete the account.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-whatsapp-qr-code',
        heading: 'What Is a WhatsApp QR Code and How It Works',
        paragraphs: [
          'A WhatsApp QR code is a QR code that encodes a link which opens a chat with you on WhatsApp. When a customer scans it, their phone opens WhatsApp \u2014 on mobile, desktop, or WhatsApp Web \u2014 and drops them straight into a conversation with your number. They never have to type your number, save you as a contact, or figure out your country code.',
          'Under the hood, the link is usually a wa.me address: https://wa.me/ followed by your phone number in full international format, digits only \u2014 no plus sign, no spaces, no brackets or hyphens. For an Indian business number like +91 98765 43210, the link is https://wa.me/919876543210. That is the entire trick. Everything else \u2014 the design, the prefilled message, where you print it \u2014 is packaging around that link.',
          'There are two legitimate ways to get this code. The quickest is the WhatsApp Business app itself, which generates an official QR code under its Short link tools in under a minute. The other route is a QR generator: you build your wa.me link yourself and turn it into a code with full control over the design \u2014 brand colors, your logo in the middle, high-resolution SVG for print. The in-app code is plain and unbranded; the generator route is the one that looks professional on a storefront.',
        ],
        callout: {
          title: 'Why it beats a plain phone number',
          text: 'Typing an 11\u201313 digit number from a sign is where customers drop off. A scan removes every step of friction: scan, chat opens, they send. For shops, salons, and service businesses, that one removed step is the whole point.',
          type: 'tip',
        },
      },
      {
        id: 'create-whatsapp-qr-code-generator',
        heading: 'Create a WhatsApp QR Code in 4 Steps (Free Generator)',
        paragraphs: [
          'This is the route that gives you a branded, print-ready code. The whole process takes about two minutes. Open the free generator on this site\u2019s homepage and follow these steps.',
          'Step 1 \u2014 Pick the WhatsApp type. In the generator\u2019s type grid, choose the WhatsApp tile. The generator then knows to build the correct wa.me chat link for you, so you do not have to hand-format the URL yourself.',
          'Step 2 \u2014 Enter your number in international format. Type your full phone number with the country code and no leading zero. For India that is 91 followed by the 10-digit number. Double-check the digits: a typo here sends customers to a stranger\u2019s chat, and a printed batch of posters cannot be fixed cheaply. If you want the chat to open with a message ready, add your text in the prefilled-message field \u2014 write it from the customer\u2019s point of view, like \u201cHi, I would like to place an order\u201d, since they are the one sending it.',
          'Step 3 \u2014 Style and download. Adjust colors, add your logo, set the size, then download. PNG works for screens and social posts; SVG is the print-ready vector for banners, packaging, and business cards. Save a copy of the link itself too \u2014 you will want it for your Instagram bio, email signature, and website contact button.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing the dedicated WhatsApp type tile',
            caption:
              'Step 1: choose the WhatsApp type tile in the generator \u2014 it builds the correct wa.me chat link for you.',
          },
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator with live preview and PNG and SVG download buttons',
            caption:
              'Step 3: the live preview updates instantly; download PNG for screens or vector SVG for print.',
          },
        ],
      },
      {
        id: 'whatsapp-business-app-qr-code',
        heading: 'Use WhatsApp Business\u2019s Built-In QR Code Instead',
        paragraphs: [
          'If you use the WhatsApp Business app and want the shortest official path, skip the generator: the app makes its own QR code. On Android, open the app, tap the three-dot menu, go to Business tools, and tap QR code. On iPhone, tap Settings at the bottom right, then Business tools, then QR code. Either way the code is the same: it links directly to your business profile.',
          'The same screen also gives you a short link you can share \u2014 it looks like wa.me followed by your number \u2014 and lets you set a default message that appears pre-filled when a customer opens the chat. You can edit that default message any time under the Short link section. Businesses on the WhatsApp Business Platform get a masked variant, https://wa.me/message/<code>, which hides the phone number itself; its attached prefilled message can hold up to 140 characters and can be edited or deleted later.',
          'The in-app code is convenient \u2014 it is tied to your account, works even if your phone is off, and never expires unless you reset it or delete the account. Its weakness is design: it is a standard plain code with no logo, no brand colors, and no size options. Use it when speed matters most; use a generator when the code goes on anything that represents your brand.',
        ],
        bullets: [
          'Storefront signage and table tents \u2014 customers scan while they browse.',
          'Product packaging \u2014 support and reorders one scan away.',
          'Business cards and trade-show displays.',
          'Receipts and invoices \u2014 an easy prompt for repeat orders and feedback.',
          'Email signatures and social bios \u2014 the same link, no code needed there.',
        ],
      },
      {
        id: 'add-pre-filled-message',
        heading: 'Add a Pre-Filled Message to Your WhatsApp QR Code',
        paragraphs: [
          'The single most effective upgrade to a WhatsApp QR code is a prefilled message. Without one, the chat opens blank and the customer stares at an empty text box. With one \u2014 \u201cHi! I\u2019d like to book an appointment\u201d \u2014 the customer taps send and the conversation is already moving. It removes the awkward \u201chello\u201d that never becomes anything.',
          'Technically, you append ?text= followed by URL-encoded text to your wa.me link: https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20place%20an%20order. URL-encoding means spaces become %20, and characters like & or ? get escaped \u2014 most generators handle this for you, but if you build the link by hand, test it before printing. Keep the message short and natural: it should read like something the customer would actually say, not a campaign tag.',
          'One caution: a prefilled message written from the business\u2019s point of view feels wrong \u2014 \u201cWELCOME TO MY SHOP!!!\u201d is the customer\u2019s line to send, which is obviously not how anyone talks. Write it in first person, from the buyer\u2019s seat, and match the placement: a storefront code might say \u201cHi, is this item in stock?\u201d while a packaging code says \u201cHi, I need help with my order\u201d.',
        ],
        callout: {
          title: 'Test before you print',
          text: 'Scan the finished code with a second phone and confirm the chat opens with the right number and the exact prefilled text. Fixing a typo on screen is free; reprinting a pallet of boxes is not.',
          type: 'warning',
        },
      },
      {
        id: 'make-it-branded',
        heading: 'Make It Branded: Logo, Colors, and Print Size',
        paragraphs: [
          'A plain black-and-white code works, but it is forgettable \u2014 and on a busy storefront it blends into the wall. A branded code does the same job while carrying your identity. Add your logo in the center (keep it small \u2014 about 15\u201320% of the code\u2019s area), use your brand\u2019s main color for the modules, and keep a clean white quiet zone of at least one module-width on all sides. The quiet zone is not decoration; scanners need that breathing room.',
          'Because a WhatsApp link with a prefilled message is a moderately long URL, the code becomes denser than a bare link \u2014 more data means more, smaller modules. That is why error correction matters: a high error-correction level keeps the code scannable even with a logo covering the middle and even after print wear. Then size it for its job: 2\u00d72 cm is fine on a business card held at arm\u2019s length, but a storefront window needs 10 cm or more, and a billboard needs the code to be scannable from the viewing distance \u2014 roughly 1 cm of code per 50 cm of viewing distance.',
          'For print, always export SVG \u2014 it is a vector, so it stays razor-sharp at any size. PNG is fine for Instagram posts, WhatsApp status, and email signatures, where pixels are pixels. And avoid inverted designs (light code on dark background) unless your generator explicitly supports them; most phone cameras scan dark-on-light far more reliably.',
        ],
        figures: [
          {
            src: '/guides/screenshots/logo-upload.png',
            alt: 'Logo upload panel for placing a brand logo in the center of a QR code',
            caption:
              'Add your logo in the center at 15\u201320% of the code\u2019s area so the code stays scannable.',
          },
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common Mistakes That Break WhatsApp QR Codes',
        paragraphs: [
          'Most broken WhatsApp QR codes fail for the same handful of preventable reasons. The phone number is the usual culprit: a plus sign, a space, a missing country code, or a leading zero turns a working chat link into a dead end. Always use digits only in full international format, and verify by clicking the link yourself \u2014 not just scanning the code, but opening the underlying wa.me URL.',
          'The second common failure is design-over-function. Heavy customization \u2014 transparent backgrounds, tiny codes, logos covering half the pattern \u2014 looks striking in a mockup and fails at the shop counter. Keep contrast high, the code big enough for its placement, and the quiet zone empty.',
          'Finally, there is the business-practice mistake: pointing customers at your personal WhatsApp. Your business code should open your business number \u2014 preferably the WhatsApp Business app, where you get the business profile, catalog, labels, and away messages. Mixing personal and business chats is fine until your first holiday and your first boundary complaint. Keep them separate from day one.',
        ],
        subsections: [
          {
            subheading: 'Phone number formatting',
            text: 'Digits only, full international format: 91 + 10-digit number for India. No +, no spaces, no leading zero.',
          },
          {
            subheading: 'Scan testing',
            text: 'Test with two different phones, at least one Android and one iPhone, from the actual distance the code will be scanned.',
          },
          {
            subheading: 'Quiet zone',
            text: 'At least one full module-width of clear space around the code. Busy backgrounds and overlapping text kill scans.',
          },
          {
            subheading: 'Reset policy',
            text: 'The in-app business QR code can be reset, which kills the old one. Reset it if a code printed in the wild starts getting spam.',
          },
        ],
      },
    ],
    faqsTitle: 'WhatsApp QR Code FAQs',
    faqs: [
      {
        question: 'Do WhatsApp QR codes expire?',
        answer:
          'No. A QR code built from a wa.me link works as long as the number behind it is active on WhatsApp. The official in-app WhatsApp Business QR code also never expires \u2014 it only stops working if you reset it or delete the WhatsApp Business account. There is nothing time-limited about the code itself.',
      },
      {
        question: 'Do I need the WhatsApp Business app to make a WhatsApp QR code?',
        answer:
          'No. Any phone number with WhatsApp can have a QR code \u2014 just build a wa.me link with your number and turn it into a code with any generator. The WhatsApp Business app adds convenience (an official built-in QR and short-link tools) plus business features like a catalog and labels, but it is not required for the code itself.',
      },
      {
        question: 'Can I add a pre-filled message to my WhatsApp QR code?',
        answer:
          'Yes. Append ?text= followed by URL-encoded text to your wa.me link, for example https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20order. When a customer scans the code, WhatsApp opens with that message ready to send. Write it from the customer\u2019s point of view, in first person, since they are the sender.',
      },
      {
        question: 'Does scanning my WhatsApp QR code reveal my phone number?',
        answer:
          'To the person chatting with you, yes \u2014 the chat opens with your number as the contact, just like any WhatsApp conversation. If exposing the number in the URL itself is a concern, businesses on the WhatsApp Business Platform can use wa.me/message/<code> links that mask the number. But the chat itself always involves the number.',
      },
      {
        question: 'Can I track how many people scan my WhatsApp QR code?',
        answer:
          'A plain static QR code is not trackable \u2014 a scan and a chat look identical to you. If you need analytics, put a short redirect link of your own (one you control, with click tracking) between the code and wa.me, or run the code through a dynamic QR service. Just remember that every redirect adds a failure point, so test it regularly.',
      },
      {
        question: 'Does the customer need to save my number before chatting?',
        answer:
          'No \u2014 that is the whole point of a WhatsApp QR code. Scanning a wa.me code opens a chat with your number directly, without saving you as a contact first. The same applies to clicking the underlying wa.me link on a website or in an Instagram bio.',
      },
    ],
    ctaTitle: 'Make Your WhatsApp QR Code Now',
    ctaDesc:
      'Build a branded, print-ready WhatsApp QR code in about two minutes \u2014 free forever, no sign-up, no watermark.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };

  return enData;
}
