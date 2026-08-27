import type { QRDesignOptions, ScannabilityWarning } from './types';

/**
 * Calculates WCAG relative luminance for a given hex color string.
 */
export function getLuminance(hex: string): number {
  let clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  if (clean.length !== 6) return 0;

  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  const a = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Calculates contrast ratio between two colors (1:1 to 21:1).
 */
export function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (lightest + 0.05) / (darkest + 0.05);
}

/**
 * Analyzes QR design options and alerts user if contrast, inverted colors,
 * quiet zone, or logo size might hinder scanner readability.
 */
export function checkScannability(options: QRDesignOptions): ScannabilityWarning[] {
  const warnings: ScannabilityWarning[] = [];

  const fg = options.colors.foreground;
  const bg = options.colors.isTransparent ? '#ffffff' : options.colors.background;

  const lumFg = getLuminance(fg);
  const lumBg = getLuminance(bg);

  // 1. Inverted QR Code Check (light dots on dark background)
  if (lumFg > lumBg) {
    warnings.push({
      level: 'warning',
      message: 'Inverted colors detected (light foreground on dark background). Some legacy hardware scanners may struggle.',
    });
  }

  // 2. Contrast Ratio Check
  const contrast = getContrastRatio(fg, bg);
  if (contrast < 3.0) {
    warnings.push({
      level: 'error',
      message: `Low contrast ratio (${contrast.toFixed(1)}:1). Scanners require at least 3.0:1 (recommended 4.5:1+) to reliably detect modules.`,
    });
  } else if (contrast < 4.5) {
    warnings.push({
      level: 'warning',
      message: `Moderate contrast (${contrast.toFixed(1)}:1). Consider increasing color difference for reliable outdoor scanning.`,
    });
  }

  // 3. Transparent Background Notice
  if (options.colors.isTransparent) {
    warnings.push({
      level: 'info',
      message: 'Transparent background active. Ensure the final printed or display surface provides adequate contrast behind dark dots.',
    });
  }

  // 4. Quiet Zone Check
  if (options.margin === 0) {
    warnings.push({
      level: 'warning',
      message: 'Quiet zone margin is set to 0. Maintain at least 4-10px border around the QR code so camera lenses can detect boundaries.',
    });
  }

  // 5. Logo size & Error Correction check
  if (options.logo?.src) {
    if (options.logo.sizeRatio > 0.35) {
      warnings.push({
        level: 'warning',
        message: 'Logo covers more than 35% of the QR area. Try reducing logo size to prevent scanning failures.',
      });
    }

    if (options.errorCorrection === 'L') {
      warnings.push({
        level: 'error',
        message: 'Low error correction (Level L, ~7%) with a logo. We recommend High (Level H, 30%) or Quartile (Q, 25%) when embedding logos.',
      });
    } else if (options.errorCorrection === 'M' && options.logo.sizeRatio > 0.25) {
      warnings.push({
        level: 'warning',
        message: 'Consider using Error Correction "H" (High 30%) when using large logos.',
      });
    }
  }

  return warnings;
}
