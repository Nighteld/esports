/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    unoptimized: true,
  },
};