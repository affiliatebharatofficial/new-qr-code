import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToMakeQrCodeForZoomData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a QR Code for a Zoom Meeting (Free)',
    description:
      'Create a QR code for a Zoom meeting in under a minute: copy the invite link, paste it into a free generator, and print it on slides or posters — free.',
    badge: 'Guides',
    h1: 'How to Make a QR Code for a Zoom Meeting',
    subheadline:
      'Typing a 10-digit meeting ID and a passcode from a slide is slow, error-prone, and kills the first five minutes of every session. A QR code for a Zoom meeting fixes that: one scan opens the meeting directly on the attendee\'s phone or laptop, with the passcode already embedded. This guide shows you how to create one in under a minute, how to handle passcodes and waiting rooms, and where to place the code so people actually scan it — in classrooms, offices, webinars, and events.',
    readingTime: '8 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan, no typing',
        text: 'A QR code holding your Zoom join link lets attendees join in one tap — no meeting ID, no passcode to type, no typos.',
      },
      {
        label: 'Use the full invite link',
        text: 'Copy the complete join URL (with the ?pwd= parameter), not just the meeting ID — that is what carries the passcode.',
      },
      {
        label: 'Static is fine for one meeting',
        text: 'A free static QR code never expires. Use a dynamic code only if you need to change the meeting link later.',
      },
      {
        label: 'Test before you share',
        text: 'Scan the code with a second device before the meeting starts, and check whether it lands in the waiting room as expected.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-a-qr-code-for-zoom',
        heading: 'Why a QR Code for a Zoom Meeting Beats a Link or ID',
        paragraphs: [
          'Every Zoom session starts with the same friction: the host reads out a meeting ID, attendees fumble with their keyboards, someone mistypes a digit, and the first minutes dissolve into "can you repeat that?" A QR code removes the entire step. The attendee points their phone camera at the code, taps the notification, and Zoom opens with the meeting already selected. For in-person rooms — classrooms, conference halls, training sessions — it is the fastest possible join path, because nobody has to switch apps, copy text, or type anything at all.',
          'The advantage is even bigger on printed material. A meeting link printed on a poster, a handout, or a name badge is nearly useless: nobody will type a 60-character URL by hand. A QR code turns that same poster into a working join button. The same applies to projected slides — a code on the opening slide lets late arrivals join silently without interrupting the speaker to ask for the link. Hybrid events benefit twice over: remote attendees click the link, in-person attendees scan the code, and both end up in the same room.',
          'There is also a reliability angle. Meeting IDs are easy to mishear and passcodes are easy to mistype, especially on phone keyboards. A QR code encodes the exact join URL, including the encrypted passcode parameter, so the attendee\'s device does the precise work. Fewer failed joins means fewer "I can\'t get in" messages to the host, fewer people stuck in the wrong meeting, and a session that starts on time instead of five minutes late.',
        ],
        callout: {
          title: 'The passcode rides along',
          text: 'Zoom invite links contain a ?pwd= parameter with the encrypted passcode. When attendees join through that link, Zoom skips the passcode prompt entirely.',
          type: 'tip',
        },
      },
      {
        id: 'create-qr-code-step-by-step',
        heading: 'How to Create a QR Code for a Zoom Meeting (Step by Step)',
        paragraphs: [
          'The whole process takes about a minute and needs no account, no software install, and no payment. You need two things: your Zoom meeting invite link, and a free QR code generator. Here is the exact sequence.',
          'First, get your invite link from Zoom. In the Zoom desktop or web app, open your scheduled meeting and click "Copy Invitation" (or "Invite" then "Copy Invite Link"). The link looks like https://us02web.zoom.us/j/12345678901?pwd=AbCdEfGhIjKlMnOpQrStUv. That full URL — including everything after the question mark — is what you want. Do not use just the meeting ID number, and do not use the "Join URL" without the pwd parameter if your meeting has a passcode, or attendees will hit a passcode prompt anyway.',
          'Next, open the free QR code generator and choose the URL (or Website) type. Paste the complete invite link into the URL field, and the QR code updates instantly in the preview. Check the preview carefully: it should show a normal black-and-white code. Then download it as a PNG — high resolution if you plan to print it on a poster, standard size if it is going on a slide or a chat message.',
          'Finally, test before you distribute. Scan the code with your own phone, confirm it opens Zoom (or the browser join page) with the right meeting, and confirm whether it drops you into the waiting room or straight into the session. Testing with a second device is worth the thirty seconds: it catches the two most common mistakes — a truncated link, and a code generated from the meeting ID alone instead of the full URL.',
        ],
        bullets: [
          'Copy the full invite link from Zoom, including the ?pwd= passcode parameter.',
          'In the generator, select the URL type and paste the complete link.',
          'Download as PNG — high resolution for print, standard for screens.',
          'Scan-test with a second device before sharing the code anywhere.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator with URL field for a Zoom meeting link',
            caption: 'Paste the full Zoom invite link into the URL field — the code generates instantly.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'Choosing the URL QR code type for a Zoom meeting link',
            caption: 'Choose the URL type so the code opens the Zoom join link directly.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Downloading the Zoom meeting QR code as a PNG file',
            caption: 'Download the finished code as a PNG, ready for slides, posters, or chat.',
          },
        ],
      },
      {
        id: 'passcode-waiting-room-settings',
        heading: 'Passcodes, Waiting Rooms, and Meeting Settings That Matter',
        paragraphs: [
          'A QR code only works as smoothly as the meeting settings behind it. The most common surprise is the waiting room: if your meeting has one enabled, scanning the code still drops attendees into the waiting room, and the host must admit them. That is usually the right behavior for classes and public events — it just means the host should be in the meeting a few minutes early to admit people, or enable the setting that lets authenticated users bypass the waiting room.',
          'Passcodes deserve a second look too. If you copied the invite link before adding a passcode, or if you regenerated the passcode after copying the link, the ?pwd= parameter in your code is stale and attendees will be asked to type the new passcode. The fix is simple: after any passcode change, copy the invite link again and regenerate the QR code. Because free static codes cost nothing to regenerate, there is no reason to keep distributing a code built from an old link.',
          'For recurring meetings, check whether your meeting uses a Personal Meeting ID (PMI) or a generated ID. A PMI link stays the same across sessions, so one printed QR code can serve an entire semester of classes or a weekly team standup. A generated meeting ID with a recurring schedule also keeps the same join link across occurrences, so a single code works for the whole series. Either way, verify the link still works at the start of a new term or quarter — Zoom settings sometimes reset when meetings are edited.',
        ],
        callout: {
          title: 'Regenerated the passcode? Regenerate the code',
          text: 'Changing a Zoom passcode invalidates the ?pwd= parameter in any QR code built from the old link. Copy the fresh invite link and make a new code — it takes under a minute.',
          type: 'warning',
        },
      },
      {
        id: 'static-vs-dynamic',
        heading: 'Static vs Dynamic QR Codes for Zoom Meetings',
        paragraphs: [
          'Most Zoom QR codes should be static, and that is good news: static codes are free, they never expire, and they work forever as long as the Zoom link itself still works. A one-off team meeting, a class session, a webinar, or a conference talk all fit the static pattern perfectly — you generate the code once, share it, and you are done. There is no subscription, no expiry date, and no dashboard to maintain.',
          'A dynamic QR code earns its keep only when the destination might change after you have already distributed the code. The classic case is a printed poster or a batch of handouts: if the meeting link changes after printing, a dynamic code lets you point the same printed code at the new link without reprinting anything. Dynamic codes also give you scan statistics — how many people scanned, and roughly when — which matters if you are measuring turnout for a marketing webinar or a paid event.',
          'The trade-off is that dynamic codes usually require an account and a paid plan on the generator platform, and the code stops working if the subscription lapses. For a Zoom meeting, that is rarely worth it. Unless you are printing hundreds of posters or you genuinely need scan analytics, the free static code is the right tool: simpler, permanent, and free.',
        ],
        subsections: [
          {
            subheading: 'Static QR code',
            text: 'Free, never expires, no account needed. Best for one-off meetings, classes, slides, and chat messages. The link is baked into the code itself.',
          },
          {
            subheading: 'Dynamic QR code',
            text: 'The destination can be changed after printing, and scans can be tracked. Worth it only for large print runs or events where you need attendance analytics.',
          },
        ],
      },
      {
        id: 'where-to-place-zoom-qr-code',
        heading: 'Where to Place Your Zoom QR Code So People Actually Scan It',
        paragraphs: [
          'Placement decides whether your code gets scanned or ignored. On slides, put the code on the opening slide and the closing slide, large enough to be read from the back row — at least 4-5 cm on screen for a small room, bigger for a hall. Add a short label under it: "Scan to join the Zoom meeting" tells people what happens when they scan, which roughly doubles scan rates compared to a bare code. Keep the slide background plain white behind the code; a busy photo background breaks scanning.',
          'On printed material, size follows viewing distance. A code on a handout or name badge can be as small as 2 x 2 cm, but a poster meant to be scanned from a metre away needs at least 5 x 5 cm, and a wall poster scanned from several metres needs 10 cm or more. Print at high resolution (300 DPI) so the modules stay crisp — a blurry code is an unscannable code. And always leave a white quiet zone around the code; text or graphics touching the edge cause intermittent scan failures.',
          'For digital sharing, the code works anywhere an image works: WhatsApp groups, email invitations, event pages, and chat announcements. In a chat message, send the code image together with the plain link as a fallback — some people will be on a desktop where scanning is awkward, and the link covers them. For recurring meetings, pin the code image in the group so new members can find it without scrolling.',
        ],
        bullets: [
          'Slides: opening and closing slides, with a "Scan to join" label underneath.',
          'Print: 2 cm minimum for handouts, 5 cm for posters at arm\'s length, larger for distance viewing.',
          'Always keep a white margin (quiet zone) around the code and print at 300 DPI.',
          'In chat: send the code image plus the plain link as a desktop fallback.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common Mistakes (and How to Avoid Them)',
        paragraphs: [
          'The single most common mistake is encoding only the meeting ID instead of the full join URL. A code containing "12345678901" does nothing useful — a phone camera cannot turn digits into a Zoom join. Always encode the complete https:// link. The second most common mistake is a truncated link: copying from a wrapped email line or a chat message that cut the URL short produces a code that opens a broken page. Copy directly from Zoom\'s "Copy Invitation" button, never by retyping or copying from a forwarded message.',
          'Another frequent failure is the wrong meeting link entirely — a code built from last week\'s meeting, or from the host\'s Personal Meeting ID when the session uses a scheduled meeting. Label your codes when you generate them (for example, save the file as "zoom-maths-class-oct-2026.png") so you never distribute the wrong one. Finally, do not shrink the code to fit a cramped corner of a slide or poster: a code too small for the viewing distance fails silently, and attendees will simply assume the meeting link is broken rather than tell you the code was too small.',
        ],
        callout: {
          title: 'If scans fail, check the link first',
          text: 'Nine times out of ten, a "broken" Zoom QR code is just a wrong, truncated, or stale link. Scan it yourself and look at the URL your phone shows before reprinting anything.',
          type: 'info',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for a Zoom meeting for free?',
        answer:
          'Copy the full invite link from Zoom (click "Copy Invitation" in your meeting), paste it into a free QR code generator as a URL code, and download the PNG. The process takes under a minute, needs no account, and the code never expires as long as the Zoom link still works.',
      },
      {
        question: 'Does the QR code include the Zoom passcode?',
        answer:
          'Yes, if you use the complete invite link. Zoom invite links contain a ?pwd= parameter with the encrypted passcode, so attendees who join through the code skip the passcode prompt. If you only encode the meeting ID number, attendees will still be asked for the passcode.',
      },
      {
        question: 'Do Zoom QR codes expire?',
        answer:
          'A static QR code itself never expires. However, it stops working if the Zoom meeting is deleted, the meeting ID changes, or the passcode is regenerated (which invalidates the old ?pwd= parameter). For recurring meetings with a stable link, one code can work for months.',
      },
      {
        question: 'Can I use one QR code for a recurring Zoom meeting?',
        answer:
          'Yes. Recurring meetings keep the same join link across all occurrences, so a single QR code works for the whole series. Personal Meeting ID (PMI) meetings are even more stable — the same code can serve a weekly class or standup indefinitely.',
      },
      {
        question: 'What size should a Zoom QR code be on a poster?',
        answer:
          'Size follows viewing distance: about 2 x 2 cm for handouts, at least 5 x 5 cm for a poster scanned from arm\'s length, and 10 cm or more for a wall poster scanned from several metres away. Print at 300 DPI and keep a white margin around the code.',
      },
      {
        question: 'What if attendees scan the code but land in the waiting room?',
        answer:
          'That is the meeting\'s waiting room setting working as intended, not a problem with the code. The host needs to admit attendees, or can enable the setting that lets signed-in or authenticated users bypass the waiting room. Join a few minutes early to admit people promptly.',
      },
    ],
    ctaTitle: 'Make Your Zoom Meeting QR Code Now',
    ctaDesc:
      'Copy your Zoom invite link, paste it into the free generator, and download your QR code in under a minute — no sign-up, no cost, no expiry.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
