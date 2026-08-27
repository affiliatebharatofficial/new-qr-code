export type DistanceUnit = 'cm' | 'm' | 'ft' | 'in';
export type SizeUnit = 'mm' | 'cm' | 'in';
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type QRContentType =
  | 'url'
  | 'text'
  | 'wifi'
  | 'vcard'
  | 'email'
  | 'sms'
  | 'phone'
  | 'whatsapp'
  | 'upi'
  | 'location'
  | 'social'
  | 'event'
  | 'product'
  | 'review'
  | 'other';

export type PrintMaterial =
  | 'business_card'
  | 'flyer'
  | 'brochure'
  | 'menu'
  | 'packaging'
  | 'poster'
  | 'window_sign'
  | 'banner'
  | 'outdoor_sign'
  | 'label'
  | 'other';

export interface SizeCalculatorInput {
  scanDistance: number;
  distanceUnit: DistanceUnit;
  contentType: QRContentType;
  errorCorrection: ErrorCorrectionLevel;
  qrVersion?: 'auto' | number;
  dpi?: number;
}

export interface SizeCalculatorResult {
  scanDistance: {
    value: number;
    unit: DistanceUnit;
    meters: number;
    centimeters: number;
    inches: number;
    feet: number;
  };
  recommendedSize: {
    widthCm: number;
    heightCm: number;
    widthMm: number;
    heightMm: number;
    widthInches: number;
    heightInches: number;
  };
  qrSpecs: {
    version: number;
    totalDataModules: number;
    totalModulesWithQuietZone: number;
    estimatedModuleSizeMm: number;
    estimatedModuleSizeInches: number;
    quietZoneWidthMm: number;
    quietZoneWidthInches: number;
    errorCorrection: ErrorCorrectionLevel;
    ecPercentage: number;
  };
  rasterResolution: {
    dpi: number;
    widthPx: number;
    heightPx: number;
  };
  allDpiResolutions: {
    dpi: number;
    pixels: number;
    useCase: string;
  }[];
  status: 'recommended' | 'caution' | 'warning';
  statusMessage: string;
  warnings: string[];
}

export interface PrintCalculatorInput {
  physicalWidth: number;
  physicalHeight: number;
  sizeUnit: SizeUnit;
  dpi: number;
  scanDistance?: number;
  distanceUnit?: DistanceUnit;
  errorCorrection: ErrorCorrectionLevel;
  qrVersion?: 'auto' | number;
  printMaterial: PrintMaterial;
}

export interface PrintCalculatorResult {
  physicalDimensions: {
    widthMm: number;
    heightMm: number;
    widthCm: number;
    heightCm: number;
    widthInches: number;
    heightInches: number;
  };
  rasterOutput: {
    dpi: number;
    widthPx: number;
    heightPx: number;
    totalPixels: number;
  };
  qrSpecs: {
    version: number;
    totalDataModules: number;
    totalModulesWithQuietZone: number;
    estimatedModuleSizeMm: number;
    estimatedModuleSizeInches: number;
    quietZoneMm: number;
    quietZoneInches: number;
    errorCorrection: ErrorCorrectionLevel;
    ecPercentage: number;
  };
  opticalDistance: {
    minScanDistanceMeters: number;
    recommendedMaxDistanceMeters: number;
    recommendedMaxDistanceFeet: number;
    userSpecifiedDistanceMeters?: number;
  };
  readinessStatus: 'optimal' | 'acceptable' | 'too_small';
  readinessLabel: string;
  readinessDescription: string;
  recommendedFormat: 'SVG (Vector)' | 'High-Res PNG (Raster)';
  checklist: {
    label: string;
    passed: boolean;
    detail: string;
  }[];
  warnings: string[];
}

export interface PrintPreset {
  id: string;
  label: string;
  category: string;
  widthCm: number;
  heightCm: number;
  defaultDpi: number;
  recommendedDistance: string;
  description: string;
}
