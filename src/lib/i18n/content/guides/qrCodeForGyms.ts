import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForGymsData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Gym: Check-Ins, Classes & Sign-Ups (Free)',
    description:
      'Create a free QR code for your gym: member check-ins, class schedules, sign-ups, equipment demos and payments — no app, no sign-up, no expiry.',
    badge: 'Guides',
    h1: 'QR Code for Gym',
    subheadline:
      'A gym runs on moments when a member needs information right now: the class timetable at the door, the demo video for a machine they have never used, the sign-up form a walk-in is ready to fill in, the payment link at the front desk. A QR code for your gym turns each of those moments into a single scan — no app to download, no front-desk queue, no printed timetable that goes out of date the week after you print it. This guide shows you exactly where to put gym QR codes, how to create them free in under a minute, and the mistakes that make members ignore them.',
    readingTime: '9 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan, no app',
        text: 'Members scan with the camera app already on their phone — no gym app download, no account, and no front-desk help needed.',
      },
      {
        label: 'Put codes where the question happens',
        text: 'A class code belongs on the studio door, a machine demo code on the machine itself, a sign-up code at reception — placement decides whether a code gets scanned.',
      },
      {
        label: 'Dynamic codes for anything that changes',
        text: 'Class timetables, prices, and offers change constantly. A dynamic QR code lets you update the destination without reprinting anything.',
      },
      {
        label: 'Static codes for things that never change',
        text: 'Your Wi-Fi login, a fixed membership page, or a permanent feedback form can live on a free static code that never expires.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-qr-codes-work-in-a-gym',
        heading: 'Why QR Codes Work So Well in a Gym',
        paragraphs: [
          'Gyms are one of the few businesses where the customer is moving, sweaty, and in a hurry — and that is exactly why QR codes fit. A member standing in front of a cable machine does not want to walk to reception to ask how it works, download an app, or type a long URL into a browser with wet hands. They want to point their phone at something and get the answer in two seconds. A QR code delivers that: one scan opens the demo video, the timetable, the booking form, or the payment page, with nothing to install and nothing to remember.',
          'The second reason is that gym information changes constantly. Class times shift when an instructor is sick, a new batch of personal-training slots opens, a festive offer replaces last month’s price, and the weekend timetable differs from the weekday one. A printed poster with a fixed timetable is wrong within weeks. A QR code pointing at a live page — a Google Sheet, a booking tool, or your website’s timetable — stays correct no matter how often the underlying information changes, provided you use a dynamic code whose destination you can edit later. You print once and update forever.',
          'There is also a hygiene and staffing angle. Contactless check-in, self-serve class booking, and scan-to-pay reduce the queue at the front desk at peak hours — the 6–9 AM and 6–9 PM rushes when one receptionist is handling sign-ups, renewals, and questions at the same time. Members who can scan their way in, book their own class, and pay their own renewal free up your staff for the work that actually needs a human: selling memberships, coaching, and keeping members from quitting. For small gyms and independent studios, that is the difference between hiring another receptionist and not needing one.',
        ],
        callout: {
          title: 'The 3-second rule',
          text: 'If a member cannot understand what scanning will give them in 3 seconds, they will not scan. Every gym QR code needs a short label next to it: “Scan for today’s class schedule”, “Scan for a demo video”, “Scan to book a free trial”. A bare code with no label is decoration.',
          type: 'tip',
        },
      },
      {
        id: 'best-places-to-use-qr-codes',
        heading: 'Where to Put QR Codes in Your Gym',
        paragraphs: [
          'The single biggest mistake gyms make with QR codes is printing one code and sticking it on a wall where nobody stands still. Placement is the whole strategy. A useful rule: put the code exactly where the member has the question, at the height and size they can scan from where they are already standing. A code on the studio door gets scanned by people deciding whether to join a class. A code on a treadmill console gets scanned by someone already on the machine. A code buried in a poster behind the reception desk gets scanned by nobody.',
          'Start with the five placements that earn their keep fastest, and add more only once those are working. Each one below solves a specific, repeated member question — which is why members actually use them instead of ignoring them like most gym posters.',
        ],
        subsections: [
          {
            subheading: 'Front desk and entrance: sign-ups, trials, and check-in',
            text: 'A “Scan to book a free trial” code on the reception stand catches walk-ins who are curious but not ready for a sales conversation, and a “Scan to renew” code at the desk lets existing members pay without queueing. A check-in code at the entrance works for smaller gyms that do not run a turnstile system — members scan, the form logs their visit, and you get attendance data for free.',
          },
          {
            subheading: 'Studio doors: live class schedules and bookings',
            text: 'The class timetable changes more than anything else in a gym, so this is the perfect job for a dynamic code. A label like “Scan for this week’s classes” on each studio door sends members to a live timetable and booking form. When a class is cancelled or rescheduled, you update the page once and every printed code in the building is instantly correct.',
          },
          {
            subheading: 'On each machine: demo videos and correct form',
            text: 'New members are often too embarrassed to ask how a machine works, and incorrect form is how people get injured. A small laminated code on each machine linking to a 60-second demo video — your own, or the manufacturer’s — answers the question privately, reduces injury risk, and cuts the number of times trainers are interrupted to explain the same machine.',
          },
          {
            subheading: 'Changing rooms and washrooms: Wi-Fi, feedback, and offers',
            text: 'The changing room is where members actually have their phone in hand and a free minute. A Wi-Fi QR code here gets members onto your network without anyone having to dictate a password, a feedback-form code catches complaints and praise while the visit is fresh, and a referral-offer code (“Scan to invite a friend — both get a free week”) turns your happiest members into recruiters.',
          },
          {
            subheading: 'Outside the gym: posters, flyers, and local ads',
            text: 'A QR code on a poster in a nearby cafe, a housing-society noticeboard, or a local newspaper ad turns a static ad into a measurable one: scans tell you which poster locations actually bring trials. Link these codes to a trial-booking page with a location-specific note so you can see which neighbourhood is responding.',
          },
        ],
      },
      {
        id: 'create-a-gym-qr-code-step-by-step',
        heading: 'How to Create a QR Code for Your Gym (Step by Step)',
        paragraphs: [
          'You do not need a gym management app, a paid QR platform, or any design skill to start. The whole process takes about a minute per code, and you can make all five starter codes in one sitting. First, decide what each code should open: a web page for timetables and sign-ups, a video link for machine demos, a Wi-Fi login for the changing room, or a payment link for renewals. Write that destination down before you open the generator — creating a code for a page that does not exist yet is the most common reason gym codes end up linking to the wrong place.',
          'Next, open the free QR code generator and pick the content type that matches your destination. For most gym uses, the URL type is the right choice: paste the link to your timetable, booking form, demo video, or payment page into the content field. For the Wi-Fi code, use the Wi-Fi type and enter your network name, password, and security type — members who scan it join the network automatically, without typing anything. The generator builds the code live in the preview as you type, so you can see exactly what you are about to print.',
          'Then customise the code so it looks like it belongs to your gym, not a generic printout. Add your gym’s brand colour to the code itself and, if you want, your logo in the centre — but keep the logo small (no more than about 30% of the code’s width) and test the scan afterwards, because a logo that is too large breaks scanning. For codes that will be printed on machines and doors, keep the design high-contrast: dark code on a light background scans far more reliably under gym lighting than a stylish low-contrast colour scheme.',
          'Finally, download the code as a PNG at high resolution for anything that will be printed — posters, laminated machine cards, and door signs need a larger, sharper file than a code that will only appear on a screen or a social post. Print one test copy, stick it where it will actually live, and scan it from the distance a member would stand at, under the real lighting. A code that scans perfectly on your laptop screen can fail on a glossy laminated card under fluorescent lights, and catching that now costs you one test print instead of a whole batch.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage where a gym owner can create a QR code for a gym',
            caption: 'The free generator homepage — pick a content type, paste your link, and the code builds live in the preview.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing URL, Wi-Fi, text and other options for a gym QR code',
            caption: 'Choose URL for timetables, bookings and payments, or Wi-Fi for the changing-room network code.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a gym QR code as a PNG for printing',
            caption: 'Download a high-resolution PNG for posters, door signs, and laminated machine cards.',
          },
        ],
      },
      {
        id: 'class-schedules-and-bookings',
        heading: 'QR Codes for Class Schedules and Bookings',
        paragraphs: [
          'Class schedules are the highest-traffic use of gym QR codes because they solve a daily frustration: the printed timetable on the wall is always one change behind reality. Link your studio-door codes to a single page you can update in seconds — a page on your website, a Google Sheet published to the web, or a booking tool like a Google Form or a free scheduling app. When an instructor calls in sick at 7 AM, you update the page once; every code in the building, every poster in the neighbourhood, and every code a member photographed last week now shows the corrected schedule. No reprinting, no crossed-out times, no member turning up for a cancelled class.',
          'Booking through a code works best when the form asks for as little as possible: name, phone number, and class. Every extra field costs you bookings, because a member booking from the studio door is standing, not sitting at a desk. If your booking tool supports it, show remaining seats on the form — scarcity is honest here, since a class genuinely has a capacity, and it stops the awkward moment when twenty people turn up for a twelve-mat class. For paid workshops and special sessions, the same code can point at a booking form with a payment link attached, so the member books and pays in one flow instead of booking now and paying “later” (which usually means never).',
          'One practical detail matters more than any other: the timetable page must load fast on a phone and be readable without pinching and zooming. A PDF of your timetable is a common shortcut, but a PDF that downloads slowly on gym Wi-Fi and renders tiny on a phone screen will cost you scans. A simple mobile web page — even a plain published spreadsheet — beats a pretty PDF every time, because the member is scanning while standing in a corridor, not studying a document at a desk.',
        ],
        callout: {
          title: 'One code per studio, not one code for the whole gym',
          text: 'A single “scan for classes” code that dumps members onto a page with all studios, all days, and all levels forces them to hunt. A code on the yoga studio door should open the yoga timetable. Specificity is what makes scanning feel instant instead of feeling like work.',
          type: 'info',
        },
      },
      {
        id: 'memberships-payments-check-ins',
        heading: 'Membership Sign-Ups, Payments, and Check-Ins',
        paragraphs: [
          'The front desk is where QR codes save the most staff time, because sign-ups, renewals, and check-ins are repetitive tasks that a form can handle better than a person. A “Scan to join” code at reception linked to your membership form lets a walk-in start the process while the receptionist is busy with someone else — by the time they are free, the form is already filled in and the conversation starts at the sale, not at spelling out a name and phone number. The same logic applies to renewals: a “Scan to renew” code linked to your payment page lets a member pay in under a minute instead of waiting behind three other people.',
          'For payments, link the code to a payment link from your existing provider — a UPI collect link, a payment-gateway link, or your booking platform’s checkout — rather than inventing a new payment flow. The member already trusts their bank’s payment screen; what the QR code adds is removing the step where the receptionist reads out a number or the member types a long link by hand. Always test the payment code yourself with a small amount before printing it, and label it with the exact amount or plan it covers (“Scan to pay the ₹2,000 monthly plan”) so nobody pays the wrong plan by mistake.',
          'Check-in codes suit smaller gyms that do not run turnstiles or biometric systems. The code opens a short form — name or member ID, and optionally the time slot — and each submission becomes an attendance record you can review in a spreadsheet. That record is genuinely useful: it shows your real peak hours (so you staff them properly), which members have gone quiet (so you can follow up before they cancel), and which classes are consistently full (so you add a second batch). A code-based check-in is not a security system — anyone can scan it — so if access control matters to you, pair it with a staff glance at the door rather than relying on the form alone.',
        ],
        bullets: [
          'Sign-up code at reception: link to your membership or free-trial form, not to your homepage — every extra click loses walk-ins.',
          'Renewal code at the desk: label it with the plan and amount so members never pay the wrong tier by mistake.',
          'Check-in code at the entrance: keep the form to name and member ID only; a long form at the door creates a queue of its own.',
          'Referral code in the changing room: “Scan to invite a friend” with a reward for both sides turns members into your cheapest marketing channel.',
        ],
      },
      {
        id: 'printing-and-mistakes-to-avoid',
        heading: 'Printing Tips and Mistakes That Kill Gym QR Codes',
        paragraphs: [
          'Print size is where most gym QR codes fail, and the rule is simple: a code should be at least 2 cm wide for every metre of scanning distance, and never smaller than about 3 cm on a side for anything scanned from arm’s length. A machine card scanned from half a metre away can be 4–5 cm; a door sign scanned from a metre away should be at least 8–10 cm; a poster scanned from across a lobby needs to be much larger. Print on matte or laminated-matte material, not glossy, because glare from overhead gym lights is the most common reason a perfectly good code refuses to scan. And always add a quiet zone — a blank margin of at least four modules (the little squares) around the code — because a code printed flush against a coloured border or a logo often fails even though it looks fine.',
          'The second failure mode is a dead destination. Codes get printed, then the linked page moves, the offer expires, the Google Form is closed, or the video is deleted — and the code silently stops working. Once a month, walk the gym with your phone and scan every code you have printed. It takes ten minutes and catches dead links before a member does. If a code links to something that changes often, use a dynamic code so you can fix the destination without reprinting; if it links to something permanent, a free static code is fine, but still check it in the monthly walk.',
          'Finally, respect member privacy. A feedback-form code should say whether responses are anonymous, a check-in form should collect only what you actually use, and a code that opens a WhatsApp chat should make that obvious before the scan (“Scan to chat with us on WhatsApp”) rather than surprising members with a chat window. Members trust a gym with their health data and their payment details; a QR code system that is transparent about what happens after the scan earns that trust, and one that harvests data silently loses it. Keep every code’s destination honest, labelled, and useful, and members will keep scanning.',
        ],
        callout: {
          title: 'The monthly 10-minute scan walk',
          text: 'Once a month, walk your gym and scan every printed code. Dead links, outdated offers, and glare problems are all caught in one pass — before a member finds them for you.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How much does it cost to make a QR code for a gym?',
        answer:
          'Nothing, if you use a free static QR code generator: you can create codes for your timetable, booking form, Wi-Fi, or payment link at no cost, with no sign-up and no expiry. Paid dynamic QR platforms charge a monthly fee, but they are only worth it if you need to change a code’s destination after printing or track scan counts — most small gyms can start free and upgrade later.',
      },
      {
        question: 'Should a gym use a static or dynamic QR code?',
        answer:
          'Use static codes for things that never change — your Wi-Fi login, a fixed membership page, or a permanent feedback form. Use dynamic codes for anything that changes: class timetables, prices, seasonal offers, and trial campaigns. The dynamic code’s destination can be edited later, so a timetable change never forces a reprint. If you print a static code for a timetable, you will be reprinting it within weeks.',
      },
      {
        question: 'Do gym members need to download an app to scan a QR code?',
        answer:
          'No. Every modern Android phone and iPhone scans QR codes with the built-in camera app — members just point the camera at the code and tap the notification that appears. That is the whole advantage over a gym app: there is nothing to install, no account to create, and no password to remember, so even a first-time visitor can use the code in seconds.',
      },
      {
        question: 'How big should a QR code be when printed in a gym?',
        answer:
          'At least 2 cm of code width per metre of scanning distance, and never smaller than about 3 cm for arm’s-length scanning. A machine card scanned from half a metre away works at 4–5 cm, a door sign scanned from a metre away should be 8–10 cm, and a lobby poster needs to be larger still. Print on matte material to avoid glare from overhead lights, and leave a blank margin around the code.',
      },
      {
        question: 'Can one QR code handle both check-in and payment?',
        answer:
          'Not well. A QR code opens one destination, so a code that tries to do everything forces members to choose on a landing page — and most will not. Print separate, clearly labelled codes instead: one for check-in at the entrance, one for renewals at the desk, one for the timetable on the studio door. Specific codes scanned in the right place beat one generic code every time.',
      },
      {
        question: 'Can a QR code give members the gym Wi-Fi password?',
        answer:
          'Yes — that is one of the best gym uses. A Wi-Fi QR code encodes your network name, password, and security type, so a member who scans it joins the network automatically without typing anything. Put it in the changing room, where members have their phone in hand, and rotate the password occasionally — updating one Wi-Fi code is far easier than telling every member a new password by hand.',
      },
    ],
    ctaTitle: 'Make Your Gym QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create a code for your timetable, booking form, Wi-Fi, or membership page and print it today.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
