import type {
  DistanceUnit,
  ErrorCorrectionLevel,
  QRContentType,
  SizeCalculatorInput,
  SizeCalculatorResult,
} from './types';

export const ERROR_CORRECTION_INFO: Record<ErrorCorrectionLevel, { percentage: number; multiplier: number; label: string }> = {
  L: { percentage: 7, multiplier: 1.0, label: 'Low (~7% recovery)' },
  M: { percentage: 15, multiplier: 1.05, label: 'Medium (~15% recovery, standard)' },
  Q: { percentage: 25, multiplier: 1.15, label: 'Quartile (~25% recovery)' },
  H: { percentage: 30, multiplier: 1.25, label: 'High (~30% recovery, best for logo embedding)' },
};

export const CONTENT_TYPE_DEFAULT_VERSIONS: Record<QRContentType, number> = {
  phone: 2, // 25x25
  url: 3, // 29x29
  sms: 3, // 29x29
  text: 4, // 33x33
  email: 4, // 33x33
  whatsapp: 4, // 33x33
  upi: 4, // 33x33
  location: 4, // 33x33
  social: 4, // 33x33
  product: 4, // 33x33
  review: 4, // 33x33
  wifi: 5, // 37x37
  event: 7, // 45x45
  vcard: 10, // 57x57
  other: 4, // 33x33
};

export function convertDistanceToCentimeters(value: number, unit: DistanceUnit): number {
  if (value <= 0 || isNaN(value)) return 0;
  switch (unit) {
    case 'cm':
      return value;
    case 'm':
      return value * 100;
    case 'in':
      return value * 2.54;
    case 'ft':
      return value * 30.48;
    default:
      return value;
  }
}

export function convertDistance(value: number, fromUnit: DistanceUnit) {
  const cm = convertDistanceToCentimeters(value, fromUnit);
  return {
    value,
    unit: fromUnit,
    centimeters: Number(cm.toFixed(2)),
    meters: Number((cm / 100).toFixed(3)),
    inches: Number((cm / 2.54).toFixed(2)),
    feet: Number((cm / 30.48).toFixed(2)),
  };
}

export function calculateModulesForVersion(version: number): number {
  const safeVersion = Math.max(1, Math.min(40, Math.round(version)));
  return 4 * safeVersion + 17;
}

export function calculatePixels(sizeInCm: number, dpi: number): number {
  const inches = sizeInCm / 2.54;
  return Math.round(inches * dpi);
}

