import { describe, it, expect } from 'vitest';
import { getLuminance, getContrastRatio, checkScannability } from '../src/lib/qr/contrast';
import type { QRDesignOptions } from '../src/lib/qr/types';

describe('Contrast & Scannability Analyzer', () => {
  it('should calculate pure black and white luminance and contrast correctly', () => {
    const lumBlack = getLuminance('#000000');
    const lumWhite = getLuminance('#ffffff');

    expect(lumBlack).toBeCloseTo(0, 3);
    expect(lumWhite).toBeCloseTo(1, 3);

    const contrast = getContrastRatio('#000000', '#ffffff');
    expect(contrast).toBeCloseTo(21, 0.5);
  });

  it('should flag low contrast designs with an error warning', () => {
    const lowContrastDesign: QRDesignOptions = {
      type: 'url',
      payload: 'https://example.com',
      size: 512,
      margin: 10,
      errorCorrection: 'M',
      dotType: 'square',
      eyeFrameType: 'square',
      eyeDotType: 'square',
      colors: {
        foreground: '#cccccc', // light gray
        background: '#ffffff', // white
        isTransparent: false,
        useGradient: false,
      },
      logo: {
        sizeRatio: 0.2,
        margin: 4,
        hideBackgroundDots: true,
        backgroundBadge: false,
        badgeColor: '#ffffff',
        badgeRadius: 8,
      },
    };

    const warnings = checkScannability(lowContrastDesign);
    expect(warnings.some((w) => w.level === 'error' && w.message.includes('Low contrast'))).toBe(true);
  });

  it('should flag inverted color combinations (light on dark)', () => {
    const invertedDesign: QRDesignOptions = {
      type: 'url',
      payload: 'https://example.com',
      size: 512,
      margin: 10,
      errorCorrection: 'M',
      dotType: 'square',
      eyeFrameType: 'square',
      eyeDotType: 'square',
      colors: {
        foreground: '#ffffff', // white dots
        background: '#000000', // black bg
        isTransparent: false,
        useGradient: false,
      },
      logo: {
        sizeRatio: 0.2,
        margin: 4,
        hideBackgroundDots: true,
        backgroundBadge: false,
        badgeColor: '#ffffff',
        badgeRadius: 8,
      },
    };

    const warnings = checkScannability(invertedDesign);
    expect(warnings.some((w) => w.level === 'warning' && w.message.includes('Inverted colors'))).toBe(true);
  });

  it('should recommend High error correction when embedding a large logo', () => {
    const logoDesign: QRDesignOptions = {
      type: 'url',
      payload: 'https://example.com',
      size: 512,
      margin: 10,
      errorCorrection: 'L', // Low
      dotType: 'square',
      eyeFrameType: 'square',
      eyeDotType: 'square',
      colors: {
        foreground: '#000000',
        background: '#ffffff',
        isTransparent: false,
        useGradient: false,
      },
      logo: {
        src: 'data:image/png;base64,mock',
        sizeRatio: 0.3,
        margin: 4,
        hideBackgroundDots: true,
        backgroundBadge: false,
        badgeColor: '#ffffff',
        badgeRadius: 8,
      },
    };

    const warnings = checkScannability(logoDesign);
    expect(warnings.some((w) => w.level === 'error' && w.message.includes('Low error correction'))).toBe(true);
  });

  it('should warn when transparent background is enabled without a contrasting surface guarantee', () => {
    const transparentDesign: QRDesignOptions = {
      type: 'url',
      payload: 'https://example.com',
      size: 512,
      margin: 10,
      errorCorrection: 'M',
      dotType: 'square',
      eyeFrameType: 'square',
      eyeDotType: 'square',
      colors: {
        foreground: '#000000',
        background: '#ffffff',
        isTransparent: true,
        useGradient: false,
      },
      logo: {
        sizeRatio: 0.2,
        margin: 4,
        hideBackgroundDots: true,
        backgroundBadge: false,
        badgeColor: '#ffffff',
        badgeRadius: 8,
      },
    };

    const warnings = checkScannability(transparentDesign);
    expect(warnings.some((w) => w.level === 'info' && w.message.includes('Transparent background'))).toBe(true);
  });

  it('should warn if quiet zone margin is removed completely', () => {
    const zeroMarginDesign: QRDesignOptions = {
      type: 'url',
      payload: 'https://example.com',
      size: 512,
      margin: 0,
      errorCorrection: 'M',
      dotType: 'square',
      eyeFrameType: 'square',
      eyeDotType: 'square',
      colors: {
        foreground: '#000000',
        background: '#ffffff',
        isTransparent: false,
        useGradient: false,
      },
      logo: {
        sizeRatio: 0.2,
        margin: 4,
        hideBackgroundDots: true,
        backgroundBadge: false,
        badgeColor: '#ffffff',
        badgeRadius: 8,
      },
    };

    const warnings = checkScannability(zeroMarginDesign);
    expect(warnings.some((w) => w.level === 'warning' && w.message.includes('Quiet zone margin'))).toBe(true);
  });
});
