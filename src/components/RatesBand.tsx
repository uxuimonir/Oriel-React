import { Link } from "react-router-dom"
import SectionHead from "./SectionHead"
import Reveal from "./Reveal"
import { rates } from "@/data/content"
import { delay } from "@/lib/style"

export default function RatesBand() {
  return (
    <section id="rates" className="band bg-night text-ondark">
      <div className="shell">
        <SectionHead eyebrow={rates.eyebrow} title={rates.title} dark />
        <Reveal as="ul" className="mt-12 grid items-start gap-5 lg:grid-cols-3 lg:gap-6">
          {rates.plans.map((p: any, i: number) => (
            <li
              key={p.title}
              className={`flex h-full flex-col rounded-[14px] p-7 transition-colors duration-500 md:p-8 ${
                p.featured ? "bg-white/[0.10] lg:-mt-4 lg:pb-10 lg:pt-10" : "bg-white/[0.045] hover:bg-white/[0.075]"
              }`}
              data-reveal
              style={delay(i * 0.09)}
            >
              <p className={`t-meta ${p.featured ? "text-bluenight" : "text-ashnight"}`}>{p.eyebrow}</p>
              <h3 className="t-m mt-3 text-[30px] md:text-[34px]">{p.title}</h3>
              <p className="t-small mt-3 max-w-[34ch] text-ashnight">{p.description}</p>
              <p className="tnum mt-7 text-[34px] font-light tracking-[-0.03em] md:text-[40px]">{p.price}</p>
              <p className="t-meta mt-2 text-ashnight">{p.priceNote}</p>
              <ul className="mt-7 space-y-3">
                {p.includes.map((line: string) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-ondark/80">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-bluenight">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`t-button mt-8 inline-flex items-center justify-center gap-2 self-stretch rounded-full px-6 py-3 transition-colors duration-300 ${
                  p.featured ? "bg-ondark text-night hover:bg-bluenight hover:text-ondark" : "bg-white/10 text-ondark hover:bg-white/20"
                }`}
              >
                Enquire →
              </Link>
            </li>
          ))}
        </Reveal>
        <p className="t-small mt-10 max-w-[70ch] text-ashnight">{rates.note}</p>
      </div>
    </section>
  )
}