export function calculateQRSize(input: SizeCalculatorInput): SizeCalculatorResult {
  const rawDist = Math.max(0.01, Number(input.scanDistance) || 1);
  const dist = convertDistance(rawDist, input.distanceUnit || 'm');
  const ec = input.errorCorrection || 'M';
  const ecInfo = ERROR_CORRECTION_INFO[ec] || ERROR_CORRECTION_INFO.M;
  const dpi = Math.max(10, Math.min(2400, Number(input.dpi) || 300));

  // Determine QR version
  let version = 3;
  if (input.qrVersion && input.qrVersion !== 'auto') {
    version = Math.max(1, Math.min(40, Number(input.qrVersion)));
  } else {
    version = CONTENT_TYPE_DEFAULT_VERSIONS[input.contentType] || 3;
  }

  const dataModules = calculateModulesForVersion(version);
  const totalModulesWithQuietZone = dataModules + 8; // Standard 4 modules on each side

  // Practical Sizing Model (considering distance, data density factor, error correction)
  // Distance-to-size ratio: baseline 10:1 down to 6:1 for complex/high-EC codes
  const densityMultiplier = 1 + (dataModules - 21) * 0.005;
  const combinedRatio = 10 / (densityMultiplier * ecInfo.multiplier);
  const effectiveRatio = Math.max(5.0, Math.min(10.0, combinedRatio));

  // Raw recommended size in cm
  const rawRecommendedCm = dist.centimeters / effectiveRatio;

  // Minimum safe physical threshold for handheld cameras is 2.0 cm (0.8 in)
  const finalWidthCm = Number(Math.max(2.0, rawRecommendedCm).toFixed(1));
  const finalHeightCm = finalWidthCm;

  const widthMm = Number((finalWidthCm * 10).toFixed(1));
  const heightMm = widthMm;
  const widthInches = Number((finalWidthCm / 2.54).toFixed(2));
  const heightInches = widthInches;

  // Module dimensions
  const estimatedModuleSizeMm = Number((widthMm / totalModulesWithQuietZone).toFixed(3));
  const estimatedModuleSizeInches = Number((widthInches / totalModulesWithQuietZone).toFixed(4));
  const quietZoneWidthMm = Number((estimatedModuleSizeMm * 4).toFixed(2));
  const quietZoneWidthInches = Number((estimatedModuleSizeInches * 4).toFixed(3));

  // Raster output
  const widthPx = calculatePixels(finalWidthCm, dpi);
  const heightPx = widthPx;

  const standardDpiList = [72, 96, 150, 300, 600];
  const allDpiResolutions = standardDpiList.map((d) => ({
    dpi: d,
    pixels: calculatePixels(finalWidthCm, d),
    useCase:
      d === 72
        ? 'Standard Web & Email'
        : d === 96
          ? 'Desktop UI / Windows Display'
          : d === 150
            ? 'Draft Printing / Inkjet Preview'
            : d === 300
              ? 'Commercial Print / Packaging (Recommended)'
              : 'Ultra High-Res Fine Art / Offset Lithography',
  }));

  // Warnings and contextual feedback
  const warnings: string[] = [];
  let status: 'recommended' | 'caution' | 'warning' = 'recommended';
  let statusMessage = 'Practical starting size for optimal mobile optical scanning.';

  if (rawRecommendedCm < 2.0 && dist.centimeters <= 30) {
    status = 'caution';
    warnings.push(
      'Your scan distance is very close. We have applied the minimum recommended baseline of 2.0 × 2.0 cm (0.8 × 0.8 in) so standard smartphone camera autofocus can lock onto the symbol cleanly.'
    );
  }

  if (estimatedModuleSizeMm < 0.45) {
    status = 'warning';
    warnings.push(
      `Estimated module size is ${estimatedModuleSizeMm} mm. For complex data or Version ${version} codes, consider increasing the physical size to ensure older phone lenses can distinguish individual modules.`
    );
  }

  if (ec === 'H' && version >= 6) {
    warnings.push(
      'High error correction (Level H) creates dense module grids. Ensure high optical contrast (dark foreground on crisp white background) and an unobstructed 4-module quiet zone.'
    );
  }

  if (dist.meters >= 5) {
    warnings.push(
      'Long-distance scanning detected (> 5 meters). Use vector SVG format for large-format signage or billboard printing to prevent pixelation blur.'
    );
  }

  return {
    scanDistance: dist,
    recommendedSize: {
      widthCm: finalWidthCm,
      heightCm: finalHeightCm,
      widthMm,
      heightMm,
      widthInches,
      heightInches,
    },
    qrSpecs: {
      version,
      totalDataModules: dataModules,
      totalModulesWithQuietZone,
      estimatedModuleSizeMm,
      estimatedModuleSizeInches,
      quietZoneWidthMm,
      quietZoneWidthInches,
      errorCorrection: ec,
      ecPercentage: ecInfo.percentage,
    },
    rasterResolution: {
      dpi,
      widthPx,
      heightPx,
    },
    allDpiResolutions,
    status,
    statusMessage,
    warnings,
  };
}

export const SCAN_DISTANCE_REFERENCE_TABLE = [
  { distance: '15 cm (6 in)', recommendedSize: '2.0 × 2.0 cm', useCase: 'Business Card, Smart Watch, Keytag' },
  { distance: '30 cm (1 ft)', recommendedSize: '3.0 × 3.0 cm', useCase: 'Restaurant Tabletop Tent, Pamphlet' },
  { distance: '50 cm (1.6 ft)', recommendedSize: '5.0 × 5.0 cm', useCase: 'Flyer, Magazine, Product Packaging' },
  { distance: '1 m (3.3 ft)', recommendedSize: '10.0 × 10.0 cm', useCase: 'Wall Poster, Retail Checkout Stand' },
  { distance: '2 m (6.6 ft)', recommendedSize: '20.0 × 20.0 cm', useCase: 'A-Frame Sidewalk Sign, Window Display' },
  { distance: '5 m (16.4 ft)', recommendedSize: '50.0 × 50.0 cm', useCase: 'Trade Show Booth Banner, Event Backdrop' },
  { distance: '10 m (32.8 ft)', recommendedSize: '100.0 × 100.0 cm', useCase: 'Outdoor Billboard, Stage Screen' },
];
