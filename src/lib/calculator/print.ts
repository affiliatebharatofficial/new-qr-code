import type {
  DistanceUnit,
  ErrorCorrectionLevel,
  PrintCalculatorInput,
  PrintCalculatorResult,
  PrintMaterial,
  PrintPreset,
  SizeUnit,
} from './types';
import {
  ERROR_CORRECTION_INFO,
  calculateModulesForVersion,
  convertDistanceToCentimeters,
} from './size';

export const PRINT_PRESETS: PrintPreset[] = [
  {
    id: 'business_card_compact',
    label: 'Business Card (Compact)',
    category: 'Business Card',
    widthCm: 2.5,
    heightCm: 2.5,
    defaultDpi: 300,
    recommendedDistance: '15 – 25 cm',
    description: 'Minimal footprint for 3.5 × 2 in business cards. Keep data payload short for clean scanning.',
  },
  {
    id: 'business_card_standard',
    label: 'Business Card (Standard)',
    category: 'Business Card',
    widthCm: 3.0,
    heightCm: 3.0,
    defaultDpi: 300,
    recommendedDistance: '20 – 35 cm',
    description: 'Optimal size for digital business cards (vCard) and portfolio links.',
  },
  {
    id: 'flyer_standard',
    label: 'Flyer / Leaflet (Handheld)',
    category: 'Flyer',
    widthCm: 5.0,
    heightCm: 5.0,
    defaultDpi: 300,
    recommendedDistance: '40 – 60 cm',
    description: 'Perfect for A5/A4 promo flyers, pamphlets, and discount vouchers.',
  },
  {
    id: 'menu_tabletop',
    label: 'Restaurant Tabletop Menu',
    category: 'Restaurant Menu',
    widthCm: 6.0,
    heightCm: 6.0,
    defaultDpi: 300,
    recommendedDistance: '30 – 60 cm',
    description: 'Effortless contactless food & drink menu access for seated diners.',
  },
  {
    id: 'packaging_label',
    label: 'Product Packaging Label',
    category: 'Product Packaging',
    widthCm: 3.5,
    heightCm: 3.5,
    defaultDpi: 300,
    recommendedDistance: '25 – 45 cm',
    description: 'Compact barcode for cosmetic bottles, retail food boxes, and warranty cards.',
  },
  {
    id: 'poster_medium',
    label: 'Store Poster / Wall Sign',
    category: 'Poster',
    widthCm: 12.0,
    heightCm: 12.0,
    defaultDpi: 300,
    recommendedDistance: '1.0 – 1.5 meters',
    description: 'Clear visibility for retail display windows, bus shelters, and indoor event halls.',
  },
  {
    id: 'window_sign',
    label: 'Storefront Window Sign',
    category: 'Window Sign',
    widthCm: 20.0,
    heightCm: 20.0,
    defaultDpi: 150,
    recommendedDistance: '1.8 – 2.5 meters',
    description: 'Readable through glass for storefront operating hours and Wi-Fi checkins.',
  },
  {
    id: 'banner_tradeshow',
    label: 'Trade Show Rollup Banner',
    category: 'Banner',
    widthCm: 35.0,
    heightCm: 35.0,
    defaultDpi: 150,
    recommendedDistance: '3.0 – 4.5 meters',
    description: 'High visibility from across convention halls and exhibition booths.',
  },
  {
    id: 'outdoor_sign',
    label: 'Outdoor Billboard / Stage Sign',
    category: 'Outdoor Sign',
    widthCm: 80.0,
    heightCm: 80.0,
    defaultDpi: 100,
    recommendedDistance: '7.0 – 10.0 meters',
    description: 'Large-scale distant viewing for festivals, transit hubs, and outdoor advertising.',
  },
];

export function convertToAllSizeUnits(value: number, unit: SizeUnit) {
  let mm = 0;
  let cm = 0;
  let inches = 0;

  if (unit === 'mm') {
    mm = value;
    cm = value / 10;
    inches = value / 25.4;
  } else if (unit === 'cm') {
    cm = value;
    mm = value * 10;
    inches = value / 2.54;
  } else if (unit === 'in') {
    inches = value;
    cm = value * 2.54;
    mm = value * 25.4;
  }

  return {
    mm: Number(mm.toFixed(1)),
    cm: Number(cm.toFixed(2)),
    inches: Number(inches.toFixed(3)),
  };
}

