import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import { posts, projects, site } from "../src/data/content.ts"

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public")

writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`)

const pages = ["", "/work", "/studio", "/journal", "/contact", "/privacy", "/terms", "/cookies"]
const urls = [
  ...pages.map((p) => `  <url><loc>${site.url}${p}</loc><changefreq>monthly</changefreq><priority>${p === "" ? "1.0" : "0.8"}</priority></url>`),
  ...projects.map((p) => `  <url><loc>${site.url}/work/${p.slug}</loc><changefreq>yearly</changefreq><priority>0.7</priority></url>`),
  ...posts.map((p) => `  <url><loc>${site.url}/journal/${p.slug}</loc><lastmod>${p.date}</lastmod><changefreq>yearly</changefreq><priority>0.6</priority></url>`),
]
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`
writeFileSync(path.join(outDir, "sitemap.xml"), xml)

console.log("Generated robots.txt and sitemap.xml")
