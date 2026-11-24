import Link from "next/link"
import Frame from "./Frame"
import { journal, type Post } from "@/data/content"

export default function JournalFeature({ post }: { post: Post }) {
  return (
    <article className="grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-10 lg:gap-16" data-reveal>
      <Link href={`/journal/${post.slug}`} className="group block">
        <Frame src={post.cover} alt={post.coverAlt} eager className="aspect-[3/2] w-full" sizes="(min-width:810px) 55vw, 100vw" />
      </Link>
      <div className="flex flex-col justify-center">
        <p className="t-meta text-ash">{post.featureMeta}</p>
        <h2 className="t-m mt-4 max-w-[16ch] text-[26px] md:text-[30px] lg:text-[34px]">
          <Link href={`/journal/${post.slug}`} className="transition-colors hover:text-blue">{post.title}</Link>
        </h2>
        <p className="t-body mt-4 max-w-[42ch] text-ash">{post.standfirst}</p>
        <Link href={`/journal/${post.slug}`} className="t-meta mt-7 inline-block self-start border-b border-current pb-1 transition-colors hover:text-blue">
          {journal.read}
        </Link>
      </div>
    </article>
  )
}
