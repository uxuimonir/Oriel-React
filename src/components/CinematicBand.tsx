import Words from "./Words"
import Frame from "./Frame"
import { cinematic } from "@/data/content"

export default function CinematicBand() {
  return (
    <section className="relative isolate">
      <Frame src={cinematic.image} alt={cinematic.alt} hover={false} className="h-[70vh] min-h-[420px] w-full" sizes="100vw" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/85 via-night/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="shell pb-10 md:pb-14">
          <h2 className="t-l max-w-[16ch] text-ondark"><Words text={cinematic.title.join(" ")} /></h2>
          <p className="t-meta mt-4 text-ondark/60">{cinematic.caption}</p>
        </div>
      </div>
    </section>
  )
}
