# Production-Ready QR Code Generator

A fast, SEO-optimized, privacy-first **QR Code Generator web application** built with **Astro.js**, **Cloudflare Pages / Workers**, **Cloudflare D1**, **Cloudflare R2**, **TypeScript**, and **Tailwind CSS**.

---

## Key Features

### 1. 100% Client-Side Static QR Generation (Zero Server Cost)
- **Instant Generation**: Runs 100% inside the user's browser using HTML5 Canvas & SVG.
- **Privacy-First**: Wi-Fi credentials, private contacts, or payment IDs never touch remote servers.
- **No Sign-Up Required**: Instant use, customization, and downloads without creating an account.

### 2. Supported QR Code Types
- **URL**: Safe HTTP/HTTPS links (rejects malicious `javascript:`, `data:`, `file:` schemes).
- **Plain Text**: Multiline notes, coupon codes, and offline serial tags.
- **Wi-Fi Network**: WPA/WPA2/WPA3, WEP, Open, and Hidden SSIDs with standard character escaping.
- **vCard 3.0**: Digital business cards (Name, Company, Title, Phone, Email, Website, Address).
- **Email**: Pre-filled mailto URIs with recipient, subject line, and body message.
- **Phone Call**: One-tap phone dialing.
- **SMS**: Pre-composed text messages.
- **WhatsApp**: Direct chat links using `https://wa.me/`.
- **Location & Google Maps**: GPS coordinates and direct turn-by-turn navigation.
- **UPI Instant Payment**: Standard NPCI payment URIs (`upi://pay?pa=...`) for GPay, PhonePe, Paytm.
- **Social Profiles**: Instagram, Facebook, X (Twitter), LinkedIn, YouTube, TikTok.

### 3. Visual Customization & Scan Reliability
- **Patterns**: Square, Rounded, Dots, Classy, Classy Rounded, Extra Rounded.
- **Corner Eyes**: Custom outer frame & inner dot styles (Square, Rounded, Circle).
- **Colors**: Foreground / Background color pickers, HEX inputs, and transparent background toggles.
- **Logo Integration**: Upload PNG, JPG, WebP, SVG (up to 2 MB) with automatic padding and dot clearing.
- **Real-Time Scannability Analyzer**: WCAG luminance & contrast ratio checker with warning alerts for inverted or low-contrast designs.

### 4. Dynamic QR Codes & Scan Analytics (Pro / Auth Features)
- **Dynamic Redirects**: Ultra-fast Cloudflare Edge worker (`/r/:shortCode`) with instant 302/307 redirects.
- **Privacy-Focused Analytics**: Tracks total scans, today, last 7 days, 30 days, device types, browser family, OS, and country breakdown without storing raw IP addresses.
- **Dashboard (`/dashboard`)**: Manage dynamic links, edit destination URLs anytime, pause/activate campaigns, and inspect real-time metrics.
- **Admin Portal (`/admin`)**: User account moderation, system statistics, and malicious link disabling.

### 5. 14 Dedicated SEO Landing Pages
- `/qr-code-generator/`
- `/url-to-qr-code/`
- `/text-to-qr-code/`
- `/wifi-qr-code-generator/`
- `/vcard-qr-code-generator/`
- `/email-qr-code-generator/`
- `/phone-qr-code-generator/`
- `/sms-qr-code-generator/`
- `/whatsapp-qr-code-generator/`
- `/upi-qr-code-generator/`
- `/location-qr-code-generator/`
- `/google-maps-qr-code/`
- `/instagram-qr-code/`
- `/linkedin-qr-code/`
- Complete with JSON-LD Schema (`WebApplication`, `FAQPage`), sitemap (`/sitemap.xml`), and robots (`/robots.txt`).

---

## Tech Stack & Architecture

```
Astro.js (Server Output Mode)
    ↓
Cloudflare Pages / Workers
    ↓
Cloudflare D1 (SQLite Database)
    ↓
Cloudflare R2 (Persistent Assets)
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Run Automated Tests
```bash
npm test
```

### 4. Production Build
```bash
npm run build
```

---

## Cloudflare Setup & Deployment

### D1 Database Migration
1. Create a D1 database:
   ```bash
   npx wrangler d1 create qr_generator_db
   ```
2. Update the `database_id` in `wrangler.toml`.
3. Apply migrations locally or to Cloudflare:
   ```bash
   npx wrangler d1 migrations apply qr_generator_db --local
   npx wrangler d1 migrations apply qr_generator_db --remote
   ```

### R2 Bucket Setup
1. Create the R2 bucket:
   ```bash
   npx wrangler r2 bucket create qr-assets
   ```

### Deploy to Cloudflare Pages
```bash
npx wrangler pages deploy dist
```
