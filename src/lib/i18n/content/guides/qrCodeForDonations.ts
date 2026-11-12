import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForDonationsData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Donations: Collect More Gifts (Free)',
    description:
      'Make a QR code for donations free — link it to your fundraiser or giving page and collect gifts from any phone, no app or sign-up needed.',
    badge: 'Guides',
    h1: 'QR Code for Donations',
    subheadline:
      'A donation QR code turns a poster, a collection plate, or a social media post into a giving page. Someone points their phone camera at the code, taps the link, and donates in under a minute — no cash, no forms, no awkward fumbling for change. This guide shows how to create one free, where to put it so people actually use it, and the small choices — suggested amounts, a clear cause, a trusted payment page — that turn a scan into a completed gift.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Free to create',
        text: 'A donation QR code costs nothing to make — link it to your existing fundraiser, giving page, or UPI payment link and print it anywhere.',
      },
      {
        label: 'Scan, tap, donate',
        text: 'Donors scan with their phone camera and land straight on the payment page. No app to install, no account to create, no cash needed.',
      },
      {
        label: 'Suggested amounts lift gifts',
        text: 'Offer three preset amounts plus a custom option. Donors give more, and decide faster, when the choice is made for them.',
      },
      {
        label: 'Place it where people decide',
        text: 'Collection plates, event posters, receipts, and thank-you cards beat a buried website link — put the code where the moment of generosity happens.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-donation-qr-code',
        heading: 'What Is a QR Code for Donations?',
        paragraphs: [
          'A donation QR code is simply a QR code that points to a place where someone can give money — a fundraiser page on GoFundMe or Givebutter, a charity’s donation page, a church giving form, a UPI payment link in India, or a PayPal donation link. When a donor scans it with their phone camera, the payment page opens directly. There is nothing to type, nothing to download, and no cash to handle, which is exactly why charities, churches, schools, and small fundraisers have adopted them so quickly.',
          'The appeal is timing. Most donations happen in a moment of feeling — a moving speech at a fundraiser, a story shared at a church service, a photo of a cause that lands on social media. A donation QR code captures that moment before it passes. A card with a code on every table, a code on the back of a pew, or a code at the bottom of an Instagram story lets someone give while they still care, instead of asking them to remember a website address for later. And later almost never comes: fundraising research consistently finds that friction is the biggest killer of impulse gifts, and a QR code removes nearly all of it.',
          'The code itself is free to create, and it never expires as long as the link behind it stays live. That makes it useful far beyond one event. The same code can go on a charity’s printed newsletter, a church bulletin, a food bank’s flyer, a school fundraiser poster, and a volunteer’s T-shirt, and every one of those placements keeps working for months. If the campaign page changes, a dynamic QR code — one whose destination can be edited after printing — lets you update the link without reprinting anything, which is worth considering for anything that will be printed in bulk.',
        ],
        callout: {
          title: 'Static or dynamic — which one do you need?',
          text: 'A static QR code stores the donation link inside the code itself, so it can never change — fine for a single fundraiser or a poster you will only use once. A dynamic QR code stores a short redirect link, so you can change the destination later without reprinting. For printed materials, annual campaigns, or anything you will reuse, dynamic is the safer choice.',
          type: 'info',
        },
      },
      {
        id: 'how-to-create-qr-code-for-donations',
        heading: 'How to Create a QR Code for Donations (Free)',
        paragraphs: [
          'Creating a donation QR code takes about two minutes, and you do not need a fundraiser platform account, a design tool, or any technical skill. The only thing you need in advance is the link where people will donate — your fundraiser page, your charity’s giving page, or a payment link such as PayPal.me, a UPI payment link, or a Stripe payment link. If you do not have one yet, set that up first: the QR code is only as good as the page it opens.',
          'Open the free QR code generator and choose the type that matches your donation link. For most campaigns, the plain URL or website type is the right choice — paste the full donation page address into the field and the code is generated instantly. If your donations run through UPI, a UPI link (upi://pay?pa=...&am=...) can open a donor’s payment app directly, though a link to a web donation page is more forgiving, because it works for donors on any device and lets them choose their own payment method.',
          'Before you download the code, customise it so people trust it. A code in your organisation’s colours with your logo in the centre looks like it belongs to you; a plain black-and-white square looks like it could belong to anyone, and donors are right to be cautious about scanning anonymous codes that ask for money. Add a short frame of text around the code — “Scan to Donate” — so nobody has to guess what it does. Then download it as a PNG for social media and emails, and as an SVG for printed posters, flyers, and banners, because SVG stays sharp at any size.',
        ],
        subsections: [
          {
            subheading: 'Get your donation link',
            text: 'Your fundraiser page, charity giving page, PayPal.me link, or UPI payment link. Test it yourself first — open it in a private browser window and make sure it loads and the donate button works.',
          },
          {
            subheading: 'Choose the URL type',
            text: 'In the generator, pick the website or URL type and paste the full donation link. This is the simplest option and works on every phone.',
          },
          {
            subheading: 'Brand it with your logo',
            text: 'Add your organisation’s logo in the centre and match the colours to your branding. A recognisable code earns trust — and trust is what turns a scan into a gift.',
          },
          {
            subheading: 'Add “Scan to Donate” text',
            text: 'Nobody scans a bare code that asks for money. A clear label tells people exactly what happens when they scan, and that it is safe.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in the free generator for creating a donation QR code',
            caption: 'Choose the URL type and paste your donation page link — the code is generated instantly.',
          },
          {
            src: '/guides/screenshots/logo-upload.png',
            alt: 'Logo upload panel for adding a charity logo to a donation QR code',
            caption: 'Add your organisation’s logo in the centre so donors recognise the code as yours.',
          },
        ],
      },
      {
        id: 'where-to-put-donation-qr-code',
        heading: 'Where to Put a Donation QR Code So People Use It',
        paragraphs: [
          'A donation QR code only works if it is in front of people at the moment they feel like giving, and that moment is almost never on your website’s donation page. The best placements are physical and social: a printed card on every table at a fundraising dinner, a code on the order of service at a church, a poster by the entrance of a charity shop, a flyer handed out at a community event, or a sticker on a collection tin. At events, put the code at eye level where people are standing still — near the entrance, beside the food table, or on the back of a chair — not hidden behind a banner nobody reads.',
          'Printed receipts and thank-you cards are underrated placements. A charity that prints its donation code on the receipt for a charity-shop purchase, or on the thank-you card sent after a first gift, gives the donor an effortless way to give again — and repeat donors are far more valuable than one-off ones. The same logic applies to newsletters and annual reports: a code on the last page of a printed newsletter reaches supporters who would never type a URL from a piece of paper, but will scan a code while they are reading.',
          'On screens, the code belongs wherever your audience already is. Put it at the end of a fundraising video, on the last slide of a presentation, in your email signature during a campaign, and as a pinned image on your social profiles. On Instagram and Facebook, a story or post with the code and a short line about what the money does — “₹500 feeds a family for a week” — outperforms a bare link in a bio, because the code removes the step of leaving the app. One caution: on social media, add the donation link in the caption as well, so people who cannot scan their own screen still have a way to give.',
        ],
        bullets: [
          'Fundraising events — table cards, entrance posters, and the back of name badges, where people are standing still and feeling generous.',
          'Churches and places of worship — the order of service, a pew card, or a slide on the screen during the collection.',
          'Charity shops and community spaces — by the till, on receipts, and on the door, where supporters already are.',
          'Printed mail — newsletters, thank-you cards, and annual reports reach people who would never type a URL but will scan a code.',
          'Social media and video — the last slide of a presentation, the end of a fundraising video, and pinned posts during a campaign.',
          'Everyday items — volunteer T-shirts, collection tins, and car windows turn supporters into walking donation points.',
        ],
      },
      {
        id: 'how-to-get-more-donations-qr-code',
        heading: 'How to Get More Donations From a QR Code',
        paragraphs: [
          'The code gets the donor to the page; the page does the rest. The single most effective choice on a donation page is offering preset amounts — three options plus a custom field — because donors decide faster and give more when the choice is made for them. A good set for a small charity might be ₹250, ₹500, and ₹1,000, or $10, $25, and $50, with each amount tied to a concrete outcome: “₹500 provides a week of meals,” “$25 buys school supplies for one child.” Concrete outcomes beat abstract appeals every time, because a donor can picture what their money does.',
          'Make recurring giving the easy option, not an afterthought. A small checkbox or toggle for “give monthly” on the donation page turns a one-time ₹500 gift into ₹6,000 a year, and monthly donors are the most reliable supporters a small organisation can have. The QR code itself does not need to change — the same code can point to a page that offers both one-time and monthly options, and the donor chooses. If your platform supports it, set the monthly option as the visible default during a campaign, with one-time giving one tap away.',
          'Trust is the other lever. Donors scanning a code on a poster have seconds to decide whether the page is legitimate, so the page must look the part: your organisation’s name and logo at the top, a short line about what the money funds, a secure payment badge, and a recognisable payment provider. Never ask donors to send money to a personal account or an unfamiliar UPI ID on a printed code unless that is genuinely how your organisation collects — and if it is, say so plainly on the poster. After the gift, a thank-you message or receipt within minutes matters more than most charities realise: donors who are thanked promptly give again, and donors who hear nothing wonder whether the money went anywhere.',
        ],
        subsections: [
          {
            subheading: 'Offer three preset amounts',
            text: '₹250 / ₹500 / ₹1,000 (or $10 / $25 / $50) plus a custom field. Tie each amount to a concrete outcome so donors can picture the impact.',
          },
          {
            subheading: 'Make monthly giving easy',
            text: 'A visible monthly toggle turns a one-time gift into steady income. Monthly donors are the most reliable supporters a small charity can have.',
          },
          {
            subheading: 'Show the impact in one line',
            text: '“Scan to Donate — ₹500 feeds a family for a week” tells people what their money does before they even open the page.',
          },
          {
            subheading: 'Thank donors immediately',
            text: 'An instant receipt and a thank-you message after the gift are what turn a first-time donor into a repeat one.',
          },
        ],
      },
      {
        id: 'donation-qr-code-for-churches-nonprofits-fundraisers',
        heading: 'Donation QR Codes for Churches, Nonprofits, and Fundraisers',
        paragraphs: [
          'Churches were among the earliest adopters of donation QR codes, and the reason is simple: fewer people carry cash, and the collection plate has not kept up. A code on the order of service, on a pew card, or on the screen during the offering lets the congregation give from their seats, including visitors who have no idea where the church’s website is. Some churches print the code on a small stand at the entrance so people can give as they arrive. The same code can serve a building fund, a mission trip, or a food bank appeal — just point it at a different giving page for each campaign, or use a dynamic code and switch the destination between Sundays.',
          'For registered nonprofits, a donation QR code is also a reporting tool. Because every scan lands on the same giving page, the organisation can track how many gifts came through the code versus other channels, and which placements worked — the code on the event poster versus the one in the newsletter. That data is what justifies printing more posters next year. It also helps with transparency: a page that shows the charity’s registration number, its mission, and how funds are used reassures donors in a way a bare payment link never will.',
          'Small, informal fundraisers benefit the most of all, because they have no website and no payment infrastructure — just a cause and a community. A school raising money for new playground equipment, a neighbourhood collecting for a neighbour’s medical bills, a running club sponsoring a marathon runner: all of them can create a fundraiser page on a platform like GoFundMe or Ketto, generate a QR code for it in two minutes, and print it on flyers, posters, and WhatsApp forwards. The code does the job of a website, a payment terminal, and a collection tin at once, and it costs nothing.',
        ],
        callout: {
          title: 'Keep the destination page honest',
          text: 'A donation QR code that opens a page with a different cause, a broken link, or a personal account raises the same red flags as a fake code. Check the link every time you print a new batch, and retire codes whose campaign has ended — a donor who lands on a closed fundraiser rarely tries again.',
          type: 'warning',
        },
      },
      {
        id: 'donation-qr-code-mistakes-to-avoid',
        heading: 'Donation QR Code Mistakes to Avoid',
        paragraphs: [
          'The most common mistake is printing the code too small. A code on a poster that people read from two metres away needs to be large — at least 10 cm across for a poster, and larger for anything viewed from a distance — while a code on a table card or a receipt can be smaller, around 3 cm. A useful rule is that the code should be at least one-tenth of the distance people scan it from: scanned from 30 cm away, 3 cm is enough; scanned from 2 metres away, it needs to be 20 cm. A code that is too small simply never gets scanned, and nobody tells you why.',
          'The second mistake is forgetting to test the code before printing a hundred copies. Scan the printed proof with two different phones — an iPhone and an Android — and follow the link all the way to the payment page. Check that the page loads quickly on mobile data, that the donate button works, and that the amounts are correct. A code that opens a desktop-only page, a page that takes ten seconds to load, or a fundraiser that has already closed will waste every poster you printed.',
          'The third mistake is printing a code with no context. A bare QR code on a wall is easy to ignore and easy to distrust — people have learned to be wary of anonymous codes that ask for money. Always add a line saying what the code does and who it benefits: “Scan to donate to the Riverside Food Bank” with your logo beside it. And the fourth mistake is the opposite: putting the code everywhere at once with no way to know which placement worked. If you run a campaign across posters, flyers, and social media, use a different link for each — most fundraising platforms let you add a tracking parameter — so you can see where the gifts actually came from and print more of what works next time.',
        ],
        bullets: [
          'Too small to scan — keep the code at least one-tenth of the viewing distance; 3 cm minimum for hand-held items, 10 cm or more for posters.',
          'Never tested before printing — scan the proof with an iPhone and an Android, and follow the link to the payment page.',
          'No context on the poster — a bare code looks suspicious; add your logo and a line like “Scan to donate to the Riverside Food Bank”.',
          'Broken or outdated link — check the page before every print run, and retire codes for closed campaigns.',
          'No tracking — use a different link parameter for posters, flyers, and social posts so you know which placement brought the gifts.',
        ],
      },
      {
        id: 'make-your-own-donation-qr-code-free',
        heading: 'Make Your Own Donation QR Code Free',
        paragraphs: [
          'You now have everything you need: a donation page link, a free generator, and a plan for where the code goes. Create the code, add your logo and colours, and print it at the right size for where it will be seen. Before you print a full batch, scan the proof yourself, check the payment page loads fast on a phone, and confirm the donate button works end to end.',
          'Start with one placement — a table card at your next event, a code in your next newsletter, or a pinned post during your next campaign — and watch whether it gets used. The first code costs nothing and takes two minutes, and the gifts it collects are the proof that the next hundred posters are worth printing.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for making a donation QR code',
            caption: 'The free generator homepage — paste your donation link and download your code in under a minute.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a donation QR code as PNG or SVG',
            caption: 'Download PNG for social media and emails, or SVG for posters, flyers, and banners.',
          },
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for donations for free?',
        answer:
          'Copy the link to your fundraiser page, charity giving page, or payment link (such as PayPal.me or a UPI payment link). Open the free QR code generator, choose the URL type, paste the link, and download the code as a PNG for screens or an SVG for print. Add your logo and the words “Scan to Donate” so people trust it. The whole process takes about two minutes and costs nothing.',
      },
      {
        question: 'Can I accept donations through a QR code without a website?',
        answer:
          'Yes. You do not need a website — you only need a page that can take a payment. A fundraiser page on GoFundMe, Givebutter, or Ketto, a PayPal.me link, or a UPI payment link all work. Create the fundraiser page first, then turn its link into a QR code. Donors scan the code and land directly on the payment page.',
      },
      {
        question: 'Are QR codes safe for donations?',
        answer:
          'A QR code is as safe as the page it opens, so the safety depends on your setup. Use a recognised fundraising platform or payment provider, show your organisation’s name and logo on the page, and use a secure (https) link. Tell donors to check that the page they land on matches your organisation before paying. Never print a code that points to a personal account unless that is genuinely how your organisation collects.',
      },
      {
        question: 'Can a donation QR code accept UPI payments in India?',
        answer:
          'Yes. You can link the code to a UPI payment link (upi://pay?pa=your-upi-id&am=amount) so donors’ payment apps open directly, or to a web donation page that offers UPI alongside cards and netbanking. The web page is the more forgiving option, because it works for donors on any device and lets them choose their payment method instead of forcing one app.',
      },
      {
        question: 'How big should a donation QR code be when printed?',
        answer:
          'A good rule is at least one-tenth of the distance people scan it from. For a table card or receipt scanned from about 30 cm away, 3 cm across is enough. For a poster scanned from 2 metres away, the code needs to be at least 20 cm across. Always leave a clear white border around the code, and test the printed proof with a phone before printing a full batch.',
      },
      {
        question: 'Can I track how many donations came from my QR code?',
        answer:
          'Yes, if your fundraising platform supports it. Add a tracking parameter to the link (for example, ?source=poster) before generating the code, and use a different parameter for each placement — posters, flyers, and social media. Your platform’s reports will then show how many gifts came from each placement, so you know where to put the code next time.',
      },
    ],
    ctaTitle: 'Make Your Donation QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — turn your fundraiser or giving page into a QR code anyone can scan to donate.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
