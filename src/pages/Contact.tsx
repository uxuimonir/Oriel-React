import ContactBand from "@/components/ContactBand"
import { contact } from "@/data/content"
import { PageMeta } from "@/lib/meta"

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact — Commission a series | Oriel"
        description="Tell Mira Castell about the place, the season and what the light does there. Commissions for portraits, editorial, documentary and campaigns."
        image={contact.image}
        path="/contact"
      />
      <ContactBand variant="page" level="h1" />
    </>
  )
}
