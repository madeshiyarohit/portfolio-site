import { SITE } from "../site.config.mjs";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", SITE.url).href}\n`, { headers: { "Content-Type": "text/plain" } });
}
