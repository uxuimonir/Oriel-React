import LegalPage from "@/components/LegalPage"
import { getLegal, type LegalDoc } from "@/data/legal"
import { PageMeta } from "@/lib/meta"

export default function LegalRoute({ slug }: { slug: LegalDoc["slug"] }) {
  const doc = getLegal(slug)
  return (
    <>
      <PageMeta title={`${doc.title} — Oriel`} description={doc.description} path={`/${slug}`} />
      <LegalPage doc={doc} />
    </>
  )
}
