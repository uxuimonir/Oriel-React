"use client"

import Link from "next/link"
import { useState } from "react"
import Frame from "@/components/Frame"
import { projects } from "@/data/content"
import { delay } from "@/lib/style"

/** Desktop column spans of the seven frames in one contact sheet: 3 up, then 4. */
const spans = [
  "md:col-span-4", "md:col-span-5", "md:col-span-3",
  "md:col-span-3", "md:col-span-3", "md:col-span-3", "md:col-span-3",
]

/** Phone keeps each frame's own ratio; from tablet up the sheet reads as two even strips. */
const ratio = (r: string, i: number) => {
  const own = r === "portrait" ? "aspect-[4/5]" : r === "square" ? "aspect-square" : "aspect-[3/2]"
  const strip = i < 3 ? "md:aspect-auto md:h-[200px] lg:h-[260px]" : "md:aspect-auto md:h-[170px] lg:h-[210px]"
  return `${own} ${strip}`
}

const chips = [
  { value: "all", label: "All" },
  ...projects.map((p) => ({ value: p.slug, label: `${p.code.replace("N°", "")} ${p.title}` })),
]

export function WorkFilters({ active, onChange }: { active: string; onChange: (v: string) => void }) {
  return (
    <ul className="mt-9 flex flex-wrap gap-2" role="list">
      {chips.map((c) => (
        <li key={c.value}>
          <button
            type="button"
            className="t-meta rounded-full border border-hairline px-4 py-2 transition-colors duration-300 hover:border-basalt hover:text-blue data-[active]:border-basalt data-[active]:bg-basalt data-[active]:text-salt"
            data-active={active === c.value ? "" : undefined}
            aria-pressed={active === c.value}
            onClick={() => onChange(c.value)}
          >
            {c.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function WorkIndex({ intro }: { intro: React.ReactNode }) {
  const [active, setActive] = useState("all")

  const choose = (value: string) => {
    setActive(value)
    if (value !== "all") {
      requestAnimationFrame(() =>
        document.querySelector(`[data-series="${value}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" })
      )
    }
  }

  return (
    <>
      <section className="pt-10 md:pt-16">
        <div className="shell">
          {intro}
          <WorkFilters active={active} onChange={choose} />
        </div>
      </section>

      <section className="pb-[72px] pt-12 md:pb-[120px] md:pt-16">
        <div className="shell space-y-16 md:space-y-24">
          {projects.map((p) => (
            <section
              key={p.slug}
              data-series={p.slug}
              aria-labelledby={`series-${p.slug}`}
              className="scroll-mt-24"
              hidden={!(active === "all" || active === p.slug)}
            >
              <div className="rule flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-4">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="t-meta text-blue">{p.code}</span>
                  <h2 id={`series-${p.slug}`} className="t-m text-[24px] md:text-[28px] lg:text-[32px]">{p.title}</h2>
                  <span className="t-meta text-ash">{p.kind} · {p.year}</span>
                </div>
                <Link href={`/work/${p.slug}`} className="t-meta border-b border-current pb-1 transition-colors duration-300 hover:text-blue">
                  Open series →
                </Link>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-8 md:grid-cols-12 md:gap-x-6 md:gap-y-10" data-sheet>
                {p.images.map((im, i) => (
                  <li key={im.src} className={spans[i]} data-reveal style={delay((i % 4) * 0.06)}>
                    <Link href={`/work/${p.slug}`} className="group block">
                      <Frame
                        src={im.src}
                        alt={im.caption}
                        className={`w-full ${ratio(im.ratio, i)}`}
                        eager={i < 3}
                        sizes="(min-width:1200px) 25vw, (min-width:810px) 33vw, 50vw"
                      />
                      <p className="t-meta mt-3 text-ash transition-colors group-hover:text-blue">{im.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
