import type { CSSProperties } from "react"

/** Stagger delay for the scroll-reveal CSS (`--reveal-delay`). */
export const delay = (seconds: number): CSSProperties =>
  ({ "--reveal-delay": `${seconds.toFixed(2)}s` }) as CSSProperties
