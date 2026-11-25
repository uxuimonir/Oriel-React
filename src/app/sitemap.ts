import type { MetadataRoute } from "next"
import { posts, projects, site } from "@/data/content"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/studio", "/journal", "/contact", "/privacy", "/terms", "/cookies"]
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ]
}
