import { Routes, Route } from "react-router-dom"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Motion from "@/components/Motion"
import Home from "@/pages/Home"
import Studio from "@/pages/Studio"
import Contact from "@/pages/Contact"
import Work from "@/pages/Work"
import WorkSeries from "@/pages/WorkSeries"
import JournalIndex from "@/pages/JournalIndex"
import JournalPost from "@/pages/JournalPost"
import Legal from "@/pages/Legal"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <>
      <noscript>
        <style>{`[data-reveal],[data-frame] img,[data-words]>span{opacity:1!important;transform:none!important;filter:none!important}`}</style>
      </noscript>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-basalt focus:px-4 focus:py-2 focus:text-salt"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkSeries />} />
          <Route path="/journal" element={<JournalIndex />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/privacy" element={<Legal slug="privacy" />} />
          <Route path="/terms" element={<Legal slug="terms" />} />
          <Route path="/cookies" element={<Legal slug="cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Motion />
    </>
  )
}
