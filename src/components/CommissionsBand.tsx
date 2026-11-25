import Words from "./Words"
import Frame from "./Frame"
import { commissions } from "@/data/content"
import { delay } from "@/lib/style"

export default function CommissionsBand() {
  return (
    <section className="band">
      <div className="shell">
        <p className="t-meta text-ash">{commissions.eyebrow}</p>
        <h2 className="t-l mt-5 max-w-[16ch]">
          <Words text={commissions.title[0]} />{" "}
          <span className="t-l-serif italic"><Words text={commissions.title[1]} /></span>
        </h2>

        <ul className="mt-12">
          {commissions.services.map((s, i) => (
            <li
              key={s.index}
              className="rule group grid items-center gap-6 py-7 md:grid-cols-[64px_1.1fr_1.6fr_auto]"
              data-reveal
              style={delay(i * 0.08)}
            >
              <span className="t-meta text-ash">{s.index}</span>
              <h3 className="t-m">{s.title}</h3>
              <p className="t-small max-w-[52ch] text-ash">{s.copy}</p>
              <div className="flex items-center gap-5">
                <span className="t-meta hidden text-ash lg:block">{s.clients}</span>
                <Frame
                  src={s.image}
                  alt={`${s.title} commission`}
                  hover={false}
                  sizes="120px"
                  className="h-0 w-0 opacity-0 transition-all duration-500 group-hover:h-[84px] group-hover:w-[120px] group-hover:opacity-100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
