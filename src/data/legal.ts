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
const note: LegalSection = {
  title: "Template note",
  body: "This text is placeholder copy for the Oriel template. Replace the studio details with your own and have the page checked against the rules that apply where you work.",
}

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
      { title: "What I collect", body: "When you send the enquiry form I receive your name, email address, the kind of commission, the place and season you have in mind, and your message. When you email or call, I keep the message and the number or address it came from. The site itself records anonymous visit data, such as the pages viewed and the country, through the hosting platform's analytics." },
      { title: "Why I use it", body: "I use enquiry details only to reply to you, to quote for a commission, and to keep a record of the conversation. I do not use them for marketing and I do not add anyone to a mailing list. The Field Notes letter, if you ask for it, is sent four times a year at most." },
      { title: "Who else sees it", body: "Your form message reaches me by email. The website is hosted by a third-party platform, which processes visit data on my behalf. I do not sell or rent personal information, and I share it with nobody else unless the law requires it." },
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
    lead: "These are the few rules for using this site and for commissioning work from the studio. They are short on purpose. A signed commission agreement always takes priority over this page.",
    sections: [
      { title: "Using the site", body: "You are welcome to browse, read and share links to this site. Please do not copy it, scrape it, or use it in a way that harms it or other visitors." },
      { title: "Photographs and copyright", body: "All photographs and text on this site belong to their makers and are protected by copyright. Nothing may be reproduced, edited, printed or used to train a model without written permission." },
      { title: "Enquiries are not bookings", body: "Sending the enquiry form does not reserve a date or create a contract. A commission begins only when we both sign a written agreement and any deposit has been paid." },
      { title: "Commissions", body: "The scope, dates, fee, usage rights and cancellation terms of each commission are set out in its own agreement. Rates on this site are a guide and can change before an agreement is signed." },
      { title: "Links to other sites", body: "This site may link to other websites. I do not control them and I am not responsible for their content or how they use your information." },
      { title: "No warranty", body: "I try to keep the site accurate and available, but it is provided as it is. I cannot promise it will always be free of errors or interruptions." },
      { title: "Governing law", body: "These terms are governed by the law of Portugal, and any dispute will be heard by the courts of Lisbon, unless the law where you live says otherwise." },
      note,
    ],
  },
  {
    slug: "cookies",
    name: "Cookies",
    eyebrow: "Legal — Cookies",
    title: "Cookie Policy",
    description: "Which cookies the Oriel site uses, and how to control them.",
    updated,
    lead: "Cookies are small files a website stores in your browser. This page lists the ones this site uses and how to control them.",
    sections: [
      { title: "What this site uses", body: "Oriel sets no advertising, profiling or cross-site tracking cookies. Anonymous visit counts come from the hosting platform's analytics, which does not need to identify you." },
      { title: "Strictly necessary", body: "Some storage is needed for the site to work, such as remembering that a form has been sent. It cannot be switched off here and does not need your consent." },
      { title: "Third-party content", body: "If you follow a link to Instagram or another service, that service may set its own cookies. They are governed by that service's own policy." },
      { title: "Controlling cookies", body: "You can block or delete cookies in your browser settings. The site will keep working, although some small conveniences may reset." },
      { title: "Changes to this page", body: "If I add any analytics or other tools that use cookies, I will list them here and ask for your consent first where the law requires it." },
      note,
    ],
  },
]

export function getLegal(slug: LegalDoc["slug"]): LegalDoc {
  return legal.find((d) => d.slug === slug)!
}
