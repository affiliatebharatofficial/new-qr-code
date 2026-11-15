import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForGoogleDocsData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Google Docs (Free, No Sign-Up)',
    description:
      'Learn how to make a QR code for Google Docs free — set the share link, generate the code, and insert it into any document, handout, or slide.',
    badge: 'Guides',
    h1: 'QR Code for Google Docs',
    subheadline:
      'A QR code for Google Docs turns a long share link into a scan-and-open shortcut: one scan on a phone opens the document, no typing, no searching, no "can you resend the link?" messages. Google Docs has no built-in QR button, so the code is made outside Docs and brought back in — but the whole process takes about two minutes once you know the one step everyone gets wrong: the sharing permission.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Docs has no QR button',
        text: 'Google Docs cannot generate a QR code itself — make the code in Chrome or a free generator, then insert it as an image.',
      },
      {
        label: 'Permissions decide everything',
        text: 'Set General access to "Anyone with the link" and Viewer before you copy the link, or scanners hit a request-access wall.',
      },
      {
        label: 'Use the share link, not the edit URL',
        text: 'The address bar shows an /edit URL that needs sign-in. Always use Share → Copy link, which gives the clean share URL.',
      },
      {
        label: 'Static is fine for print',
        text: 'A free static code works forever as long as the document exists. Use a dynamic code only if you need to change the destination or count scans.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'qr-code-for-google-docs-basics',
        heading: 'What Is a QR Code for Google Docs?',
        paragraphs: [
          'A QR code for Google Docs is simply a QR code that contains the share link of a Google document. When someone scans it with a phone camera, the document opens in their browser — in view, comment, or edit mode, depending on the sharing permission you set. Nothing about the document itself changes: the code is just a faster way to hand out the link, and it works on paper where a link cannot be clicked at all.',
          'That is exactly why people use them. A teacher prints a worksheet with a QR code in the corner and the whole class opens the reading in seconds. A meeting agenda on the wall opens the live notes doc for everyone in the room. A resume carries a code to a writing portfolio, a flyer links to a price list, a handout points to a feedback form that lives in a Doc. Anywhere a printed page needs to lead to a living document, a QR code is the bridge.',
          'One thing to understand before you start: Google Docs has no built-in QR code generator. There is no Insert → QR code menu, and no QR option hidden in the Share dialog. The code has to be created outside Docs — in Chrome, which has a free built-in generator, or in a dedicated QR generator — and then downloaded and inserted back into the document as a picture. That sounds like a workaround, and it is, but it takes about two minutes and gives you far more control than a built-in button ever would: size, format, colours, a logo, and the choice of static or dynamic.',
          'The real work is not the code at all — it is the sharing setting. A QR code only opens what the scanner is allowed to see. Google Drive permissions apply exactly the same way through a QR code as through a pasted link: if the document is Restricted, the scanner lands on a "Request access" page instead of your document. Everything in this guide starts from that fact, because a beautiful QR code that points at a locked document is worse than no code at all.',
        ],
        callout: {
          title: 'The golden rule: Viewer, not Editor',
          text: 'For 95% of QR distributions, set General access to "Anyone with the link" and the role to Viewer. Viewers can read the document but cannot change it, comment on it, or see who else has access. Only choose Commenter or Editor when you genuinely want strangers to write in your document — a shared sign-up sheet or a public brainstorm, for example.',
          type: 'info',
        },
      },
      {
        id: 'how-to-make-qr-code-for-google-docs',
        heading: 'How to Make a QR Code for Google Docs (Step by Step)',
        paragraphs: [
          'Open the document you want to share and click the blue Share button in the top-right corner. Under "General access", click the dropdown — it usually says "Restricted" — and change it to "Anyone with the link". Set the role next to it to Viewer, then click "Copy link". The link you just copied looks like https://docs.google.com/document/d/[a long ID]/edit?usp=sharing — that is the URL your QR code will contain. Do not copy the link from the browser address bar instead: it points to the editing view and can send scanners to a sign-in prompt.',
          'Next, make the QR code. Open a free QR code generator, choose the URL type, and paste the share link into the destination field. If you want the code to match your document or brand, set the colours now — dark modules on a light background, never the reverse — and add a logo if the generator offers it. A logo in the centre is fine as long as it covers no more than about 30% of the code area and the error correction is set to High, so the code still scans even with the middle obscured.',
          'Download the code before you use it anywhere. PNG is right for screens and for pasting into a document; choose SVG or PDF if the code will be printed large, for example on a poster or a banner, because vector files stay sharp at any size while a PNG gets blurry when enlarged. Save the file with a name you will recognise later — "agenda-nov-2026-qr.png" beats "qr-code-1.png" when you come back to it in six months.',
          'Finally, test the code with a real phone before you print or share it. Open the camera app, point it at the code, and tap the notification that appears. The document should open straight to the page — no sign-in prompt, no "Request access" screen. If you see either of those, the sharing setting is wrong: go back to the Share dialog, confirm General access is "Anyone with the link" and the role is Viewer, copy the link again, and regenerate the code. Test on both an iPhone and an Android if you can, because the two camera apps handle QR codes slightly differently.',
        ],
        subsections: [
          {
            subheading: '1. Set sharing to "Anyone with the link"',
            text: 'Click Share, change General access from Restricted to "Anyone with the link", set the role to Viewer, and click Copy link.',
          },
          {
            subheading: '2. Paste the link into a generator',
            text: 'Choose the URL code type, paste the share link, and set colours, error correction, and a logo if you want one.',
          },
          {
            subheading: '3. Download PNG or SVG',
            text: 'PNG for screens and documents, SVG or PDF for large print. Name the file so you can find it again later.',
          },
          {
            subheading: '4. Scan-test with a real phone',
            text: 'Point a phone camera at the code and confirm the document opens with no sign-in or request-access screen — before you print anything.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code for a Google Docs share link',
            caption: 'Paste the Google Docs share link into a free generator — no account needed for a basic static code.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a Google Docs QR code as PNG or SVG',
            caption: 'Download PNG for documents and screens, or SVG when the code will be printed large.',
          },
        ],
        callout: {
          title: 'Shorten the link first if it looks messy',
          text: 'A Docs share link is around 70 characters long, which makes a fairly dense QR pattern. The density is fine for a code printed at 2.5 cm or larger, but if you are printing small — a business card, a name badge — paste the link through a URL shortener first, or use the "Publish to web" link (File → Share → Publish to web), which is shorter and gives scanners a clean read-only page.',
          type: 'tip',
        },
      },
      {
        id: 'chrome-built-in-qr-code',
        heading: 'The Chrome Method: A Free QR Code Without Leaving the Browser',
        paragraphs: [
          'If the document is a one-off — a single meeting agenda, a temporary worksheet, a link you need on a slide in five minutes — Chrome has a built-in QR generator and it is the fastest option available. Open the document in desktop Chrome, click the three dots in the top-right corner, choose "Cast, save, and share", then "Create QR code". A popup shows the code for the current page, and a Download button saves it as a PNG. There is also a quicker trigger: right-click anywhere on the page and choose "Create QR code for this page".',
          'Chrome lets you edit the URL in the popup before downloading, and the code redraws as you type — which matters, because Chrome codes whatever URL is in the address bar, and the address bar holds the /edit URL. Before you click Download, replace the address in the text box with the share link you copied from the Share dialog. If you skip this, scanners may hit a sign-in screen instead of the document.',
          'The trade-offs are real, so use Chrome only when they do not matter. The code is static: the destination is baked in and can never be changed, so if the document moves or the link changes, every printed copy is dead. The download is a low-resolution PNG only — no SVG, no PDF, nothing suitable for large-format printing. You cannot change the colours, add a logo, or remove the small pixelated dinosaur Chrome puts in the centre of every code. And there is no scan tracking at all: you will never know how many people used it.',
          'There is one more catch worth knowing. On a work or school laptop, the QR menu item may be missing entirely — administrators can disable Chrome sharing features by policy, and the option simply does not appear. If you cannot find "Create QR code" in the menu, that is why, and a free online generator is the fallback. For anything you will print more than once, or anything where the destination might change, a dedicated generator is the better tool from the start.',
        ],
        callout: {
          title: 'Chrome on phones works too',
          text: 'On Android, open the doc in Chrome, tap the three dots → Share… → QR Code. On iPhone and iPad, open the doc in the Chrome app and tap Share → Create a QR Code. The same limits apply: static code, PNG only, and it encodes the page URL, so switch to the share link first.',
          type: 'info',
        },
      },
      {
        id: 'how-to-add-qr-code-inside-google-doc',
        heading: 'How to Put a QR Code Inside a Google Doc',
        paragraphs: [
          'Sometimes the QR code belongs inside the document itself, not on a poster pointing at it. A handout might carry a code to a feedback form, a lesson plan might link to a video, a sign-up sheet might point to a registration Doc, or a report might link to the live spreadsheet behind it. In Docs, a QR code is just an image, so the insertion is the same as for any picture — but a few details make the difference between a code that scans and one that frustrates people.',
          'Download the code as a PNG first, then in your document click Insert → Image → Upload from computer and choose the file. If you saved the code to Google Drive, you can pick Insert → Image → Drive & Photos instead. Once it is in, click the image and use the sizing handles or the image options to set its size: at least 2.5 cm (about 1 inch) across for a printed page, and larger — 3 to 4 cm — if the document will be photocopied, because copiers soften edges and a small code can stop scanning after one copy.',
          'Position matters as much as size. Keep the code on a white background with a clear margin around it — the empty border, called the quiet zone, is what lets a phone camera find the pattern, and text or lines crowding the edges will slow or break scanning. Use "Wrap text" if the code sits beside a paragraph, or "Break text" if it deserves its own line, and add a one-line caption underneath telling people what the code opens: "Scan to open the feedback form" works far better than a bare code, because nobody scans a mystery square.',
          'One more detail: a code pasted into a Doc is a static picture, so it will not update if the destination changes. If the target document is a living file that might move or be replaced, use a dynamic QR code for the image you insert — the printed code stays the same while the destination behind it can be swapped. That is the only way to keep a hundred printed handouts valid after the link behind them changes.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for making URL, Wi-Fi, vCard and other QR code types',
            caption: 'The same generator makes codes for any destination — the code you insert into a Doc is usually a URL code pointing at another document, form, or video.',
          },
        ],
      },
      {
        id: 'static-vs-dynamic-docs-qr',
        heading: 'Static vs Dynamic QR Codes for Google Docs',
        paragraphs: [
          'A static QR code stores the document link directly inside the pattern. It is free, it never expires, and it works forever as long as the document exists and its sharing allows access. The catch is permanence in the other direction: the link is baked in, so if the document is deleted, moved to a different account, or its sharing is switched back to Restricted, the code stops working and every printed copy is useless. Static is the right choice for a document that will not move — a finished handout, a one-time agenda, a resume link.',
          'A dynamic QR code stores a short redirect link instead, and the redirect points at your document. The printed code never changes, but the destination behind it can be swapped at any time: replace the old agenda with the new one, fix a wrong link, or point the same poster at a different document next month. Dynamic codes also record scans — how many, when, and roughly where from — which is how you learn whether anyone actually used the code on the back of the handout. The trade-off is that dynamic codes usually need an account and often a paid plan, and they depend on the redirect service staying online.',
          'Choose by the lifespan of the printed piece. One meeting, one class, one flyer that will be recycled next week: static, free, done. Anything printed in bulk, posted on a wall, or included in a document that will circulate for months: dynamic, so a changed link does not mean reprinting everything. And whichever you choose, remember the document itself is the thing people open — a dynamic code cannot fix a Restricted sharing setting, and a static code cannot protect a document you later make private by accident.',
        ],
        callout: {
          title: 'The document can change, the code cannot',
          text: 'Editing the Google Doc after printing is safe — the link stays the same, so the code keeps working and scanners see the latest version. That is one of the best things about Docs QR codes: update the content as often as you like without touching the printed code. Only the link itself, or the sharing setting, can break it.',
          type: 'tip',
        },
      },
      {
        id: 'google-docs-qr-code-mistakes',
        heading: 'Google Docs QR Code Mistakes That Break Your Codes',
        paragraphs: [
          'The number one mistake is leaving the document Restricted. Everything looks right — the code scans, the phone opens a page — and then the reader sees "Request access" instead of the document. Always set "Anyone with the link" before generating the code, and re-check it after any change to the document settings, because sharing settings can be reset by an admin or by moving the file between Drive folders.',
          'The second mistake is encoding the wrong URL. The address bar shows an /edit link that requires a Google sign-in; the Share dialog gives the proper share link. If your code opens a sign-in page on a phone that is not logged into Google, you encoded the wrong one. The same trap applies to Chrome\'s built-in generator, which codes whatever is in the address bar unless you edit the URL in the popup first.',
          'The third mistake is printing too small or too faint. A code under 2 cm across, printed in light grey, or placed on a coloured background will fail in real light even if it scans perfectly on screen. Keep codes dark on white, at least 2.5 cm across, and print one test page and scan it with a phone before printing the batch — printer scaling can shrink a whole document, codes included, below the scannable minimum.',
          'The fourth mistake is about privacy, and it is the serious one. A QR code that opens a document opens it for anyone who scans it — including anyone who photographs the poster on the wall, or finds the handout in the bin. Never put a QR code to a document containing personal data, internal notes, grades, salaries, or anything confidential on a public page. If the document must stay private, do not QR it at all: share it with named people instead, and accept that those people will need a direct link. A QR code is a public invitation by design, so only attach it to documents you are happy for anyone to open.',
        ],
        bullets: [
          'Set General access to "Anyone with the link" (Viewer) before generating the code — Restricted means scanners see "Request access".',
          'Copy the link from the Share dialog, never the browser address bar — the /edit URL can demand a sign-in.',
          'Print codes at least 2.5 cm across, dark on white, with a clear quiet zone around them — small, faint, or crowded codes fail.',
          'Chrome\'s built-in code is static, PNG-only, and cannot be edited or tracked — fine for a one-off, wrong for a campaign.',
          'Scan-test a printed copy with a real phone before printing the batch — screen scans do not guarantee print scans.',
          'Never QR a document with private or sensitive content — a QR code is a public link, and anyone who sees it can open the doc.',
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for a Google Doc for free?',
        answer:
          'Open the doc, click Share, set General access to "Anyone with the link" (Viewer), and click Copy link. Paste that link into a free QR code generator, choose the URL type, and download the PNG — no account needed. Chrome can also do it free: open the doc, click the three dots → "Cast, save, and share" → "Create QR code", then Download.',
      },
      {
        question: 'Does Google Docs have a built-in QR code generator?',
        answer:
          'No. Google Docs has no QR code option in any menu, and there is no QR button in the Share dialog. You create the code outside Docs — in Chrome\'s built-in generator or a free QR generator — and then insert it into the document with Insert → Image → Upload from computer. The same steps work for Sheets, Slides, and any Drive file.',
      },
      {
        question: 'Why does my Google Docs QR code ask for access?',
        answer:
          'The document is set to Restricted, so only people you added by name can open it. Fix it in the Share dialog: change General access to "Anyone with the link" and the role to Viewer, then copy the link again and regenerate the code. A QR code cannot bypass Drive permissions — it opens exactly what the scanner is allowed to see.',
      },
      {
        question: 'How do I put a QR code inside a Google Doc?',
        answer:
          'Download the code as a PNG, then in your document click Insert → Image → Upload from computer and choose the file. Resize it to at least 2.5 cm across, keep it on a white background with a clear margin, and add a caption saying what it opens, like "Scan to open the feedback form". Use Wrap text to place it beside a paragraph or Break text for its own line.',
      },
      {
        question: 'Can I track how many people scanned my Google Docs QR code?',
        answer:
          'Only with a dynamic QR code. Static codes — including Chrome\'s built-in one — carry the link directly and record nothing. A dynamic code routes scans through a redirect link, so the generator can count scans and show when and where they happened. Use dynamic codes for posters, handouts, and anything printed in bulk; static is fine for one-off shares.',
      },
      {
        question: 'Can I make a QR code for a Google Doc without sharing it publicly?',
        answer:
          'Not usefully. A QR code is a public link by nature — anyone who scans it gets the document\'s share link, so the document must be set to "Anyone with the link" for the code to work for strangers. If the document must stay private, share it with named people instead and send them the direct link; a QR code on a public page would defeat the privacy.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn any Google Docs link into a clean, scannable QR code in under a minute — free, no sign-up, with your logo and colours, ready to print or paste into a document.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
