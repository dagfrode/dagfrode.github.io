import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  distDir: "out",
  trailingSlash: true,
  exportTrailingSlash: true,
};

export default nextConfig;
