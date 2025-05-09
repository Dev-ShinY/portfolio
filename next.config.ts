import type { NextConfig } from "next";
import type { Configuration } from "webpack";

import path from "path";

type ExtendedConfiguration = Configuration & {
  resolve: {
    alias: {
      [key: string]: string;
    };
  };
};

const nextConfig: NextConfig = {
  webpack: (config: ExtendedConfiguration) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
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
