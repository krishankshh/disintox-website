import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use system TLS certificates to fix Google Fonts fetching in build environments
    turbopackUseSystemTlsCerts: true,
  },

  // Image optimization configuration for Netlify
  images: {
    // Netlify handles image optimization via @netlify/plugin-nextjs
    unoptimized: false,

    // Enable Next.js Image Optimization API
    // Netlify's plugin will serve optimized images
    formats: ['image/avif', 'image/webp'],

    // Allow local images
    remotePatterns: [],
  },
};

export default nextConfig;
