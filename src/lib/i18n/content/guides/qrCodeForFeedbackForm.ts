import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForFeedbackFormData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Feedback Form: Get More Reviews Free',
    description:
      'Create a QR code for a feedback form free — setup steps, form design that gets answers, best placements, and mistakes that kill response rates.',
    badge: 'Guides',
    h1: 'QR Code for Feedback Form: Get More Reviews for Free',
    subheadline:
      'Most customers will never open your email survey or type a long link from a receipt — but they will point their phone at a QR code sitting right in front of them. A QR code for a feedback form turns that moment into a response: the scan opens a short form, the customer answers in under a minute, and the feedback lands in your spreadsheet while the experience is still fresh. This guide shows how to build one for free, how to design a form people actually finish, where to place the code so it gets scanned, and which mistakes quietly kill your response rate.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Link the code to a form, not a website',
        text: 'A QR code that opens a feedback form collects answers; a code that opens your homepage collects nothing.',
      },
      {
        label: 'Keep the form under one minute',
        text: 'One rating question, two or three short questions, and an optional comment box is enough — longer forms get abandoned.',
      },
      {
        label: 'It costs nothing to start',
        text: 'A free form tool plus a free QR generator is all you need. No survey software subscription, no printing service.',
      },
      {
        label: 'Placement decides the response rate',
        text: 'A code on the receipt, table, or package gets scanned at the moment of experience; a code buried on a website does not.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-qr-code-feedback-form',
        heading: 'What Is a QR Code for a Feedback Form?',
        paragraphs: [
          'A QR code for a feedback form is a scannable code that opens a short survey or review form when someone points their phone camera at it. Behind the code sits a form — usually built in Google Forms, Microsoft Forms, Typeform, or Jotform — that asks a few questions about the customer’s experience and records the answers in a spreadsheet. The customer does not need to install an app, create an account, or type a web address; the scan takes two seconds and the form opens in their browser.',
          'The setup has three parts, and each one is free. First, the form itself, which you build in a free form tool. Second, the QR code, which you generate from the form’s link. Third, the place you display the code — a printed receipt, a table tent, a product package, a poster, or an email signature. Because the code is static and the form does the collecting, the whole system takes under twenty minutes to set up and costs nothing to run.',
          'It works for almost any business that serves people face to face: restaurants, cafes, salons, gyms, clinics, hotels, retail shops, coaching centres, event organisers, and delivery businesses. It also works for online sellers, who can print the code on packaging so the buyer scans it when the parcel arrives. The common thread is timing — the code asks for feedback at the exact moment the customer can still remember the experience clearly, which is when the most honest and useful answers come in.',
        ],
        callout: {
          title: 'Static codes are the right choice here',
          text: 'A static QR code encodes the form link directly and never expires, so you can print it on receipts and packaging and reuse it indefinitely. You only need a dynamic code if you want to change the form link later without reprinting — for most feedback use, the form link stays the same.',
          type: 'info',
        },
      },
      {
        id: 'why-qr-code-feedback-beats-paper-and-email',
        heading: 'Why QR Code Feedback Beats Paper Forms and Email Surveys',
        paragraphs: [
          'Paper comment cards have two problems: someone has to collect them, and someone has to type the answers into a spreadsheet before they are useful. Most cards are never returned at all — they get left on the table, folded into a pocket, and thrown away. A QR code removes both steps. The customer answers on their own phone, and every answer appears in your spreadsheet automatically, timestamped and ready to sort. There is nothing to collect, nothing to transcribe, and nothing to lose.',
          'Email surveys have a different problem: timing. An email sent hours or days after the visit arrives when the customer has moved on, and it competes with dozens of other unread messages. Open rates for post-visit survey emails are low, and completion rates are lower still. A QR code asks while the experience is still fresh — at the table, at the checkout counter, or in the waiting room — when the customer can still remember exactly what went right or wrong. Feedback collected in the moment is more specific, and specific feedback is the only kind you can act on.',
          'The QR approach is also cheaper and more flexible than either alternative. Printing a small code costs almost nothing, and the same code can go on receipts, table tents, posters, packaging, and business cards at the same time. If you run a seasonal offer or change one question in the form, the printed code keeps working — the link behind it does not change. And because the responses collect in one place, you can spot patterns — a recurring complaint about waiting time, for example — in days instead of discovering them months later from a stack of paper cards.',
        ],
        subsections: [
          {
            subheading: 'Paper comment cards',
            text: 'Easy to ignore, hard to collect, and every answer must be typed up by hand before it can be analysed.',
          },
          {
            subheading: 'Email surveys',
            text: 'Arrive too late, compete with the inbox, and get low open and completion rates.',
          },
          {
            subheading: 'QR code feedback',
            text: 'Asked in the moment, answered on the customer’s own phone, and recorded automatically with a timestamp.',
          },
        ],
      },
      {
        id: 'how-to-create-a-qr-code-for-a-feedback-form',
        heading: 'How to Create a QR Code for a Feedback Form (Step by Step)',
        paragraphs: [
          'Start with the form, because the QR code is only a shortcut to it. Open Google Forms and create a form titled with your business name and the word feedback — for example, “Cafe Aroma — We Value Your Feedback”. Add one rating question first, such as a 1-to-5 star scale or a simple “How was your visit today?” with options from Excellent to Poor. Then add two or three short questions that matter to your business: what did the customer like most, what could be improved, and would they recommend you to a friend. Finish with one optional comment box and, if you want to follow up, an optional name or phone field — make it optional, not required, or many people will abandon the form rather than share personal details.',
          'Keep the form short on purpose. Every extra question costs you completions: a form that takes thirty seconds gets finished, a form that takes three minutes gets abandoned halfway. Test this yourself — fill in your own form on your phone and time it. If it takes more than a minute, cut a question. Turn off “Collect email addresses” unless you genuinely need it, and avoid making any field required except the rating question itself. A short form that everyone finishes gives you far more usable data than a long form that almost nobody completes.',
          'Next, get the form’s link. In Google Forms, click Send, choose the link icon, and copy the short link. Test it before you print anything: open the link in a private browser window, submit a test response, and check that it appears in the Responses tab with the right timestamp. Then delete the test response so your feedback starts clean. If you use Microsoft Forms, Typeform, or Jotform, the steps are the same — build the form, copy its share link, and test it once.',
          'Now generate the QR code. Open the free QR code generator, choose the URL type, and paste the form link. Before downloading, set the error-correction level to high if the code will be printed small on a receipt or displayed at a distance on a poster — high error correction keeps the code scannable even if part of it is smudged, creased, or slightly blurry. Download the code as a high-resolution PNG for printing, or as SVG if you are placing it in a poster or packaging design. Print it at least 3 × 3 cm on receipts and table tents, and larger — 8 cm or more — on posters and standees that people scan from a metre away.',
          'Finally, test the printed code with a real phone before you put it in front of customers. Print one copy, scan it from the distance and angle a customer would use, and confirm the form opens and submits correctly. Check it on both an iPhone and an Android phone if you can, and check it in the actual lighting of your shop — a code that scans fine under bright office light can struggle in a dim restaurant corner. Add a short line of text next to the code, such as “Scan to share your feedback — it takes 30 seconds”, because a code with no instruction gets far fewer scans than one that tells people what happens when they scan it.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code for a feedback form',
            caption: 'The free generator homepage — your feedback QR code starts here, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing the URL option for linking a feedback form',
            caption: 'Choose the URL type and paste your feedback form link — scanners go straight to the form.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a feedback form QR code as PNG or SVG for printing',
            caption: 'Download PNG for receipts and table tents, or SVG for posters and packaging designs.',
          },
        ],
      },
      {
        id: 'designing-a-feedback-form-people-finish',
        heading: 'Designing a Feedback Form People Actually Finish',
        paragraphs: [
          'The form behind the code matters more than the code itself. A well-designed feedback form gets a high completion rate because it respects the customer’s time; a badly designed one gets abandoned after the first question. The single most important rule is to ask the rating question first. A 1-to-5 star scale or a simple Excellent-to-Poor choice takes one tap, and once someone has answered one question they are far more likely to answer the next two. If the first thing a customer sees is a long text box asking them to write a paragraph, most will close the form immediately.',
          'Choose question types that match how people actually answer on a phone. Multiple-choice and rating scales work well because they need one tap; long text boxes work poorly because typing on a phone is slow. Keep open questions to one — “Anything we could do better?” — and make it optional. Avoid questions that feel like a test or an interrogation: “What was the name of the staff member who served you?” or “Which branch did you visit?” are questions for your internal records, not for a customer who just wants to say the food was good.',
          'Two small details make a big difference to response quality. First, add a short thank-you message on the confirmation screen — “Thanks for your feedback, we read every response” — because customers who feel heard are more likely to answer again next time. Second, ask the recommendation question: “Would you recommend us to a friend?” is the single most useful question in a feedback form, because it separates happy customers from merely satisfied ones, and the people who answer yes are the ones you can later invite to leave a public Google review. Some businesses add a second QR code or a link on the thank-you screen that points happy customers to their Google review page — the feedback form filters, and the review link converts.',
        ],
        bullets: [
          'Ask the rating question first — one tap gets the customer started.',
          'Use multiple-choice and rating scales; keep open text to one optional question.',
          'Never make name, phone, or email required — optional fields get more completions.',
          'Add a thank-you message on the confirmation screen so customers feel heard.',
          'Ask “Would you recommend us?” — it identifies your happiest customers for Google reviews.',
        ],
      },
      {
        id: 'where-to-place-your-feedback-qr-code',
        heading: 'Where to Place Your Feedback QR Code So It Gets Scanned',
        paragraphs: [
          'Placement decides your response rate more than any other choice. The best places share one quality: the customer is already waiting, holding something, or finishing the experience. On a restaurant table, the code sits in front of the customer while they wait for the bill — a perfect moment to ask. On a printed receipt, it travels home with the customer and can be scanned later, which suits retail shops and clinics. On product packaging, it reaches the buyer at the moment they open the product, which is ideal for online sellers who never meet their customers face to face.',
          'In service businesses, the waiting room and the checkout counter are the two strongest spots. A salon can place a small standee at each mirror, a clinic can put the code on the discharge slip, and a gym can display it near the exit. Hotels get good results from a code on the room-service menu or the check-out desk, and event organisers from a code on the attendee badge or the closing slide. The pattern is the same everywhere: put the code where the experience ends, not where it begins, because feedback about a finished experience is both more honest and more complete.',
          'Digital placements work too, and they cost nothing. Add the code to your email signature, your WhatsApp business message after an order is delivered, or the thank-you page after an online purchase. A delivery business can print it on the delivery bag or include it on the invoice. The one place that performs poorly is a website footer or a social media bio — a QR code on a screen that the customer is already viewing on their phone cannot be scanned with that same phone, so save those spots for a plain link instead.',
        ],
        callout: {
          title: 'Always add a call to action',
          text: 'A bare QR code gets ignored. Add one line next to it — “Scan to rate your visit, 30 seconds” — and scans rise sharply, because people know exactly what will happen and how long it will take.',
          type: 'tip',
        },
      },
      {
        id: 'common-feedback-qr-code-mistakes',
        heading: 'Common Mistakes That Kill Your Feedback Response Rate',
        paragraphs: [
          'The most common mistake is a form that is too long. A ten-question survey with three required text boxes feels like homework, and customers abandon it after the second question — leaving you with partial responses and no data at all. The fix is simple: cut the form to one rating question, two or three multiple-choice questions, and one optional comment. If you need more detail, follow up with the few customers who leave contact details, instead of interrogating everyone who scans.',
          'The second mistake is a code that is too small, too low-contrast, or printed on a surface that defeats scanning. A tiny code on a crumpled receipt, a dark code on a dark background, or a code printed on glossy paper that reflects the light will not scan, and a customer who tries once and fails will not try again. Size the code for the distance — at least 3 cm on a table tent, larger on a poster — keep dark modules on a light background with a quiet zone around the edges, and test the printed copy in the real lighting of your shop before you print a hundred copies.',
          'The third mistake is asking for feedback and then doing nothing visible with it. Customers who report a problem and hear nothing back stop answering, and customers who praise you and see no change in service assume nobody reads the responses. Check the spreadsheet at least once a week, fix the recurring complaints, and tell customers what changed — a small sign saying “You asked, we fixed it: faster billing at the counter” does more for future response rates than any redesign of the form. Feedback is only valuable if it changes something, and customers can tell when it does.',
          'Finally, never link the code to the wrong destination. A code that opens your homepage, your Instagram profile, or a broken link wastes the one moment a customer was willing to give you feedback — and they will not scan a second time. Before printing, scan the code yourself and confirm it opens the form, not the website. If you ever change the form, generate a fresh code from the new link, and reprint. The code is a promise that scanning leads to a quick form; breaking that promise costs you the next hundred scans.',
        ],
        callout: {
          title: 'Check responses weekly, not monthly',
          text: 'A complaint spotted in week one can be fixed before it becomes a pattern. A complaint spotted a month later is already a dozen unhappy customers — and possibly a bad public review.',
          type: 'warning',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for a feedback form for free?',
        answer:
          'Build a short form in Google Forms, Microsoft Forms, or a similar free tool, copy its share link, and paste it into a free QR code generator using the URL type. Download the code as a PNG and print it on receipts, table tents, or packaging. Customers scan it with their phone camera and the form opens — no app, no sign-up, and no cost.',
      },
      {
        question: 'What should I ask in a QR code feedback form?',
        answer:
          'Start with one rating question, such as a 1-to-5 star scale. Add two or three multiple-choice questions about what mattered most — food, service, waiting time, cleanliness — and finish with one optional comment box. Keep name and contact details optional, never required. A form that takes under a minute gets far more completions than a long survey.',
      },
      {
        question: 'Do customers need an app to scan a feedback QR code?',
        answer:
          'No. Modern iPhone and Android cameras open QR code links directly, with no app to install. The scan opens the feedback form in the phone’s browser, the customer answers and taps submit. Anyone whose camera cannot scan QR codes can use the form link printed next to the code as a fallback.',
      },
      {
        question: 'Where should I put a QR code for customer feedback?',
        answer:
          'Put it where the experience ends: restaurant tables, printed receipts, checkout counters, waiting rooms, product packaging, and hotel check-out desks. Add a short instruction line like “Scan to rate your visit — 30 seconds”. Avoid website footers and social media bios, where a code cannot be scanned by the same phone displaying it.',
      },
      {
        question: 'Can a QR code feedback form increase Google reviews?',
        answer:
          'Yes, indirectly. The form filters your customers: those who rate you highly are your best candidates for a public review. Add a link to your Google review page on the form’s thank-you screen, so happy customers can leave a public review in one more tap while unhappy customers give you private feedback you can act on first.',
      },
      {
        question: 'How do I see the feedback collected through a QR code?',
        answer:
          'Every form submission is recorded automatically in the linked spreadsheet, with a timestamp. In Google Forms, open the Responses tab to see summaries and charts, or open the linked Google Sheet to sort, filter, and analyse individual answers. Check the responses at least once a week so recurring problems get fixed quickly.',
      },
    ],
    ctaTitle: 'Make Your Feedback QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create the QR code for your feedback form and start hearing from your customers today.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
