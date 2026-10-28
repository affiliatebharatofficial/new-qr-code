import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForPhoneNumberData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a QR Code for a Phone Number (Free)',
    description:
      'Turn any phone number into a scannable QR code: tel: link steps, country-code rules, call vs SMS vs vCard options, and print sizes — free.',
    badge: 'Guides',
    h1: 'How to Make a QR Code for a Phone Number',
    subheadline:
      'Typing a phone number from a poster, business card, or shop window is slow and error-prone — one wrong digit and the call goes to a stranger, or nowhere at all. A QR code for a phone number fixes that: one scan opens the dialer with the number already filled in, ready to call. This guide shows you how to create one in under a minute, explains the tel: link format behind it (including the country-code rule that trips up most people), compares a plain call code with SMS and vCard alternatives, and covers where to place the code — and how big to print it — so people actually use it.',
    readingTime: '8 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan, number ready to dial',
        text: 'A phone number QR code opens the dialer with the number prefilled. The person still taps Call — it never dials automatically.',
      },
      {
        label: 'Always include the country code',
        text: 'Use the full international format, e.g. tel:+919876543210. A local-only number fails for visitors, tourists, and anyone roaming.',
      },
      {
        label: 'Call, SMS, and vCard are three different codes',
        text: 'A tel: code starts a call, an sms: code opens a text message, and a vCard code saves the full contact. Pick the action you actually want.',
      },
      {
        label: 'Static is free and permanent',
        text: 'A free static QR code never expires. But if you change the number, every printed code breaks — so use a stable business number.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-a-phone-number-qr-code',
        heading: 'Why a Phone Number QR Code Beats Printing the Number',
        paragraphs: [
          'A printed phone number looks simple, but it asks the reader to do fiddly work: read ten or more digits, switch to the dialer, and retype them exactly. On a poster seen from a distance, on a moving vehicle, or on a business card in dim light, that transcription step fails often. People misread a 6 as a 0, drop a digit, or simply decide the call is not worth the effort and walk on. For a business, every one of those failures is a lost enquiry.',
          'A QR code removes the transcription entirely. The person points their phone camera at the code, taps the notification, and the dialer opens with the number already entered. There is nothing to memorise, nothing to retype, and no chance of a wrong digit. The friction drops from a multi-step chore to a single tap, which matters most exactly when interest is highest — someone standing outside your shop, looking at a for-sale board, holding your product, or reading your flyer.',
          'There is a second, less obvious benefit: a QR code can carry the number in full international format while the printed text next to it stays short and human-readable. You can print "Call us: 98765 43210" for local readers and still encode +919876543210 in the code, so visitors, tourists, and customers on roaming networks reach you too. The code also works in places where a number alone cannot be tapped: a shop window, a billboard, a vehicle door, a TV screen, or a presentation slide.',
        ],
        callout: {
          title: 'Scanning never dials by itself',
          text: 'For safety, phone cameras and QR readers open the dialer with the number prefilled — the user must still tap Call. No QR code can force a call, which is why the format is safe to print in public.',
          type: 'info',
        },
      },
      {
        id: 'tel-link-explained',
        heading: 'The tel: Link Explained — and Why the Country Code Matters',
        paragraphs: [
          'A phone number QR code is, underneath, just a tel: link in scannable form. The tel: URI scheme (defined in RFC 3966) tells a phone that the text after it is a telephone number to dial. So a code containing tel:+919876543210 opens the dialer with +919876543210 ready to call. A code containing only the digits with no tel: prefix is treated as plain text by most scanners — the person sees the number on screen but still has to copy or retype it, which defeats the whole purpose. The prefix is what turns a picture of a number into a working call button.',
          'The single most important formatting rule is to use the full international number: a plus sign, the country code, and then the national number with no spaces, brackets, or dashes. For India that means tel:+91 followed by the 10-digit mobile number; for the United States, tel:+1 followed by the 10-digit number. Spaces and dashes are technically allowed as visual separators in the tel: standard, but many generators and older scanners handle them inconsistently, and a stray space can truncate the number in some readers. Digits-only after the plus sign is the format that works everywhere, so use it even if the printed number next to the code shows spaces for readability.',
          'The country code matters even when all your customers are local. A phone without a country code assumes the number belongs to the country its SIM is registered in, which is wrong for tourists, international callers, and anyone whose phone is roaming. A code printed on a hotel sign, a tourist attraction, a real-estate board, or an export product label will be scanned by exactly those people. Encoding the full international number costs nothing and makes the code work for every scanner, everywhere — there is no downside to including it.',
        ],
        subsections: [
          {
            subheading: 'Call code (tel:)',
            text: 'Contains tel:+countrycode-number. Scanning opens the dialer with the number prefilled. Best for "call us now" placements: shop windows, boards, vehicles, and ads.',
          },
          {
            subheading: 'SMS code (sms:)',
            text: 'Contains sms:+countrycode-number, optionally with a prefilled message (sms:+919876543210?body=Hi). Scanning opens a text message instead of a call. Best when you want enquiries in writing, e.g. "Text us for a quote".',
          },
          {
            subheading: 'vCard code',
            text: 'Contains a full contact card: name, phone, email, address, and website. Scanning offers to save the whole contact. Best for business cards, where the person wants to keep your details, not just call once.',
          },
        ],
      },
      {
        id: 'create-phone-number-qr-code-step-by-step',
        heading: 'How to Create a QR Code for a Phone Number (Step by Step)',
        paragraphs: [
          'The whole process takes about a minute and needs no account, no software install, and no payment. You need two things: the phone number in international format, and a free QR code generator that supports a phone or URL type. Here is the exact sequence.',
          'First, write out the number correctly. Take the mobile or landline number, drop any leading zero used for domestic dialling (for example, the 0 in front of an Indian STD code), add the country code after a plus sign, and remove all spaces and dashes. An Indian mobile 098765 43210 becomes +919876543210 — country code 91, then the 10-digit number without its domestic leading zero. Double-check the digits against the number on your own phone — a code built from a mistyped number silently dials the wrong person.',
          'Next, open the free QR code generator and choose the phone type if it offers one, or the URL type if it does not. With a phone type, enter the number and the generator builds the tel: link for you. With a URL type, type or paste the full link yourself — tel:+919876543210, including the tel: prefix and the plus sign. Either way, check the preview carefully: it should show a normal black-and-white code. Then download it as a PNG — high resolution if you plan to print it on a poster, board, or vehicle, standard size if it is going on a screen, a chat message, or a social post.',
          'Finally, test before you distribute. Scan the code with your own phone, confirm the dialer opens with the correct number prefilled, and confirm you have not accidentally dialled anyone — remember, scanning only prefills the number, so you can cancel safely. Ideally, test with a second device as well: it catches the two most common mistakes — a missing country code, and a number copied with a space that truncated the digits.',
        ],
        bullets: [
          'Format the number first: +country code, no leading zero, no spaces or dashes (e.g. +919876543210).',
          'In the generator: choose the phone type, or paste tel:+919876543210 as a URL.',
          'Download as PNG — high resolution for print, standard for screens.',
          'Scan-test on two phones before printing: check the dialer shows the full correct number.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator with field for a phone number QR code',
            caption: 'Enter the number in international format — the code generates instantly in the preview.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'Choosing the phone QR code type for a phone number link',
            caption: 'Choose the phone type so the code opens the dialer, or paste a tel: link as a URL.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Downloading the phone number QR code as a PNG file',
            caption: 'Download the finished code as a PNG, ready for cards, posters, boards, or vehicles.',
          },
        ],
      },
      {
        id: 'where-to-place-phone-number-qr-code',
        heading: 'Where to Place Your Phone Number QR Code So People Actually Call',
        paragraphs: [
          'A phone number QR code only generates calls if people see it at a moment when calling is easy and the reason to call is obvious. The best placements share two traits: the audience is already interested, and their phone is already in their hand. A business card is the classic example — put the code on the back with one line of context, such as "Scan to call", next to your name and business. The recipient keeps the card, and months later the code still dials the right number without them hunting through old contacts.',
          'Shop windows, real-estate boards, and vehicles are the highest-value outdoor spots. A "For Sale" board with a call QR code lets a passer-by reach the agent without writing anything down — and the agent gets the call while the buyer is standing in front of the property, which is when interest peaks. On a delivery vehicle or a service van, the code turns every traffic jam and parking stop into a lead: "Scan to book a service" next to the code works far better than a bare number painted in small text. In all outdoor cases, print the number itself next to the code as well, for people without a camera handy or with an older phone.',
          'On screens and packaging, the same rule applies with one adjustment: always pair the code with a reason to call. A product box that says "Scan for support" will get scanned; a bare code with no context will not. An end slide in a presentation, a TV ad frame, or an Instagram Story with "Scan to call us" all work, because the viewer has a phone in hand at that moment. And in a restaurant or clinic, a table standee or reception poster with "Scan to book" captures customers exactly when they are deciding whether to come back.',
        ],
        bullets: [
          'Business cards: back of the card with "Scan to call" — the code outlives the conversation.',
          'Shop windows & boards: capture interest on the spot, e.g. property boards and storefronts.',
          'Vehicles: turn every stop into a lead — print the number beside the code too.',
          'Packaging & screens: always add a reason ("Scan for support", "Scan to book").',
        ],
      },
      {
        id: 'print-size-testing-and-privacy',
        heading: 'Print Size, Testing, and One Privacy Warning',
        paragraphs: [
          'Size follows viewing distance, and getting it wrong is the most common reason a printed code fails silently. As a rule of thumb, the code should be at least 2 x 2 cm on a business card scanned from arm\'s length, at least 5 x 5 cm on a poster or shop window, and larger — 10 cm or more — on a vehicle door or billboard scanned from a few metres away. Print at 300 DPI, keep a white margin (quiet zone) of about four modules — the little squares — around the code on all sides, and never print it on a busy or low-contrast background: a dark code on a light, plain background scans fastest. A code that is too small does not show an error; people simply assume it is broken and move on.',
          'Test at the real distance before you commit to a print run. Print one copy, stand where your audience will stand, and scan it in normal daylight — not just under your desk lamp. Check that the dialer shows the full international number, and check it on both an iPhone and an Android phone if you can, since camera apps handle tel: links slightly differently across versions. If you are printing hundreds of cards or a vehicle wrap, this five-minute test saves a costly reprint.',
          'One privacy warning deserves emphasis: a printed QR code makes your number public in a way a website contact form does not. Anyone who photographs the code has your number, and a number printed on a vehicle or a billboard will attract spam calls and marketing messages over time. For that reason, use a dedicated business number for public codes — a second SIM, a virtual business number, or your office landline — and keep your personal mobile number off printed material entirely. If the number ever has to change, remember that every printed code changes with it: you cannot update a static code, you can only reprint it.',
        ],
        callout: {
          title: 'Use a business number for public codes',
          text: 'A QR code on a poster, vehicle, or card exposes that number to everyone who sees it. Keep your personal number private and put a business number in public codes — spam calls are a matter of when, not if.',
          type: 'warning',
        },
      },
      {
        id: 'common-mistakes',
        heading: 'Common Mistakes (and How to Avoid Them)',
        paragraphs: [
          'The single most common mistake is leaving out the country code. A code containing a local-only number works for locals and fails for tourists, roaming visitors, and international callers — the exact audience that most needs a scannable number. The second most common mistake is encoding the digits without the tel: prefix, which produces a code that displays the number as text instead of opening the dialer. If your generator has a phone type, use it; if you are pasting a link manually, make sure it starts with tel: and not with the bare digits.',
          'Another frequent failure is copying the number with its domestic trunk zero intact — for example, encoding +9109876543210 instead of +919876543210. That extra zero dials a wrong or non-existent number in most countries. Strip the leading zero when you add the country code, and verify the result by scanning the code and reading the number in the dialer before you print. Finally, do not shrink the code to fit a cramped corner of a card or a poster: a code too small for the viewing distance fails silently, and people will assume the link is broken rather than tell you the code was too small. When in doubt, print it bigger and test it from the distance your audience will actually scan from.',
        ],
        callout: {
          title: 'If scans fail, check the link first',
          text: 'A code that worked yesterday but fails today usually points at a changed number or a truncated link. Re-format the number from scratch — plus sign, country code, digits only — and regenerate the code.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for my phone number for free?',
        answer:
          'Format the number in international style — plus sign, country code, digits only, e.g. +919876543210 — then enter it in a free QR code generator as a phone code, or paste tel:+919876543210 as a URL code. Download the PNG. The process takes under a minute, needs no account, and the code never expires as long as the number stays the same.',
      },
      {
        question: 'Does scanning a phone number QR code call automatically?',
        answer:
          'No. For safety, scanning opens the dialer with the number prefilled — the user must still tap Call. No QR code can force a call on its own, which is why phone number codes are safe to print on posters, vehicles, and business cards.',
      },
      {
        question: 'Do I need the country code in a phone number QR code?',
        answer:
          'Yes. Without it, the code only works for callers whose phone is registered in the same country. Always encode the full international number, e.g. tel:+919876543210 for India or tel:+14155550123 for the United States, so tourists, roaming users, and international callers reach you too.',
      },
      {
        question: 'What is the difference between a call QR code and a vCard QR code?',
        answer:
          'A call code (tel:) opens the dialer with one number prefilled — best for "call us now" placements. A vCard code stores a full contact — name, phone, email, address, website — in the phone\'s contacts app. Use a call code on posters and vehicles, and a vCard code on business cards where the person wants to keep your details.',
      },
      {
        question: 'Can I make a QR code that opens WhatsApp or SMS instead of a call?',
        answer:
          'Yes. An sms: code (e.g. sms:+919876543210) opens a text message, optionally with a prefilled message. For WhatsApp, encode a wa.me link such as https://wa.me/919876543210 as a URL code — scanning opens a WhatsApp chat with that number. Choose the action you actually want people to take.',
      },
      {
        question: 'Do phone number QR codes expire?',
        answer:
          'A static QR code itself never expires. However, it stops dialling the right person if you change the number, because the code contains the old number. Use a stable business number for printed codes, and reprint if the number ever changes.',
      },
    ],
    ctaTitle: 'Make Your Phone Number QR Code Now',
    ctaDesc:
      'Format your number with its country code, paste it into the free generator, and download your QR code in under a minute — no sign-up, no cost, no expiry.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
