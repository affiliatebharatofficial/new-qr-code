import type { Locale } from '../../config';
import type { GuideArticleData } from './types';

const enData: GuideArticleData = {
  title: 'How to Make a QR Code for a YouTube Video (Free)',
  description:
    'Make a QR code for any YouTube video in 4 steps: copy the link, paste it into a free QR generator, customize it, and download. No sign-up needed.',
  badge: 'QR How-To',
  h1: 'How to Make a QR Code for a YouTube Video',
  subheadline:
    'A QR code turns any YouTube video into something you can print, project, or stick on a package — one scan and the video opens on the viewer\'s phone. This guide walks you through the exact 4-step process (copy the link, paste it into a free generator, customize, download), plus the details that decide whether your code actually gets scanned: short links, timestamps, Shorts and playlists, and the mistakes that break YouTube QR codes.',
  readingTime: '8 min read',
  updatedDate: 'October 2026',
  quickTakeawaysTitle: 'Quick Takeaways',
  quickTakeaways: [
    {
      label: 'The whole process takes 2 minutes',
      text: 'Copy the YouTube video link from the Share button, paste it into a free QR code generator as a URL code, and download. No account or software needed.',
    },
    {
      label: 'Use the short youtu.be link',
      text: 'The Share button gives you a short youtu.be link. Shorter URLs encode fewer QR modules, which makes the code scan faster and stay readable at smaller sizes.',
    },
    {
      label: 'Static codes work forever',
      text: 'A YouTube video URL never changes once the video is published, so a free static QR code keeps working as long as the video stays public or unlisted.',
    },
    {
      label: 'Always test before you print',
      text: 'Scan the code with both an iPhone and an Android phone before printing it on posters, packaging, or business cards — and add a "Scan to watch" label next to it.',
    },
  ],
  tocTitle: 'In This Guide',
  sections: [
    {
      id: 'why-put-a-youtube-video-behind-a-qr-code',
      heading: 'Why Put a YouTube Video Behind a QR Code?',
      paragraphs: [
        'Typing a YouTube URL by hand is miserable — nobody will type "youtube.com/watch?v=" followed by 11 random characters from a poster, a menu, or a product box. A QR code collapses that entire address into a single camera scan, and on a phone with the YouTube app installed, the video typically opens directly in the app, ready to play.',
        'That one-scan bridge between the physical and the digital is why YouTube QR codes show up everywhere now: product packaging that links to assembly tutorials, restaurant table tents that play the chef\'s story, real-estate boards that open a video walkthrough, classroom handouts that play a worked example, and event screens that open a highlight reel. Anywhere a video would sell, teach, or entertain, but a link can\'t be typed, a QR code earns its place.',
        'The economics are friendly too. YouTube hosts and streams the video for free, the QR code itself is free to generate, and a static QR code pointing at a video URL never expires and never needs a subscription to keep working. The only ongoing dependency is the video itself: keep it public (or unlisted) and don\'t delete it, and the code keeps working indefinitely.',
      ],
      subsections: [
        {
          subheading: 'Product packaging',
          text: 'Print the code on the box to open an unboxing, assembly, or "how to use" video. Customers scan at the moment of confusion, which cuts support tickets and returns.',
        },
        {
          subheading: 'Printed marketing',
          text: 'Flyers, posters, brochures, and business cards can\'t play video — but a QR code on them can. Add "Scan to watch" so people know what the scan gives them.',
        },
        {
          subheading: 'Events and retail',
          text: 'Screens, banners, and shelf displays at events and stores can open trailers, demos, or testimonials instantly, without anyone typing a URL.',
        },
        {
          subheading: 'Education',
          text: 'Worksheets, textbooks, and slide decks can link worked examples, lab demos, and recorded lectures to a physical page the student already has.',
        },
      ],
      callout: {
        title: 'The video does the heavy lifting',
        text: 'A QR code is only a doorway. Viewers decide in seconds whether to keep watching, so link to the most relevant video — a 90-second demo beats a 20-minute vlog for a packaging code.',
        type: 'tip',
      },
    },
    {
      id: 'step-1-copy-the-youtube-video-link',
      heading: 'Step 1: Copy the YouTube Video Link',
      paragraphs: [
        'Everything starts with the video\'s URL. On a desktop browser, open the video on YouTube and click the Share button under the video player (next to Like and Dislike). A dialog opens with social icons and a "Copy link" button — click it, and YouTube copies a short link like youtu.be/dQw4w9WgXcQ to your clipboard. That short link is the best thing to encode: it\'s the same video, but a shorter URL means a simpler QR pattern that scans faster and stays readable at smaller print sizes.',
        'On the YouTube mobile app the flow is nearly identical: open the video, tap the Share icon (the curved arrow), then tap "Copy link". Alternatively, long-press the video\'s address in your mobile browser\'s address bar and copy the full youtube.com/watch?v=... URL — it works fine, it\'s just longer. If you own the video, you can also grab the link from YouTube Studio\'s video list, which is handy when you\'re generating codes for a whole batch of videos at once.',
        'Two refinements are worth knowing. First, the Share dialog\'s copied link sometimes includes a tracking parameter like ?si=AbC123 — you can delete everything from the question mark onward and the link still opens the same video, and the shorter URL makes a cleaner QR code. Second, you can link to a specific moment: add ?t=90 to the short link (or &t=90s to the full watch URL) to start playback 90 seconds in — perfect when only one segment of a long video matters, like the reveal in a product demo.',
      ],
      figures: [
        {
          src: '/guides/screenshots/youtube-share-button.png',
          alt: 'YouTube video page with the Share button highlighted under the video player to copy the video link for a QR code',
          caption:
            'Step 1a: Open the video on YouTube and click Share under the player — this is where every YouTube QR code starts.',
        },
        {
          src: '/guides/screenshots/youtube-copy-link.png',
          alt: 'YouTube share dialog open with the Copy link button that copies the short youtu.be video URL for the QR code',
          caption:
            'Step 1b: Click "Copy link" in the share dialog. The short youtu.be URL it copies encodes into a simpler, faster-scanning QR code.',
        },
      ],
      callout: {
        title: 'Short link = better QR code',
        text: 'Always prefer the youtu.be short link from the Share button over the full watch URL. Every character you remove deletes modules from the QR pattern, and fewer modules scan more forgivingly.',
        type: 'tip',
      },
    },
    {
      id: 'step-2-paste-the-link-into-a-qr-generator',
      heading: 'Step 2: Paste the Link Into a QR Code Generator',
      paragraphs: [
        'With the video link on your clipboard, open a free QR code generator — ours needs no sign-up and runs entirely in your browser. Select the URL (or "Website") QR type, click into the URL field, and paste the link you copied. The QR preview updates instantly: that pattern now encodes your YouTube video address, and any phone camera that scans it will offer to open the video.',
        'YouTube links are plain URLs, so you don\'t need any special "YouTube QR" mode — the generic URL type is exactly right. Some generators advertise a dedicated YouTube template, but under the hood it does the same thing: it encodes the link. What matters is that you paste the complete link and double-check it — one missing character in the 11-character video ID sends scanners to a "video unavailable" page instead of your video.',
        'Before moving on, do a quick sanity check on the link itself. Make sure the video\'s visibility matches your audience: a public video works for everyone, an unlisted video works for anyone with the code (great for QR codes on private event materials), but a private video will refuse every scanner who isn\'t logged into your channel. If the video is brand new, confirm it has finished processing — a code that opens a "video is still processing" page is a wasted print run.',
      ],
      figures: [
        {
          src: '/guides/screenshots/qr-type-selector.png',
          alt: 'QR code generator type selector with the URL website option chosen for making a YouTube video QR code',
          caption:
            'Step 2: Choose the URL/Website QR type and paste your YouTube link into the field. YouTube links need no special template — a plain URL code is exactly right.',
        },
      ],
      callout: {
        title: 'Match visibility to audience',
        text: 'Public videos work for every scanner. Unlisted videos work for anyone holding the code — ideal for QR codes on private materials. Private videos reject everyone except your channel\'s accounts.',
        type: 'warning',
      },
    },
    {
      id: 'step-3-customize-for-scans',
      heading: 'Step 3: Customize It So People Actually Scan It',
      paragraphs: [
        'A raw black-and-white QR code works, but a code people notice gets scanned more. The highest-impact customization is context: add a short frame or caption like "Scan to watch" next to the code. On a poster or package, a bare QR pattern is a mystery; the same pattern with "Scan to watch: 2-min assembly guide" is an invitation with a promised payoff. Generators with frame options let you bake this text right into the design.',
        'Color and branding come next, with one hard rule: keep strong contrast. Dark modules on a light background scan reliably; light modules on a dark background often fail because most phone cameras expect the standard polarity. You can safely tint the dark modules to a brand color (a deep blue or your brand red) as long as the contrast against the background stays strong. You can also drop a small logo or a play-button icon in the center — our generator supports logo overlays — but keep it under about 15–20% of the code\'s area so the pattern stays decodable.',
        'The quiet zone is the customization people forget: the blank margin around the code, at least 4 modules wide on every side, is part of the code as far as scanners are concerned. If your frame text, a photo edge, or a package fold creeps into that margin, scan rates drop sharply. When you place the finished code into a design, give it breathing room — and if the background behind the code is busy or dark, put the code on a solid white rounded rectangle first.',
      ],
      figures: [
        {
          src: '/guides/screenshots/logo-upload.png',
          alt: 'QR code generator logo upload panel for adding a play-button logo to the center of a YouTube video QR code',
          caption:
            'A small play-button logo in the center tells scanners the code opens a video. Keep the logo small and the contrast high so the code stays scannable.',
        },
      ],
      callout: {
        title: 'The scanability checklist',
        text: 'Dark-on-light contrast, quiet zone of 4+ modules, logo under 20% of the area, and a "Scan to watch" label. Check all four and your code will scan on almost any phone.',
        type: 'info',
      },
    },
    {
      id: 'step-4-download-test-and-share',
      heading: 'Step 4: Download, Test, Then Share',
      paragraphs: [
        'Download the finished code in the format that matches where it will live. For print — posters, packaging, business cards, stickers — grab the SVG (vector) version so it stays razor-sharp at any size, or a high-resolution PNG at 300 DPI relative to the printed size. For digital use — slides, PDFs, email signatures, social posts — a standard PNG is perfect and keeps file sizes small.',
        'Then test before you distribute. Scan the code with an iPhone (the built-in Camera app reads QR codes with no extra app) and an Android phone, ideally on both Wi-Fi and mobile data, since that\'s how your audience will scan. Confirm three things: the scan opens the right video, it starts playing without a "video unavailable" error, and the video\'s visibility is what you intended. Testing on two platforms catches the classic failures — a mistyped video ID or a private-video setting — before they cost you a print run.',
        'Where you place the code matters as much as how it looks. Put it where people naturally pause with their phone in hand: next to the product, at eye level on a poster, on the back of a business card, or as the final slide of a deck (leave it up during Q&A — that\'s when scans happen). And give the code room to breathe on the page: a 2 cm code works on a business card scanned at arm\'s length, but a poster scanned from across the room needs a code at least 10% of that viewing distance — our print-size guide covers the exact math.',
      ],
      figures: [
        {
          src: '/guides/screenshots/download-buttons.png',
          alt: 'QR code download options showing PNG, SVG and high-resolution formats for a YouTube video QR code',
          caption:
            'Step 4: Download as SVG for anything printed (it scales without blurring) or PNG for digital use — then scan it on two phones before you distribute it.',
        },
      ],
      callout: {
        title: 'Never skip the two-phone test',
        text: 'iPhone Camera + one Android phone, on mobile data. It takes 30 seconds and catches broken links, wrong visibility settings, and contrast problems before they cost real money.',
        type: 'warning',
      },
    },
    {
      id: 'qr-codes-for-shorts-playlists-and-channels',
      heading: 'QR Codes for Shorts, Playlists, and Channels',
      paragraphs: [
        'A single video isn\'t the only YouTube destination worth encoding. YouTube Shorts use a slightly different URL format — youtube.com/shorts/VIDEO_ID — and they encode into QR codes exactly like regular videos. Shorts are actually a natural fit for QR codes on packaging and receipts: they\'re vertical, under a minute, and designed for phone viewing, which is precisely the context of a QR scan.',
        'Playlists solve a different problem: instead of linking one video, link a curated sequence — a product\'s full tutorial series, a course module, or an event\'s highlight reel. Copy the playlist URL from the address bar while viewing the playlist (it contains a list= parameter), paste it into the generator the same way, and scanners land on the playlist page with autoplay ready. One code, a whole series of videos.',
        'Channel QR codes are the set-and-forget option for creators and brands: encode your channel URL (youtube.com/@YourHandle — the handle format is the shortest and cleanest) and print it on everything. Viewers land on your channel page with the Subscribe button one tap away. Because a channel URL never changes, this is the one QR code you can print on permanent materials like shop signage and never worry about again — the same permanence applies to any single video URL, since YouTube video addresses don\'t change after publishing.',
      ],
      subsections: [
        {
          subheading: 'Single video',
          text: 'Best for tutorials, demos, and anything tied to a specific product or page. Use the youtu.be short link and consider a ?t= timestamp for long videos.',
        },
        {
          subheading: 'Short',
          text: 'Best for packaging and receipts. Vertical, under a minute, and made for phone screens — the exact context of a QR scan.',
        },
        {
          subheading: 'Playlist',
          text: 'Best for tutorial series and courses. One code opens a whole sequence; scanners get autoplay through every video.',
        },
        {
          subheading: 'Channel',
          text: 'Best for creators and permanent signage. The @handle URL is short, never changes, and lands viewers one tap from Subscribe.',
        },
      ],
    },
    {
      id: 'mistakes-that-break-youtube-qr-codes',
      heading: 'Mistakes That Break YouTube QR Codes',
      paragraphs: [
        'Most broken YouTube QR codes fail for boring, avoidable reasons. The most common is encoding the wrong link: a watch URL copied mid-ad, a link to the YouTube homepage instead of the video, or a video ID with a typo from manual retyping. Always copy with the Share button\'s "Copy link" — never retype a video ID by hand — and always scan-test the finished code before printing.',
        'The second classic is visibility mismatch: the video was set to private after the code was printed, or it was never finished processing when the code was generated. A private video shows every scanner a "video unavailable" wall, and a processing video shows a placeholder. If you manage codes for a business, keep a simple spreadsheet of which code points to which video ID so you can audit visibility before a big print run.',
        'Design mistakes round out the list. Inverted colors (light code on dark background) fail on many phones; heavy logo overlays covering the finder patterns (the three big squares in the corners) make the code undecodable; and codes printed too small for their viewing distance — a 2 cm code on a banner read from 5 metres away — simply never resolve. Keep contrast dark-on-light, keep the three corner squares clear, and size the code to at least 10% of the viewing distance. Do all of that, test on two phones, and your YouTube QR code will work for as long as the video stays up — which, for most videos, is effectively forever.',
      ],
      bullets: [
        'Retyping the video ID by hand — always use Share → Copy link',
        'Printing before the video finishes processing or after it was set to private',
        'Inverted colors or low contrast that phone cameras can\'t resolve',
        'Logos covering the three finder-pattern squares in the corners',
        'Codes printed too small for the distance people scan them from',
        'No "Scan to watch" label, so nobody knows what the code opens',
      ],
    },
  ],
  faqsTitle: 'YouTube QR Code FAQs',
  faqs: [
    {
      question: 'How do I create a QR code for a YouTube video for free?',
      answer:
        'Open the video on YouTube, click Share, then "Copy link". Paste that link into a free QR code generator as a URL code, optionally add a "Scan to watch" frame or logo, and download it as PNG or SVG. The whole process takes about two minutes and needs no account.',
    },
    {
      question: 'Do QR codes for YouTube videos expire?',
      answer:
        'No. A QR code is just an encoded URL, and YouTube video URLs never change once published. A static QR code for a YouTube video works indefinitely — the only thing that breaks it is the video being deleted or set to private.',
    },
    {
      question: 'Can I make a QR code for a YouTube Short?',
      answer:
        'Yes. Shorts use URLs like youtube.com/shorts/VIDEO_ID, and they encode into QR codes exactly like regular videos. Tap Share on the Short, copy the link, and paste it into any QR generator. Shorts are ideal for QR codes since they\'re vertical and made for phone viewing.',
    },
    {
      question: 'Can I make a QR code that starts the video at a specific time?',
      answer:
        'Yes. Take the short youtu.be link and add ?t=90 (for 90 seconds) — e.g. youtu.be/VIDEO_ID?t=90. Encode that full link in the QR code and scanners will start playback at that timestamp. On the full watch URL format, use &t=90s instead.',
    },
    {
      question: 'Will scanning the QR code open the video in the YouTube app?',
      answer:
        'On most phones, yes — if the YouTube app is installed, tapping the scanned link typically opens the video directly in the app. If the app isn\'t installed, the link opens in the phone\'s browser instead, where the video still plays normally.',
    },
    {
      question: 'Should I use a static or dynamic QR code for a YouTube video?',
      answer:
        'A free static code is enough for most cases because YouTube video URLs don\'t change. Choose a dynamic code only if you want scan analytics or the ability to swap the destination video later without reprinting — both are paid features on most generator platforms.',
    },
  ],
  ctaTitle: 'Make Your YouTube QR Code Now',
  ctaDesc:
    'Paste your video link into the free generator — no sign-up, no watermark. Your YouTube QR code is ready to download in under a minute.',
  ctaButtonText: 'Create Free QR Code',
  ctaButtonLink: '/',
};

export function getHowToMakeYoutubeQrCodeData(locale: Locale): GuideArticleData {
  return enData;
}
