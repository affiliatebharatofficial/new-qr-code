import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToMakeLocationQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a Location QR Code (Google Maps, Free)',
    description:
      'Create a free QR code for a Google Maps location: send customers straight to your shop, venue or event with one scan — no app, no sign-up, no expiry.',
    badge: 'Guides',
    h1: 'How to Make a Location QR Code',
    subheadline:
      'Typing out an address is where customers get lost — literally. A misspelled street name, a missing pin code, or a shop tucked inside a market complex is enough to send someone to the wrong end of the street. A QR code for a Google Maps location removes all of that: one scan opens the exact pin in the customer’s own maps app, with directions, distance, and estimated travel time ready to go. This guide shows you how to create one free in under a minute, how to pick between a place name and exact coordinates, and where to print it so people actually use it.',
    readingTime: '8 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan opens the pin',
        text: 'A location QR code opens your exact Google Maps pin — customers get directions instantly instead of typing an address and hoping they spelled it right.',
      },
      {
        label: 'Use the Location type',
        text: 'The generator’s Location / Maps type turns a place name or GPS coordinates into a proper Google Maps link — no need to copy links from the Maps app.',
      },
      {
        label: 'Coordinates beat addresses for tricky spots',
        text: 'For stalls, venues inside large complexes, or places without a formal address, latitude and longitude pin the exact entrance, not just the building.',
      },
      {
        label: 'Print it where the decision happens',
        text: 'A location code earns its keep on packaging, flyers, invoices, and event invites — anywhere a customer first learns about you and needs to find you.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-location-qr-code',
        heading: 'What Is a Location QR Code?',
        paragraphs: [
          'A location QR code is a QR code that, when scanned, opens a specific place in a maps app — usually Google Maps — instead of a website. Technically it is just a QR code containing a Google Maps link, such as a Maps search URL for a place name or a pair of GPS coordinates. The phone’s camera recognises it as a link, and tapping the notification opens the pin with the place name, address, reviews, and a “Directions” button that starts navigation from the scanner’s current location.',
          'That last detail is what makes it more useful than a printed address. An address tells someone where you are; a location QR code takes them there. There is no copying and pasting, no switching between your flyer and the Maps app, and no chance of a typo sending them to a same-named street in another city. For a customer standing on a busy road trying to find your shop, the difference between “type this address” and “scan this and follow the blue line” is the difference between arriving and giving up.',
          'Location codes are also free and permanent in their simplest form. A static QR code that encodes a Google Maps link never expires, needs no account, and keeps working as long as the Maps link itself works. That makes them ideal for anything printed in bulk — packaging, visiting cards, menus, and signage — where reprinting because a code expired would be expensive. The only reason to pay for a dynamic version is if you want to change the destination after printing or count how many people scanned, which most small businesses do not need on day one.',
        ],
        callout: {
          title: 'Scan it yourself before you print it',
          text: 'Every location code should be tested on both an Android phone and an iPhone before printing. A code that opens the right pin on your phone may open a slightly different search result on another device if the place name is ambiguous — coordinates remove that risk entirely.',
          type: 'tip',
        },
      },
      {
        id: 'create-a-location-qr-code-step-by-step',
        heading: 'How to Make a Location QR Code (Step by Step)',
        paragraphs: [
          'Creating a location QR code takes about a minute, and you have two ways to do it: the dedicated Location type, or the plain URL type with a link copied from Google Maps. The Location type is the simpler route, because it builds the Maps link for you — you never have to open the Maps app at all. Start by opening the free QR code generator and choosing “Location / Maps” from the type selector. If your generator view shows types grouped by category, you will find it under the business group alongside vCard, event, and phone codes.',
          'Next, enter your location. You can type a place name or full address — for example, “Shinde Hospital, Manor” or the complete street address — and the generator turns it into a Google Maps search link for that query. If your place is hard to find by name, use GPS coordinates instead: open Google Maps, long-press (or right-click on desktop) on the exact spot, and copy the latitude and longitude it shows. Coordinates pin the precise entrance or stall rather than the centre of a building, which matters for shops inside markets, clinics inside larger complexes, and outdoor event venues.',
          'Before you download, customise the code lightly. Adding your brand colour is fine, but keep the contrast high — a dark code on a light background scans reliably in sunlight, on glossy packaging, and on a phone screen in a moving vehicle, while a low-contrast “stylish” code fails exactly when a customer is in a hurry. If you add a logo in the centre, keep it small (no more than about 30% of the code’s width) and always re-test the scan afterwards, because a logo that covers too much of the code breaks it.',
          'Finally, download the code as a high-resolution PNG if it will be printed, and test it from the distance people will actually scan from. A code on a visiting card is scanned from 15–20 cm away and can be small; a code on a shop shutter or a roadside banner is scanned from a metre or more and needs to be much larger — roughly 2 cm of code width per metre of scanning distance, with a blank quiet zone around it. Print one test copy, scan it under real light, and confirm it opens the right pin before you print the whole batch.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage where you can create a QR code for a Google Maps location',
            caption: 'The free generator homepage — pick the Location / Maps type, enter your place or coordinates, and the code builds live.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing Location, URL, Wi-Fi and other options for a location QR code',
            caption: 'Choose Location / Maps for a Google Maps pin, or URL if you already have a Maps share link to paste in.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a location QR code as a PNG for printing',
            caption: 'Download a high-resolution PNG for visiting cards, packaging, flyers, and shop signage.',
          },
        ],
      },
      {
        id: 'place-name-vs-coordinates',
        heading: 'Place Name or Coordinates: Which Should You Use?',
        paragraphs: [
          'This is the one decision that determines whether your location code works perfectly or just “mostly”. A place-name code opens a Google Maps search for that name, and Maps shows its best match. That works beautifully when your business has a verified Google Business Profile with a unique name — “Shinde Hospital, Manor” resolves to exactly one place. It gets risky when your name is generic (“Sharma General Store”), shared with another business in another city, or not listed on Google Maps at all. In those cases the scanner may see a list of similarly named places instead of your pin, and most people will pick the first one, right or wrong.',
          'Coordinates remove the ambiguity completely. A latitude-longitude pair points at one exact spot on Earth, so the scanner lands on your pin every time, regardless of what your business is called or whether Google has your listing. The trade-off is that coordinates are harder to type by hand — but that does not matter here, because nobody types them: they are encoded inside the QR code. You only need to get them right once, when you create the code, by dropping the pin on the exact entrance in Google Maps rather than on the building’s centre.',
          'A practical rule: use your place name if you have a verified Google Business Profile and the name is unique in your city; use coordinates for everything else — market stalls, home-based businesses, wedding and event venues, pop-up shops, farm stays, and any address that delivery drivers already struggle with. And whichever you choose, verify the result by scanning the finished code on a phone that has never searched for your business before, so you see what a first-time customer sees rather than what Google personalises for you.',
        ],
        callout: {
          title: 'Pin the entrance, not the building',
          text: 'In Google Maps, drop the pin on the door customers should walk through — the side entrance, the market gate, the parking-lot side — not the middle of the roof. A pin 100 metres off can send someone to the wrong side of a large complex.',
          type: 'info',
        },
      },
      {
        id: 'where-to-use-location-qr-codes',
        heading: 'Where Location QR Codes Actually Get Scanned',
        paragraphs: [
          'A location code only works if it appears where someone is deciding to visit you. The highest-value placements are the ones a customer encounters before they have your address saved anywhere: packaging, invoices and bills, event invitations, social media posts printed as posters, and the back of a visiting card. A customer who just bought from you and wants to come back, a guest holding a wedding invitation, or a stranger who picked up your flyer at a market — all of them are one scan away from directions instead of one forgotten address away from never returning.',
          'Shops and clinics get the most from the code on the shopfront itself and on every receipt. A passer-by who photographs the shutter code after closing hours gets your location and timings the next morning without having to remember the shop name. Restaurants benefit on takeaway packaging and table tents: a customer who enjoyed a meal can scan the box at home and navigate back next weekend. Real-estate agents put site-visit codes on hoardings and brochures, because a “call for location” step loses buyers who are driving past right now.',
          'Events are the other big win. A wedding, exhibition, or workshop venue that most guests have never visited should carry the code on the invitation itself — digital invites can link directly, but printed invites need the code. Add a short label next to every code: “Scan for directions” or “Scan to navigate”. A bare code with no label gets ignored, because nobody scans a mystery square; a labelled code tells the scanner exactly what they get, which is the difference between a code that works and decoration.',
        ],
        subsections: [
          {
            subheading: 'Shops, clinics, and restaurants',
            text: 'Print the code on visiting cards, bills, packaging, and the shopfront. A customer who scans it gets directions plus your reviews and timings in one tap.',
          },
          {
            subheading: 'Events, weddings, and exhibitions',
            text: 'Put the code on the invitation — printed or digital. Guests who have never visited the venue navigate straight to the entrance instead of calling the host for directions.',
          },
          {
            subheading: 'Real estate and site visits',
            text: 'A code on a hoarding or brochure takes a buyer to the plot or flat instantly, while they are standing nearby and motivated — not after they have gone home and forgotten the ad.',
          },
          {
            subheading: 'Delivery and pickup points',
            text: 'For a cloud kitchen, farm pickup, or pop-up stall, a coordinates-based code guides customers and delivery riders to the exact gate instead of the approximate street address.',
          },
        ],
      },
      {
        id: 'url-type-alternative',
        heading: 'The Alternative: Paste a Google Maps Link Instead',
        paragraphs: [
          'If you already have a Google Maps share link, you do not need the Location type at all — the plain URL type works just as well. In the Google Maps app or website, search for your place, tap “Share”, then “Copy link”, and paste that link into the generator’s URL field. The resulting code opens exactly the same pin. This route is handy when you want the code to open a specific Maps view you have already set up — for example, a link that includes directions from a landmark, or a link to a place list.',
          'There are two cautions with pasted links. First, Google Maps share links are long and sometimes shortened; a shortened link (like a maps.app.goo.gl link) works fine inside a QR code, but if that short link ever stops redirecting, your printed code breaks with no way to fix it except reprinting. A code built from a place name or coordinates through the Location type generates a direct maps search URL with no shortener in the middle, which is one less thing that can break. Second, never paste a link that contains personal data — a link with your home address in it, or a directions link starting from your own house, exposes more than the destination. Create the link from the destination alone.',
          'For most people, the choice is simple: use the Location type when creating a fresh code, and use the URL type only when you already have a Maps link you trust. Either way the scanner’s experience is identical — one tap, one pin, one “Directions” button — and either way the code itself is free, static, and permanent.',
        ],
      },
      {
        id: 'printing-and-mistakes-to-avoid',
        heading: 'Printing Tips and Mistakes That Break Location Codes',
        paragraphs: [
          'The most common failure is size. A code printed too small for its scanning distance simply does not scan, and the customer assumes the code is broken rather than too small. Follow the rough rule of 2 cm of code width per metre of scanning distance, with a minimum of about 3 cm for anything scanned from arm’s length. A visiting-card code can be 2–3 cm; a flyer code should be 4–5 cm; a shopfront or banner code scanned from a metre or two away should be 8–10 cm or larger. Always leave a blank quiet zone — at least four modules wide — around the code, because a code printed flush against a border or a photo often fails even though it looks fine.',
          'The second failure is an untested destination. Before printing, scan the code and check three things: it opens the right place (not a same-named business elsewhere), the pin is on the correct entrance, and the “Directions” button routes sensibly from a different part of town. Do this check on a phone that has not searched for your business before, and re-check the printed batch once a month — businesses move, Maps listings change, and a code that worked in January can point at a closed listing by June. If you move premises, a static code must be reprinted; only a dynamic code lets you change the destination without reprinting, which is worth considering for expensive signage.',
          'Finally, keep the label honest and specific. “Scan for directions” beats “Scan me”, because it tells the customer what happens next. If the code also opens your reviews or timings, say so — “Scan for location & timings” sets the right expectation. And never put a location code for your home address on anything public: a QR code is trivially easy to scan and share, so a home-based business should use a nearby public landmark’s coordinates or a meeting point, and share the exact address only with confirmed customers.',
        ],
        bullets: [
          'Size rule: ~2 cm of code width per metre of scanning distance, minimum ~3 cm for arm’s-length scans.',
          'Quiet zone: leave a blank margin of at least four modules around the code — no borders, logos, or photos touching it.',
          'Test before printing: scan on a fresh phone, confirm the right pin, the right entrance, and a sensible directions route.',
          'Recheck monthly: listings change and businesses move — a dead or wrong pin costs you visitors silently.',
          'Never publish a home address: use a nearby landmark or meeting point for home-based businesses.',
        ],
        callout: {
          title: 'One code, one destination',
          text: 'A location code should open the map and nothing else. Do not point it at a landing page that then links to the map — every extra tap loses visitors who are standing on the street trying to find you.',
          type: 'warning',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for a Google Maps location for free?',
        answer:
          'Open a free QR code generator, choose the Location / Maps type, and enter your place name, address, or GPS coordinates. The generator builds a Google Maps link and encodes it as a QR code instantly. Download it as a PNG, test the scan on your phone, and print it — there is no sign-up, no cost, and a static code never expires.',
      },
      {
        question: 'Should I use a place name or GPS coordinates in a location QR code?',
        answer:
          'Use your place name if you have a verified Google Business Profile with a unique name in your city — it resolves cleanly. Use GPS coordinates for everything else: generic business names, unlisted places, market stalls, event venues, and addresses drivers struggle with. Coordinates point at one exact spot, so the scanner always lands on your pin instead of a same-named business elsewhere.',
      },
      {
        question: 'Do customers need an app to scan a location QR code?',
        answer:
          'No. Every modern Android phone and iPhone scans QR codes with the built-in camera app — the customer points the camera at the code, taps the notification, and the pin opens in Google Maps (or their default maps app) with a Directions button. There is nothing to install and no account to create, which is why location codes work even for first-time visitors.',
      },
      {
        question: 'How do I find the GPS coordinates of my shop or venue?',
        answer:
          'Open Google Maps on your phone or computer, find your exact spot, and long-press (on mobile) or right-click (on desktop) on the entrance — Maps shows the latitude and longitude, which you can copy. Drop the pin on the door customers should use, not the centre of the building, so directions end at the right entrance rather than the wrong side of a complex.',
      },
      {
        question: 'Can I make a QR code for a location that is not on Google Maps?',
        answer:
          'Yes — that is exactly what coordinates are for. Even if your stall, venue, or home business has no Google listing, a coordinates-based code opens that exact spot on the map. The scanner sees the pin, the surrounding streets, and the Directions button, which is everything they need to reach you, listing or no listing.',
      },
      {
        question: 'What size should a printed location QR code be?',
        answer:
          'Roughly 2 cm of code width per metre of scanning distance, and never smaller than about 3 cm for arm’s-length scans. A visiting card works at 2–3 cm, a flyer at 4–5 cm, and a shopfront sign scanned from a metre or more away should be 8–10 cm or larger. Print on matte material to avoid glare, leave a blank margin around the code, and always test-scan the printed copy before the full run.',
      },
    ],
    ctaTitle: 'Make Your Location QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create a code that sends customers straight to your door with directions built in.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
