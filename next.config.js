/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir:
      true |
      {
        enabled: true,
        silent: true,
      },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gifimage.net",
      },
    ],
  },
};

module.exports = nextConfig;
