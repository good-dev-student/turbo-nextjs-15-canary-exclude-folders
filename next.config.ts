import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: [
        {
          test: /\.*/,
          include: [/local-docs/],
          type: "ignore",
        },
      ],
    },
  },
};

export default nextConfig;
