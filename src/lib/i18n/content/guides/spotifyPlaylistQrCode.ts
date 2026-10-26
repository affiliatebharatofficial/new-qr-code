import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getSpotifyPlaylistQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a Spotify QR Code for a Playlist (Free)',
    description:
      'Turn any Spotify playlist into a scannable QR code: copy the playlist link, paste it into a free generator, and print or share it — free.',
    badge: 'Guides',
    h1: 'How to Make a Spotify QR Code for a Playlist',
    subheadline:
      'Telling someone "just search for my playlist on Spotify" rarely works — they mistype the name, find the wrong playlist, or give up halfway. A Spotify QR code fixes that: one scan opens the exact playlist in the Spotify app, ready to follow or play. This guide shows you how to create one in under a minute, explains how it differs from Spotify\'s own built-in Spotify Codes, and covers where to use it — from party invitations and wedding tables to gym posters, cafe menus, and merch.',
    readingTime: '8 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan, exact playlist',
        text: 'A QR code holding the playlist link opens that exact playlist in Spotify — no searching, no wrong results, no typing.',
      },
      {
        label: 'Copy the link, not the name',
        text: 'Use Share → Copy link in Spotify. The link is what the QR code encodes; the playlist name alone is useless to a scanner.',
      },
      {
        label: 'QR code beats Spotify Code for reach',
        text: 'Spotify Codes only scan inside the Spotify app. A normal QR code scans with any phone camera, so it works for everyone.',
      },
      {
        label: 'Static is free and permanent',
        text: 'A free static QR code never expires. It keeps working as long as the playlist stays public and the link stays the same.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-a-spotify-qr-code',
        heading: 'Why a Spotify QR Code Beats Sharing a Link or a Name',
        paragraphs: [
          'Sharing a playlist should be simple, but in practice it is full of friction. You tell a friend the playlist name, they open Spotify, search for it, and land on a page of lookalike playlists with similar names — or on a playlist by a different user entirely. If you paste the link into a chat message, it works, but only for people who are online and looking at that chat at that moment. A link printed on a poster, a flyer, or a wedding invitation is nearly useless: nobody will type a 60-character Spotify URL by hand.',
          'A Spotify QR code removes all of that friction. The person points their phone camera at the code, taps the notification, and the exact playlist opens in Spotify — ready to play or follow. It works on printed material, on screens, and in places where there is no chat thread to paste a link into: a party poster on a wall, a cafe table, a gym noticeboard, a merch t-shirt, or the back of a business card. The scan itself is the link, so there is nothing to type, copy, or misremember.',
          'There is also a social advantage. When you share a playlist with a QR code, you control the first impression: the code can sit next to a title ("Scan for the party playlist"), a cover-style design, or a short invitation. People scan out of curiosity in a way they rarely click a bare link. For artists, DJs, and small businesses, that curiosity is real distribution — every scan is a listener who found the playlist without having to search for it.',
        ],
        callout: {
          title: 'The code is just the link in scannable form',
          text: 'A Spotify QR code contains nothing more than the playlist URL. Scanning it is exactly the same as tapping the link — it just skips the typing.',
          type: 'info',
        },
      },
      {
        id: 'spotify-code-vs-qr-code',
        heading: 'Spotify Codes vs QR Codes: Which One Should You Use?',
        paragraphs: [
          'If you have explored Spotify\'s sharing menu, you may have seen Spotify Codes — the barcode-like pattern with the Spotify logo that appears under a track or playlist cover. Spotify Codes are Spotify\'s own scannable format: open the Spotify app, tap Search, tap the camera icon, and point it at a code to open that content. They work well inside the Spotify ecosystem, and they look distinctive, which is why some artists print them on merch.',
          'But Spotify Codes have a hard limitation: they can only be scanned from inside the Spotify app. A guest at a party, a customer in a cafe, or a stranger looking at your poster cannot scan a Spotify Code with their phone camera — they need to open Spotify, find the camera, and scan from there. Anyone who does not have Spotify installed, or who does not know about the in-app camera, is locked out. For anything aimed at a general audience, that is a real barrier.',
          'A standard QR code has no such barrier. Every modern phone camera scans QR codes natively — no app, no special camera mode, no instructions needed. The scan opens the playlist link, which opens Spotify if it is installed (or the web player if it is not). For posters, invitations, merch, and public displays, the standard QR code is the better choice in almost every case. Use Spotify Codes only when your audience is already Spotify users who know the feature — for example, inside a Spotify-focused community or on an artist\'s existing fan page.',
        ],
        subsections: [
          {
            subheading: 'Spotify Code',
            text: 'Spotify\'s own barcode-style code. Scans only inside the Spotify app (Search → camera). Distinctive look, but useless to anyone without the app open.',
          },
          {
            subheading: 'Standard QR code',
            text: 'Scans with any phone camera, no app needed. Opens the playlist link in Spotify or the web player. Best for posters, invitations, merch, and public displays.',
          },
        ],
      },
      {
        id: 'create-spotify-qr-code-step-by-step',
        heading: 'How to Create a Spotify QR Code (Step by Step)',
        paragraphs: [
          'The whole process takes about a minute and needs no account, no software install, and no payment. You need two things: the playlist link from Spotify, and a free QR code generator. Here is the exact sequence.',
          'First, get the playlist link. In the Spotify app, open the playlist, tap the three-dot menu (•••), then tap Share, then "Copy link". On desktop, right-click the playlist name and choose Share → Copy link to playlist. The link looks like https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M — that full URL is what you want. Do not copy the playlist name or a shortened display link from a chat preview; copy directly from Spotify\'s Share menu so you get the complete, working URL.',
          'Next, open the free QR code generator and choose the URL (or Website) type. Paste the complete playlist link into the URL field, and the QR code updates instantly in the preview. Check the preview carefully: it should show a normal black-and-white code. Then download it as a PNG — high resolution if you plan to print it on a poster or merch, standard size if it is going on a screen, a chat message, or a social post.',
          'Finally, test before you distribute. Scan the code with your own phone, confirm it opens Spotify with the correct playlist, and confirm the playlist is playable (not private, not deleted, and not restricted to a region your audience cannot access). Testing with a second device is worth the thirty seconds: it catches the two most common mistakes — a truncated link copied from a wrapped chat message, and a code built from a playlist that was later made private.',
        ],
        bullets: [
          'In Spotify: playlist → ••• → Share → Copy link (or right-click → Share → Copy link on desktop).',
          'In the generator: select the URL type and paste the complete playlist link.',
          'Download as PNG — high resolution for print, standard for screens.',
          'Scan-test with a second device before sharing the code anywhere.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator with URL field for a Spotify playlist link',
            caption: 'Paste the full Spotify playlist link into the URL field — the code generates instantly.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'Choosing the URL QR code type for a Spotify playlist link',
            caption: 'Choose the URL type so the code opens the Spotify playlist directly.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Downloading the Spotify playlist QR code as a PNG file',
            caption: 'Download the finished code as a PNG, ready for posters, invitations, or social posts.',
          },
        ],
      },
      {
        id: 'playlist-privacy-and-link-settings',
        heading: 'Playlist Privacy, Public Links, and What Breaks a Code',
        paragraphs: [
          'A QR code only works as well as the playlist behind it. The most important setting is privacy: a private playlist cannot be opened by anyone except its owner, so a QR code pointing at a private playlist shows your audience an error or an empty page. Before you print or share a code, set the playlist to Public (playlist menu → "Make public"). If you want people to follow the playlist, it must be public; a private playlist cannot be followed by anyone else, code or no code.',
          'Collaborative playlists deserve a second look too. A collaborative playlist lets invited friends add tracks, which is great for a party or a wedding, but the playlist link stays the same — so a QR code made before you enabled collaboration keeps working. What does break a code is deleting the playlist, or changing its visibility back to private after distributing the code. If you must delete or privatize a playlist, regenerate the code for the replacement playlist and reprint or repost it; there is no way to redirect an already-printed static code.',
          'One more check: regional availability. Most playlists open everywhere, but if a playlist contains tracks that are unavailable in a listener\'s country, those tracks will appear greyed out for that listener. That is a licensing limitation, not a problem with your code — the playlist itself still opens. If your audience is international, stick to widely available tracks when building a playlist you plan to share publicly.',
        ],
        callout: {
          title: 'Public before you print',
          text: 'A QR code to a private playlist is a dead end for everyone except you. Set the playlist to Public first, then scan-test the code on a second device or a friend\'s phone.',
          type: 'warning',
        },
      },
      {
        id: 'where-to-use-spotify-qr-code',
        heading: 'Where to Use a Spotify Playlist QR Code',
        paragraphs: [
          'Parties and weddings are the classic use. Put the code on the invitation ("Scan for the party playlist"), on table cards at a wedding reception, or on a poster by the DJ booth so guests can follow the playlist and keep listening after the night ends. A wedding couple can even make the playlist collaborative before the event, so guests add their own song requests by scanning the code — the playlist becomes part of the party, not just background music.',
          'Businesses get real value from playlist codes too. A cafe can print a code on the menu or the receipt ("Scan to hear what\'s playing"), a gym can put its workout playlist on the wall by the entrance, and a salon can leave a code at each station so clients can follow the shop\'s playlist. For these uses, size follows viewing distance: about 2 x 2 cm on a menu or receipt, at least 5 x 5 cm on a poster scanned from arm\'s length, and larger for a wall display. Print at 300 DPI and keep a white margin (quiet zone) around the code.',
          'For artists, DJs, and creators, the code belongs on merch and promo material: flyers, stickers, posters, business cards, and even the back of a t-shirt. A code next to "Listen on Spotify" turns every physical item into a distribution channel — someone who picks up a flyer at a gig can be listening to your playlist within seconds. On social media, post the code image itself (Instagram Stories, X, WhatsApp Status) with a short caption, since a link in a bio is one extra tap that many people skip.',
        ],
        bullets: [
          'Parties & weddings: invitations, table cards, DJ-booth posters; make it collaborative for song requests.',
          'Businesses: cafe menus, gym walls, salon stations — "Scan to hear what\'s playing".',
          'Artists & DJs: flyers, stickers, posters, merch — every physical item becomes a listening link.',
          'Social: post the code image in Stories or Status, where bio links get skipped.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common Mistakes (and How to Avoid Them)',
        paragraphs: [
          'The single most common mistake is encoding the playlist name instead of the link. A code containing "Chill Vibes 2026" does nothing useful — a phone camera cannot turn a name into a Spotify playlist. Always encode the complete https://open.spotify.com/playlist/... URL. The second most common mistake is a truncated link: copying from a wrapped chat message or a screenshot of a link produces a code that opens a broken page. Copy directly from Spotify\'s Share menu, never by retyping or copying from a forwarded message.',
          'Another frequent failure is the private-playlist trap: the code works perfectly on the creator\'s phone (because they own the playlist) but fails for everyone else. Always test with a second account or a friend\'s phone, not just your own device. Finally, do not shrink the code to fit a cramped corner of a poster or a merch design: a code too small for the viewing distance fails silently, and people will assume the link is broken rather than tell you the code was too small. When in doubt, print it bigger and test it from the distance your audience will actually scan from.',
        ],
        callout: {
          title: 'If scans fail, check privacy first',
          text: 'A code that works for you but not for anyone else almost always points at a private playlist. Make it public, then test on a friend\'s phone before reprinting.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code for a Spotify playlist for free?',
        answer:
          'Open the playlist in Spotify, tap ••• → Share → Copy link, then paste the full link into a free QR code generator as a URL code and download the PNG. The process takes under a minute, needs no account, and the code never expires as long as the playlist stays public.',
      },
      {
        question: 'What is the difference between a Spotify Code and a QR code?',
        answer:
          'A Spotify Code is Spotify\'s own barcode-style code that can only be scanned from inside the Spotify app (Search → camera icon). A standard QR code scans with any phone camera, no app needed, and opens the playlist link in Spotify or the web player — which makes it better for posters, invitations, and merch.',
      },
      {
        question: 'Do Spotify QR codes expire?',
        answer:
          'A static QR code itself never expires. However, it stops working if the playlist is deleted or made private, because the link behind it no longer opens for anyone else. As long as the playlist stays public, one code can work indefinitely.',
      },
      {
        question: 'Can I make a QR code for a Spotify song, album, or podcast?',
        answer:
          'Yes — the process is identical. Copy the link for any Spotify content (song, album, artist profile, or podcast episode) from its Share menu, paste it into the generator as a URL code, and download the PNG. Any public Spotify link can become a QR code.',
      },
      {
        question: 'Why does my Spotify QR code not work for other people?',
        answer:
          'The most common cause is a private playlist: it opens for you because you own it, but everyone else gets an error. Set the playlist to Public and test the code on a friend\'s phone. Other causes are a truncated link copied from a chat message, or a playlist that has since been deleted.',
      },
      {
        question: 'Can I put my own logo or colors on a Spotify QR code?',
        answer:
          'You can add a small logo in the center and change colors, but keep the contrast high (dark code on a light background) and the logo small — covering more than about 30% of the code breaks scanning. For printed posters and merch, a plain high-contrast code is the safest choice.',
      },
    ],
    ctaTitle: 'Make Your Spotify Playlist QR Code Now',
    ctaDesc:
      'Copy your playlist link, paste it into the free generator, and download your QR code in under a minute — no sign-up, no cost, no expiry.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
