/**
 * Single source of content for the Next.js build.
 * Every string, image hash and number here was read out of the original
 * Framer project (Oriel — eb6jMfzMSh5tAH8JSYSl). Nothing is invented.
 */

export const img = (hash: string) => hash

export const site = {
  name: "Oriel",
  url: "https://oriel.photo",
  tagline:
    "Oriel is the studio of Mira Castell: portraits, places and weather, in natural light, made slowly along the Atlantic edge.",
  lightReport: "Lisbon 07:10 · First light · Golden hour 18:40",
  lightReportShort: "Lisbon 07:10 · Golden hour 18:40",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Studio", href: "/studio" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  email: "studio@oriel.photo",
  phone: "+351 21 000 0414",
  address: "Rua da Luz 14, 2º, 1200-271 Lisboa",
  visits: "By appointment, after the light has gone.",
  instagram: "https://instagram.com",
  socialImage: img("ogqySZBIv1qCgh3dxHc5Y6h0.png"),
}

export const hero = {
  title: "Light,",
  serif: "held still.",
  intro: site.tagline,
  image: img("zwsYwNmeZv4H9cJEPOpu8PkMw.png"),
  alt: "A camera framing a fiery mountain sunset over a still lake.",
  caption: [
    "Frame · N°03 Sea Hours",
    "Place · São Miguel, Azores",
    "Hour · 07:10, first light",
    "Exposure · f/16 · 1/8 s · ISO 100",
  ],
}

export const statement = {
  eyebrow: "08:30 — The studio",
  body:
    "I photograph people, places and weather, mostly along the Atlantic edge. I work slowly: the same horizon for forty mornings, a week of fog for one clear hour, a morning of coffee before the first portrait. The waiting is the work.",
  image: img("pEACGGovRqEmDePPJTIMX8h4.jpg"),
  alt: "A lone figure on a cliff edge against a burning sunset sky.",
  caption: "06:40 — Fog, the Atlantic edge",
  stats: [
    { figure: "212", label: "Days spent waiting for light, 2025" },
    { figure: "61", label: "Days it came" },
    { figure: "148", label: "Photographs kept" },
  ],
}

export type Shape = "portrait" | "landscape" | "feature"

export interface Project {
  code: string
  number: string
  title: string
  slug: string
  kind: string
  location: string
  locationFull?: string
  indexKind: string
  year: string
  hours: string
  client: string
  shape: Shape
  intro: string
  body: string
  aside: string
  quote: string
  body2: string
  body3: string
  tint: string
  images: { src: string; label: string; caption: string; ratio: "portrait" | "landscape" | "square" }[]
  credits: [string, string][]
  next: { number: string; title: string; slug: string }
}

