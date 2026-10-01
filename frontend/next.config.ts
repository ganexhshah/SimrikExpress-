import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagpedia.net",
      },
    ],
  },
};

export default nextConfig;
