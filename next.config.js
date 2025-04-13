/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
    appDir: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
