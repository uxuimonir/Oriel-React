import Words from "@/components/Words"
import CommissionsBand from "@/components/CommissionsBand"
import ContactBand from "@/components/ContactBand"
import WorkIndex from "./WorkIndex"
import { projects, workIndex } from "@/data/content"
import { pageMeta } from "@/lib/meta"

export const metadata = pageMeta({
  title: "Work — Every frame, in order | Oriel",
  description: "Six series and 42 frames from 2023–2025: portraits, places and weather by Mira Castell, every photograph at its own ratio, numbered like film.",
  image: projects[0].images[0].src,
  path: "/work",
})

export default function WorkPage() {
  return (
    <>
      <WorkIndex
        intro={
          <>
            <p className="t-meta text-ash">{workIndex.eyebrow}</p>
            <h1 className="t-l mt-5 max-w-[12ch]">
              <Words text={workIndex.title[0]} />{" "}
              <span className="t-l-serif italic"><Words text={workIndex.title[1]} /></span>
            </h1>
            <p className="t-small mt-6 max-w-[56ch] text-ash">{workIndex.body}</p>
          </>
        }
      />
      <CommissionsBand />
      <ContactBand />
    </>
  )
}
