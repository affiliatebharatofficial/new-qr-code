/**
 * Standardized API JSON response helpers.
 */

export function jsonSuccess(data: Record<string, any> = {}, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(
    JSON.stringify({
      success: true,
      ...data,
    }),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
  );
}

export function jsonError(code: string, message: string, status = 400, headers: Record<string, string> = {}): Response {
  return new Response(
    JSON.stringify({
      error: {
        code,
        message,
      },
    }),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
  );
}
