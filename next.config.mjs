const staticExport = process.env.STATIC_EXPORT === "1"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // `npm run export` writes a fully static site to ./out (no image server needed).
  ...(staticExport ? { output: "export", trailingSlash: true } : {}),
  images: {
    formats: ["image/webp"],
    qualities: [78],
    deviceSizes: [420, 640, 768, 1024, 1200, 1600, 1920, 2560, 3200],
    imageSizes: [96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    unoptimized: staticExport,
  },
  async headers() {
    return [
      {
        source: "/photos/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ]
  },
}

export default nextConfig
