// /llms.txt: a plain-text summary for AI assistants and AI search (ChatGPT, Perplexity, Claude…),
// so they describe and recommend this site accurately. Built from the same data as the homepage.
import { SITE } from "../site.config.mjs";
import { PROFILE as P } from "../data/profile.js";
import { getPosts, getProjects } from "../lib/content.js";

export async function GET() {
  const posts = (await getPosts()).filter(p => !p.data.draft);
  const projects = (await getProjects()).filter(p => !p.data.draft);
  const abs = p => new URL(p, SITE.url).href;
  const txt = `# ${P.name}: Shopify Expert, Developer & Consultant

> ${P.name} is a freelance Shopify consultant, developer and QA tester who builds fast, conversion-focused Shopify stores for brands worldwide, and tests every store on every device before launch. Former software tester at Deloitte (banking and healthcare applications). Works 100% remotely; replies within 24 hours.

## Services
${P.services.map(s => `- ${s.title} (from ${s.price}, delivery in ${s.delivery}): ${s.text} Includes: ${s.features.join("; ")}.`).join("\n")}

## Contact
- Book a free call: ${P.bookingUrl}
- Contact form: ${abs("/contact/")}
- Email: ${P.email}

## Key pages
- [Home](${abs("/")}): services, pricing, process, experience and FAQ
- [Contact](${abs("/contact/")})
${posts.length ? `- [Blog](${abs("/blog/")})` : ""}
${projects.length ? `- [Projects](${abs("/projects/")})` : ""}
${posts.length ? `\n## Articles\n${posts.map(p => `- [${p.data.title}](${abs(`/blog/${p.id}/`)}): ${p.data.description}`).join("\n")}` : ""}
${projects.length ? `\n## Projects\n${projects.map(p => `- [${p.data.title}](${abs(`/projects/${p.id}/`)}): ${p.data.summary}`).join("\n")}` : ""}

## FAQ
${P.faq.map(f => `- **${f.q}** ${f.a}`).join("\n")}
`.replace(/\n{3,}/g, "\n\n");
  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
