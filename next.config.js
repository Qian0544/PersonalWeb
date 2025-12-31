/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig