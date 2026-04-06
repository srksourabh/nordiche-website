import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development") {
  import("@cloudflare/next-on-pages/next-dev").then(({ setupDevPlatform }) =>
    setupDevPlatform()
  ).catch(() => {});
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages applies production security headers via public/_headers.
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
