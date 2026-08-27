/**
 * Client-side QR export utilities (PNG, SVG, JPG, Clipboard, Web Share API)
 */

export async function downloadBlob(blob: Blob, filename: string): Promise<void> {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function copyQrToClipboard(qrCanvas: HTMLCanvasElement): Promise<boolean> {
  if (!navigator.clipboard || !window.ClipboardItem) {
    throw new Error('Clipboard image copy is not supported in this browser.');
  }

  return new Promise((resolve, reject) => {
    qrCanvas.toBlob(async (blob) => {
      if (!blob) {
        reject(new Error('Failed to capture canvas image.'));
        return;
      }
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    }, 'image/png');
  });
}

export async function shareQrCode(
  qrCanvas: HTMLCanvasElement,
  title: string = 'My QR Code',
  text: string = 'Scan this QR code generated with QR Code Generator'
): Promise<boolean> {
  if (!navigator.share) {
    throw new Error('Web Share API is not supported on this device/browser.');
  }

  return new Promise((resolve, reject) => {
    qrCanvas.toBlob(async (blob) => {
      if (!blob) {
        reject(new Error('Failed to generate image for sharing.'));
        return;
      }
      try {
        const file = new File([blob], 'qrcode.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title,
            text,
          });
          resolve(true);
        } else {
          await navigator.share({
            title,
            text,
            url: window.location.href,
          });
          resolve(true);
        }
      } catch (err) {
        // User aborted share or permission denied
        reject(err);
      }
    }, 'image/png');
  });
}
