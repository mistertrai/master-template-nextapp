// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@iconify/react'],
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = nextConfig