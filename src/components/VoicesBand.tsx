import SectionHead from "./SectionHead"
import Frame from "./Frame"
import { voices } from "@/data/content"
import { delay } from "@/lib/style"

export default function VoicesBand() {
  return (
    <section className="band bg-dusk text-ondark">
      <div className="shell">
        <SectionHead eyebrow={voices.eyebrow} title={voices.title} body={voices.body} dark />
        <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-16 lg:gap-x-16">
          {voices.quotes.map((q, i) => (
            <li key={q.name} data-reveal style={delay(i * 0.09)}>
              <figure>
                <Frame src={q.portrait} alt="" className="aspect-[4/3] w-[72px]" sizes="72px" />
                <blockquote className="t-body mt-5 max-w-[34ch] text-ondark/90">{q.quote}</blockquote>
                <figcaption className="mt-5">
                  <span className="t-small block">{q.name}</span>
                  <span className="t-meta mt-1 block text-ashnight">{q.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
