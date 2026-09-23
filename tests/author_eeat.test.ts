import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('E-E-A-T, Creator Identity & Trust Signals (Step 1)', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('verifies exact official social profile links in MaintainerCard', () => {
    const cardContent = fs.readFileSync(
      path.join(rootDir, 'src/components/ui/MaintainerCard.astro'),
      'utf-8'
    );

    expect(cardContent).toContain('https://www.linkedin.com/in/firoz-khan-1153358a/');
    expect(cardContent).toContain('https://github.com/fkdigitalmedia');
    expect(cardContent).toContain('https://www.instagram.com/rtibyfiroz/');
    expect(cardContent).toContain('Firoz Khan');
    expect(cardContent).toContain('Full Stack Developer');
    expect(cardContent).toContain('FK Digital Media');
    expect(cardContent).toContain('/about/firoz-khan');
  });

  it('verifies Firoz Khan author profile page and Person schema', () => {
    const pageContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/about/firoz-khan.astro'),
      'utf-8'
    );

    expect(pageContent).toContain("name: 'Firoz Khan'");
    expect(pageContent).toContain("jobTitle: 'Full Stack Developer'");
    expect(pageContent).toContain("'https://www.linkedin.com/in/firoz-khan-1153358a/'");
    expect(pageContent).toContain("'https://github.com/fkdigitalmedia'");
    expect(pageContent).toContain("'https://www.instagram.com/rtibyfiroz/'");
    expect(pageContent).toContain("name: 'FK Digital Media'");
    expect(pageContent).toContain('Full-Stack Web Development');
    expect(pageContent).toContain('QR Generation &');
    expect(pageContent).toContain('Cloudflare');
  });

  it('verifies updated About page has factual positioning and static vs dynamic distinction', () => {
    const aboutContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/about.astro'),
      'utf-8'
    );

    expect(aboutContent).toContain('MaintainerCard');
    expect(aboutContent).toContain('FK Digital Media');
    expect(aboutContent).toContain('Static vs. Dynamic QR Architecture');
    expect(aboutContent).toContain('Static QR Codes (100% In-Browser)');
    expect(aboutContent).toContain('Dynamic QR Codes (Edge-Routed)');
    expect(aboutContent).toContain('/report-problem');
    expect(aboutContent).not.toContain('enterprise-grade');
    expect(aboutContent).not.toContain('sub-millisecond');
    expect(aboutContent).not.toContain('guaranteeing flawless');
  });

  it('verifies Report a Problem page contains required problem categories and realistic notice', () => {
    const reportContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/report-problem.astro'),
      'utf-8'
    );

    expect(reportContent).toContain('Reports may be reviewed to identify technical, data, or usability issues.');
    expect(reportContent).toContain('not_scanning');
    expect(reportContent).toContain('incorrect_output');
    expect(reportContent).toContain('broken_generator');
    expect(reportContent).toContain('download_problem');
    expect(reportContent).toContain('dynamic_qr_issue');
    expect(reportContent).toContain('incorrect_redirect');
    expect(reportContent).toContain('payment_issue');
    expect(reportContent).toContain('privacy_concern');
    expect(reportContent).toContain('security_concern');
    expect(reportContent).toContain('support@freeqrcode-generator.com');
  });

  it('verifies Footer contains maintainer identity, social links, and DENSO WAVE disclaimer', () => {
    const footerContent = fs.readFileSync(
      path.join(rootDir, 'src/components/layout/Footer.astro'),
      'utf-8'
    );

    expect(footerContent).toContain('Firoz Khan');
    expect(footerContent).toContain('Full Stack Developer');
    expect(footerContent).toContain('FK Digital Media');
    expect(footerContent).toContain('https://www.linkedin.com/in/firoz-khan-1153358a/');
    expect(footerContent).toContain('https://github.com/fkdigitalmedia');
    expect(footerContent).toContain('https://www.instagram.com/rtibyfiroz/');
    expect(footerContent).toContain('/about/firoz-khan');
    expect(footerContent).toContain('/report-problem');
    expect(footerContent).toContain('QR Code is a registered trademark of DENSO WAVE INCORPORATED');
  });

  it('verifies BaseLayout includes creator (Person) and publisher (Organization)', () => {
    const layoutContent = fs.readFileSync(
      path.join(rootDir, 'src/layouts/BaseLayout.astro'),
      'utf-8'
    );

    expect(layoutContent).toContain("name: 'Firoz Khan'");
    expect(layoutContent).toContain("jobTitle: 'Full Stack Developer'");
    expect(layoutContent).toContain("name: 'FK Digital Media'");
    expect(layoutContent).toContain('creator: creatorJsonLd');
    expect(layoutContent).toContain('publisher: publisherJsonLd');
  });

  it('verifies guide articles include author Person schema and MaintainerCard', () => {
    const guides = [
      'src/components/guides/ArticleWhatIsAQRCode.astro',
      'src/components/guides/ArticleStaticVsDynamicQR.astro',
      'src/components/guides/ArticleWiFiQRCode.astro',
      'src/components/guides/ArticleVCardQRCode.astro',
      'src/components/guides/ArticleRestaurantQRCode.astro',
    ];

    for (const guidePath of guides) {
      const content = fs.readFileSync(path.join(rootDir, guidePath), 'utf-8');
      expect(content).toContain("name: 'Firoz Khan'");
      expect(content).toContain("jobTitle: 'Full Stack Developer'");
      expect(content).toContain('MaintainerCard');
    }
  });

  it('verifies no prohibited superlative claims remain in i18n content or index', () => {
    const filesToCheck = [
      'src/lib/i18n/content/home.ts',
      'src/lib/i18n/content/upi.ts',
      'src/lib/i18n/content/social.ts',
      'src/lib/i18n/content/menu.ts',
      'src/pages/index.astro',
      'src/pages/about.astro',
    ];

    for (const file of filesToCheck) {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf-8').toLowerCase();
      expect(content).not.toContain('flawless');
      expect(content).not.toContain('enterprise-grade');
      expect(content).not.toContain('sub-millisecond');
    }
  });
});
