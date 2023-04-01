/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.unsplash.com','cdn.freelogodesign.org','cdn.sanity.io']
  }
}

module.exports = nextConfig
