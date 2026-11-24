"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { site } from "@/data/content"

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const last = useRef(0)
  const openRef = useRef(open)
  openRef.current = open

  // Close the drawer after navigating.
  useEffect(() => setOpen(false), [path])

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    last.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last.current && y > 180 && !openRef.current)
      last.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const active = (href: string) => path.startsWith(href)

  return (
    <header
      id="nav"
      className="fixed inset-x-0 top-0 z-50 bg-salt/90 backdrop-blur transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <nav className="shell flex h-16 items-center justify-between gap-6" aria-label="Primary">
        <Link href="/" className="t-logo flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-3.5 w-3.5 rounded-t-full border border-basalt" />
          {site.name}
        </Link>

        <p className="t-meta hidden text-ash lg:block">{site.lightReport}</p>

        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="t-small link-nav"
                style={active(l.href) ? { color: "var(--color-blue)" } : undefined}
                aria-current={active(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="t-meta md:hidden"
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="nav-drawer"
        className={`grid overflow-hidden border-t border-hairline bg-salt transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!open}
      >
        <div className="min-h-0">
          <ul className="shell flex flex-col py-4">
            {site.nav.map((l, i) => (
              <li key={l.href} className={i ? "rule" : ""}>
                <Link href={l.href} className="t-m link-nav flex items-center justify-between py-4">
                  {l.label}
                  <span className="t-meta text-ash">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="shell t-meta pb-6 text-ash">{site.lightReportShort}</p>
        </div>
      </div>
    </header>
  )
}
