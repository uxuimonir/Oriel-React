import Words from "@/components/Words"
import Frame from "@/components/Frame"
import AboutBand from "@/components/AboutBand"
import CommissionsBand from "@/components/CommissionsBand"
import VoicesBand from "@/components/VoicesBand"
import RatesBand from "@/components/RatesBand"
import FaqBand from "@/components/FaqBand"
import ContactBand from "@/components/ContactBand"
import { studioHero } from "@/data/content"
import { delay } from "@/lib/style"
import { pageMeta } from "@/lib/meta"

export const metadata = pageMeta({
  title: "Studio — About Mira Castell, rates and process | Oriel",
  description:
    "Oriel is Mira Castell: portraits, places and weather in natural light for magazines, architects, hotels and brands. Process, commissions, rates and FAQ.",
  image: studioHero.image,
  path: "/studio",
})

export default function StudioPage() {
  return (
    <>
      <section className="pb-12 pt-10 md:pb-16 md:pt-16">
        <div className="shell">
          <p className="t-meta text-ash">{studioHero.eyebrow}</p>
          <h1 className="t-l mt-5 max-w-[16ch]">
            <Words text={studioHero.title[0]} />{" "}
            <span className="t-l-serif italic"><Words text={studioHero.title[1]} /></span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <p className="t-small max-w-[48ch] text-ash">{studioHero.body}</p>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {studioHero.facts.map(([k, v], i) => (
                <li key={k} className="rule pt-3" data-reveal style={delay(i * 0.07)}>
                  <p className="t-meta text-ash">{k}</p>
                  <p className="t-small mt-2 max-w-[30ch]">{v}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mt-12 md:mt-16">
            <Frame src={studioHero.image} alt={studioHero.alt} eager className="aspect-[16/9] w-full" sizes="100vw" />
            <figcaption className="t-meta mt-3 text-ash">{studioHero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <AboutBand />
      <CommissionsBand />
      <VoicesBand />
      <RatesBand />
      <FaqBand />
      <ContactBand />
    </>
  )
}
