export interface LegalSection { title: string; body: string }
export interface LegalDoc {
  slug: "privacy" | "terms" | "cookies"
  name: string
  eyebrow: string
  title: string
  description: string
  updated: string
  lead: string
  sections: LegalSection[]
}

const updated = "24 November 2026"
const noteFor = (check: string): LegalSection => ({
  title: "Template note",
  body: `This text is placeholder copy for the Oriel template. ${check}`,
})
const note = noteFor("Replace the studio details with your own and have the policy checked against the rules that apply where you work.")
const termsNote = noteFor("Replace the studio details with your own and have the terms checked against the rules that apply where you work.")
const cookieNote = noteFor("Update it to match the tools you actually use, such as analytics or embeds, and check it against the rules that apply where you work.")

export const legal: LegalDoc[] = [
  {
    slug: "privacy",
    name: "Privacy",
    eyebrow: "Legal — Privacy",
    title: "Privacy Policy",
    description: "What Oriel collects when you visit the site or write to the studio, why, and what you can ask me to change.",
    updated,
    lead: "This page explains what Oriel collects when you visit the site or write to the studio, why, and what you can ask me to change. It is written in plain language on purpose.",
    sections: [
      { title: "Who is responsible", body: "Oriel is the studio of Mira Castell, Rua da Luz 14, 2º, 1200-271 Lisboa, Portugal. For anything on this page, write to studio@oriel.photo. I decide how your information is used, so I am the data controller." },
      { title: "What I collect", body: "When you send the enquiry form I receive your name, email address, the kind of commission, the place and season you have in mind, and your message. When you email or call, I keep the message and the number or address it came from. The site itself records anonymous visit data, such as the pages viewed and the country, through the hosting platform’s analytics." },
      { title: "Why I use it", body: "I use enquiry details only to reply to you, to quote for a commission, and to keep a record of the conversation. I do not use them for marketing and I do not add anyone to a mailing list. The Field Notes letter, if you ask for it, is sent four times a year at most." },
      { title: "Who else sees it", body: "Your form message reaches me by email. The website is hosted by Framer, which processes visit data on my behalf. I do not sell or rent personal information, and I share it with nobody else unless the law requires it." },
      { title: "Cookies", body: "The site sets no advertising or tracking cookies. Any strictly necessary cookies are listed on the Cookie Policy page." },
      { title: "How long I keep it", body: "Enquiries that do not become a commission are deleted after twelve months. Commission records, contracts and invoices are kept for as long as Portuguese tax and accounting law requires." },
      { title: "Your rights", body: "You can ask me for a copy of what I hold about you, ask me to correct it, or ask me to delete it. You can also object to how I use it. I will answer within one month. If you are unhappy with the answer, you can complain to the Comissão Nacional de Proteção de Dados (CNPD)." },
      { title: "Changes to this page", body: "If I change how the studio handles personal information, I will update this page and the date at the top." },
      note,
    ],
  },
  {
    slug: "terms",
    name: "Terms",
    eyebrow: "Legal — Terms",
    title: "Terms of Use",
    description: "The few rules for using the Oriel site and commissioning work from the studio.",
    updated,
    lead: "These terms cover the use of this website. Commissions are agreed separately, in writing, before any work begins.",
    sections: [
      { title: "Using the site", body: "You are welcome to browse, read and share links to the site. Please do not copy it, scrape it, or use it in a way that harms it or other visitors." },
      { title: "Photographs and text", body: "The text on this site is written by the studio. The photographs are free-licence work by the photographers named in the credits, and each one stays with its photographer. You may view them here, but you may not republish or sell them as your own. For any other use, follow the licence stated by the photographer or write to studio@oriel.photo." },
      { title: "Enquiries and commissions", body: "Sending the enquiry form does not create a contract. A commission begins only when we have agreed the brief, the fee, the dates and the usage rights in writing." },
      { title: "Links to other sites", body: "The site links to other places, such as Instagram. I do not control them and I am not responsible for what they contain or how they treat your information." },
      { title: "No guarantees", body: "I try to keep the site accurate and available, but it is provided as it is. Details such as availability, prices and dates can change without notice." },
      { title: "Liability", body: "To the extent the law allows, the studio is not liable for loss that comes from using the site or relying on its content. Nothing here limits rights you have by law as a consumer." },
      { title: "Governing law", body: "These terms are governed by the law of Portugal, and any dispute belongs to the courts of Lisboa unless the law gives you the right to bring it elsewhere." },
      { title: "Changes to these terms", body: "I may update these terms from time to time. The date at the top shows the latest version." },
      termsNote,
    ],
  },
  {
    slug: "cookies",
    name: "Cookies",
    eyebrow: "Legal — Cookies",
    title: "Cookie Policy",
    description: "Which cookies the Oriel site uses, and how to control them.",
    updated,
    lead: "Cookies are small files a website stores in your browser. Oriel uses as few as it can, and this page lists what they are for.",
    sections: [
      { title: "What the site uses", body: "The site uses only what is needed to load pages and keep them secure. It does not set advertising cookies, and it does not follow you across other sites." },
      { title: "Visit statistics", body: "The hosting platform records anonymous visit data, such as pages viewed, country and device type, so I can see whether the site works. It does not identify you personally." },
      { title: "Enquiry form", body: "Sending the form does not set a cookie. Your message is used as described in the Privacy Policy." },
      { title: "Embedded content", body: "The site does not embed videos or maps that set their own cookies. If that changes, this page will say so before it happens." },
      { title: "Controlling cookies", body: "You can block or delete cookies in your browser settings at any time. The site will still work, although some convenience features may behave differently." },
      { title: "Changes to this policy", body: "If the site starts using other cookies, I will update this page and the date at the top." },
      cookieNote,
    ],
  },
]

export function getLegal(slug: LegalDoc["slug"]): LegalDoc {
  return legal.find((d) => d.slug === slug)!
}
