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
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
