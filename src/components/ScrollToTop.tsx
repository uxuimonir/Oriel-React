import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Jump to the top of the page on every route change, like a fresh Next.js page load. */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
