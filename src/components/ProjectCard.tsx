import Link from "next/link"
import Frame from "./Frame"
import type { Project } from "@/data/content"
import { delay as d } from "@/lib/style"

interface Props { project: Project; delay?: number; ratio?: string; sizes?: string }

export default function ProjectCard({
  project: p,
  delay = 0,
  ratio = "aspect-[4/5] lg:aspect-[3/2]",
  sizes = "(min-width:1200px) 58vw, (min-width:810px) 50vw, 100vw",
}: Props) {
  const meta = [p.kind, p.location, p.year].filter(Boolean).join(" · ")
  return (
    <Link href={`/work/${p.slug}`} className="group flex h-full flex-col" data-reveal style={d(delay)}>
      <Frame src={p.images[0].src} alt={`${p.title} — ${p.intro}`} className={`w-full ${ratio}`} sizes={sizes} />
      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-hairline pb-4">
        <h3 className="t-m text-[26px] leading-none transition-colors group-hover:text-blue md:text-[32px] lg:text-[38px]">{p.title}</h3>
        <span className="t-meta shrink-0 text-blue">{p.code}</span>
      </div>
      <p className="t-meta mt-3 text-ash">{meta}</p>
      <p className="t-small mt-2 max-w-[46ch] text-ash">{p.intro}</p>
      <span className="t-small mt-4 inline-flex items-center gap-2 self-start border-b border-current pb-0.5 transition-colors group-hover:text-blue">
        Open series
        <span aria-hidden="true" className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
