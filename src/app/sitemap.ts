/**
 * momumentalmoments.co sitemap
 *
 * SMS™ AI SIGNALING · fragment anchors surface each section as its own
 * discoverable URL for Google, Bing, and AI crawlers. Rich results and
 * "jump to section" featured snippets both depend on this.
 */

import type { MetadataRoute } from "next";

const SITE_URL = "https://momumentalmoments.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Section anchors · each is a discoverable jump-target for AI + rich results
    {
      url: `${SITE_URL}/#library`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.95, // flagship product · highest priority after home
    },
    {
      url: `${SITE_URL}/#pillars`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#podcast`,
      lastModified: today,
      changeFrequency: "weekly", // new episode every Thursday
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#testimonials`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#shop`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#faq`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85, // FAQ rich results are high-value
    },
    // Direct link to AI-friendly summary
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
