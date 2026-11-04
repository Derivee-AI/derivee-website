import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://derivee.xyz",
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
