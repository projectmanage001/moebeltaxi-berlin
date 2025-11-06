// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // i18n kaldırıldı → /de/... yok
};

export default withMDX(nextConfig);