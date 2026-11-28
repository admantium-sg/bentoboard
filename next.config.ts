import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.179.3"],
  output: "standalone",
  outputFileTracingIncludes: {
    "/**/*": ["./content/research/**/*"],
  },
};

export default nextConfig;
