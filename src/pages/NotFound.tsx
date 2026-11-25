import { Link } from "react-router-dom"
import Words from "@/components/Words"
import { notFound } from "@/data/content"
import { PageMeta } from "@/lib/meta"

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[74vh] items-center bg-night py-24 text-ondark md:min-h-[78vh]">
      <PageMeta title="Page not found | Oriel" description={notFound.body} path="/404" noindex />
      <div className="shell">
        <p className="t-meta text-bluenight">{notFound.eyebrow}</p>
        <h1 className="t-hero mt-6 max-w-[10ch]">
          <Words text={notFound.title[0]} />{" "}
          <span className="t-hero-serif italic"><Words text={notFound.title[1]} /></span>
        </h1>
        <p className="t-body mt-8 max-w-[42ch] text-ondark/85">{notFound.body}</p>
        <div className="mt-10 flex flex-wrap gap-8">
          {notFound.links.map((l) => (
            <Link key={l.href} to={l.href} className="t-small border-b border-current pb-1 transition-colors duration-300 hover:text-bluenight">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
