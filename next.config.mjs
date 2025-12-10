/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  serverExternalPackages: ["@prisma/client"],

  webpack: (config) => {
    config.externals.push({
      "@prisma/client": "commonjs @prisma/client",
      ".prisma/client": "commonjs .prisma/client",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