export const projects: Project[] = [
  {
    code: "N°01",
    number: "N°01 — Portrait series",
    title: "Tide Tables",
    slug: "tide-tables",
    kind: "Portrait series",
    indexKind: "Portraits",
    location: "Póvoa de Varzim, Portugal",
    year: "2025",
    hours: "06:30 – 10:00",
    client: "Self-initiated · Fold Quarterly",
    shape: "portrait",
    intro: "Fishing families of the northern coast, photographed in the light of their own doorways.",
    body:
      "Póvoa de Varzim still keeps its boats on the beach. For a year I went back every month to photograph the families who work them, always in the first hours of the morning and always where they stood when I arrived: a doorway, a harbour wall, the kitchen. I asked nobody to move into better light. The series is about the light they already live in.",
    aside: "Every rope on the harbour wall was coiled by the same hands.",
    quote: "Nobody moved into the light.",
    body2:
      "I photographed each family where I found them, at whatever hour the tide allowed. Some portraits took a morning of coffee before the camera came out of the bag.",
    body3: "Fold Quarterly ran twelve of them across twenty pages, with the families' own words beside them.",
    tint: "var(--color-tide)",
    images: [
      { src: img("InC3bii61lkT4lHPaj5w51tA.jpg"), label: "Opening", ratio: "portrait", caption: "Portrait of an elderly man with a grey beard, in a knotted headscarf and pale work shirt, eyes lowered." },
      { src: img("08EuRcJ8RtrVCUZ7dOnM5As.jpg"), label: "Establishing", ratio: "landscape", caption: "Establishing — masts and hulls against a copper dawn, 06:40" },
      { src: img("lfhwxeAodMU5a79OjrXhtRHWis.jpg"), label: "Detail", ratio: "portrait", caption: "Detail — rope, coiled every winter" },
      { src: img("9jU3yHpQDjVh6xER00eUGPzEeo.jpg"), label: "Wide", ratio: "landscape", caption: "Wide — a boat hauled up for the night, 20:10" },
      { src: img("7D7DfBhyc1fgzV2eaeIIxt4ouC0.jpg"), label: "Motion", ratio: "landscape", caption: "Motion — a cast net spreading from the bow, 1/60 s" },
      { src: img("znywpyuGhbHjurTLXiIOUQ05cOM.jpg"), label: "Quiet", ratio: "portrait", caption: "Quiet — the first boat out, 06:20" },
      { src: img("4Zse7vajPxQlusVsxUDoAMcXiU.jpg"), label: "Closing", ratio: "landscape", caption: "Closing — the last of the morning light" },
    ],
    credits: [
      ["Photography", "Mira Castell"],
      ["Published", "Fold Quarterly, no. 31"],
      ["Families", "Maio, Gomes, Carvalho, Nunes"],
      ["Camera", "Medium format, 80 mm"],
    ],
    next: { number: "Next series · N°02", title: "Low Cloud →", slug: "low-cloud" },
  },
  {
    code: "N°02",
    number: "N°02 — Fashion editorial",
    title: "Low Cloud",
    slug: "low-cloud",
    kind: "Fashion editorial",
    indexKind: "Editorial",
    location: "Salzkammergut, Austria",
    year: "2024",
    hours: "09:00 – 16:00, overcast",
    client: "Northlight Review",
    shape: "landscape",
    intro: "A winter story for Northlight Review, made in eleven days under a lid of cloud.",
    body:
      "Northlight Review sent a model, a stylist and a rail of black wool to the lakes of the Salzkammergut in November. For eleven days the cloud sat on the ridges and did not move. We stopped waiting for it to lift and made the story about it instead: black against the fog, the fog against the hills, and one boathouse that was the only fixed point for miles.",
    aside: "The only metal on the shoot, and the only thing in eleven days that shone.",
    quote: "The fog was the set.",
    body2:
      "Fog flattens distance. Each ridge is a shade paler than the one in front, so anything black becomes the darkest, sharpest thing in the frame. I shot on a long lens to stack the ridges behind him.",
    body3: "The magazine ran fourteen pages without a single blue sky. Nobody asked for one.",
    tint: "var(--color-lowcloud)",
    images: [
      { src: img("gA2ojH18vo4dBCZYc8iiru3BcM.jpg"), label: "Opening", ratio: "portrait", caption: "A man in sunglasses and a black vest, a grey-green jacket pulled round his shoulders, looking to one side." },
      { src: img("cPs4xMDxoK3OZnAKnhObgKWRIQ.jpg"), label: "Establishing", ratio: "landscape", caption: "Establishing — the ridges, 09:30" },
      { src: img("rgsOrbxVvdUubjqmwhEOWZXnbg.jpg"), label: "Detail", ratio: "portrait", caption: "Detail — a watch, and weather" },
      { src: img("lGscyXIS42RllTHokK0kF5xPy4.jpg"), label: "Wide", ratio: "landscape", caption: "Wide — mist lying in the valley, 15:40" },
      { src: img("dsoLDBu0ZJbr6JrGu9r6G7J7Q.jpg"), label: "Motion", ratio: "landscape", caption: "Motion — the one clear afternoon" },
      { src: img("gax6V0OwxKFOtM6XwXlaCk3R93M.jpg"), label: "Quiet", ratio: "portrait", caption: "Quiet — a lone figure on the bridge in orange haze, 11:15" },
      { src: img("fLVBUltkjnQQ8cNOfUfgBeUiakw.jpg"), label: "Closing", ratio: "landscape", caption: "Closing — the fog closing again" },
    ],
    credits: [
      ["Client", "Northlight Review"],
      ["Photo director", "Hanne Joensen"],
      ["Styling", "Sunniva Poulsen"],
      ["Camera", "Medium format digital, 100–200 mm"],
    ],
    next: { number: "Next series · N°03", title: "Sea Hours →", slug: "sea-hours" },
  },
  {
    code: "N°03",
    number: "N°03 — Travel · location",
    title: "Sea Hours",
    slug: "sea-hours",
    kind: "Travel",
    indexKind: "Landscape",
    location: "São Miguel, Azores",
    year: "2025",
    hours: "05:52 – 21:30",
    client: "Self-initiated · Editions",
    shape: "landscape",
    intro: "The sea around one island, photographed at every hour of the day over forty-one days.",
    body:
      "Sea Hours began as a test. For six weeks I went down to the sea around São Miguel every day, at a different hour each time: the harbour before dawn, the cliffs at noon, the jetty at blue hour. The horizon never moves. Everything else does: the colour of the water, the weight of the sky, and the line between them, which some mornings is sharp enough to cut and some mornings is not there at all.",
    aside: "Straight down, with the camera held out over the edge. Once.",
    quote: "One exposure per hour.",
    body2:
      "The rule kept me honest. If the light was wrong I waited until it wasn't, or I went home. Forty-one days produced twenty-six photographs, and the ones here are in the order of the day.",
    body3: "Every frame is levelled to the same horizon, whatever else is in it. Hung together, the prints read like a clock.",
    tint: "var(--color-seahours)",
    images: [
      { src: img("DOOgqqgdCiWyuOjtioENZT1pAM.jpg"), label: "Opening", ratio: "landscape", caption: "07:10 — first light, the ninth morning" },
      { src: img("ciz5k6RNvtX4GQcHNFwF9Yzy7kA.jpg"), label: "Establishing", ratio: "landscape", caption: "05:52 — first colour on the water, before the sun clears it" },
      { src: img("WsZtEMrs0bwmk35RAN3JsaQhg.jpg"), label: "Detail", ratio: "portrait", caption: "19:15 — the last sun on the swell" },
      { src: img("1J8N7zydrJid9a3SIgxwgsf8U.jpg"), label: "Wide", ratio: "landscape", caption: "17:30 — low sun on the arch" },
      { src: img("u2vB2g2Oy9lzSHwKOVbVho5rKcw.jpg"), label: "Motion", ratio: "landscape", caption: "06:35 — surf on dark sand under a pink horizon" },
      { src: img("NZ7DTSIRhLAI6QfowLKNHxPrw.jpg"), label: "Quiet", ratio: "portrait", caption: "20:05 — a sailboat crossing the harbour mouth, afterglow" },
      { src: img("aXk1OpZlt63XXdWkOgqw2XF0.jpg"), label: "Closing", ratio: "landscape", caption: "21:30 — blue hour, the jetty" },
    ],
    credits: [
      ["Photography", "Mira Castell"],
      ["Printing", "Estúdio Prata, Lisbon"],
      ["Edition", "7 + 2 AP, 120 × 80 cm"],
      ["Camera", "4×5 field camera, 150 mm"],
    ],
    next: { number: "Next series · N°04", title: "The Salt Line →", slug: "salt-line" },
  },
  {
    code: "N°04",
    number: "N°04 — Commercial campaign",
    title: "The Salt Line",
    slug: "salt-line",
    kind: "Commercial campaign",
    indexKind: "Campaign",
    location: "Namib coast",
    locationFull: "Namib coast, Namibia",
    year: "2024",
    hours: "15:30 – 19:10",
    client: "Merid Outerwear",
    shape: "landscape",
    intro: "An outerwear campaign in which the person is the smallest thing in the frame.",
    body:
      "Merid make clothes for long walks in hard places. For their summer campaign we went to the Namib, where the dunes run down to the Atlantic, the salt pans crack into plates and the wet sand at low tide turns into a mirror. The brief was mine to write, and it was one line: the person is the smallest thing in the frame. Then, for the stores, we came in close.",
    aside: "For the store windows we came in close. It is still the only portrait in the campaign.",
    quote: "One jacket, four afternoons.",
    body2:
      "We had one model, one jacket in two colours and four afternoons of workable light. The pans are so large and so level that a person a kilometre away looks close enough to call to.",
    body3: "The campaign ran in print and on the street at 1:1 scale. Nobody could find the jacket at first. That was the point.",
    tint: "var(--color-saltline)",
    images: [
      { src: img("TEPkmH49Gf5taldrN7QHj2Ag.jpg"), label: "Opening", ratio: "portrait", caption: "Figure — one walker on the dune ridge, sun overhead, 15:35" },
      { src: img("FMHtL3ObjwRnQnpczPzi6E5ulM.jpg"), label: "Establishing", ratio: "landscape", caption: "Establishing — the dune crest, 15:40" },
      { src: img("RIe8AwGC5GIPb2lNAWLJjzeAylc.jpg"), label: "Detail", ratio: "portrait", caption: "Detail — wind ripples on the dune face" },
      { src: img("JZy5C5PUjCIziceUS1CG8M9Ssk.jpg"), label: "Wide", ratio: "landscape", caption: "Wet, mirror-like sand at low tide, the evening sky held in it." },
      { src: img("yHOC0E5HZ5CdcdtEL2a4J2AXz4.jpg"), label: "Motion", ratio: "landscape", caption: "Motion — walking out across the pan, long shadows" },
      { src: img("bXyZGXogxO8fHasmUP2mKgZlM7k.jpg"), label: "Quiet", ratio: "portrait", caption: "Quiet — the pan, close up" },
      { src: img("eRlv5j0jVYYByLuqwxeg8c3C9LY.jpg"), label: "Closing", ratio: "landscape", caption: "Closing — the last afternoon on the coast" },
    ],
    credits: [
      ["Client", "Merid Outerwear"],
      ["Creative director", "Inés Arce"],
      ["Styling", "Merid in-house"],
      ["Camera", "Medium format digital, 35 & 250 mm"],
    ],
    next: { number: "Next series · N°05", title: "After Midnight →", slug: "after-midnight" },
  },
  {
    code: "N°05",
    number: "N°05 — Urban documentary",
    title: "After Midnight",
    slug: "after-midnight",
    kind: "Urban documentary",
    indexKind: "Documentary",
    location: "Lisbon",
    year: "2023",
    hours: "23:00 – 06:00",
    client: "Self-initiated · Galeria Maré",
    shape: "feature",
    intro: "The people who keep Lisbon running while it sleeps, and the river they work beside.",
    body:
      "For a winter I kept night hours. Bakers start at two, the first trams leave the depot at five, and the ferries run half-empty across a river that is nothing but lights. I photographed the people first and the city second, by whatever light was already there: ovens, lamps, the green glow of a ticket machine.",
    aside: "The platform lamps were the only light. I exposed for them and let the rest go.",
    quote: "Timed by the ferries.",
    body2:
      "The long exposures of the river run between thirty seconds and four minutes. I stopped using a watch and started counting ferries: one crossing, one frame.",
    body3: "",
    tint: "var(--color-aftermidnight)",
    images: [
      { src: img("WJpVXJuz8UGBoqTl59NfANDlU.jpg"), label: "Opening", ratio: "portrait", caption: "Platform — a lone traveller waiting for the last train, 00:50" },
      { src: img("oc5bfZiavikQNhHuiV4zhzOtbo.jpg"), label: "Establishing", ratio: "landscape", caption: "A long arched bridge lit from beneath at dusk, its lights reflected in the river." },
      { src: img("BWBOzlapkUtkHDUMrsnjzxRRj9s.jpg"), label: "Detail", ratio: "portrait", caption: "Detail — a street lamp against the first glow, 06:05" },
      { src: img("DAwgyJNl3VwDhQSvONb9PdlfWAo.jpg"), label: "Wide", ratio: "landscape", caption: "Wide — the pier lamps, 00:40" },
      { src: img("uGyeRv6vtaNjI7lbtYVGRGyz0w.jpg"), label: "Motion", ratio: "landscape", caption: "Motion — headlights on the river road, 30 s" },
      { src: img("bSh2JctL0PxN1vlYpUdlDUuJ6c.jpg"), label: "Quiet", ratio: "portrait", caption: "Quiet — the last carriage, 01:40" },
      { src: img("kolmen7vgnof89RcpwgsCX7bWs.jpg"), label: "Closing", ratio: "landscape", caption: "Closing — first light over the river" },
    ],
    credits: [
      ["Photography", "Mira Castell"],
      ["Printing", "Estúdio Prata, Lisbon"],
      ["Exhibited", "Galeria Maré, 2024"],
      ["Camera", "35 mm rangefinder; medium format for the river"],
    ],
    next: { number: "Next series · N°06", title: "Limewash →", slug: "limewash" },
  },
  {
    code: "N°06",
    number: "N°06 — Personal study",
    title: "Limewash",
    slug: "limewash",
    kind: "Personal study",
    indexKind: "Study",
    location: "Alentejo, Andalusia, Cyclades",
    year: "2025",
    hours: "12:00 – 14:00",
    client: "Self-initiated",
    shape: "portrait",
    intro: "White walls between noon and two, when lime turns blue in the shade.",
    body:
      "Every summer I spend a few weeks photographing nothing but white walls, and only between noon and two, when most photographers put the camera away. The sun is overhead, shadows are short and hard, and white turns blue wherever the sky is the only thing lighting it. The study has moved from the Alentejo to Andalusia and the Cyclades; the rule has not. It is the most abstract work I make, and the most exact.",
    aside: "The only thing in the study that isn't a wall is the light coming through one.",
    quote: "Lime is not white.",
    body2:
      "In the shade it takes the colour of the sky. In the sun it takes the colour of the sun. The whole study is about that one fact, and about the shadows that draw every edge of a building twice.",
    body3: "",
    tint: "var(--color-limewash)",
    images: [
      { src: img("NrP0JyMi1eYQN3NQC5tnUXjdk4.jpg"), label: "Opening", ratio: "portrait", caption: "A whitewashed chapel with a small bell gable on a rocky hilltop above the sea." },
      { src: img("f98ob4ZtSY2I6h2i75JyDjmYufE.jpg"), label: "Establishing", ratio: "landscape", caption: "White steps and a curved wall, 12:10" },
      { src: img("AC75px8r7DnV62HGhGm9HRyQFWw.jpg"), label: "Detail", ratio: "portrait", caption: "Folded façade, 12:45" },
      { src: img("RD6H90duKqJsL87Dv6xaPgK1jZ0.jpg"), label: "Wide", ratio: "landscape", caption: "The arcade, 13:30" },
      { src: img("i6lU4iSKV20jTh0C9kiDMmcbdM.jpg"), label: "Motion", ratio: "landscape", caption: "Gables, 13:05" },
      { src: img("C2BEuPfN2lEtffJmjFi4e2QbOxQ.jpg"), label: "Quiet", ratio: "portrait", caption: "The stair, 13:55" },
      { src: img("HwDUNRF3OStB9QS1inehZaYoI.jpg"), label: "Closing", ratio: "landscape", caption: "Closing — the wall at two o'clock" },
    ],
    credits: [
      ["Photography", "Mira Castell"],
      ["Locations", "Alentejo, Andalusia, the Cyclades"],
      ["Edition", "5 + 1 AP, 50 × 62 cm"],
      ["Camera", "4×5 field camera, 90 mm shift"],
    ],
    next: { number: "Next series · N°01", title: "Tide Tables →", slug: "tide-tables" },
  },
]

