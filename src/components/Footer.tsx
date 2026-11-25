import { Link } from "react-router-dom"
import { footer, site } from "@/data/content"

export default function Footer() {
  return (
    <footer className="bg-night text-ondark">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div className="max-w-[340px]">
            <p className="t-logo flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-3.5 w-3.5 rounded-t-full border border-ondark" />
              {site.name}
            </p>
            <p className="t-small mt-4 text-ashnight">{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="t-meta text-ashnight">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link to={l.href} className="t-small link-quiet text-ondark/85">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="t-meta text-ashnight">{footer.letterTitle}</p>
            <p className="t-small mt-4 text-ashnight">{footer.letter}</p>
            <a href={site.instagram} rel="noopener noreferrer" target="_blank" className="t-small link-quiet mt-5 inline-block">
              Instagram ↗
            </a>
          </div>
        </div>

        <div className="rule-dark mt-14 flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="t-meta max-w-[760px] text-ashnight">{footer.legal}</p>
          <ul className="flex items-center gap-6">
            {footer.legalLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="t-small link-quiet text-ondark">{l.label}</Link>
              </li>
            ))}
          </ul>
          <a href="#top" className="t-meta link-quiet text-ondark">{footer.back}</a>
        </div>
      </div>
    </footer>
  )
}
