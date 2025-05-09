import type { NextConfig } from "next";
import type { Configuration } from "webpack";

import path from "path";

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname);
    }
    return config;
  },

  async rewrites() {
    return [
      {
        source: "/api/icon-image/:path*",
        destination: "https://skillicons.dev/icons?i=:path*",
      },
    ];
  },
};

export default nextConfig;
