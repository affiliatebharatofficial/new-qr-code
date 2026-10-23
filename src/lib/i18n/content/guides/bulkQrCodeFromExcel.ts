import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getBulkQrCodeFromExcelData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'Bulk QR Code from Excel: Generate Hundreds at Once',
    description:
      'Turn an Excel list into hundreds of QR codes in minutes — prepare the sheet, pick a bulk method (paid dashboard tool or free Python script), and download. Free guide.',
    badge: 'Guides',
    h1: 'Bulk QR Code Generator from Excel: How to Create Hundreds of QR Codes at Once',
    subheadline:
      'You have a spreadsheet with 300 product SKUs, 200 event tickets, or 500 employee IDs — and you need a QR code for every single row. Making them one by one would take all day. A bulk QR code workflow turns that same Excel file into hundreds of ready-to-print codes in a few minutes: one row becomes one code, automatically named and saved. This guide shows how to prepare your spreadsheet correctly, walks through three working methods (the site\u2019s own batch tool and two genuinely free approaches), and flags the mistakes that turn a batch job into a reprint disaster.',
    readingTime: '8 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One row = one code',
        text: 'Bulk generation maps each spreadsheet row to a QR code. A clean two-column layout (label + data) is all the input any batch tool needs.',
      },
      {
        label: 'Excel must become CSV first',
        text: 'Save the sheet as UTF-8 CSV — batch tools read plain CSV, not .xlsx. Fix merged cells, strip formulas, and de-duplicate before exporting.',
      },
      {
        label: 'The site has a batch tool',
        text: 'Free QR Code Generator\u2019s dashboard offers bulk QR creation from CSV uploads on paid plans (500\u20135,000 rows per batch). Free methods below cover everything else.',
      },
      {
        label: 'Always test the first code',
        text: 'Generate and physically scan one code before running the full batch. A bad column mapping repeated 500 times is 500 reprints.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-generate-qr-codes-from-excel',
        heading: 'Why Generate QR Codes from Excel in Bulk?',
        paragraphs: [
          'Almost every real-world QR code deployment starts life in a spreadsheet. Event organizers keep attendee lists in Excel. Warehouses track inventory with SKU spreadsheets. HR teams manage employee IDs in rows and columns. Marketing teams assign unique coupon codes per flyer. The data is already tabular — so generating QR codes one at a time in a web form is the bottleneck, not the data.',
          'A bulk workflow flips the process: instead of typing each value into a generator, you hand the whole column to a batch tool and get back a folder (or ZIP) of individual QR code images, one per row, named after the label column. A job that takes three hours of clicking becomes a two-minute upload or a one-line script. More importantly, it eliminates the transcription errors that creep in when a human retypes 400 URLs — every code is generated from the exact cell value.',
          'The typical use cases share one trait: the data already exists and changes regularly. Product URLs on packaging, serial numbers on equipment, Wi-Fi credentials per meeting room, UPI payment amounts per invoice, attendee check-in codes per ticket. Whenever your QR codes are "one per record," bulk generation from Excel is the right approach — and the rest of this guide is about doing it without breaking anything.',
        ],
        callout: {
          title: 'Static codes are the point of bulk',
          text: 'Batch jobs almost always produce static QR codes (data encoded directly in the image). That is correct — static codes work forever with no platform dependency, which is exactly what you want for 500 printed labels.',
          type: 'info',
        },
      },
      {
        id: 'prepare-your-excel-spreadsheet',
        heading: 'Step 1: Prepare Your Excel Spreadsheet Correctly',
        paragraphs: [
          'Every batch failure I have seen started with the spreadsheet, not the QR tool. Batch generators are strict parsers: they read plain columns, and anything "Excel-ish" — merged cells, hidden rows, formulas, multiple sheets, colored notes in adjacent columns — either gets ignored or corrupts the output. Spend five minutes cleaning the sheet and the batch itself will be boring in the best way.',
          'Aim for a simple two-to-three column layout. Column A is the filename or label (e.g. ticket-001, SKU-48213, Room-Conference-A) — this becomes each image\u2019s file name, so keep it short, alphanumeric, and unique. Column B is the data to encode (the URL, the vCard text, the UPI string, the serial number). If the batch tool supports a destination column, Column C holds it. Delete every other column; stray notes, prices, and comments in adjacent columns are the number-one cause of "why is there text inside my QR code" surprises.',
          'Then convert all formulas to values (select all, copy, Paste Special → Values), remove duplicates with Data → Remove Duplicates, and delete blank rows. A trailing blank row at the bottom of the sheet will happily become a QR code encoding an empty string — useless and confusing. Finally, save the sheet as CSV (File → Save As → CSV UTF-8). UTF-8 matters: names with accents or Hindi text encode wrong in legacy ANSI exports. Excel\u2019s plain "CSV (Comma delimited)" on some Windows locales is not UTF-8, so explicitly choose the UTF-8 variant.',
        ],
        subsections: [
          {
            subheading: 'Check your URLs first',
            text: 'If Column B holds links, make sure every one starts with https:// and actually loads. A bulk tool encodes whatever text you give it — including a typo\u2019d domain, repeated 500 times on 500 printed posters.',
          },
          {
            subheading: 'Keep payloads short',
            text: 'QR codes get denser (harder to scan) as the encoded text grows. Use short URLs or URL shorteners for web links before generating — a 20-character link scans far more reliably than a 200-character tracking URL.',
          },
          {
            subheading: 'One type per batch',
            text: 'Do not mix URLs, Wi-Fi credentials, and vCards in one column. Each QR type needs its own formatting, so run one batch per data type with the matching settings.',
          },
          {
            subheading: 'Watch out for formula injection',
            text: 'Cells starting with =, +, -, or @ can be interpreted as formulas when the CSV is re-opened in Excel. Prefix them with an apostrophe or quote them so they stay plain text.',
          },
        ],
      },
      {
        id: 'method-1-dashboard-bulk-tool',
        heading: 'Method 1: Use the Site\u2019s Built-In Bulk Tool (Fastest)',
        paragraphs: [
          'Free QR Code Generator has a dedicated bulk page in the user dashboard: upload a CSV and it generates a QR code for every row, returning the images as a downloadable ZIP named from your label column. This is the fastest path when your data is ready — no scripts, no third-party tools, and the output settings (size, error correction, colors) match the rest of the site.',
          'The bulk feature lives behind the paid plans, with batch limits of 500 to 5,000 rows per upload depending on the tier — designed for exactly the event, inventory, and packaging use cases above. The free generator on the homepage remains the right tool for single codes and for the test I am about to insist on below. Upload your UTF-8 CSV, map the columns (label, type, payload), and the tool validates each row before generating, flagging invalid rows — like malformed URLs or unsupported characters — instead of silently producing broken codes.',
          'Before you upload the full file, run a two-row test file through the same flow. Open the two generated codes, scan them with your actual phone (not an emulator), and confirm they open the right destinations. Only then run the real batch. This thirty-second habit has saved more print runs than any other single practice in this guide.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator — test one code from your spreadsheet before running the full bulk batch',
            caption: 'Generate one code with the free generator first and scan it on your phone — confirm the data is right before the whole batch.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download bulk QR code output at high resolution for printing hundreds of codes',
            caption: 'Download batch output at maximum resolution (PNG or SVG) — printed labels and tickets need crisp edges at small sizes.',
          },
        ],
        callout: {
          title: 'Excel → CSV in 10 seconds',
          text: 'File → Save As → CSV UTF-8. That is the entire conversion. Every bulk tool in this guide reads CSV; none of them read .xlsx directly.',
          type: 'tip',
        },
      },
      {
        id: 'method-2-free-python-script',
        heading: 'Method 2: Free Python Script (No Sign-Up, Unlimited)',
        paragraphs: [
          'If you would rather not pay for a plan, a ten-line Python script does the same job with no limits and no account. This is the method to use for one-off batches, sensitive data you do not want to upload anywhere, or lists of tens of thousands of rows. It runs entirely on your own computer, so the data never leaves your machine.',
          'Install Python from python.org, then install the two libraries with one command: pip install qrcode[pil] pandas. The qrcode library generates the codes; pandas reads your CSV. The script itself is simple: read the CSV, loop over the rows, create one QR code per row with medium-to-high error correction, and save each as a PNG named from the label column into an output folder.',
          'The concrete script looks like this: import pandas and qrcode; load the file with pandas.read_csv("codes.csv"); then for each row, build the code with qrcode.make(row["data"], error_correction=qrcode.constants.ERROR_CORRECT_M) and save it as f"output/{row[\u2019label\u2019]}.png". That is the entire program — under fifteen lines. Run it with python bulk_qr.py, and a 500-row sheet produces 500 PNGs in well under a minute on any modern laptop.',
          'Two settings matter. First, error_correction: use M (medium) for clean digital use and H (high) for anything printed small, on curved surfaces, or with a logo overlaid — higher correction survives damage but makes denser codes, so test-print at real size. Second, box_size: the default of 10 gives a roughly 290px image; set box_size=20 (or higher) for print work so small codes stay sharp. Name files from the label column, not the row number, or you will have no idea which code belongs to which row when you open the folder.',
        ],
        callout: {
          title: 'Keep sensitive data local',
          text: 'Attendee lists, employee IDs, and internal serial numbers should never go through a random free web tool. The Python method keeps everything on your own machine — that alone justifies learning it.',
          type: 'warning',
        },
      },
      {
        id: 'method-3-free-online-batch-tools',
        heading: 'Method 3: Free Online Batch Generators (Small Batches)',
        paragraphs: [
          'For a quick job of a few dozen codes with no setup at all, several free online batch generators accept a pasted list or a CSV upload and return a ZIP of QR codes. They are genuinely useful for one-off tasks — 40 table numbers for a wedding, 60 product stickers for a market stall — where installing Python would be overkill.',
          'The trade-off is the free tier: most cap batches at somewhere between 50 and 200 codes, add watermarks, or limit output resolution unless you upgrade. Read the limit before you start, and check the output size — a batch tool that only exports 200px PNGs is useless for printed labels, which need at least 1000px (or SVG) to scan reliably at 2cm. Also check whether the tool forces its own short URLs on your codes: those are dynamic codes tied to the tool\u2019s platform, which can expire or start charging later. For anything printed permanently, prefer tools that output static codes with your own data.',
          'Whatever tool you pick, apply the same two-row test from Method 1: generate two, scan both on a real phone, then run the rest. And never upload sensitive or personal data to a free web tool — if the rows contain anything you would not post publicly, use the Python method instead.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'Choose the right QR code type before a bulk batch — URL, Wi-Fi, vCard, or text',
            caption: 'Pick the QR type that matches your data column before generating — one type per batch, never mixed.',
          },
        ],
      },
      {
        id: 'bulk-qr-mistakes-to-avoid',
        heading: 'Mistakes That Ruin Bulk QR Batches',
        paragraphs: [
          'Bulk mistakes are expensive because they multiply: one wrong setting times 500 codes equals 500 reprints. The four below account for nearly every failed batch — check each one before you hit generate.',
        ],
        bullets: [
          'Skipping the scan test: generating all 500 codes without scanning the first one. Always print (or display) one code at final size and scan it with two different phones before the full run.',
          'Dirty spreadsheet data: merged cells, hidden rows, trailing spaces, or formulas in the data column. " https://example.com" with a leading space is a different — broken — QR code than "https://example.com".',
          'Codes too small or too dense: a 200-character URL printed at 1.5cm will not scan. Shorten URLs first, keep print size above 2cm × 2cm, and use higher error correction for damaged or curved surfaces.',
          'Duplicate or missing filenames: two rows with the same label overwrite each other in the ZIP. Run Data → Remove Duplicates on the label column and make labels unique before generating.',
          'Wrong character encoding: exporting as ANSI CSV instead of UTF-8 turns accented characters and non-Latin text into mojibake inside the code. Always choose the UTF-8 CSV option explicitly.',
          'Relying on dynamic codes for print: free batch tools that re-host your links can expire or paywall the redirects later. For permanent print, static codes with your own URLs are the safe choice.',
        ],
        callout: {
          title: 'The golden rule of bulk',
          text: 'Two codes first, scanned on a real phone at real print size. Then — and only then — the full batch. Every reprint story starts with skipping this step.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Bulk QR Code FAQs',
    faqs: [
      {
        question: 'Can I generate QR codes directly from an Excel (.xlsx) file?',
        answer:
          'Batch tools read CSV, not .xlsx — but the conversion is one step: File → Save As → CSV UTF-8 in Excel. Keep one sheet, delete extra columns, convert formulas to values first, and the resulting CSV feeds any bulk generator or the Python script in this guide.',
      },
      {
        question: 'How many QR codes can I generate at once?',
        answer:
          'It depends on the method. The dashboard bulk tool on this site handles 500 to 5,000 rows per upload on paid plans. The free Python script has no practical limit — 50,000 rows run in minutes on a normal laptop. Free online tools usually cap batches at 50–200 codes.',
      },
      {
        question: 'Is there a free way to bulk-generate QR codes from Excel?',
        answer:
          'Yes. Install Python, run pip install qrcode[pil] pandas, and use the ten-line script in Method 2 — it reads your CSV, creates one QR code per row with proper error correction, and saves them as named PNGs. It is free, unlimited, and keeps your data on your own computer.',
      },
      {
        question: 'What should each row of my spreadsheet contain?',
        answer:
          'Two columns: a unique label (used as the image filename — e.g. ticket-001) and the data to encode (URL, text, or UPI string). If the tool supports a destination column, add it as a third column. One data type per batch; never mix URLs and vCards in the same column.',
      },
      {
        question: 'Why do some of my bulk QR codes not scan?',
        answer:
          'The usual causes are codes printed too small for their data density (shorten URLs, keep print above 2cm), dirty spreadsheet cells (leading spaces, formulas, wrong encoding), or low error correction on damaged surfaces. Regenerate the first code with high error correction and test-scan at final print size before re-running the batch.',
      },
      {
        question: 'Are bulk-generated QR codes static or dynamic?',
        answer:
          'Batch jobs produce static codes — the data is encoded directly in the image, works forever, and needs no platform. That is the right choice for printed batches. Dynamic (editable, trackable) codes require a per-code subscription and a hosting platform, which rarely makes sense at 500 codes a time.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Start with a single free QR code — test your data, scan it on your phone, then scale to the full batch with confidence. No sign-up, no watermark.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };

  return enData;
}
