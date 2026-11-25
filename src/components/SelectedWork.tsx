import Link from "next/link"
import Words from "./Words"
import ProjectCard from "./ProjectCard"
import { projects, work } from "@/data/content"

export default function SelectedWork() {
  const [p1, p2, p3, p4, p5, p6] = projects
  return (
    <section className="band">
      <div className="shell">
        <p className="t-meta text-blue">{work.eyebrow}</p>

        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="t-l max-w-[14ch]">
            <Words text={work.title[0]} />{" "}
            <span className="t-l-serif italic"><Words text={work.title[1]} /></span>
          </h2>
          <p className="t-body w-full max-w-[340px] text-ash">{work.body}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-20 lg:mt-20 lg:gap-x-12 lg:gap-y-28">
          <div className="md:col-span-6 lg:col-span-7">
            <ProjectCard project={p1} ratio="aspect-[4/5]" sizes="(min-width:1200px) 55vw, (min-width:810px) 50vw, 100vw" />
          </div>
          <div className="md:col-span-6 lg:col-span-5 lg:pt-32">
            <ProjectCard project={p2} delay={0.08} ratio="aspect-[4/5]" sizes="(min-width:810px) 50vw, 100vw" />
          </div>

          <div className="md:col-span-12">
            <ProjectCard project={p3} ratio="aspect-[4/5] md:aspect-[21/9]" sizes="100vw" />
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <ProjectCard project={p4} ratio="aspect-[4/5]" sizes="(min-width:810px) 50vw, 100vw" />
          </div>
          <div className="md:col-span-6 lg:col-span-7 lg:pt-32">
            <ProjectCard project={p6} delay={0.08} ratio="aspect-[4/5] lg:aspect-[3/2]" sizes="(min-width:810px) 50vw, 100vw" />
          </div>

          <div className="md:col-span-12">
            <ProjectCard project={p5} ratio="aspect-[4/5] md:aspect-[16/9]" sizes="100vw" />
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-24">
          <Link href="/work" className="t-small inline-flex items-center gap-2 border-b border-current pb-1 transition-colors hover:text-blue">
            Every frame, in one index
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
