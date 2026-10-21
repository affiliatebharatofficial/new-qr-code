import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToTrackQrCodeScansData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Track QR Code Scans (Free Methods, 2026)',
    description:
      'Learn how to track QR code scans for free: UTM parameters + GA4, link shorteners with analytics, and when a dynamic QR code is worth it.',
    badge: 'Guides',
    h1: 'How to Track QR Code Scans: The Complete Free Guide',
    subheadline:
      'You printed 500 flyers with a QR code, and they are disappearing fast — but are they working? A QR code that cannot be measured is a guess, not marketing. The good news: you can track QR code scans for free, no paid platform required. The catch: static QR codes cannot track anything by themselves, so you need to build tracking into the link before you generate the code. This guide explains exactly how scan tracking works, shows four free methods (including one that takes ten minutes), and tells you honestly when a paid dynamic QR platform is actually worth the money.',
    readingTime: '10 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Static codes track nothing',
        text: 'A static QR code is just encoded text — no server, no analytics. Any scan tracking has to come from the link it points to, not the code itself.',
      },
      {
        label: 'UTM + GA4 is free',
        text: 'Add UTM parameters to your link, generate a static QR code for it, and scan traffic shows up in Google Analytics 4 at zero cost.',
      },
      {
        label: 'Shorteners give counts',
        text: 'Link shorteners with click analytics give you scan counts, devices, and locations without touching your website code.',
      },
      {
        label: 'Dynamic ≠ always better',
        text: 'Paid dynamic QR platforms add scan dashboards and editable links, but for most flyers and posters the free methods measure everything you need.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-track-qr-code-scans',
        heading: 'Why You Should Track QR Code Scans',
        paragraphs: [
          'A QR code is a marketing channel like any other — email, ads, social — and every channel you cannot measure is a channel you cannot improve. When you track scans, you learn which poster location pulls traffic, whether your call-to-action copy works, and what time of day people actually scan. Without that data, a campaign that flops teaches you nothing and a campaign that works teaches you nothing either: you cannot repeat what you cannot see.',
          'Tracking also settles the two arguments every QR campaign eventually has. The first is budget: when the boss asks whether the flyer spend was worth it, "we got 214 scans, 63 from the mall poster" is an answer and "people seemed to like it" is not. The second is placement: printing the same code on a storefront window and a newspaper ad and comparing the numbers tells you exactly where your audience is, so the next print run goes only where it converts.',
          'The deeper benefit is conversion tracking. Scans alone are vanity — what matters is what happens after the scan. A tracked link can show you not just that 300 people scanned, but that 41 of them filled out the form, 12 booked an appointment, and 8 bought. That scan-to-sale path is what turns QR codes from a novelty into a measurable acquisition channel, and it is entirely free to set up with the methods below.',
        ],
        callout: {
          title: 'Track the link, not the code',
          text: 'The golden rule: tracking lives in the destination link. Whatever method you choose, decide on the link and its tracking parameters before you generate the QR code — changing the link afterwards means reprinting.',
          type: 'info',
        },
      },
      {
        id: 'static-vs-dynamic-tracking',
        heading: 'The Key Limitation: Static QR Codes Cannot Track Scans',
        paragraphs: [
          'To track scans you first have to understand why most free QR codes cannot do it. A static QR code stores its destination directly in the pattern — the URL is literally encoded in the black-and-white squares. When someone scans it, their phone camera decodes the URL and opens it directly. No server is involved, no request hits a QR company, and nobody logs the scan. That is why static codes are free forever and never expire: there is no infrastructure to pay for, and equally no way to count anything.',
          'Dynamic QR codes work differently. The code stores a short redirect URL hosted by the QR platform. Every scan hits that server first, which logs the time, device, and rough location, then forwards the visitor to your real destination. That server visit is what makes scan dashboards possible — and it is exactly why dynamic QR codes are almost always a paid subscription. If the platform goes down or you stop paying, the redirect can break, which is the real trade-off behind "editable" codes.',
          'This distinction decides your whole tracking strategy. With a static code, you must build tracking into the link itself — UTM parameters, a shortener with analytics, or a redirect page you control. With a dynamic code, the platform counts scans for you. Neither is "better" in the abstract: it depends on how much data you need and whether you are willing to pay a subscription for codes that keep working as long as you pay.',
        ],
        bullets: [
          'Static QR code = URL baked into the pattern, zero infrastructure, zero tracking, works forever for free.',
          'Dynamic QR code = short URL that redirects through the provider, scan analytics included, subscription cost, dies if you cancel.',
          'Free generators (including this one) create static codes — so the tracking methods below are designed for static codes.',
        ],
        callout: {
          title: 'Beware fake "free tracking" promises',
          text: 'Some QR generators advertise "free scan tracking" but silently create dynamic codes on a free trial — scans stop counting (or the code stops working) when the trial ends. Always check whether the code still works in an incognito window after logging out.',
          type: 'warning',
        },
      },
      {
        id: 'free-tracking-methods',
        heading: '4 Free Ways to Track QR Code Scans',
        paragraphs: [
          'All four methods work with free static QR codes and cost nothing. They differ in what data they give you and how much setup they need — pick the one that matches your website access level.',
        ],
        subsections: [
          {
            subheading: 'Method 1: UTM parameters + Google Analytics (best)',
            text: 'Add utm_source, utm_medium, and utm_campaign to your URL (e.g. ?utm_source=qr&utm_medium=flyer&utm_campaign=diwali-sale), then generate a static QR code for that full URL. Every scan arrives tagged, and Google Analytics 4 shows scan sessions under Reports → Acquisition → Traffic acquisition, split by source and campaign. This is the most powerful free method: you get scans plus everything after — page views, form fills, purchases. Needs a website with GA4 installed, which most businesses already have.',
          },
          {
            subheading: 'Method 2: Link shortener with analytics',
            text: 'Paste your URL into a shortener that counts clicks (Bitly free tier, TinyURL, or your own), then generate the QR code for the short link. The shortener dashboard reports click counts, rough locations, devices, and referrers. Setup takes two minutes and requires no website access at all. Downsides: free tiers cap the number of links or hide detailed history, and you depend on the shortener staying alive — use an established one, not a random free site.',
          },
          {
            subheading: 'Method 3: Your own redirect page',
            text: 'If you control your website, create a simple redirect page like yoursite.com/qr-flyer that forwards to the real destination and logs the hit. You can count visits with your existing analytics, see everything GA4 sees, and — unlike a third-party shortener — the link can never be shut down by someone else. This takes a developer about ten minutes and is the most robust free option for businesses that plan to use QR codes long-term.',
          },
          {
            subheading: 'Method 4: Free dynamic QR trials (use with caution)',
            text: 'Several dynamic QR platforms offer a free tier with a scan dashboard — counts, locations, device types — usually limited to a few codes and a few hundred scans per month. This is genuinely the easiest way to see scan analytics, but read the limits carefully: free codes are sometimes branded, sometimes capped, and usually convert to paid when the trial ends. Fine for a short campaign or a test; risky as the foundation of printed materials that stay up for a year.',
          },
        ],
        callout: {
          title: 'Our recommendation',
          text: 'For anything lasting longer than a month: Method 1 or 3. They are free forever, owned by you, and measure conversions — not just raw scan counts. Method 2 is perfect for one-off tests.',
          type: 'tip',
        },
      },
      {
        id: 'step-by-step-tracking-setup',
        heading: 'How to Set Up QR Scan Tracking in 10 Minutes (Free)',
        paragraphs: [
          'Here is the fastest practical setup: UTM parameters plus a free static QR code. You will end with a printable code whose scans appear in Google Analytics 4, broken down by campaign.',
          'Step one: build the tracked link. Take your destination URL — say yoursite.com/offer — and append UTM tags describing this specific placement: ?utm_source=qr&utm_medium=poster&utm_campaign=diwali-2026. The source is always "qr" so scans separate cleanly from other traffic; the medium describes the placement (poster, flyer, business-card, storefront-window); the campaign names the promotion. Generate one link per placement — never reuse the same campaign tag on two posters, or you will never know which poster worked.',
          'Step two: test the link before encoding it. Open it in a private browser window and check it lands on the right page with the tags intact. A QR code printed on a thousand flyers is expensive to fix, so this thirty-second check is the most valuable step in the whole process. If you use GA4, open the real-time report and confirm the visit shows up with the right source and campaign — then you know the measurement chain works end to end.',
          'Step three: generate the QR code from the tagged URL and print it at the right size. Paste the full tagged link into the free generator, download the PNG at maximum resolution (or SVG for professional printing), and follow the 10:1 rule — a code viewed from 1 meter away must be at least 10 cm wide, or scans will silently under-report because people fail to scan at all. Add a short call to action next to the code ("Scan for the Diwali offer"), since tracked or not, a bare code gets far fewer scans than one that promises a payoff.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator — paste your UTM-tagged URL to create a trackable QR code',
            caption: 'Paste the full UTM-tagged URL into the free generator — every scan of this code arrives pre-labeled in your analytics.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download a trackable QR code as high-resolution PNG or SVG for print',
            caption: 'Download at maximum resolution (PNG) or as SVG — blurry prints fail to scan, and failed scans never show up in your data.',
          },
        ],
      },
      {
        id: 'tracking-metrics-that-matter',
        heading: 'Which Scan Metrics Actually Matter',
        paragraphs: [
          'Most tracking setups drown you in numbers. In practice, five metrics decide whether a QR campaign is working, and every one of them is available free with the methods above.',
          'Total scans and unique scans tell different stories. Total scans measure exposure — how many times the code was read. Unique scans approximate how many people scanned, though phone-based counting is imperfect (same person scanning on Wi-Fi and mobile data can count twice). Watch the ratio: lots of total scans but few uniques means the same people scanning repeatedly — fine for a menu, suspicious for a lead form. A sudden spike in totals with zero growth in uniques is often one person testing the code, not a campaign success.',
          'Scans by location and time are where print campaigns get smart. If your flyer poster at the mall pulled 180 scans and the one at the bus stop pulled 12, the next print budget writes itself. Time data reveals behavior too: evening and weekend scans mean people scan from home with time to browse; weekday lunch scans mean quick mobile glances, so the landing page must load instantly and ask for very little. Device data (iOS vs Android split) is worth one glance when your landing page has platform-specific issues — a page that breaks on older Android browsers will show it as scans without engagement.',
          'The metric that beats all of them is conversion rate: what percentage of scanners did the thing you wanted. A poster with 50 scans and 10 form fills (20%) destroyed a poster with 500 scans and 5 fills (1%). This is why Method 1 — UTM into your own analytics — wins: it is the only free method that connects the scan to the sale. If you only remember one number from this guide, make it scans-to-conversion, not raw scans.',
        ],
        bullets: [
          'Unique vs total scans: the ratio exposes repeat scanners and testing noise.',
          'Scans by placement: the only honest way to compare poster locations.',
          'Scans by time: evening/weekend scans browse longer; lunch scans need instant pages.',
          'Conversion rate: the percentage of scanners who completed your goal — the one metric that decides budget.',
        ],
      },
      {
        id: 'tracking-mistakes',
        heading: '5 QR Tracking Mistakes That Ruin Your Data',
        paragraphs: [
          'Tracking is only as good as its setup. These five mistakes are responsible for most of the "our QR data makes no sense" complaints — and every one is preventable before printing.',
        ],
        subsections: [
          {
            subheading: '1. Reusing one code everywhere',
            text: 'One code on the flyer, the storefront, and the newspaper ad produces one blended number that tells you nothing about which placement worked. Generate a separate tagged link — and a separate code — for every placement. It costs nothing extra.',
          },
          {
            subheading: '2. Forgetting UTM tags before generating',
            text: 'Adding tags after the code is printed means reprinting. Build the final tagged URL first, test it, then generate the code. The order is: link → tags → test → code → print.',
          },
          {
            subheading: '3. Counting your own test scans',
            text: 'Your team scanning the code fifty times during setup inflates day-one numbers and can trigger "success" conclusions. Note test dates, or better, test with a separate untagged code and generate the real one last.',
          },
          {
            subheading: '4. Linking to a slow or broken mobile page',
            text: 'Scans without engagement usually mean the landing page failed, not the code. If scans are high but bounce rate is 95%+, load the page on a mid-range Android phone over mobile data — that is what your audience sees.',
          },
          {
            subheading: '5. Printing too small to scan reliably',
            text: 'A code people fail to scan produces no data — your "low interest" might be a physics problem, not a marketing one. Follow the 10:1 distance rule and always test-scan the final print from the real viewing distance.',
          },
        ],
        callout: {
          title: 'The pre-print checklist',
          text: 'Before any print run: unique tagged link per placement ✓, link tested in a private window ✓, GA4 real-time confirms the tag ✓, code scanned from real distance on two phones ✓, quiet zone and contrast intact ✓.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'FAQs: Tracking QR Code Scans',
    faqs: [
      {
        question: 'Can you track scans of a static QR code?',
        answer:
          'Not directly — a static QR code stores its URL in the pattern itself, so no server ever sees the scan. But you can track what happens after the scan for free: add UTM parameters to the link (visible in Google Analytics), encode a shortener link with click analytics, or point the code at a redirect page you control. All three methods work with free static codes and measure scans reliably.',
      },
      {
        question: 'How do I track QR code scans for free?',
        answer:
          'The best free method is UTM parameters plus Google Analytics 4: tag your URL (e.g. ?utm_source=qr&utm_medium=flyer&utm_campaign=sale), generate a free static QR code for it, and scan traffic appears in GA4 under Acquisition reports with full conversion data. Alternatives: a link shortener with click stats (fastest, no website access needed) or your own redirect page (most robust, needs a developer).',
      },
      {
        question: 'Does Google Analytics track QR code scans?',
        answer:
          'Yes, with one step of preparation. GA4 cannot see the scan itself, but if the QR code points to a UTM-tagged URL, every scan arrives as a normal website session carrying your tags — source, medium, and campaign. You then see scan counts, devices, locations, and downstream conversions exactly like any other traffic channel, at no cost.',
      },
      {
        question: 'Can I see who scanned my QR code?',
        answer:
          'No — and be wary of any tool claiming otherwise. Scan tracking shows aggregate data: counts, approximate location (city level), device type, and time. Individual identities are not available because phones do not send personal data when opening a link, and privacy laws in India, the EU, and elsewhere prohibit identifying visitors this way. If a campaign asks for names, collect them with a form on the landing page instead.',
      },
      {
        question: 'Why do my scan numbers look wrong?',
        answer:
          'The usual culprits: test scans by your own team inflating the count, one code reused across placements blending the data, and failed scans (code too small, poor contrast) that never register anywhere. Also note that shortener "clicks" and GA4 "sessions" count differently — bots, ad blockers, and privacy settings make GA4 numbers slightly lower. Compare trends over time rather than absolute numbers across tools.',
      },
      {
        question: 'Is a paid dynamic QR platform worth it for tracking?',
        answer:
          'Sometimes. Pay when you need editable destinations (codes already printed that must point somewhere new), real-time scan dashboards without touching analytics, or hundreds of codes managed centrally. Skip it when a free static code with UTM tags covers your needs — that is most flyers, posters, menus, and business cards. Never build long-lived printed materials on a free dynamic trial that can expire.',
      },
    ],
    ctaTitle: 'Make Your Trackable QR Code Now',
    ctaDesc:
      'Build your UTM-tagged link, paste it into the free generator, and download a high-resolution QR code — no sign-up, no watermark, yours forever.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
    ctaSecondaryText: 'What Is a QR Code?',
    ctaSecondaryLink: '/guides/what-is-a-qr-code',
  };

  return enData;
}
