import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'How to Make an Instagram QR Code (Free, No Sign-Up)',
  description:
    'Get Instagram\'s built-in profile QR code or make a branded custom one from your profile link — free. Steps, customization, and placement covered.',
  badge: 'QR How-To',
  h1: 'How to Make an Instagram QR Code',
  subheadline:
    'An Instagram QR code turns "what\'s your handle?" into a one-second scan: the camera opens your profile and the Follow button is one tap away. Instagram ships a free built-in QR code for every account, but it isn\'t always the best choice — this guide shows you how to find and customize it, when to build a branded custom code from your profile link instead, and where to place it so it actually converts scanners into followers.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'Instagram has a free built-in QR code',
      text: 'Profile → ☰ menu → "QR code" (or tap "Share profile"). Customize it with color, emoji, or selfie backgrounds, then save or share it — every account gets one.',
    },
    {
      label: 'Custom codes win for branding and print',
      text: 'Paste your instagram.com/username link into a free QR generator for brand colors, a logo in the center, a "Follow us" frame, and print-ready SVG downloads.',
    },
    {
      label: 'Static codes break if you change your username',
      text: 'A custom static QR encodes your profile URL, so renaming your handle breaks it. Instagram\'s built-in code follows your account automatically.',
    },
    {
      label: 'Scanners don\'t need the app',
      text: 'With the Instagram app installed, the profile opens in-app. Without it, the code opens in the browser and prompts the visitor to log in or install.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'why-an-instagram-qr-code-beats-your-handle',
      heading: 'Why an Instagram QR Code Beats Spelling Out Your Handle',
      paragraphs: [
        'Saying your handle out loud is a terrible user interface. "Follow me at underscore firoz dot media underscore" takes twenty seconds to dictate, five more to spell-check, and still ends with the person following @firoz.media instead of @firoz_media — a different account. Usernames with dots, underscores, numbers, and lookalike words are designed to be misheard, mistyped, and misremembered. Every extra step between hearing about you and tapping Follow is a follower you lose.',
        'An Instagram QR code collapses that whole exchange into a single camera scan. The scanner\'s phone opens your profile directly — no search box, no guessing at punctuation, no competing accounts with similar names. On a phone with the Instagram app installed, your profile opens in the app with the Follow button right there; on one without it, the profile opens in the browser. Either way, the person lands exactly where you want them.',
        'That friction removal is why profile QR codes have become standard equipment: creators put them on event badges and merch, cafés print them on table tents, salons stick them on mirrors, gyms tape them to equipment, and brands add them to packaging and shopping bags. Anywhere you meet customers or fans in person — or in print — a QR code converts a passing glance into a follow in seconds, which is the cheapest follower acquisition you will ever get.',
      ],
      subsections: [
        {
          subheading: 'Creators and freelancers',
          text: 'Business cards, portfolio covers, and event badges. One scan replaces the awkward "it\'s spelled F-I-R-O-Z with an underscore..." conversation.',
        },
        {
          subheading: 'Local businesses',
          text: 'Storefronts, receipts, table tents, and packaging. Customers scan at the moment they like you — when they are standing in your shop.',
        },
        {
          subheading: 'Events and pop-ups',
          text: 'Banners, name tags, and slide decks. A room full of people can follow you during a 10-second pause without anyone typing anything.',
        },
        {
          subheading: 'Brands and packaging',
          text: 'Product boxes, shopping bags, and stickers. Every physical item you ship becomes a follow-me flyer that costs nothing extra.',
        },
      ],
      callout: {
        title: 'The code is only a doorway',
        text: 'Before you print a single QR code, make your profile follow-worthy: a clear profile photo, a bio that says what you post, and a few highlights. Scanners decide in seconds.',
        type: 'tip',
      },
    },
    {
      id: 'instagrams-built-in-profile-qr-code',
      heading: 'Option 1: Instagram\'s Built-In Profile QR Code',
      paragraphs: [
        'Every Instagram account already has a QR code, and finding it takes about ten seconds. Open the Instagram app, tap your profile photo in the bottom-right corner to open your profile, then tap the three horizontal lines (☰) in the top-right and choose "QR code". Your code appears instantly, with your profile photo in the center. Alternatively, tap the "Share profile" button next to "Edit profile" on your profile — this opens your two-sided profile card (Instagram added editable cards with bio snippets and music in 2024), with the QR code on the reverse side.',
        'The built-in code is more customizable than it looks. Tap anywhere on the screen to cycle through background colors, or use the button at the top to switch between three styles: Color (solid and gradient themes), Emoji (a pattern of an emoji you pick), and Selfie (your face multiplied across the background, with optional AR props). When it looks right, tap the share icon to send it through messages or email, or save it to your camera roll as a PNG.',
        'The built-in code has two structural advantages no custom code can match. First, it is managed by Instagram, so if you ever change your username, the code keeps working — it follows your account, not your handle text. Second, any phone camera can read it; Instagram retired its old app-only Nametag system back in 2021 and replaced it with this universal QR code, so scanners do not need the Instagram app or even an account to reach your profile page (they will be prompted to log in to follow you).',
        'The limits: customization stops at Instagram\'s three styles (no brand colors, no centered logo, no "Follow us" frame text), the code only ever points to your profile (never a specific reel, post, or product page), and Instagram offers no scan analytics — you cannot see how many times it was scanned. For a personal account that is plenty. For a business running a print campaign, those limits are the reason to build a custom code.',
      ],
      callout: {
        title: 'Free forever, never expires',
        text: 'Instagram\'s built-in QR code is free for every account type — personal, creator, and business — and it does not expire. It stays valid as long as your account exists.',
        type: 'info',
      },
    },
    {
      id: 'make-a-custom-branded-instagram-qr-code',
      heading: 'Option 2: Make a Custom Branded Instagram QR Code',
      paragraphs: [
        'A custom QR code encodes the same destination — your profile link, in the form instagram.com/yourusername — but you control every pixel of how it looks. That control matters the moment the code goes onto real materials. You can tint the modules to your brand color (kept dark-on-light for scanability), drop your logo or the Instagram glyph in the center, and add a frame caption like "Follow us on Instagram" so strangers know what the scan gives them. Instagram\'s built-in styles can\'t do any of that.',
        'The second reason to go custom is precision. The built-in code points only to your profile. A custom code can point anywhere on Instagram: a specific reel you want to go viral, a product launch post, your Linktree-style links page, or a campaign hashtag page. Copy that post\'s link, encode it instead of your profile URL, and the same free generator does the rest. You can also download print-ready formats — SVG for vector-sharp posters and packaging, high-resolution PNG for business cards — at whatever size your print run needs.',
        'The honest tradeoff is username fragility. A static custom QR code bakes your profile URL into the pattern: if you rename your handle from @firoz_media to @firozmedia, every printed code encoding the old URL breaks (Instagram URLs for renamed handles typically stop resolving to the account). Instagram\'s built-in code survives renames because it references the account. So the rule is simple: if your username is settled and you need branding or print control, go custom; if you rebrand handles often, stick with the built-in code — or plan to regenerate and reprint.',
        'One more practical note: strip tracking junk before you encode. The "Copy link" share from Instagram often appends parameters like ?utm_source=ig_web_copy_link — delete everything from the question mark onward. The clean instagram.com/yourusername link opens the same profile but encodes into a simpler QR pattern with fewer modules, which scans faster and stays readable at smaller print sizes.',
      ],
      figures: [
        {
          src: '/guides/screenshots/qr-type-selector.png',
          alt: 'QR code generator type selector with the URL website option chosen for creating an Instagram profile QR code',
          caption:
            'Choose the URL/Website QR type and paste your clean instagram.com/username profile link — no special "Instagram" template is needed.',
        },
      ],
      callout: {
        title: 'Built-in vs custom, at a glance',
        text: 'Built-in: zero effort, survives username changes, limited styling, profile-only, no analytics. Custom: full branding, any Instagram link, print-ready formats — but breaks if you rename your handle.',
        type: 'info',
      },
    },
    {
      id: 'step-by-step-generate-your-custom-code',
      heading: 'How to Generate Your Custom Code (4 Steps)',
      paragraphs: [
        'Step 1 — copy your profile link. In the Instagram app, open your profile, tap "Share profile", then "Copy link". On desktop, copy the URL from your browser\'s address bar while viewing your profile. Trim any ?utm_source or ?igsh parameters so you are left with the clean instagram.com/yourusername form.',
        'Step 2 — paste it into a free generator. Open our free QR code generator (no sign-up, runs in your browser), select the URL type, and paste the link. The preview updates instantly — that pattern now encodes your Instagram profile. Double-check the username character by character: one wrong letter in the handle sends scanners to a stranger\'s profile or a "page not found" error.',
        'Step 3 — customize for scans and branding. Tint the dark modules to a brand color that keeps strong dark-on-light contrast, add a small logo or the Instagram glyph in the center (keep it under about 15–20% of the code\'s area), and use a frame option to bake in "Follow us on Instagram" text. Keep the quiet zone — the blank margin around the code, at least 4 modules wide — clear of edges, text, and folds.',
        'Step 4 — download and test before printing. Grab the SVG for anything printed (posters, packaging, signage — vector stays sharp at any size) or a high-resolution PNG for business cards and stickers. Then scan it with an iPhone camera and an Android phone, on mobile data, and confirm it opens the right profile — public for maximum reach, since private accounts put every non-follower behind a login wall.',
      ],
      figures: [
        {
          src: '/guides/screenshots/logo-upload.png',
          alt: 'QR code generator logo upload panel for adding an Instagram logo to the center of a branded Instagram QR code',
          caption:
            'Add your logo or the Instagram glyph to the center so scanners know the code opens Instagram. Keep it small and keep the contrast high.',
        },
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'QR code download options showing PNG, SVG and high-resolution formats for a custom Instagram QR code',
          caption:
            'Download as SVG for print (it scales without blurring) or PNG for digital use — then scan it on two phones before you print a single copy.',
        },
      ],
      callout: {
        title: 'The two-phone test catches everything',
        text: 'Scan on iPhone + one Android phone before printing. It takes 30 seconds and catches typos in the handle, private-account login walls, and contrast problems while fixes are still free.',
        type: 'warning',
      },
    },
    {
      id: 'where-to-place-your-instagram-qr-code',
      heading: 'Where to Place Your Instagram QR Code',
      paragraphs: [
        'A QR code only earns follows where people pause with their phone in hand. The highest-converting spots share one trait: the person is already thinking about you. Your shop counter, the table they are sitting at, the product they just unboxed, the event stage they are watching — those are the moments a scan feels effortless, and placement beats design every time.',
        'Size the code to its viewing distance. The rule of thumb: make the code at least 10% of the distance people scan it from — a 2 cm code works on a business card scanned at arm\'s length, but a poster read from 3 metres needs a code around 30 cm. And always label it: a bare QR pattern is a mystery, while "Follow us on Instagram 📸" next to it is an invitation with a promised payoff. Our print-size guide has the exact math if you are doing a serious print run.',
        'Digital placements work too, with different mechanics. An email signature code gets scanned off other people\'s screens, a code on your YouTube end screens or video descriptions captures viewers mid-video, and a code in your link-in-bio page cross-pollinates audiences between platforms. On digital, PNG is fine and file size barely matters — clarity does.',
      ],
      subsections: [
        {
          subheading: 'Business cards & name tags',
          text: 'The classic. Back of the card, with "Follow us on Instagram" underneath. Works at every networking event, market stall, and client meeting.',
        },
        {
          subheading: 'Storefronts & packaging',
          text: 'Window decals, shopping bags, and product boxes turn every sale into a follow. Customers scan when they already like what they bought.',
        },
        {
          subheading: 'Tables, counters & mirrors',
          text: 'Table tents, receipt backs, and salon mirrors catch people during idle minutes — the exact moments they reach for their phone.',
        },
        {
          subheading: 'Events & slides',
          text: 'Banners, badges, and the final slide of a deck. Leave the code up during Q&A — that is when the scans happen.',
        },
      ],
      bullets: [
        'Put the code where people pause, not where they walk past — counters beat corridors',
        'Size it to at least 10% of the scanning distance',
        'Always add a "Follow us on Instagram" label — unlabeled codes get ignored',
        'Keep the quiet zone (4+ modules of blank margin) free of edges, folds, and text',
        'On dark or busy backgrounds, place the code on a solid white rounded rectangle first',
      ],
    },
    {
      id: 'mistakes-that-break-instagram-qr-codes',
      heading: 'Mistakes That Break Instagram QR Codes',
      paragraphs: [
        'Most broken Instagram QR codes fail for boring, avoidable reasons — and the number one is the username rename. A business prints 5,000 shopping bags with a static custom code, rebrands from @cafebrew to @cafebrew.india six months later, and every bag now points at a dead link or the wrong account. If there is any chance your handle changes, use Instagram\'s built-in code for print, or treat custom-code reprints as part of the rebrand budget.',
        'The second classic is the private-account surprise. A static code pointing at a private profile still scans — but non-followers land on a login prompt or a locked profile instead of content, which kills the follow impulse. If your goal is growth, the linked account should be public, or at least its bio and highlights should be worth a follow request. Match the account\'s privacy to the code\'s job.',
        'Design and placement mistakes round out the list. Encoding the full link with ?utm_source=ig_web_copy_link tracking parameters bloats the QR pattern for zero benefit. Low-contrast color experiments — pastel modules on a white background, or Instagram\'s own gradient style printed on glossy stock that glares — make phones work harder to decode. Codes printed too small for their viewing distance never resolve. And codes placed where people can\'t comfortably hold a phone up to them — high walls, moving vehicles, tiny footer text — get scanned by nobody. Avoid all of that, test on two phones, and your Instagram QR code will quietly convert scanners into followers for years.',
      ],
      bullets: [
        'Renaming your handle after printing static custom codes (they encode the old URL)',
        'Linking a private account and expecting strangers to follow through a login wall',
        'Encoding the full link with ?utm_source tracking parameters — strip them first',
        'Low-contrast colors or glossy stock that glares under store lighting',
        'Codes printed too small for the distance people scan them from',
        'No "Follow us on Instagram" label, so nobody knows what the scan gives them',
        'Still using screenshots of the retired Nametag instead of the current QR code',
      ],
    },
  ],
  faqsTitle: 'Instagram QR Code FAQs',
  faqs: [
    {
      question: 'How do I get my Instagram QR code?',
      answer:
        'Open the Instagram app, tap your profile photo (bottom-right) to open your profile, then tap the three lines (☰) in the top-right and choose "QR code". Or tap "Share profile" next to "Edit profile". Your code appears instantly — customize the color, emoji, or selfie background, then save or share it. It is free for every account type.',
    },
    {
      question: 'Do Instagram QR codes expire?',
      answer:
        'No. Instagram\'s built-in QR code never expires and stays valid as long as your account exists. A custom static QR code for your profile also works indefinitely — the only thing that breaks it is you changing your username, since the code encodes the old profile URL.',
    },
    {
      question: 'Can I see who scanned my Instagram QR code?',
      answer:
        'No — Instagram does not offer scan tracking on its built-in QR code. If you need scan counts and analytics, use a dynamic QR code service (usually paid) that redirects to your profile link and logs each scan.',
    },
    {
      question: 'What happens to my QR code if I change my Instagram username?',
      answer:
        'Instagram\'s built-in code keeps working because it is tied to your account, not your handle text. Custom static codes encoding instagram.com/your-old-username break and must be regenerated and reprinted — one more reason to be sure about your handle before a big print run.',
    },
    {
      question: 'Does the person scanning need the Instagram app?',
      answer:
        'No. If they have the Instagram app, the code opens your profile in the app. If not, it opens in their phone\'s browser, where they can view your public profile and are prompted to log in or install the app to follow you.',
    },
    {
      question: 'Can I make a QR code for a specific reel or post instead of my profile?',
      answer:
        'Instagram\'s built-in code is profile-only. For a reel or post, copy its link (Share → Copy link), paste it into a free QR code generator as a URL code, and download. That custom code opens the exact post when scanned.',
    },
  ],
  ctaTitle: 'Make Your Instagram QR Code Now',
  ctaDesc:
    'Paste your profile link into the free generator — no sign-up, no watermark. Your branded Instagram QR code is ready to download in under a minute.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getInstagramProfileQrCodeData(locale: Locale): GuideArticleData {
  return enData;
}
