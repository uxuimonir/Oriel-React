import ContactBand from "@/components/ContactBand"
import { contact } from "@/data/content"
import { pageMeta } from "@/lib/meta"

export const metadata = pageMeta({
  title: "Contact — Commission a series | Oriel",
  description:
    "Tell Mira Castell about the place, the season and what the light does there. Commissions for portraits, editorial, documentary and campaigns.",
  image: contact.image,
  path: "/contact",
})

export default function ContactPage() {
  return <ContactBand variant="page" level="h1" />
}