export const work = {
  eyebrow: "10:00 — Selected work",
  title: ["Six stories,", "one kind of light."],
  body:
    "Portraits, an editorial, a landscape series, a campaign, a documentary and a study, 2023–2025. Each was made in one place, at one hour, over as many days as it took.",
  indexLink: "Every frame, in one index →",
}

export const workIndex = {
  eyebrow: "Index",
  title: ["Every frame,", "in order."],
  body:
    "6 series · 44 frames · 2023–2025. Every photograph on the site, at its own ratio, numbered like film.",
  filters: ["All", "01 Tide Tables", "02 Low Cloud", "03 Sea Hours", "04 The Salt Line", "05 After Midnight", "06 Limewash"],
}


export const commissions = {
  eyebrow: "12:40 — Commissions",
  title: ["Four ways to", "work together."],
  services: [
    { index: "01", title: "Portrait", copy: "People photographed in the light they already live in: doorways, workshops, wheelhouses.", clients: "Fold Quarterly, private commissions", image: img("W6iwY1zPdGxS4BrAM1eoN6zF2g.jpg") },
    { index: "02", title: "Editorial", copy: "Fashion and stories for magazines, made on location over days, not hours.", clients: "Northlight Review, Fold Quarterly", image: img("wZ12DSmk5YPDzAsrfWtq4kvryTk.jpg") },
    { index: "03", title: "Documentary", copy: "Long stories about places, told through the people who keep them running.", clients: "Galeria Maré, Público Magazine", image: img("5790aA68j4g4yAQ20buDGxd64.webp") },
    { index: "04", title: "Campaign", copy: "Brand work for companies that can wait for the weather: outerwear, hotels, wine.", clients: "Merid Outerwear, Casa Ferro Wines", image: img("sVld9fMuxOJrBZMxN54Ao9lA.jpg") },
  ],
}

