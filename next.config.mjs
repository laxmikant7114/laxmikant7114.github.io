/** @type {import('next').NextConfig} */
const repoName = "My-Portfolio-Site"; // 👈 define it FIRST

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

export default nextConfig
