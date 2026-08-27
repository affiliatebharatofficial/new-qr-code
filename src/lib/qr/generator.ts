import type { QRDesignOptions } from './types';

/**
 * Creates and updates QRCodeStyling instance on client side.
 * Dynamically loaded in the browser.
 */
export async function createQRCodeInstance(options: QRDesignOptions): Promise<any> {
  const { default: QRCodeStyling } = await import('qr-code-styling');

  const dotsColor = options.colors.foreground;
  const bgColor = options.colors.isTransparent ? 'transparent' : options.colors.background;

  const dotsOptions: any = {
    color: dotsColor,
    type: options.dotType,
  };

  if (options.colors.useGradient && options.colors.gradient) {
    dotsOptions.gradient = {
      type: options.colors.gradient.type,
      rotation: (options.colors.gradient.rotation * Math.PI) / 180,
      colorStops: options.colors.gradient.colorStops,
    };
  }

  const qrOptions: any = {
    width: options.size,
    height: options.size,
    type: 'canvas',
    data: options.payload || 'https://example.com',
    margin: options.margin,
    qrOptions: {
      errorCorrectionLevel: options.errorCorrection,
    },
    dotsOptions,
    backgroundOptions: {
      color: bgColor,
    },
    cornersSquareOptions: {
      type: options.eyeFrameType,
      color: dotsColor,
    },
    cornersDotOptions: {
      type: options.eyeDotType,
      color: dotsColor,
    },
  };

  if (options.logo?.src) {
    qrOptions.image = options.logo.src;
    qrOptions.imageOptions = {
      hideBackgroundDots: options.logo.hideBackgroundDots ?? true,
      imageSize: options.logo.sizeRatio || 0.25,
      margin: options.logo.margin || 4,
      crossOrigin: 'anonymous',
    };
  }

  return new QRCodeStyling(qrOptions);
}
