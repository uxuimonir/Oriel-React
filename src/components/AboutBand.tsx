import Words from "./Words"
import Frame from "./Frame"
import { about } from "@/data/content"
import { delay } from "@/lib/style"

export default function AboutBand() {
  return (
    <section className="band bg-stone/50">
      <div className="shell">
        <p className="t-meta text-ash">{about.eyebrow}</p>
        <h2 className="t-l mt-5 max-w-[20ch]">
          <Words text={about.title[0]} />{" "}
          <span className="t-l-serif italic"><Words text={about.title[1]} /></span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="t-body max-w-[62ch] text-ash" data-reveal style={delay(i * 0.07)}>{p}</p>
            ))}
          </div>
          <figure>
            <Frame src={about.image} alt={about.alt} className="aspect-[3/4] w-full" sizes="(min-width:1200px) 32vw, 100vw" />
            <figcaption className="t-meta mt-3 text-ash">{about.caption}</figcaption>
          </figure>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.facts.map(([k, v], i) => (
            <li key={k} className="rule pt-4" data-reveal style={delay(i * 0.07)}>
              <p className="t-meta text-ash">{k}</p>
              <p className="t-small mt-2">{v}</p>
            </li>
          ))}
        </ul>

        <div className="rule mt-12 pt-6">
          <p className="t-meta text-ash">{about.clientsLabel}</p>
          <p className="t-small mt-3 max-w-[90ch]">{about.clients}</p>
        </div>
      </div>
    </section>
  )
}
