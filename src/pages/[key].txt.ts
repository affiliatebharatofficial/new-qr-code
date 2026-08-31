import type { APIRoute } from 'astro';
import { INDEXNOW_KEY } from '../lib/seo/indexnow';

export const GET: APIRoute = async ({ params }) => {
  const { key } = params;
  if (key === INDEXNOW_KEY) {
    return new Response(INDEXNOW_KEY, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
  return new Response('Not Found', { status: 404 });
};
