import Link from "next/link"
import Frame from "./Frame"
import type { Post } from "@/data/content"
import { delay as d } from "@/lib/style"

interface Props { post: Post; delay?: number; ratio?: string }

export default function JournalCard({ post, delay = 0, ratio = "aspect-[3/2]" }: Props) {
  return (
    <li data-reveal style={d(delay)}>
      <Link href={`/journal/${post.slug}`} className="group block">
        <Frame src={post.cover} alt={post.coverAlt} className={`w-full ${ratio}`} sizes="(min-width:810px) 50vw, 100vw" />
        <p className="t-meta mt-4 text-ash">{post.featureMeta}</p>
        <h3
          className="t-small mt-2 max-w-[28ch] text-[16px] leading-[1.3] transition-colors group-hover:text-blue md:text-[18px]"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {post.title}
        </h3>
      </Link>
    </li>
  )
}