export const about = {
  eyebrow: "15:30 — About Mira",
  title: ["I grew up in a flat in Porto", "with one good window."],
  paragraphs: [
    "It faced west over the river. My grandmother kept a chair in it and moved the chair through the day to stay in the sun. I think I learned to see by watching her follow the light around one room.",
    "The studio is named after that window. I started it in Lisbon in 2014 after six years assisting architectural photographers, and I still work the way they taught me: a tripod, a large camera, and a lot of standing still.",
    "I photograph people the way I photograph weather: I wait until they forget I am there. Most of my commissions come from magazines and a few patient brands, around eight a year, so each gets the time it needs.",
  ],
  facts: [
    ["Name", "Mira Castell, b. 1987, Porto"],
    ["Studio", "Rua da Luz 14, 2º, Lisbon"],
    ["Working", "Along the Atlantic edge, and wherever the light is"],
    ["Since", "2014 · around eight commissions a year"],
  ] as [string, string][],
  image: img("1L0fr83KbEu8L5DY5efqCIWOvs.jpg"),
  alt: "A photographer standing by a still lake at first light.",
  caption: "Low tide, 07:20",
  clientsLabel: "Selected clients",
  clients:
    "Northlight Review · Atelier Cal · Merid Outerwear · Hotel Sesmaria · Holm & Vale · Fold Quarterly · Galeria Maré · Casa Ferro Wines",
}

