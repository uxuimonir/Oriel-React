import { useState, type FormEvent } from "react"
import { enquiry } from "@/data/content"

type Status = "idle" | "sending" | "sent" | "error"

const line =
  "w-full border-0 border-b border-hairlinedark bg-transparent px-0 py-3 text-ondark placeholder:text-ashnight/70 focus:border-bluenight focus:outline-none"

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle")
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get("company")) return // honeypot: bots fill this in
    if (!endpoint) {
      const body = [...data.entries()]
        .filter(([k]) => k !== "company")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
      window.location.href = `mailto:${enquiry.to}?subject=${encodeURIComponent("New Oriel enquiry")}&body=${encodeURIComponent(body)}`
      setStatus("sent")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8" aria-describedby="enquiry-status">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="t-meta text-ashnight">Name</span>
          <input className={`${line} t-body`} name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="grid gap-1">
          <span className="t-meta text-ashnight">Email</span>
          <input className={`${line} t-body`} name="email" type="email" autoComplete="email" required placeholder="you@studio.com" />
        </label>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="t-meta text-ashnight">Kind of commission</span>
          <select className={`${line} t-body`} name="kind" defaultValue={enquiry.kinds[0]}>
            {enquiry.kinds.map((k) => (
              <option key={k} className="bg-night">{k}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="t-meta text-ashnight">Place and season</span>
          <input className={`${line} t-body`} name="place" type="text" placeholder="Alentejo, early autumn" />
        </label>
      </div>
      <label className="grid gap-1">
        <span className="t-meta text-ashnight">Message</span>
        <textarea className={`${line} t-body min-h-[160px] resize-y`} name="message" required placeholder="Tell me about the place and what the light should do." />
      </label>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="t-button inline-flex items-center gap-2 rounded-full bg-ondark px-6 py-3 text-night transition-colors duration-300 hover:bg-bluenight disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send enquiry →"}
        </button>
        <p id="enquiry-status" role="status" className="t-small text-ashnight">
          {status === "sent" && "Thank you — I'll reply within two working days."}
          {status === "error" && `Something went wrong. Please email ${enquiry.to} instead.`}
        </p>
      </div>
    </form>
  )
}
