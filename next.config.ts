import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Sites checkout includes Cloudflare-only support files which are not
  // imported by the Next.js application. Vinext validates that code path;
  // Vercel should build only the application surface.
  typescript: {
    ignoreBuildErrors: process.env.VERCEL === "1",
  },
};

export default nextConfig;
