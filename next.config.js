/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: '/resume.pdf',
        destination: '/CV.pdf',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig