import type { ElementType } from "react"

/** Word-by-word rise + blur (22px, blur 5px, 0.9s ease, 0.05s stagger). */
interface Props { text: string; className?: string; as?: ElementType }

export default function Words({ text, className = "", as: Tag = "span" }: Props) {
  const words = text.split(" ")
  return (
    <Tag className={className} data-words>
      {words.map((w, i) => (
        <span key={i} style={{ transitionDelay: `${(i * 0.05).toFixed(2)}s` }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  )
}
