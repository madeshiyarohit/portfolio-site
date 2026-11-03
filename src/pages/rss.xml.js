// /rss.xml: the blog as an RSS feed, so readers, feed apps and search engines get new posts automatically.
import { SITE } from "../site.config.mjs";
import { getPosts } from "../lib/content.js";

const x = s => String(s).replace(/[<>&'"]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));

export async function GET() {
  const posts = (await getPosts()).filter(p => !p.data.draft);
  const abs = p => new URL(p, SITE.url).href;
  const items = posts.map(p => `    <item>
      <title>${x(p.data.title)}</title>
      <link>${abs(`/blog/${p.id}/`)}</link>
      <guid isPermaLink="true">${abs(`/blog/${p.id}/`)}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${x(p.data.description)}</description>
${p.data.tags.map(t => `      <category>${x(t)}</category>`).join("\n")}
    </item>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${x(SITE.name)}: Shopify Blog</title>
    <link>${abs("/blog/")}</link>
    <atom:link href="${abs("/rss.xml")}" rel="self" type="application/rss+xml"/>
    <description>Practical Shopify tips on store speed, design, testing and selling more.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
