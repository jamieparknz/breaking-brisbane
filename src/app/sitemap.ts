import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const base = "https://jamieparknz.github.io/breaking-brisbane";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/classes/", "/faq/"].map((p) => ({ url: base + p }));
}
