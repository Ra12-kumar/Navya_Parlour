import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * Content-Security-Policy.
 * - Everything is first-party except the Google Maps embed (frame-src).
 * - 'unsafe-inline' scripts are required by Next.js's inline bootstrap/JSON-LD
 *   on statically generated pages; all other sources are locked down.
 * - Dev mode (HMR) needs 'unsafe-eval' and websockets, so the strict policy is
 *   only applied in production builds.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  experimental: {
    // Inline critical CSS into the HTML (removes a render-blocking request).
    inlineCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // All images are first-party (/public/images); no remote hosts are allowed,
    // so the image optimiser cannot be used as a proxy for other sites.
    remotePatterns: [],
    // Optimised images are cached for 14 days at the edge and in browsers.
    minimumCacheTTL: 60 * 60 * 24 * 14,
  },

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static photos: cache for a week, revalidate in the background.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
        ],
      },
    ];
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
