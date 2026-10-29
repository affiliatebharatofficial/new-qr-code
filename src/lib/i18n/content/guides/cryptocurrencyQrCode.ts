import type { GuideArticleData } from './types';
import type { Locale } from '../../config';

export function getCryptocurrencyQrCodeData(locale: Locale): GuideArticleData {
  const enData: GuideArticleData = {
    title: 'How to Make a Bitcoin QR Code (Free, No Sign-Up)',
    description:
      'Make a free Bitcoin QR code: wallet address steps, payment-request format, amount encoding, and safety checks — no sign-up, no expiry.',
    badge: 'Guides',
    h1: 'How to Make a Bitcoin QR Code',
    subheadline:
      'A Bitcoin address is a long string of random-looking characters — one wrong character and the payment goes to the wrong wallet, with no bank to reverse it. A Bitcoin QR code removes that risk: the payer scans, the wallet fills in the exact address (and optionally the exact amount), and they only have to confirm. This guide shows you how to create one in under a minute for free, explains the BIP21 payment-request format behind it, covers the three Bitcoin address types you will meet, and walks through the safety checks that matter most — because with crypto, a small mistake is permanent.',
    readingTime: '9 min read',
    updatedDate: 'October 2026',
    quickTakeawaysTitle: 'Quick Takeaways',
    quickTakeaways: [
      {
        label: 'One scan, zero typos',
        text: 'A Bitcoin QR code encodes your exact wallet address, so the payer never retypes 26–62 characters by hand — the most common cause of lost payments.',
      },
      {
        label: 'BIP21 adds the amount',
        text: 'A payment-request QR code (bitcoin:address?amount=0.01) prefills both the address and the amount, so the payer cannot underpay or overpay by mistake.',
      },
      {
        label: 'Static codes never expire',
        text: 'A free static QR code works forever for the same address. But it cannot be edited — if you change wallets, print a new code.',
      },
      {
        label: 'Verify before you share',
        text: 'Always scan-test your own code and check the first and last characters of the address. Clipboard malware swaps addresses — the scan test catches it.',
      },
    ],
    tocTitle: 'In This Guide',
    sections: [
      {
        id: 'why-a-bitcoin-qr-code',
        heading: 'Why a Bitcoin QR Code Beats Copy-Pasting an Address',
        paragraphs: [
          'A Bitcoin address looks like bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq or 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa — long, case-sensitive, and meaningless to the human eye. Copy-pasting works on a screen, but the moment the address moves to print — a donation poster, an invoice, a shop counter, a conference slide — the payer has to retype it or photograph it and transcribe it later. Every manual transcription is a chance to swap two characters, and unlike a bank transfer, a Bitcoin transaction sent to the wrong address cannot be recalled, reversed, or refunded by anyone. There is no customer support desk for the blockchain.',
          'A QR code eliminates the transcription step entirely. The payer opens their wallet app, scans, and the address appears exactly as encoded — character for character. Most wallet apps then show the address and, if the code carries one, the amount, and ask for confirmation before anything is sent. That confirmation screen is the safety net: the payer sees what they are about to do, and the address they see is the one you encoded, not one a tired finger mistyped. For donations, tipping, and in-person payments, this turns a fiddly, error-prone process into a single scan and a tap.',
          'There is a second benefit that matters just as much: a QR code can carry more than a bare address. Using the BIP21 payment-request format (explained below), one code can prefill the amount, a label for the payment, and a short message — so a shop can print one code for a fixed-price item, a charity can print one code for a suggested donation, and a freelancer can put one code on an invoice for the exact amount owed. The payer does not have to remember the price, convert units, or wonder whether they typed the decimal point correctly. The code carries the whole instruction.',
        ],
        callout: {
          title: 'Bitcoin payments are final',
          text: 'There is no chargeback and no undo button on a Bitcoin transaction. That is exactly why a scannable code — verified before it is shared — is worth more here than for any other payment type.',
          type: 'warning',
        },
      },
      {
        id: 'bitcoin-address-types',
        heading: 'Bitcoin Address Types: Legacy, SegWit, and Taproot',
        paragraphs: [
          'Not all Bitcoin addresses look alike, and the differences matter when you generate a code. The oldest format, called Legacy or P2PKH, starts with a 1 — for example, 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa, the famous genesis-block address. Legacy addresses are universally supported by every wallet, but they produce larger transactions and therefore higher fees than newer formats. If your wallet still issues legacy addresses, a QR code made from one will work everywhere, but you will pay more per transaction than you need to.',
          'The format most people meet today is Native SegWit, also called bech32, which starts with bc1q — for example, bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq. SegWit addresses are all lowercase, which makes them easier to read aloud and less error-prone, and transactions from them are smaller and cheaper. Nearly every modern wallet supports them, and for most users they are the right default: cheap, widely compatible, and less prone to transcription errors. Between legacy and SegWit, choose SegWit unless you have a specific reason not to.',
          'The third format is Taproot, starting with bc1p. Taproot addresses enable newer Bitcoin features like more private and flexible spending conditions, but support is still rolling out: some older wallets and exchanges cannot send to a bc1p address yet. Before you print a Taproot address in a QR code for the public, confirm that the wallets your payers actually use can send to it — a code that half your audience cannot pay is worse than a slightly more expensive SegWit code that everyone can use. In short: SegWit (bc1q) is the safe default for a public payment QR code in 2026.',
        ],
        subsections: [
          {
            subheading: 'Legacy (starts with 1)',
            text: 'Oldest format, supported everywhere, but larger transactions and higher fees. Fine as a fallback, not the best default.',
          },
          {
            subheading: 'SegWit bech32 (starts with bc1q)',
            text: 'All-lowercase, cheaper transactions, supported by nearly all modern wallets. The recommended default for a public Bitcoin QR code.',
          },
          {
            subheading: 'Taproot (starts with bc1p)',
            text: 'Newest format with advanced features, but not every wallet or exchange can send to it yet. Check payer compatibility before printing one publicly.',
          },
        ],
      },
      {
        id: 'create-bitcoin-qr-code-step-by-step',
        heading: 'How to Create a Bitcoin QR Code (Step by Step)',
        paragraphs: [
          'The whole process takes about a minute and needs no account and no payment. You need one thing first: your own Bitcoin receiving address, copied from your wallet app — never typed from memory, and never taken from a screenshot, a chat message, or a website claiming to be your wallet. Open your wallet, go to Receive, and copy the address it shows. If your wallet offers a choice of address type, pick Native SegWit (bc1q) unless you have a reason to use another format, as explained above.',
          'Next, decide whether you want a plain address code or a payment-request code. A plain code simply contains your address — the payer scans it, their wallet fills in the address, and they type the amount themselves. That is the right choice for open donations and tipping, where the payer chooses the amount. A payment-request code uses the BIP21 format: bitcoin: followed by the address, then ?amount=, the label, and the message — for example, bitcoin:bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq?amount=0.01&label=Coffee&message=Thanks. The amount is in BTC, not in dollars or satoshis, so 0.01 means 0.01 BTC — double-check the decimal point, because 0.1 is ten times larger. Use a payment-request code whenever the amount is fixed: a shop price, an invoice, or a suggested donation.',
          'Then open the free QR code generator and choose the URL or text type. Paste the address (for a plain code) or the full BIP21 string (for a payment-request code) into the content field — the generator does not need to know anything about Bitcoin, it just encodes the text you give it. Check the preview: it should show a normal black-and-white code. Download it as a PNG — high resolution if it will be printed on a poster, a shop counter stand, or an invoice, standard size if it is going on a screen, a chat message, or a social post.',
          'Finally, test before you share. Scan the code with your own phone using a wallet app (not just a camera app, which may only display the text), and confirm the wallet shows exactly your address — check the first six and last six characters against the address in your wallet — and the correct amount if you encoded one. Then, for a payment-request code, send yourself a tiny test payment if the amount allows it, or ask a trusted friend to scan and confirm what their wallet prefills before you print hundreds of copies. This five-minute test is the single most valuable step in the whole process.',
        ],
        bullets: [
          'Copy your address from your wallet app (Receive screen) — never retype it from memory.',
          'Plain code: paste just the address. Payment-request code: bitcoin:address?amount=0.01&label=Name.',
          'Amount is in BTC: 0.01 means 0.01 BTC. Check the decimal point twice.',
          'Download as PNG — high resolution for print, standard for screens.',
          'Scan-test with a wallet app and verify the first and last characters match your real address.',
        ],
        figures: [
          {
            src: '/guides/screenshots/generator-hero.png',
            alt: 'Free QR code generator where you paste a Bitcoin wallet address or payment request',
            caption: 'Paste your wallet address — or the full BIP21 payment string — and the code generates instantly.',
          },
          {
            src: '/guides/screenshots/qr-type-selector.png',
            alt: 'Choosing the URL or text QR code type for a Bitcoin QR code',
            caption: 'Use the URL or text type: a Bitcoin code is just your address (or BIP21 string) in scannable form.',
          },
          {
            src: '/guides/screenshots/download-buttons.png',
            alt: 'Downloading the Bitcoin QR code as a PNG file',
            caption: 'Download the finished code as a PNG, ready for invoices, posters, shop counters, or donation pages.',
          },
        ],
      },
      {
        id: 'where-to-use-bitcoin-qr-code',
        heading: 'Where to Use a Bitcoin QR Code: Donations, Shops, and Invoices',
        paragraphs: [
          'Donations are the most common use, and the simplest: a charity, open-source project, streamer, or content creator prints or posts one code, and supporters scan to send any amount they choose. A plain address code is right here, because the donor decides the amount — and because a donation page can show the code next to a short note explaining what the money supports. One caution applies to public donation codes: anyone can see the address, and every payment to it is visible on the public blockchain. That transparency is fine for a charity, but if you value financial privacy, use a fresh address for each campaign rather than one permanent public address, and never reuse a personal savings address for donations.',
          'For shops, cafés, and market stalls, a payment-request code shines. Print one code per fixed price — or, better, a small stand showing the code for the item being sold — and the customer scans, confirms the exact amount, and pays without the cashier handling cash or card machines. Because Bitcoin prices move, a shop that prices in local currency should regenerate the code when the price changes, or use a point-of-sale tool that builds the BIP21 string with the current BTC amount at checkout time. A printed code with a stale amount is the shop equivalent of a wrong price tag, so date your printed codes and reprint when prices move.',
          'On invoices and freelance quotes, a payment-request code removes the two most common payment frictions: the client copying a long address, and the client sending the wrong amount. Put the code on the invoice next to the amount owed, with the amount encoded in the BIP21 string and the invoice number in the label or message field, so the payment arrives matched to the right invoice. Freelancers should also note the tax and accounting angle: a QR code makes payment easy, but it does not change your obligation to record the income and report it under your local tax rules — keep the invoice, the transaction ID, and the BTC-to-local-currency rate on the payment date.',
        ],
        bullets: [
          'Donations: plain address code — donor chooses the amount; use a fresh address per campaign for privacy.',
          'Shops: payment-request code per fixed price; reprint when the BTC price moves.',
          'Invoices: encode the exact amount plus the invoice number in the label field.',
          'Tipping: a small printed code at a counter or on a stream overlay works — keep the code big enough to scan from a normal distance.',
        ],
      },
      {
        id: 'safety-checks-and-scams',
        heading: 'Safety Checks and Scams: What Can Go Wrong',
        paragraphs: [
          'The most dangerous threat is clipboard malware. Malicious software on a computer or phone watches the clipboard, and when it detects a Bitcoin address being copied, it silently replaces it with the attacker\'s address. The victim pastes what looks like a normal address, generates a QR code from it, and every payment goes to the attacker. The defence is unglamorous but effective: after pasting an address anywhere, check its first and last characters against the address shown in your wallet, and scan-test the finished QR code with a wallet app before sharing it. If even one character differs, stop — something on your device swapped the address, and you should clean the device before generating any payment code.',
          'The second threat is the fake code swap: someone replaces your printed QR code with their own — a sticker over a shop counter code, a swapped poster at an event, an edited image on a donation page. The defence here is physical and procedural: laminate printed codes or place them behind glass, inspect public codes regularly, and never let a printed code sit unexamined for months. Online, only share your code from channels you control, and if a supporter reports that a payment went to an unexpected address, treat it as a code-swap incident until proven otherwise.',
          'Finally, the rules that apply to every crypto interaction apply doubly to QR codes: never put a private key, seed phrase, or wallet password into a QR code — a QR code is for sharing a public receiving address, never a secret. A legitimate wallet will never ask you to scan a code containing your seed phrase, and anyone who asks you to do so is running a scam. And never scan a QR code that promises to double your Bitcoin, unlock your wallet, or claim a giveaway: those codes lead to phishing pages or payment requests that drain wallets. A QR code is a convenient way to share an address — it is not a trust signal, and scanning one from an untrusted source is as risky as clicking an unknown link.',
        ],
        callout: {
          title: 'Never encode a private key or seed phrase',
          text: 'A QR code is for your public receiving address only. Anyone asking you to scan or share a code containing a private key or seed phrase is scamming you — no exceptions.',
          type: 'warning',
        },
      },
      {
        id: 'common-mistakes',
        heading: 'Common Mistakes (and How to Avoid Them)',
        paragraphs: [
          'The most expensive mistake is encoding the wrong amount in a BIP21 string. Because the amount field is in BTC, a misplaced decimal point turns a 0.001 BTC payment (a small tip) into 0.01 BTC (ten times more) or 0.1 BTC (a hundred times more). Always write the amount, convert it with a calculator if you are pricing in local currency, and then scan-test the code and read the amount your wallet prefills before sharing it. If the amount looks wrong on the test scan, fix the string and regenerate — never share a code you have not test-scanned.',
          'The second common mistake is sending Bitcoin to the wrong network\'s address. A Bitcoin QR code only works for Bitcoin on the Bitcoin network: sending BTC to an address for another cryptocurrency, or receiving another coin at a Bitcoin address, can lose the funds permanently. Make sure the code is labelled clearly — "Bitcoin (BTC) only" next to a printed code prevents well-meaning supporters from sending the wrong asset. Similarly, do not mix address formats: a SegWit address pasted into a tool that only understands legacy addresses will fail, so use a generator and a wallet that both handle the format you chose.',
          'The third mistake is treating a static QR code as editable. A free static code contains exactly the text you encoded, forever. If you change wallets, close an old address, or need to update the amount on a printed shop code, the old code does not update — it keeps pointing at the old address or the old amount. Reprint it. And keep a note of which address each printed code points to: months later, when a payment arrives at an address you no longer check, that note is the difference between a mystery payment and a matched one.',
        ],
        callout: {
          title: 'Test-scan every code before it goes public',
          text: 'One scan with your own wallet app catches a swapped address, a wrong amount, and a broken format — the three mistakes that cost real money. It takes ten seconds.',
          type: 'tip',
        },
      },
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How do I create a Bitcoin QR code for free?',
        answer:
          'Copy your Bitcoin receiving address from your wallet app, open a free QR code generator, choose the URL or text type, and paste the address (or a full BIP21 payment string like bitcoin:address?amount=0.01). Download the PNG. It takes under a minute, needs no account, and the code never expires as long as the address stays valid.',
      },
      {
        question: 'What is a BIP21 Bitcoin payment request?',
        answer:
          'BIP21 is the standard format for a Bitcoin payment request in a link or QR code: bitcoin:address?amount=0.01&label=Name&message=Note. Scanning it prefills the address and the amount in the payer\'s wallet. The amount is in BTC, so double-check the decimal point before sharing the code.',
      },
      {
        question: 'Which Bitcoin address type should I use in a QR code?',
        answer:
          'Native SegWit (bc1q) is the best default for most people: it is all-lowercase, produces cheaper transactions, and is supported by nearly all modern wallets. Legacy addresses (starting with 1) work everywhere but cost more in fees, and Taproot (bc1p) is not yet supported by every wallet, so check compatibility before printing one publicly.',
      },
      {
        question: 'Do Bitcoin QR codes expire?',
        answer:
          'A static QR code itself never expires — it simply contains your address or payment string. It stops being useful only if you stop using that wallet address, or if a payment-request code carries an amount that is no longer correct. In both cases, generate and share a new code.',
      },
      {
        question: 'Is it safe to share my Bitcoin QR code publicly?',
        answer:
          'Sharing a receiving address is safe — it only lets people send you Bitcoin, not take any. But remember two things: all payments to that address are visible on the public blockchain, so use a fresh address per campaign if you value privacy; and never put a private key or seed phrase in a QR code, which is only ever for a public address.',
      },
      {
        question: 'Can someone steal my Bitcoin by scanning my QR code?',
        answer:
          'No. Scanning your code only reveals your public receiving address, which cannot be used to spend your funds. The real risks run the other way: clipboard malware swapping your address before you generate the code, and someone physically replacing your printed code with theirs. Scan-test your code and inspect printed codes regularly to guard against both.',
      },
    ],
    ctaTitle: 'Make Your Bitcoin QR Code Now',
    ctaDesc:
      'Copy your wallet address, paste it into the free generator, and download your Bitcoin QR code in under a minute — no sign-up, no cost, no expiry.',
    ctaButtonText: 'Create Free QR Code',
    ctaButtonLink: '/',
  };
  return enData;
}
