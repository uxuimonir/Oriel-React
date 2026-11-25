import { Link, useParams } from "react-router-dom"
import Words from "@/components/Words"
import Frame from "@/components/Frame"
import JournalRow from "@/components/JournalRow"
import ContactBand from "@/components/ContactBand"
import NotFoundPage from "./NotFound"
import { journal, posts } from "@/data/content"
import { delay } from "@/lib/style"
import { PageMeta } from "@/lib/meta"

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFoundPage />
  const more = posts.filter((x) => x.slug !== post.slug).slice(0, 3)

  return (
    <>
      <PageMeta title={`${post.title} | Oriel Journal`} description={post.standfirst} image={post.cover} path={`/journal/${post.slug}`} />
      <article>
        <header className="band pt-10 md:pt-16">
          <div className="shell max-w-[860px]">
            <p className="t-meta text-ash">
              <Link to="/journal" className="link-quiet">← Journal</Link> · {post.category} · <time dateTime={post.date}>{post.dateFull}</time> · {post.read} read
            </p>
            <h1 className="t-xl mt-6"><Words text={post.title} /></h1>
            <p className="t-lead mt-8 max-w-[52ch] text-ash">{post.standfirst}</p>
          </div>
        </header>

        <figure className="pb-16 md:pb-24">
          <div className="shell">
            <Frame
              src={post.cover}
              alt={post.coverAlt}
              eager
              sizes="100vw"
              className={post.portraitCover ? "mx-auto aspect-[4/5] w-full max-w-[760px]" : "aspect-[16/9] w-full"}
            />
            <figcaption className="t-meta mt-3 text-ash">{post.caption}</figcaption>
          </div>
        </figure>

        <section className="pb-[72px] md:pb-[120px]">
          <div className="shell max-w-[720px]">
            <p className="t-lead">{post.intro}</p>
            {post.paragraphs.map((para, i) => (
              <p key={i} className="t-body mt-6 text-ash" data-reveal style={delay(i * 0.07)}>{para}</p>
            ))}
            <p className="t-meta mt-12 text-ash">{post.signature}</p>
          </div>
        </section>

        <section className="band bg-stone/50">
          <div className="shell">
            <div className="flex items-baseline justify-between gap-6">
              <p className="t-meta text-ash">{journal.more}</p>
              <Link to="/journal" className="t-meta link-quiet">All entries →</Link>
            </div>
            <ul className="mt-8">
              {more.map((p, i) => <JournalRow key={p.slug} post={p} delay={Number((i * 0.07).toFixed(2))} />)}
            </ul>
          </div>
        </section>
      </article>

      <ContactBand />
    </>
  )
}
