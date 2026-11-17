import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForSalonData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Salon: Free Bookings & Payments',
    description:
      'Learn how to make a QR code for your salon free — take bookings, share your price list, collect payments and reviews.',
    badge: 'Guides',
    h1: 'QR Code for Salon',
    subheadline:
      'A QR code for a salon turns a walk-in into a booked client: customers scan the code on your mirror, reception desk, or business card and land straight on your booking page, price list, or payment link — no phone calls, no waiting at the desk, no "what are your charges?" messages at midnight. A salon runs on appointments, and every empty chair is money lost, so a code that lets clients book in thirty seconds while they are thinking about a haircut is one of the cheapest marketing tools a salon can own. The whole setup takes about ten minutes and costs nothing with a free static code — this guide covers which destinations to use, where to place the code so it actually gets scanned, and the mistakes that leave salon codes ignored.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Bookings in one scan',
        text: 'Point the code at your booking page or WhatsApp chat so clients book a slot without calling — fewer missed calls, fewer empty chairs.',
      },
      {
        label: 'Static is free, dynamic is flexible',
        text: 'A free static code works forever for a fixed booking link. Use a dynamic code if you change offers weekly or want to count scans.',
      },
      {
        label: 'Mirrors and chairs get scans',
        text: 'Place the code where clients sit still for 30–60 minutes — the mirror, the chair, the wash basin — not just the front door.',
      },
      {
        label: 'Reviews grow the salon',
        text: 'A second code linking to your Google review page turns happy clients into five-star reviews before they leave the chair.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'qr-code-for-salon-basics',
        heading: 'What Is a QR Code for a Salon?',
        paragraphs: [
          'A QR code for a salon is a scannable square that links a client\'s phone to something useful — usually your booking page, your price list, a payment link, or your Google review page. The client points their phone camera at the code, taps the notification, and the page opens in their browser. There is nothing to install and nothing to type, which matters in a salon: a client with wet hair and a phone in one hand is not going to type a long URL or download an app, but they will scan a code sitting on the mirror in front of them.',
          'Salons benefit from QR codes more than most local businesses because the whole business is built on repeat visits and empty slots. A client who walks out without booking their next appointment is a client you have to win back with a reminder call or a discount — and many simply drift to another salon. A QR code at the chair that opens your booking calendar turns the last five minutes of a haircut into a rebooking, when the client is happiest with the result and most likely to commit to a date. That one habit alone can lift rebooking rates noticeably.',
          'There are four main jobs a salon QR code does. The most valuable is the booking code: it opens your online booking page, a Google Business booking link, or a WhatsApp chat with a pre-filled "I want to book an appointment" message. The second is the price-list code: it opens your services and rates, so walk-ins can see the cost of a haircut, colour, or facial before they sit down — no awkward price questions, no surprises at billing. The third is the payment code: a UPI or card link at the reception desk that lets clients pay in seconds. And the fourth is the review code: a link to your Google Business review page that turns a satisfied client into a public five-star review while the experience is fresh.',
          'One code can only do one job well, so most salons use two or three codes in different spots: a booking code on the mirror and the business card, a price-list code at the reception desk and the entrance, and a review code at the billing counter. Each one points at a different destination, and each one sits where the client is doing that job — deciding, paying, or leaving happy. A single code trying to do everything usually points at a link page, and every extra tap between the scan and the booking costs you appointments.',
        ],
        callout: {
          title: 'The booking page is the destination, not the code',
          text: 'Clients do not care about the QR code — they care about what opens after the scan. A code that opens a slow page, a homepage with no booking button, or a form that asks for ten fields is worse than no code at all. Before you print anything, make sure the booking page loads in under three seconds on a phone, shows available slots clearly, and lets a client book in under a minute.',
          type: 'info',
        },
      },
      {
        id: 'how-to-make-qr-code-for-salon',
        heading: 'How to Make a QR Code for Your Salon (Step by Step)',
        paragraphs: [
          'Start by deciding the destination — the page the code will open. For a booking code, that is your booking page: a Google Business booking link, a scheduling tool like Fresha or Booksy, a simple Google Form, or a WhatsApp chat link. For a price-list code, it is the services page on your website or your Instagram highlights. For a payment code, it is your UPI payment link or payment page. Copy that link and keep it open, because it is the one thing the code will contain — and a wrong link means reprinting everything.',
          'Next, open a free QR code generator, choose the URL type, and paste the link into the destination field. Before you download, set the error correction level to High: a salon code lives near water, sprays, hair dye, and cleaning products, and High error correction lets the code keep scanning even when up to 30% of it is stained, faded, or scratched. If the generator offers a logo option, add your salon logo in the centre — it makes the code recognisable as yours and does not hurt scanning as long as the logo covers no more than about 30% of the code area.',
          'Choose the colours with scanning in mind. Dark modules on a white or very light background scan fastest; light modules on a dark background and low-contrast colour pairs (pink on white, gold on cream) fail under bright salon lights and in mirror reflections. If the code must sit on a coloured mirror frame or a dark wall, print it on a white sticker or a white square first, and always keep the quiet zone — the blank border around the code — clear of text, logos, and frame edges.',
          'Download the code as a PNG for screens and small stickers, and as a PDF or SVG for anything printed large, such as a standee at the entrance or a poster in the waiting area — vector files stay sharp at any size, while a PNG gets blurry when enlarged. Save the file with a name you will recognise, like "booking-mirror-qr.png", and then test it with a real phone before you print a single copy: scan it from the distance a client will sit at, in your salon lighting and in the mirror reflection, and confirm the right page opens fast. Only after that test should you send the file to print.',
        ],
        subsections: [
          {
            subheading: '1. Pick the destination link',
            text: 'Booking page, price list, payment link, or review page — copy the exact URL the code should open and check it loads fast on a phone.',
          },
          {
            subheading: '2. Paste it into a free generator',
            text: 'Choose the URL type, paste the link, set error correction to High, and add your salon logo if the generator offers it.',
          },
          {
            subheading: '3. Download PNG or SVG',
            text: 'PNG for mirror stickers and cards, SVG or PDF for standees and posters. Name the file so you can find it again.',
          },
          {
            subheading: '4. Scan-test at real distance',
            text: 'Scan with a phone from where clients actually sit, in salon light and mirror glare, before you print the batch.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator for creating a QR code for a salon booking page',
            caption: 'Paste your booking or price-list link into a free generator — a basic static code costs nothing and needs no account.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a salon QR code as PNG or SVG',
            caption: 'Download PNG for mirror stickers and cards, or SVG and PDF for large standees that stay sharp.',
          },
        ],
        callout: {
          title: 'Static or dynamic? Decide by how often the link changes',
          text: 'A free static code bakes the link into the pattern — it works forever and costs nothing, but if the link changes you must reprint. A dynamic code routes scans through a short redirect, so you can swap the destination (new booking tool, new offer, new price list) without reprinting, and you get scan counts. If your offers change every week or you run seasonal packages, dynamic pays for itself in saved reprints; if your booking link is stable, static is the right free choice.',
          type: 'tip',
        },
      },
      {
        id: 'salon-booking-qr-code',
        heading: 'Booking QR Code: Fill Empty Chairs Without Phone Calls',
        paragraphs: [
          'The booking code is the one that pays for itself. Put it on the mirror in front of every chair and on the back of your business card, and clients will book their next visit while they are still in the chair — the exact moment they are happiest with the cut or colour and most willing to commit. A salon that relies on clients remembering to call later loses a large share of rebookings to forgetfulness; a salon that offers a one-scan rebooking captures them before they leave.',
          'The destination matters more than the code. A proper booking tool — Google Business booking, Fresha, Booksy, or a similar scheduler — shows real available slots and confirms the booking instantly, so the client never has to wait for a reply. A Google Form works as a free fallback: the client picks a service, a date, and a time, and you confirm by message. WhatsApp booking is the simplest option of all for small salons: the code opens a chat with a pre-filled message like "Hi! I would like to book a haircut", and the client just sends it. It feels personal, every client already has WhatsApp, and you can reply with the slot and the price in one message.',
          'Whichever tool you use, keep the booking flow short. Every extra field is a client lost: name, service, date, and time are enough — do not ask for an email address, a home address, or a full registration before a first booking. Show the price of the service on the booking page itself, because a client who has to ask the price will often abandon the booking. And send an automatic reminder a day before the appointment: no-shows are the silent leak in a salon\'s income, and a single reminder message cuts them sharply.',
          'The same booking code works outside the salon too. Put it on your Instagram bio link page, on the salon\'s Google Business profile, on flyers, and on the back of the appointment card you hand to walk-ins. Every place a potential client sees your name should offer the same one-scan path to a booked slot. Track which placement brings bookings — the mirror code will usually win, because it catches clients at the moment of highest intent — and put your best code where it performs.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for URL, Wi-Fi, vCard and other salon QR code types',
            caption: 'One generator makes every code a salon needs — URL for bookings, a payment link for the counter, and a social link for the card.',
          },
        ],
      },
      {
        id: 'salon-price-list-qr-code',
        heading: 'Price List and Services QR Code: End the Awkward Price Question',
        paragraphs: [
          'Walk-in clients hesitate when they cannot see prices. A price-list code at the reception desk and the entrance removes that hesitation: clients scan, see the cost of a haircut, hair colour, keratin treatment, facial, or bridal package, and sit down already knowing what they will pay. That transparency does two things — it brings in clients who would otherwise walk past, and it ends the uncomfortable conversation at billing when the total is higher than the client expected.',
          'Keep the price list simple and honest. List each service with one price, or a clear range where the price depends on hair length — "Haircut ₹299–₹499 (short to long hair)" is far better than a single number that only applies to short hair. Add the duration next to each service, because a client choosing between a 30-minute haircut and a 3-hour colour session needs to know how long they will be in the chair. Mark add-ons clearly: a wash, a blow-dry, or a head massage that costs extra should say so on the list, not appear as a surprise on the bill.',
          'The price list is also where you sell the high-value services. A client who came in for a haircut will not ask about a keratin treatment unless they see it — so the list should present your premium services with a one-line benefit each, like "Keratin Treatment — frizz-free hair for 3–4 months". The same page can carry before-and-after photos, which do more to sell a colour or a bridal package than any description. Keep the page updated: a price list that still shows last year\'s rates will create exactly the billing argument it was meant to prevent.',
          'If you change prices often, link the code to a page you control — your website services page or an Instagram highlight — rather than a fixed PDF. A static code pointing at a page you can edit keeps every printed code current, while a code baked around a PDF file forces a reprint every time a price changes. If you must use a PDF, host it at a link you can replace without changing the URL, which is what a dynamic code gives you.',
        ],
      },
      {
        id: 'salon-payment-and-review-qr-code',
        heading: 'Payment, Tips, and Review QR Codes at the Counter',
        paragraphs: [
          'The payment code belongs at the billing counter, where the client is standing with their wallet out. A UPI QR code lets Indian clients pay in seconds from any banking app, and a card or wallet payment link does the same where UPI is not used. Print the bill total next to the code or show it on the counter display, so the client knows exactly what to type — and confirm the payment on your own phone before the client leaves. A client showing you their screen is not the same as money in your account.',
          'Tips are the quiet bonus of a payment code. A small "Leave a tip" code on the counter or the mirror, linked to your payment page, collects tips from clients who would never have carried cash to tip with — and in a salon, where the stylist\'s skill is the product, tips are often generous. Keep the tip code separate from the payment code: mixing them means a client cannot tell whether they are paying the bill or adding a tip, and that confusion costs you both.',
          'The review code is the highest-return code in the salon. Put a small code at the billing counter and on the mirror with one line next to it — "Loved your haircut? Scan to review us on Google" — and ask happy clients to scan it before they leave. A client who reviews while still sitting in the chair writes a longer, warmer review than one who gets a reminder message three days later. Those reviews are what new clients read before choosing between your salon and the one down the road, and a salon with 200 recent five-star reviews beats a salon with 20 old ones every time.',
          'Loyalty is the fourth counter job. A code linking to a simple loyalty signup — a Google Form or a WhatsApp message — that offers a free service after five visits turns one-time clients into regulars. Keep the reward simple and visible: "5 haircuts, the 6th wash free" printed next to the code works better than a complicated points system nobody understands. And never ask a client to download a loyalty app — a form or a chat message is enough, and an app request is where most loyalty schemes die.',
        ],
        callout: {
          title: 'Never mix payment and review codes',
          text: 'A client who scans the wrong code at the counter and lands on a payment page when they wanted to leave a review — or the reverse — will simply give up on both. Keep the payment code at the billing desk and the review code at the mirror or the exit, each with its own one-line label, and never print two unexplained codes side by side.',
          type: 'warning',
        },
      },
      {
        id: 'where-to-place-qr-code-in-salon',
        heading: 'Where to Place QR Codes in a Salon (and How Big)',
        paragraphs: [
          'Placement is the difference between a code that gets scanned twenty times a day and one that gets scanned never. The single best spot in a salon is the mirror in front of the chair: the client sits there for 30–60 minutes with nothing to do but look at their own reflection, and a small code stuck to the corner of the mirror — with a line like "Scan to book your next visit" — will be noticed by almost every client. It is the salon equivalent of the food truck\'s serving window: the place where the customer is waiting, and waiting people scan.',
          'The reception desk is the second spot. A code on the desk or a small standee covers the client who is checking in or paying — the booking code for the walk-in who wants a slot next week, the payment code for the client settling the bill, and the review code for the client leaving happy. The entrance and the waiting area are the third spot: a standee or a poster with the price-list code catches the walk-in who is deciding whether to come in, and the client waiting for their turn has time to browse services and offers.',
          'Do not forget what leaves the salon. The business card, the appointment card, and the takeaway bag are the cheapest advertising a salon gets: a booking code on the back of the card means a client who finds the card in their wallet three weeks later can book in one scan. The same applies to the carry bag and any product the salon sells — a small code linking to your Instagram or your booking page keeps the salon in the client\'s hand long after they leave.',
          'Size follows distance. A code on the mirror or the counter, scanned from arm\'s length, can be as small as 5 cm across. A code on a standee at the entrance, scanned from a metre away, needs to be at least 10 cm. A code on a window poster meant to be read from the street needs to be 20 cm or larger. The rule of thumb is simple: the scan distance divided by ten is the minimum code size, so a code scanned from 2 metres away should be at least 20 cm wide.',
        ],
        bullets: [
          'Mirror in front of every chair, eye level: the main booking code, 5–8 cm, with one line explaining it.',
          'Reception desk and billing counter: payment code and review code, 5–8 cm, where clients stand with their wallet out.',
          'Entrance standee and waiting area: price-list code, at least 10 cm, for walk-ins deciding whether to come in.',
          'Business cards, appointment cards, and carry bags: a booking code on the back, so clients can rebook weeks later.',
          'Laminate every code near water or sprays; wipe dye, spray, and cleaning film off daily and re-test each week.',
        ],
      },
      {
        id: 'salon-qr-code-mistakes',
        heading: 'Salon QR Code Mistakes That Cost You Clients',
        paragraphs: [
          'The most expensive mistake is a code that points at the wrong thing — usually the salon\'s homepage instead of the booking page, or a link that worked when the code was printed and broke when the booking tool changed. Clients who scan and land on a homepage have to hunt for the booking button, and most will not bother. Always link directly to the booking page, the price list, or the payment page, and re-scan every printed code whenever you change anything about your online presence.',
          'The second mistake is printing too small, too faint, or in the wrong colours. A 3 cm code on a mirror is decoration, not a tool, and a code printed in pink on white or gold on cream will fail under bright salon lights and in mirror glare, even if it scans perfectly on a screen. Dark on white, at the size the distance demands, with a clear quiet zone — that is the whole recipe, and skipping any part of it means the code only works when conditions are perfect, which in a busy salon they never are.',
          'The third mistake is forgetting water, dye, and spray. Salon codes live in the wettest room of any small business: a paper code near the wash basin will be unreadable within a week, and a code on the mirror will collect hairspray film within days. Laminate every code, or print on vinyl stickers, keep codes away from direct spray, and wipe them down every day. Test the codes every Monday morning — a code that worked last week can be unreadable today after a weekend of colour services.',
          'The fourth mistake is the dead end: a code that opens a page with no way to book, pay, or follow. Every scan should end in an action — a booking button, a payment link, a review button, or a follow button. A price list with no booking link is a missed appointment, and a booking page with no prices is a missed booking. And finally, never put a code in the salon and forget it: check the destination weekly, update prices and offers the day they change, and retire codes that point at old offers or old booking tools before a client follows one to a dead page.',
        ],
        callout: {
          title: 'Train your staff to point at the code',
          text: 'The best-placed code still needs a human nudge. Ask stylists to mention the mirror code once per client — "Scan this to book your next visit before you leave" — and to point at the review code while the client is happy with the result. A thirty-second mention from a stylist the client trusts is worth more than any poster.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make a QR code for my salon for free?',
        answer:
          'Copy your booking page link, paste it into a free QR code generator as a URL code, set error correction to High, and download the PNG. Print it at least 5 cm across for a mirror sticker and test it with a phone before printing more. A free static code works forever as long as the booking link stays the same — no account or payment needed.',
      },
      {
        question: 'Can clients book a salon appointment with a QR code?',
        answer:
          'Yes. Link the code to your booking tool (Google Business booking, Fresha, Booksy), a Google Form, or a WhatsApp chat with a pre-filled booking message. Clients scan the code on the mirror or your business card, pick a service and a slot, and book in under a minute — without calling the salon. Put the code where clients sit still, like the mirror, for the best rebooking rate.',
      },
      {
        question: 'Where should I put a QR code in my salon?',
        answer:
          'The mirror in front of every chair is the best spot — clients sit there for 30–60 minutes and scan while they wait. Next best are the reception desk (payment and review codes), the entrance standee (price-list code for walk-ins), and the back of your business card (booking code for later). Keep each code where the client is doing that job: booking at the mirror, paying at the counter.',
      },
      {
        question: 'Should I use a static or dynamic QR code for my salon?',
        answer:
          'Use a free static code if your booking link rarely changes — it costs nothing and works forever. Use a dynamic code if you run weekly offers, change your booking tool, or want to count scans per placement: the printed code stays the same while you swap the destination behind it, so you never reprint when a link changes. Dynamic codes usually need a paid plan.',
      },
      {
        question: 'Can I take payments with a QR code in my salon?',
        answer:
          'Yes — put a payment QR code at the billing counter. In India a UPI QR code lets clients pay in seconds from any banking app; elsewhere a card or wallet payment link works the same way. Print the bill total nearby so clients know what to pay, and confirm the payment on your own phone before the client leaves. Keep the tip code separate from the payment code.',
      },
      {
        question: 'How do I get more Google reviews for my salon with a QR code?',
        answer:
          'Link a QR code to your Google Business review page and place it at the billing counter and on the mirror with one line next to it, like "Loved your haircut? Scan to review us". Ask happy clients to scan it before they leave — a review written in the chair is longer and warmer than one requested days later, and recent five-star reviews are what new clients read before choosing your salon.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn your salon booking page, price list, or payment link into a clean, scannable QR code in under a minute — free, no sign-up, with your logo and colours, ready to print on your mirrors or cards.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
