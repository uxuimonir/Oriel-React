import type { ElementType } from "react"
import Words from "./Words"

interface Props { eyebrow?: string; title: string[]; body?: string; dark?: boolean; accent?: boolean; level?: ElementType }

export default function SectionHead({ eyebrow, title, body, dark = false, accent = false, level: Head = "h2" }: Props) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-[760px]">
        {eyebrow && <p className={`t-meta ${accent ? "text-blue" : dark ? "text-ashnight" : "text-ash"}`}>{eyebrow}</p>}
        <Head className={`t-l mt-5 ${dark ? "text-ondark" : ""}`}>
          <Words text={title[0]} />{" "}
          <span className="t-l-serif italic"><Words text={title[1]} /></span>
        </Head>
      </div>
      {body && <p className={`t-body w-full max-w-[340px] ${dark ? "text-ashnight" : "text-ash"}`}>{body}</p>}
    </div>
  )
}
