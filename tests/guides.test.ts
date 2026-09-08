import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Guides and Articles Suite', () => {
  const guideSlugs = [
    'what-is-a-qr-code',
    'static-vs-dynamic-qr',
    'how-to-create-a-wifi-qr-code',
    'how-to-create-a-vcard-qr-code',
    'how-to-use-qr-codes-for-restaurants',
  ];

  it('all 5 guide components exist and contain detailed content', () => {
    const componentsDir = path.resolve(__dirname, '../src/components/guides');
    expect(fs.existsSync(componentsDir)).toBe(true);

    const files = fs.readdirSync(componentsDir);
    expect(files.length).toBe(5);

    files.forEach((file) => {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
      // Each comprehensive article should be at least 5000 bytes
      expect(content.length).toBeGreaterThan(5000);
      expect(content).toContain('FAQPage');
      expect(content).toContain('Article');
      expect(content).toContain('BreadcrumbList');
    });
  });

  it('both /guides/<slug> and /<slug> page routes exist for all 5 guides', () => {
    const pagesDir = path.resolve(__dirname, '../src/pages');

    guideSlugs.forEach((slug) => {
      // Check /guides/<slug>/index.astro
      const subguidePath = path.join(pagesDir, 'guides', slug, 'index.astro');
      expect(fs.existsSync(subguidePath)).toBe(true);

      // Check root /<slug>.astro
      const rootGuidePath = path.join(pagesDir, `${slug}.astro`);
      expect(fs.existsSync(rootGuidePath)).toBe(true);
    });
  });

  it('multilingual [lang]/[...slug].astro supports guide routing without 404', () => {
    const langSlugPath = path.resolve(__dirname, '../src/pages/[lang]/[...slug].astro');
    const content = fs.readFileSync(langSlugPath, 'utf-8');

    expect(content).toContain('isGuideWhatIsAQRCode');
    expect(content).toContain('isGuideStaticVsDynamic');
    expect(content).toContain('isGuideWiFi');
    expect(content).toContain('isGuideVCard');
    expect(content).toContain('isGuideRestaurant');
  });
});
