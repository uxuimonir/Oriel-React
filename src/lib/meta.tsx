import { Helmet } from "react-helmet-async"
import { site } from "@/data/content"

interface PageMetaProps {
  title: string
  description: string
  /** Photograph file name; its 1200×630 crop in /og is used for sharing. */
  image?: string
  path: string
  noindex?: boolean
}

/** One place that renders title, canonical, Open Graph and Twitter tags for a page. */
export function PageMeta({ title, description, image = site.socialImage, path, noindex = false }: PageMetaProps) {
  const og = `/og/${image.replace(/\.[^.]+$/, "")}.jpg`
  const url = `${site.url}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={og} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og} />
    </Helmet>
  )
}
