import { faq } from "@/data/content"

export default function FaqBand() {
  return (
    <section className="band bg-night text-ondark">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="t-meta text-ashnight">{faq.eyebrow}</p>
          <h2 className="t-l mt-5 max-w-[10ch]">{faq.title[0]} <span className="t-l-serif italic">{faq.title[1]}</span></h2>
          <p className="t-small mt-6 max-w-[40ch] text-ashnight">{faq.body}</p>
        </div>

        <ul>
          {faq.items.map((item) => (
            <li key={item.q} className="rule-dark">
              <details className="group" name="faq">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-left">
                  <span className="t-body max-w-[44ch]">{item.q}</span>
                  <span aria-hidden="true" className="text-[28px] font-light leading-none text-ashnight transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="t-small max-w-[64ch] pb-7 text-ashnight">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
