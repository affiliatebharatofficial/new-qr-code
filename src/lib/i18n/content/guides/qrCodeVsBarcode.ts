import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeVsBarcodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code vs Barcode: Key Differences Explained',
    description:
      'QR code vs barcode explained: capacity, scan speed, cost, and when to use each. Learn which fits your business, and make a free QR code.',
    badge: 'Guides',
    h1: 'QR Code vs Barcode: Which One Should You Use?',
    subheadline:
      'Walk into any shop and you will see both: the familiar striped barcode on every product packet, and the square QR code on posters, menus, and payment counters. They look like cousins, but they work very differently — and picking the wrong one costs you either money or capability. A barcode is cheap, fast, and perfect for checkout counters, but it holds barely a few dozen characters and needs a dedicated scanner. A QR code holds thousands of characters, survives damage, and scans with any phone camera, but it needs a screen or a printout and a little more thought about what it links to. This guide compares the two honestly — capacity, speed, cost, durability, and real-world uses — so you can choose the right one for your shop, product, or campaign.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Capacity is the big gap',
        text: 'A standard barcode holds about 20–25 characters; a QR code holds up to 4,296 alphanumeric characters — roughly 200 times more data in a smaller space.',
      },
      {
        label: 'Barcodes win at the checkout',
        text: 'For retail point-of-sale scanning, barcodes are cheaper, faster to integrate, and already built into every POS system and product database.',
      },
      {
        label: 'QR codes win on phones',
        text: 'Any smartphone camera scans a QR code — no special hardware. That makes QR codes the right choice for customers, menus, payments, and marketing.',
      },
      {
        label: 'Use both when it fits',
        text: 'Many businesses print a barcode for the till and a QR code for the customer on the same pack. They solve different problems and coexist happily.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'barcodes-at-a-glance',
        heading: 'Barcodes at a Glance: The Stripes That Run Retail',
        paragraphs: [
          'A barcode is a one-dimensional code: a series of vertical black bars of varying widths, with white gaps between them, that encode a short string of numbers. The most common type, the UPC barcode you see on retail products, stores a 12-digit product number that acts as a key — the number itself means nothing until a shop’s system looks it up in a database and finds the product name and price. Other formats, like Code 128, can store letters as well as numbers, but the total capacity stays small: typically 20 to 25 characters before the bars become so long and thin that scanners struggle to read them.',
          'Barcodes are read with a laser or image scanner that sweeps across the bars in one line, which is why alignment matters: the scanner beam must cross the full width of the code, roughly horizontally. Modern handheld scanners are forgiving about angle, but a barcode still has to be presented the right way up, and it must be printed at a reasonable size with good contrast. That is one reason checkout scanning is so fast in practice — cashiers develop a flick of the wrist that presents each product’s barcode to the scanner in a fraction of a second, thousands of times a day.',
          'The real strength of barcodes is not the code itself but the ecosystem behind it. Decades of retail infrastructure — POS software, inventory systems, warehouse scanners, and global product-number registries like GS1 — are built around barcodes. A barcode number is unique to a product worldwide, which is why a supermarket in one country and a warehouse in another can both scan the same packet and agree on what it is. For anything that moves through a supply chain or across a checkout counter, that standardisation is worth more than any technical feature.',
        ],
        callout: {
          title: 'The key insight',
          text: 'A barcode is an ID number, not a message. It points to a record in a database; the database holds the actual information. If your system has no database to look the number up in, a barcode gives you almost nothing.',
          type: 'info',
        },
      },
      {
        id: 'qr-codes-at-a-glance',
        heading: 'QR Codes at a Glance: Two Dimensions, Far More Data',
        paragraphs: [
          'A QR code is a two-dimensional code: a square grid of black and white modules that stores data both horizontally and vertically. Invented in 1994 by Denso Wave for tracking car parts in factories, it was standardised as ISO/IEC 18004 and later adopted worldwide when smartphones put a scanner in every pocket. A single QR code can hold up to 7,089 numeric characters or 4,296 alphanumeric characters — enough for a full web address, a WiFi password, a chunk of text, or a vCard contact. In practice most QR codes link to a URL, because a short link keeps the code simple and scannable.',
          'QR codes scan differently from barcodes. A phone camera reads the whole square at once, from any angle and any rotation, and the three large squares in the corners tell the camera exactly where the code is and how it is oriented. That omnidirectional scanning is why a QR code on a poster, a curved bottle, or a phone screen still works when a barcode would struggle. It also means distance matters less: a large QR code on a billboard can be scanned from metres away, while a barcode needs to be close to the scanner.',
          'The other defining feature is error correction. QR codes carry built-in redundancy at four levels (L, M, Q, H), so a code can still scan even if up to 30% of it is damaged, dirty, or covered — which is exactly why you can print a logo in the middle of a QR code and it still works. That robustness is why QR codes survive real-world abuse: rain on a poster, a scratched product label, a crumpled flyer. A barcode, by contrast, has no meaningful error correction — one torn bar can make the whole code unreadable.',
        ],
        subsections: [
          {
            subheading: 'Static QR codes',
            text: 'The data is baked into the code itself. Free to make, never expires, and cannot be edited after printing — ideal for WiFi passwords, contact details, and permanent links.',
          },
          {
            subheading: 'Dynamic QR codes',
            text: 'The code points to a short redirect link you can edit later, and scans can be counted. Better for campaigns, menus, and anything you may need to update or measure.',
          },
          {
            subheading: 'What phones need',
            text: 'Nothing extra. Every modern iPhone and Android phone scans QR codes with the built-in camera app — no download, no account, no special hardware.',
          },
        ],
      },
      {
        id: 'qr-code-vs-barcode-differences',
        heading: 'QR Code vs Barcode: The Differences That Matter',
        paragraphs: [
          'Capacity is the headline difference, and it is not close. A barcode’s 20-odd characters are enough for a product ID and little else; a QR code’s thousands of characters can carry a full web address, a payment instruction, or a paragraph of text. That single difference decides most use cases on its own: if the code itself must carry the information — a website link, a WiFi password, a ticket — only a QR code can do it. If the code only needs to identify an item for a system that already knows the details, a barcode is enough.',
          'Scanning hardware is the second deciding factor. Barcodes need a dedicated scanner — a laser gun, a countertop scanner, or a phone with a barcode-scanning app — while QR codes need only a phone camera, which your customers already carry. That flips the economics depending on who scans: a shop scanning its own products buys scanners once and reuses them for years, so barcodes are cheap; a business asking customers to scan something cannot assume they own a scanner, so QR codes are the only practical option.',
          'Durability and print flexibility round out the comparison. QR codes tolerate damage, work at any rotation, and can be printed small (a 2 cm code scans fine from a phone at close range) or huge (a billboard code scans from across the street). Barcodes need clean, straight, well-lit printing and careful orientation, and they grow wider as you add data, which limits where they fit. On cost, both are nearly free to print — the real cost difference is in the scanners and the software around them, not the ink.',
        ],
        subsections: [
          {
            subheading: 'Data capacity',
            text: 'Barcode: ~20–25 characters. QR code: up to 4,296 alphanumeric characters. Winner: QR code, by a factor of about 200.',
          },
          {
            subheading: 'Scan speed and angle',
            text: 'Both scan in under a second with the right hardware. QR codes scan from any angle with a phone; barcodes need a scanner aligned across the bars.',
          },
          {
            subheading: 'Damage tolerance',
            text: 'QR codes survive up to 30% damage thanks to error correction. A torn or scratched barcode usually fails outright.',
          },
          {
            subheading: 'Equipment cost',
            text: 'Barcodes need a dedicated scanner (₹1,000–₹5,000 for a basic handheld). QR codes need a phone camera your customers already own.',
          },
          {
            subheading: 'Data type',
            text: 'Barcodes store IDs and short numbers. QR codes store URLs, text, WiFi credentials, contacts, payment details, and more.',
          },
          {
            subheading: 'Where they appear',
            text: 'Barcodes dominate retail packaging, warehouses, and libraries. QR codes dominate marketing, payments, tickets, menus, and customer-facing print.',
          },
        ],
      },
      {
        id: 'when-to-use-a-barcode',
        heading: 'When to Use a Barcode',
        paragraphs: [
          'Choose a barcode when the code will be scanned by your own staff or systems, not by customers. Retail checkout is the classic case: every product gets a unique number, the POS system looks it up, and the price and stock update automatically. Warehouses and logistics work the same way — barcodes on cartons and shelves let workers scan items in and out of inventory far faster and more accurately than typing codes by hand, and the scanners are rugged, cheap, and built for all-day use.',
          'Barcodes also make sense when you are selling through retailers who require them. Most supermarkets, marketplaces, and distributors will not list a packaged product without a registered barcode number (usually a GS1 barcode), because their entire receiving and checkout system depends on it. If you manufacture or package a product for retail sale, getting a proper barcode is not optional — it is part of getting onto the shelf. The same applies to libraries, which have used barcodes on books for decades, and to asset tracking inside offices and hospitals.',
          'Finally, barcodes win on simplicity when the data really is just an ID. A barcode system has fewer moving parts: no landing pages to maintain, no links that can break, no redirect service that could go down. If all you need is “which item is this?”, a barcode answers it with the least infrastructure. Just remember the limit: a barcode without a database behind it is a number nobody can interpret, so never print one for customers expecting it to lead somewhere.',
        ],
        bullets: [
          'Retail products sold through shops, supermarkets, or marketplaces — a GS1 barcode is usually required.',
          'Warehouse, stockroom, and logistics scanning by staff with dedicated scanners.',
          'Libraries, asset tags, and internal inventory where the code is only an ID.',
          'Any system where a scanner already exists and the database already holds the details.',
        ],
      },
      {
        id: 'when-to-use-a-qr-code',
        heading: 'When to Use a QR Code',
        paragraphs: [
          'Choose a QR code whenever a customer, guest, or member of the public will do the scanning. Restaurant menus, event tickets, payment counters, product packaging that links to instructions or a video, WiFi sign-in cards, feedback forms, and business cards all work because the scanner is the customer’s own phone. No business can hand every customer a barcode scanner — but every customer already carries a QR scanner in their pocket, and that changes what a printed code can do.',
          'QR codes also win when the code itself must carry the payload. A WiFi QR code contains the network name and password; a payment QR code contains the payee and amount; a vCard QR code contains a full contact. None of these work as barcodes, because the information is the point, not a lookup key. The same applies to marketing: a QR code on a poster that opens a video, a discount page, or a signup form turns a static surface into an interactive one, and with a dynamic code you can change the destination later and count the scans.',
          'There are also cases where QR codes beat barcodes on pure practicality. Small items and curved surfaces fit a compact square better than a long strip of bars. Outdoor signage and damaged labels survive better thanks to error correction. And for small businesses, the cost is unbeatable: a QR code is free to generate, free to print, and needs no scanner purchase, no registration, and no database — just a link or a piece of text worth sharing.',
        ],
        bullets: [
          'Menus, tickets, posters, and flyers that customers scan with their phones.',
          'Payment counters, donation pages, and UPI-style scan-to-pay setups.',
          'WiFi sign-in cards, business cards, and contact sharing.',
          'Product packaging that links to instructions, videos, warranties, or reviews.',
          'Feedback forms, surveys, and signup pages where you want to count responses.',
          'Anything printed small, on a curve, outdoors, or where damage is likely.',
        ],
        callout: {
          title: 'The hybrid answer',
          text: 'You do not have to choose. Print the barcode on the back of the pack for the till, and a QR code on the front for the customer. Retailers get their checkout scan, customers get a link worth scanning — and neither code interferes with the other.',
          type: 'tip',
        },
      },
      {
        id: 'how-to-make-a-qr-code-free',
        heading: 'How to Make a QR Code for Free (Step by Step)',
        paragraphs: [
          'Making a QR code takes under a minute, and you do not need an account or a paid tool. First, decide what the code should do: open a website, share WiFi details, save a contact, or show a piece of text. That decision picks the code type, and it matters — a code that links to your homepage behaves very differently from one that joins guests to your WiFi, so do not just paste a URL into a generic generator and hope for the best.',
          'Open the free QR code generator and choose the matching type from the type selector — URL, WiFi, text, or vCard — then enter your content carefully. For a URL, use the full address including https://, and test that the link actually opens the right page before you print anything. For WiFi, copy the network name and password character for character from your router settings, not from memory: WiFi names are case-sensitive, and one wrong letter produces a beautiful code that connects to nothing.',
          'Before you print, customise lightly and test on a real phone. A colour change or a small logo in the centre is fine — QR error correction handles it — but keep the code dark on a light background and never invert it to light-on-dark, which many phone cameras cannot read. Download a high-resolution PNG, print one test copy at the size you plan to use, and scan it from the distance your customers will stand at. A code that scans on your laptop screen can still fail on glossy paper under a shop light, so the test print is the step that saves you from reprinting a whole batch.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code instead of a barcode',
            caption: 'The free generator homepage — pick your code type and your QR code builds in seconds.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing URL, WiFi, text, and vCard options',
            caption: 'Choose the type that matches what the code should do — URL, WiFi, text, or contact.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a QR code as a high-resolution PNG for printing',
            caption: 'Download a high-resolution PNG, print one test copy, and scan it on a real phone before the full print run.',
          },
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is the main difference between a QR code and a barcode?',
        answer:
          'A barcode is one-dimensional and stores about 20–25 characters, usually just a product ID number that a database looks up. A QR code is two-dimensional and stores up to 4,296 alphanumeric characters — enough for a URL, WiFi password, contact, or payment details — and it scans with any phone camera from any angle, with up to 30% damage tolerance.',
      },
      {
        question: 'Can a QR code replace a barcode in a shop?',
        answer:
          'For customer-facing uses, yes — but not always at the checkout. Retail POS systems, warehouse scanners, and supplier databases are built around barcodes, and many retailers require a registered GS1 barcode on packaged products. The practical answer for a product is often both: a barcode for the till, and a QR code for the customer.',
      },
      {
        question: 'Do QR codes cost more than barcodes?',
        answer:
          'No — both are nearly free to print. The cost difference is in the hardware: barcodes need a dedicated scanner, while QR codes are scanned by phones customers already own. Generating a QR code itself is free, with no registration or database subscription required for a static code.',
      },
      {
        question: 'Can a phone scan a barcode?',
        answer:
          'Yes, with a barcode-scanning app, but not with the built-in camera app the way QR codes work. That is the key practical gap: customers can scan a QR code instantly with the camera they already use, while a barcode asks them to install something first — which most will not do.',
      },
      {
        question: 'Which is better for a small business?',
        answer:
          'For anything customer-facing — menus, payments, packaging links, feedback forms, WiFi — a QR code, because it is free, needs no hardware, and carries real content. For selling packaged products through retailers or managing stock with scanners, you still need barcodes. Most small businesses end up using both, each where it fits.',
      },
      {
        question: 'Is a QR code safer than a barcode?',
        answer:
          'Neither is inherently secure: both can encode a link or a number, and a malicious QR code can point to a phishing page just as a barcode number could be misused. The safety comes from what the code points to and whether users check the destination before proceeding. Never scan codes from untrusted posters or stickers placed over legitimate ones, and preview the URL your phone shows before tapping.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create a QR code your customers can scan with any phone, and print it wherever it works hardest.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
