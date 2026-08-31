export const INDEXNOW_KEY = 'e565b30e52084612bf099ab4c3a5ffb4';
export const INDEXNOW_HOST = 'freeqrcode-generator.com';
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

export interface IndexNowSubmitResult {
  success: boolean;
  statusCode: number;
  message: string;
  urlCount: number;
}

/**
 * Submit URLs to the IndexNow API protocol (Bing, Yandex, Naver, Seznam, etc.)
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowSubmitResult> {
  if (!urls || urls.length === 0) {
    return {
      success: false,
      statusCode: 400,
      message: 'No URLs provided for IndexNow submission.',
      urlCount: 0,
    };
  }

  // Deduplicate and filter URLs
  const uniqueUrls = Array.from(new Set(urls)).slice(0, 10000); // IndexNow limit per request is 10,000

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: uniqueUrls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'FreeQRCodeGenerator-IndexNow/1.0',
      },
      body: JSON.stringify(payload),
    });

    const isSuccess = response.status === 200 || response.status === 202;
    return {
      success: isSuccess,
      statusCode: response.status,
      message: isSuccess
        ? `Successfully submitted ${uniqueUrls.length} URLs to IndexNow (Status: ${response.status}).`
        : `IndexNow submission returned status ${response.status}: ${response.statusText}`,
      urlCount: uniqueUrls.length,
    };
  } catch (error: any) {
    return {
      success: false,
      statusCode: 500,
      message: error?.message || 'Network error submitting to IndexNow',
      urlCount: uniqueUrls.length,
    };
  }
}
