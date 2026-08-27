import { describe, it, expect } from 'vitest';
import { SUPPORTED_LOCALES, type Locale } from '../src/lib/i18n/config';
import { getCalculatorTranslations } from '../src/lib/i18n/calculator';
import { getSizeCalculatorPageData, getPrintCalculatorPageData } from '../src/lib/i18n/content/calculatorPages';
import { getLocalizedPath } from '../src/lib/i18n/routes';

describe('Calculator Multilingual & i18n System', () => {
  it('provides complete UI translations for size calculator in all 7 locales', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const t = getCalculatorTranslations(locale).size;
      expect(t.title).toBeTruthy();
      expect(t.inputsTitle).toBeTruthy();
      expect(t.distanceLabel).toBeTruthy();
      expect(t.recommendedSize).toBeTruthy();
      expect(t.presets.businessCard).toBeTruthy();
      expect(t.contentTypes.shortUrl).toBeTruthy();
      expect(t.units.m).toBeTruthy();
      expect(t.units.cm).toBeTruthy();
    }
  });

  it('provides complete UI translations for print calculator in all 7 locales', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const t = getCalculatorTranslations(locale).print;
      expect(t.title).toBeTruthy();
      expect(t.inputsTitle).toBeTruthy();
      expect(t.widthLabel).toBeTruthy();
      expect(t.heightLabel).toBeTruthy();
      expect(t.resultsTitle).toBeTruthy();
      expect(t.presets.businessCard).toBeTruthy();
      expect(t.checklist.contrast).toBeTruthy();
    }
  });

  it('provides rich localized page metadata and FAQs for size calculator in all 7 locales', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const data = getSizeCalculatorPageData(locale);
      expect(data.h1).toBeTruthy();
      expect(data.title).toBeTruthy();
      expect(data.description).toBeTruthy();
      expect(data.overviewParagraphs.length).toBeGreaterThan(0);
      expect(data.tableHeaders.length).toBe(4);
      expect(data.faqs.length).toBeGreaterThanOrEqual(5);
      data.faqs.forEach((faq) => {
        expect(faq.question).toBeTruthy();
        expect(faq.answer).toBeTruthy();
      });
    }
  });

  it('provides rich localized page metadata and FAQs for print calculator in all 7 locales', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const data = getPrintCalculatorPageData(locale);
      expect(data.h1).toBeTruthy();
      expect(data.title).toBeTruthy();
      expect(data.description).toBeTruthy();
      expect(data.overviewParagraphs.length).toBeGreaterThan(0);
      expect(data.tableHeaders.length).toBe(4);
      expect(data.faqs.length).toBeGreaterThanOrEqual(5);
      data.faqs.forEach((faq) => {
        expect(faq.question).toBeTruthy();
        expect(faq.answer).toBeTruthy();
      });
    }
  });

  it('generates correct localized URLs for calculator routes', () => {
    expect(getLocalizedPath('/qr-code-size-calculator', 'en')).toBe('/qr-code-size-calculator');
    expect(getLocalizedPath('/qr-code-size-calculator', 'es')).toBe('/es/qr-code-size-calculator');
    expect(getLocalizedPath('/qr-code-size-calculator', 'de')).toBe('/de/qr-code-size-calculator');
    expect(getLocalizedPath('/qr-code-size-calculator', 'hi')).toBe('/hi/qr-code-size-calculator');

    expect(getLocalizedPath('/qr-code-print-size-calculator', 'en')).toBe('/qr-code-print-size-calculator');
    expect(getLocalizedPath('/qr-code-print-size-calculator', 'fr')).toBe('/fr/qr-code-print-size-calculator');
    expect(getLocalizedPath('/qr-code-print-size-calculator', 'pt')).toBe('/pt/qr-code-print-size-calculator');
    expect(getLocalizedPath('/qr-code-print-size-calculator', 'it')).toBe('/it/qr-code-print-size-calculator');
  });
});
