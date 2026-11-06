import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getQrCodeForAttendanceTrackingData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'QR Code Attendance System: How to Track Attendance Free',
    description:
      'Build a QR code attendance system for free — setup steps, scan workflow, spreadsheet tracking, and mistakes to avoid for classes and workplaces.',
    badge: 'Guides',
    h1: 'QR Code Attendance System: How to Track Attendance for Free',
    subheadline:
      'Taking attendance by calling out names eats the first ten minutes of every class, shift, or training session — and a paper register can be signed by anyone, including someone who never showed up. A QR code attendance system fixes both problems at once: each person scans a code on arrival, the scan lands in a spreadsheet with a timestamp, and you get an accurate, searchable record without buying hardware or software. This guide shows how to set one up for free, which workflow fits a classroom, an office, or an event, and how to stop the common workarounds that make a scan-based register unreliable.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One code per person beats one shared code',
        text: 'A unique QR code per student or employee proves who scanned; a single shared code only proves that someone scanned.',
      },
      {
        label: 'Link the code to a form, not a page',
        text: 'A Google Form (or similar) behind the code captures the name, timestamp, and any extra field automatically — a plain link captures nothing.',
      },
      {
        label: 'It costs nothing to start',
        text: 'A free QR generator plus a free form tool is all you need. No app install, no scanner hardware, no monthly fee.',
      },
      {
        label: 'Rotate the code to stop proxy attendance',
        text: 'A fixed code on a wall gets photographed and shared. Change the code each session, or use per-person codes, to keep the record honest.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'what-is-a-qr-code-attendance-system',
        heading: 'What Is a QR Code Attendance System?',
        paragraphs: [
          'A QR code attendance system is a check-in method where each person scans a QR code with their phone camera to mark themselves present. Behind the code sits a form — usually a Google Form, Microsoft Form, or a simple web form — that records who scanned and when. The scan itself takes about two seconds, the form submission is timestamped automatically, and all responses collect in a spreadsheet you can sort, filter, and turn into a monthly attendance report. There is no app to install on anyone’s phone, no fingerprint scanner to buy, and no register to carry around.',
          'The system has three parts, and each one is free. First, the QR code, which you generate from a link. Second, the form the code points to, which asks for the minimum needed to identify the person — usually just their name, and optionally a roll number, employee ID, or department. Third, the spreadsheet where responses land, which becomes your attendance register. Because the code is static and the form does the recording, the whole setup takes under fifteen minutes once you know the steps.',
          'It works anywhere people gather on a schedule: school and college classrooms, coaching centres, office shifts, factory floors, workshops, training sessions, conferences, and church or community meetings. The scale is flexible too — the same setup serves a class of thirty and a conference of three hundred, because scanning is parallel: everyone scans at once instead of queuing for one register. The only real requirement is that attendees have a phone with a camera, which in practice covers almost everyone today.',
        ],
        callout: {
          title: 'Static codes are the right choice here',
          text: 'A static QR code encodes the form link directly and never expires, so you can print it once and reuse it. Dynamic codes add tracking, but for attendance the form already records everything — paying for dynamic is unnecessary.',
          type: 'info',
        },
      },
      {
        id: 'how-a-qr-code-attendance-system-works',
        heading: 'How a QR Code Attendance System Works',
        paragraphs: [
          'The workflow is simple from the attendee’s side. They arrive, point their phone camera at the QR code — displayed on a screen, printed on a poster, or handed out on a slip — and the phone opens the attendance form. They select or type their name, tap submit, and they are marked present. The form records the exact submission time, so late arrivals are visible as later timestamps rather than as a separate “late” column you have to maintain by hand.',
          'From your side, the workflow is mostly setup and review. You create the form once, generate the QR code from its link, and display or print the code where people check in. After each session, you open the response spreadsheet, which lists every submission in order with its timestamp. A quick duplicate check shows whether anyone submitted twice, and a filter by date gives you that day’s attendance list. At the end of the month, the same sheet gives you per-person attendance counts with a pivot table or a simple COUNTIF formula — no manual tallying.',
          'Two design choices decide how trustworthy the record is. The first is whether everyone scans the same code or each person has their own. A single shared code is easiest — one poster on the wall — but it cannot tell you who actually scanned, only that a submission happened, so it relies on the name field being honest. Per-person codes, where each code links to a pre-filled form with that person’s name already filled in, prove identity much better but take more setup. The second choice is whether the code changes per session. A code that stays the same all term can be photographed and scanned from home; a code that changes each session, displayed only in the room, closes that loophole. Most small setups start with one shared code and add per-session rotation once they need it.',
        ],
        subsections: [
          {
            subheading: 'Shared code',
            text: 'One code for everyone, printed or projected. Fastest to set up; relies on honest name entry, so best for low-stakes settings.',
          },
          {
            subheading: 'Per-person codes',
            text: 'Each person gets their own code linked to a pre-filled form. Proves who scanned, but needs a mail-merge style setup to generate all the codes.',
          },
          {
            subheading: 'Rotating session code',
            text: 'A fresh code each session, shown only in the room. Stops photo-sharing and remote scanning — the strongest option for graded attendance.',
          },
        ],
      },
      {
        id: 'how-to-set-up-qr-code-attendance-free',
        heading: 'How to Set Up a QR Code Attendance System for Free (Step by Step)',
        paragraphs: [
          'Start with the form, because the QR code is only a shortcut to it. Open Google Forms and create a form titled with the session name, for example “Class 10-A Attendance — November”. Add a short-answer or dropdown question for the name — a dropdown of all names is better than free text, because it prevents spelling variants like “Rahul” and “rahul kumar” from splitting one person’s record into two. Add a second field only if you need it, such as roll number, employee ID, or department. Turn on “Collect email addresses” only if you actually need it; for most attendance use, the name field plus the automatic timestamp is enough.',
          'Next, get the form’s link. In Google Forms, click Send, choose the link icon, and copy the short link. Test it yourself first: open the link in a private browser window, submit a test entry with your own name, and check that it appears in the Responses tab with the correct timestamp. Delete that test response before the first real session, so your register starts clean. If you want per-person codes, use the form’s “Get pre-filled link” option to create a link with each person’s name already filled in, then generate one QR code per link — a spreadsheet mail merge can automate the code generation if the list is long.',
          'Now generate the QR code. Open the free QR code generator, choose the URL type, and paste the form link. Before downloading, set the error-correction level to high if the code will be printed small or displayed on a projector screen from a distance — high error correction keeps the code scannable even if part of it is obscured or slightly blurry. Download the code as a high-resolution PNG for printing, or as SVG if you are placing it in a poster design. Print it at least 4 × 4 cm for a poster people scan from a metre away, and larger — 8 cm or more — if it will be projected on a screen at the front of a large room.',
          'Finally, run a trial session before you depend on it. Display or print the code, have five or six people scan and submit, and check the spreadsheet: every name present, timestamps in the right order, no duplicates. Confirm the code scans from the back of the room, not just from the front row — if it does not, enlarge it or increase the contrast. Tell attendees the routine once: scan on arrival, submit before sitting down, and let the teacher or manager know if their phone cannot scan. After one successful trial, the system is ready for daily use.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating a QR code attendance system',
            caption: 'The free generator homepage — your attendance QR code starts here, no sign-up needed.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector showing the URL option for linking a QR code attendance system to a form',
            caption: 'Choose the URL type and paste your attendance form link — the code points scanners straight to the form.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving an attendance QR code as PNG or SVG for printing',
            caption: 'Download PNG for printing or SVG for posters — high resolution keeps the code scannable from a distance.',
          },
        ],
      },
      {
        id: 'qr-code-attendance-for-classroom-office-events',
        heading: 'QR Code Attendance for Classrooms, Offices, and Events',
        paragraphs: [
          'In a classroom, the biggest win is time. A teacher who used to spend the first ten minutes calling names now projects the code as students walk in and starts teaching on time; the register builds itself. The timestamp column doubles as a late-arrival record without any extra work, and the monthly summary comes from the same spreadsheet. For graded attendance, rotate the code each session and display it only on the classroom screen — a code that changes daily cannot be photographed and reused by an absent student. Some teachers also add a one-question quiz or a “today’s topic” field to the form, so the check-in doubles as a quick engagement check.',
          'In an office or workplace, a QR attendance system is a low-cost alternative to biometric machines, which cost money, need maintenance, and raise privacy questions. Employees scan the code at the entrance or at their desk, and the spreadsheet becomes the shift record. It works well for hybrid teams and field staff too: a code at each site, or a per-shift code shared in the team chat, records attendance without anyone travelling to a central terminal. For payroll use, pair the system with per-person codes or a rotating code, because a shared code alone is too easy to game when money depends on it.',
          'At events, workshops, and conferences, QR attendance solves the registration-desk bottleneck. Instead of one queue at a desk, codes at each entrance or on each table let hundreds of people check in simultaneously, and the organiser gets a live count of who is actually in the room — useful for certificate eligibility, headcounts, and follow-up emails. A code on the event badge or on the session slide works the same way, and because the form can ask for a session rating at the same time, check-in and feedback collection happen in a single scan.',
        ],
        bullets: [
          'Classroom: project the code as students enter; rotate it daily to stop proxy attendance.',
          'Office: codes at entrances or per shift; use per-person codes when attendance affects payroll.',
          'Events: codes at entrances or on badges; check-in and feedback in one scan.',
          'Always keep a paper backup for the first week, in case of phone or network problems.',
        ],
      },
      {
        id: 'tracking-and-managing-attendance-data',
        heading: 'Tracking and Managing Your Attendance Data',
        paragraphs: [
          'The response spreadsheet is your register, so treat it like one. Each submission is a row with a timestamp and a name; sorting by date gives the daily list, and sorting by name shows one person’s full history. At the end of each week or month, use a pivot table — or a COUNTIF formula counting each name’s rows — to turn raw submissions into an attendance percentage per person. Google Sheets does this natively: select the data, choose Insert → Pivot table, put names in Rows and count submissions in Values, and you have a per-person tally in under a minute.',
          'Cleaning the data matters more than collecting it. Free-text name fields produce variants — “A. Sharma”, “Ankit Sharma”, “ankit” — that split one person’s attendance across several rows. A dropdown of exact names prevents this at the source, and if you already have messy data, a find-and-replace pass or a lookup table that maps variants to canonical names fixes it. Duplicates are the other common issue: someone submits twice, once from the queue and once from their seat. Sort by name and timestamp, and delete the later duplicate — or keep the earliest submission only, since that is the real arrival time.',
          'For a monthly report, add one summary sheet that lists every person once, with columns for total sessions, sessions attended, and attendance percentage. Share the summary — not the raw response sheet — with whoever needs it, so individual submission times stay private. And keep the raw data: export a copy at the end of each term or month, because a form’s response sheet is easy to overwrite by accident, and an exported CSV is your permanent record.',
        ],
        callout: {
          title: 'The timestamp is the record',
          text: 'Google Forms stamps every submission automatically, so you never need to ask “what time did you arrive?” — the time is already in the sheet. Do not add a time question to the form; it invites wrong answers.',
          type: 'tip',
        },
      },
      {
        id: 'common-qr-attendance-mistakes',
        heading: 'Common Mistakes That Make QR Attendance Unreliable',
        paragraphs: [
          'The most damaging mistake is a single fixed code that never changes, displayed in a place anyone can photograph. Once the code is in a group chat, absent people can scan it from home and appear present — and you will have no way to tell from the spreadsheet, because the submission looks identical to a real one. The fix is cheap: generate a fresh code for each session and show it only inside the room, on a screen or a printed sheet that stays in the room. If daily rotation is too much work, rotate weekly, or switch to per-person codes so a shared photo is useless.',
          'The second mistake is a code that is too small, too low-contrast, or placed where nobody can reach it. A 2 cm code taped to a wall at the far end of a hall will not scan from the entrance queue, so people crowd around it, the queue slows down, and the system feels slower than the paper register it replaced. Size the code for the scanning distance — at least 4 cm for a poster at arm’s length, larger for a projected screen — keep dark modules on a light background, and put the code where people naturally pass, such as the door or the front desk, not in a corner.',
          'The third mistake is collecting too much data in the form. A five-field form — name, ID, department, phone, email — turns a two-second scan into a thirty-second chore, and people start skipping it or filling it carelessly. Attendance needs one identifier and a timestamp; everything else is optional and usually unnecessary. Keep the form to a name dropdown and submit. If you genuinely need a second field, such as a roll number, pre-fill it with per-person links so the attendee taps submit and nothing else.',
          'Finally, never run the system with no fallback. Phones die, cameras break, and the venue Wi-Fi drops — and on that day, a teacher with no paper backup has no register at all. Keep a printed sheet for the first two weeks of any new setup, and keep a spare: a printed list of names the teacher can tick, or a second device logged into the form. The QR system should replace the paper register because it is better, not because the paper option was thrown away.',
        ],
        callout: {
          title: 'Test with the worst phone in the room',
          text: 'If the oldest phone with the weakest camera can scan your code from the back row, every phone can. Test with that device, not with your own new phone.',
          type: 'warning',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code attendance system for free?',
        answer:
          'Create a Google Form with a name dropdown, copy its link, and paste it into a free QR code generator using the URL type. Print or project the code where people check in. Submissions land in a linked spreadsheet with automatic timestamps — that sheet is your attendance register. The whole setup takes under fifteen minutes and costs nothing.',
      },
      {
        question: 'Can a QR code attendance system stop proxy attendance?',
        answer:
          'A single fixed code cannot — anyone can photograph it and scan it from home. Use per-person codes linked to pre-filled forms, or generate a fresh code for each session and display it only inside the room. Either method makes a shared photo useless, because the code is tied to a person or to a session that has already ended.',
      },
      {
        question: 'Do students or employees need an app to scan an attendance QR code?',
        answer:
          'No. Modern iPhone and Android cameras open a QR code link directly, with no app to install. The scanner opens the attendance form in the browser, the person picks their name and taps submit. Anyone whose camera cannot scan QR codes can use the form link directly as a fallback.',
      },
      {
        question: 'What is the best free tool for QR code attendance tracking?',
        answer:
          'Google Forms plus a free QR code generator is the most common free combination: the form captures names and timestamps, the spreadsheet stores and analyses them, and the QR code is just the link in scannable form. Microsoft Forms works the same way if your organisation uses Microsoft 365. Neither needs any paid plan for basic attendance.',
      },
      {
        question: 'How do I track attendance from QR code scans?',
        answer:
          'Every form submission is timestamped automatically in the linked spreadsheet. Sort by date for the daily list, or use a pivot table or COUNTIF formula to count each person’s submissions over a month. Use a name dropdown in the form rather than free text, so one person’s attendance is never split across spelling variants.',
      },
      {
        question: 'Can I use a QR code attendance system without internet?',
        answer:
          'Not fully — the form needs an internet connection to submit, so a venue with no data or Wi-Fi will break the system. In that case, keep a paper backup for the day and enter the names later, or use a mobile hotspot. The QR code itself works offline, but the submission behind it does not.',
      },
    ],
    ctaTitle: 'Make Your Attendance QR Code Now',
    ctaDesc:
      'Free, no sign-up, and ready in under a minute — create the QR code for your attendance form and start tracking check-ins today.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
