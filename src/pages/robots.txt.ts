import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const robots = `# Robots.txt for Free QR Code Generator
# https://freeqrcode-generator.com

User-agent: *
Allow: /
Allow: /guides/
Allow: /pricing
Allow: /privacy
Allow: /terms
Allow: /disclaimer
Allow: /contact
Allow: /llms.txt

# Disallow private dashboards, authentication, edge redirects, and internal APIs
Disallow: /dashboard/
Disallow: /admin/
Disallow: /api/
Disallow: /login
Disallow: /signup
Disallow: /r/
Disallow: /p/

# XML Sitemaps
Sitemap: https://freeqrcode-generator.com/sitemap.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
