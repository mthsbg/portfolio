import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    qualities: [75, 90],
  },
};

export default nextConfig;
