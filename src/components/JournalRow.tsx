import Link from "next/link"
import Frame from "./Frame"
import type { Post } from "@/data/content"
import { delay as d } from "@/lib/style"

interface Props { post: Post; delay?: number; full?: boolean }

export default function JournalRow({ post, delay = 0, full = false }: Props) {
  return (
    <li className="rule" data-reveal style={d(delay)}>
      <Link href={`/journal/${post.slug}`} className="group grid items-center gap-5 py-6 md:grid-cols-[1.8fr_auto_auto_96px]">
        <div>
          <h3 className="t-m text-[22px] transition-colors group-hover:text-blue md:text-[26px]">{post.title}</h3>
          {full && <p className="t-small mt-2 max-w-[60ch] text-ash">{post.standfirst}</p>}
        </div>
        <span className="t-meta text-ash">{post.category}</span>
        <span className="t-meta text-ash">{post.dateLabel} · {post.read}</span>
        <Frame
          src={post.cover}
          alt={post.coverAlt}
          hover={false}
          sizes="96px"
          className="hidden aspect-[4/3] w-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
        />
      </Link>
    </li>
  )
}
