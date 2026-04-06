import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/products/liptropic-mic",
        destination: "/products/lipotropic-mic",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
