import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToScanQrCodeIphoneData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Scan a QR Code on iPhone (Free, No App Needed)',
    description:
      'Learn how to scan a QR code on iPhone free — with the Camera app, the Control Center Code Scanner, and Live Text for photos. No extra app needed.',
    badge: 'Guides',
    h1: 'How to Scan a QR Code on iPhone',
    subheadline:
      'Every iPhone has a QR code scanner built in — you have never needed a separate app for it. Open the Camera app, point it at the code, and tap the yellow link that appears. This guide covers that method plus the two other built-in ways to scan (Control Center and Live Text for codes already on your screen), the fixes for the times scanning fails, and the two-second safety check that keeps a fake QR code from taking you somewhere you did not expect.',
    readingTime: '8 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'No app needed',
        text: 'Every iPhone running iOS 11 or later scans QR codes with the built-in Camera app — no download, no sign-up, no cost.',
      },
      {
        label: 'Point, wait, tap the yellow tag',
        text: 'Open Camera, hold the whole code in frame for a second or two, then tap the yellow notification with the link. You never press the shutter.',
      },
      {
        label: 'Codes already on your screen need Live Text',
        text: 'The camera cannot see its own display. For a code in a photo, screenshot, message, or email, long-press the code instead.',
      },
      {
        label: 'Read the link before you tap it',
        text: 'The yellow tag shows the destination before you open it. A mismatched or misspelled domain is the clearest sign of a fake code.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'do-you-need-an-app-to-scan-qr-codes-on-iphone',
        heading: 'Do You Need an App to Scan a QR Code on iPhone?',
        paragraphs: [
          'No. Apple added QR code reading to the Camera app with iOS 11 back in 2017, so every iPhone running iOS 11 or later — anything from the iPhone 6s onward — already has a scanner. It costs nothing, it needs no download, and it works the same way whether the code is on a restaurant table, a poster, a product box, a TV screen, or another phone’s display. The scanner is switched on by default, so for most people the whole process is: open Camera, point, tap the link.',
          'That matters because the App Store is full of third-party “QR scanner” apps, and most of them are a worse deal than the tool already on your phone. Many are free only until they show full-screen ads, ask for a subscription to unlock basic scanning, or request access to your photos, contacts, or location that a scanner has no business needing. Some have even been caught redirecting scans through their own servers. Apple’s own guidance and security researchers alike recommend the built-in Camera or Code Scanner instead: nothing is installed, nothing tracks the scan, and the link preview is shown to you before anything opens.',
          'There are three built-in ways to scan, and which one you use depends on where the code is. If the code is in front of you — printed on paper, on a sign, or on another screen — use the Camera app or the dedicated Code Scanner in Control Center. If the code is already on your own iPhone, in a photo, a screenshot, a message, or an email, use Live Text: long-press the code and the link appears. The rest of this guide walks through all three, in that order.',
        ],
        callout: {
          title: 'Check the setting first if nothing happens',
          text: 'Scanning is on by default, but it can be switched off — and that is the single most common reason the Camera ignores a code. Go to Settings > Camera and confirm “Scan QR Codes” is switched on (green). If it was off, turn it on and try again; no restart is needed.',
          type: 'info',
        },
      },
      {
        id: 'how-to-scan-qr-code-iphone-camera-app',
        heading: 'How to Scan a QR Code on iPhone With the Camera App',
        paragraphs: [
          'This is the method you will use most of the time, and it takes about five seconds. Open the Camera app — from the Home Screen icon, by swiping left on the Lock Screen, from the camera button in Control Center, or by pressing the Camera Control button on the side of an iPhone 16 or newer. Stay in Photo mode, which is the default mode Camera opens in; you do not need to switch to any special scanning mode, and you do not press the shutter button at any point.',
          'Hold the phone so the whole code fits on screen, roughly 15 to 30 centimetres (6 to 12 inches) away, and keep it steady for a second or two. The camera recognises the code automatically: yellow corner marks lock onto its edges and a yellow notification appears at the top of the screen showing the destination — a website address, a Wi-Fi network name, or the name of an app, depending on what the code contains. That notification is the whole point of the step: read it before you tap it, because it tells you exactly where you are about to go.',
          'Tap the yellow notification and the link opens — a web page in Safari, a prompt to join a Wi-Fi network, an App Store listing, a payment screen, or a contact card, depending on the code. If the code is a Wi-Fi code, your iPhone shows a “Join Network” prompt instead of a web link; tap Join and it connects without you typing the password. If nothing appears after two or three seconds, move the phone a little closer or further away, tilt it slightly to cut glare from a glossy surface, or tap the screen once to refocus. A code printed very small needs you closer; a code on a poster needs you further back — the rule is simply that the whole square, including its white border, must fit inside the frame.',
        ],
        subsections: [
          {
            subheading: 'Open Camera',
            text: 'Home Screen icon, swipe left on the Lock Screen, or the camera button in Control Center. On iPhone 16 and newer, the Camera Control button on the side opens it too.',
          },
          {
            subheading: 'Stay in Photo mode',
            text: 'Photo is the default mode and the one Apple recommends for scanning. No special mode, no shutter press — just point.',
          },
          {
            subheading: 'Fit the whole code in frame',
            text: 'Hold 15–30 cm away so the entire square plus its white border is visible. Too close and the camera cannot see the edges; too far and the pattern is too small to read.',
          },
          {
            subheading: 'Read the yellow tag, then tap',
            text: 'The tag shows the destination before anything opens. If the address looks wrong or unfamiliar, do not tap — close Camera and walk away.',
          },
        ],
      },
      {
        id: 'scan-qr-code-iphone-control-center',
        heading: 'Use the Code Scanner in Control Center',
        paragraphs: [
          'Apple also ships a dedicated scanner, which its support pages call Code Scanner and which appears in Control Center as the Scan Code control. It opens a full-screen viewfinder that does nothing but scan, so there is no mode to get wrong and no photo thumbnail in the way, and it has a flashlight button built into the screen — handy for codes in dim restaurants, on dark stickers, or in a car park at night. If you scan codes often, this is the faster route: one swipe and one tap, and you are scanning.',
          'To use it, open Control Center — swipe down from the top-right corner on an iPhone with Face ID, or swipe up from the bottom edge on an iPhone with a Home button — and tap the Scan Code button, which shows a small QR code icon. Point the phone at the code, tap the flashlight if the code is hard to see, and tap the result that appears to open it. The scanner reads the same kinds of codes as the Camera app: links, Wi-Fi networks, contacts, and app links.',
          'If you do not see the Scan Code button, add it once and it stays there. On recent iOS versions, open Control Center, touch and hold an empty part of the background, tap Add a Control, then find Scan Code in the gallery and tap it. On older iOS versions, the same control is added from Settings > Control Center, under More Controls, by tapping the green plus next to Code Scanner. You can also put the scanner on your Lock Screen: on iPhone 15 and later, long-press the Lock Screen, tap Customise, and swap Code Scanner into one of the two bottom-corner shortcuts — useful if you scan codes several times a day.',
        ],
      },
      {
        id: 'scan-qr-code-from-photo-screenshot-iphone',
        heading: 'How to Scan a QR Code From a Photo or Screenshot on iPhone',
        paragraphs: [
          'The Camera cannot read a code that is showing on the same iPhone’s screen, because the lens cannot point at its own display — a fact that catches out almost everyone the first time a friend messages them a code. For codes that are already on your phone, Apple’s answer is Live Text, the feature that recognises text and codes inside images. It works on iPhone XS and XR or newer running iOS 15 or later, and it needs no setup.',
          'Open the photo or screenshot in the Photos app, then touch and hold your finger directly on the QR code for a second. A menu appears with the link, the Wi-Fi network, or the action the code contains — tap it to open. The same long-press works in other places too: on a code inside a message in the Messages app, in an email in the Mail app, or on a web page in Safari. If the code is in a screenshot you have not taken yet, take the screenshot first (press the Side button and Volume Up together), open it from the thumbnail in the bottom-left corner, and long-press the code there.',
          'If long-pressing does nothing, check two things. First, make sure the code is large and sharp enough in the image — a code that fills only a tiny corner of a wide screenshot may be too small for Live Text to read, in which case pinch to zoom in on it first and then long-press. Second, confirm Live Text is on: go to Settings > General > Language & Region and check that Live Text is enabled. On iPhones older than the XS, or on iOS versions before 15, Live Text is not available; the workaround is to open the image on another screen — a laptop, a tablet, or a friend’s phone — and scan it with the Camera app instead.',
        ],
        callout: {
          title: 'The camera cannot scan its own screen',
          text: 'If a QR code is on your iPhone’s display — in a message, an email, or a screenshot — pointing the Camera at the phone does nothing. Long-press the code in the image instead, or display it on a second screen and scan that.',
          type: 'tip',
        },
      },
      {
        id: 'iphone-qr-code-not-scanning',
        heading: 'iPhone QR Code Not Scanning? Fixes That Work',
        paragraphs: [
          'When scanning fails, the cause is almost always one of a short list, and it is worth working through them in order before installing anything. First, check the setting: Settings > Camera > Scan QR Codes must be on. Second, check the distance and the frame — the whole code, including the white quiet zone around its edges, must be visible, and the phone must be held steady for a second or two; waving the phone or holding it at a sharp angle is the most common reason a scan never triggers.',
          'Third, fix the light. A code in a dark room, on a glossy laminated menu, behind glass, or on a curved bottle reflects light and confuses the camera. Move so the light falls on the code rather than bouncing off it, or use the flashlight in the Code Scanner. Fourth, look at the code itself: a creased, torn, faded, or partly covered code may be unreadable, and a code printed smaller than about 2 cm across is hard for any phone camera to read. If the code is damaged, ask for a fresh copy rather than fighting with the old one — and if you are the one printing codes, keep them at least 3 cm across for anything held in the hand.',
          'If the code looks fine and the setting is on, try the Code Scanner in Control Center instead of the Camera app — its dedicated viewfinder sometimes locks on faster. Then close the Camera app completely (swipe up from the bottom and flick the Camera card away) and reopen it, and if that fails, restart the iPhone. As a last resort, check for an iOS update in Settings > General > Software Update: camera and scanning fixes ship with iOS updates, and an iPhone several versions behind can behave oddly. What you should not do is install a random scanner app to “fix” it — a third-party app cannot read a code the built-in scanner cannot, and it adds ads and permissions to a problem that is almost always distance, light, or a damaged code.',
        ],
        bullets: [
          'Scan QR Codes toggle off — Settings > Camera, switch it on; it is on by default but can be turned off accidentally.',
          'Code not fully in frame — the whole square plus its white border must be visible; move closer for small codes, further back for posters.',
          'Bad light or glare — move the light, tilt the phone, or use the Code Scanner flashlight in Control Center.',
          'Damaged, faded, or tiny code — ask for a fresh copy; codes under about 2 cm across are hard for any camera to read.',
          'Camera app stuck — force-close Camera and reopen it, then restart the iPhone if it still fails.',
          'Out-of-date iOS — check Settings > General > Software Update; scanning fixes ship with iOS updates.',
        ],
      },
      {
        id: 'qr-code-safety-tips-iphone',
        heading: 'Stay Safe: Check the Link Before You Tap',
        paragraphs: [
          'A QR code is just a link in a square, and that is exactly what makes fake ones dangerous: you cannot see where a code goes until your phone shows you the preview, and criminals know it. The scam has a name — quishing, short for QR-code phishing — and it usually works by sticking a fake code over a real one on a parking meter, a restaurant table, or a poster, or by sending a code in an email or a message that pretends to be from your bank, a delivery company, or a government service. The fake code opens a convincing copy of a login or payment page and steals whatever you type into it.',
          'The defence is the two seconds it takes to read the yellow tag before you tap it. The tag shows the real destination, so check the domain: a bank link should be the bank’s own domain, not a lookalike with an extra letter, a hyphen where there should not be one, or a URL shortener hiding the real address. Be especially careful with codes that ask you to log in or pay — a real bank or delivery company does not send QR codes in unexpected emails asking you to sign in, and a parking meter code that opens a payment page with a strange domain is a code to walk away from.',
          'Two habits cover nearly all of it. First, never use a QR code to log in to an account or make a payment unless you were expecting that exact code — from a restaurant table you are sitting at, a poster you chose to scan, or a business you are standing in. Second, if a code opens a login page, do not type your password there: close it, open the app or website yourself, and log in the normal way. The built-in scanner is the safest way to scan precisely because it shows you the link first and opens nothing on its own — the risk is never the scanning, it is the tapping without looking.',
        ],
        callout: {
          title: 'Never log in or pay through an unexpected QR code',
          text: 'Codes in unsolicited emails, messages, or stuck over a parking meter are the classic quishing setup. If a code asks for a password or a payment, close it and open the service yourself instead — your account will still be there.',
          type: 'warning',
        },
      },
      {
        id: 'how-to-make-your-own-qr-code-free',
        heading: 'Make Your Own QR Code for Free',
        paragraphs: [
          'Once you know how to scan codes, making one is the natural next step — and it is just as free. A QR code can point at a website, a Wi-Fi network, a contact card, a menu, a payment link, or an app store listing, and anyone with an iPhone or Android phone can scan it with their built-in camera. Open the free generator, choose the type that matches what you want to share, paste your link or fill in the details, and download the code as a PNG for everyday use or as an SVG if it is going into printed artwork.',
          'Before you share it, test it the way this guide taught you to scan: point your iPhone camera at it, check the yellow tag shows the right destination, and tap through to confirm it opens the right page. Print it at least 3 cm across for anything a person holds in their hand, keep the modules dark on a light background, and leave a clear white border around the edges — the same rules that make other people’s codes easy for your phone to read are what make your code easy for theirs.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code on iPhone or any phone',
            caption: 'The free generator homepage — make your own QR code in under a minute, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a QR code as PNG or SVG after creating it',
            caption: 'Download PNG for everyday sharing, or SVG for posters, menus, and printed artwork.',
          },
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I scan a QR code on my iPhone without an app?',
        answer:
          'Open the Camera app, stay in Photo mode, and point the rear camera at the code so the whole square fits on screen. After a second or two a yellow notification appears with the link — tap it to open. This works on every iPhone running iOS 11 or later, and no download or sign-up is needed. You never press the shutter button.',
      },
      {
        question: 'Where is the QR code scanner on iPhone?',
        answer:
          'There are three built-in scanners. The Camera app scans any code in front of you. The Scan Code control in Control Center opens a dedicated full-screen scanner with a flashlight — add it by touching and holding the Control Center background and tapping Add a Control, or in Settings > Control Center on older iOS. And Live Text scans codes already on your screen: long-press the code in a photo, screenshot, message, or email.',
      },
      {
        question: 'Why is my iPhone not scanning QR codes?',
        answer:
          'The most common reason is the setting: go to Settings > Camera and make sure Scan QR Codes is switched on. Next, check that the whole code plus its white border is in frame, hold the phone steady 15–30 cm away, and fix the light — glare on glossy paper is a frequent culprit. If it still fails, try the Code Scanner in Control Center, force-close and reopen Camera, or restart the iPhone. A damaged, faded, or very small code may simply be unreadable.',
      },
      {
        question: 'How do I scan a QR code in a screenshot on my iPhone?',
        answer:
          'The Camera cannot scan a code on its own screen, so use Live Text instead. Open the screenshot in the Photos app and touch and hold your finger on the QR code — a menu appears with the link, which you tap to open. This works on iPhone XS and XR or newer running iOS 15 or later. The same long-press works on codes in Messages, Mail, and Safari.',
      },
      {
        question: 'Can I scan a QR code from the Lock Screen on iPhone?',
        answer:
          'Yes. Swipe left on the Lock Screen to open Camera and scan as normal, or tap the camera button in Control Center. On iPhone 15 and later you can also add the Code Scanner to a Lock Screen shortcut: long-press the Lock Screen, tap Customise, and swap Code Scanner into a bottom-corner slot. On iPhone 16 and newer, pressing the Camera Control button opens the Camera too.',
      },
      {
        question: 'Is it safe to scan QR codes on iPhone?',
        answer:
          'Scanning itself is safe — the built-in scanner shows you the link before opening anything, so nothing happens until you tap. The risk is tapping without reading: fake codes stuck over real ones or sent in unexpected emails can open lookalike login or payment pages. Always read the yellow tag first, check the domain is the real one, and never log in or pay through a code you were not expecting — open the service yourself instead.',
      },
    ],
    ctaTitle: 'Make Your Own QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — turn a link, a Wi-Fi password, or a contact card into a QR code anyone can scan with their iPhone.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
