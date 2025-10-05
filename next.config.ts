import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/campany-web-demo-v2",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
