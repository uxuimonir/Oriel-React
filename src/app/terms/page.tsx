import LegalPage from "@/components/LegalPage"
import { getLegal } from "@/data/legal"
import { pageMeta } from "@/lib/meta"

const doc = getLegal("terms")

export const metadata = pageMeta({
  title: `${doc.title} — Oriel`,
  description: doc.description,
  path: "/terms",
})

export default function Page() {
  return <LegalPage doc={doc} />
}
