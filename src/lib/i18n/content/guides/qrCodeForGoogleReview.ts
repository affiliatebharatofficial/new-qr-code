import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForGoogleReviewData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'Google Review QR Code: Get More Reviews (Free)',
    description:
      'Make a Google review QR code free — get your review link from Google Business Profile, turn it into a QR code, and print it to collect more reviews.',
    badge: 'Guides',
    h1: 'Google Review QR Code: Get More 5-Star Reviews Free',
    subheadline:
      'Most happy customers never leave a review — not because they do not want to, but because finding your business on Google, tapping the right button, and writing a review takes too many steps. A Google review QR code removes all of them: one scan opens your review form directly. This guide shows how to get your official review link, turn it into a free QR code, print it where customers will actually see it, and ask for reviews in a way that follows Google’s rules.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan opens the review form',
        text: 'A Google review QR code links straight to your “Write a review” form — no searching, no tapping through your listing.',
      },
      {
        label: 'Get the link free from Google',
        text: 'Google Business Profile gives you the official review link in a few clicks: Read Reviews → Get more reviews → Copy.',
      },
      {
        label: 'Customers need a Google account',
        text: 'Reviewers must be signed in to Google to post. A code cannot remove that step, so ask in person while the experience is fresh.',
      },
      {
        label: 'Never pay for reviews',
        text: 'Discounts, gifts, or freebies in exchange for reviews violate Google policy and can get reviews removed — ask, don’t incentivise.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-google-review-qr-code',
        heading: 'What Is a Google Review QR Code?',
        paragraphs: [
          'A Google review QR code is a scannable code that opens your business’s Google review form directly. When a customer points their phone camera at it, their browser opens the “Write a review” screen for your business — with your name, star rating selector, and an empty text box ready to go. There is nothing to search for, no listing to scroll through, and no link to type. The entire journey from “I had a great experience” to a published review takes under a minute.',
          'The code itself stores nothing more than a web link — your Google review link. Google creates that link for every business with a Google Business Profile, and it points to the review form for that specific listing. Because the destination is a Google page, the code works on any phone with a camera: iPhones scan it with the built-in Camera app, Android phones do the same, and no extra app is needed on either side. You do not need a paid tool, a subscription, or a review-management platform to make one.',
          'Why does a code work better than simply asking? Because every extra step loses reviewers. If you tell a customer to “find us on Google and leave a review”, most of them mean to do it and never get around to it — they forget the business name spelling, they land on the wrong listing, or they put it off until the moment has passed. A code printed on the receipt, the table, or the counter catches them while the good experience is still fresh, and the only action it asks for is pointing a phone. Businesses that put a review code in front of customers at the right moment routinely see their review volume rise within weeks, and more reviews — especially recent ones — improve how the business looks in local search results and on Google Maps.',
        ],
        callout: {
          title: 'A review link is not the same as a Maps link',
          text: 'Sharing your Google Maps listing link sends customers to your profile page, where they still have to find and tap “Write a review”. A review link opens the review form itself. Always use the review link — the one from “Get more reviews” in your Business Profile, or a Place ID link in the format search.google.com/local/writereview?placeid=YOUR_PLACE_ID — never the plain Maps URL.',
          type: 'info',
        },
      },
      {
        id: 'how-to-get-your-google-review-link',
        heading: 'How to Get Your Google Review Link',
        paragraphs: [
          'Before you can make the code, you need the link it will store. Google offers two ways to get it. The first — copying it from your Google Business Profile dashboard — is the official route and takes under a minute. The second — building it yourself from your Place ID — is the fallback when nobody on your team can log in to the profile, for example when an agency or a former employee still owns the account. Both produce a link that opens the same review form.',
          'The dashboard method only works on a computer: Google’s own help pages say review links and QR codes can only be generated from a computer browser, not from a phone. Sign in at business.google.com with the Google account that manages your profile, select “Read Reviews”, then “Get more reviews”. Google shows you a short link — it usually looks like g.page/r/…/review — and a button to copy it. Copy it, paste it into a notes app or an email to yourself, and keep it somewhere safe: you will use it in receipts, emails, WhatsApp messages, and the QR code itself. Google also shows its own QR code on the same screen, which you can download — but its design is plain, and it cannot be customised or printed at high resolution, which is why most businesses generate their own code from the same link.',
          'If you cannot get into the dashboard, use the Place ID method. Open Google’s Place ID Finder (in the Google Maps Platform documentation), search for your business name, and pick your listing from the results — the Place ID appears on the map. It is a long string of letters and numbers that usually starts with “ChIJ”. Then build the link by adding it to the end of this address: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID. Test the link before you use it: open it in a private browser window and confirm it opens the review form for your business, not someone else’s. One caution: Google says Place IDs can change over time, and recommends refreshing any that are more than 12 months old — so if a review link built this way stops working a year from now, look the Place ID up again and rebuild it.',
          'Whichever method you use, test the link on a phone before printing anything. Open it while signed in to a Google account and confirm it lands on the review form for your business. If it opens a search results page, a different business, or a “something went wrong” page, the link is wrong — fix it now, while reprinting costs nothing, rather than after a hundred cards have gone out.',
        ],
        subsections: [
          {
            subheading: 'Method 1: Business Profile dashboard',
            text: 'On a computer, go to business.google.com, select Read Reviews, then Get more reviews, and copy the link. Fastest and official — do this if you can log in.',
          },
          {
            subheading: 'Method 2: Place ID link',
            text: 'Find your Place ID in Google’s Place ID Finder, then build https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID. Use it when nobody can log in to the profile.',
          },
          {
            subheading: 'Method 3: Google’s own QR code',
            text: 'The same dashboard screen offers a downloadable QR code. It works, but it is plain and low-resolution — fine for a quick test, not for printed materials.',
          },
          {
            subheading: 'Test before you print',
            text: 'Open the link on a phone, signed in to Google, and confirm it opens your review form. A wrong link on a thousand printed cards is an expensive mistake.',
          },
        ],
      },
      {
        id: 'how-to-make-a-google-review-qr-code',
        heading: 'How to Make a Google Review QR Code (Step by Step)',
        paragraphs: [
          'Once you have the review link, making the code takes about two minutes and costs nothing. Open the free QR code generator and choose the URL type — the review link is a web address, so it belongs in the URL field, not in the text or Wi-Fi options. Paste the full review link exactly as Google gave it to you. Review links are long, so double-check that you pasted the whole thing: a link cut short by a line break or a missing character at the end will send scanners to a broken page. The generator will show a live preview of the code as you type, and you can scan that preview with your phone right away to confirm it opens the review form.',
          'Before downloading, set the error-correction level to high if the code will be printed small, stuck on a window, placed outdoors, or handled a lot — high error correction keeps the code scannable even when up to 30% of it is scratched, faded, or covered. Then download the code as a high-resolution PNG for everyday printing, or as SVG if you are placing it in a designed poster, a menu, packaging artwork, or a shop sign, where a vector file stays sharp at any size. Print the code at least 3 × 3 cm for something a customer holds in their hand, such as a receipt or a business card, and at least 8–10 cm for a counter stand or a poster that people scan from a metre away.',
          'Finally, test the printed code with a real phone — not just the preview on your screen. Print one copy at the size you plan to use, scan it from the distance and angle a real customer would use, and confirm it opens the review form for your business. Check it on both an iPhone and an Android phone if you can, and in the actual lighting of the place where it will sit: a code that scans fine under bright office light can struggle in a dim restaurant corner or on glossy paper that reflects the light. And add one line of text next to the code — “Scan to leave us a Google review — it takes 30 seconds” — because a bare code with no instruction gets far fewer scans than one that tells people exactly what will happen and how little time it takes.',
          'One decision to make before printing in bulk: static or dynamic. A static code stores your review link directly and never expires, which is right for most businesses — your Google review link does not change, so the code works forever. A dynamic code stores a short redirect link you can change later, which only matters if you think the destination might move (for example, if you rebuild your review link from a new Place ID). For a printed review card, a static free code is the simplest and most durable choice; just keep a copy of the image file so you can reprint it any time.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a Google review QR code',
            caption: 'The free generator homepage — your Google review QR code starts here, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing the URL option for a Google review link',
            caption: 'Choose the URL type and paste your Google review link — scanners go straight to the review form.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a Google review QR code as PNG or SVG for printing',
            caption: 'Download PNG for receipts and cards, or SVG for posters, menus, and shop signage.',
          },
        ],
      },
      {
        id: 'where-to-display-your-google-review-qr-code',
        heading: 'Where to Display Your Google Review QR Code',
        paragraphs: [
          'A review code only works if customers see it at the moment they are happiest with your service — right after a good meal, a finished haircut, a completed repair, or a successful delivery. That moment is worth more than any placement, so put the code where the customer is standing when the experience ends, not in a drawer or on a page they will never visit. The counter or till is the single best spot for most businesses: the customer is already there, phone in hand, paying — a small stand with the code and one line of text is all it takes.',
          'Restaurants and cafés get the most from table tents and the bill itself: print the code on the receipt or the bill folder, so it is in the customer’s hand as they finish, and add a table tent for diners who are still deciding. Salons, clinics, and service businesses should put it on the appointment card or the aftercare sheet the customer takes home, and on the reception desk where they check out. Shops can print it on packaging, shopping bags, and the thank-you card inside the parcel. If you deliver, stick it on the delivery box or the invoice — the customer opens the package at home, where they have a minute to scan.',
          'Digital placements matter too. Add the code to your email signature, your invoice template, and the “thank you” page customers see after booking or buying online. A WhatsApp follow-up message the day after a service — with the review link itself, not just the code — catches customers who were too busy at the counter. What does not work well is hiding the code on a page nobody visits, printing it so small it will not scan, or placing it where people are in a hurry to leave. The rule is simple: the code goes where the customer pauses, not where they rush past.',
        ],
        bullets: [
          'Counter or till: a small stand at checkout catches customers with their phone already in hand.',
          'Receipts and bills: print the code on the receipt or bill folder — it is in the customer’s hand as they finish.',
          'Table tents and menus: restaurants and cafés should place one on every table.',
          'Packaging and shopping bags: the code travels home with the customer and gets scanned later.',
          'Appointment cards and aftercare sheets: salons, clinics, and service businesses can print it on what customers take away.',
          'Email signature, invoices, and thank-you pages: digital touchpoints that reach customers after the visit.',
        ],
      },
      {
        id: 'how-to-get-more-reviews-without-breaking-the-rules',
        heading: 'How to Get More Reviews Without Breaking Google’s Rules',
        paragraphs: [
          'Timing beats everything else. Ask for the review while the experience is still fresh — at checkout, as the customer is leaving, or in a message sent the same day. Reviews requested within 24 hours of the purchase or service are far more likely to be written than ones asked for a week later, because the customer still remembers the details that make a review specific and believable. A short, honest ask works best: “If you’re happy with today, would you mind scanning this? It takes 30 seconds and it really helps a small business like ours.” Most customers say yes — they just need to be asked, and to be given a one-scan way to do it.',
          'Ask everyone, not only the customers who look delighted. Google’s policy is explicit: businesses must not selectively solicit reviews only from customers likely to leave positive ones, and must not discourage or filter out negative feedback. Asking every customer the same way keeps you inside the rules and, just as importantly, keeps your reviews believable — a profile with 200 reviews and a perfect 5.0 looks less trustworthy than one with a 4.7 and a few honest three-star reviews that the owner replied to. When a negative review does arrive, reply to it publicly, politely, and promptly: a thoughtful reply turns a complaint into evidence that you listen.',
          'Replying to reviews is the part most businesses skip, and it is free. Thanking reviewers by name, mentioning something specific from their visit, and responding to criticism without arguing shows future customers that real people run the business. Google also rewards activity: profiles with recent reviews and owner replies look more alive in local search than profiles whose last review is six months old. Set aside ten minutes a week to reply to every new review — it is the cheapest reputation work you will ever do.',
          'Finally, keep the request human and low-pressure. A sign that says “We’d love your feedback” with the code underneath works better than a script your staff reads like a sales pitch, and it works better still when the team genuinely believes in it. Train staff to mention the code once, naturally, at the end of a good interaction — and to drop it immediately if the customer is in a hurry or unhappy. A review a customer felt pushed into writing is worth less than no review at all, and a business that asks respectfully gets more reviews over time than one that chases them.',
        ],
        callout: {
          title: 'Never offer anything for a review',
          text: 'Discounts, freebies, gifts, or entry into a prize draw in exchange for a Google review violate Google’s policy. Google can remove the reviews and, in serious cases, restrict the profile. The same applies to asking staff, family, or friends to post reviews. Ask every customer, offer nothing in return, and let the reviews be honest.',
          type: 'warning',
        },
      },
      {
        id: 'common-google-review-qr-code-mistakes',
        heading: 'Common Mistakes That Break Google Review QR Codes',
        paragraphs: [
          'The most common mistake is encoding the wrong link. A Maps listing link, a Google search results link, or a link copied from the address bar while viewing your profile all look similar to a review link — but they send the customer to a page where they still have to find the review button, and most will not bother. Only two links open the review form directly: the short link from “Get more reviews” in your Business Profile, and the Place ID link in the format search.google.com/local/writereview?placeid=YOUR_PLACE_ID. If your code opens anything other than the review form, the link is wrong.',
          'Multi-location businesses make a related mistake: using one code for every branch. Each location has its own Business Profile, its own review link, and its own Place ID, so a code made for the main branch sends every scanner to the wrong listing. Generate a separate code per location, label the files clearly (for example, “review-qr-andheri.png” and “review-qr-bandra.png”), and check that each code opens the right branch’s form before printing. The same applies if your business moves or rebrands: a new listing means a new review link, and old codes must be replaced.',
          'The third mistake is printing too small, too low-contrast, or on the wrong surface. A 2 cm code squeezed into the corner of a receipt, a dark code on a dark background, or a code printed on glossy laminated paper that catches the light will not scan — and a customer who tries once and fails will not try again. Size the code for the viewing distance, keep dark modules on a light background with a quiet zone of blank space around the edges, and test the actual printed copy in the real lighting where it will be used. And never place the code behind glass at an angle, on a curved surface, or anywhere the phone camera cannot see it squarely.',
          'Finally, do not set the code out and forget it. Scan it yourself once a month — links can break, profiles can be suspended, and a Place ID can change — and re-test it after any change to your Business Profile. Keep the original image file and the review link saved somewhere your team can find them, so reprinting takes minutes, not a fresh search through Google’s dashboard. A review code is a small thing, but it is a small thing that only earns its keep if it works every time someone points a phone at it.',
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for Google reviews for free?',
        answer:
          'Get your review link from Google Business Profile: on a computer, go to business.google.com, select Read Reviews, then Get more reviews, and copy the link. Paste it into a free QR code generator using the URL type, download the code as PNG or SVG, and print it. The whole process takes about five minutes and costs nothing — no subscription or review platform is needed.',
      },
      {
        question: 'Where do I find my Google review link?',
        answer:
          'Sign in to Google Business Profile on a computer, select Read Reviews, then Get more reviews — Google shows a short link (usually starting g.page/r/…) that you can copy. If you cannot log in to the profile, find your Place ID in Google’s Place ID Finder and build the link yourself: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID. Always test the link on a phone before printing it.',
      },
      {
        question: 'Do customers need a Google account to leave a review?',
        answer:
          'Yes. Google requires reviewers to be signed in to a Google account before they can post a review — a customer can create one with a non-Gmail email address if they do not have Gmail. A QR code cannot remove this step, which is why it helps to ask in person while the customer is with you: most people are already signed in to Google on their phone and will go straight to the review form.',
      },
      {
        question: 'Can I use the same QR code for all my business locations?',
        answer:
          'No. Each location has its own Google Business Profile, its own review link, and its own Place ID, so a code made for one branch sends scanners to the wrong review form. Generate a separate QR code for each location from that location’s own review link, label the files by branch name, and test each code to confirm it opens the correct listing before printing.',
      },
      {
        question: 'Do Google review QR codes expire?',
        answer:
          'A static QR code never expires — it stores the review link permanently, and the code works as long as the link does. The link itself is stable when it comes from your Business Profile dashboard. The exception is a Place ID link: Google says Place IDs can change over time, so if a Place ID-based code stops working after a year or more, look the Place ID up again and generate a fresh code from the new link.',
      },
      {
        question: 'Is it against Google’s rules to ask customers for reviews?',
        answer:
          'No — asking is allowed and encouraged. What Google forbids is offering incentives (discounts, gifts, or freebies) in exchange for reviews, asking only customers likely to leave positive reviews, and posting reviews from staff, family, or friends. Ask every customer the same way, offer nothing in return, and reply to the reviews you receive — including the negative ones.',
      },
    ],
    ctaTitle: 'Make Your Google Review QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — turn your Google review link into a QR code and start collecting more reviews today.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
