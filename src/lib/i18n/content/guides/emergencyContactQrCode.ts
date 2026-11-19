import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getEmergencyContactQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'Emergency Contact QR Code (Free, No Sign-Up)',
    description:
      'Learn how to make a free emergency contact QR code — a scannable card that shows your ICE details, allergies and next of kin in seconds.',
    badge: 'Guides',
    h1: 'Emergency Contact QR Code',
    subheadline:
      'An emergency contact QR code turns a wallet card, fridge magnet or phone lock screen into instant help: anyone who finds you — a paramedic, a bystander, a teacher, a colleague — scans the code with their phone and immediately sees who to call, your allergies, your medication and your blood group, without unlocking your phone or searching through your contacts. A paper ICE card works, but it can only fit a few lines, it goes out of date the moment a number changes, and it is unreadable if it gets wet or faded. A QR code holds far more, stays editable when it points at a page you control, and works on any modern phone with no app to install. This guide covers how to make one free, exactly what information to include, where to put it so it is actually found in an emergency, and what never to put on it.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Help in seconds, no unlock',
        text: 'Anyone with a phone camera can scan it — no passcode, no app, no searching through your contacts in a crisis.',
      },
      {
        label: 'More than a paper ICE card',
        text: 'A QR code can carry two contacts, allergies, medication, blood group and medical notes — far more than a wallet card fits.',
      },
      {
        label: 'Free and editable',
        text: 'A free static code costs nothing; point it at a page you control and you can update numbers without reprinting the card.',
      },
      {
        label: 'Privacy is a choice',
        text: 'Share only what a stranger needs to help you — never your full address, ID numbers, or passwords.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-emergency-contact-qr-code',
        heading: 'What Is an Emergency Contact QR Code?',
        paragraphs: [
          'An emergency contact QR code is a printed QR code that opens your "in case of emergency" (ICE) information when scanned. In its simplest form it is a vCard code: scanning it opens a contact card with your emergency contact\'s name and phone number, ready to call. In its more useful form it is a URL code pointing at a short page that lists everything a first responder needs in the first minute — your name, two emergency contacts, blood group, allergies, current medication, and any condition that changes treatment, such as diabetes, epilepsy, asthma, or a heart condition.',
          'The idea is not new — paramedics have looked for ICE contacts in phones for years — but the phone itself is the weak point. A locked phone hides its contacts, a dead battery hides everything, and a stranger in a stressful moment will not guess your passcode or navigate your phone\'s emergency settings. A printed code on a wallet card, a medical ID bracelet, or a sticker on the back of your phone removes all of that: the information is visible to anyone, on any phone, in about five seconds.',
          'That speed is the whole point. In the first minutes of a medical emergency, the questions are always the same: who is this person, who do we call, what are they allergic to, and what medication are they on. A bystander who can answer those four questions from one scan can hand a paramedic exactly what they need before the ambulance arrives. A QR code does not replace a medical bracelet for the most serious conditions — a bracelet is still the fastest thing a paramedic checks — but it carries far more detail than a bracelet ever can, and it costs nothing to make.',
          'Emergency contact QR codes are useful far beyond medical emergencies. Parents put them on a child\'s school bag so a teacher can reach them if the child is hurt or lost. Carers put them on an elderly parent\'s wallet card so a neighbour can call the family. Solo travellers stick one inside their passport cover. Cyclists and runners print one on a tag on their bike or shoe. In every case the logic is the same: the code is a shortcut to the one phone call that matters, and it works even when the person it belongs to cannot speak for themselves.',
        ],
        callout: {
          title: 'A QR code helps strangers help you — keep it simple',
          text: 'The person scanning your code is probably stressed, in a hurry, and holding your phone or your wallet. The page it opens must show your emergency contact\'s name and a big tappable call button before anything else — no sign-in, no menu, no long introduction. If the phone number is not visible within two seconds of scanning, the code has failed at its one job.',
          type: 'info',
        },
      },
      {
        id: 'how-to-make-emergency-contact-qr-code',
        heading: 'How to Make an Emergency Contact QR Code (Step by Step)',
        paragraphs: [
          'Start by deciding what the code will open, because that choice decides everything else. The two practical options are a vCard code and a URL code. A vCard code opens a contact card with a name and phone number that the scanner can save or call directly — it is simple, works offline, and needs no web page. A URL code opens a web page with your full emergency details — two contacts, allergies, medication, blood group, and notes — which is far more useful in a real emergency, but it needs a page that loads quickly and a phone with mobile data. For most people, the URL code pointing at a short page is the better choice; use a vCard code only if you want the absolute simplest option with a single phone number.',
          'If you choose the URL route, build the page first. A free option that works well is a simple one-page site on a free host, a Google Sites page, or a Linktree-style page. Put the emergency contact\'s name and a large "Call now" button at the very top, then a second contact, then your medical details in short lines: blood group, allergies, medication with doses, and conditions. Keep the page to one screen of scrolling, use large text, and test it on a phone you do not own — a friend\'s phone on mobile data — because that is exactly how it will be used.',
          'Next, open a free QR code generator and choose the right type: URL for a page, or vCard/contact for a contact card. Paste your page link, or fill in the contact details the generator asks for. Set the error correction level to High before you download. A wallet card lives in a pocket, gets bent, scratched, and wet, and a code with High error correction still scans when up to 30% of it is damaged — that margin is worth more than a logo in the middle, so skip the logo on an emergency card: every millimetre of a small code counts.',
          'Download the code as a PNG for printing at home, or as an SVG or PDF if you are sending it to a print shop or a card maker — vector files stay sharp at any size, while a PNG gets blurry when enlarged. Print it at least 2 cm across, with a clear blank border (the quiet zone) around it, in dark ink on a white background. Then test it the way it will be used: print the card, put it in your wallet, and ask someone else to scan it with their phone — an Android and an iPhone if you can — in daylight and in a dim room. If either phone hesitates, enlarge the code or shorten the link before you print the final version.',
        ],
        subsections: [
          {
            subheading: '1. Choose vCard or URL',
            text: 'vCard opens a single contact card to call or save; a URL opens a page with two contacts, allergies, medication and blood group. A URL page is the more useful choice.',
          },
          {
            subheading: '2. Build the emergency page',
            text: 'One short page: a big call button at the top, a second contact, then blood group, allergies, medication and conditions in short lines.',
          },
          {
            subheading: '3. Generate with High error correction',
            text: 'Paste the link into a free generator, set error correction to High so the code survives scratches and water, and skip the logo.',
          },
          {
            subheading: '4. Print and scan-test',
            text: 'Print at least 2 cm across with a clear quiet zone, then have someone else scan it with two different phones before you rely on it.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator for creating an emergency contact QR code',
            caption: 'Paste your emergency page link into a free generator — a basic static code costs nothing and needs no account.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving an emergency contact QR code as PNG or SVG',
            caption: 'Download PNG for a home printout, or SVG and PDF for a print shop — vector files stay sharp on a small wallet card.',
          },
        ],
        callout: {
          title: 'Static or dynamic? For an emergency card, dynamic wins',
          text: 'A free static code bakes the link into the pattern — it works forever, but if your emergency contact changes their number you must print a new card. A dynamic code routes scans through a short redirect, so you can update the contact, the medication, or the allergies behind the same printed card, and you can see how many times it was scanned. For a card that should stay correct for years, that flexibility is worth a small paid plan; if your details rarely change, static is the right free choice.',
          type: 'tip',
        },
      },
      {
        id: 'what-to-include-emergency-contact-qr-code',
        heading: 'What to Include in an Emergency Contact QR Code',
        paragraphs: [
          'The first thing on the page is the emergency contact\'s name and phone number — as a large tappable call button, not just text. A stranger holding your phone or wallet will not copy a number digit by digit. List the relationship next to the name ("Wife — Priya", "Son — Arjun") so a paramedic knows who they are calling and what to say. Always add a second contact underneath: a parent, a sibling, or a close friend in the same city. The most common failure of an emergency card is a single contact who does not pick up, and a second number costs nothing to add.',
          'Next come the medical details, in short lines a stranger can read in ten seconds. Blood group first — it is the single most useful fact in a transfusion situation. Then allergies, in plain words: "allergic to penicillin", "peanut allergy — carries EpiPen", "no latex". Then current medication with the dose and timing: "Metformin 500 mg, twice daily". Then conditions that change treatment: diabetes, epilepsy, asthma, heart disease, pregnancy, or a recent surgery. Add your doctor\'s name and number if you have a regular one, and your health insurance details only if you are comfortable sharing them — they help at a hospital, but they are not essential for the first responder.',
          'For children, the page should also name the school and the class teacher\'s number, and note anything a teacher needs to know — an inhaler in the bag, a nut allergy, or a condition like epilepsy that a teacher should recognise. For elderly parents, add the carer\'s or home nurse\'s number, and note hearing or vision problems so a stranger knows to speak clearly or write things down. For travellers, add the travel insurance helpline and the nearest embassy number — two lines that turn a bad day abroad into a manageable one.',
          'Just as important is what to leave out. Never put your full home address on a page anyone can open — a city or neighbourhood is enough, and you can share the exact address on the call. Never put ID numbers, bank details, passwords, or your phone\'s unlock code on the page. Never list a child\'s school address or pickup routine in full. And never ask the scanner to fill in a form, create an account, or pay anything to see your details — every extra step is a reason for a stressed stranger to give up.',
        ],
        bullets: [
          'Emergency contact 1: name, relationship, and a large tappable call button with the phone number.',
          'Emergency contact 2: a second person in the same city, for the times the first contact does not answer.',
          'Blood group, allergies in plain words, current medication with doses, and conditions that change treatment.',
          'Your doctor\'s name and number, and for children the school and class teacher\'s number.',
          'Leave out: full home address, ID numbers, bank details, passwords, and anything a stranger does not need to help you.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for URL, vCard and other emergency contact QR code types',
            caption: 'A URL code pointing at your emergency page is the right type for most people — it holds two contacts and medical notes, not just one phone number.',
          },
        ],
      },
      {
        id: 'where-to-put-emergency-contact-qr-code',
        heading: 'Where to Put Your Emergency Contact QR Code',
        paragraphs: [
          'The best place is the one a stranger will actually find. For most adults that is a wallet card: a credit-card-sized card in the slot next to your ID, printed on both sides, with the code on one side and your name and the words "Emergency Contact — scan this code" on the other. A wallet is the first thing a paramedic or a bystander checks, and a card that says what it is gets scanned. Laminate it or print it on thick card — a paper card in a wallet lasts a month, a laminated one lasts years.',
          'The second place is your home: a fridge magnet or a sticker on the inside of the front door with the household\'s emergency codes. If something happens at home — a fall, a gas leak, a fire — the person who finds you is often a family member or a neighbour, and a code on the fridge is faster than searching a phone. For families with children, put a small card in each child\'s school bag, and a copy in the car\'s glove box: a teacher or a passer-by who finds a lost or hurt child needs the parent\'s number, not the child\'s phone.',
          'Your phone itself is the third place, and it is the one people forget. A sticker on the back of your phone case with the code works even when the phone is locked or dead — the scanner uses their phone, not yours. The same applies to a medical ID bracelet with a small code engraved on it, which is the fastest option of all for people with serious conditions: a paramedic checks the wrist first, and a bracelet that scans is better than one that only fits a few engraved words. For cyclists, runners, and motorbike riders, a tag on the helmet, the bike frame, or the shoe serves the same purpose — it is found exactly where the accident happens.',
          'Wherever you put it, label it clearly. A bare QR code on a card looks like an advert or a payment code, and a stranger will ignore it. Print the words "EMERGENCY CONTACT" in large letters above the code, with a line underneath: "Scan with your phone camera to call my family". That one line is the difference between a code that gets scanned in a crisis and a code that gets overlooked. And make a spare: keep a second printed card at home, so a lost wallet does not leave you with no emergency code at all.',
        ],
        callout: {
          title: 'Label it, or it will be ignored',
          text: 'A bare QR code looks like an advert. Print "EMERGENCY CONTACT — scan with your phone camera to call my family" in large letters above the code, on every card, sticker and magnet. The label is what makes a stranger scan it.',
          type: 'warning',
        },
      },
      {
        id: 'emergency-contact-qr-code-privacy',
        heading: 'Privacy and Safety: What Not to Share',
        paragraphs: [
          'An emergency contact QR code is, by design, information you give to strangers — so the only safe rule is to share the minimum a stranger needs to help you. A phone number, a blood group, and an allergy list are genuinely useful to a paramedic. Your full home address, your date of birth, your ID or passport number, your bank details, and your children\'s school pickup routine are not, and putting them on a page anyone can open is a real risk: a lost wallet with a code on it hands all of that to whoever finds it.',
          'The practical fix is to put the sensitive details behind a step only the right person takes. Your emergency contact — the person who gets the call — can hold your address, your insurance number, and your doctor\'s full records, and share them with the hospital on the phone. The page itself only needs to trigger that call. If you use a dynamic code, you can also change the destination page the moment a card is lost or stolen, which a printed paper card can never do.',
          'Think about who might scan the code when there is no emergency. A code on a child\'s school bag is visible to classmates; a code on a phone case is visible to anyone sitting next to you. Keep the page free of anything embarrassing or sensitive, and never put a child\'s photo, full name, and school together on the same page — a first name and a parent\'s number are enough for a teacher to reach you. For the same reason, do not use a code that opens your social media profile or a page with your home address on it as your emergency code.',
          'Finally, check the page regularly. Scan the actual printed card once a month — not a bookmark on your own phone — and confirm that the numbers are still correct, the page still loads, and the call button still dials. Update the page the day your emergency contact changes their number, your medication changes, or a new allergy is diagnosed. An emergency code with a dead number is worse than no code, because it wastes the minutes that matter most.',
        ],
      },
      {
        id: 'emergency-contact-qr-code-mistakes',
        heading: 'Emergency Contact QR Code Mistakes to Avoid',
        paragraphs: [
          'The most common mistake is a code that points at a dead link or a page that no longer loads. Owners build a free page, the free host deletes it after a year of inactivity, or the paid dynamic-code plan lapses and the redirect breaks — and the card silently stops working. The person who needs it discovers the failure at the worst possible moment. Scan your own printed card once a month, and use a page on a service you will actually keep.',
          'The second mistake is a code that is too small, too low-contrast, or printed without a quiet zone. A 1 cm code on a tiny tag, a code printed in light grey on silver, or a code crammed edge-to-edge on a card will fail in poor light, with a wet card, or on an older phone. Dark modules on a white background, at least 2 cm across, High error correction, and a clear blank border around the code — that is the whole recipe, and skipping any part of it means the code only works in perfect conditions.',
          'The third mistake is putting the wrong information first. A page that opens with a long introduction, a photo gallery, or a life story before showing the phone number will lose a finder who is in a hurry. A page that lists your name but no phone number, or a phone number that is a landline nobody answers, is a dead end. The call button goes at the top, before anything else, and the second contact goes directly underneath it.',
          'The fourth mistake is forgetting to tell anyone the code exists. A perfect emergency card in a wallet nobody knows about still depends on a stranger finding it — so tell your family, your colleagues, and your children\'s teachers that the code is in your wallet or on the fridge, and what it does. And if you carry the code for an elderly parent or a child, make sure the emergency contact named on the page knows they are the contact, and that their phone is charged and answered. A code is only as reliable as the person it calls.',
        ],
        callout: {
          title: 'Scan your own card once a month',
          text: 'Set a monthly reminder to scan the printed card with your phone. It takes ten seconds, and it is the only way to catch a faded code, a dead link, or an out-of-date number before the day you actually need it. If the scan fails, reprint the card that week — not next month.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make an emergency contact QR code for free?',
        answer:
          'Build a short emergency page with your name, two emergency contacts with tappable call buttons, blood group, allergies and medication, then paste its link into a free QR code generator as a URL code with error correction set to High. Download the PNG, print it at least 2 cm across on a wallet card, and test it with two different phones before relying on it. The code itself is free.',
      },
      {
        question: 'What information should I put on an emergency contact QR code?',
        answer:
          'Your name, two emergency contacts with phone numbers, blood group, allergies in plain words, current medication with doses, and conditions that change treatment, such as diabetes or epilepsy. Add your doctor\'s number if you have one. Do not put your full home address, ID numbers, bank details or passwords on the page — your emergency contact can share those with the hospital on the call.',
      },
      {
        question: 'Can paramedics scan a QR code on my phone lock screen?',
        answer:
          'A code shown on your lock screen only helps if your phone is on and the screen is visible — a dead battery or a cracked screen defeats it. A printed code on a wallet card, a sticker on the back of your phone case, or a medical ID bracelet works without your phone at all, because the scanner uses their phone. Use the printed card as the main option and the lock screen as a backup, not the other way round.',
      },
      {
        question: 'Is a QR code better than a written ICE card?',
        answer:
          'For most people, yes. A written card fits a few lines and goes out of date the moment a number changes; a QR code can carry two contacts, allergies, medication and blood group, and if it points at a page you control, you can update the details without reprinting the card. A paper card is still a good backup — keep one behind the QR card in your wallet in case a phone cannot scan.',
      },
      {
        question: 'What if I change my phone number or emergency contact?',
        answer:
          'If your code points at a web page, just update the page — the printed code keeps working because the link has not changed. If you used a vCard code with the details baked into the pattern, you must generate a new code and reprint the card. A dynamic code lets you change the destination link behind the same printed card, which is the most flexible option for details that change often.',
      },
      {
        question: 'Are emergency contact QR codes safe for children?',
        answer:
          'Yes, if you keep the page minimal. Put the child\'s first name, the parent\'s phone number as a call button, the school and class teacher\'s number, and any allergy or medical note a teacher needs. Do not put the child\'s photo, full name, home address, or school pickup routine on the page — a first name and a parent\'s number are enough for a teacher or a passer-by to reach you.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn your emergency details into a clean, scannable QR code in under a minute — free, no sign-up, ready to print on a wallet card, fridge magnet or phone sticker.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
