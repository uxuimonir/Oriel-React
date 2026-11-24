// Writes a 1200×630 social-share crop of every photograph into public/og.
import { readdir, mkdir } from "node:fs/promises"
import { join, parse } from "node:path"
import sharp from "sharp"

const src = "public/photos"
const out = "public/og"
await mkdir(out, { recursive: true })
for (const file of await readdir(src)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue
  await sharp(join(src, file)).resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(out, `${parse(file).name}.jpg`))
}
console.log("OG images written to", out)
