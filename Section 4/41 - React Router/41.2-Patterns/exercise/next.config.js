/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: "/",
      destination: "/dogs",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
