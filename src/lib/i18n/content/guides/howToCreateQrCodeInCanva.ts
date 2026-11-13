import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToCreateQrCodeInCanvaData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a QR Code in Canva (Free, 2026 Guide)',
    description:
      'Learn how to make a QR code in Canva free — step by step, plus static vs dynamic, colours, sizing, and how to add a logo without breaking scans.',
    badge: 'Guides',
    h1: 'How to Make a QR Code in Canva',
    subheadline:
      'Canva has a built-in QR code tool that drops a scannable code straight onto your flyer, business card, or presentation — no separate generator, no download-and-re-upload dance, and no Pro subscription. This guide walks through the exact steps, explains the one big limitation (Canva codes are static by default), and shows how to customise, size, and test your code so it actually scans when it is printed.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Free on every plan',
        text: 'Canva’s built-in QR Code app works on the free plan — no Pro subscription needed to generate a code.',
      },
      {
        label: 'Static by default',
        text: 'The native Canva code is static: the URL is baked into the pattern and can never be changed after printing.',
      },
      {
        label: 'URLs only',
        text: 'Canva encodes a web address and nothing else — no Wi-Fi, vCard, email, or SMS codes.',
      },
      {
        label: 'Check before you print',
        text: 'Test the code with a real phone, keep contrast high, and leave a quiet zone around it — most failed Canva codes fail on these three points.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'canva-qr-code-tool-explained',
        heading: 'Canva’s QR Code Tool, Explained',
        paragraphs: [
          'Canva’s QR code generator is an app that lives inside the Canva editor, not a separate website. Open any design — a flyer, a business card, a poster, a presentation, or a social media graphic — go to the Apps panel, search for “QR Code”, and Canva’s native QR Code app appears at the top of the results. You paste a URL, pick your colours, and the code drops directly onto your canvas as a graphic element you can move, resize, and recolour like anything else in the design.',
          'The tool is free on every Canva plan, including the free one. Generating the code itself costs nothing and there is no scan cap, no expiry, and no watermark on the native static code. What Canva Pro adds is everything around the code — premium templates, Brand Kit colours, background remover, and SVG export — not the code generation itself. If you only need a code on a design you are already making in Canva, the free plan is genuinely enough.',
          'There is one thing to understand before you start: the native Canva tool makes static QR codes. A static code stores your exact URL inside the pattern itself, so the destination is fixed forever. That is why the code never expires and why Canva can offer it free — there is no server in the middle to maintain. The trade-off is that if your link changes, moves, or breaks, every printed copy stops working and you have to generate a new code and reprint. Canva has also added a dynamic QR code option, but on the Free and Pro plans dynamic codes carry a Canva logo in the middle of the code, and scan tracking is locked to Canva Business and above.',
          'Canva’s tool also only encodes URLs. You cannot make a Wi-Fi code that joins a network, a vCard code that saves a contact, an email code, or a PDF code inside Canva. If you need one of those, generate the code in a dedicated QR generator and upload it to Canva as an image instead — the two approaches mix perfectly, and this guide covers that workaround below.',
        ],
        callout: {
          title: 'Static or dynamic — pick before you design',
          text: 'A static Canva code is permanent and free, but its link can never change. A dynamic code can be edited after printing, but on Canva Free and Pro it carries a Canva logo, and tracking needs a Business plan. For a one-off flyer or a permanent website link, static is the right call. For a menu, a campaign, or anything that might move, use a dedicated dynamic generator instead.',
          type: 'info',
        },
      },
      {
        id: 'how-to-make-qr-code-in-canva',
        heading: 'How to Make a QR Code in Canva (Step by Step)',
        paragraphs: [
          'The whole process takes about a minute once you know where the tool hides. Start with the design the code belongs on — a poster, a business card, a menu, or a social post — because the code is created inside that design, not as a standalone file you export separately. If you do not have a design yet, create one from any template or a blank canvas in the size you need.',
          'Open the Apps panel from the dark sidebar on the left of the editor and type “QR Code” into the search box. Click Canva’s native QR Code app to open it. You will see a single field for your destination URL. Paste the full address — including https:// — of the page you want people to land on. Double-check every character: a static code cannot be fixed later, and a single typo means a dead link on every printed copy.',
          'Before you generate, set your colours. The app lets you change the foreground colour (the dark pattern) and the background colour, and you can type an exact hex code to match your brand. Keep the contrast strong — a dark code on a light background scans far more reliably than a fashionable low-contrast pair. Then click “Generate code” (or “Save”, depending on the version of the app you see) and the code appears on your canvas. Drag it where it belongs, resize it by the corner handles, and add a short line of text beside it — “Scan to view the menu”, “Scan to book” — so nobody has to guess what the code does.',
          'On the Canva mobile app the flow is the same: open your design, tap the plus icon, find the QR Code app, paste the URL, and the code lands on your workspace. Everything you do on desktop works on mobile, which is handy when you are finishing a poster on the go.',
        ],
        subsections: [
          {
            subheading: '1. Open your design',
            text: 'Start in the design the code belongs on — a flyer, business card, poster, or social post. The code is created inside the design, not as a separate file.',
          },
          {
            subheading: '2. Apps → search “QR Code”',
            text: 'In the left sidebar, click Apps and type “QR Code”. Open Canva’s native QR Code app from the top of the results.',
          },
          {
            subheading: '3. Paste the full URL',
            text: 'Enter the complete destination address, including https://. Check it twice — a static code can never be corrected after printing.',
          },
          {
            subheading: '4. Set colours, then generate',
            text: 'Match the foreground and background to your brand with hex codes, keeping contrast high. Click Generate code and the code drops onto your canvas.',
          },
          {
            subheading: '5. Place it and label it',
            text: 'Resize the code, position it where people will notice it, and add a line like “Scan to view the menu” so its purpose is obvious.',
          },
        ],
        callout: {
          title: 'Always test with a real phone',
          text: 'Before you download or print anything, point your phone camera at the code on screen and follow the link all the way to the page. Do it again after you export, and again on the printed proof. A code that looks fine in the editor can still fail at print size or in low light.',
          type: 'tip',
        },
      },
      {
        id: 'customize-qr-code-in-canva',
        heading: 'How to Customise a QR Code in Canva',
        paragraphs: [
          'Canva’s customisation options are deliberately simple: foreground colour, background colour, and margin (the white border around the code, also called the quiet zone). That is enough to make a code look like it belongs to your brand, and the restraint is a feature — every option Canva offers keeps the code scannable, which is more than can be said for some dedicated tools that let you break a code with one click.',
          'Colour is where most people go wrong. The rule is contrast: the code must be clearly darker than its background. A good working minimum is a 3:1 contrast ratio, but in practice, dark ink on a white or very light background is the safest choice. Avoid light codes on dark backgrounds — inverted codes fail on many phone cameras — and never place a code over a busy photo or a gradient, because the camera cannot tell where the code ends and the image begins. If your brand colour is a light pastel, use it for the background and keep the code itself dark.',
          'The margin matters as much as the colour. Canva lets you adjust it, but do not shrink it to zero to save space. Scanners need a clear border around the pattern — roughly the width of four modules (the small squares) on every side — to find the code. A code crammed against other text or the edge of the page is a code that gets skipped. When in doubt, give it more breathing room, not less.',
          'Size is the other half of customisation. As a rule, a code should be at least 2.5 cm across on anything people hold in their hands, and at least one-tenth of the distance people will scan it from: a poster read from 2 metres away needs a code at least 20 cm wide. Canva exports the code as part of your design, so it scales with the design — set the design size correctly first, and the code will be the right size in the export. For print, export as PDF Print for the sharpest result; for screens, PNG is fine.',
        ],
        bullets: [
          'Keep contrast high — dark code, light background, roughly 3:1 or better. Never invert the code or place it on a busy photo.',
          'Match brand colours with exact hex codes, but keep the pattern dark enough to scan in poor light.',
          'Leave a clear margin (quiet zone) around the code — about four modules wide on every side — and never let text or graphics touch it.',
          'Minimum 2.5 cm across for hand-held items; at least one-tenth of the viewing distance for posters and banners.',
          'Export as PDF Print for sharp print output, or PNG for social media and screens.',
        ],
      },
      {
        id: 'static-vs-dynamic-canva-qr-code',
        heading: 'Static vs Dynamic QR Codes in Canva',
        paragraphs: [
          'The static-versus-dynamic question is the most important decision in this whole guide, because it decides whether a printed code can ever be fixed. A static code, which is what Canva’s native app makes, encodes the destination directly in the pattern. It is free, permanent, and needs no account, server, or subscription to keep working. It also cannot be edited, tracked, or redirected. If the page moves, the code dies — and so does every poster, card, and flyer carrying it.',
          'A dynamic code works differently: the pattern encodes a short redirect link, and the redirect can be changed any time after printing. That is what lets you fix a typo, swap a campaign page, or point a printed menu at a new season’s dishes without reprinting. Canva’s dynamic option offers this, but with strings attached on the Free and Pro plans: the code carries a Canva logo in the centre, and you cannot see scan counts, devices, or locations unless you are on Canva Business, Enterprise, or a nonprofit plan. You also cannot convert a static code into a dynamic one later — the choice is made at creation.',
          'For most Canva users, the honest answer is to use static codes for permanent destinations and a dedicated dynamic generator for everything else. A link to your homepage, your portfolio, or a Google review page that will not move is a perfect static-code job. A restaurant menu, a limited-time offer, a property listing, or a campaign landing page that might change is a dynamic-code job, and it is worth generating that code outside Canva and uploading it as an image. The uploaded code behaves like any other image in your design, and you keep full control of the destination and the tracking.',
        ],
        callout: {
          title: 'The 30-second decision',
          text: 'Ask one question: will this link ever change? If the answer is genuinely no — your homepage, your Instagram profile, a permanent booking page — use Canva’s free static tool. If the answer is maybe, use a dynamic generator and upload the code to Canva. Guessing wrong on a static code costs a reprint; guessing wrong on a dynamic code costs nothing.',
          type: 'warning',
        },
      },
      {
        id: 'how-to-add-logo-to-canva-qr-code',
        heading: 'How to Add a Logo to a QR Code in Canva',
        paragraphs: [
          'This is the feature Canva’s native QR tool does not have: there is no built-in option to embed a logo in the centre of the code. The workaround is to place your logo on top of the code yourself, and it works — but only if you respect the error-correction budget. A QR code can survive some damage because of its built-in error correction, and the rule of thumb is to keep any logo under 30% of the code’s total area. Go bigger and the code starts failing on some phones, especially in low light or at a distance.',
          'To do it in Canva, generate the code first, then upload your logo as a PNG with a transparent background and drag it onto the centre of the code. Shrink it until it covers no more than about a quarter of the code, and make sure it sits on a small white or light square if your logo is dark — the code’s pattern needs a clean patch to be read around the logo. Then test it: scan with an iPhone and an Android, in normal light and in dim light, from the distance people will actually use. If it fails even once, shrink the logo or drop it entirely.',
          'The cleaner route is to generate the code in a dedicated QR generator that supports logo embedding properly, then upload the finished image into Canva. A proper generator places the logo at the right size, keeps the quiet zone intact, and lets you choose a high error-correction level so the code stays reliable. It also gives you what Canva cannot: Wi-Fi codes, vCard codes, dynamic codes, and SVG downloads. You lose nothing in Canva — the uploaded code is just an image you can resize and position like any other element.',
        ],
        figures: [
          {
            src: '/guides/screenshots/logo-upload.png',
            alt: 'Logo upload panel for adding a logo to a QR code before using it in Canva',
            caption: 'A dedicated generator adds your logo at the right size and error-correction level — then upload the finished code into Canva as an image.',
          },
        ],
      },
      {
        id: 'canva-qr-code-mistakes-and-when-to-use-another-generator',
        heading: 'Canva QR Code Mistakes to Avoid (and When to Use Another Generator)',
        paragraphs: [
          'The most common mistake is also the most expensive: printing a static code with a wrong or temporary link. Because Canva codes cannot be edited, a typo in the URL, a link to a page that later moves, or a link to a campaign that ends means every printed copy is waste. Before you generate, open the URL in a private browser window, check it loads, and confirm it is the final, permanent address. If the page is temporary, do not use a static Canva code for it.',
          'The second mistake is sizing and contrast. A code that is too small, too light, or placed over a photo fails silently — nobody tells you it did not scan, they just walk past. Keep codes at least 2.5 cm across for hand-held items, keep the contrast high, and always print a proof and scan it with two different phones before ordering a full batch. The third mistake is exporting the wrong format: Canva’s free plan exports PNG and JPG, while SVG — the format that stays sharp at any size — needs Pro or Teams. If you are on the free plan and need a large printed code, export the design as PDF Print instead, which keeps the code crisp.',
          'Finally, know when Canva is the wrong tool. If you need scan analytics, an editable destination, a Wi-Fi or contact code, a logo embedded properly, or a transparent-background code for print (also a Pro feature in Canva), generate the code in a dedicated free QR generator and upload it to Canva. The workflow is barely longer — generate, download as PNG or SVG, upload to Canva, drag it onto your design — and you get a code that does everything Canva’s native tool cannot, with no Canva logo stamped on it.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code to upload into Canva',
            caption: 'When Canva’s built-in tool is not enough — dynamic codes, Wi-Fi, vCard, or a logo — generate the code free and upload it to Canva as an image.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a QR code as PNG or SVG for Canva',
            caption: 'Download PNG for Canva designs, or SVG for the sharpest printed result.',
          },
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is the QR code generator in Canva free?',
        answer:
          'Yes. Canva’s built-in QR Code app is free on every plan, including the free one — you do not need Canva Pro to generate a code. The static code it makes has no watermark, no scan cap, and no expiry. Pro only adds things around the code, like Brand Kit colours, premium templates, and SVG export.',
      },
      {
        question: 'Can I edit a QR code in Canva after creating it?',
        answer:
          'Not if it is a static code, which is what Canva’s native app makes by default. The URL is baked into the pattern and cannot be changed — to fix a link you must delete the code, generate a new one, and reprint. Canva’s dynamic option can be edited after printing, but on Free and Pro it stamps a Canva logo on the code, and tracking needs a Business plan.',
      },
      {
        question: 'Can I add a logo to a QR code in Canva?',
        answer:
          'There is no built-in logo option in Canva’s QR tool, but you can place a transparent PNG logo over the centre of the code yourself. Keep it under 30% of the code’s area and test it with two phones before printing. For a cleaner result, generate the code with a logo in a dedicated QR generator and upload the finished image into Canva.',
      },
      {
        question: 'Do Canva QR codes expire?',
        answer:
          'No. A static Canva QR code never expires, because the URL is stored in the pattern itself and there is no server to switch it off. It keeps working as long as the destination page stays live. If the page is deleted or moves, the code stops working — not because it expired, but because the link behind it is gone.',
      },
      {
        question: 'Can I make a Wi-Fi or vCard QR code in Canva?',
        answer:
          'No. Canva’s QR tool encodes a web address and nothing else, so it cannot make Wi-Fi, vCard, email, or SMS codes. For those, generate the code in a free dedicated QR generator, download it as a PNG or SVG, and upload it to Canva as an image — it will sit in your design exactly like a native Canva code.',
      },
      {
        question: 'What size should a QR code be in Canva?',
        answer:
          'At least 2.5 cm across for anything people hold in their hands, such as a business card or a flyer. For posters and banners, use the one-tenth rule: the code should be at least one-tenth of the distance people scan it from, so a poster read from 2 metres away needs a code at least 20 cm wide. Always test the printed proof with a real phone.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Need a code Canva cannot make — dynamic, Wi-Fi, vCard, or with your logo built in? Create it free in under a minute, then upload it straight into Canva.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
