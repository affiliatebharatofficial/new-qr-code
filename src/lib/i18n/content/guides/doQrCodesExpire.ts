import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'Do QR Codes Expire? Static vs Dynamic QR Codes',
  description:
    'Do QR codes expire? Static QR codes never do — dynamic ones can stop working when a subscription lapses. Free guide with fixes.',
  badge: 'QR Basics',
  h1: 'Do QR Codes Expire?',
  subheadline:
    'The printed pattern itself never expires — but the QR code on your flyer can still stop working. The difference between static and dynamic QR codes decides everything, and one overlooked setting has killed more printed codes than any smudge or tear.',
  readingTime: '9 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'The code itself never expires',
      text: 'A QR code has no built-in expiry date in the ISO/IEC 18004 standard. A static QR code printed in 2010 scans perfectly today.',
    },
    {
      label: 'Static codes are permanent',
      text: 'Static QR codes encode data directly in the pattern with no server involved — there is nothing to switch off, cancel, or renew.',
    },
    {
      label: 'Dynamic codes can stop working',
      text: 'Dynamic codes point at a provider-owned redirect link. A lapsed subscription, scan limit, paused record, or provider shutdown breaks every code on the account — including ones already printed.',
    },
    {
      label: 'Use static for permanent print',
      text: 'For business cards, signage, and packaging, use a static code pointing at a URL you own. Never print a dynamic code from a free trial onto anything with a shelf life longer than the trial.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'do-qr-codes-expire-short-answer',
      heading: 'Do QR Codes Expire? The Short Answer',
      paragraphs: [
        'No — not the code itself. The QR code format (ISO/IEC 18004) has no expiration mechanism built into it. A QR code is nothing more than a pattern of black and white squares that encodes a piece of text: a URL, a Wi-Fi password, a phone number, a block of contact details. There is no timestamp inside the pattern, no countdown, and no kill switch. Time alone cannot make it unreadable.',
        'So why do people keep asking? Because QR codes do stop working in the real world, and when one does, it feels like it "expired". The confusion comes from treating all QR codes as one thing. There are two fundamentally different kinds — static and dynamic — and only one of them can die on you. Understanding which kind you are holding is the entire answer to this question.',
        'A static QR code encodes its destination directly into the pattern. Scan it and your phone reads the actual URL — say https://example.com/menu — and opens it. No third party is involved between the print and the website. Nothing runs on a timer, nothing needs paying for, and nothing can be remotely deactivated. A static code printed in 2010 still scans today and will still scan in 2040, as long as the print is physically readable and the destination website still exists.',
        'A dynamic QR code works completely differently. The pattern encodes a short redirect link owned by the QR platform, like qrtg.io/abc123. Scanning it sends an HTTP request to that provider\'s server, which looks up the code\'s record and issues a 302 redirect to the real destination. That server lookup is the code\'s lifeline — and it is exactly what "expires". The pattern on your flyer is fine; the redirect infrastructure behind it is what can die.',
      ],
      figures: [
        {
          src: '/guides/screenshots/qr-type-selector.png',
          alt: 'Choosing between static and dynamic QR codes in the free QR generator — this choice decides whether a code can ever expire',
          caption:
            'Static vs dynamic: this single choice decides whether your QR code can ever stop working on its own.',
        },
      ],
      callout: {
        title: 'The mental model',
        text: 'Think of a static code as a phone number written on a napkin — it works as long as the number is still connected. A dynamic code is a napkin with the switchboard\'s number and an extension: if the switchboard closes, the extension stops working even though the napkin is perfectly legible.',
        type: 'info',
      },
    },
    {
      id: 'why-static-qr-codes-never-expire',
      heading: 'Why Static QR Codes Never Expire',
      paragraphs: [
        'Static QR codes are boring in the best possible way. Everything the scanner needs is inside the pattern itself, so there is no account to cancel, no subscription to lapse, and no server whose plug can be pulled. Once printed, the code is fully self-contained — a piece of ink that carries its own meaning.',
        'There are exactly two ways a static code stops being useful, and neither is the code expiring. First, the destination can die: if your QR code points to a URL and the website moves or goes offline, scanning the code still decodes perfectly — your phone just arrives at a dead page. That is the website expiring, not the QR code. The code did its job; the internet changed around it.',
        'Second, the print can degrade past the point of decoding: faded ink, a crushed corner, a coffee stain across the finder patterns. But that is physical damage, not expiration — time alone does nothing to a well-printed code. This is also where error correction earns its keep: QR codes include built-in Reed–Solomon error correction that lets them survive up to 30% damage (at level H) and still decode. A static code with high error correction on good stock is effectively immortal.',
        'One practical caveat: a static code cannot be edited. If the URL it encodes changes, you must reprint. That immutability is precisely what makes it permanent — and it is why, for anything that will outlive your current marketing plan, static is the right call.',
      ],
    },
    {
      id: 'why-dynamic-qr-codes-stop-working',
      heading: 'Why Dynamic QR Codes CAN Stop Working',
      paragraphs: [
        'Dynamic QR codes are powerful — you can change the destination without reprinting, track scan counts and locations, and A/B test landing pages. But all of that runs on the provider\'s servers, and servers have owners, bills, and business plans. When any part of that chain breaks, the code on your printed material scans into an error page, with no visual warning on the print itself.',
        'There are four ways a dynamic code dies, and every one of them is about the redirect, not the pattern:',
      ],
      subsections: [
        {
          subheading: '1. Subscription or payment lapses',
          text: 'Most dynamic-code platforms are paid subscriptions. Miss a renewal and the provider deactivates the redirect records — every dynamic code on the account stops resolving at once, including ones printed months ago and distributed to customers. According to Uniqode, which tracks over 188 million scans, a lapsed dynamic subscription is the most common cause of unexpected QR code failure — more common than physical damage (their claim, not our measurement).',
        },
        {
          subheading: '2. Scan limits get hit',
          text: 'Many plans cap monthly scans. A viral campaign that blows past the limit can trigger an automatic pause or an error landing page for everyone scanning after the cap. The code looks identical; the server simply stops answering.',
        },
        {
          subheading: '3. The provider shuts down',
          text: 'If the QR platform goes out of business or pivots away, the redirect domains go dark and every dynamic code ever created on that platform dies with them. The print still scans — the lookup finds nothing. This is the one failure mode you cannot fix, which is why choosing an established provider matters.',
        },
        {
          subheading: '4. The owner changes the rules',
          text: 'Pausing a campaign, deleting a code record, setting an expiry rule on a coupon campaign, or downgrading a plan to a tier with fewer active codes — all of these are deliberate owner actions that make a dynamic code stop working. Expiry rules are actually a feature here: some platforms let you set a real expiration date on time-limited codes, but that date lives in the provider\'s database, never in the printed pattern.',
        },
      ],
      callout: {
        title: 'The cruel part',
        text: 'Nothing on the printed code warns you. An expired dynamic code looks byte-for-byte identical to a working one. The first sign of trouble is a customer showing you their phone displaying "link not found" — by which point the flyers, menus, or packaging are already in the wild.',
        type: 'warning',
      },
    },
    {
      id: 'four-layer-lifetime-model',
      heading: 'The Four Layers of a QR Code\'s Lifetime',
      paragraphs: [
        'A useful way to think about "do QR codes expire" is the four-layer model: four independent things must all hold for a scan to end somewhere useful. Any layer can fail, and each fails in its own way.',
        'Layer 1 is the printed symbol: the ink, the contrast, the physical condition of the code. Damage and poor printing break decoding; the passage of time does not. Layer 2 is the encoded destination: for a static code this is the final URL or text — it decodes fine even if the website it names moved or died. Layer 3 is the redirect, which exists only for dynamic codes: it needs the provider\'s routing service online, the code\'s record active, and the account in good standing. Layer 4 is the owner\'s rules and account state: pauses, deletions, expiry rules, plan downgrades, and unpaid bills.',
        'Static codes only depend on layers 1 and 2 — which is why they are effectively permanent. Dynamic codes depend on all four, which is why they are the ones that "expire". When diagnosing a dead code, work the layers from the top down: check the account, then the redirect, then the destination, then the print.',
      ],
    },
    {
      id: 'qr-code-stopped-working-fix',
      heading: 'Your QR Code Stopped Working? Diagnose It in 2 Minutes',
      paragraphs: [
        'Before panicking or reprinting, run this five-step check. It finds the broken layer in almost every case:',
      ],
      subsections: [
        {
          subheading: '1. Scan it and read the address',
          text: 'Scan the code and watch what URL your phone tries to open before it fails. A nonsense-looking short domain (like qrtg.io/abc123) means it is dynamic — the problem is almost certainly the redirect. Your own clean URL means it is static — the problem is the destination or the print.',
        },
        {
          subheading: '2. Paste the address into a browser',
          text: 'Type or paste the exact address into a desktop browser. If it loads fine there but not from the scan, the print may be damaged (try a larger, cleaner copy). If the browser shows an error page or "link not found", the destination is dead or the redirect record is gone.',
        },
        {
          subheading: '3. Check the provider dashboard',
          text: 'For dynamic codes, log into the QR platform and check three things: is the code record active (not paused or deleted)? Is the subscription current? Are you under the monthly scan limit? The majority of "expired" codes are revived right here.',
        },
        {
          subheading: '4. Check the print quality',
          text: 'Compare the failing print against the original digital file. Faded thermal prints (receipts), low-contrast designs, and codes shrunk below minimum print size are the usual physical suspects. Test-scan the original file — if it works and the print does not, reprint bigger and darker.',
        },
        {
          subheading: '5. Confirm it is not the scanner',
          text: 'Try a second phone or a different scanner app. Outdated camera software and cheap scanner apps occasionally fail on perfectly good codes, especially dense ones. If two phones read it, the code is fine.',
        },
      ],
      figures: [
        {
          src: '/guides/screenshots/generator-hero.png',
          alt: 'The free QR code generator showing a live QR code preview that can be test-scanned before printing',
          caption:
            'Always test-scan the live preview with your phone before committing to a print run — it takes ten seconds and catches most problems.',
        },
      ],
    },
    {
      id: 'rules-for-qr-codes-that-last',
      heading: 'Rules for QR Codes That Outlive You',
      paragraphs: [
        'Whether you are printing menus, business cards, signage, or product packaging, these rules keep your codes alive for years instead of months:',
        'Never print a dynamic code from a free trial onto material with a shelf life longer than the trial. Trials expire by design; the code dies when the trial does. If you must use dynamic for a campaign, only print after you are on a paid plan you intend to keep — and test the code again after the trial officially ends, before the print run goes out.',
        'For anything permanent — signage, packaging, business cards, plaques — use a static code pointing at a URL you own and control. No third party sits between the scan and your website, so there is nobody to bill you for a redirect and nobody whose shutdown can break your print. A domain you renew yearly is the cheapest insurance in marketing.',
        'Keep the destination stable. If your static code points to yoursite.com/menu and you later rebuild the site, keep that URL alive with a redirect. The code is permanent; your URL hygiene has to match it. Similarly, avoid pointing codes at URLs you do not control — social profile links and third-party booking pages change formats without asking you.',
        'Print for durability, not just beauty. High error correction (level H when a logo is embedded), strong dark-on-light contrast, a quiet zone of at least four modules on all sides, and a physical size matched to the scanning distance. A code that is technically immortal but physically unreadable is still dead.',
        'Finally, keep a ledger. Note which codes are dynamic, which account owns them, and when renewals come due. The most common way dynamic codes die is not drama — it is a credit card expiring in the billing settings while nobody is watching.',
      ],
      figures: [
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'Downloading a high-resolution PNG of the QR code for durable, long-lasting print',
          caption:
            'Download a high-resolution PNG for print — print quality is the one physical way a QR code can stop working.',
        },
      ],
      callout: {
        title: 'The one-line rule',
        text: 'Static codes for permanence, dynamic codes for campaigns — and dynamic codes only from an account and plan you intend to keep for the full life of the print.',
        type: 'tip',
      },
    },
  ],
  faqsTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'Do static QR codes expire?',
      answer:
        'No. Static QR codes encode their data directly in the printed pattern with no server or account involved, so there is nothing that can expire, be cancelled, or be switched off. A static code stops working only if the print becomes physically unreadable or the destination it points to (like a website) goes offline.',
    },
    {
      question: 'Can you set an expiration date on a QR code?',
      answer:
        'Not on the code pattern itself — the QR standard has no expiry field. Some dynamic QR platforms let you set an expiry rule in their dashboard, which makes the provider\'s redirect stop working after a date you choose (useful for coupons and event campaigns). The printed code looks identical before and after; the "expiry" lives in the provider\'s database, not in the squares.',
    },
    {
      question: 'What happens when a dynamic QR code expires?',
      answer:
        'Scanning it opens an error page such as "link not found" or the provider\'s deactivation notice — the phone decodes the pattern fine, but the redirect server has no active record to send you to. In most cases upgrading or renewing the account reactivates the codes immediately, since the printed pattern never changed.',
    },
    {
      question: 'Will my QR codes still work if the QR generator company shuts down?',
      answer:
        'Static codes: yes, forever — they do not depend on any company. Dynamic codes created on that platform: no — their redirects die with the company\'s servers, and there is no way to revive them. This is the strongest argument for using static codes on permanent materials and choosing established providers for dynamic campaigns.',
    },
    {
      question: 'Do QR codes fade or wear out over time?',
      answer:
        'Time alone does nothing to a QR code, but physical media degrades: thermal receipt paper fades within months, outdoor prints weather, and packaging gets scuffed. Error correction lets codes survive up to 30% damage at level H. For long-lived use, print on durable stock, keep strong contrast, include the quiet zone, and size the code for the scanning distance.',
    },
    {
      question: 'Should I use a static or dynamic QR code for my business card?',
      answer:
        'Static. A business card may be kept in someone\'s wallet for years, and you do not want its scanability tied to a subscription you might cancel. Encode a vCard or a URL you own, print it large and high-contrast, and it will work as long as the card exists. Reserve dynamic codes for campaigns where you need to change the destination or track scans.',
    },
  ],
  ctaTitle: 'Make a QR Code That Never Expires',
  ctaDesc:
    'Create a free static QR code — no sign-up, no subscription, no redirect server that can bill you later. What you print is yours forever.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getDoQrCodesExpireData(locale: Locale): GuideArticleData {
  return enData;
}
