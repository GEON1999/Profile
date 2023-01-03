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
};

module.exports = nextConfig;
