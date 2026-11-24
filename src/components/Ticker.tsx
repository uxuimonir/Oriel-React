import { ticker } from "@/data/content"

export default function Ticker() {
  const line = `${ticker} · `
  return (
    <section aria-hidden="true" className="ticker overflow-hidden border-y border-hairline bg-stone/60 py-6 md:py-10">
      <div className="ticker-track">
        {[0, 1].map((k) => (
          <span key={k} className="t-m whitespace-nowrap font-light text-ash">{line.repeat(4)}</span>
        ))}
      </div>
    </section>
  )
}