export const studioHero = {
  eyebrow: "Studio · Lisbon, since 2014",
  title: ["One photographer,", "one good window."],
  body:
    "Oriel is Mira Castell and whoever is carrying the second bag that week. Portraits, places and weather, in natural light, for magazines, architects, hotels and brands that can wait for the weather.",
  facts: [
    ["Based", "Rua da Luz 14, Lisbon"],
    ["Working", "The Atlantic edge, and wherever the light is"],
    ["Pace", "Around eight commissions a year"],
    ["Next opening", "Spring 2027"],
  ] as [string, string][],
  image: img("OObuBu1hIeI1qaKDdfdO9h09ghY.jpg"),
  alt: "Two markers on a shore, the sun going down behind the sea.",
  caption: "06:40 — A tripod on the beach, waiting for the mist to lift",
}

export interface Post {
  title: string
  slug: string
  category: string
  date: string
  dateLabel: string
  dateFull: string
  read: string
  featureMeta: string
  standfirst: string
  cover: string
  coverAlt: string
  caption: string
  portraitCover: boolean
  intro: string
  paragraphs: string[]
  signature: string
}

export const posts: Post[] = [
  {
    title: "The hour before the fog lifts",
    slug: "fog-hour",
    category: "Field notes",
    date: "2026-05-07",
    dateLabel: "May 2026",
    dateFull: "7 May 2026",
    read: "6 min",
    featureMeta: "Field notes · May 2026 · 6 min",
    standfirst: "Why the tripod goes up an hour early, and what the last ten minutes of fog give back.",
    cover: img("izRa5afKBsCOHMcARQKvJBZLXH0.jpg"),
    coverAlt: "A chapel on a cliff edge above the sea, in thick morning fog.",
    caption: "A chapel on a cliff edge above the sea, held in thick morning fog.",
    portraitCover: true,
    intro:
      "Fog is not weather you photograph. It is weather you wait inside until it decides to leave.",
    paragraphs: [
      "I drive out an hour before the light is any good. Not for the light, for the standing around: the ground is soft, the legs sink, and the first frame is always the one where the horizon is half a degree off.",
      "The useful ten minutes come at the end. The fog thins from the top down, the chapel arrives before the cliff does, and the sea stays white for a while longer. Then it is an ordinary morning and I pack up.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
  {
    title: "One window, all winter",
    slug: "one-window",
    category: "Essay",
    date: "2026-02-18",
    dateLabel: "Feb 2026",
    dateFull: "18 February 2026",
    read: "5 min",
    featureMeta: "Essay · Feb 2026 · 5 min",
    standfirst: "What a north-facing room teaches about light you cannot move, only wait for.",
    cover: img("eD6hYrM6Ve10InlL4gDWiZktJb4.jpg"),
    coverAlt: "A dark room with a wooden table lit by one beam of light.",
    caption: "A dark room with a wooden table, lit by one beam of light.",
    portraitCover: false,
    intro:
      "The studio has one good window. For four months of the year it is the only light I use.",
    paragraphs: [
      "North light does not flatter and does not change its mind. It arrives late, stays flat, and leaves early. Everything I shoot indoors in winter is made in the two metres beside that window.",
      "The work is in waiting for the hour the room decides to be good, then shooting fast while it lasts.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
  {
    title: "Forty mornings at the same horizon",
    slug: "forty-mornings",
    category: "Field notes",
    date: "2026-03-14",
    dateLabel: "Mar 2026",
    dateFull: "14 March 2026",
    read: "8 min",
    featureMeta: "Field notes · Mar 2026 · 8 min",
    standfirst: "What six weeks on one basalt ledge taught me about patience, tripods and the colour grey.",
    cover: img("ICHtrFzk4BUGI4eCH7PtX4BxG8.jpg"),
    coverAlt: "A wooden rowing boat resting on wet sand under a grey evening sky.",
    caption: "A wooden rowing boat resting on wet sand under a grey evening sky.",
    portraitCover: false,
    intro:
      "The ledge at Mosteiros is about the size of a kitchen table. You reach it by a path that is fine in daylight and less fine at five in the morning, which is when I made most of the trips. I carried an old lantern for the path, and I marked the tripod feet with three dabs of white paint on the first day so that every photograph from the ledge would share the same horizon, to the millimetre.",
    paragraphs: [
      "People assume the sea is the subject. It isn't, really. The sea is the constant, and the constant is what lets you see everything else change. On the ninth morning the horizon vanished completely into a white sky and I made the first photograph I kept. On the twentieth I made nothing, because a fishing boat sat on the horizon for two hours and I didn't want it.",
      "I learned more about grey in those six weeks than in the ten years before. There is a grey that is almost pink at 06:10 and a grey at 12:40 that has no colour at all, and a grey at 16:30 that is really a very dark green. The scanner and the printer disagree about all of them.",
      "Of the forty-one visits, fifteen produced a photograph. Of those, six made the series. That ratio sounds wasteful until you remember the other thirty-five mornings were spent watching the sea come up out of the dark, which is not a bad way to spend a morning.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
  {
    title: "Why I still carry a light meter",
    slug: "light-meter",
    category: "Craft",
    date: "2026-01-22",
    dateLabel: "Jan 2026",
    dateFull: "22 January 2026",
    read: "5 min",
    featureMeta: "Craft · Jan 2026 · 5 min",
    standfirst: "A small grey box that makes me stand where the light is, instead of where the camera is.",
    cover: img("C1R1K6c5JBwmHlKnQLbFGetcw.jpg"),
    coverAlt: "Two hands hold an old film camera up in warm, low light.",
    caption: "Two hands hold an old film camera up in warm, low light.",
    portraitCover: true,
    intro:
      "Every camera I own can meter light better than I can. I still carry a handheld incident meter, a scuffed grey thing I bought second-hand in Porto in 2014, and I use it for almost every exposure.",
    paragraphs: [
      "An incident meter reads the light falling on the subject, not the light bouncing off it. To use one you have to walk to where the subject is and turn around. That walk is the point. Standing in a stairwell with the meter's white dome in a shaft of sun, you notice things the camera position hides: how warm the bounce off the floor is, how quickly the beam is moving across the wall.",
      "It also slows me down, which is most of what I want from equipment. Three readings, a small sum in my head, a decision. By the time I get back to the tripod I know what I am photographing.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
  {
    title: "Blue shadows on white walls",
    slug: "blue-shadows",
    category: "Essay",
    date: "2025-10-03",
    dateLabel: "Oct 2025",
    dateFull: "3 October 2025",
    read: "6 min",
    featureMeta: "Essay · Oct 2025 · 6 min",
    standfirst: "Why the shade on a lime-washed wall at noon is the colour of the sky, and why I stopped correcting it.",
    cover: img("pGwetzCW6WLuSbR3sPQy16vLNYw.jpg"),
    coverAlt: "A whitewashed chapel on a rocky hilltop above a pale, hazy sea.",
    caption: "A whitewashed chapel on a rocky hilltop above a pale, hazy sea.",
    portraitCover: true,
    intro:
      "Stand in the Alentejo at noon in July and look at a white wall in shade. It is blue. Not grey, not a darker white: blue. The sun is not lighting it, so the only thing lighting it is the sky, and the sky is very blue.",
    paragraphs: [
      "For years I corrected this in the edit, because clients expect white walls to look white. On Limewash I stopped. The architects had chosen lime precisely because it does this: it holds whatever light reaches it. Correcting the blue would have meant correcting the building.",
      "The prints are warm where the sun hits and cool where it doesn't, and the line between them is as sharp as the edge of the roof that cast it. It is the most accurate architectural work I have made, and the least neutral.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
  {
    title: "Packing for a week of low cloud",
    slug: "low-cloud-kit",
    category: "Field notes",
    date: "2025-06-18",
    dateLabel: "Jun 2025",
    dateFull: "18 June 2025",
    read: "4 min",
    featureMeta: "Field notes · Jun 2025 · 4 min",
    standfirst: "Two lenses, three cloths, one flask. A list for photographing weather that will not change its mind.",
    cover: img("ueE80ehjm6jYyZQB9Juc5QBZVE.jpg"),
    coverAlt: "A photographer in silhouette raises a camera against a streaked sunset sky.",
    caption: "A photographer in silhouette raises a camera against a streaked sunset sky.",
    portraitCover: true,
    intro:
      "Fog is wet. Everything gets damp, including the inside of the lens if you move between a warm car and a cold hillside too quickly. I carry three microfibre cloths and a zip bag of rice for the camera at night.",
    paragraphs: [
      "In cloud you rarely need a wide lens. Distance disappears, so you work with a longer one and stack the ridges. On the Low Cloud shoot I used a 100–200 mm for almost everything and left the wide lens in the car for eleven days.",
      "The last thing on the list is a flask. Low cloud work is waiting work. The cloud will lift for four minutes at some point in the afternoon, and you want to be warm enough to still be there when it does.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
  {
    title: "Printing the dark",
    slug: "printing-the-dark",
    category: "Print",
    date: "2025-02-09",
    dateLabel: "Feb 2025",
    dateFull: "9 February 2025",
    read: "7 min",
    featureMeta: "Print · Feb 2025 · 7 min",
    standfirst: "Making the After Midnight river prints, and eleven proofs of one black.",
    cover: img("T5SOHOg8XujrJVxa6t1Qd3a80.jpg"),
    coverAlt: "A camera lens seen face-on, its glass catching the light.",
    caption: "A camera lens seen face-on, its glass catching the light.",
    portraitCover: false,
    intro:
      "Night photographs are almost entirely shadow, and shadow is where prints fail. On screen, the river in After Midnight is a deep blue-black with detail in the ripples. On the first proof it was a flat, dead black with lights floating on it.",
    paragraphs: [
      "We made eleven proofs of the bridge photograph before the water looked like water. The answer was a warmer paper, a slightly lifted black point and a lot of patience from Estúdio Prata.",
      "The finished river edition is seven prints and two artist's proofs of each image. They are meant to be hung low, in rooms that are not too bright, and looked at for a while.",
    ],
    signature: "— Mira Castell, Lisbon",
  },
]

export const journal = {
  eyebrow: "16:40 — Journal",
  title: ["Notes from", "the waiting."],
  bodyHome: "Field notes, craft and the odd essay. Written on location, usually while nothing is happening.",
  bodyIndex: "Field notes, craft and the odd essay, written on location — usually while nothing was happening.",
  image: img("YhTpOFqRBfPPmjhDjkGvA80Pjc.jpg"),
  alt: "A vintage camera on a wooden table in warm window light.",
  more: "More from the journal",
  read: "Read →",
  /** The entry shown as the large feature block at the top of /journal. */
  featuredSlug: "forty-mornings",
  /** The six entries in the card grid below the feature, in order. */
  gridSlugs: ["one-window", "fog-hour", "forty-mornings", "light-meter", "blue-shadows", "low-cloud-kit"],
  /** The five rows in the home-page journal band, with their own cover crops. */
  homeRows: [
    { slug: "forty-mornings", cover: img("ruH9N8mnldJW3EJPywyPRQzVv0.webp") },
    { slug: "light-meter", cover: img("lf7lQQocSGX6TcgPnT3ljebvAU.webp") },
    { slug: "blue-shadows", cover: img("iSRCx6tDFvyvnhJTvZpgPwa7lo.webp") },
    { slug: "low-cloud-kit", cover: img("7iVnMHbH45OOOmtFhyNt08dlFI.webp") },
    { slug: "printing-the-dark", cover: img("xAjPvGP3wZMJcd2zLbhtSvBBO8o.webp") },
  ],
}

export const cinematic = {
  image: img("pcU39U0kvgR6S8TcYxIENo3zA.jpg"),
  alt: "A dramatic sunset burning over a mountain lake.",
  title: ["Everything good", "happens in the", "last hour."],
  caption: "18:40 — Golden hour, the last light on the hills",
}

export const voices = {
  eyebrow: "19:10 — In their words",
  title: ["What they say", "once it is hung."],
  body:
    "Four people who waited out the weather with me. Their words, taken from the emails that came after the work was delivered.",
  quotes: [
    { quote: "“Mira waited four days for the cloud to lift over the lake. The one morning it did is the cover of our winter issue.”", name: "Hanne Joensen", role: "Photo director, Northlight Review · on Low Cloud", portrait: img("jpHIRwud8w3ww50nkxCxsOzZ6o.webp") },
    { quote: "“She photographed our building at the hour we drew it for. We had never seen it look like that, and we designed it.”", name: "Rita Soeiro", role: "Partner, Atelier Cal · on Limewash", portrait: img("a2htuvO1NtlLkhEzlbKYjnPOfc0.webp") },
    { quote: "“Our jacket is tiny in every frame. It is also the campaign that sold more of them than any we have made.”", name: "Inés Arce", role: "Creative director, Merid Outerwear · on The Salt Line", portrait: img("rqcUFpJfUzj6oZJu1HZFGJKjaxo.webp") },
    { quote: "“The Sea Hours prints hang in all forty rooms. Guests ask about them more than they ask about the view.”", name: "Clara Vang", role: "Owner, Hotel Sesmaria · on Sea Hours editions", portrait: img("0ueitYn3f9Evu22c5X0St1QTuU.webp") },
  ],
}

export const rates = {
  eyebrow: "19:30 — Rates, 2026–27",
  title: ["Priced by the day,", "not by the frame."],
  note:
    "Travel and accommodation are billed at cost. Every commission starts with a call about the place, the season and the light — not a brief.",
  plans: [
    { eyebrow: "01 — Commission", title: "The Day", description: "One place, one day on location, with a weather day held in reserve.", price: "€2,800", priceNote: "from, per day", includes: ["Up to 25 finished photographs", "One weather day included", "Editorial and web licence, 2 years"] },
    { featured: true, eyebrow: "02 — Most booked", title: "The Series", description: "Three to six days building one body of work, with a scouting visit first.", price: "€11,500", priceNote: "from, per series", includes: ["40–60 finished photographs", "Scouting visit and two weather days", "Campaign licence, 3 years"] },
    { eyebrow: "03 — Prints", title: "The Edition", description: "Archival prints from existing series, made to order and signed.", price: "€1,400", priceNote: "from, per print", includes: ["Editions of 7 + 2 artist's proofs", "Hahnemühle Photo Rag, 60–150 cm", "Framing on request"] },
  ],
}

export const faq = {
  eyebrow: "20:15 — Questions",
  title: ["Before you", "ask."],
  body: "Anything else, write to studio@oriel.photo. I answer every message myself, usually the same evening.",
  items: [
    { q: "What happens if the weather doesn’t cooperate?", a: "Every commission includes weather days. If the light we need never arrives, we either reschedule at no charge or I deliver what the weather allowed and we adjust the fee. You never pay for rain." },
    { q: "How far ahead should I book?", a: "For a series, three to four months, ideally a season ahead so I can scout. Single days can often happen within three to six weeks." },
    { q: "Do you travel?", a: "Most of my work happens away from Lisbon. Travel and accommodation are billed at cost. I travel light, alone or with one assistant." },
    { q: "Who owns the photographs?", a: "I keep the copyright and you license the use you need: editorial, web or campaign, for a set term and territory. Longer or exclusive licences are available." },
    { q: "How do you work with people who aren’t used to being photographed?", a: "Slowly. I arrive without the camera out, and I photograph people where they already are, in the light they already have. Most portraits happen after the coffee, not before." },
    { q: "How are photographs delivered?", a: "Graded, high-resolution files through a private gallery within three weeks. Prints follow within six weeks." },
  ],
}

export const contact = {
  eyebrow: "21:30 — Contact · blue hour",
  title: ["Bring me", "somewhere", "worth waiting for."],
  body:
    "Tell me about the place, the season and what the light does there. I'll tell you honestly whether it's worth the wait.",
  availability: "Taking commissions for spring 2027",
  button: "Propose a place →",
  details: [
    ["Write", site.email],
    ["Call", site.phone],
    ["Studio", site.address],
    ["Visits", site.visits],
  ] as [string, string][],
  image: img("jouZtiy8EqzzQX7ZzPHiR2tlyY.jpg"),
  alt: "A lighthouse in silhouette against a burning sunset sky.",
  caption: "21:30 — The lighthouse, first beam of the night",
  fields: [
    { label: "Your name", name: "name", type: "text", placeholder: "Mira Castell" },
    { label: "Email", name: "email", type: "email", placeholder: "you@studio.com" },
    { label: "The place", name: "place", type: "text", placeholder: "Where, and in what season?" },
    { label: "The note", name: "note", type: "textarea", placeholder: "Tell me what the light does there." },
  ],
  submit: "Send the note",
}

export const enquiry = {
  to: site.email,
  eyebrow: "N°01 — Enquiry",
  title: "Tell me about the place.",
  body: "Two or three lines is plenty: where, which season, and what you hope the light will do. I read every message myself and reply within two working days.",
  kinds: ["Portrait series", "Editorial or fashion", "Commercial campaign", "Travel or location", "Something else"],
}

export const brief = {
  eyebrow: "Before you write",
  title: ["Five things", "to send."],
  body:
    "A short note is plenty. I answer every message myself, usually the same evening, and I'll tell you honestly if the light you want isn't there.",
  items: [
    { index: "01", title: "The place", copy: "Where it is, and what the light does there. A phone photo at the right hour helps more than a moodboard." },
    { index: "02", title: "The season", copy: "This season, next season, within a year — or flexible, and the weather decides." },
    { index: "03", title: "The kind of work", copy: "Portrait, editorial, documentary, campaign, editions and prints — or something else entirely." },
    { index: "04", title: "A budget range", copy: "Under €5,000 · €5,000–15,000 · €15,000–40,000 · over €40,000 · not sure yet." },
    { index: "05", title: "Where the photographs will live", copy: "Editorial, web, campaign or print — so the licence fits from the start." },
  ],
}

export const notFound = {
  eyebrow: "00:00 — Not found",
  title: ["We lost", "the light."],
  body: "This page doesn't exist, or it has moved. The series are all still here.",
  links: [
    { label: "Back to first light →", href: "/" },
    { label: "Every frame →", href: "/work" },
  ],
}

export const footer = {
  blurb: "Oriel is the studio of Mira Castell. Portraits, places and weather, in natural light.",
  columns: [
    { title: "Series", links: projects.map((p) => ({ label: p.title, href: `/work/${p.slug}` })) },
    {
      title: "Studio",
      links: [
        { label: "Index of frames", href: "/work" },
        { label: "About Mira", href: "/studio" },
        { label: "Rates", href: "/studio#rates" },
        { label: "Journal", href: "/journal" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
  letterTitle: "Field notes",
  letter: "One letter a season: where the light was good, and what it taught me. No more than four a year.",
  legal:
    "© 2026 Oriel — Mira Castell, a fictional studio. Photographs are free-licence work by the photographers named in the credits.",
  back: "Back to Top ↑",
}
