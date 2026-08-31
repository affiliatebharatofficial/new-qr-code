import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response('e565b30e52084612bf099ab4c3a5ffb4', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
