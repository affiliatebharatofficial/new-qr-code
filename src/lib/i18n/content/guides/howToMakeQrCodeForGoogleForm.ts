import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'QR Code for Google Form: Make a Free Scannable Link',
  description:
    'Turn your Google Form into a scannable QR code in under a minute \u2014 free, no sign-up. Get more responses with print-ready codes that never expire.',
  badge: 'Step-by-Step Guide',
  h1: 'How to Make a QR Code for a Google Form',
  subheadline:
    'A QR code turns your Google Form into something people can open in two seconds flat \u2014 no typing long links, no spelling mistakes. This guide shows you how to make one free, where to place it, and the five mistakes that silently kill form responses.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'Shorten the link first',
      text: 'In Google Forms, click Send \u2192 the link tab \u2192 "Shorten URL". A shorter link makes a cleaner, easier-to-scan QR code.',
    },
    {
      label: 'Takes under a minute',
      text: 'Paste the link into the free generator, download a high-resolution PNG \u2014 no sign-up, no watermark, no cost.',
    },
    {
      label: 'Size for the distance',
      text: 'A code scanned from 2 metres away should be at least 20 cm wide. Small codes on far walls are the #1 reason scans fail.',
    },
    {
      label: 'Static codes never expire',
      text: 'The QR code works as long as the form link works \u2014 but if you delete the form or turn off responses, it stops too.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'why-use-qr-code-for-google-form',
      heading: 'Why Use a QR Code for Your Google Form?',
      paragraphs: [
        'Google Forms are free and powerful, but their share links are hostile: strings like docs.google.com/forms/d/e/1FAIpQLSfX8... that nobody will ever type by hand. Every time you ask someone to open your form by typing or copying a link, you lose a chunk of potential respondents \u2014 especially on mobile, where switching apps to paste a link feels like work.',
        'A QR code removes that friction entirely. Point a phone camera at it and the form opens in two seconds. There is no app to install, no link to remember, no "can you send me the link again?" Event organizers, teachers, and shop owners who switch from printed links to QR codes routinely report noticeably higher response counts, because the gap between seeing the form and opening it collapses to zero.',
        'QR codes also work where links simply cannot: printed posters, product packaging, table tents, projector slides, and name badges. Anywhere a screen-to-screen handoff is awkward \u2014 a classroom, a conference hall, a restaurant table \u2014 a printed code bridges the physical world to your online form. And unlike many "free" tools, a static QR code for your Google Form costs nothing and never expires.',
      ],
    },
    {
      id: 'how-to-make-qr-code-for-google-form',
      heading: 'How to Make a QR Code for a Google Form: Step by Step',
      paragraphs: [
        'The whole process takes under a minute once you have your form ready. Here are the exact steps:',
      ],
      subsections: [
        {
          subheading: '1. Copy your form\u2019s share link',
          text: 'Open your form in Google Forms and click the "Send" button (top right). Switch to the link tab (the chain icon), tick "Shorten URL" to get a compact forms.gle link, then click Copy. Make sure you copy the respondent link \u2014 not the edit URL from your browser\u2019s address bar.',
        },
        {
          subheading: '2. Paste the link into the QR generator',
          text: 'Open the free QR code generator, choose the URL / website QR type, and paste your forms.gle link into the input field. The QR code generates instantly \u2014 you can see it update live as you type.',
        },
        {
          subheading: '3. Customize and leave a quiet zone',
          text: 'Keep the default high-contrast black-on-white for maximum scannability. If you add a color or logo, use a high error-correction level and always keep a clean white margin (the "quiet zone") around the code \u2014 scanners need that empty border to find the code.',
        },
        {
          subheading: '4. Download and test before printing',
          text: 'Download the PNG at the highest resolution for print (300 DPI equivalent). Then scan it with your own phone from the distance people will actually stand at. If it doesn\u2019t open your form in under two seconds, make it bigger before you print a hundred copies.',
        },
      ],
      figures: [
        {
          src: '/guides/screenshots/qr-type-selector.png',
          alt: 'Choosing the URL QR code type in the free generator for a Google Form link',
          caption: 'Step 2: select the URL / website QR type \u2014 this is the right choice for any Google Form link.',
        },
        {
          src: '/guides/screenshots/generator-hero.png',
          alt: 'Pasting a Google Form share link into the free QR code generator',
          caption: 'Paste your shortened forms.gle link here \u2014 the QR code appears instantly, no sign-up.',
        },
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'Download options for the Google Form QR code in PNG format',
          caption: 'Step 4: download a high-resolution PNG \u2014 crisp enough for posters, flyers, and packaging.',
        },
      ],
    },
    {
      id: 'shorten-form-link-first',
      heading: 'Shorten the Form Link First (This Matters More Than You Think)',
      paragraphs: [
        'Every character in your link becomes data the QR code must store. A full Google Forms URL can run 80\u2013120 characters, which forces the code into a very dense pattern of tiny squares. Dense codes are harder for phone cameras to read, especially at small print sizes or in poor lighting.',
        'Clicking "Shorten URL" in the Send dialog gives you a compact forms.gle/xxxxx link of about 20 characters. That single click can cut the code\u2019s density roughly in half, which directly translates to faster, more reliable scans \u2014 and lets you print the code smaller without losing readability.',
        'One warning: pre-filled form links (the ones with entry.xxxxx parameters that pre-answer questions) get long again. If you need pre-filled answers, either accept a larger print size or route the long link through a URL shortener with analytics, such as Bitly \u2014 which also gives you approximate scan counts, something a plain static QR code cannot do.',
      ],
      bullets: [
        'Always tick "Shorten URL" in Google Forms\u2019 Send \u2192 link tab before copying.',
        'Shorter link = less dense code = scans faster and works at smaller sizes.',
        'Pre-filled links are long by nature \u2014 print them at least 25% larger.',
      ],
    },
    {
      id: 'where-to-place-form-qr-code',
      heading: 'Where to Place Your Google Form QR Code',
      paragraphs: [
        'A QR code is only as good as its placement. Put it where your audience already is, at a distance where scanning feels effortless \u2014 arm\u2019s length for handouts, eye level for walls. The golden rule for sizing: the code\u2019s width should be at least one-tenth of the expected scanning distance (a code scanned from 2 metres away needs to be about 20 cm wide).',
        'Digital placements are even simpler: the code just needs to be at least 2 cm (about 0.8 inches) on screen, rendered crisply at the display\u2019s resolution. A blurry, upscaled code in a slide deck will fail far more often than a small sharp one.',
      ],
      subsections: [
        {
          subheading: '\uD83C\uDFEB Classrooms & training',
          text: 'Project the code at the start of a session for attendance, or print it on handouts for end-of-class feedback. Students scan in seconds \u2014 no roll-call apps, no email lists.',
        },
        {
          subheading: '\uD83C\uDF9F\uFE0F Events & conferences',
          text: 'Put registration and session-feedback forms on banners, badges, and seat cards. Attendees open the form while the talk is still fresh, which is when feedback is most honest.',
        },
        {
          subheading: '\uD83C\uDF7D\uFE0F Shops & restaurants',
          text: 'Table tents and receipts are perfect for feedback and loyalty-program signups. Offer a small incentive ("scan for 10% off your next visit") and watch response rates climb.',
        },
        {
          subheading: '\uD83C\uDFE2 Offices & workplaces',
          text: 'Incident reports, IT requests, anonymous suggestions, visitor sign-in \u2014 a QR code on the noticeboard turns a tedious process into a two-second scan.',
        },
      ],
    },
    {
      id: 'common-mistakes',
      heading: '5 Mistakes That Kill Your Form Response Rate',
      paragraphs: [
        'Most Google Form QR codes fail for avoidable, boring reasons. Run through this checklist before you print or publish \u2014 each one takes seconds to fix and any one of them can silently zero out your responses.',
      ],
      bullets: [
        'Linking the edit URL instead of the share link: if the code opens a page asking you to sign in to Google, you copied the editor link from your address bar. Always copy from Send \u2192 link tab. Test in an incognito window to be sure.',
        'No quiet zone: the code needs a clean white margin on all four sides, at least as wide as one module row. A code jammed against a colored background or design edge will not scan reliably.',
        'Too small for the distance: a 3 cm code on a poster across the room is decoration, not a tool. Apply the distance \u00f7 10 rule and test from the real viewing spot.',
        'Low contrast: light grey on white, or brand colors with similar luminance, break scanners. Black on white is king; if you must use color, keep the foreground dark and the background light.',
        'Closing responses after printing: once "Accepting responses" is off, your beautiful code opens a dead "form closed" page. Double-check the Responses tab, and re-test the code periodically if the campaign runs for weeks.',
      ],
    },
    {
      id: 'track-qr-code-scans',
      heading: 'Can You Track How Many People Scanned the Code?',
      paragraphs: [
        'A plain static QR code cannot count scans \u2014 it is just your URL drawn as squares, with no server in the middle. That is the trade-off for being free and permanent. But you still have good options for measuring results.',
        'The simplest: Google Forms itself. The Responses tab shows every submission with a timestamp, and the summary charts show responses over time. If scans spike the day you put up posters, the submissions graph will show it \u2014 submission data is usually the metric you actually care about anyway.',
        'If you specifically want scan counts, put a tracked short link (for example Bitly) between the QR code and the form. Bitly\u2019s free tier shows click counts, locations, and devices, which approximate your scan numbers. Dynamic QR code services do the same thing natively \u2014 they host a redirect so every scan passes through their server \u2014 but they typically require a paid plan and the code stops working if the subscription lapses.',
        'For most Google Form use cases, the practical setup is: free static QR code \u2192 shortened forms.gle or Bitly link \u2192 form responses as your source of truth. You get permanence for free and analytics where they matter.',
      ],
    },
    {
      id: 'do-qr-codes-expire',
      heading: 'Do QR Codes for Google Forms Expire?',
      paragraphs: [
        'No \u2014 a static QR code never expires on its own. The pattern of squares simply encodes your form\u2019s URL, and it will decode to that URL ten years from now exactly as it does today. There is no subscription, no renewal, and nothing to pay to keep it alive.',
        'What can break the code is everything around it. If you delete the form, the code opens a dead page. If you turn off "Accepting responses", scanners land on a "not accepting responses" notice. If you change the form\u2019s sharing settings to restrict it to your organization, anyone outside it gets an access-denied screen. The code itself is immortal; the destination is what needs care.',
        'So treat the form like infrastructure: don\u2019t delete it while the code is in the wild, keep responses open for the campaign\u2019s full run, and scan the printed code yourself every few weeks on long campaigns. Do that, and a QR code you print today will keep collecting responses for years.',
      ],
    },
  ],
  faqsTitle: 'Google Form QR Code FAQs',
  faqs: [
    {
      question: 'How do I get a QR code for my Google Form?',
      answer:
        'Open your form, click Send, switch to the link tab, tick "Shorten URL", and copy the link. Paste it into a free QR code generator, download the PNG, and you are done \u2014 the whole process takes under a minute and costs nothing.',
    },
    {
      question: 'Is there a free QR code generator for Google Forms?',
      answer:
        'Yes \u2014 the generator on this site is completely free with no sign-up, no watermark, and no scan limits. Because Google Form QR codes are static URL codes, you never need a paid plan to create or keep them working.',
    },
    {
      question: 'Do QR codes for Google Forms expire?',
      answer:
        'No. A static QR code encodes your form\u2019s URL permanently and never expires. It only stops working if the form itself is deleted, responses are turned off, or sharing is restricted \u2014 so keep the form live and accepting responses.',
    },
    {
      question: 'Can I see who scanned my QR code?',
      answer:
        'A static QR code cannot track scans by itself. Use Google Forms\u2019 Responses tab for submission counts and timestamps, or route the code through a tracked short link (like Bitly) to get approximate scan numbers, locations, and devices.',
    },
    {
      question: 'Why does my QR code not open the form?',
      answer:
        'The most common cause is copying the editor URL (with /edit in it) instead of the respondent share link \u2014 it asks scanners to sign in to Google. Other culprits: responses are turned off, the form needs internet to load, or the printed code is too small or low-contrast to scan.',
    },
    {
      question: 'What size should I print a Google Form QR code?',
      answer:
        'Use the distance \u00f7 10 rule: the code should be at least one-tenth as wide as the scanning distance. A code scanned from 2 metres away needs to be ~20 cm wide; a table tent scanned at arm\u2019s length works fine at 4\u20135 cm. Always test from the real viewing distance before mass printing.',
    },
  ],
  ctaTitle: 'Turn Your Form Into a QR Code Now',
  ctaDesc:
    'Paste your Google Form link and get a free, print-ready QR code in seconds \u2014 no sign-up, no watermarks, and it works forever.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getHowToMakeQrCodeForGoogleFormData(_locale: Locale): GuideArticleData {
  return enData;
}
