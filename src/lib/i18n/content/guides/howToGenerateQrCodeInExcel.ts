import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getHowToGenerateQrCodeInExcelData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Generate a QR Code in Excel (Free, 2026)',
    description:
      'Learn how to generate a QR code in Excel free — the IMAGE formula, bulk codes from a column, VBA for older Excel, and the mistakes that break scans.',
    badge: 'Guides',
    h1: 'How to Generate a QR Code in Excel',
    subheadline:
      'Excel has no built-in QR code button, but it does have everything you need to make one: the IMAGE function can pull a QR code picture straight into a cell, and it updates automatically whenever the data changes. This guide walks through the exact formula, how to make hundreds of codes from a column in seconds, the VBA route for older versions of Excel, and the dead method — Google’s old Charts API — that still fills half the tutorials on the internet.',
    readingTime: '9 min read',
    updatedDate: 'November 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One formula does it',
        text: 'In Microsoft 365 or Excel 2024, =IMAGE with a QR API URL turns any cell’s text into a scannable code — no add-in, no macro.',
      },
      {
        label: 'Encode your data',
        text: 'Wrap the cell in ENCODEURL so spaces, & and # in links and names do not break the QR image URL.',
      },
      {
        label: 'Google’s QR API is dead',
        text: 'The old chart.googleapis.com/chart?cht=qr trick returns a 404 now — any tutorial still using it gives you broken cells.',
      },
      {
        label: 'Keep private data private',
        text: 'The IMAGE method sends your text to an outside QR service, so use an offline generator for confidential lists.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'excel-qr-code-basics',
        heading: 'Can Excel Generate QR Codes? The Short Answer',
        paragraphs: [
          'Excel does not ship a QR code function — there is no QRCODE or barcode function in any version of Excel, and Microsoft’s own function list confirms it. What Excel does have is the IMAGE function, which displays a picture from a web address inside a cell. If a web service can return a QR code image from a URL, Excel can fetch that image and show it. That is the whole trick: you build a URL that describes the QR code you want, and IMAGE renders it.',
          'The IMAGE function is available in Excel for Microsoft 365 (Windows, Mac, and the web), Excel 2024, and the Excel apps for iPhone and Android. If you are on Excel 2019 or older, IMAGE does not exist, and you need the VBA method or an add-in covered later in this guide. The function takes a source URL plus optional alt text and sizing, and the picture lives inside the cell — resize the cell and the code resizes with it, delete the cell and the code goes with it.',
          'The QR image itself comes from a free API. The one used throughout this guide is api.qrserver.com, a free service that returns a PNG when you call a URL like https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hello — the size parameter sets the pixel dimensions and the data parameter is whatever text or link the code should contain. It needs no account and no API key, and it answers directly, which matters because Excel’s IMAGE function refuses URLs that redirect. You also need an internet connection while the codes load, since every code is fetched from that service when the sheet opens.',
          'One warning before you start: your data leaves your computer with this method. The text you encode is sent to the QR service as part of the URL, so it travels over the internet and could be logged. For public data — product pages, event links, inventory IDs, Wi-Fi passwords for a guest network — that is fine. For employee details, customer lists, or anything confidential, use the offline route in the last section instead.',
        ],
        callout: {
          title: 'Check your Excel version first',
          text: 'IMAGE needs Microsoft 365, Excel 2024, or Excel for the web. On Excel 2019 or older the formula will show #NAME? — skip to the VBA method below. ENCODEURL, used inside the formula, is not available in Excel for the web or Excel for Mac, so those users need the workaround in the troubleshooting section.',
          type: 'info',
        },
      },
      {
        id: 'how-to-generate-qr-code-in-excel',
        heading: 'How to Generate a QR Code in Excel (Step by Step)',
        paragraphs: [
          'Put the data you want to encode in column A — one value per row, starting in A2 with a header like “Link” or “Product” in A1. A typical sheet might hold website URLs, product SKUs, ticket numbers, or plain text. Keep each value short: QR codes can hold thousands of characters, but long URLs make dense, hard-to-scan patterns, so use a short link or a URL shortener for anything over about 100 characters.',
          'In B2, enter the formula that builds the QR image URL and displays it: =IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="&ENCODEURL(A2)). The first part is the fixed API address with size=200x200 setting the image to 200 by 200 pixels; the second part appends the contents of A2, URL-encoded by ENCODEURL so spaces become %20 and characters like & and # do not break the address. Press Enter and the QR code appears in B2 within a second or two — there is a short lag while Excel contacts the service and downloads the image.',
          'The code updates itself. Change the text in A2 and the QR code in B2 redraws automatically, because the formula rebuilds the URL from the new value. That is what makes this method genuinely useful: a spreadsheet of links becomes a spreadsheet of live QR codes, and you never regenerate anything by hand. Copy B2 down the column to make a code for every row, or use the spill version below to generate the whole column from a single formula.',
          'Finally, make the codes big enough to scan. IMAGE fits the picture to the cell by default, so widen column B and make the rows taller — about 60 to 80 pixels in each direction, or roughly a 2.5 cm square when printed — and the codes become comfortable to scan from a phone. You can also pass sizing arguments to IMAGE: =IMAGE(url, "QR code", 1) fits the image inside the cell, while mode 2 stretches it to fill. Test every code with a real phone before you print or share the sheet.',
        ],
        subsections: [
          {
            subheading: '1. List your data in column A',
            text: 'One value per row from A2 down — URLs, product IDs, ticket numbers, or plain text. Keep values short so the codes stay easy to scan.',
          },
          {
            subheading: '2. Enter the IMAGE formula in B2',
            text: '=IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="&ENCODEURL(A2)) — the API builds the code and IMAGE displays it in the cell.',
          },
          {
            subheading: '3. Copy the formula down',
            text: 'Fill B2 down the column and every row gets its own live QR code. Edit any value in column A and its code redraws automatically.',
          },
          {
            subheading: '4. Resize rows and columns',
            text: 'Widen column B and raise the row height to about 60–80 pixels so each code is at least 2.5 cm square when printed, then scan-test with a phone.',
          },
        ],
        callout: {
          title: 'ENCODEURL is the step everyone skips',
          text: 'Without ENCODEURL, your formula works until a value contains a space, an & or a # — then the URL breaks and the cell shows nothing. If ENCODEURL is not available in your Excel (Mac or web), use the plain version =IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="&A2) and keep your data free of spaces and special characters, or replace spaces with %20 by hand.',
          type: 'tip',
        },
      },
      {
        id: 'bulk-qr-codes-in-excel',
        heading: 'Bulk QR Codes in Excel: One Formula for the Whole Column',
        paragraphs: [
          'Copying a formula down 500 rows works, but there is a cleaner way. In Microsoft 365 you can point the formula at a whole range and let it spill: =IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=150x150&qzone=2&data="&ENCODEURL(A2:A6)) entered once in B2 generates all five codes at once, spilling down as far as the range goes. The qzone=2 parameter adds a small white border — the quiet zone — around each code, which helps phones find the pattern. Change the range to A2:A501 and you have five hundred codes from a single formula.',
          'Bulk sheets need a little layout care. Set the row height for the whole block at once — select the rows, right-click, choose Row Height, and enter 60 or more — and set column B to a matching width so the codes are square rather than squashed. Add a header row with clear labels (Item, Link, QR Code) and freeze the top row so you can scroll a long list without losing track of which code belongs to which row. If the codes look blurry on screen, raise the size parameter to 300x300; the file gets heavier, but the printed result is sharper.',
          'For a truly large batch — thousands of codes, or codes that need a logo, colours, or a transparent background — Excel is the wrong place to render them. Generate the batch in a free bulk QR generator instead: upload your spreadsheet or paste the column, download the codes as PNG or SVG files, and insert them into Excel with Insert → Pictures → Place in Cell. The generator does the heavy lifting offline, you keep full control of design and quality, and Excel stays fast. This is also the right route when the data is confidential, since nothing is sent to a third-party API.',
          'Whichever route you take, print a test page first. Print five or ten codes at the size you plan to use, then scan each one with two different phones — an iPhone and an Android if you can — in normal room light. Codes that scan on screen can still fail on paper if they are too small, printed too light, or placed on a coloured background. Catch that on the test page, not on a thousand printed labels.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator homepage for creating bulk QR codes from an Excel spreadsheet',
            caption: 'For large batches, a logo, or confidential data, generate the codes in a free bulk generator and insert the files into Excel.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Download buttons for saving QR codes as PNG or SVG files to insert into Excel',
            caption: 'Download PNG for Excel sheets, or SVG when the codes will be printed large.',
          },
        ],
      },
      {
        id: 'vba-qr-code-in-excel',
        heading: 'VBA Method: QR Codes in Older Versions of Excel',
        paragraphs: [
          'If your Excel is too old for IMAGE — Excel 2019, 2016, or 2013 — VBA can do the same job. The simplest approach is a small macro that loops down your data column, builds the same QR API URL for each value, downloads the PNG to a temporary folder, and inserts it as a picture floating over the matching row. You run it once, and the sheet fills with codes. The pictures are ordinary inserted images, so they do not update when the data changes — run the macro again after edits — but they print exactly as placed and work in any Excel version that supports macros.',
          'To set it up, press Alt + F11 to open the Visual Basic editor, insert a module, and paste in a macro that uses URLDownloadToFile to fetch each code and Shapes.AddPicture to place it. A short custom function can also return the API URL for a cell, which you can then use with Insert → Pictures from a URL in newer versions. Either way, save the file as .xlsm (macro-enabled workbook) and keep macros enabled when you open it, or Excel will silently block the code.',
          'VBA has real trade-offs. The codes are static pictures, so a changed link means re-running the macro. The macro still calls the same outside QR service, so it needs internet and shares the same privacy caveat as the IMAGE method. And a macro-enabled file is harder to share — many email systems and company policies block .xlsm attachments. If you have Microsoft 365 available anywhere, the IMAGE formula is the better tool; keep VBA for the old desktop installs where nothing else works.',
        ],
        callout: {
          title: 'Save as .xlsm, or the macro vanishes',
          text: 'A normal .xlsx file strips VBA code on save without asking twice. After adding any macro, use Save As and choose “Excel Macro-Enabled Workbook (.xlsm)” — and expect a security prompt the next time you open it, which is Excel doing its job.',
          type: 'warning',
        },
      },
      {
        id: 'excel-add-ins-and-google-sheets',
        heading: 'Add-ins, Google Sheets, and When to Skip Excel Entirely',
        paragraphs: [
          'Several Excel add-ins promise one-click QR codes — QR4Office from Microsoft is the best-known free one, and a handful of paid add-ins add bulk generation, logos, and tracking. They are worth trying if you live in Excel all day and want a ribbon button instead of a formula, but check two things before committing: whether the add-in stores your data on its own servers, and whether it still works on your Excel version. Free add-ins have a habit of going unmaintained, and a dead add-in in the middle of a project is worse than a formula you control.',
          'Google Sheets users get the same IMAGE trick, and Sheets’ IMAGE function works the same way with the same API URL — the formula is identical except for how Sheets handles ranges. Sheets also has the same dead-end to avoid: the Google Charts QR endpoint that every old tutorial recommends no longer answers, so use api.qrserver.com or another live QR image API instead. The same privacy rule applies: the data in the formula is sent to the service that draws the code.',
          'Sometimes the honest answer is that Excel is the wrong tool for the job. If the codes need to change destination after printing, be tracked, carry a logo, or look a certain way, generate them in a dedicated QR generator and bring the finished images into Excel. A generator gives you dynamic codes you can edit later, scan counts, error-correction control, and PNG or SVG downloads in the exact size you need — and it keeps your spreadsheet as a list of data, not a slow file full of live image fetches. Choose the right tool for the batch size and the lifespan of the codes, not the tool that happens to be open.',
        ],
        figures: [
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'QR code type selector in a free generator for making URL, Wi-Fi, vCard and other QR code types',
            caption: 'A dedicated generator makes the code types Excel cannot — Wi-Fi, vCard, email, and dynamic codes you can edit after printing.',
          },
        ],
      },
      {
        id: 'excel-qr-code-mistakes',
        heading: 'Excel QR Code Mistakes That Break Your Codes',
        paragraphs: [
          'The most common mistake in 2026 is copying an old formula that points at Google’s chart service: =IMAGE("https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="&A2). That endpoint returned a 404 when checked in July 2026, so every cell using it shows a broken image — and the formula looks correct, which is why people waste an afternoon debugging Excel when the service is the problem. If a tutorial gives you a chart.googleapis.com URL, replace it with the api.qrserver.com format from this guide.',
          'The second mistake is forgetting ENCODEURL, covered above: a link with a space or an & silently produces a wrong code or no code at all. The third is size. A code crammed into a default-height row is a code nobody can scan — the IMAGE function squeezes the picture into the cell, so a 15-pixel-tall row gives you a 15-pixel-tall code. Give each code room: rows at least 60 pixels tall, columns wide enough to match, and a printed size of at least 2.5 cm.',
          'The fourth mistake is printing without testing. Excel’s print preview does not tell you whether a code scans, and printer scaling can shrink a whole sheet — including your codes — below the scannable minimum. Print one page, scan every code on it with a phone, and only then print the batch. And finally, remember the codes are static: the link is baked into the picture. If a URL in column A changes after printing, the printed code still points at the old address. For links that might move, use a short redirect URL you control, or generate dynamic codes in a dedicated generator and insert them instead.',
        ],
        bullets: [
          'Never use the dead Google Charts URL (chart.googleapis.com/chart?cht=qr) — it returns a 404 and breaks every cell.',
          'Always wrap data in ENCODEURL on Windows, or strip spaces and special characters on Mac and web.',
          'Rows at least 60 pixels tall and codes at least 2.5 cm across when printed — smaller codes fail in real light.',
          'IMAGE needs internet: codes show as broken images offline, so do not rely on them in a file you will open without a connection.',
          'Test-print and scan with a real phone before printing a batch — print preview cannot tell you if a code scans.',
          'Do not encode confidential data with the IMAGE method; use an offline generator for private lists.',
        ],
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a QR code in Excel for free?',
        answer:
          'In Microsoft 365 or Excel 2024, put your data in A2 and enter =IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="&ENCODEURL(A2)) in B2. The free QR API builds the code and IMAGE displays it in the cell — no add-in, no subscription, and the code updates whenever the data changes.',
      },
      {
        question: 'Does Excel have a built-in QR code generator?',
        answer:
          'No. Excel has no QRCODE function and no QR button in any version. The IMAGE function is the workaround: it displays a picture from a web address, so you point it at a free QR image API and Excel renders the code in the cell. Older Excel versions need VBA or an add-in instead.',
      },
      {
        question: 'Why is my QR code formula showing a broken image in Excel?',
        answer:
          'The most likely cause is the dead Google Charts endpoint — chart.googleapis.com/chart?cht=qr stopped answering in 2026, so replace it with the api.qrserver.com URL from this guide. Other causes: no internet connection, a space or & in your data without ENCODEURL, or an IMAGE source that redirects, which Excel blocks.',
      },
      {
        question: 'Can I generate QR codes in bulk in Excel?',
        answer:
          'Yes. Copy the IMAGE formula down the column, or use the spill version =IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=150x150&qzone=2&data="&ENCODEURL(A2:A500)) to generate hundreds of codes from one formula. For thousands of codes, or codes with a logo, generate them in a bulk QR generator and insert the files into Excel instead.',
      },
      {
        question: 'Does the IMAGE QR code work on Excel for Mac or on the web?',
        answer:
          'IMAGE itself works on Mac and on Excel for the web, but ENCODEURL does not exist there. Use the plain formula =IMAGE("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="&A2) and keep your data free of spaces and special characters, or replace spaces with %20 yourself. Codes also need an internet connection to load.',
      },
      {
        question: 'Is it safe to put private data in an Excel QR code formula?',
        answer:
          'Not with the IMAGE method — the text you encode is sent to the outside QR service as part of the URL, so it leaves your computer. For employee lists, customer data, or anything confidential, generate the codes offline in a dedicated generator that runs in your browser, then insert the downloaded images into Excel.',
      },
    ],
    ctaTitle: 'Make Your QR Code Now',
    ctaDesc:
      'Need codes Excel cannot make — dynamic, Wi-Fi, vCard, with your logo, or a whole batch at once? Create them free in under a minute, then drop the files into your spreadsheet.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
