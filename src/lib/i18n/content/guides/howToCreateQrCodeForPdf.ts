import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'How to Create a QR Code for a PDF File (Free, No Sign-Up)',
  description:
    'Make a QR code for a PDF file free in under 2 minutes: host the PDF on Google Drive or your site, link it in a URL QR code, and print it. No sign-up.',
  badge: 'QR How-To',
  h1: 'How to Create a QR Code for a PDF File',
  subheadline:
    'Restaurants, real-estate agents, event organizers, and teachers all face the same problem: you have a PDF — a menu, a brochure, a price list, a timetable — and you want people to open it by pointing their phone at a code. This guide shows the exact two-step process: get the PDF onto a public link, then turn that link into a free QR code.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'A QR code cannot hold a PDF',
      text: 'A QR code encodes a link, not the file itself. Your PDF must live at a public URL first — on Google Drive, Dropbox, or your own website — and the code simply points at it.',
    },
    {
      label: 'Hosting takes under a minute',
      text: 'Upload the PDF to Google Drive, set sharing to "Anyone with the link", and copy the URL. That URL is what goes into the QR generator.',
    },
    {
      label: 'A static URL code is free and permanent',
      text: 'Encode the link in a static QR code and it never expires and costs nothing. The trade-off: if the link changes, you print a new code.',
    },
    {
      label: 'Test the scan before you print',
      text: 'Scan the finished code with your phone camera, open the PDF, and check it loads quickly. Keep PDFs under about 10 MB so they open fast on mobile data.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'qr-codes-cant-hold-a-pdf',
      heading: 'QR Codes Can\'t Hold a PDF — Here\'s What Actually Happens',
      paragraphs: [
        'Let\'s clear up the single biggest misconception first: a QR code cannot store a PDF file inside itself. A QR code is a pattern of black and white squares that encodes a short piece of text — most commonly a URL. Even the densest QR code tops out around 3 kilobytes of data, and a one-page PDF is usually hundreds of kilobytes. The math simply does not work.',
        'So a "QR code for a PDF" is really a QR code for a web link, and that link leads to your PDF. The scanner decodes the URL from the pattern, the phone opens the link in its browser, and the browser displays or downloads the PDF. This is why the process has two steps and always will: first, get the PDF onto a public link; second, encode that link as a QR code.',
        'Understanding this saves you from the most common failure in this whole category. People generate a QR code from a file path on their computer (like C:\\Users\\Me\\Desktop\\menu.pdf) or from a "Restricted" sharing link, print it on 500 flyers, and discover that nobody else can open it. The code works perfectly — it just points somewhere only your computer can reach. Step 1 below exists entirely to prevent that.',
      ],
      figures: [
        {
          src: '/guides/screenshots/generator-hero.png',
          alt: 'The free QR code generator interface used to turn a PDF link into a scannable QR code',
          caption:
            'The free generator on this site turns any link — including a link to your PDF — into a QR code in seconds.',
        },
      ],
      callout: {
        title: 'The mental model',
        text: 'Think of the QR code as a signpost, not a filing cabinet. The signpost points down a road; the PDF is the building at the end of it. Your job is to make sure the road is public and the signpost points the right way.',
        type: 'info',
      },
    },
    {
      id: 'step-1-host-your-pdf-online',
      heading: 'Step 1: Put Your PDF Online (60 Seconds)',
      paragraphs: [
        'Before you touch any QR generator, your PDF needs a public URL — a web address that opens the file for anyone who visits it. You almost certainly already have a free way to do this. The most popular option is Google Drive, but Dropbox, OneDrive, and your own website all work the same way.',
        'Google Drive is the default choice because almost everyone has an account and the sharing controls are straightforward. Here is the exact sequence: open drive.google.com, upload your PDF (drag it into the window or use New → File upload), then right-click the file and choose Share → Share. In the sharing dialog, change "Restricted" to "Anyone with the link" — this is the critical click, the one people forget — and then click "Copy link". You now have a URL like https://drive.google.com/file/d/…/view that anyone can open. Scanners follow Drive share links without any problem.',
        'If you use Dropbox instead, upload the file and click "Copy link" on it; Dropbox links default to "Anyone with this link can view" in most cases, but double-check the link settings. On OneDrive, select the file, click Share, and set the link to "Anyone with the link". If you have your own website, upload the PDF to your media library or file manager and copy its public URL — this is the cleanest option for businesses, because the link lives under your own domain and never depends on a third-party sharing policy.',
        'Two details worth getting right at this stage. First, use a descriptive filename — brochures, menus, and price lists often show their URL slug on screen before the PDF opens, and "diwali-catalog-2026.pdf" looks far more trustworthy than "final_FINAL2.pdf". Second, keep the file mobile-friendly: compress it under roughly 10 MB if you can. Most scanner apps open the link in the phone\'s browser, and a 40 MB PDF on a weak mobile connection is how you lose half your scans to an impatient back button.',
      ],
      callout: {
        title: 'The access-denied trap',
        text: 'If scanners report "You need access" or "Request access" instead of your PDF, your sharing is still set to "Restricted". Go back to the Share dialog, switch it to "Anyone with the link", and regenerate the QR code only if the URL changed (the link usually stays the same, so the old code often starts working).',
        type: 'warning',
      },
    },
    {
      id: 'step-2-generate-the-qr-code',
      heading: 'Step 2: Turn That Link into a QR Code (30 Seconds)',
      paragraphs: [
        'With your PDF link copied, the QR code part is genuinely trivial. Open the free generator on this site\'s homepage, choose the URL type, and paste your PDF link into the field. That is the entire encoding step — the generator converts the link into the QR pattern instantly.',
        'Download the code as a PNG for digital use (WhatsApp, email, your website) or as an SVG or high-resolution PNG for print. Vector formats (SVG) are ideal for print because they scale to any size without blurring — a 10 cm flyer code and a 2 metre banner code can come from the same file.',
        'This is a static URL QR code: free, no sign-up, and permanent. The pattern encodes your link directly, so there is no account to maintain, no subscription to renew, and nothing a provider can switch off. The next section explains the one scenario where you might want something fancier.',
      ],
      figures: [
        {
          src: '/guides/screenshots/qr-type-selector.png',
          alt: 'Selecting the URL QR code type to create a QR code for a PDF file link',
          caption:
            'Choose the URL type, paste your PDF\'s public link, and the QR code appears instantly.',
        },
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'Download options for the finished PDF QR code — PNG for digital use, SVG for print',
          caption:
            'Download as PNG for screens, SVG for crisp print at any size.',
        },
      ],
    },
    {
      id: 'static-vs-dynamic-for-pdfs',
      heading: 'Static vs Dynamic: Pick the Right Type for PDFs',
      paragraphs: [
        'The static QR code described above is the right choice for most PDF use cases. It is free forever, it never expires, and it works on flyers, menus, business cards, and packaging with zero maintenance. But it has one hard limitation: the destination is frozen inside the pattern. If the link changes, you must print a new code.',
        'That limitation matters most when the PDF itself gets updated. Menus change prices, brochures get new editions, timetables get revised. You have two ways to handle this without reprinting:',
      ],
      subsections: [
        {
          subheading: '1. Replace the file at the same URL',
          text: 'This is the simplest trick and it works with a static code. On your own website, upload the new PDF to the exact same file path (e.g. yoursite.com/files/menu.pdf) so the old URL serves the new file. On Google Drive, right-click the file → Manage versions → Upload new version: the share link stays identical while the content updates. Your printed QR codes keep working forever, no reprint needed.',
        },
        {
          subheading: '2. Use a dynamic QR code',
          text: 'Dynamic codes point at a redirect link you can edit from the provider\'s dashboard, so you can swap the PDF URL without touching the print — plus you get scan tracking (how many people scanned, when, from where). The cost: dynamic codes require a paid provider account, and the code dies if the subscription lapses. For anything printed with a long shelf life, weigh that risk carefully — our guide on whether QR codes expire walks through exactly how dynamic codes break.',
        },
      ],
      callout: {
        title: 'The rule of thumb',
        text: 'Use a free static code whenever the PDF is stable or you can replace the file at the same URL. Reach for dynamic only when you need editable destinations or scan analytics — and never print a dynamic code from a free trial onto anything that outlasts the trial.',
        type: 'tip',
      },
    },
    {
      id: 'test-before-you-print',
      heading: 'Test It, Then Print It',
      paragraphs: [
        'Before the code goes anywhere public, scan it with your own phone\'s camera app — not a special scanner, the default camera, because that is what your audience will use. Confirm three things: the scan triggers a link prompt quickly, the link opens your PDF (not an "access denied" page), and the PDF actually loads in a reasonable time on mobile data.',
        'Then test the physical print at real size. Print one copy on the actual paper or sticker stock you will use, hold it at the distance people will scan from, and scan again. Small codes scanned from far away are the classic failure: a 2 cm code on a poster meant to be read from 3 metres away will never scan reliably, no matter how perfect the pattern is.',
        'As a starting point, make the code at least 2 cm × 2 cm for hand-held materials like flyers and business cards, and scale up with viewing distance for posters and banners — the standard guidance is about 10% of the scan distance (so 10 cm for a 1 metre viewing distance). Our print size guide covers exact sizes for common materials, and adding a short quiet-zone margin of white space around the code helps scanners lock on faster.',
      ],
    },
    {
      id: 'mistakes-that-break-pdf-qr-codes',
      heading: '5 Mistakes That Break PDF QR Codes',
      paragraphs: [
        'Nearly every broken "PDF QR code" comes down to one of these five errors. They are all avoidable, and checking for them takes two minutes:',
      ],
      bullets: [
        'Sharing is still "Restricted" — the #1 cause of "access denied" scans. Always flip Google Drive / Dropbox / OneDrive to "Anyone with the link" before generating the code.',
        'Encoding a local file path — a QR code containing C:\\Users\\… or /home/… points at the generator\'s own computer, not the internet. It will never work for anyone else.',
        'A giant PDF file — a 50 MB uncompressed scan of a brochure times out on mobile data. Compress images in the PDF and aim for under ~10 MB.',
        'Updating the PDF at a new URL — uploading "menu-v2.pdf" to a fresh link silently orphans every printed code. Either overwrite at the same path or use Google Drive\'s "Manage versions".',
        'Printing too small or on glossy, curved surfaces — tiny codes, reflections, and curves all hurt scanning. Test one physical copy before ordering a print run.',
      ],
      callout: {
        title: 'Why honesty matters here',
        text: 'No QR generator can "attach" a PDF to a code, and no free tool can magically make a restricted Drive link public. If a service promises to embed your file in the code itself, it is either lying or doing the two-step hosting process behind your back and charging you for it.',
        type: 'warning',
      },
    },
  ],
  faqsTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'Can I make a QR code for a PDF for free?',
      answer:
        'Yes. Upload the PDF to Google Drive (or any host) with link sharing on, then paste the public link into a free QR generator as a static URL code. The whole thing takes about two minutes, needs no sign-up, and the code works forever as long as the link stays alive.',
    },
    {
      question: 'Will my PDF QR code expire?',
      answer:
        'A static QR code never expires — there is no expiry mechanism in the QR format. It stops being useful only if the PDF link dies (file deleted, sharing turned off) or the print gets damaged. Dynamic QR codes are different: they can stop working if the provider subscription lapses, so for permanent print, static is the safer choice.',
    },
    {
      question: 'Can I track how many people scanned my PDF QR code?',
      answer:
        'Not with a static code — it encodes the link directly, so there is nothing in the middle to count scans. Scan tracking requires a dynamic QR code from a paid provider, which routes scans through its servers. If you need analytics, check your PDF host\'s stats instead: Google Drive shows view counts, and website analytics track downloads from your own domain.',
    },
    {
      question: 'What happens if I update the PDF later?',
      answer:
        'If you replace the file at the same URL — for example, uploading a new version to the same Drive file via "Manage versions", or overwriting menu.pdf on your website — the printed QR code keeps working with zero changes. If the URL itself changes, a static code must be reprinted; only a dynamic code lets you swap the destination without reprinting.',
    },
    {
      question: 'Why does my Google Drive PDF show "access denied" when scanned?',
      answer:
        'The file\'s sharing is still set to "Restricted", which means only people explicitly added can open it. Open the file in Drive, click Share, change "Restricted" to "Anyone with the link", and copy the link again. In most cases the URL doesn\'t change, so your existing QR code starts working immediately.',
    },
  ],
  ctaTitle: 'Make Your QR Code Now',
  ctaDesc:
    'Turn your PDF link into a scannable QR code in under a minute — free, no sign-up, and the code never expires.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getHowToCreateQrCodeForPdfData(_locale: Locale): GuideArticleData {
  return enData;
}
