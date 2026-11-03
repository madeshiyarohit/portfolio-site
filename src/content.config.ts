import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Blog posts live in src/content/blog. The file name becomes the link: my-post.md → /blog/my-post/
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

// Projects live in src/content/projects. The file name becomes the link: brand-name.md → /projects/brand-name/
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    industry: z.string().optional(),
    services: z.array(z.string()).default([]),
    liveUrl: z.string().optional(),
    results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    gallery: z.array(z.object({ src: z.string(), alt: z.string().optional() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, projects };
