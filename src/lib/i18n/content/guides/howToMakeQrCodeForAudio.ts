import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToMakeQrCodeForAudioData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a QR Code for Audio (Free, No Sign-Up)',
    description:
      'Make a QR code for an audio file free — host your MP3, link it, and print a scannable code for songs, podcasts, voice notes, and audio guides.',
    badge: 'Guides',
    h1: 'How to Make a QR Code for Audio: Share Music, Podcasts & Voice Notes Free',
    subheadline:
      'A song, a podcast episode, a voice message, or a museum audio guide — all of them can be shared with a single scan. A QR code for audio lets anyone play your recording on their phone without typing a link, installing an app, or searching for a file. This guide shows how to make one for free: where to host the audio, how to turn the link into a QR code, how to print it so it scans every time, and the mistakes that leave scanners staring at a “Request access” page instead of hearing your audio.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Audio lives behind a link, not inside the code',
        text: 'A QR code holds at most about 3 KB of data, so a song or voice note must be hosted online — the code stores the link to it.',
      },
      {
        label: 'Hosting is free',
        text: 'Google Drive, SoundCloud, Dropbox, or your own website can host the audio at no cost. Set the link to “Anyone with the link” before you print.',
      },
      {
        label: 'Static codes never expire',
        text: 'A static QR code works forever as long as the audio link stays live. Keep the file in the same place and never rename it.',
      },
      {
        label: 'Always test with a real phone',
        text: 'Scan the printed code on an iPhone and an Android phone, in the real lighting where it will be used, before you print a hundred copies.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-qr-code-for-audio',
        heading: 'What Is a QR Code for Audio?',
        paragraphs: [
          'A QR code for audio is a scannable code that opens and plays a sound file — a song, a podcast episode, a voice note, a guided tour, or a recorded message — when someone points their phone camera at it. The scanner taps the notification that appears, their browser opens a built-in audio player, and the recording starts playing. There is nothing to download, no app to install, and no link to type. For the person sharing the audio, the whole setup takes about ten minutes and costs nothing.',
          'The trick is understanding what the code actually stores. A QR code is a pattern of black and white squares that encodes a short piece of text — in this case, a web link. It does not contain the audio itself. When someone scans it, their phone reads the link and opens it, and the audio streams from wherever the file is hosted. That distinction matters, because it decides every choice that follows: where you upload the file, which link you encode, and what happens if you move or delete the file later.',
          'Audio QR codes show up in more places than most people realise. Musicians print them on posters and business cards so fans can hear a demo track. Podcasters put them on flyers and episode cards. Museums and heritage sites place them next to exhibits so visitors can listen to an audio guide in their own language. Teachers use them for pronunciation and listening exercises. Families record a voice message inside a greeting card. Real estate agents link a voice walkthrough to a property listing. In every case the pattern is the same: sound that would be awkward to share as a link becomes something you can point a phone at.',
        ],
        callout: {
          title: 'A QR code cannot hold a sound file',
          text: 'Even the largest QR code stores only about 3 KB of binary data — roughly a thousand times smaller than a one-minute MP3. Anyone promising to “embed audio in a QR code” is really hosting the file and linking to it. The good news: that is exactly how it should work, and it costs nothing.',
          type: 'info',
        },
      },
      {
        id: 'how-audio-qr-codes-work',
        heading: 'How Audio QR Codes Actually Work',
        paragraphs: [
          'The chain has three links, and the code is only the middle one. First, the audio file lives somewhere on the internet — Google Drive, SoundCloud, Dropbox, your own website, or a streaming service. Second, the QR code stores the public link to that file. Third, the scanner’s phone reads the link and opens it in a browser, which plays the audio with its built-in player. If any link in the chain breaks — the file is deleted, the sharing permission is private, or the link changes — the code stops working even though the printed squares look exactly the same.',
          'That is why the hosting choice matters more than the code itself. A direct link to an MP3 file (one ending in .mp3, or a link that opens a player page) works best, because the phone’s browser can play it immediately. A link to a folder, a login page, or a file that requires an account will not. Google Drive is the most common free host: upload the MP3, right-click, choose Share, and set access to “Anyone with the link”. SoundCloud works well for music and podcasts because it shows a proper player with a waveform. Dropbox gives a clean direct link. Your own website is the most reliable long-term option if you have one, because you control the file and the link will never change unless you change it.',
          'Static codes are the right choice for audio in almost every case. A static QR code encodes the link directly, never expires, and needs no subscription. The only reason to consider a dynamic code — one that points to a short link you can redirect later — is if you expect the audio file to move. For a printed poster, a greeting card, or a museum plaque, the link should not move anyway, so a free static code is the simplest and most durable option.',
        ],
        subsections: [
          {
            subheading: 'The audio file',
            text: 'An MP3, WAV, or M4A recording hosted online — a song, podcast, voice note, or guided tour. MP3 is the safest format: every phone plays it.',
          },
          {
            subheading: 'The public link',
            text: 'A share link anyone can open without signing in. This is the step most people get wrong — a private link shows a “Request access” page.',
          },
          {
            subheading: 'The QR code',
            text: 'A static code that stores the link. It never expires, costs nothing, and can be printed on anything from a card to a poster.',
          },
          {
            subheading: 'The phone’s player',
            text: 'The scanner’s browser opens the link and plays the audio with its built-in player. No app, no account, no download needed.',
          },
        ],
      },
      {
        id: 'how-to-make-a-qr-code-for-audio',
        heading: 'How to Make a QR Code for Audio (Step by Step)',
        paragraphs: [
          'Start by preparing the audio file. Export or convert it to MP3 if it is not already — MP3 plays on every phone and keeps file sizes small, which matters when listeners are on mobile data. A one-minute voice recording at standard quality is roughly 1 MB; a three-minute song is about 3–5 MB. Trim silence from the start and end of the recording, and give the file a clear name, such as “museum-tour-room-3.mp3”, so you can find it later. If the audio is a podcast episode or a song that already lives on Spotify, Apple Podcasts, or YouTube Music, you can skip the upload entirely and use that platform’s share link instead.',
          'Next, upload the file to your chosen host and get a public link. In Google Drive, upload the MP3, right-click it, choose Share, and change the access to “Anyone with the link” — this is the step people forget, and a private link is the single most common reason audio QR codes fail. Copy the share link. Then test the link before you do anything else: open it in a private or incognito browser window, where you are not signed in to your own account. If the audio plays there, the link is genuinely public. If you see a sign-in or “Request access” page, the permission is wrong — fix it now, not after printing.',
          'Now generate the QR code. Open the free QR code generator, choose the URL type, and paste the audio link. Before downloading, set the error-correction level to high if the code will be printed small, displayed outdoors, or placed somewhere it might get scuffed or wet — high error correction keeps the code scannable even when up to 30% of it is damaged or obscured. Download the code as a high-resolution PNG for printing, or as SVG if you are placing it in a poster, a book, or packaging artwork. Print it at least 3 × 3 cm for something people hold in their hand, and larger — 8 cm or more — for posters and standees that people scan from a metre away.',
          'Finally, test the printed code with a real phone before you put it in front of anyone. Print one copy, scan it from the distance and angle a real user would use, and confirm the audio actually plays — not just that a page opens. Check it on both an iPhone and an Android phone if you can, and check it in the actual lighting of the place where it will be displayed: a code that scans fine under bright office light can struggle in a dim museum hall or a sunny outdoor market. Add one line of text next to the code, such as “Scan to listen — 2 min audio”, because a code with no instruction gets far fewer scans than one that tells people what they will hear and how long it takes.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code for an audio file',
            caption: 'The free generator homepage — your audio QR code starts here, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing the URL option for linking to an audio file',
            caption: 'Choose the URL type and paste your audio link — scanners go straight to the player.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving an audio QR code as PNG or SVG for printing',
            caption: 'Download PNG for cards and flyers, or SVG for posters and packaging artwork.',
          },
        ],
      },
      {
        id: 'best-places-to-host-audio-files',
        heading: 'Best Places to Host Audio Files for a QR Code',
        paragraphs: [
          'Not all hosts behave the same way when a phone opens their link, and the differences decide whether the listener hears your audio in one tap or lands on a page that asks them to sign in. The best host is the one whose link opens a player immediately, stays free, and will still exist in a year. For most people that is Google Drive; for musicians and podcasters it is often a streaming platform they already use.',
          'Google Drive is the most flexible free option. You get 15 GB of free storage, you can upload any audio format, and the share link opens a simple player in the browser. The one thing to get right is the permission: “Anyone with the link” must be switched on, and you should test the link in a private window while signed out. Dropbox works the same way, with 2 GB free, and its links are slightly cleaner. Your own website is the most reliable long-term host — upload the MP3 to your site and link directly to it, and the link will never change unless you change it — but it only makes sense if you already have a website.',
          'Streaming platforms are the better choice when the audio is music or a podcast that already lives there. A Spotify track or episode link opens the Spotify app or web player, which most listeners already have. SoundCloud’s free tier allows up to three hours of uploads and shows a proper player with a waveform, which looks more professional than a plain file link. YouTube Music and Apple Podcasts links work the same way. The trade-off is that listeners may be asked to open an app or sign in, which adds one tap — acceptable for a song, less ideal for a quick voice message or an audio guide that should play instantly.',
          'Avoid hosts that delete files or expire links. Temporary voice-recording sites that promise “upload and share in seconds” often delete recordings after a few days or weeks, which silently kills every printed code. File-sharing links with expiry dates have the same problem. If you are printing the code on anything permanent — a poster, a book, a plaque, a greeting card — host the audio somewhere you control, and keep a backup copy of the file so you can re-upload it to the same link if anything goes wrong.',
        ],
        subsections: [
          {
            subheading: 'Google Drive',
            text: '15 GB free, any audio format, simple browser player. Set sharing to “Anyone with the link” and test it while signed out.',
          },
          {
            subheading: 'SoundCloud',
            text: 'Free tier with 3 hours of uploads. Best for music and podcasts — listeners see a proper player with a waveform.',
          },
          {
            subheading: 'Spotify / Apple Podcasts',
            text: 'Use the share link when the audio already lives there. Listeners may need the app, so it suits songs and episodes best.',
          },
          {
            subheading: 'Your own website',
            text: 'The most reliable long-term host. Upload the MP3, link directly to it, and the code works as long as your site does.',
          },
        ],
      },
      {
        id: 'where-to-use-audio-qr-codes',
        heading: 'Where to Use Audio QR Codes',
        paragraphs: [
          'Musicians were among the first to use audio QR codes, and they still get the most from them. A demo track on a business card, a new single on a gig poster, or a full album link on a merch table turns a physical object into a listening experience — the fan scans, the song plays, and the moment is not lost to “I’ll look it up later”. Podcasters use the same idea on episode cards, flyers, and show notes: a code on a printed flyer at a live event takes a listener straight to the episode, instead of asking them to remember a show name and search for it.',
          'Museums, galleries, and heritage sites use audio QR codes as a low-cost audio guide. Instead of renting out devices, they print a code next to each exhibit that links to a two-minute recording about it — in several languages, if they record each one. Visitors use their own phones and earphones, the museum spends nothing on hardware, and updating a recording is as simple as replacing the file. The same approach works for walking tours, botanical gardens, and historic buildings: one code per stop, each linking to the audio for that stop.',
          'Teachers use audio QR codes for listening and pronunciation exercises, especially in language classes: a code on a worksheet links to a native speaker reading a passage, so students can listen as many times as they need without the teacher replaying it for the whole class. Real estate agents link a voice walkthrough to a property listing or a “For Sale” board. Small businesses record a short voice greeting or a spoken menu and link it from a table tent. And families record personal messages — a birthday greeting, a grandparent’s voice, a wedding toast — and print the code inside a card, so the card plays the message when it is scanned.',
        ],
        bullets: [
          'Musicians: demo tracks on business cards, singles on gig posters, albums on merch tables.',
          'Podcasters: episode links on flyers, cards, and live-event handouts.',
          'Museums and tours: one code per exhibit or stop, each linking to a short audio guide.',
          'Teachers: pronunciation and listening exercises on worksheets students can replay.',
          'Real estate: voice walkthroughs linked from listings and “For Sale” boards.',
          'Personal: voice messages and greetings printed inside cards and invitations.',
        ],
      },
      {
        id: 'common-audio-qr-code-mistakes',
        heading: 'Common Mistakes That Break Audio QR Codes',
        paragraphs: [
          'The most common mistake is a private share link. You upload the MP3 to Google Drive, copy the link, generate the code, and print it — but you never changed the sharing setting, so every scanner lands on a “Request access” page instead of hearing your audio. The fix takes ten seconds: set the file to “Anyone with the link” and test it in a private browser window while signed out. Do this before printing anything, and repeat the test every time you replace the file.',
          'The second mistake is linking to the wrong thing. A link to a folder, a playlist page, or a homepage makes the scanner hunt for the audio instead of hearing it. A link to a page that requires an account does the same. Always link directly to the track, the episode, or the file itself — the thing you want the listener to hear — and scan the code yourself to confirm it opens the player, not a page that leads to the player.',
          'The third mistake is printing too small or too low-contrast. A tiny code on a business card, a dark code on a dark background, or a code printed on glossy paper that reflects the light will not scan, and a listener who tries once and fails will not try again. Size the code for the distance — at least 3 cm on something held in the hand, larger on a poster — keep dark modules on a light background with a quiet zone around the edges, and test the printed copy in the real lighting where it will be used.',
          'Finally, do not expect the audio to play automatically. Browsers block autoplay with sound, so the listener will always need to tap play once the player opens — that is normal, and it is the same on every phone. What you can control is what they see first: a player page that starts with a clear play button and the title of the recording, rather than a cluttered page where the audio is hard to find. And keep the recording short — a two-minute message gets listened to, a twenty-minute file linked from a poster does not.',
        ],
        callout: {
          title: 'Never move or rename the audio file',
          text: 'A static QR code stores the exact link. If you move the file to another folder, rename it, or delete it, the link breaks and every printed code stops working. Keep the file where it is, and keep a backup copy.',
          type: 'warning',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Can I put an audio file directly into a QR code?',
        answer:
          'No. Even the largest QR code stores only about 3 KB of data, while a one-minute MP3 is roughly 1 MB — about a thousand times bigger. The audio must be hosted online (Google Drive, SoundCloud, or your own website) and the QR code stores the link to it. When someone scans the code, their phone opens the link and streams the audio.',
      },
      {
        question: 'How do I make a QR code for an MP3 file for free?',
        answer:
          'Upload the MP3 to Google Drive, set sharing to “Anyone with the link”, and copy the link. Test it in a private browser window to confirm it plays without signing in. Then paste the link into a free QR code generator using the URL type, download the code as PNG, and print it. The whole process takes about ten minutes and costs nothing.',
      },
      {
        question: 'Will the audio play automatically when someone scans the code?',
        answer:
          'No — browsers block autoplay with sound, so the listener taps play once the player opens. That is normal on every phone. What matters is that the link opens a clean player page with a clear play button and the recording’s title, so the listener can start it in one tap instead of hunting for the audio.',
      },
      {
        question: 'Can I make a QR code for a Spotify song or podcast?',
        answer:
          'Yes. Open the song, album, or episode in Spotify, tap Share, and copy the link. Paste that link into a free QR code generator using the URL type. Scanners with Spotify installed will open the track in the app; others will see the web player. The same works for Apple Podcasts, YouTube Music, and SoundCloud links.',
      },
      {
        question: 'Do QR codes for audio expire?',
        answer:
          'A static QR code never expires — it stores the link permanently. What can expire is the audio behind the link: if you delete the file, move it, change its sharing permission, or use a temporary host that deletes files after a few days, the code stops working. Host the audio somewhere stable, keep the file in place, and the code works indefinitely.',
      },
      {
        question: 'How do I make a QR code for a voice note?',
        answer:
          'Record the voice note on your phone, then upload the audio file to Google Drive or Dropbox and set the share link to “Anyone with the link”. Paste the link into a free QR code generator, download the code, and print it — for example inside a greeting card or on an invitation. Anyone who scans it hears your message in their phone’s browser, with no app to install.',
      },
    ],
    ctaTitle: 'Make Your Audio QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create the QR code for your audio file and let anyone play it with a single scan.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
