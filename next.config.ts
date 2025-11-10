import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use system TLS certificates to fix Google Fonts fetching in build environments
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
