export interface R2BucketBinding {
  put(key: string, value: ArrayBuffer | ArrayBufferView | string | Blob | ReadableStream, options?: any): Promise<any>;
  get(key: string): Promise<any>;
  delete(key: string): Promise<void>;
  list(options?: any): Promise<any>;
}

/**
 * In-memory fallback for local development and test environments.
 */
class MemoryR2Storage implements R2BucketBinding {
  private store = new Map<string, { data: Uint8Array; metadata?: any }>();

  async put(key: string, value: any, options?: any): Promise<any> {
    let bytes: Uint8Array;
    if (value instanceof Uint8Array) {
      bytes = value;
    } else if (value instanceof ArrayBuffer) {
      bytes = new Uint8Array(value);
    } else if (typeof value === 'string') {
      bytes = new TextEncoder().encode(value);
    } else {
      bytes = new Uint8Array(0);
    }

    this.store.set(key, { data: bytes, metadata: options });
    return { key, size: bytes.byteLength };
  }

  async get(key: string): Promise<any> {
    const item = this.store.get(key);
    if (!item) return null;
    return {
      key,
      size: item.data.byteLength,
      arrayBuffer: async () => item.data.buffer,
      text: async () => new TextDecoder().decode(item.data),
    };
  }

  async delete(key: string): Promise<void> {
    this.store.delete(key);
  }

  async list(options?: any): Promise<any> {
    const keys = Array.from(this.store.keys());
    const prefix = options?.prefix || '';
    const filtered = keys.filter((k) => k.startsWith(prefix));
    return {
      objects: filtered.map((k) => ({ key: k, size: this.store.get(k)?.data.byteLength || 0 })),
      truncated: false,
    };
  }
}

const memoryR2 = new MemoryR2Storage();

export function getR2Storage(locals?: any): R2BucketBinding {
  const binding = locals?.runtime?.env?.STORAGE;
  if (binding && typeof binding.put === 'function') {
    return binding;
  }
  return memoryR2;
}

export function validateLogoUpload(file: File): { valid: boolean; error?: string } {
  const maxBytes = 2 * 1024 * 1024; // 2 MB
  if (file.size > maxBytes) {
    return { valid: false, error: 'Logo file size exceeds the 2 MB limit.' };
  }

  const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
  if (!allowedMimeTypes.includes(file.type.toLowerCase())) {
    return { valid: false, error: 'Invalid file type. Supported formats: PNG, JPG, WebP, SVG.' };
  }

  return { valid: true };
}

/**
 * Sanitize SVG content to prevent XSS and malicious scripts.
 */
export function sanitizeSvgContent(svgString: string): string {
  return svgString
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove <script> tags
    .replace(/\son\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '') // Remove inline event handlers (onload, onclick)
    .replace(/<foreignObject\b[^<]*(?:(?!<\/foreignObject>)<[^<]*)*<\/foreignObject>/gi, '') // Remove foreignObject
    .replace(/javascript\s*:/gi, 'blocked:') // Neutralize javascript: protocols
    .replace(/<use\s+[^>]*href\s*=\s*['"]?https?:\/\/[^'"]+['"]?[^>]*\/?>/gi, ''); // Remove external entity references
}

/**
 * Generate secure, deterministic R2 asset keys avoiding raw user filenames.
 */
export function generateAssetKey(userId: string, prefix = 'logos', ext = 'png'): string {
  const randomId = crypto.randomUUID().replace(/-/g, '');
  const cleanExt = ext.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'png';
  return `users/${userId}/${prefix}/${randomId}.${cleanExt}`;
}
