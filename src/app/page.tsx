import Hero from "@/components/Hero"
import Statement from "@/components/Statement"
import SelectedWork from "@/components/SelectedWork"
import CommissionsBand from "@/components/CommissionsBand"
import AboutBand from "@/components/AboutBand"
import JournalBand from "@/components/JournalBand"
import CinematicBand from "@/components/CinematicBand"
import VoicesBand from "@/components/VoicesBand"
import RatesBand from "@/components/RatesBand"
import FaqBand from "@/components/FaqBand"
import ContactBand from "@/components/ContactBand"
import { site } from "@/data/content"
import { pageMeta } from "@/lib/meta"

export const metadata = pageMeta({
  title: "Oriel — Natural-light photography by Mira Castell",
  description: site.tagline,
  path: "/",
})

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <SelectedWork />
      <CommissionsBand />
      <AboutBand />
      <JournalBand />
      <CinematicBand />
      <VoicesBand />
      <RatesBand />
      <FaqBand />
      <ContactBand />
    </>
  )
}
