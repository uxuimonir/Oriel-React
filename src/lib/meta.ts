import type { Metadata } from "next"
import { site } from "@/data/content"

interface PageMeta {
  title: string
  description: string
  /** Photograph file name; its 1200×630 crop in /og is used for sharing. */
  image?: string
  path: string
  noindex?: boolean
}

/** One place that builds title, canonical, Open Graph and Twitter tags for a page. */
export function pageMeta({ title, description, image = site.socialImage, path, noindex = false }: PageMeta): Metadata {
  const og = `/og/${image.replace(/\.[^.]+$/, "")}.jpg`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [og] },
  }
}
