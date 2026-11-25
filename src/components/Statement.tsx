import Frame from "./Frame"
import Reveal from "./Reveal"
import { statement } from "@/data/content"
import { delay } from "@/lib/style"

export default function Statement() {
  return (
    <section className="band">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <Reveal>
            <p className="t-meta text-ash">{statement.eyebrow}</p>
            <p className="t-m mt-6 max-w-[30ch]">{statement.body}</p>
          </Reveal>
          <Reveal as="figure" delay={0.08}>
            <Frame src={statement.image} alt={statement.alt} className="aspect-[4/5] w-full" sizes="(min-width:1200px) 30vw, 100vw" />
            <figcaption className="t-meta mt-3 text-ash">{statement.caption}</figcaption>
          </Reveal>
        </div>

        <ul className="rule mt-16 grid gap-10 pt-10 sm:grid-cols-3">
          {statement.stats.map((s, i) => (
            <li key={s.label} data-reveal style={delay(i * 0.1)}>
              <p className="t-l tnum" data-count={s.figure}>{s.figure}</p>
              <p className="t-small mt-2 max-w-[22ch] text-ash">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
