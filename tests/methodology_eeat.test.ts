import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('QR Methodology & Source Documentation (Step 2)', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('verifies /methodology page structure and technical accuracy', () => {
    const methodologyContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/methodology.astro'),
      'utf-8'
    );

    // Schema
    expect(methodologyContent).toContain("'@type': 'TechArticle'");
    expect(methodologyContent).toContain("'@type': 'BreadcrumbList'");

    // Actual libraries & versions
    expect(methodologyContent).toContain('qr-code-styling');
    expect(methodologyContent).toContain('v1.9.2');
    expect(methodologyContent).toContain('qrcode-generator');
    expect(methodologyContent).toContain('v1.5.2');

    // Reed-Solomon levels L, M, Q, H
    expect(methodologyContent).toContain('Level L (Low)');
    expect(methodologyContent).toContain('~7% recovery');
    expect(methodologyContent).toContain('Level M (Medium — Default)');
    expect(methodologyContent).toContain('~15% recovery');
    expect(methodologyContent).toContain('Level Q (Quartile)');
    expect(methodologyContent).toContain('~25% recovery');
    expect(methodologyContent).toContain('Level H (High)');
    expect(methodologyContent).toContain('~30% recovery');

    // Quiet zone & Contrast
    expect(methodologyContent).toContain('4 modules wide');
    expect(methodologyContent).toContain('WCAG');
    expect(methodologyContent).toContain('Contrast Ratio');

    // Static vs Dynamic & Logo embedding
    expect(methodologyContent).toContain('Static QR Codes');
    expect(methodologyContent).toContain('Dynamic QR Codes');
    expect(methodologyContent).toContain('center logo');

    // Standards without claiming certification
    expect(methodologyContent).toContain('ISO/IEC 18004');
    expect(methodologyContent).not.toContain('ISO certified');
    expect(methodologyContent).not.toContain('official QR Code generator');
  });

  it('verifies /data-sources page documents libraries, versions, and standards', () => {
    const dataSourcesContent = fs.readFileSync(
      path.join(rootDir, 'src/pages/data-sources.astro'),
      'utf-8'
    );

    // Libraries & licenses
    expect(dataSourcesContent).toContain('qr-code-styling');
    expect(dataSourcesContent).toContain('1.9.2');
    expect(dataSourcesContent).toContain('qrcode-generator');
    expect(dataSourcesContent).toContain('1.5.2');
    expect(dataSourcesContent).toContain('MIT License');
    expect(dataSourcesContent).toContain('Denys Kozak');
    expect(dataSourcesContent).toContain('Kazuhiko Arase');

    // Infrastructure
    expect(dataSourcesContent).toContain('Cloudflare Workers');
    expect(dataSourcesContent).toContain('Cloudflare D1');
    expect(dataSourcesContent).toContain('astro');

    // Standards referenced
    expect(dataSourcesContent).toContain('ISO/IEC 18004');
    expect(dataSourcesContent).toContain('WCAG 2.1');
    expect(dataSourcesContent).toContain('RFC 6350');
    expect(dataSourcesContent).toContain('NPCI');

    // Nominative fair use disclaimer
    expect(dataSourcesContent).toContain('Nominative Fair Use');
    expect(dataSourcesContent).toContain('DENSO WAVE INCORPORATED');
  });

  it('verifies no unsubstantiated superlative claims remain in rewritten files', () => {
    const filesToCheck = [
      'src/lib/i18n/content/wifi.ts',
      'src/lib/i18n/content/whatsapp.ts',
      'src/lib/i18n/content/social.ts',
      'src/lib/i18n/content/vcard.ts',
      'src/lib/i18n/content/zelle.ts',
      'src/lib/i18n/content/paypal.ts',
      'src/lib/i18n/content/businessCard.ts',
      'src/lib/i18n/content/app.ts',
      'src/lib/i18n/content/calculatorPages.ts',
      'src/pages/product-qr-code/index.astro',
      'src/pages/contact-qr-code/index.astro',
      'src/pages/qr-code-generator/index.astro',
      'src/pages/wifi-qr-code-generator/index.astro',
      'src/pages/vcard-qr-code-generator/index.astro',
    ];

    for (const file of filesToCheck) {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
      expect(content).not.toContain('guarantee the fastest');
      expect(content).not.toContain('guarantee razor-sharp');
      expect(content).not.toContain('guarantee fast smartphone autofocus');
      expect(content).not.toContain('guarantees seamless one-tap dialing');
      expect(content).not.toContain('ISO certified');
      expect(content).not.toContain('official QR Code generator');
    }
  });
});
