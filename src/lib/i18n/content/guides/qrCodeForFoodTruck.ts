import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForFoodTruckData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Food Truck: Free Menu & Ordering',
    description:
      'Learn how to make a QR code for your food truck free — link your menu, take orders, collect payments and tips, and print codes that survive a busy service.',
    badge: 'Guides',
    h1: 'QR Code for Food Truck',
    subheadline:
      'A QR code for a food truck turns a queue into a line that moves: customers scan the code on your window or counter, read the menu on their own phone, and order or pay without crowding your serving hatch. No printed menus to reprint when a dish sells out, no shouting orders over a generator, and no cash-only bottleneck at the busiest hour. The whole setup takes about ten minutes and costs nothing if you use a free static code — the rest of this guide is about choosing the right destination, placing the code where people actually scan it, and avoiding the mistakes that leave a truck full of hungry people staring at a dead link.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Menu on a phone, not paper',
        text: 'Point the code at a live online menu or a menu PDF — when a dish sells out, you update the menu once and every printed code shows the change.',
      },
      {
        label: 'Static is free, dynamic is flexible',
        text: 'A free static code works forever for a fixed menu link. Use a dynamic code if you change locations daily or want scan counts.',
      },
      {
        label: 'Size and placement decide scans',
        text: 'Print at least 5 cm across on the serving window and counter, weatherproof and at eye level — a tiny code on a bumper sticker does not get scanned.',
      },
      {
        label: 'Order-ahead cuts the queue',
        text: 'Link the code to an order form or payment page so customers pay before they reach the hatch — the truck serves faster and sells more per hour.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'qr-code-for-food-truck-basics',
        heading: 'What Is a QR Code for a Food Truck?',
        paragraphs: [
          'A QR code for a food truck is a scannable square that links a customer\'s phone to something useful — usually your menu, an order form, or a payment page. The customer points their phone camera at the code, taps the notification, and the menu opens in their browser. There is nothing to install and nothing to type, which is exactly the point: people standing in a queue at a food festival are not going to download an app or type a long URL, but they will scan a code that is right in front of them.',
          'Food trucks benefit more from QR codes than almost any other small business, because the whole operation runs on speed and space. The truck has no dining room, no printed menu on every table, and no room for a cashier to take orders one at a time. A QR code moves the menu-reading and the order-taking off the hatch and onto the customer\'s own phone, so the person at the window only has to confirm and hand over food. On a busy evening that difference can mean serving twenty extra customers an hour.',
          'There are four main jobs a food truck QR code does. The most common is the menu code: it opens your full menu with prices, photos, and allergen notes. The second is the order code: it opens a simple order form — Google Form, a WhatsApp chat, or an ordering platform — so customers submit their order and pay before they reach the hatch. The third is the payment code: a UPI, card, or wallet link that lets people pay without cash or a card machine. And the fourth is the follow code: a link to your Instagram, a review page, or a loyalty signup that turns a one-time customer into a regular who knows where the truck is next week.',
          'One code can do only one job well, so most trucks use two or three codes in different spots: a big menu code on the serving window, a smaller order-and-pay code at the counter, and a follow code on the napkin holder or the takeaway bag. Each one points at a different destination, and each one is placed where the customer is doing that job — reading, ordering, or paying. A single code trying to do everything usually ends up pointing at a link page, and every extra tap between the scan and the menu costs you customers.',
        ],
        callout: {
          title: 'The menu is the destination, not the code',
          text: 'Customers do not care about the QR code — they care about what opens after the scan. A code that opens a slow, desktop-only PDF or a broken link is worse than no code at all. Before you print anything, make sure the menu page loads in under three seconds on a phone, shows prices clearly, and works on patchy festival Wi-Fi or mobile data.',
          type: 'info',
        },
      },
      {
        id: 'how-to-make-qr-code-for-food-truck',
        heading: 'How to Make a QR Code for Your Food Truck (Step by Step)',
        paragraphs: [
          'Start by deciding the destination — the page the code will open. For a menu code, that is usually your menu page: a page on your website, a Google Docs or PDF menu hosted online, or a digital menu service. For an order code, it is your order form or ordering platform link. For a payment code, it is your UPI payment link or payment page. Copy that link and keep it open, because it is the one thing the code will contain — and a wrong link means reprinting everything.',
          'Next, open a free QR code generator, choose the URL type, and paste the link into the destination field. Before you download, set the error correction level to High: a food truck code lives outdoors in sun, rain, and grease, and High error correction lets the code keep scanning even when up to 30% of it is scratched, faded, or splashed. If the generator offers a logo option, add your truck logo in the centre — it makes the code recognisable as yours and does not hurt scanning as long as the logo covers no more than about 30% of the code area.',
          'Choose the colours with scanning in mind. Dark modules on a white or very light background scan fastest; light modules on a dark background and low-contrast colour pairs (yellow on white, red on orange) fail in bright sunlight and under the warm lights of an evening service. If the code must sit on a coloured panel, print it on a white sticker or a white square first, and always keep the quiet zone — the blank border around the code — clear of text, logos, and panel edges.',
          'Download the code as a PNG for screens and small stickers, and as a PDF or SVG for anything printed large, such as the serving window or a banner — vector files stay sharp at any size, while a PNG gets blurry when enlarged. Save the file with a name you will recognise, like "menu-window-qr.png", and then test it with a real phone before you print a single copy: scan it from the distance a customer will stand at, in daylight and under your evening lights, and confirm the right page opens fast. Only after that test should you send the file to print.',
        ],
        subsections: [
          {
            subheading: '1. Pick the destination link',
            text: 'Menu page, order form, or payment link — copy the exact URL the code should open and check it loads fast on a phone.',
          },
          {
            subheading: '2. Paste it into a free generator',
            text: 'Choose the URL type, paste the link, set error correction to High, and add your truck logo if the generator offers it.',
          },
          {
            subheading: '3. Download PNG or SVG',
            text: 'PNG for stickers and screens, SVG or PDF for window decals and banners. Name the file so you can find it again.',
          },
          {
            subheading: '4. Scan-test at real distance',
            text: 'Scan with a phone from where customers actually stand, in daylight and evening light, before you print the batch.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator for creating a QR code for a food truck menu link',
            caption: 'Paste your menu or order link into a free generator — a basic static code costs nothing and needs no account.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a food truck QR code as PNG or SVG',
            caption: 'Download PNG for stickers and screens, or SVG and PDF for large window decals that stay sharp.',
          },
        ],
        callout: {
          title: 'Static or dynamic? Decide by how often the link changes',
          text: 'A free static code bakes the link into the pattern — it works forever and costs nothing, but if the link changes you must reprint. A dynamic code routes scans through a short redirect, so you can swap the destination (new menu, new location, new order form) without reprinting, and you get scan counts. If your truck moves daily or your menu changes weekly, dynamic pays for itself in saved reprints; if your menu is stable, static is the right free choice.',
          type: 'tip',
        },
      },
      {
        id: 'food-truck-menu-qr-code',
        heading: 'Menu QR Code: Link, PDF, or Digital Menu?',
        paragraphs: [
          'The simplest menu destination is a menu page on your website or social profile. It loads fast, you can update prices and sold-out dishes in seconds, and customers can search it or zoom the text. If you do not have a website, a Google Docs menu set to "Anyone with the link" works surprisingly well: it is free, editable from your phone between services, and always shows the latest version. The trade-off is that Docs pages are not designed as menus, so keep the layout simple — dish name, price, and a short description per line, with sections for mains, sides, drinks, and allergens.',
          'A PDF menu is the other common choice. It looks exactly like your printed menu, which customers like, but it has real downsides on a phone: the file must download before it opens, small text needs pinch-zooming, and updating the menu means uploading a new PDF and — with a static code — generating a new code. A PDF menu works best when the link behind the code is a hosted file you can replace without changing the URL, which is exactly what a dynamic code gives you: swap the file, keep the printed code.',
          'Digital menu services built for food businesses sit in the middle. They give you a mobile-first menu page with photos, add-ons, and sold-out toggles, and some include ordering and payment in the same page. They usually charge a monthly fee or take a percentage of orders, so weigh that against the time you save — a truck that changes its menu daily or runs out of dishes by 8 pm will get real value from a one-tap sold-out toggle, while a truck with a fixed five-item menu will not.',
          'Whichever destination you choose, three details matter more than the platform. First, the menu must show prices — customers who cannot see prices will not order, and they will not ask. Second, mark allergens and vegetarian or vegan options clearly; a menu that hides this information sends those customers to the next truck. Third, keep the menu short: a food truck menu with forty items is slow to read on a phone and slow to cook in a small kitchen. Ten to fifteen items, well described, sell better than a catalogue.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for URL, Wi-Fi, vCard and other food truck QR code types',
            caption: 'One generator makes every code a truck needs — URL for the menu, a payment link for the counter, and a social link for the takeaway bag.',
          },
        ],
      },
      {
        id: 'food-truck-order-and-pay-qr-code',
        heading: 'Order-Ahead and Payment QR Codes: Cut the Queue',
        paragraphs: [
          'The biggest win a QR code gives a food truck is order-ahead. Instead of a customer reading the menu at the hatch, deciding, ordering, and then waiting while you cook, the order arrives before they reach the window. The simplest version is a Google Form linked to the code: the customer picks dishes, adds their name, and submits. You see the orders on a phone or tablet at the hatch and call names when food is ready. It costs nothing, takes ten minutes to set up, and on a busy night it can cut the average wait from fifteen minutes to five.',
          'WhatsApp ordering works the same way for trucks that already take orders by chat. The code opens a WhatsApp chat with a pre-filled message like "Hi! I would like to order", and the customer types their order. It feels personal, customers already have WhatsApp installed, and you can reply with the total and a pickup time. The downside is that one person has to watch the phone and type back, which gets hard when ten orders land at once — so WhatsApp ordering suits quieter services, while a form or an ordering platform suits the rush.',
          'Payment codes remove the cash bottleneck entirely. A UPI QR code at the counter lets customers pay in seconds with their own banking app, and a card or wallet payment link does the same where UPI is not used. Put the payment code where the customer is standing with their food in hand — at the pickup counter, not the menu board — and print the price or the order total nearby so people are not guessing what to type. Confirm each payment on your own phone before handing over the food; a customer showing you their screen is not the same as money in your account.',
          'Tips are the quiet bonus. A small "Leave a tip" QR code on the counter or the takeaway bag, linked to your payment page, collects tips from customers who would never have carried cash to tip with. Keep the tip code separate from the payment code — mixing them means a customer cannot tell whether they are paying for food or adding a tip, and that confusion costs you both.',
        ],
        callout: {
          title: 'Always have a cash and card fallback',
          text: 'QR ordering and payment depend on the customer having a charged phone and a data signal. Festival Wi-Fi fails, phones die, and some customers simply prefer cash. Keep a printed menu behind the counter and a card reader or cash box ready — the QR system should speed up the 80% who use it, not lock out the 20% who cannot.',
          type: 'warning',
        },
      },
      {
        id: 'where-to-put-qr-code-on-food-truck',
        heading: 'Where to Put QR Codes on a Food Truck (and How Big)',
        paragraphs: [
          'Placement is the difference between a code that gets scanned fifty times a night and one that gets scanned never. The menu code belongs on the serving window, at eye level, on the side where the queue forms — customers read the menu while they wait, which is exactly when they have nothing else to do. A second menu code on the side of the truck catches people walking past, and a third on the counter serves the customer who has already decided and just needs the order link. One code per job, in the spot where that job happens.',
          'Size follows distance. A code scanned from arm\'s length — the counter, a table tent, the napkin holder — can be as small as 5 cm across. A code on the serving window, scanned from a metre away in a queue, needs to be at least 10 cm across. A code on the side of the truck, meant to be scanned from two or three metres away as people walk past, needs to be 20 cm or larger. The rule of thumb is simple: the scan distance divided by ten is the minimum code size, so a code scanned from 2 metres away should be at least 20 cm wide.',
          'Weatherproofing is not optional on a truck. Laminate paper codes, or better, print on vinyl stickers and window decals that survive rain, steam from the kitchen, and daily wiping. Grease is the silent killer of food truck codes: a code near the cooking hatch gets a film of oil within days, so wipe the codes down every service and keep the menu code on the customer side of the window, away from the fryer steam. Test the codes every morning before service — a code that worked on Monday can be unreadable by Friday after a week of sun and cleaning spray.',
          'Do not forget the takeaway bag and the cup. A small code on the bag or cup that links to your Instagram, your location schedule, or a review page turns every order into a reminder of where to find you next. Customers throw away flyers, but they carry the bag for ten minutes and the cup for twenty — that is the cheapest advertising a truck gets. Print the code with one short line next to it, like "Scan to see where we are tomorrow", because a bare code with no explanation gets ignored.',
        ],
        bullets: [
          'Serving window, eye level, queue side: the main menu code, at least 10 cm across.',
          'Counter and pickup point: order and payment codes, 5–8 cm, where customers stand with food in hand.',
          'Side of the truck: a large menu or follow code, 20 cm or more, for people walking past.',
          'Takeaway bags, cups, and napkin holders: a small follow or review code with one line explaining it.',
          'Laminate or vinyl-print every outdoor code; wipe grease and steam film off daily and re-test each morning.',
        ],
      },
      {
        id: 'food-truck-qr-code-mistakes',
        heading: 'Food Truck QR Code Mistakes That Cost You Sales',
        paragraphs: [
          'The most expensive mistake is a code that points at the wrong thing — usually a homepage instead of the menu, or a link that worked when the code was printed and broke when the menu page moved. Customers who scan and land on a homepage have to hunt for the menu, and most will not bother. Always link directly to the menu page, the order form, or the payment page, and re-scan every printed code whenever you change anything about your online menu.',
          'The second mistake is printing too small or too faint. A 3 cm code on the side of a truck is decoration, not a tool, and a code printed in your brand colours at low contrast will fail in bright sunlight even if it scans perfectly indoors. Dark on white, at the size the distance demands, with a clear quiet zone — that is the whole recipe, and skipping any part of it means the code only works when conditions are perfect, which at an outdoor event they never are.',
          'The third mistake is forgetting the customer\'s phone. A menu page that is a 10 MB PDF, a site full of pop-ups, or a page that demands an app download will lose the sale — especially at festivals where the mobile signal is shared by thousands of people. Keep the menu page light, skip the pop-ups, and never force an app install. If the page does not load in three seconds on a slow connection, it is too heavy.',
          'The fourth mistake is the dead end: a code that opens a menu with no way to order, pay, or find the truck again. Every scan should end in an action — an order button, a payment link, a location schedule, or a follow button. A menu with no next step is a missed sale and a missed regular. And finally, never put a code on the truck and forget it: check the destination weekly, update sold-out dishes daily, and retire codes that point at old menus or old locations before a customer follows one to a truck that moved last month.',
        ],
        callout: {
          title: 'Update the location, not just the menu',
          text: 'Food trucks move, and a QR code that still shows last week\'s location sends customers to an empty car park. If you use a dynamic code, point it at a page that lists today\'s location and hours and update it every morning. If you use static codes, put the location schedule on your Instagram or a link page — and keep that page current, because it is the page your codes actually open.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make a QR code for my food truck menu for free?',
        answer:
          'Copy your menu page link, paste it into a free QR code generator as a URL code, set error correction to High, and download the PNG. Print it at least 10 cm across for the serving window and test it with a phone before printing more. A free static code works forever as long as the menu link stays the same — no account or payment needed.',
      },
      {
        question: 'Can customers order food with a QR code at a food truck?',
        answer:
          'Yes. Link the code to an order form (Google Form is free), a WhatsApp chat with a pre-filled message, or an ordering platform. Customers pick dishes and pay before reaching the hatch, so you cook and hand over food instead of taking orders one by one. On a busy night this can cut wait times from fifteen minutes to about five.',
      },
      {
        question: 'How big should a QR code be on a food truck?',
        answer:
          'It depends on the scanning distance: divide the distance by ten. A counter code scanned from arm\'s length can be 5 cm across, a serving-window code scanned from a metre away should be at least 10 cm, and a code on the side of the truck scanned from two or three metres needs to be 20 cm or larger. Always test at the real distance before printing.',
      },
      {
        question: 'Should I use a static or dynamic QR code for my food truck?',
        answer:
          'Use a free static code if your menu link rarely changes — it costs nothing and works forever. Use a dynamic code if your truck moves daily, your menu changes weekly, or you want to count scans: the printed code stays the same while you swap the destination behind it, so you never reprint when the link changes. Dynamic codes usually need a paid plan.',
      },
      {
        question: 'Can I take payments with a QR code on my food truck?',
        answer:
          'Yes — put a payment QR code at the pickup counter. In India a UPI QR code lets customers pay in seconds from any banking app; elsewhere a card or wallet payment link works the same way. Print the order total nearby so customers know what to pay, and confirm the payment on your own phone before handing over the food.',
      },
      {
        question: 'Do QR codes work on a food truck in sunlight and rain?',
        answer:
          'Yes, if they are printed right. Use High error correction so the code still scans when up to 30% is damaged, print dark modules on a white background for contrast, and use vinyl stickers or laminated prints instead of plain paper. Keep codes on the customer side of the window away from fryer steam, wipe grease off daily, and re-test every code each morning before service.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn your food truck menu, order form, or payment link into a clean, scannable QR code in under a minute — free, no sign-up, with your logo and colours, ready to print on your window or counter.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
