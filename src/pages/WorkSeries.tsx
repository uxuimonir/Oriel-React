import { Link, useParams } from "react-router-dom"
import Words from "@/components/Words"
import Frame from "@/components/Frame"
import ContactBand from "@/components/ContactBand"
import NotFoundPage from "./NotFound"
import { projects } from "@/data/content"
import { delay } from "@/lib/style"
import { PageMeta } from "@/lib/meta"

export default function SeriesPage() {
  const { slug } = useParams<{ slug: string }>()
  const p = projects.find((x) => x.slug === slug)
  if (!p) return <NotFoundPage />
  const [opening, establishing, detail, wide, motion, quiet, closing] = p.images

  return (
    <>
      <PageMeta title={`${p.title} | Oriel`} description={p.intro} image={p.images[0].src} path={`/work/${p.slug}`} />
      <article>
        <section className="band pt-10 md:pt-16">
          <div className="shell">
            <p className="t-meta text-blue">{p.number}</p>
            <p className="t-meta mt-4 text-ash">{p.indexKind} · {p.year}</p>
            <h1 className="t-hero mt-6 max-w-[12ch]"><Words text={p.title} /></h1>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="t-lead max-w-[50ch]">{p.intro}</p>
                <p className="t-body mt-8 max-w-[62ch] text-ash">{p.body}</p>
              </div>
              <ul className="grid h-fit gap-x-8 gap-y-6 sm:grid-cols-2">
                {[["Year", p.year], ["Location", p.locationFull ?? p.location], ["Hours", p.hours], ["Client", p.client]].map(([k, v], i) => (
                  <li key={k} className="rule pt-4" data-reveal style={delay(i * 0.07)}>
                    <p className="t-meta text-ash">{k}</p>
                    <p className="t-small mt-2">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="shell">
            <figure>
              <Frame src={opening.src} alt={opening.caption} eager className="aspect-[16/10] w-full" sizes="100vw" />
              <figcaption className="t-meta mt-3 text-ash">{opening.caption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="shell flex flex-col gap-[clamp(56px,7vw,96px)]">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
              <figure>
                <Frame src={establishing.src} alt={establishing.caption} className="aspect-[3/2] w-full" sizes="(min-width:1200px) 60vw, 100vw" />
                <figcaption className="t-meta mt-3 text-ash">{establishing.caption}</figcaption>
              </figure>
              <p className="t-small max-w-[40ch] text-ash">{p.aside}</p>
            </div>

            <blockquote className="t-quote mx-auto max-w-[18ch] text-center italic">{p.quote}</blockquote>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <figure>
                <Frame src={detail.src} alt={detail.caption} className="aspect-[4/5] w-full" sizes="(min-width:1200px) 45vw, 100vw" />
                <figcaption className="t-meta mt-3 text-ash">{detail.caption}</figcaption>
              </figure>
              <div className="lg:pt-24">
                <p className="t-body max-w-[52ch] text-ash">{p.body2}</p>
                {p.body3 && <p className="t-body mt-6 max-w-[52ch] text-ash">{p.body3}</p>}
              </div>
            </div>

            <figure>
              <Frame src={wide.src} alt={wide.caption} className="aspect-[21/9] w-full" sizes="100vw" />
              <figcaption className="t-meta mt-3 text-ash">{wide.caption}</figcaption>
            </figure>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <figure>
                <Frame src={quiet.src} alt={quiet.caption} className="aspect-[4/5] w-full" sizes="(min-width:1200px) 40vw, 100vw" />
                <figcaption className="t-meta mt-3 text-ash">{quiet.caption}</figcaption>
              </figure>
              <figure>
                <Frame src={motion.src} alt={motion.caption} className="aspect-[3/2] w-full" sizes="(min-width:1200px) 55vw, 100vw" />
                <figcaption className="t-meta mt-3 text-ash">{motion.caption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="band bg-stone/50">
          <div className="shell">
            <p className="t-meta text-ash">Credits</p>
            <h2 className="t-l mt-5">Made by</h2>
            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {p.credits.map(([k, v], i) => (
                <li key={k} className="rule pt-4" data-reveal style={delay(i * 0.07)}>
                  <p className="t-meta text-ash">{k}</p>
                  <p className="t-small mt-2">{v}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <Frame src={closing.src} alt={closing.caption} hover={false} className="h-[60vh] min-h-[360px] w-full" sizes="100vw" />
        </section>

        <section className="band">
          <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="t-meta text-ash">{p.next.number}</p>
              <Link to={`/work/${p.next.slug}`} className="t-l mt-4 inline-block transition-colors hover:text-blue">{p.next.title}</Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link to="/work" className="t-small border-b border-current pb-1 transition-colors hover:text-blue">
                All frames →
              </Link>
              <Link to="/contact" className="t-small border-b border-current pb-1 transition-colors hover:text-blue">
                Commission a series →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <ContactBand />
    </>
  )
}
