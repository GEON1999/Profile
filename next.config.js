/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    externalDir:
      true |
      {
        enabled: true,
        silent: true,
      },
  },
};

module.exports = nextConfig;
