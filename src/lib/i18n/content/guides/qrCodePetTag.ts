import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodePetTagData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code Pet Tag: Free Lost-Pet ID That Works',
    description:
      'Learn how to make a QR code pet tag free — a scannable tag that shows your pet\'s name, your phone number and vet details if they get lost.',
    badge: 'Guides',
    h1: 'QR Code Pet Tag',
    subheadline:
      'A QR code pet tag turns an ordinary collar tag into a living lost-pet poster: anyone who finds your dog or cat scans the code with their phone and instantly sees your pet\'s name, your phone number, medical notes and a photo — no app, no account, no waiting for a shelter to read a microchip. Engraved tags can only fit a name and a phone number, and a phone number on a worn tag becomes unreadable within a year. A QR code holds far more, and when the link behind it is yours to edit, the tag stays useful even after you move house or change numbers. This guide covers how to make one free, what information to put on the page it opens, and how to make a tag that survives mud, rain, chewing and daily wear.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'More than a phone number',
        text: 'A QR pet tag can show your phone, address, vet details, allergies and a photo — far more than an engraved tag ever fits.',
      },
      {
        label: 'Free and forever',
        text: 'A free static code works for the life of the tag as long as the link behind it stays live — no subscription, no battery, no app.',
      },
      {
        label: 'Finder-friendly in seconds',
        text: 'Anyone with a phone camera can scan it — no special reader, no shelter visit, no waiting for a microchip scan.',
      },
      {
        label: 'Durability decides everything',
        text: 'Laser-engraved metal or sealed epoxy survives weather and chewing; a paper printout in a pouch does not.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'qr-code-pet-tag-basics',
        heading: 'What Is a QR Code Pet Tag?',
        paragraphs: [
          'A QR code pet tag is a small tag on your pet\'s collar with a printed QR code. When someone finds your lost pet, they point their phone camera at the code, tap the notification, and a page opens with everything they need to get your pet home: the pet\'s name, your phone number, your address or neighbourhood, and any medical information that matters — allergies, medication, "do not feed" warnings, and your vet\'s number. It works on any modern phone, with no app to install and no account to create, which is exactly what you want from a stranger who has just found a frightened dog on the street.',
          'Traditional engraved tags have two hard limits. First, space: a tag the size of a coin fits a name and one phone number, and nothing else — no vet number, no allergy warning, no second contact. Second, permanence: the information is frozen at the moment of engraving. Move house, change your number, switch vets, and the tag is wrong — and an engraved tag with a dead number is worse than no tag, because it wastes the finder\'s time and delays the call that matters. A QR code pet tag solves both problems: the code holds a link, and the page at that link can carry as much information as you like and can be updated any time without touching the tag.',
          'The code also carries something an engraved tag never can: a photo. A finder who sees a photo of your dog next to the name can confirm in one second that this is the same animal, which matters when the pet is scared, muddy, or a breed that looks like a dozen others at the shelter. A photo also helps if the pet is found far from home — a neighbour scrolling a lost-pet group can match the face before they even call you.',
          'A QR code pet tag is not a replacement for a microchip, and it is important to be clear about that. A microchip is permanent, cannot fall off, and is the proof of ownership a vet or shelter will ask for. A QR tag is the fast path home: it gets your pet back in minutes from an ordinary person, while the microchip is the backup for the cases where the collar comes off. The two together are the right setup — the chip for proof, the tag for speed. And unlike a GPS tracker, a QR tag has no battery to charge, no monthly fee, and nothing to break; it works as long as the tag is on the collar and readable.',
        ],
        callout: {
          title: 'The tag is only as good as the page it opens',
          text: 'A code that opens a broken link, a page that asks the finder to sign in, or a form that demands their email address will lose your pet\'s best chance of getting home. The page must load fast on a phone, show your phone number as a big tappable button, and ask the finder for nothing. Test it on a friend\'s phone before you print the tag.',
          type: 'info',
        },
      },
      {
        id: 'how-to-make-qr-code-pet-tag',
        heading: 'How to Make a QR Code Pet Tag (Step by Step)',
        paragraphs: [
          'Start by building the page the code will open, because the page matters more than the code. The simplest free option is a page you already control: a Google Sites page, a free Linktree-style page, or a simple page on a free hosting service. Put the essentials on it: your pet\'s name and photo at the top, a large "Call the owner" button with your phone number, a second contact number, your neighbourhood or city, and a short medical section — allergies, medication, whether the pet is friendly with strangers, and your vet\'s name and number. Keep the page to one screen of scrolling; a finder standing on a pavement with a strange dog will not read a long page.',
          'If you do not want to build a page, a simpler route is a direct contact link. Some free generators offer a vCard code, which opens a contact card the finder can save — but a vCard shows only your details, not the pet\'s photo or medical notes, so a small web page is the better choice for a pet tag. Whatever you choose, copy the final link and open it on your own phone first: check that it loads in under three seconds, that the call button actually dials, and that the photo is visible without scrolling sideways.',
          'Next, open a free QR code generator, choose the URL type, and paste the link into the destination field. Set the error correction level to High before you download. A pet tag lives outdoors in rain, mud, and dust, and it gets scratched against fences and chewed by the pet itself — High error correction lets the code keep scanning even when up to 30% of it is damaged or dirty. If the generator offers a logo option, skip it for a pet tag: a small code on a small tag has no room to spare, and a logo in the centre eats into the area the phone needs to read.',
          'Download the code as a PNG for a small tag, and as an SVG or PDF if you are sending it to a tag maker or a laser engraver — vector files stay sharp at any size, while a PNG gets blurry when enlarged. Save the file with a clear name like "bruno-pet-tag-qr.png". Then test the code before you spend money on a tag: print it at the exact size it will appear on the tag, stick it on the collar, and scan it with two different phones — an Android and an iPhone — from arm\'s length, in daylight and in dim light. If either phone struggles, enlarge the code or simplify the link before you commit to metal.',
        ],
        subsections: [
          {
            subheading: '1. Build the lost-pet page',
            text: 'One simple page: pet name and photo, a big call button, a second contact, neighbourhood, and medical notes. No sign-in, no forms.',
          },
          {
            subheading: '2. Paste the link into a free generator',
            text: 'Choose the URL type, paste the page link, and set error correction to High so the code survives scratches and mud.',
          },
          {
            subheading: '3. Download PNG or SVG',
            text: 'PNG for a printed tag, SVG or PDF for laser engraving. Name the file after your pet so you can find it again.',
          },
          {
            subheading: '4. Scan-test at tag size',
            text: 'Print at real tag size, stick it on the collar, and scan with two different phones in daylight and dim light before ordering.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator for creating a QR code pet tag',
            caption: 'Paste your pet\'s lost-and-found page link into a free generator — a basic static code costs nothing and needs no account.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a pet tag QR code as PNG or SVG',
            caption: 'Download PNG for a printed tag, or SVG and PDF for laser engraving — vector files stay sharp at tag size.',
          },
        ],
        callout: {
          title: 'Static or dynamic? For a pet tag, dynamic wins',
          text: 'A free static code bakes the link into the pattern — it works forever, but if your number or address changes you must make a new tag. A dynamic code routes scans through a short redirect, so you can update the phone number, the vet, or the photo behind the same printed tag, and you can see how many times it was scanned. For a tag that should last years, that flexibility is worth a small paid plan; if your details are stable, static is the right free choice.',
          type: 'tip',
        },
      },
      {
        id: 'what-to-put-on-pet-tag-page',
        heading: 'What to Put on the Page Your Pet Tag Opens',
        paragraphs: [
          'The page has one job: get your pet home as fast as possible. Put the pet\'s name and a clear, recent photo at the very top, so the finder can confirm the match instantly. Directly underneath, put a large call button with your phone number — a tappable tel: link, not just text — because a finder holding a wriggling dog with one hand will not copy a number digit by digit. Add a second contact number underneath, ideally someone in the same household or a nearby friend, for the times you miss the call.',
          'The medical section is where a QR tag earns its keep over an engraved tag. List allergies in plain words — "allergic to chicken", "do not feed chocolate or grapes" — and any medication the pet needs, with the dose and the time it is due. Add a line about temperament: "friendly with strangers", "nervous — approach slowly", or "do not pick up, bad hip". This protects the finder as much as the pet: a stranger who knows a dog is nervous will approach it the right way, and a vet who scans the tag in an emergency will know what not to give.',
          'Include your vet\'s name and phone number, and your pet\'s microchip number if you are comfortable sharing it — it helps a vet confirm ownership quickly. Add your neighbourhood or the area where the pet usually walks, because a finder two streets away will know to knock on nearby doors, while a finder across town will know to call first. A reward line is optional: some owners add "Reward offered" and find it speeds up calls, others prefer not to — it is a personal choice, and either way the phone number matters more than the money.',
          'Think carefully about what not to put on the page. Your full home address is a bad idea on a page anyone can open — a neighbourhood and a phone number are enough for a finder to reach you, and you can share the exact address on the call. The same goes for children\'s names, your work address, or any detail a stranger does not need to return a dog. And never ask the finder to fill in a form, create an account, or pay anything to see your details — every extra step is a reason for them to give up and walk away.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for URL, Wi-Fi, vCard and other pet tag QR code types',
            caption: 'A URL code pointing at your pet\'s page is the right type for a tag — it holds a photo, two numbers and medical notes, not just a contact card.',
          },
        ],
      },
      {
        id: 'pet-tag-materials-and-size',
        heading: 'Tag Materials, Size, and Durability',
        paragraphs: [
          'The material of the tag matters more than the design of the code. A paper printout slipped into a plastic pouch will fog up, tear, or fall out within weeks — it is fine for a test, and useless as a permanent tag. The practical choices are laser-engraved stainless steel or anodised aluminium, which survive years of weather and scratching, and epoxy-sealed tags, where the printed code sits under a clear resin dome that keeps water and mud out. Both cost a few dollars from an online tag maker and last far longer than any printed sticker.',
          'Size follows the pet and the scanning distance. A tag for a large dog can carry a code 2.5–3 cm across, which scans easily from arm\'s length. A tag for a cat or a small dog may only fit a code 1.5–2 cm across — that still scans, but only if the code is printed cleanly, at High error correction, with a clear quiet zone around it. The quiet zone is the blank border around the code: without it, the phone cannot tell where the code ends and the tag begins, and a code crammed edge-to-edge on a small tag will fail in poor light. If the tag is too small for a reliable code, use a larger tag or a two-sided tag with the code on one side and the pet\'s name on the other.',
          'Test the finished tag the way it will actually be used. Clip it to the collar, let the pet wear it for a day, then scan it while the pet is moving, in sunlight, in shade, and with the tag muddy. A code that scans perfectly on a clean desk and fails on a wet, moving dog is not a working tag. Check the tag every month: run your thumb over the code, look for scratches and fading, and re-scan it. A tag that worked in November can be unreadable by March after a winter of rain — and the time to discover that is during a monthly check, not the day your pet goes missing.',
          'The collar itself deserves a thought too. A QR tag on a collar that slips off is no tag at all, so use a collar that fits properly — two fingers between collar and neck — and check the fit as a puppy grows or a cat gains weight. For cats, a breakaway collar is the safe choice: it releases if the collar snags on a branch, and losing the tag is better than injuring the cat. Keep a spare tag at home with the same code, so a lost or damaged tag can be replaced the same day without rebuilding the page or reprinting anything.',
        ],
        bullets: [
          'Laser-engraved steel or aluminium: the longest-lasting option, readable for years, survives rain and scratching.',
          'Epoxy-sealed tags: printed code under a clear resin dome — waterproof and cheap, but check the seal yearly.',
          'Code size: at least 2.5 cm for large dogs, 1.5–2 cm minimum for cats and small dogs, always with a clear quiet zone.',
          'Avoid paper printouts in pouches for permanent use — they fog, tear, and fall out within weeks.',
          'Re-scan the tag monthly and after baths, muddy walks, and chewing — a tag that worked last month can be unreadable today.',
        ],
      },
      {
        id: 'qr-code-pet-tag-vs-microchip',
        heading: 'QR Code Pet Tag vs Microchip vs GPS Tracker',
        paragraphs: [
          'Pet owners often ask which one to choose, and the honest answer is that the three do different jobs. The QR tag is the fast path home: any person with a phone can scan it and call you within a minute, with no special equipment and no visit to a vet or shelter. The microchip is the permanent proof: it cannot fall off, it survives the loss of the collar, and it is what a shelter or vet will check to confirm ownership — but it only works if someone takes the pet to a place with a scanner, and it carries no phone number a finder can call directly.',
          'A GPS tracker is the only one of the three that tells you where your pet is right now, which is genuinely useful for a dog that bolts through an open gate or a cat that roams. But trackers have a battery to charge, a subscription to pay, and a device that can fall off or run flat at the worst moment — and in many countries the tracking only works where there is mobile coverage. A tracker is a good addition for an escape artist, but it is not a substitute for a tag: when the battery dies, the tag is still there.',
          'Cost is where the QR tag wins outright. A microchip costs a vet visit and a registration fee, a tracker costs the device plus a monthly subscription, and a QR tag costs a few dollars for an engraved tag — or nothing at all if you print a test tag at home. That makes the QR tag the easiest first step for any pet owner, and the one that covers the most common scenario: a neighbour finds your dog two streets away and wants to call you now. Use all three if you can afford it — tag for speed, chip for proof, tracker for location — but if you can only pick one today, pick the tag.',
        ],
        callout: {
          title: 'The tag, the chip, and the tracker are a team',
          text: 'A QR tag gets your pet home in minutes from an ordinary finder. A microchip proves ownership when the collar is gone. A GPS tracker shows you where the pet is right now. None of the three replaces the others — together they cover every way a pet gets lost.',
          type: 'info',
        },
      },
      {
        id: 'pet-tag-mistakes',
        heading: 'QR Code Pet Tag Mistakes to Avoid',
        paragraphs: [
          'The most common mistake is a tag that points at a dead link. Owners build a free page, the free host deletes it after a year of inactivity, and the tag silently stops working — the pet is lost, a finder scans, and nothing opens. Check your pet\'s page every month by scanning the actual tag, not by opening a bookmark on your own phone, and use a page on a service you will actually keep. If you used a dynamic code, check that the redirect still works too; a paid plan that lapses can break the redirect and leave the tag dead.',
          'The second mistake is putting the wrong information on the page. A page that lists the pet\'s name but no phone number, or a phone number that is a landline nobody answers, is a dead end. A page that opens with a long story about the pet before showing the phone number will lose finders who are in a hurry. And a page that asks the finder to download an app or create an account to see your number will lose almost everyone. The phone number goes at the top, as a button, before anything else.',
          'The third mistake is a code that is too small, too low-contrast, or printed on a tag that cannot survive a pet\'s life. A 1 cm code on a tiny tag, a code printed in light grey on silver, or a paper tag in a pouch will all fail exactly when you need them. Dark modules on a light background, High error correction, a clear quiet zone, and a material that survives water and chewing — that is the whole recipe, and skipping any part of it means the tag only works in perfect conditions.',
          'The fourth mistake is forgetting that pets grow and move. A tag made when the dog was a puppy may carry a phone number from two moves ago, and a tag made for a cat may sit on a collar that is now too tight or too loose. Update the page behind the code the day your number, address, or vet changes, and check the collar fit and the tag\'s readability every month. And make a spare: keep a second tag with the same code in a drawer, so a lost collar does not leave your pet with no identification at all.',
        ],
        callout: {
          title: 'Scan your own tag once a month',
          text: 'Set a monthly reminder to scan the tag on your pet\'s collar with your phone. It takes ten seconds, and it is the only way to catch a faded, scratched, or dead link before the day your pet goes missing. If the scan fails, replace the tag that week — not next month.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make a QR code pet tag for free?',
        answer:
          'Build a simple lost-pet page with your pet\'s name, photo, your phone number and vet details, then paste its link into a free QR code generator as a URL code with error correction set to High. Download the PNG, print it at tag size, and test it with two phones before ordering an engraved metal tag. The code itself is free — you only pay a few dollars for the tag.',
      },
      {
        question: 'What information should a QR code pet tag show?',
        answer:
          'Your pet\'s name and a recent photo, a large tappable call button with your number, a second contact, your neighbourhood, and medical notes like allergies, medication and temperament. Add your vet\'s name and number too. Do not put your full home address on the page — a neighbourhood and a phone number are enough for a finder to reach you.',
      },
      {
        question: 'Is a QR code pet tag better than a microchip?',
        answer:
          'They do different jobs, so use both. A QR tag is faster — anyone with a phone can scan it and call you in a minute, with no special equipment. A microchip is permanent proof of ownership that survives a lost collar, but it only works when someone takes the pet to a vet or shelter with a scanner. The tag gets your pet home fast; the chip is the backup.',
      },
      {
        question: 'How big should a QR code on a pet tag be?',
        answer:
          'At least 2.5 cm across for a large dog\'s tag, and 1.5–2 cm minimum for a cat or small dog — always with a clear blank border (quiet zone) around the code. Use High error correction so the code still scans when scratched or muddy. If the tag is too small for a reliable code, use a larger tag or put the code on one side and the pet\'s name on the other.',
      },
      {
        question: 'Do QR code pet tags work without an app?',
        answer:
          'Yes. Any modern iPhone or Android phone can scan a QR code with its built-in camera — the finder just points the camera at the tag and taps the notification. No app, no account, and no sign-in should be needed. That is why the page the code opens must be a plain web page with your phone number visible immediately.',
      },
      {
        question: 'What happens if I change my phone number?',
        answer:
          'If you used a free static code, the tag points at a fixed page — update the phone number on that page and the same tag keeps working, because the link itself has not changed. If the page itself is gone, you need a new tag. A dynamic code lets you change the destination link behind the same printed tag, which is why it is the better choice for a tag meant to last years.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn your pet\'s lost-and-found page into a clean, scannable QR code in under a minute — free, no sign-up, ready to print or engrave onto your pet\'s tag.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
