import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeScavengerHuntData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code Scavenger Hunt Ideas (Free, Fun & Easy)',
    description:
      'Fun QR code scavenger hunt ideas for kids, classrooms, parties and team building — make free codes, hide clues and run a hunt in under an hour.',
    badge: 'Guides',
    h1: 'QR Code Scavenger Hunt Ideas',
    subheadline:
      'A QR code scavenger hunt turns a walk around a house, a classroom, a park or an office into a game: players scan a printed code, read a clue, and race to the next hiding spot. It costs nothing to set up, needs no app and no account, and works for a seven-year-old\'s birthday party just as well as for a corporate team-building afternoon. This guide covers the hunt formats that actually work, 20+ clue ideas for kids, classrooms and adults, how to make and print the codes free in minutes, and the practical mistakes that turn a fun hunt into a frustrating one.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Free and fast to set up',
        text: 'Static QR codes cost nothing and need no account — a full hunt of 8 to 10 clues can be made and printed in under an hour.',
      },
      {
        label: 'No app needed',
        text: 'Players scan with the built-in phone camera, so there is nothing to install, no login, and no training before the game starts.',
      },
      {
        label: 'One mechanic, many hunts',
        text: 'The same code-and-clue loop works for birthday parties, classroom revision, team building, weddings and holiday events.',
      },
      {
        label: 'Test every code first',
        text: 'Scan each printed code from the exact spot players will stand — bad light, glare or a tiny printout is the number one hunt killer.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-qr-code-scavenger-hunt',
        heading: 'What Is a QR Code Scavenger Hunt?',
        paragraphs: [
          'A QR code scavenger hunt is a treasure hunt where the clues are hidden behind QR codes instead of written on paper. The organiser prints a set of codes and hides them around a house, a garden, a classroom, a park, a mall or an office. Each code, when scanned with a phone camera, reveals the next clue — a riddle, a photo, a video, a question, or the location of the next code. Players follow the chain from the first code to the last, where a prize, a message or a final challenge waits.',
          'The format works because it removes the two boring parts of a traditional scavenger hunt: handing out paper clue sheets that get lost or rained on, and the organiser having to stand at every station. The codes do the work. A printed code on a tree, a door, a bookshelf or a notice board is a clue station that runs itself, and the organiser is free to watch the game, give hints, or run the timer. It also adds a small moment of delight that paper cannot match — a code that opens a short video clue, a voice message from the birthday child, or a photo of the next hiding spot is far more exciting than a folded note.',
          'A hunt needs surprisingly little equipment. The organiser needs a free QR code generator, a printer, and something to stick the codes to — tape, Blu-Tack, or a clipboard at each station. Players need a phone with a camera, which in practice means one phone per team rather than one per person. That is an important design decision: teams of two to four players sharing one phone play better than twenty players each staring at their own screen, because the game becomes a conversation — one person scans, another reads the riddle out loud, and the team argues about where to go next.',
          'Hunts scale from tiny to huge without changing the mechanic. A five-code hunt around a living room takes fifteen minutes and suits a six-year-old\'s birthday. A twelve-code hunt around a school campus takes an hour and can carry a full revision lesson. A twenty-code hunt across a city park or a company office works for a team-building afternoon with a hundred people split into teams. The only things that change are the number of codes, the difficulty of the clues, and how far apart the stations are.',
        ],
        callout: {
          title: 'The golden rule: one phone per team, not one per player',
          text: 'A team sharing a single phone talks, argues and solves together. A player with their own phone walks alone and stares at a screen. If you only remember one thing from this guide, make it this: teams of two to four, one phone each, and the hunt becomes a social game instead of a silent walk.',
          type: 'info',
        },
      },
      {
        id: 'qr-code-scavenger-hunt-ideas',
        heading: '20+ QR Code Scavenger Hunt Ideas for Every Occasion',
        paragraphs: [
          'The best hunts start from the occasion, not from the codes. A birthday hunt for eight-year-olds needs short riddles, silly tasks and a prize at the end; a classroom hunt needs questions that revise the week\'s lesson; a team-building hunt needs tasks that force strangers to cooperate; a wedding hunt needs clues about the couple. Pick the occasion first, then write clues that fit the players, then make the codes. The ideas below are starting points — take any three or four, adapt them to your place and your players, and you have a hunt.',
          'For kids\' birthday parties, keep the clues physical and funny. A code on the fridge that opens a photo of the next hiding spot. A code under the sofa that plays a 10-second voice note: "I am cold and dark and I keep the ice cream — where am I?" A code on the garden gate that asks the team to do ten jumping jacks before the next clue appears. A code taped to the dog\'s bed that opens a video of the birthday child giving the next hint. The pattern is simple: scan, laugh, move. Keep each clue solvable in under a minute, because children lose interest fast if a riddle takes five minutes and a dictionary.',
          'For classrooms, the hunt becomes a revision lesson that students actually enjoy. Hide codes around the room and the corridor, each one opening a question from the week\'s topic — a maths problem, a science fact, a history date, a vocabulary word. Teams answer on a sheet or a form, and the next clue unlocks when they get it right. A history teacher can run a hunt where each code opens a photo of an artefact and the team has to name the century. A language teacher can hide codes that open audio clips, and teams must write down the word they hear. The trick is to make the questions quick — one fact, one answer — so the game keeps moving and the revision happens almost by accident.',
          'For adults and team building, raise the difficulty and add tasks that need cooperation. A code that opens a photo taken from an unusual angle, and the team must find the exact spot it was taken from. A code that gives half a riddle, while another team holds the other half, so teams must trade information. A code that asks the team to take a photo recreating a famous painting, or to record a 15-second advert for an imaginary product. A code at the final station that opens a timed quiz the whole team must finish together. The competitive edge matters here: a visible leaderboard, a strict time limit, and a small prize for the winners turn a pleasant walk into a race.',
          'Seasonal and special-occasion hunts are the easiest to theme. A Halloween hunt can use spooky riddles and codes hidden in fake spider webs. A Christmas hunt can send players to the tree, the stockings, the kitchen and the front door, ending at the presents. A wedding hunt can send guests around the venue collecting photos of the couple\'s story — first date, first holiday, the proposal — with the final code revealing a video message from the bride and groom. An Easter hunt replaces chocolate eggs with codes that reveal where the eggs are hidden, which works even in the rain because the clues are printed and the eggs stay dry indoors.',
        ],
        subsections: [
          {
            subheading: 'Kids\' birthday parties',
            text: 'Short riddles, silly physical tasks and a prize at the end. Keep every clue solvable in under a minute and the stations close together.',
          },
          {
            subheading: 'Classroom revision hunts',
            text: 'Each code opens one quick question from the week\'s lesson. Teams answer on a sheet and move on — revision that feels like a game.',
          },
          {
            subheading: 'Team building for adults',
            text: 'Photo challenges, half-riddles that force teams to trade information, and a timed final quiz. Add a leaderboard and a small prize.',
          },
          {
            subheading: 'Seasonal and wedding hunts',
            text: 'Halloween, Christmas, Easter and weddings all theme easily — codes at the tree, the stockings, the venue bar, ending in a video message.',
          },
        ],
        callout: {
          title: 'Write clues for your players, not for yourself',
          text: 'A riddle that makes you smile can still be impossible for a seven-year-old or a guest who has never been to your house. Read every clue out loud and ask: could a stranger solve this in sixty seconds? If not, make it easier. A hunt that flows beats a hunt that is clever.',
          type: 'tip',
        },
      },
      {
        id: 'how-to-make-qr-code-scavenger-hunt',
        heading: 'How to Make a QR Code Scavenger Hunt (Step by Step)',
        paragraphs: [
          'Start by planning the route, not the codes. Walk the space — house, garden, classroom, park or office — and pick 8 to 10 hiding spots that are spread out, safe, and easy to describe in a clue. Number them in the order players will visit them, and write the route on a single sheet: spot 1 is the fridge, spot 2 is the garden gate, spot 3 is the bookshelf, and so on. This sheet is your master map. If two teams take the same route at the same time they will bunch up at the same stations, so for more than three teams, create two or three different routes that visit the same spots in a different order.',
          'Next, write the clues. Each clue has two jobs: it tells the player where the next code is hidden, and it is fun to solve. A good clue is one or two sentences, or a short riddle of four lines. You can also use photos and videos as clues: a close-up photo of the next hiding spot, a 10-second video of you pointing at it, or a voice note. Write all the clues in a document first, and number them to match the route. Decide now what each code will open — text, a web link, or a video — because that decides what type of code you generate.',
          'Now make the codes. For text clues, use a plain text QR code: the clue is baked into the code itself, so it works even with no internet — a real advantage in a park or a basement. For photo and video clues, use a URL code that opens the image or video link, and check that the link is public and opens without a login. Open a free QR code generator, choose the type, paste the text or link, and download the code. Name each file clearly — clue-01-fridge.png, clue-02-gate.png — so you do not mix them up while hiding them. A free static code is the right choice here: it costs nothing, never expires, and needs no account.',
          'Print the codes big enough to scan from a normal standing distance — at least 5 cm across, and 8 to 10 cm if players will scan from a metre away or in dim light. Print in dark ink on white paper, and leave a clear blank border around each code. If the hunt is outdoors, slip each printout into a clear plastic sleeve or a zip-lock bag, or laminate it: rain and dew are the most common reason an outdoor hunt fails. Tape or pin each code at its spot, at roughly chest height, facing the direction players will approach from. Avoid glossy surfaces that reflect sunlight, and avoid sticking a code flat on the ground, where it fills with dirt and shadows.',
          'Finally, run a full test hunt yourself before the players arrive. Walk the route with your phone, scan every code exactly as a player would, and time yourself. Check that each clue opens correctly, that the clue actually leads to the next spot, and that the whole route takes the time you planned — a hunt that takes twice as long as expected will run into lunch, daylight or patience. Fix any code that is slow to scan, any clue that points to the wrong spot, and any station that is too easy to find by accident. Then hide a small prize or a final message at the last station, set a start time, and hand the first code to the teams.',
        ],
        subsections: [
          {
            subheading: '1. Plan the route first',
            text: 'Walk the space and pick 8 to 10 safe, spread-out hiding spots. Number them in visit order on a master map — the codes come later.',
          },
          {
            subheading: '2. Write the clues',
            text: 'One or two sentences, a short riddle, a photo or a voice note. Each clue must point clearly at the next hiding spot.',
          },
          {
            subheading: '3. Generate the codes',
            text: 'Text codes for riddles work offline; URL codes open photos and videos. Use a free static code — no account, no expiry.',
          },
          {
            subheading: '4. Print and protect them',
            text: 'At least 5 cm across, dark on white, clear border. Outdoors, use a plastic sleeve or laminate — rain kills paper codes.',
          },
          {
            subheading: '5. Test the whole hunt',
            text: 'Walk the route and scan every code yourself. Fix slow scans, wrong clues and bad timings before the players arrive.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator for creating QR code scavenger hunt clues',
            caption: 'Paste your clue text or link into a free generator — a static hunt code costs nothing and needs no account.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing text and URL types for scavenger hunt clues',
            caption: 'Text codes hold the riddle inside the code and work offline; URL codes open photos and videos as clues.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving scavenger hunt QR codes as PNG for printing',
            caption: 'Download PNG for the home printer, or SVG and PDF for larger posters — print each code at least 5 cm across.',
          },
        ],
        callout: {
          title: 'Text codes work offline — use them outdoors',
          text: 'A text QR code holds the clue inside the pattern itself, so it scans and shows the riddle even with no mobile signal. In a park, a basement or a village with weak signal, text codes are the only safe choice. URL codes that open videos need a connection — save those for indoor hunts with good Wi-Fi.',
          type: 'tip',
        },
      },
      {
        id: 'qr-code-scavenger-hunt-formats',
        heading: 'Scavenger Hunt Formats: Timed Race, Points, and Photo Challenges',
        paragraphs: [
          'The simplest format is the linear race: every team follows the same chain of codes in the same order, and the first team to reach the final station wins. It is easy to run and easy to understand, which makes it the right choice for children\'s parties and first-time organisers. Its weakness is bunching — teams arrive at the same station at the same time, queue to scan, and the fastest team wins by luck of the starting order. Fix this by staggering the starts by two minutes, or by giving each team a different starting code so the routes cross but never collide.',
          'The points format is better for larger groups and for hunts where teams should explore freely. Hide 12 to 15 codes around the area, each one worth points, and give teams 45 minutes to find as many as they can. Some codes open a question worth points only if answered correctly; others open a photo challenge worth bonus points. Teams choose their own route, so there is no queueing, and the winner is the team with the most points when the timer ends, not the team that happened to start first. This format needs a score sheet — a paper sheet per team, or a simple form — and a clear rule for what happens when a team is late back: five points deducted per minute is enough to make the deadline real.',
          'The photo challenge format is the most social and the best for adults. Codes open tasks instead of locations: take a team photo recreating a famous album cover, film a 15-second advert for a product that does not exist, find a stranger willing to join a group photo, or collect a photo of something blue, something old, something borrowed. Teams submit their photos to a shared album or a group chat, and the organiser judges them at the end. It works brilliantly at weddings, office parties and hen dos, because the photos become the souvenir of the event. The only rule is consent: never ask a team to photograph a stranger without asking first.',
          'A hybrid format combines all three and suits a full afternoon: a linear chain of six codes that teaches the route, then a free-roam points phase with eight more codes, then a final photo challenge at the last station. It sounds complicated, but players experience it as one game with three acts, and the organiser only needs one master sheet and one timer. Whatever format you choose, write the rules on a single card and hand it to every team at the start. Rules that live only in the organiser\'s head are rules that get argued about at the finish line.',
        ],
        bullets: [
          'Linear race: same chain, same order, first to finish wins — stagger starts by two minutes to stop teams bunching up.',
          'Points hunt: 12 to 15 codes, 45 minutes, teams choose their own route — best for large groups and no queues.',
          'Photo challenges: codes open creative tasks instead of locations — best for weddings, offices and adult parties.',
          'Hybrid: a short linear chain, then a free-roam points phase, then a final photo challenge — one game, three acts.',
          'Always hand every team a written rules card: time limit, points, late penalty and what counts as a finished hunt.',
        ],
      },
      {
        id: 'qr-code-scavenger-hunt-printing',
        heading: 'Printing and Hiding QR Codes That Players Can Actually Scan',
        paragraphs: [
          'A hunt code fails for the same physical reasons any printed code fails, and in a hunt the cost is higher: a player who cannot scan a clue is stuck, not just inconvenienced. Size is the first rule. Print each code at least 5 cm across for indoor hunts where players stand close, and 8 to 10 cm for outdoor hunts where players scan from a step back or in bright light. If the clue is a long piece of text, the code becomes dense with tiny squares — shorten the text or split it across two codes, because a dense code printed small is the hardest kind to scan.',
          'Contrast and the quiet zone are the second rule. Print dark ink on white paper, never a coloured background, never a code printed over a photo or a patterned poster. Leave a blank border at least four modules wide around the code, with nothing touching it — no border line, no text, no decoration. A code that touches another graphic confuses the scanner and slows every team down by seconds that feel like minutes when they are racing. If the code must sit on a coloured sign, print the code on a white sticker and put the sticker on the sign.',
          'Placement is a design decision, not an afterthought. Put the code where a player naturally looks when they arrive at the spot: chest height on a wall, the front of a shelf, the back of a chair, the trunk of a tree at eye level. Never hide a code so well that players cannot find it — the challenge should be solving the clue, not finding the code. And never put a code somewhere a player has to climb, reach over a fence, or step into traffic to scan it. Walk the route as a player would and check every station for safety, especially with children: no codes near roads, water, steep drops, or anywhere a child would have to leave the group to reach.',
          'Outdoor hunts need weather protection. A printed code in a clear plastic sleeve taped shut at the top survives rain; a laminated code survives rain and mud; a code in a zip-lock bag survives both and costs almost nothing. Avoid direct sunlight on the code at midday — glare off a glossy sleeve is the most common reason a code that scanned in the morning fails at noon. If a station is in full sun, tape the code in the shade of the same tree or wall, or use a matt sleeve instead of a glossy one. And always carry two spare printed copies of every code in your pocket: when a code gets torn, wet or stolen by an enthusiastic player, you can replace it in thirty seconds instead of ending the hunt.',
        ],
        callout: {
          title: 'Hide the clue, not the code',
          text: 'Players should work to solve the riddle that leads them to a spot — but once they arrive, the code should be obvious. A code hidden inside a drawer or under a rock turns a fun hunt into a frustrating search, and a code that cannot be found is a hunt that stops.',
          type: 'warning',
        },
      },
      {
        id: 'qr-code-scavenger-hunt-mistakes',
        heading: 'Scavenger Hunt Mistakes to Avoid',
        paragraphs: [
          'The most common mistake is a code that opens the wrong thing. It happens when the organiser generates ten codes in a hurry, names the files badly, and tapes clue 4 where clue 7 should be. The hunt then sends players to the wrong spot, and the whole game unravels. The fix is boring but essential: after hiding every code, walk the route and scan each one in order, checking that the clue it opens really points to the next station. Do this after hiding, not before, because the scan checks the physical placement, not just the file.',
          'The second mistake is clues that are too hard — or too vague. A riddle that says "where the water sleeps" could mean the fridge, the bathroom, the garden tap, or the water tank, and a team that guesses wrong wastes ten minutes and loses the will to continue. Test every clue on one person who does not know the route. If they cannot name the spot in sixty seconds, rewrite the clue to be more specific. A hunt should feel challenging, not unfair, and the difference is usually one extra word in the clue.',
          'The third mistake is forgetting the phones. A hunt assumes every team has a charged phone with a working camera, and at a children\'s party that assumption fails: parents forget, batteries die, and one team\'s phone has a cracked camera that cannot focus. Bring two spare charged phones, a portable charger, and a paper backup of every clue in a sealed envelope. If a team\'s phone dies, hand them the envelope and the hunt continues. If the venue has no signal, use text codes only, so the game never depends on the network at all.',
          'The fourth mistake is no finish line. A hunt that ends with the last code opening a message that says "Well done!" feels flat, however good the route was. Plan the ending as carefully as the start: a small prize box, a cake, a certificate, a group photo, or a final code that opens a video message from the birthday person. Announce the winner, show the best photos, and give every team something to take home — even a printed "hunt completed" card. The ending is what players remember, and it costs almost nothing to get right.',
        ],
        callout: {
          title: 'Scan the route after hiding, not before',
          text: 'Generating codes and testing them on your desk proves the files work. It does not prove the right code is at the right spot. The only test that matters is walking the finished route, scanning each hidden code in order, exactly as a player will.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make a QR code scavenger hunt for free?',
        answer:
          'Plan a route of 8 to 10 hiding spots, write one clue per spot, then make a free static QR code for each clue with a text or URL code — no account needed. Print each code at least 5 cm across in dark ink on white paper, hide them in order, and test the whole route by scanning every code yourself before the players arrive. The only costs are paper and printing.',
      },
      {
        question: 'Do players need an app to play a QR code scavenger hunt?',
        answer:
          'No. Modern Android phones and iPhones scan QR codes with the built-in camera — open the camera, point it at the code, and tap the link or text that appears. Give each team of two to four players one phone, so the game stays social instead of everyone staring at their own screen.',
      },
      {
        question: 'How many QR codes do I need for a scavenger hunt?',
        answer:
          'Eight to ten codes is the sweet spot for most hunts: enough to feel like a real game, short enough to finish in 30 to 60 minutes. Five codes suit young children and a 15-minute party game. Twelve to fifteen codes work for a free-roam points hunt with adults, where teams choose their own route and collect as many as they can in 45 minutes.',
      },
      {
        question: 'Can a QR code scavenger hunt work without internet?',
        answer:
          'Yes, if you use text QR codes. A text code holds the clue inside the pattern itself, so it shows the riddle even with no mobile signal — ideal for parks, basements and rural venues. URL codes that open photos or videos need a connection, so save those for indoor hunts with good Wi-Fi, or download the media onto the team phones in advance.',
      },
      {
        question: 'How do I make QR code scavenger hunt clues?',
        answer:
          'Write one clue per hiding spot: a riddle, a photo of the spot, a short video, or a voice note. Each clue must point clearly at the next location — test it on someone who does not know the route, and if they cannot name the spot in sixty seconds, make it more specific. Keep clues to one or two sentences for kids, and add tasks or questions for adults.',
      },
      {
        question: 'What should the prize be at the end of a QR code scavenger hunt?',
        answer:
          'Match the prize to the players: a small toy or a treat bag for children, a gift card or a bottle for adults, a certificate or extra credit for a classroom hunt. The ending matters more than the value — a prize box, a cake, a group photo or a video message from the birthday person is what players remember. Give every team a small "hunt completed" card, not just the winners.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn any clue, riddle, photo or video link into a clean, scannable QR code in under a minute — free, no sign-up, ready to print and hide for your scavenger hunt.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
