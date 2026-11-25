import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Site-wide scroll motion. Re-runs on every route change and cleans up after itself.
 *  - [data-reveal] / [data-frame] / [data-words]  → `.is-in` when scrolled into view
 *  - [data-count]                                  → count-up number
 *  - [data-parallax]                               → writes --py for a gentle drift
 */
export default function Motion() {
  const { pathname } = useLocation()

  useEffect(() => {
    const cleanups: Array<() => void> = []

    // Reveal
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add("is-in")
          reveal.unobserve(e.target)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    )
    document
      .querySelectorAll("[data-reveal]:not(.is-in),[data-frame]:not(.is-in),[data-words]:not(.is-in)")
      .forEach((el) => reveal.observe(el))
    cleanups.push(() => reveal.disconnect())

    // Count-up
    const counters = document.querySelectorAll<HTMLElement>("[data-count]:not([data-counted])")
    if (counters.length) {
      let raf = 0
      const count = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue
            const el = e.target as HTMLElement
            count.unobserve(el)
            el.dataset.counted = "true"
            const raw = el.dataset.count || el.textContent || ""
            const target = Number(raw.replace(/[^0-9.]/g, ""))
            if (!Number.isFinite(target) || target === 0 || reduced()) continue
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / 1400)
              el.textContent = t < 1 ? String(Math.round(target * (1 - Math.pow(1 - t, 3)))) : raw
              if (t < 1) raf = requestAnimationFrame(tick)
            }
            el.textContent = "0"
            raf = requestAnimationFrame(tick)
          }
        },
        { threshold: 0.4 }
      )
      counters.forEach((n) => count.observe(n))
      cleanups.push(() => {
        count.disconnect()
        cancelAnimationFrame(raf)
      })
    }

    // Parallax
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"))
    if (items.length && !reduced()) {
      let ticking = false
      const run = () => {
        const h = window.innerHeight
        for (const el of items) {
          const r = el.getBoundingClientRect()
          if (r.bottom < -200 || r.top > h + 200) continue
          const progress = (r.top + r.height / 2 - h / 2) / h
          el.style.setProperty("--py", `${(-progress * Number(el.dataset.parallax || "6")).toFixed(2)}%`)
        }
        ticking = false
      }
      const onScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(run)
      }
      window.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", onScroll)
      run()
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll)
        window.removeEventListener("resize", onScroll)
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return null
}
