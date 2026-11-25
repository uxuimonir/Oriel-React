import { Link } from "react-router-dom"
import type { ElementType } from "react"
import Frame from "./Frame"
import Words from "./Words"
import Reveal from "./Reveal"
import EnquiryForm from "./EnquiryForm"
import { contact, enquiry } from "@/data/content"

interface Props { variant?: "band" | "page"; level?: ElementType }

export default function ContactBand({ variant = "band", level: Head = "h2" }: Props) {
  const isPage = variant === "page"
  return (
    <section
      id="contact"
      className={`bg-night text-ondark ${isPage ? "pb-[88px] pt-14 md:pb-[120px] md:pt-20 lg:pb-[160px] lg:pt-24" : "band"}`}
    >
      <div className="shell">
        <p className="t-meta flex items-center gap-2 text-bluenight">
          <span aria-hidden="true" className="inline-block h-[6px] w-[6px] rounded-full bg-bluenight" />
          {contact.eyebrow}
        </p>
        <Head className="t-hero mt-6 max-w-[14ch]">
          <Words text={contact.title.slice(0, 2).join(" ")} />{" "}
          <span className="t-hero-serif italic"><Words text={contact.title[2]} /></span>
        </Head>

        <div className={`mt-12 grid gap-10 ${isPage ? "lg:grid-cols-2 lg:gap-16" : "lg:grid-cols-2"}`}>
          <div>
            <p className="t-body max-w-[44ch] text-ondark/85">{contact.body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              {!isPage && (
                <Link
                  to="/contact"
                  className="t-button inline-flex items-center gap-2 rounded-full bg-ondark px-6 py-3 text-night transition-colors duration-300 hover:bg-bluenight hover:text-ondark"
                >
                  {contact.button}
                </Link>
              )}
              <p className="t-meta flex items-center gap-2 text-ashnight">
                <span aria-hidden="true" className="inline-block h-[6px] w-[6px] rounded-full bg-bluenight" />
                {contact.availability}
              </p>
            </div>
          </div>

          <Reveal as="ul" className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {contact.details.map(([k, v]) => (
              <li key={k} className="rule-dark pt-5">
                <p className="t-meta text-ashnight">{k}</p>
                {k === "Write" ? (
                  <p className="t-body mt-2"><a href={`mailto:${v}`} className="link-quiet">{v}</a></p>
                ) : k === "Call" ? (
                  <p className="t-body mt-2"><a href={`tel:${v.replace(/\s/g, "")}`} className="link-quiet">{v}</a></p>
                ) : (
                  <p className="t-body mt-2">{v}</p>
                )}
              </li>
            ))}
          </Reveal>
        </div>

        {isPage && (
          <div className="rule-dark mt-16 grid gap-10 pt-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="t-meta flex items-center gap-2 text-bluenight">
                <span aria-hidden="true" className="inline-block h-[6px] w-[6px] rounded-full bg-bluenight" />
                {enquiry.eyebrow}
              </p>
              <h2 className="t-quote mt-6 italic">{enquiry.title}</h2>
              <p className="t-body mt-6 max-w-[44ch] text-ondark/70">{enquiry.body}</p>
            </div>
            <EnquiryForm />
          </div>
        )}

        {!isPage && (
          <figure className="mt-16">
            <Frame src={contact.image} alt={contact.alt} className="aspect-[21/9] w-full" sizes="100vw" />
            <figcaption className="t-meta mt-3 text-ashnight">{contact.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}
