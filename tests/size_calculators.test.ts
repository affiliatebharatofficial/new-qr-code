import { describe, it, expect } from 'vitest';
import {
  calculateQRSize,
  convertDistance,
  convertDistanceToCentimeters,
  calculateModulesForVersion,
  calculatePixels,
  SCAN_DISTANCE_REFERENCE_TABLE,
} from '../src/lib/calculator/size';
import {
  calculatePrintReadiness,
  convertToAllSizeUnits,
  PRINT_PRESETS,
} from '../src/lib/calculator/print';

describe('QR Code Size Calculator Engine', () => {
  describe('Unit Conversions', () => {
    it('converts meters to centimeters and inches accurately', () => {
      const conv = convertDistance(1, 'm');
      expect(conv.centimeters).toBe(100);
      expect(conv.meters).toBe(1);
      expect(conv.inches).toBeCloseTo(39.37, 1);
      expect(conv.feet).toBeCloseTo(3.28, 1);
    });

    it('converts feet to centimeters and inches', () => {
      const conv = convertDistance(2, 'ft');
      expect(conv.centimeters).toBeCloseTo(60.96, 1);
      expect(conv.inches).toBe(24);
    });

    it('converts inches to centimeters', () => {
      const conv = convertDistance(10, 'in');
      expect(conv.centimeters).toBe(25.4);
    });

    it('handles zero or negative inputs safely without NaN', () => {
      const conv = convertDistance(0, 'm');
      expect(conv.centimeters).toBe(0);
      expect(convertDistanceToCentimeters(-5, 'm')).toBe(0);
    });
  });

  describe('Module & Version Calculation', () => {
    it('calculates module count for QR versions correctly (4*V + 17)', () => {
      expect(calculateModulesForVersion(1)).toBe(21);
      expect(calculateModulesForVersion(2)).toBe(25);
      expect(calculateModulesForVersion(3)).toBe(29);
      expect(calculateModulesForVersion(10)).toBe(57);
      expect(calculateModulesForVersion(40)).toBe(177);
    });

    it('clamps version numbers between 1 and 40', () => {
      expect(calculateModulesForVersion(0)).toBe(21);
      expect(calculateModulesForVersion(100)).toBe(177);
    });
  });

  describe('Raster Pixel Math', () => {
    it('calculates pixels from cm at specified DPI (10 cm at 300 DPI ≈ 1181 px)', () => {
      const px = calculatePixels(10, 300);
      expect(px).toBe(1181);
    });

    it('calculates pixels at 72 DPI (10 cm at 72 DPI ≈ 283 px)', () => {
      const px = calculatePixels(10, 72);
      expect(px).toBe(283);
    });

    it('calculates pixels at 600 DPI (10 cm at 600 DPI ≈ 2362 px)', () => {
      const px = calculatePixels(10, 600);
      expect(px).toBe(2362);
    });
  });

  describe('calculateQRSize Core Logic', () => {
    it('calculates recommended size for 1 meter distance URL', () => {
      const result = calculateQRSize({
        scanDistance: 1,
        distanceUnit: 'm',
        contentType: 'url',
        errorCorrection: 'M',
        dpi: 300,
      });

      expect(result.scanDistance.meters).toBe(1);
      expect(result.recommendedSize.widthCm).toBeGreaterThanOrEqual(10);
      expect(result.rasterResolution.widthPx).toBeGreaterThanOrEqual(1181);
      expect(result.qrSpecs.quietZoneWidthMm).toBeGreaterThan(0);
      expect(result.allDpiResolutions.length).toBe(5);
    });

    it('enforces minimum 2.0 cm safety threshold for close range scans', () => {
      const result = calculateQRSize({
        scanDistance: 10,
        distanceUnit: 'cm',
        contentType: 'url',
        errorCorrection: 'L',
        dpi: 300,
      });

      expect(result.recommendedSize.widthCm).toBeGreaterThanOrEqual(2.0);
      expect(result.warnings.length).toBeGreaterThan(0);
    });

    it('adjusts module and quiet zone specs for Version 10 vCard', () => {
      const result = calculateQRSize({
        scanDistance: 50,
        distanceUnit: 'cm',
        contentType: 'vcard',
        errorCorrection: 'H',
        dpi: 300,
      });

      expect(result.qrSpecs.version).toBe(10);
      expect(result.qrSpecs.totalDataModules).toBe(57);
      expect(result.qrSpecs.totalModulesWithQuietZone).toBe(65);
    });
  });
});

describe('QR Code Print Size Calculator Engine', () => {
  describe('Print Readiness & Dimensions', () => {
    it('calculates print dimensions and 300 DPI pixels for 10x10 cm QR', () => {
      const result = calculatePrintReadiness({
        physicalWidth: 10,
        physicalHeight: 10,
        sizeUnit: 'cm',
        dpi: 300,
        errorCorrection: 'M',
        printMaterial: 'poster',
      });

      expect(result.physicalDimensions.widthCm).toBe(10);
      expect(result.physicalDimensions.widthMm).toBe(100);
      expect(result.rasterOutput.widthPx).toBe(1181);
      expect(result.rasterOutput.heightPx).toBe(1181);
      expect(result.readinessStatus).toBe('optimal');
      expect(result.checklist.every((c) => c.passed)).toBe(true);
    });

    it('flags warnings when physical size is too small (< 2.0 cm)', () => {
      const result = calculatePrintReadiness({
        physicalWidth: 1.2,
        physicalHeight: 1.2,
        sizeUnit: 'cm',
        dpi: 300,
        errorCorrection: 'H',
        printMaterial: 'business_card',
      });

      expect(result.readinessStatus).toBe('too_small');
      expect(result.warnings.some((w) => w.includes('2.0 cm'))).toBe(true);
    });

    it('calculates optical distance limits correctly (10 cm QR allows ~1 meter scan)', () => {
      const result = calculatePrintReadiness({
        physicalWidth: 10,
        physicalHeight: 10,
        sizeUnit: 'cm',
        dpi: 300,
        errorCorrection: 'M',
        printMaterial: 'poster',
      });

      expect(result.opticalDistance.recommendedMaxDistanceMeters).toBe(1.0);
    });

    it('provides standard print presets', () => {
      expect(PRINT_PRESETS.length).toBeGreaterThanOrEqual(8);
      const bizCard = PRINT_PRESETS.find((p) => p.id === 'business_card_standard');
      expect(bizCard).toBeDefined();
      expect(bizCard?.widthCm).toBe(3.0);
    });
  });

  describe('Unit Conversions for Print', () => {
    it('converts inches to mm and cm correctly', () => {
      const res = convertToAllSizeUnits(2, 'in');
      expect(res.cm).toBeCloseTo(5.08, 2);
      expect(res.mm).toBeCloseTo(50.8, 1);
      expect(res.inches).toBe(2);
    });
  });
});
