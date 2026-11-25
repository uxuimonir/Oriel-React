import Words from "./Words"
import type { LegalDoc } from "@/data/legal"

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="bg-night pb-[88px] pt-14 text-ondark md:pb-[120px] md:pt-20 lg:pb-[160px] lg:pt-24">
      <div className="shell">
        <p className="t-meta flex items-center gap-2 text-bluenight">
          <span aria-hidden="true" className="inline-block h-[6px] w-[6px] rounded-full bg-bluenight" />
          {doc.eyebrow}
        </p>
        <h1 className="t-l-serif mt-6 italic">
          <Words text={doc.title} />
        </h1>

        <article className="mt-12 max-w-[720px]">
          <p className="t-meta text-ashnight">Last updated {doc.updated}</p>
          <p className="t-lead mt-8">{doc.lead}</p>
          <div className="mt-12 grid gap-12">
            {doc.sections.map((s) => (
              <section key={s.title}>
                <h2 className="t-quote">{s.title}</h2>
                <p className="t-body mt-4 text-ondark/70">{s.body}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
