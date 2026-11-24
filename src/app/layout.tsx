import type { Metadata, Viewport } from "next"
import { Archivo, DM_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Motion from "@/components/Motion"
import { site } from "@/data/content"

const archivo = Archivo({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-archivo", display: "swap" })
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono", display: "swap" })
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Oriel — Natural-light photography by Mira Castell", template: "%s" },
  description: site.tagline,
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${dmMono.variable} ${instrument.variable}`}>
      <body id="top">
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
        <main id="main" className="pt-16">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  )
}
