import Words from "./Words"
import Frame from "./Frame"
import { hero } from "@/data/content"

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="t-hero max-w-[9ch]"><Words text={hero.title} /></h1>
          <p className="t-body max-w-[360px] text-ash">{hero.intro}</p>
        </div>

        <Frame src={hero.image} alt={hero.alt} eager className="mt-8 aspect-[16/9] w-full md:mt-10" sizes="100vw" />

        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 lg:grid-cols-4">
            {hero.caption.map((c) => <li key={c} className="t-meta text-ash">{c}</li>)}
          </ul>
          <p className="t-hero-serif shrink-0 italic"><Words text={hero.serif} /></p>
        </div>
      </div>
    </section>
  )
}
