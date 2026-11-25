import type { ElementType, ReactNode } from "react"
import { delay as d } from "@/lib/style"

/** Scroll reveal: opacity 0 → 1, y 36 → 0. */
interface Props { className?: string; delay?: number; as?: ElementType; children: ReactNode }

export default function Reveal({ className = "", delay = 0, as: Tag = "div", children }: Props) {
  return (
    <Tag className={className} data-reveal style={d(delay)}>
      {children}
    </Tag>
  )
}
