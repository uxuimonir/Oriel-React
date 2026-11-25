/** Image frame: exposure-open reveal on view, slow zoom on hover (hoverEffect scale 1.03 / 0.6s). */
interface Props {
  src: string
  alt: string
  className?: string
  imgClass?: string
  hover?: boolean
  eager?: boolean
  sizes?: string
}

export default function Frame({ src, alt, className = "", imgClass = "", hover = true, eager = false, sizes = "100vw" }: Props) {
  return (
    <div className={`relative ${className}`} data-frame data-hover={hover ? "" : undefined}>
      <img
        src={`/photos/${src}`}
        alt={alt}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={`absolute inset-0 h-full w-full object-cover ${imgClass}`}
      />
    </div>
  )
}
