import { Link } from "react-router-dom"
import Words from "./Words"
import JournalRow from "./JournalRow"
import { journal, posts, type Post } from "@/data/content"

export default function JournalBand() {
  const bySlug = new Map(posts.map((p) => [p.slug, p]))
  const rows = journal.homeRows
    .map((r) => {
      const post = bySlug.get(r.slug)
      return post ? { ...post, cover: r.cover } : null
    })
    .filter((p): p is Post => p !== null)

  return (
    <section className="band">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="t-l max-w-[14ch]">
            <Words text={journal.title[0]} />{" "}
            <span className="t-l-serif italic"><Words text={journal.title[1]} /></span>
          </h2>
          <p className="t-body max-w-[420px] text-ash">{journal.bodyHome}</p>
        </div>
        <ul className="mt-12">
          {rows.map((p, i) => <JournalRow key={p.slug} post={p} delay={Number((i * 0.07).toFixed(2))} />)}
        </ul>
        <Link to="/journal" className="t-small mt-10 inline-flex items-center gap-2 border-b border-current pb-1 transition-colors duration-300 hover:text-blue">
          {journal.more}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
