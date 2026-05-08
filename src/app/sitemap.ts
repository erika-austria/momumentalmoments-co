import type { MetadataRoute } from "next";

const SITE_URL = "https://momumentalmoments.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