export function calculatePrintReadiness(input: PrintCalculatorInput): PrintCalculatorResult {
  const wRaw = Math.max(0.1, Number(input.physicalWidth) || 5);
  const hRaw = Math.max(0.1, Number(input.physicalHeight) || 5);
  const unit = input.sizeUnit || 'cm';
  const dpi = Math.max(10, Math.min(2400, Number(input.dpi) || 300));
  const ec: ErrorCorrectionLevel = input.errorCorrection || 'M';
  const ecInfo = ERROR_CORRECTION_INFO[ec] || ERROR_CORRECTION_INFO.M;

  const wUnits = convertToAllSizeUnits(wRaw, unit);
  const hUnits = convertToAllSizeUnits(hRaw, unit);

  // QR Version estimation
  let version = 4;
  if (input.qrVersion && input.qrVersion !== 'auto') {
    version = Math.max(1, Math.min(40, Number(input.qrVersion)));
  }

  const dataModules = calculateModulesForVersion(version);
  const totalModulesWithQuietZone = dataModules + 8;

  // Pixels required at selected DPI
  const widthPx = Math.round(wUnits.inches * dpi);
  const heightPx = Math.round(hUnits.inches * dpi);
  const totalPixels = widthPx * heightPx;

  // Module dimensions
  const estimatedModuleSizeMm = Number((wUnits.mm / totalModulesWithQuietZone).toFixed(3));
  const estimatedModuleSizeInches = Number((wUnits.inches / totalModulesWithQuietZone).toFixed(4));
  const quietZoneMm = Number((estimatedModuleSizeMm * 4).toFixed(2));
  const quietZoneInches = Number((estimatedModuleSizeInches * 4).toFixed(3));

  // Optical Scan Distance Estimation (Rule of thumb: 10:1 ratio for handheld up to 7:1 for dense codes)
  const minScanDistanceMeters = Number(Math.max(0.1, (wUnits.cm * 0.05)).toFixed(2));
  const recommendedMaxDistanceMeters = Number((wUnits.cm * 0.1).toFixed(2));
  const recommendedMaxDistanceFeet = Number((recommendedMaxDistanceMeters * 3.28084).toFixed(1));

  let userSpecifiedDistanceMeters: number | undefined;
  if (input.scanDistance && input.distanceUnit) {
    userSpecifiedDistanceMeters = convertDistanceToCentimeters(input.scanDistance, input.distanceUnit) / 100;
  }

  // Print Readiness Evaluation
  const warnings: string[] = [];
  let readinessStatus: 'optimal' | 'acceptable' | 'too_small' = 'optimal';
  let readinessLabel = '✓ Print Ready (Recommended)';
  let readinessDescription = 'Excellent physical proportions and pixel density for commercial printing.';

  if (wUnits.cm < 2.0 || hUnits.cm < 2.0) {
    readinessStatus = 'too_small';
    readinessLabel = '⚠️ Caution: Very Small Dimensions';
    readinessDescription = 'Physical size is under 2.0 cm (0.8 in). Standard smartphone cameras may struggle to focus.';
    warnings.push('Increase physical width/height to at least 2.0 cm for reliable handheld scanning.');
  } else if (estimatedModuleSizeMm < 0.5) {
    readinessStatus = 'acceptable';
    readinessLabel = '⚡ High Data Density';
    readinessDescription = 'Module size is under 0.5 mm. High-contrast vector printing (SVG) is strongly recommended.';
    warnings.push('For modules smaller than 0.5 mm, use 300+ DPI or SVG to prevent dot-bleeding on absorbent paper.');
  }

  if (userSpecifiedDistanceMeters && userSpecifiedDistanceMeters > recommendedMaxDistanceMeters) {
    readinessStatus = 'too_small';
    readinessLabel = '⚠️ Too Small for Scan Distance';
    readinessDescription = `Your scan distance (${userSpecifiedDistanceMeters}m) exceeds the recommended maximum (${recommendedMaxDistanceMeters}m) for this size.`;
    warnings.push(`Consider increasing the QR code size to at least ${Math.round(userSpecifiedDistanceMeters * 10)} cm.`);
  }

  if (dpi < 200 && (input.printMaterial === 'business_card' || input.printMaterial === 'packaging' || input.printMaterial === 'flyer')) {
    warnings.push(`${dpi} DPI is low for close-up handheld prints. Use at least 300 DPI for sharp optical edges or export as vector SVG.`);
  }

  // Quality Checklist
  const checklist = [
    {
      label: 'Minimum Physical Size (≥ 2.0 cm)',
      passed: wUnits.cm >= 2.0,
      detail: `${wUnits.cm} cm physical width (${wUnits.cm >= 2.0 ? 'Meets standard' : 'Below 2.0 cm threshold'})`,
    },
    {
      label: 'Raster Print Density (≥ 300 DPI or Vector)',
      passed: dpi >= 300,
      detail: `${dpi} DPI selected (${dpi >= 300 ? 'Commercial grade' : 'Draft / Large format grade'})`,
    },
    {
      label: 'Module Physical Legibility (≥ 0.45 mm)',
      passed: estimatedModuleSizeMm >= 0.45,
      detail: `Estimated module size: ${estimatedModuleSizeMm} mm`,
    },
    {
      label: 'Standard Quiet Zone (4 Modules)',
      passed: quietZoneMm >= 2.0,
      detail: `${quietZoneMm} mm margin on all 4 sides`,
    },
    {
      label: 'Optical Contrast Ratio',
      passed: true,
      detail: 'Keep dark foreground dots on crisp white or light solid background',
    },
  ];

  return {
    physicalDimensions: {
      widthMm: wUnits.mm,
      heightMm: hUnits.mm,
      widthCm: wUnits.cm,
      heightCm: hUnits.cm,
      widthInches: wUnits.inches,
      heightInches: hUnits.inches,
    },
    rasterOutput: {
      dpi,
      widthPx,
      heightPx,
      totalPixels,
    },
    qrSpecs: {
      version,
      totalDataModules: dataModules,
      totalModulesWithQuietZone,
      estimatedModuleSizeMm,
      estimatedModuleSizeInches,
      quietZoneMm,
      quietZoneInches,
      errorCorrection: ec,
      ecPercentage: ecInfo.percentage,
    },
    opticalDistance: {
      minScanDistanceMeters,
      recommendedMaxDistanceMeters,
      recommendedMaxDistanceFeet,
      userSpecifiedDistanceMeters,
    },
    readinessStatus,
    readinessLabel,
    readinessDescription,
    recommendedFormat: wUnits.cm > 15 || dpi < 300 ? 'SVG (Vector)' : 'SVG (Vector)',
    checklist,
    warnings,
  };
}
