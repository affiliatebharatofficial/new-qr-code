import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHotelWifiQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'Hotel WiFi QR Code: Free Guest WiFi Sign-In (No App)',
    description:
      'Make a free hotel WiFi QR code guests scan to connect instantly — no typing passwords, no front-desk calls. Setup, print, and security tips.',
    badge: 'Guides',
    h1: 'Hotel WiFi QR Code: Let Guests Connect in One Scan',
    subheadline:
      'Every hotel knows the scene: a guest arrives tired after a long journey, opens their phone, and then spends five minutes squinting at a password card, mistyping a capital letter, and finally calling reception — for something that should take two seconds. A hotel WiFi QR code removes that friction entirely. The guest points their phone camera at a small printed code in the room, taps “Join”, and is online. No app to install, no password to type, no call to the front desk. This guide shows how to create one for free, where to display it, and how to keep your hotel network secure while you do it.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan, no typing',
        text: 'A WiFi QR code stores your network name and password, so guests join by pointing their camera at it — no app, no account, no mistyped passwords.',
      },
      {
        label: 'Free and permanent',
        text: 'A static WiFi code costs nothing and never expires, as long as the network name and password stay the same. Reprint only when you change the password.',
      },
      {
        label: 'Print it where guests look',
        text: 'Room key cards, bedside cards, the TV welcome screen area, and the lobby desk beat a single sign at reception that guests never notice.',
      },
      {
        label: 'Keep guests off your staff network',
        text: 'Always put the code on a separate guest network, never on the same network as your booking system, cameras, or office computers.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-hotel-guests-hate-wifi-passwords',
        heading: 'Why Hotel Guests Hate WiFi Passwords (and Staff Do Too)',
        paragraphs: [
          'WiFi is no longer a perk in a hotel — it is infrastructure guests expect to work the moment they walk in, like hot water or a working lock. Yet the way most hotels hand it over has barely changed in twenty years: a password printed on a card, a slip of paper at check-in, or a line on the back of the room key sleeve, full of mixed case letters, numbers, and symbols that are easy to misread. A lowercase “l”, a capital “I”, and the number “1” look identical in many fonts, and a guest typing a 16-character password on a phone keyboard will get it wrong more often than right. Every failed attempt is a small frustration that lands, unfairly, on the hotel’s reputation.',
          'The cost is not just guest annoyance — it is staff time. Front-desk teams in small and mid-sized hotels field the same “what is the WiFi password?” question dozens of times a day, and each call interrupts check-ins, phone bookings, and everything else reception is supposed to be doing. In larger hotels the problem scales into a genuine operational drag, especially at peak check-in hours when a queue is already forming. A QR code quietly removes an entire category of front-desk work: the guest never needs to ask, because the answer is already in the room, in a form they can use in two seconds.',
          'There is also a review angle that hoteliers underestimate. Guests rarely praise WiFi that works — they only notice it when it fails. But “WiFi was a pain to connect” shows up in reviews with surprising regularity, and it colours the whole stay: a guest who struggled for ten minutes to get online before dinner is already mildly irritated before they have judged the room, the food, or the service. A scan-and-connect experience, by contrast, feels modern and thoughtful, and it is one of the cheapest hospitality upgrades a hotel can make — a printed card costs almost nothing, yet it removes a recurring friction point from every single stay.',
        ],
        callout: {
          title: 'The test that matters',
          text: 'Hand a printed WiFi QR code to someone who has never seen it and time them. If they are online in under ten seconds with no help from you, it works. If they have to ask a question, fix the code, the label, or the placement before you print a hundred copies.',
          type: 'tip',
        },
      },
      {
        id: 'how-a-wifi-qr-code-works',
        heading: 'How a WiFi QR Code Actually Works',
        paragraphs: [
          'A WiFi QR code is not a link to a website — it is a small package of connection details written in a standard format that phones already understand. Inside the code are three pieces of information: the network name (SSID), the password, and the security type (usually WPA or WPA2, the encryption most modern routers use). When a phone camera reads the code, the phone recognises the format, shows a “Join this network” prompt with the network name, and connects as soon as the guest taps it. The password is passed to the phone automatically and is never displayed to the guest or typed by hand.',
          'That distinction matters for two reasons. First, it means the guest needs no special app — the camera app built into every modern iPhone and Android phone handles WiFi codes natively, and on older Android phones the same prompt appears through Google Lens. Second, it means the password itself stays private in a practical sense: guests can connect, but they never learn the password, so they cannot casually share it with people outside the hotel or write it on a review site. That is a small but real security improvement over a password printed on a card that anyone can photograph.',
          'One honest limitation to understand: a WiFi QR code connects a device to a network, it does not bypass a captive portal. If your hotel uses a login page where guests must accept terms or enter a room number before getting internet access, the guest will still see that page after joining the network — the code only skips the password-typing step. Many small hotels use a simple password-protected network with no portal at all, in which case the code takes the guest straight online. If you do run a portal, keep it simple — a single “Accept and connect” button, no account creation — or the friction you removed with the code comes straight back through the login page.',
        ],
        subsections: [
          {
            subheading: 'iPhone guests',
            text: 'Open the Camera app, point it at the code, and tap the “Join” notification. No app, no settings menu, no typing. Works on every iPhone running iOS 11 or later.',
          },
          {
            subheading: 'Android guests',
            text: 'Open the Camera app or Google Lens, point it at the code, and tap “Connect”. Nearly all Android phones from the last several years support this out of the box.',
          },
          {
            subheading: 'Laptops and older phones',
            text: 'A laptop cannot scan a code, so always print the network name and password in small text under the QR code as a fallback for laptop users and older devices.',
          },
          {
            subheading: 'Hidden networks',
            text: 'If your network name is hidden, the code needs a “hidden network” flag to work. It is usually simpler to keep the guest network visible — a hidden SSID adds no real security and breaks some phones’ auto-join.',
          },
        ],
      },
      {
        id: 'how-to-create-a-hotel-wifi-qr-code',
        heading: 'How to Create a Hotel WiFi QR Code (Step by Step)',
        paragraphs: [
          'Creating the code takes under a minute, but one preparation step matters: decide which network guests will join, and confirm its exact name and password from the router settings, not from memory. Copy the network name character for character — WiFi names are case-sensitive, and a single wrong letter produces a code that looks perfect but joins nothing. If your hotel has separate networks for staff, office, and guests, use the guest network only, and double-check that you are not accidentally handing out the network your booking system and cameras run on.',
          'Next, open the free QR code generator and choose the WiFi type from the type selector, then enter the network name, password, and encryption type exactly as they appear in your router settings. For almost every modern hotel router, the encryption is WPA or WPA2 — pick that option unless your router admin page says otherwise. If your guest network genuinely has no password (an open network, common in some cafés but not recommended for hotels), choose the “no password” option, but understand that anyone in range can join, so an open hotel network should always sit behind a captive portal or a separate firewall.',
          'Download the code as a high-resolution PNG and test it before printing anything in bulk. Scan it with an iPhone and an Android phone, on the actual guest network, from the distance a guest would hold the card — and then confirm the phone genuinely gets internet, not just a “connected” icon. A code that joins the network but delivers no internet (because the router’s internet is down, or the guest network is isolated without internet access) is worse than no code at all, because the guest assumes the code is broken. Test once, then print with confidence.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a hotel WiFi QR code',
            caption: 'The free generator homepage — choose the WiFi type and your hotel guest code builds in seconds.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing the WiFi option for a hotel WiFi QR code',
            caption: 'Pick the WiFi type, then enter your exact guest network name, password, and WPA/WPA2 encryption.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a hotel WiFi QR code as a high-resolution PNG for printing',
            caption: 'Download a high-resolution PNG for your printer — then scan-test it on iPhone and Android before the bulk print.',
          },
        ],
      },
      {
        id: 'where-to-display-hotel-wifi-qr-code',
        heading: 'Where to Display the Code So Guests Actually Use It',
        paragraphs: [
          'A WiFi QR code only helps if guests see it at the moment they want WiFi — which is the first ten minutes in the room, phone in hand, bags still unpacked. The single best placement is the room itself: a small bedside card, a tent card on the desk, or the back of the room key sleeve. The card should say, in plain words, what the code does: “Scan to connect to WiFi” in the local language plus English, with the network name printed underneath for laptop users. A bare code with no label gets ignored, because guests do not scan mystery squares.',
          'Beyond the room, a few more placements cover the rest of the guest journey. The lobby and reception desk deserve a framed stand with the same code, for guests who want to get online while waiting for check-in or for a taxi. Restaurants, cafés, and conference rooms inside the hotel should carry it too, since guests move between spaces and will not walk back to their room to rescan. If your hotel issues printed key cards, adding the code to the key card sleeve is the highest-visibility option of all — it is the one item every guest carries from the moment they check in.',
          'Size and print quality follow the same rules as any printed code: at least 3–4 cm wide on a room card (guests scan from arm’s length), dark code on a light background, and a blank quiet zone around it with no text or pattern touching the edges. Avoid printing the code on glossy laminated cards under a bright bedside lamp if you can — glare is the most common reason a physically perfect code fails to scan in a real room. Matte card stock costs the same and scans far more reliably. And print a test copy on the actual card stock first: a code that scans on screen can still fail on glossy paper under warm hotel lighting.',
        ],
        bullets: [
          'Bedside or desk card in every room — the moment guests want WiFi, the code is in front of them.',
          'Room key card sleeve — the one item every guest carries from check-in.',
          'Lobby and reception stand — for guests waiting, working, or just arrived.',
          'Restaurant, café, and conference room tables — guests move around the property.',
          'Always label it: “Scan to connect to WiFi” plus the network name for laptop users.',
          'Matte card stock, 3–4 cm minimum, dark on light, with a clear quiet zone.',
        ],
      },
      {
        id: 'hotel-wifi-security-with-qr-codes',
        heading: 'Keeping Your Hotel Network Secure With QR Codes',
        paragraphs: [
          'The most important security rule is network separation: guests should never be on the same network as your property management system, booking terminals, office computers, CCTV cameras, or smart locks. Most modern routers and hotel access points support multiple networks (often called SSIDs or VLANs) precisely for this — set up a dedicated guest network, give it its own password, and put only that network’s details in the QR code. If a guest’s infected phone or a curious visitor probes the network, they reach other guests’ devices and the internet, not your business systems. If your current router cannot run a separate guest network, that upgrade is worth more than any QR code.',
          'The second rule is password rotation, and it is where QR codes change the economics. In the past, changing the WiFi password meant reprinting every card in the hotel, so most small hotels simply never changed it — and a password handed out for years eventually circulates far beyond paying guests. With QR codes, the cost of a rotation is still a reprint, so be realistic: rotate on a sensible schedule (every few months, or whenever staff who knew the password leave), and keep the code artwork as a file you can reprint quickly rather than a one-off design you would have to rebuild. Some hotels rotate seasonally and treat the reprint as part of the seasonal room-card refresh, which keeps the chore small.',
          'A few more habits complete the picture. Use WPA2 or WPA3 encryption on the guest network — never an open network without a portal, and never the outdated WEP encryption, which can be cracked in minutes. Turn on client isolation (also called AP isolation) on the guest network if your access points offer it, so one guest’s device cannot see or reach another guest’s device. And resist the temptation to put the QR code on a public Instagram post or the hotel website “for convenience”: a code posted publicly gives free internet to anyone standing outside, and it defeats the entire point of having a password. The code belongs inside the property, for guests, not on the open internet.',
        ],
        callout: {
          title: 'Never share the staff network',
          text: 'If you remember one rule from this guide, make it this: the QR code must contain the guest network only. A code that joins the network running your booking system, cameras, or office PCs hands that access to every guest who scans it.',
          type: 'warning',
        },
      },
      {
        id: 'mistakes-and-guest-experience',
        heading: 'Mistakes to Avoid — and Getting the Guest Experience Right',
        paragraphs: [
          'The classic hotel WiFi mistakes are small and entirely avoidable. The first is printing the code from a remembered password instead of copying it from the router — one wrong character and every card in the hotel is useless, and the failure only surfaces when a frustrated guest reports it. The second is printing the code once and never testing it on a real phone: codes rendered from screenshots, stretched to fit a card layout, or printed too small fail silently. The third is forgetting the laptop fallback — a room full of business travellers on laptops cannot scan anything, so the network name and password must appear in small print under the code, every time.',
          'A subtler mistake is letting the code go stale. Hotels change routers, internet providers, and passwords, and the printed code in room 204 does not update itself. Build a simple habit: whenever the guest WiFi password changes, the room cards are reprinted in the same job, and one person scans a fresh card on both iPhone and Android before the batch goes out. Keep the code file and the card design together so a reprint takes minutes, not a redesign. And if you run a captive portal, test the full journey after any change — code scan, portal page, internet — because a portal that demands an account or a room number reintroduces the exact friction the code removed.',
          'Done well, the whole experience becomes invisible, which is exactly the point. The guest walks in, scans, and is online before they have unpacked — and the front desk never hears about WiFi at all, which is the best possible outcome for a hotel amenity. That silence is measurable in a small way: track how often reception gets WiFi questions in the month before and after you introduce the cards. Most small hotels see the question all but disappear, and the staff hours it frees up are worth far more than the printing cost. For a business where first impressions set the tone of the whole stay, a two-second connection is a surprisingly powerful welcome.',
        ],
        bullets: [
          'Copy the network name and password from the router, never from memory.',
          'Test every batch on iPhone and Android, on the real guest network, before distribution.',
          'Always print the network name and password in small text under the code for laptops.',
          'Reprint room cards in the same job whenever the guest WiFi password changes.',
          'Never post the guest WiFi QR code publicly on social media or your website.',
          'Keep the captive portal (if any) to one tap — no accounts, no room-number entry.',
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Do hotel guests need an app to scan a WiFi QR code?',
        answer:
          'No. Every modern iPhone (iOS 11 or later) and nearly every Android phone can scan a WiFi QR code with the built-in camera app — the guest points the camera at the code and taps “Join” or “Connect”. No app download, no account, and no typing. Older Android phones can use Google Lens, which does the same thing.',
      },
      {
        question: 'What happens when the hotel changes its WiFi password?',
        answer:
          'The old QR code stops working, because the password is stored inside the code itself. You will need to generate a new code with the new password and reprint the room cards and lobby stands. Keep the card design and code file together so a reprint takes minutes, and always scan-test the new code on iPhone and Android before distributing the batch.',
      },
      {
        question: 'Is a hotel WiFi QR code safe for guests?',
        answer:
          'Yes, with the right setup. The code should contain a dedicated guest network, never the network running the hotel’s booking system, cameras, or office computers. Use WPA2 or WPA3 encryption, enable client isolation so guests cannot reach each other’s devices, and never post the code publicly online, where anyone outside the hotel could use it.',
      },
      {
        question: 'Can one QR code work for all rooms in the hotel?',
        answer:
          'Yes — if every room connects to the same guest network, one code serves the whole property, and you can print the same card for every room, the lobby, and the restaurant. If different floors or wings use different networks, you need a separate code per network, so confirm the network layout with your router or IT setup before printing.',
      },
      {
        question: 'Does a WiFi QR code work with a captive portal login page?',
        answer:
          'It skips the password step but not the portal. After scanning, the guest joins the network and then sees your login or terms page as usual. To keep the experience smooth, make the portal a single “Accept and connect” tap with no account creation or room-number entry — otherwise the friction you removed with the code comes straight back.',
      },
      {
        question: 'Should the network name and password also be printed on the card?',
        answer:
          'Yes, always print them in small text under the QR code. Laptops cannot scan codes, some older phones cannot either, and a guest whose camera struggles with glare or a damaged card still needs a fallback. The printed details cost nothing and save the front desk from the exact calls the QR code was meant to eliminate.',
      },
    ],
    ctaTitle: 'Make Your Hotel WiFi QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create the code, print it on your room cards, and let guests connect with one scan.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
