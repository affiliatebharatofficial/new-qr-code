export interface ScanContext {
  country: string;
  region: string;
  city: string;
  deviceType: 'mobile' | 'desktop' | 'tablet' | 'bot' | 'Unknown';
  browser: string;
  os: string;
  referrer: string;
  ipHash: string;
}

export function parseUserAgent(ua: string): { deviceType: 'mobile' | 'desktop' | 'tablet' | 'bot' | 'Unknown'; browser: string; os: string } {
  if (!ua) return { deviceType: 'Unknown', browser: 'Unknown', os: 'Unknown' };

  const lower = ua.toLowerCase();

  // Device detection
  let deviceType: 'mobile' | 'desktop' | 'tablet' | 'bot' | 'Unknown' = 'desktop';
  if (/bot|crawler|spider|crawling/i.test(lower)) {
    deviceType = 'bot';
  } else if (/ipad|tablet|(android(?!.*mobile))/i.test(lower)) {
    deviceType = 'tablet';
  } else if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(lower)) {
    deviceType = 'mobile';
  }

  // OS detection (mobile first to avoid iOS being classified as macOS)
  let os = 'Unknown';
  if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/windows/i.test(ua)) os = 'Windows';
  else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
  else if (/linux/i.test(ua)) os = 'Linux';

  // Browser detection
  let browser = 'Unknown';
  if (/edg\//i.test(ua)) browser = 'Edge';
  else if (/chrome|crios/i.test(ua)) browser = 'Chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
  else if (/opera|opr/i.test(ua)) browser = 'Opera';

  return { deviceType, browser, os };
}

/**
 * Anonymously hashes IP address with a daily salt for unique visitor metrics
 * without saving raw IP to database.
 */
export async function hashIp(ip: string): Promise<string> {
  if (!ip) return 'anon';
  const today = new Date().toISOString().substring(0, 10);
  const data = new TextEncoder().encode(`${ip}:${today}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).slice(0, 8).map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Extracts privacy-first analytics from request headers and Cloudflare cf object
 */
export async function extractScanContext(request: Request, cf?: any): Promise<ScanContext> {
  const headers = request.headers;
  const ua = headers.get('user-agent') || '';
  const { deviceType, browser, os } = parseUserAgent(ua);

  // Cloudflare Geolocation
  const country = cf?.country || headers.get('cf-ipcountry') || 'Unknown';
  const region = cf?.region || headers.get('cf-region') || 'Unknown';
  const city = cf?.city || headers.get('cf-ipcity') || 'Unknown';

  // Referrer
  let referrer = 'Direct';
  const refHeader = headers.get('referer');
  if (refHeader) {
    try {
      const parsed = new URL(refHeader);
      referrer = parsed.hostname;
    } catch {
      referrer = 'Other';
    }
  }

  // Anonymized IP
  const clientIp = headers.get('cf-connecting-ip') || headers.get('x-forwarded-for') || '127.0.0.1';
  const ipHash = await hashIp(clientIp);

  return {
    country,
    region,
    city,
    deviceType,
    browser,
    os,
    referrer,
    ipHash,
  };
}
