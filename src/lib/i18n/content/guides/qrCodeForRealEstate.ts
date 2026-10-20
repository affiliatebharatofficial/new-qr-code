import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForRealEstateData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Real Estate: Lead Gen Guide (Free)',
    description:
      'Free guide: use QR codes on for-sale signs, flyers & open houses to turn walk-bys into leads. What to encode, print sizes, tracking — no sign-up.',
    badge: 'Guides',
    h1: "QR Code for Real Estate: The Agent's Lead-Generation Playbook",
    subheadline:
      'A for-sale sign only works while someone is standing in front of it. Add a QR code and that same sign starts working at 11pm on a Sunday — a buyer scans, sees the photos, price, and virtual tour, and hands you their contact details before they ever call an agent. This guide shows exactly how real estate agents use free QR codes on signs, flyers, and open houses to convert drive-by interest into leads, plus the print sizes, design rules, and cheap tracking tricks that decide whether anyone actually scans.',
    readingTime: '9 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Signs work 24/7',
        text: 'A QR code on a for-sale sign lets drive-by buyers open the listing, photos, and virtual tour instantly — after hours, with no phone call.',
      },
      {
        label: 'Free to start',
        text: 'Static QR codes for listings cost nothing, never expire, and scan with any phone camera — no sign-up, no watermark, no app.',
      },
      {
        label: 'Size decides scans',
        text: 'Follow the 10:1 distance rule: a code on a roadside sign viewed from 6 meters needs to be at least 60 cm wide, or it will not scan.',
      },
      {
        label: 'Track for free',
        text: 'Add UTM parameters to the listing URL before generating the code and see scan traffic in your analytics without paying for a dynamic-code platform.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-qr-codes-for-real-estate',
        heading: 'Why QR Codes Are Perfect for Real Estate Marketing',
        paragraphs: [
          'Real estate is a physical, location-based business bought by people who are constantly on their phones. Buyers drive through neighborhoods on weekends, walk past window displays after work, and pick up flyers at open houses — every one of those moments is a chance to hand them the full listing instantly. A QR code is the bridge: it takes someone who is three meters from your sign and puts them on a page with 40 photos, a price history, and a tour-booking button in under three seconds.',
          'The alternative is what agents have done for decades: print a phone number and hope. A phone number demands commitment — a stranger has to decide they are ready to talk to a salesperson, find their phone, and dial. Most early-stage buyers are not there yet; they are browsing, comparing, and eliminating. A scan asks for nothing — just curiosity — and that is exactly the buyer who becomes a lead if you catch them early enough.',
          'Timing also favors QR codes now because buyer behavior has already changed. Property portals, 3D tours, and mortgage calculators have moved almost the entire research phase onto the phone, and nobody needs to install an app to scan anymore — every modern phone camera reads QR codes natively. The buyer outside your listing already has the tool in their hand; the only question is whether you give them a reason to point it at your sign.',
        ],
        callout: {
          title: 'The one rule for real estate QR codes',
          text: 'Every code must promise an instant payoff: "Scan for 40 photos & 3D tour" beats a bare code every time. A QR without a call-to-action frame is invisible.',
          type: 'info',
        },
      },
      {
        id: 'real-estate-qr-code-uses',
        heading: '9 Ways Agents Use QR Codes to Get More Leads',
        paragraphs: [
          'The strongest placements all share one trait: they put the code where buyers are already thinking about a property. These nine are the ones agents actually reuse listing after listing, from yard signs to closing-day follow-ups.',
        ],
        subsections: [
          {
            subheading: '1. For-sale yard signs',
            text: 'The highest-volume placement. A rider below your main sign links to the full listing page with photos, price, and a virtual tour. It converts drive-by traffic — the buyers touring a neighborhood on Sunday — who would never stop to call.',
          },
          {
            subheading: '2. Property flyers',
            text: 'Print one code linking to the listing, the virtual tour, and a mortgage calculator pre-filled with the price. Buyers keep one sheet instead of a brochure pack, and every scan is measurable.',
          },
          {
            subheading: '3. Virtual tour links',
            text: 'Link straight to a 360-degree or video walkthrough. A buyer who tours the home on their phone at midnight is a buyer you would have lost with a phone-number-only sign.',
          },
          {
            subheading: '4. Open house sign-in',
            text: 'Replace the paper sign-in sheet with a code that opens a short digital form: name, email, phone, buying timeline. No illegible handwriting, and the data lands straight in your CRM.',
          },
          {
            subheading: '5. Window displays',
            text: 'Office window listings get evening and weekend foot traffic. A code on each printed listing turns your storefront into a 24-hour lead machine, even when the lights are off.',
          },
          {
            subheading: '6. Agent vCard on business cards',
            text: 'A vCard QR code lets anyone save your name, phone, email, and website to their contacts in one tap. Handing out your card at an open house becomes a guaranteed follow-up channel.',
          },
          {
            subheading: '7. Neighborhood guides',
            text: 'Link to a page covering nearby schools, transit, parks, and commute times. Buyers pick neighborhoods as much as houses — a guide code on your flyer answers the questions that stall decisions.',
          },
          {
            subheading: '8. "Book a viewing" links',
            text: 'A code that opens your booking page directly removes the back-and-forth. This is the highest-intent placement: a scan here usually means the buyer is already sold on visiting.',
          },
          {
            subheading: '9. Google review at closing',
            text: 'After a successful sale, a code linking to your Google review page makes leaving a review a 20-second job. Reviews compound — every one makes the next listing easier to win.',
          },
        ],
        callout: {
          title: 'Start with three',
          text: 'You do not need all nine on day one. A yard-sign code, an open-house sign-in code, and a vCard code cover 80% of the lead capture most solo agents need.',
          type: 'tip',
        },
      },
      {
        id: 'step-by-step',
        heading: 'How to Make a QR Code for a Real Estate Listing (Free)',
        paragraphs: [
          'You do not need a paid QR platform to start. Every placement above is a plain static QR code you can generate free in about a minute. The generator does the encoding — your job is preparing the right link and printing it at the right size.',
          'Step one: finalize the destination first. The strongest listing links are pages built for a phone screen — your property portal page, a single-property website, or a virtual tour. Test the link in a private browser window and on your own phone before encoding anything. A QR code printed on 50 flyers is hard to fix, so get the destination right first: fast-loading, mobile-friendly, with the price and photos visible immediately.',
          'Step two: choose the QR type that matches the job. Most listing codes are plain URLs pointing at the property page. If you want walk-by buyers to find the address in their maps app, use a location type that encodes the coordinates instead. For your business card and open-house handouts, a vCard code carries your contact details straight into the buyer\u2019s phone with one tap — no typing, no errors.',
          'Step three: generate, brand lightly, and download at print resolution. Keep the code black-on-white (or at least very high contrast) and add a white quiet zone around it — scanners need that margin. Download the PNG at maximum resolution for office-printer flyers, and use SVG for anything going to a professional print shop or a sign rider, since vector scales to any size without blur. Then, before you print the batch, scan the final artwork with two different phones — one iPhone, one Android — from the distance buyers will actually stand.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage — paste a listing URL and generate a real estate QR code',
            caption: 'Paste your listing URL in the free generator — a scannable QR code appears instantly, no sign-up.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR type selector showing URL, location, vCard and Wi-Fi options for real estate QR codes',
            caption: 'Pick the type that matches the job: URL for listings, location for maps, vCard for your business card.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for exporting a real estate QR code as PNG or SVG at high resolution',
            caption: 'Download PNG for flyers and SVG for sign riders — vector files scale to any size without blur.',
          },
        ],
      },
      {
        id: 'print-size-and-design',
        heading: 'Print Sizes and Design Rules That Decide Whether Anyone Scans',
        paragraphs: [
          'Most real estate QR codes fail for one boring reason: they are printed too small for where they are placed. The industry rule of thumb is 10:1 — the code should be at least one-tenth of the distance from which people will scan it. A yard sign read from a car window six meters away needs a code roughly 60 cm wide; a flyer held in the hand scans fine at 2–3 cm. Measure the viewing distance before you design the layout, not after.',
          'Contrast is the second rule and it is non-negotiable. Scanners read the difference between dark modules and a light background, so keep codes dark-on-light with a quiet zone — a clean margin around the code at least as wide as four modules — on all four sides. Branded colors are fine only if the contrast stays strong; a navy code on a white rider works, a gold code on a cream rider does not. Never invert a QR code to white-on-dark unless you have tested it on multiple phones, because many scanners struggle with inverted codes.',
          'Density is the hidden third factor. A QR code that encodes a long URL becomes a dense grid of tiny modules that phones fail to read at a distance or in bad light. This is one reason to point codes at short, clean listing links: fewer characters, a sparser grid, and far better scans in evening light or through a car window. If your portal URL is a mile long, route it through your own short domain or a single-property page first.',
        ],
        bullets: [
          'Yard sign rider (scanned from a car): minimum ~60 cm wide code, scanned from 6 m',
          'Window display (scanned from the sidewalk): 10–15 cm wide code, scanned from 1–1.5 m',
          'Flyers and brochures (scanned in hand): 2.5–3 cm wide is plenty',
          'Always print a test copy and scan it with both iPhone and Android from the real viewing distance',
          'Frame every code with a call to action: "Scan for 40 photos & 3D tour"',
        ],
        callout: {
          title: 'Weather warning',
          text: 'Outdoor signs need UV- and rain-resistant printing. A faded, water-damaged code is unscannable — laminate sign riders or print on weatherproof stock so a code placed in March still works in June.',
          type: 'warning',
        },
      },
      {
        id: 'static-vs-dynamic',
        heading: 'Static vs Dynamic QR Codes for Listings',
        paragraphs: [
          'This is the one technical decision that actually matters for agents. A static QR code encodes the listing URL directly — it is free, never expires, and works forever, but you cannot change where it points after printing. A dynamic QR code points to a redirect you control, so you can repoint a printed code to a new listing after the property sells, or swap in a price-drop announcement without reprinting. Dynamic codes usually cost a monthly subscription and depend on the platform staying online.',
          'For most agents, the honest answer is: start with static and free. A static code per listing is a one-minute job, costs nothing, and the common dynamic selling point — reusing one sign rider across listings — only pays off once you have enough volume that reprinting riders is a real expense. Print one code per listing, and when the property sells, the old code keeps pointing to the listing page you mark "Sold" — which is actually useful social proof for the next seller who scans it.',
          'Dynamic codes earn their place in exactly two situations: you run a high volume of listings and want one reusable "Scan for details" rider that you repoint every week, or you need scan analytics that static codes cannot provide natively. If you go dynamic, treat the provider as infrastructure you depend on — check what happens to your codes if you cancel the subscription, because some providers deactivate them.',
        ],
        callout: {
          title: 'The sold-listing trick',
          text: 'Keep your sold listings online with a clear "Sold" banner and your contact details. A static code on an old sign rider or flyer then becomes advertising for your next listing, not a dead end.',
          type: 'tip',
        },
      },
      {
        id: 'tracking-scans',
        heading: 'Track Your QR Scans for Free (No Paid Platform Needed)',
        paragraphs: [
          'One of the biggest selling points of paid QR platforms is scan analytics — but for listing codes, you can get the numbers that matter without paying anything. Before you generate the code, append UTM parameters to the listing URL: something like the property address as the campaign and the placement ("yard-sign" or "flyer") as the medium. When buyers scan, your website analytics or portal dashboard records exactly which placement sent them. You learn which sign, which flyer, and which open house actually drove traffic.',
          'What you will not get for free is the scan count itself — UTMs tell you who reached the page, not who scanned and bounced. For listing marketing that is usually enough: a scan that does not reach the listing page was not a lead anyway. What matters is which placements convert into page views, tour bookings, and enquiries, and those are all measurable in your normal analytics.',
          'Review the data monthly and act on it. If the yard-sign code drives traffic but the window-display code gets nothing, the window code is probably too small, too high, or badly lit — fix the placement rather than blaming the concept. Two or three months of this tells you more about your local marketing than any generic best-practice list.',
        ],
      },
      {
        id: 'mistakes-to-avoid',
        heading: 'Common Mistakes Agents Make With Listing QR Codes',
        paragraphs: [
          'The first mistake is linking to a desktop-only or slow-loading page. A buyer scans on a phone, often on mobile data, standing on a sidewalk — if the listing page takes eight seconds to load or renders tiny on a phone screen, the scan is wasted. Always open your own link on a phone over mobile data before you print.',
          'The second is the bare code with no context. Agents print a QR in the corner of a flyer with nothing around it, and nobody scans it because nobody knows what is behind it. A code always needs a frame: "Scan for the 3D tour", "Scan to book a viewing", "Scan for the floor plan". The frame is what converts curiosity into a scan.',
          'The third is printing once and never testing again. Paper fades, laminate yellows, and reprints drift. Scan every batch of printed material yourself before it goes out, and re-scan the outdoor signs every couple of months. A dead code on your most visible listing is worse than no code at all — it tells buyers you do not check your own marketing.',
        ],
      },
    ],
    faqsTitle: 'Real Estate QR Code FAQs',
    faqs: [
      {
        question: 'Are QR codes on for-sale signs actually effective?',
        answer:
          'They are effective when they do something a phone number cannot: show photos, a price, and a virtual tour at 11pm on a Sunday. A bare code with no call-to-action frame is usually ignored, so always label it — "Scan for 40 photos & 3D tour" converts dramatically better than a lonely square in the corner of the rider.',
      },
      {
        question: 'Should I use static or dynamic QR codes for my listings?',
        answer:
          'Start with static and free. A static code per listing costs nothing and never expires — just print one per property. Dynamic codes (which let you repoint a printed code to a new listing after a sale) only pay off at high volume, and they usually require a monthly subscription that can deactivate your codes if you cancel.',
      },
      {
        question: 'What size should a QR code be on a yard sign?',
        answer:
          'Follow the 10:1 rule: the code should be at least one-tenth of the scanning distance. For a roadside sign read from a car window about 6 meters away, print the code roughly 60 cm wide. For a window display scanned from the sidewalk (1–1.5 m), 10–15 cm is enough. Always test-scan the printed sign from the real distance before the full print run.',
      },
      {
        question: 'Can I reuse a QR code when a property sells?',
        answer:
          'A static code cannot be repointed, but that is not the problem it sounds like. Keep the sold listing page online with a "Sold" banner and your contact details — then the old code becomes social proof for the next seller instead of a dead end. Only dynamic codes can be redirected to a new listing, which requires a paid platform.',
      },
      {
        question: 'Do QR codes work for rental listings too?',
        answer:
          'Yes — rentals are arguably the best use case, because renters browse fast and contact multiple agents. Put a code on the building notice or window linking to photos, the monthly rent, and a viewing-booking link. Property managers also use them on apartment-complex signage to route enquiries to the right unit page.',
      },
      {
        question: 'How much do real estate QR codes cost?',
        answer:
          'Nothing, to start. Static QR codes are free to generate, never expire, and print at whatever your existing flyers and signs already cost. You only start paying if you want dynamic codes (repointable, with scan analytics), which run on monthly platform subscriptions. Track performance free with UTM parameters on the listing URL instead.',
      },
    ],
    ctaTitle: 'Make Your Listing QR Code Now',
    ctaDesc:
      'Free forever, no sign-up, no watermark. Paste your listing link, pick the QR type, and download a print-ready PNG or SVG for your sign, flyer, or business card.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };

  return enData;
}
