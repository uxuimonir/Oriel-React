import Words from "@/components/Words"
import JournalFeature from "@/components/JournalFeature"
import JournalCard from "@/components/JournalCard"
import VoicesBand from "@/components/VoicesBand"
import ContactBand from "@/components/ContactBand"
import { journal, posts } from "@/data/content"
import { pageMeta } from "@/lib/meta"

const bySlug = new Map(posts.map((p) => [p.slug, p]))
const featured = bySlug.get(journal.featuredSlug)!
const grid = journal.gridSlugs.map((s) => bySlug.get(s)!).filter(Boolean)

export const metadata = pageMeta({
  title: "Journal — Notes from the waiting | Oriel",
  description: "Field notes, craft and the odd essay by photographer Mira Castell, written on location — usually while nothing was happening.",
  image: featured.cover,
  path: "/journal",
})

export default function JournalPage() {
  return (
    <>
      <section className="pt-10 md:pt-16">
        <div className="shell">
          <p className="t-meta text-ash">{journal.eyebrow}</p>
          <h1 className="t-l mt-5">
            <span className="block"><Words text={journal.title[0]} /></span>
            <span className="t-l-serif block italic"><Words text={journal.title[1]} /></span>
          </h1>
          <p className="t-small mt-6 max-w-[62ch] text-ash">{journal.bodyIndex}</p>
        </div>
      </section>

      <section className="pb-[72px] pt-10 md:pb-[120px] md:pt-14">
        <div className="shell">
          <JournalFeature post={featured} />

          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-20 md:gap-x-8 md:gap-y-16">
            {grid.map((p, i) => (
              <JournalCard key={p.slug} post={p} delay={Number(((i % 2) * 0.08).toFixed(2))} />
            ))}
          </ul>
        </div>
      </section>

      <VoicesBand />
      <ContactBand />
    </>
  )
}
