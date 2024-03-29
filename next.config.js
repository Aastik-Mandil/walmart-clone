/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "https",
        hostname: "i.ingur.com",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
      },
    ],
  },
};

module.exports = nextConfig;
