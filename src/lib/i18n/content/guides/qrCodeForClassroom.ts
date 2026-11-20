import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForClassroomData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code for Classroom: Free Ideas for Teachers',
    description:
      'Learn how to use a QR code for classroom teaching free — attendance, homework links, worksheets, reading corners and parent updates, no sign-up.',
    badge: 'Guides',
    h1: 'QR Code for Classroom',
    subheadline:
      'A QR code for classroom use is one of the cheapest teaching tools a teacher can own: it costs nothing to make, needs no app, and turns any printed sheet, poster, desk or classroom wall into a link. Students point a phone or tablet camera at the code and land straight on a video, a worksheet, a quiz, a reading passage or a homework submission form — no typing long URLs, no spelling mistakes, no lost links. This guide covers the classroom uses that actually work, how to make the codes free in under a minute, how to print them so they scan in a real classroom, and the privacy rules that matter when the users are children.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'Free and instant',
        text: 'A static QR code costs nothing and needs no account — make one in a minute and print it on any worksheet or poster.',
      },
      {
        label: 'No typed URLs',
        text: 'Students scan instead of typing: one code replaces a long link, so younger students and slow typists are never left behind.',
      },
      {
        label: 'One code, many uses',
        text: 'Attendance, homework, video lessons, reading corners, feedback forms and parent updates can all run through printed codes.',
      },
      {
        label: 'Privacy first',
        text: 'Never put a child\'s name, photo, phone number or personal details behind a classroom code — link to resources, not to children.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-qr-code-for-classroom',
        heading: 'What Is a QR Code for Classroom Teaching?',
        paragraphs: [
          'A QR code for classroom teaching is a printed square barcode that links students to a digital resource when scanned with a phone or tablet camera. The code itself holds a web address, a piece of text, a Wi-Fi password, or a contact card. In a classroom the most common use is a URL code: it opens a video lesson, a Google Form, a PDF worksheet, a quiz, or a class website. The teacher prints the code once — on a worksheet, a poster, a desk sticker, or the whiteboard — and every student reaches the same resource in about three seconds, without typing anything.',
          'The reason it works so well in schools is that it removes the single most boring failure point in classroom technology: the URL. A teacher who writes "bit.ly/xyz123" on the board loses five minutes while twenty students mistype it, and a teacher who emails a link loses the students whose inbox is full or whose device cannot open email. A printed code skips all of that. It also works for students who cannot type well yet — younger children, students with dyslexia, and students learning in a second language can scan a code long before they can reliably type a 40-character web address.',
          'Classroom QR codes are not new technology, but they became practical for every teacher only when phone cameras started scanning codes natively, without a separate app. On modern Android phones and iPhones, opening the camera and pointing it at a code is enough. That matters in a classroom because it means no IT support, no app installation on school devices, and no training session for students. If a school bans phones, the same codes still work on the classroom tablet, the library computer with a webcam, or the teacher\'s own device projected on the board.',
          'The other reason teachers keep using them is cost. A static QR code is free forever, and printing is the only expense — a black-and-white printout on ordinary paper. There is no subscription, no per-student licence, and no account to manage. A teacher can make ten codes on a Sunday evening for the whole week\'s lessons and reuse them for years, because a static code never expires and the link it holds stays the same as long as the destination page stays online.',
        ],
        callout: {
          title: 'The test is simple: can the slowest student in the room reach the resource?',
          text: 'A classroom tool is only good if it works for the student who types slowly, the student with the oldest phone, and the student who missed the instructions. If a QR code gets every one of them to the worksheet in seconds, it has earned its place on the wall. If it needs an app, an account, or a typed password, it has not.',
          type: 'info',
        },
      },
      {
        id: 'qr-code-classroom-ideas',
        heading: '10 QR Code Ideas for the Classroom That Actually Work',
        paragraphs: [
          'The best classroom QR code ideas share one trait: they replace a repetitive, low-value task the teacher already does by hand. Attendance is the classic example. A code on the classroom door that opens a Google Form with a name field takes attendance in under a minute and gives the teacher a timestamped sheet, instead of five minutes of calling names. Homework submission works the same way: a code on the homework sheet opens the submission form, so the link is never lost in a chat group.',
          'Worksheets and textbooks gain a second layer with codes. A code in the margin of a worksheet can open a three-minute explainer video, the answer key for self-checking after the work is done, or an extension task for fast finishers. A code on a library book opens a read-aloud recording or a book review. A code in the reading corner opens the audiobook version of the same story, so a struggling reader can listen and follow along. None of these need new content — the teacher links to videos and pages that already exist.',
          'Classroom walls become teaching surfaces too. A "word of the day" poster with a code that opens the pronunciation and example sentences, a science poster with a code that opens a simulation, a history timeline with a code per event that opens a short documentary clip — each one turns dead wall space into a resource students can use without the teacher. A scavenger hunt is the most engaging version of the same idea: codes hidden around the classroom or school grounds, each one opening the next clue, turn a revision lesson into a game.',
          'Codes also fix the teacher-parent communication gap. A code on the notice board or the school diary opens the class timetable, the holiday list, the parent-teacher meeting booking form, or the fee payment page. Parents scan it with the same phone they already carry, and the teacher stops answering the same five questions in the parent group chat every week. A code on the school gate that opens the school\'s official notice page works the same way for visitors.',
        ],
        subsections: [
          {
            subheading: 'Attendance and homework',
            text: 'A code on the door opens the attendance form; a code on the homework sheet opens the submission form. Both save minutes every single day.',
          },
          {
            subheading: 'Worksheets and books',
            text: 'Codes in worksheet margins open explainer videos, answer keys and extension tasks; codes on library books open read-alouds and reviews.',
          },
          {
            subheading: 'Walls and displays',
            text: 'Posters with codes open pronunciations, simulations and documentary clips — the classroom wall becomes a resource, not decoration.',
          },
          {
            subheading: 'Parents and visitors',
            text: 'A code on the notice board or school diary opens the timetable, meeting bookings and fee pages parents actually ask about.',
          },
        ],
        callout: {
          title: 'Start with one code, not ten',
          text: 'Teachers who put codes everywhere on day one usually abandon them by week two. Pick the single most repetitive task — attendance, or one homework link — and run it for two weeks. When students scan it without being told, add the next one.',
          type: 'tip',
        },
      },
      {
        id: 'how-to-make-qr-code-for-classroom',
        heading: 'How to Make a QR Code for Classroom (Step by Step)',
        paragraphs: [
          'Making a classroom QR code takes about a minute, and the only decision that matters is what the code opens. For most classroom uses the answer is a web link: a video, a Google Form, a PDF on Google Drive, or a class page. Open a free QR code generator, choose the URL type, and paste the link. Check that the link is short and public — a link that needs a school login will fail for students who are not signed in, and a very long link makes a dense code that is harder to scan from the back of the room.',
          'Before you generate, shorten the link if you can. A short link produces a code with fewer, larger squares, which scans faster and from further away — exactly what you want when thirty students are scanning the same poster. A free URL shortener works, but keep the short link somewhere safe, because if the shortener ever deletes it, every printed code stops working. For links that must last all year, such as the class timetable or the homework form, use the original link or a short link from a service you control.',
          'Set the error correction level to High before downloading. Classroom codes live hard lives: they get pinned, folded, rained on, scribbled over, and stuck to desks with tape. High error correction lets a code still scan when up to 30% of it is damaged, which is the difference between a code that survives a term and one that stops working in week two. Skip the logo in the middle for codes students scan from a distance — on a small printed code, every millimetre of pattern counts.',
          'Download the code as a PNG for printing on a home or school printer, or as an SVG or PDF if you are sending it to a print shop for posters. Print at least 3 cm across for a worksheet code students scan up close, and at least 5 cm across for a wall poster scanned from their desks. Always print in dark ink on a white background with a clear blank border — the quiet zone — around the code, and test it the way students will use it: print one copy, stick it where it will live, and scan it from the back row with the oldest phone in the room.',
        ],
        subsections: [
          {
            subheading: '1. Choose the link',
            text: 'Pick the video, form, PDF or class page the code will open. Make sure the link is public and does not need a school login.',
          },
          {
            subheading: '2. Generate the code',
            text: 'Paste the link into a free generator as a URL code. Shorten long links first so the code has larger, easier-to-scan squares.',
          },
          {
            subheading: '3. Set High error correction',
            text: 'Classroom codes get folded, taped and scribbled on. High error correction keeps them scannable when up to 30% is damaged.',
          },
          {
            subheading: '4. Print and test from the back row',
            text: 'Print at least 3 cm for worksheets and 5 cm for posters, then scan the real printout from the furthest desk with an old phone.',
          },
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator for creating a QR code for classroom worksheets and posters',
            caption: 'Paste your lesson link into a free generator — a static classroom code costs nothing and needs no account.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for URL, Wi-Fi and other classroom QR code types',
            caption: 'URL is the right type for most classroom codes; Wi-Fi is the right type for the guest network password on the classroom wall.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving a classroom QR code as PNG or SVG for printing',
            caption: 'Download PNG for the school printer, or SVG and PDF for posters — vector files stay sharp at any size.',
          },
        ],
        callout: {
          title: 'Static or dynamic? For a classroom, start static',
          text: 'A free static code bakes the link into the pattern and works forever, which is right for a worksheet or a poster that will be reused for years. A dynamic code lets you change the link behind the same printed code and count scans, which is useful if the link changes every term — but it usually needs a paid plan, so try static first and upgrade only when a link actually changes.',
          type: 'tip',
        },
      },
      {
        id: 'qr-code-classroom-attendance',
        heading: 'QR Codes for Attendance, Homework and Feedback',
        paragraphs: [
          'Attendance is the highest-return classroom QR code because it runs every day. The setup is a Google Form with two fields — name and class — and a code printed on the door or the first desk. Students scan as they walk in, and the teacher gets a timestamped spreadsheet instead of a paper register. It works best when the rule is simple: scan within the first five minutes, or you are marked late. Teachers who use it report saving three to five minutes per lesson, which is roughly an hour a week across a full timetable.',
          'The same pattern handles homework. A code on the homework sheet opens the submission form or the assignment page, so students never lose the link and the teacher never re-sends it in the chat group. For younger students, a code on the worksheet opens the instructions as a short video, so parents can help at home without guessing what the teacher meant. For older students, a code on the revision sheet opens the quiz or the past paper, and the teacher can change the destination each term without reprinting if the code is dynamic.',
          'Feedback is the use teachers underestimate. A code on the exit slip — a small card students fill in during the last two minutes — opens a two-question form: "What did you understand today?" and "What confused you?" The teacher reads the answers in a minute and plans tomorrow\'s lesson around the actual confusion, not a guess. Because the form is anonymous, students answer honestly in a way they never would with a raised hand. The same code can sit on the classroom door for the whole term, collecting a running picture of what is working.',
          'There are limits worth knowing. Attendance by QR code trusts students to scan only their own code — a student can scan for an absent friend, so it suits older students better than younger ones, and it should never be the only attendance record for exams or official registers. And a homework code only helps if students have a device at home; for classes where some students do not, the printed worksheet must still work on its own, with the code as a bonus, not a requirement.',
        ],
        bullets: [
          'Attendance: a code on the door opens a two-field form and saves three to five minutes per lesson.',
          'Homework: a code on the sheet opens the submission form or assignment page, so the link is never lost.',
          'Exit slips: a code opens a two-question feedback form that shows the teacher what confused students today.',
          'Keep it honest: QR attendance trusts students, so use it for daily classes, not for official exam registers.',
          'Always provide the offline fallback: the worksheet must work without a device, with the code as a bonus.',
        ],
      },
      {
        id: 'qr-code-classroom-printing',
        heading: 'Printing Classroom QR Codes That Actually Scan',
        paragraphs: [
          'A classroom QR code fails for boring, physical reasons, and every one of them is preventable. The most common is size: a 1.5 cm code on a worksheet scans fine held in the hand, but the same code on a wall poster is unreadable from the desks. The rule is simple — the further away the scanner stands, the bigger the code. A good working rule is a 10:1 ratio: a code scanned from 1 metre away should be at least 10 cm across, and a code on a desk scanned from 30 cm can be 3 cm. When in doubt, print it bigger; a code that is too large is a minor eyesore, a code that is too small is useless.',
          'Contrast is the second failure point. Dark modules on a white background scan best, and that is not a suggestion — it is how the scanners work. A code printed in light grey, in the school colours, or on a coloured background will fail in dim light or on an older phone. If the poster design needs colour, keep the code itself black on white and put the colour around it. The quiet zone matters just as much: leave a blank border at least four modules wide around the code, with no text, no border line, and no picture touching it. A code that touches another graphic is a code that confuses the scanner.',
          'Placement is the third decision. Put the code where students naturally look and can reach it with their device: the top corner of a worksheet, the bottom of the whiteboard, the classroom door at eye level, or the reading corner shelf. Avoid glossy lamination that reflects the ceiling lights, avoid sticking codes on curved surfaces like water bottles, and avoid placing them where sunlight falls directly on the paper at midday — glare is the most common reason a code that scanned in the morning fails in the afternoon.',
          'Finally, test every code in the real room before the lesson. Print one copy, put it exactly where it will live, and scan it from the furthest desk, in the room\'s normal light, with the oldest device a student might use. Then ask a student to scan it — teachers scan from the front of the room, students scan from everywhere else. If the scan takes more than two seconds, enlarge the code, improve the contrast, or shorten the link. A code that takes five seconds to scan will lose a class of thirty students to impatience before the lesson starts.',
        ],
        callout: {
          title: 'The 10:1 size rule saves every poster',
          text: 'A code scanned from 1 metre away should be at least 10 cm across. Measure the distance from the furthest desk to the poster, divide by ten, and that is your minimum print size. It takes ten seconds and prevents the most common classroom QR failure.',
          type: 'warning',
        },
      },
      {
        id: 'qr-code-classroom-safety',
        heading: 'QR Code Safety and Privacy in the Classroom',
        paragraphs: [
          'Children\'s privacy is the one rule that overrides everything else in this guide. A classroom QR code must never link to a page that shows a child\'s full name, photo, phone number, address, or school ID. That means no code that opens a class photo album with names, no code that opens a form pre-filled with student details, and no code on a public poster that opens a page only meant for one child. Link to resources — videos, worksheets, forms, timetables — not to children. If a resource genuinely needs student names, such as a results page, it must sit behind the school\'s login, and the code should open the login page, not the data itself.',
          'Teachers should also check every link before it goes on a printed sheet, because a QR code hides its destination. A student who scans a code cannot see where it leads until the page opens, so a mistyped link, a video that has been taken down, or a page that now shows ads is a real risk in a classroom. Scan the printed code yourself, on a device that is not signed into your accounts, and confirm that the page is exactly what you expect — no login wall, no age-inappropriate ads, and no surprise download. Do this every term, because links rot: a video that worked in September can be deleted by December.',
          'The classroom Wi-Fi code deserves its own caution. A code that shares the school Wi-Fi password is convenient, but it gives the password to anyone who photographs the poster — including visitors and students who were never meant to have it. Use the guest network for a wall code, never the staff network, and ask the school\'s IT person to rotate the guest password each term. The same logic applies to codes on homework sheets that go home: anything printed on a sheet a student carries can be photographed by anyone, so treat every classroom code as public.',
          'Finally, teach students to scan safely. A short lesson at the start of the year — scan only codes your teacher printed, check the web address before tapping "open", and tell the teacher if a code opens something strange — protects them far beyond school, because the same fake-code scams target adults in car parks and restaurants. Classroom QR codes are a good place to build that habit, because the teacher is right there when the first strange link appears.',
        ],
        callout: {
          title: 'Treat every classroom code as public',
          text: 'Anything printed on a worksheet, a poster, or a door can be photographed by anyone. Never put a child\'s personal details, a staff password, or a private link behind a printed classroom code — if it should not be public, it should not be a QR code.',
          type: 'warning',
        },
      },
      {
        id: 'qr-code-classroom-mistakes',
        heading: 'Classroom QR Code Mistakes to Avoid',
        paragraphs: [
          'The most common mistake is linking to a page that needs a login. A code that opens a Google Classroom assignment works for the teacher who is signed in, and fails for the student who is not — and the failure looks like a broken code, so the teacher reprints it, and it still fails. Before printing, open the link in a private browser window while signed out, and confirm that a stranger can see the page. If the page needs a login, either make it public or link to the login page and tell students to sign in first.',
          'The second mistake is printing codes that are too small or too faint, covered above but worth repeating because it is the reason most teachers give up on QR codes. A code that worked on the teacher\'s new phone fails on a student\'s five-year-old phone in a dim corner of the room. Print bigger, print darker, and test with the worst device in the room, not the best.',
          'The third mistake is a dead link mid-term. A teacher links to a video in September, the video is deleted in November, and the worksheet code silently stops working — and nobody notices until a student raises a hand. The fix is a five-minute check at the start of each term: scan every code on the wall and on the current worksheets, and replace any that fail. If the link changes often, use a dynamic code so the printed code never needs reprinting.',
          'The fourth mistake is making the code the only way to do the work. A worksheet that only works with a scanned video excludes the student with no device, the student whose phone is dead, and the student in a school that bans phones. The code should always be an enhancement — a faster way to reach a video, a form, or an answer key — while the printed sheet still works on its own. A classroom tool that creates a new gap between students with devices and students without them has failed, however clever it looks.',
        ],
        callout: {
          title: 'Scan every code at the start of each term',
          text: 'Links rot and videos get deleted. A five-minute check — scan every code on the wall and on the current worksheets — catches dead links before a student does. Put it on the same checklist as sharpening pencils and updating the timetable.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I make a QR code for my classroom for free?',
        answer:
          'Open a free QR code generator, choose the URL type, and paste the link to your video, form, PDF or class page. Set error correction to High, download the PNG, and print it at least 3 cm across for worksheets or 5 cm for posters. A static code costs nothing, needs no sign-up, and never expires as long as the destination page stays online.',
      },
      {
        question: 'What can I use QR codes for in the classroom?',
        answer:
          'Attendance forms, homework submission links, video lessons linked from worksheets, answer keys for self-checking, reading corner audiobooks, scavenger hunts, exit-slip feedback forms, and parent communication such as timetables and meeting bookings. Start with one repetitive task, such as attendance, and add more once students scan it without being told.',
      },
      {
        question: 'How big should a classroom QR code be when printed?',
        answer:
          'Use the 10:1 rule: a code scanned from 1 metre away should be at least 10 cm across. In practice, print at least 3 cm for a worksheet code scanned up close, and at least 5 cm for a wall poster scanned from the desks. Always print dark ink on a white background with a clear blank border, and test it from the furthest desk before the lesson.',
      },
      {
        question: 'Can students scan a QR code without an app?',
        answer:
          'Yes. Modern Android phones and iPhones scan QR codes with the built-in camera — open the camera, point it at the code, and tap the link that appears. No separate app is needed. If a school bans phones, the same codes work on a classroom tablet, a library computer with a webcam, or the teacher\'s device projected on the board.',
      },
      {
        question: 'Are QR codes safe to use with children in school?',
        answer:
          'Yes, if you follow one rule: never put a child\'s name, photo, phone number or personal details behind a printed code. Link only to resources such as videos, worksheets, forms and timetables, check every link in a signed-out browser before printing, and teach students to scan only codes their teacher printed and to check the web address before tapping open.',
      },
      {
        question: 'Do classroom QR codes expire?',
        answer:
          'A static QR code never expires — the pattern holds the link forever, and it keeps working as long as the destination page stays online. What can break is the link itself: a deleted video, a moved page, or a short link that is removed. Scan your classroom codes at the start of each term and replace any dead links; a dynamic code lets you change the link without reprinting.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Turn any lesson link, form or video into a clean, scannable QR code in under a minute — free, no sign-up, ready to print on worksheets, posters and classroom walls.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
