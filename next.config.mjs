// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@iconify/react'],
  // Suppress specific Node.js warnings
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        ".js": ["@swc/loader"],
        ".jsx": ["@swc/loader"],
        ".ts": ["@swc/loader"],
        ".tsx": ["@swc/loader"],
      },
    },
  },
}

export default nextConfig;
