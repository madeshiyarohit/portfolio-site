import { getCollection } from "astro:content";

// Drafts are visible while previewing locally (npm run dev) but never published.
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === "1";
const visible = e => showDrafts || !e.data.draft;
const newestFirst = (a, b) => b.data.date - a.data.date;

export async function getPosts() {
  return (await getCollection("blog", visible)).sort((a, b) => (b.data.featured - a.data.featured) || newestFirst(a, b));
}
export async function getProjects() {
  return (await getCollection("projects", visible)).sort((a, b) => (b.data.featured - a.data.featured) || newestFirst(a, b));
}
export const readingTime = text => Math.max(1, Math.ceil((text || "").split(/\s+/).filter(Boolean).length / 220));
export const formatDate = d => d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
