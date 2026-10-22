import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForEmailSignupData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Email Signup: Grow Your List Offline (Free)',
    description:
      'Grow your email list offline with a QR code for email signup — form links, mailto QR codes, best placements, and consent rules. Free, no sign-up.',
    badge: 'Guides',
    h1: 'QR Code for Email Signup: Turn Foot Traffic Into Subscribers',
    subheadline:
      'Every day people walk past your counter, attend your event, or hold your packaging — and leave without ever joining your email list. A QR code for email signup closes that gap: one scan opens your signup form on their phone, and a stranger becomes a subscriber in under thirty seconds. No clipboard, no typing, no app to install. This guide shows the two ways to build one (a signup-form link and a pre-filled email draft), the placements that actually pull scans, the incentive copy that makes people care, and the consent rules you must follow so your list stays legal and deliverable.',
    readingTime: '9 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Form link = list building',
        text: 'Point the QR code at your newsletter signup page (Mailchimp, ConvertKit, Google Form) and every scan lands directly in your email list.',
      },
      {
        label: 'mailto QR = pre-filled draft',
        text: 'An email QR code opens the visitor\u2019s mail app with a ready-to-send subscribe draft — useful when you have no form page yet.',
      },
      {
        label: 'Placement + incentive decide scans',
        text: 'Codes placed where people wait, with a concrete reward ("10% off when you join"), outperform generic "join our newsletter" codes many times over.',
      },
      {
        label: 'Consent is mandatory',
        text: 'A scan is not permission. Use double opt-in and never add scanned addresses to bulk campaigns without an explicit subscribe step.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-qr-codes-build-email-lists',
        heading: 'Why QR Codes Are So Effective for Email List Building',
        paragraphs: [
          'Email remains the highest-ROI marketing channel for small businesses — but lists only grow if signing up is effortless. The traditional offline signup is a clipboard at the counter: illegible handwriting, manual data entry, and a pile of addresses that sit in a drawer until you "get around to it." A QR code for email signup removes every one of those steps. The visitor scans, the form opens on their own phone, and they type their own address — correctly, the first time — while standing in your shop.',
          'The second advantage is timing. People are most willing to subscribe at the moment of a good experience: right after a great meal, while holding a product they love, or during an engaging workshop. A QR code captures that exact moment. A "visit our website sometime" never does. Print the code where the goodwill is freshest — the receipt, the checkout counter, the event badge, the inside of the packaging — and the signup becomes a natural continuation of the experience instead of a separate chore.',
          'The third advantage is that it works for businesses with no technical setup at all. You do not need an app, a POS integration, or even a website. A free Google Form, a free Mailchimp landing page, or even just a dedicated email address is enough of a destination to encode. The QR code itself is free and permanent: print it once on your menus, flyers, or product boxes, and it keeps collecting subscribers for years with zero ongoing cost.',
        ],
        callout: {
          title: 'The 30-second rule',
          text: 'From scan to subscribed must take under 30 seconds. Every extra field, every extra page load, and every confusing step after the scan costs you subscribers. Build the shortest possible path first, then measure.',
          type: 'info',
        },
      },
      {
        id: 'method-1-signup-form-link',
        heading: 'Method 1: QR Code to Your Signup Form (Recommended)',
        paragraphs: [
          'The best way to grow an email list with a QR code is to link it directly to a signup form. When someone scans, their browser opens your form page, they enter their address, and the address flows automatically into your email platform — Mailchimp, ConvertKit, Brevo, or even a simple Google Form feeding a spreadsheet. No manual copying, no lost paper slips, and every subscriber arrives with a timestamped consent record.',
          'Start by creating the signup page itself. If you already use an email marketing platform, it almost certainly gives you a hosted signup form or landing page with a shareable URL — in Mailchimp this is under Audience → Signup forms; in ConvertKit under Grow → Landing Pages. Keep the form ruthlessly short: an email field and a subscribe button is enough. Every extra field (name, phone, birthday) measurably reduces conversion, and you can ask for more later in a welcome email. If you have no email platform yet, a free Google Form with a single "Email address" question works fine as a starter — you will migrate the list to a real platform later.',
          'Before generating the QR code, make the page worth landing on. Add one line that states the payoff ("Get 10% off your next order + early access to new drops"), make sure the page loads in under two seconds on mobile data, and test the whole flow on your own phone — scan to submit — before printing anything. A form that breaks on mobile or asks for information twice silently kills the very subscribers the QR code attracted.',
          'Then generate the code. Paste your signup page URL into the free generator below, download the PNG at maximum resolution (or SVG for professional printing), and you have a permanent, free QR code that feeds your list forever. Because it is a static code pointing at a URL you control, you can redesign the form page, change your email platform, or add incentives later without ever reprinting.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator — paste your newsletter signup page URL to create an email signup QR code',
            caption: 'Paste your signup page URL into the free generator — every scan opens the form directly on the visitor\u2019s phone.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download an email signup QR code as high-resolution PNG or SVG for printing',
            caption: 'Download at maximum resolution (PNG) or as SVG — this code goes on printed materials, so crisp edges matter.',
          },
        ],
      },
      {
        id: 'method-2-email-qr-code',
        heading: 'Method 2: Email (mailto) QR Code — the Pre-Filled Draft',
        paragraphs: [
          'The second approach uses an email QR code instead of a web link. Scanning it does not open a browser at all: it opens the visitor\u2019s own mail app with a new message already addressed to you, with a subject line and body pre-filled. All they do is tap send. The classic use is a one-tap subscribe draft: recipient subscribe@yourdomain.com, subject "Subscribe me", body "Please add me to your newsletter."',
          'This method is genuinely useful in two situations. First, when you have no signup form page at all — a market stall, a pop-up, a brand-new business — it gives you a working email-signup QR code in sixty seconds. Second, when the conversation should start in email rather than in a database: a "request a quote" draft, a feedback address, or a VIP list where you personally reply to every subscribe message. For small lists, the personal touch of a reply can actually be an advantage.',
          'The trade-off is scale. Every subscribe draft lands in your inbox, and you — or someone — must add each address to your list manually. That works for dozens of subscribers and collapses at hundreds. It also only produces a valid consent record if the pre-filled message clearly says the sender wants marketing emails, and you should still send a confirmation reply (a simple double opt-in) before adding them to bulk campaigns. Treat the mailto QR code as a starter bridge: use it while your list is small, then graduate to Method 1 and reprint when volume picks up.',
          'To build one, use the Email QR type in the free generator: enter your subscribe address, set the subject to something unmistakable like "Subscribe me to the newsletter", and pre-fill the body with "Please add this email address to your mailing list." Test it on both an iPhone and an Android phone before printing — mailto handling depends on the visitor\u2019s default mail app, and you want to see the pre-filled draft open correctly on the devices your audience actually uses.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector — choose the Email type to create a pre-filled mailto signup QR code',
            caption: 'Select the Email type to build a mailto code — recipient, subject, and body are pre-filled so the visitor just taps send.',
          },
        ],
        callout: {
          title: 'Which method should you use?',
          text: 'Growing a real list (100+ subscribers, automated emails)? Use Method 1, the signup-form link. No form page yet or a tiny personal list? The mailto code (Method 2) gets you started today.',
          type: 'tip',
        },
      },
      {
        id: 'best-placements',
        heading: 'Where to Place Your Email Signup QR Code',
        paragraphs: [
          'A signup QR code only works where people have time, attention, and a reason to care. The placements below consistently outperform everything else — pick the ones that match how your customers meet you.',
        ],
        subsections: [
          {
            subheading: 'Checkout counter & receipts',
            text: 'The single highest-converting spot for retail and restaurants. The customer just paid, goodwill is at its peak, and they are standing still. Pair the code with "Scan for 10% off your next visit" on a tent card or printed on the receipt itself.',
          },
          {
            subheading: 'Product packaging',
            text: 'The inside of the box or the product label reaches people at home with zero competition for attention. "Scan to register your product and get care tips + offers" works for everything from cosmetics to electronics.',
          },
          {
            subheading: 'Events & workshops',
            text: 'Put the code on the event badge, the presentation slides, and the feedback form. Attendees are engaged and networking — the scan-to-subscribe rate at events is typically the highest of any placement.',
          },
          {
            subheading: 'Business cards & flyers',
            text: 'A business card with a signup QR code on the back turns every handover into a potential subscriber. On flyers, place it next to the offer, not buried at the bottom — and give it a headline, not just a bare code.',
          },
          {
            subheading: 'Storefront window & posters',
            text: 'Reaches foot traffic after hours and passers-by. Because nobody is waiting here, the incentive must be strong and the benefit instant — "Scan: this week\u2019s secret menu" beats "join our newsletter" every time.',
          },
          {
            subheading: 'Table tents & menus',
            text: 'For cafes and restaurants, a table tent reaches diners during the dead time while they wait for food — captive, relaxed, and on their phones already. This is prime scan territory.',
          },
        ],
        callout: {
          title: 'One code, one job',
          text: 'Use the same signup QR code everywhere — but add UTM tags to the link (?utm_source=qr&utm_medium=receipt&utm_campaign=signup) so you learn which placement pulls the most subscribers. See our scan-tracking guide for the full setup.',
          type: 'info',
        },
      },
      {
        id: 'get-more-scans',
        heading: 'How to Get More People to Actually Scan and Subscribe',
        paragraphs: [
          'Most signup QR codes fail for the same boring reason: they ask for an email and offer nothing in return. "Join our newsletter" is not an incentive — it is a chore described politely. The fix is a lead magnet: something the scanner gets immediately, in exchange for their address. A discount code ("10% off today\u2019s bill"), a free resource ("our 20-page wedding planning checklist"), early access ("new collection drops, subscribers shop first"), or entry into a monthly draw. The reward should be specific, immediate, and worth more than the mild annoyance of receiving emails.',
          'The copy next to the code matters as much as the reward. Write the benefit, not the mechanism: "Get 10% off your next order" outperforms "Scan to subscribe" even when both lead to the same form. Keep it to one short line, large enough to read from the viewing distance, and put the code at least 2 cm wide with a quiet zone of clear space around it. A tiny code wedged into a busy design gets ignored; a clear code with a clear promise gets scanned.',
          'On the form itself, protect the conversion you just earned. Mobile-first design is non-negotiable — the overwhelming majority of QR scans happen on phones. One email field, one big subscribe button, and a success message that delivers the promised reward instantly ("Here\u2019s your 10% code: WELCOME10"). If the discount arrives three days later by email, people will not trust the next QR code they see. Deliver in the moment, every time.',
          'Finally, send the welcome email immediately. The first email a new subscriber receives should arrive within minutes, repeat the promise you made at the counter, and set expectations ("one useful email a week, unsubscribe anytime"). Subscribers who get a fast, relevant welcome open the second email at dramatically higher rates than those who hear nothing for a week — and an engaged list is the whole point of this exercise.',
        ],
        bullets: [
          'Offer a concrete, immediate reward — discount, freebie, early access, or draw entry — not just "updates".',
          'Write the benefit next to the code ("Get 10% off"), not the mechanism ("Scan to subscribe").',
          'Keep the code ≥2 cm wide with clear quiet space, at eye level or where people wait.',
          'Form = one email field + one button. Deliver the reward on the success screen, instantly.',
          'Send the welcome email within minutes and set expectations for frequency.',
        ],
      },
      {
        id: 'consent-and-compliance',
        heading: 'Consent Rules: Stay Legal and Keep Deliverability',
        paragraphs: [
          'Here is the part most signup-QR guides skip: a scan is not consent. Privacy laws in India (the DPDP Act), the EU (GDPR), and most other regions require that the person explicitly agrees to receive your marketing emails — and you must be able to prove it. A clipboard of addresses collected "from QR scans" with no subscribe record is a liability, not an asset. Build consent into the flow: the form page must state clearly what they are signing up for, and the subscribe button must be an affirmative action (no pre-ticked boxes).',
          'Use double opt-in: after the form is submitted, send a confirmation email with a "click to confirm" link, and only add confirmed addresses to your sending list. Yes, it costs you some subscribers — typically 10–20% never click the confirmation. But the ones who do are real, engaged, and legally clean, which is exactly what keeps your emails out of spam folders. Email providers watch engagement: a list full of unconfirmed addresses that never open your emails will get your domain flagged far faster than a smaller confirmed list ever will.',
          'Never buy addresses to "top up" a QR-collected list, and never add people who scanned a feedback or support QR code to your marketing list — consent for one purpose is not consent for another. If someone subscribed at an event, a note in your email platform ("Source: Diwali expo QR, Oct 2026") is worth its weight in gold when an abuse complaint arrives: you can show exactly where, when, and how permission was given.',
          'One more practical point: include a working unsubscribe link in every email and honor it within 48 hours. It sounds basic, but deliverability is a reputation game — every "report spam" click from someone who cannot find the unsubscribe link damages the deliverability of your entire list. A clean, consent-based QR signup flow is the cheapest deliverability insurance there is.',
        ],
        callout: {
          title: 'The consent checklist',
          text: 'Clear signup statement on the form ✓ affirmative subscribe action ✓ confirmation email (double opt-in) ✓ source recorded per subscriber ✓ one-click unsubscribe in every email ✓.',
          type: 'warning',
        },
      },
    ],
    faqsTitle: 'FAQs: QR Code for Email Signup',
    faqs: [
      {
        question: 'How do I create a QR code for email signup?',
        answer:
          'The simplest way: create a signup form page (Mailchimp, ConvertKit, Brevo, or a free Google Form), copy its URL, and paste it into a free QR code generator. Download the PNG or SVG and print it where your audience sees it — counter, packaging, event materials. Every scan opens the form on the visitor\u2019s phone and the address flows into your list automatically.',
      },
      {
        question: 'What is the difference between an email QR code and a signup form QR code?',
        answer:
          'An email (mailto) QR code opens the visitor\u2019s mail app with a pre-filled subscribe draft they tap send on — the addresses land in your inbox and you add them manually. A signup form QR code opens a web form whose submissions go straight into your email platform automatically. Use the form approach for real list building; use mailto when you have no form page yet or only need a handful of addresses.',
      },
      {
        question: 'Can I collect email addresses with a QR code without a website?',
        answer:
          'Yes. Use a free hosted signup page from an email platform (Mailchimp and Brevo both offer free landing pages) or a Google Form — no website needed. Alternatively, generate a mailto QR code so scanners send you a pre-filled subscribe email; you then add each address to your list manually. The form route scales better; the mailto route starts faster.',
      },
      {
        question: 'Do I need permission to email people who scanned my QR code?',
        answer:
          'Yes. Scanning a QR code is not consent to receive marketing emails. Your flow must include an explicit subscribe step — ideally double opt-in, where the subscriber clicks a confirmation link in a welcome email. Record the source of each subscriber so you can prove how permission was obtained under laws like India\u2019s DPDP Act or the EU\u2019s GDPR.',
      },
      {
        question: 'Where should I put my email signup QR code?',
        answer:
          'Where people wait and feel goodwill: checkout counters, receipts, product packaging, event badges and slides, business cards, and restaurant tables. Pair it with a concrete incentive ("10% off your next visit") written as the benefit, not the mechanism. Avoid burying it at the bottom of busy designs — at least 2 cm wide with clear space around it.',
      },
      {
        question: 'How do I track which QR code placement gets the most subscribers?',
        answer:
          'Add UTM parameters to the signup link before generating the code — one tagged link per placement (e.g. ?utm_source=qr&utm_medium=receipt&utm_campaign=signup). Your email platform or Google Analytics then shows signups by source, so you learn whether the counter, the packaging, or the event pulled the most subscribers, and you can print more of what works.',
      },
    ],
    ctaTitle: 'Make Your Email Signup QR Code Now',
    ctaDesc:
      'Paste your signup form link into the free generator and download a print-ready QR code — no sign-up, no watermark, yours forever.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
    ctaSecondaryText: 'How to Track QR Code Scans',
    ctaSecondaryLink: '/guides/how-to-track-qr-code-scans',
  };

  return enData;
}
