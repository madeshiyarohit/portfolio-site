// Builds /sitemap.xml automatically from every page, project and blog post (drafts are left out).
import { SITE } from "../site.config.mjs";
import { getPosts, getProjects } from "../lib/content.js";

export async function GET() {
  const posts = (await getPosts()).filter(p => !p.data.draft);
  const projects = (await getProjects()).filter(p => !p.data.draft);
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: "/", lastmod: today, priority: "1.0", images: ["/Assets/rohit-madeshiya-shopify-expert-hero.jpg", SITE.shareImage] },
    { loc: "/contact/", lastmod: today, priority: "0.7" },
    ...(projects.length ? [{ loc: "/projects/", lastmod: today, priority: "0.8" }] : []),
    ...projects.map(p => ({ loc: `/projects/${p.id}/`, lastmod: p.data.date.toISOString().slice(0, 10), priority: "0.7", images: [p.data.cover] })),
    ...(posts.length ? [{ loc: "/blog/", lastmod: today, priority: "0.8" }] : []),
    ...posts.map(p => ({ loc: `/blog/${p.id}/`, lastmod: (p.data.updated || p.data.date).toISOString().slice(0, 10), priority: "0.6", images: p.data.cover ? [p.data.cover] : [] }))
  ];
  const abs = path => new URL(path, SITE.url).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(u => `  <url>
    <loc>${abs(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>${(u.images || []).map(i => `
    <image:image><image:loc>${abs(i)}</image:loc></image:image>`).join("")}
  </url>`).join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
