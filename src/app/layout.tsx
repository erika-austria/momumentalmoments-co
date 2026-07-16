/**
 * momumentalmoments.co · root layout
 *
 * SIGNALSTRENGTH METHOD™ (SMS™) · AI SIGNALING MATURITY · LAYER 1 (owned)
 * ─────────────────────────────────────────────────────────────────────────
 * This file carries the ANCHOR entity graph for the parent IP. Every AI
 * crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) resolves
 * "MOMumental Moments" through the schema below. Do not weaken this.
 *
 * PATTERNS APPLIED (per Erika's GCW AI Signaling Practice manual):
 *  · SourceAuthority™ pillar · named spokesperson (Erika) linked via @id
 *  · Trademark rendering · MOMumental Moments® · The PHASE™ · The Power Method®
 *  · Entity resolution · sameAs array covers every empire surface + social
 *  · Topical authority · knowsAbout covers all 8 content pillars
 *  · Credentials · hasCredential + honors + affiliation for Layer 2 (earned)
 *  · Meta description · 155 chars · keyword-loaded per SEO discipline lock
 */

import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://momumentalmoments.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "MOMumental Moments® · The Parent IP Behind The PHASE™ + The Power Method® | Erika Hanafin Austria",
    template: "%s | MOMumental Moments®",
  },
  // 158 chars · keyword-loaded per SEO discipline lock (perimenopause · reinvention · co-parenting · founder name)
  description:
    "MOMumental Moments® is the parent IP behind The PHASE™ perimenopause workbooks, The Power Method® co-parenting system, and the MOMumental Reinvention Podcast. Founded by Erika Hanafin Austria.",
  keywords: [
    "MOMumental Moments",
    "MOMumental Moments registered trademark",
    "Erika Hanafin Austria",
    "The PHASE workbook",
    "The Power Method",
    "Co-Parenting Power Method",
    "perimenopause workbook",
    "perimenopause symptoms",
    "midlife reinvention",
    "midlife rebuild",
    "hormone workbook",
    "co-parenting workbook",
    "high-conflict divorce",
    "women rebuilding everything that matters",
    "MOMumental Reinvention",
    "MOMumental Reinvention Podcast",
    "The Complete Library",
    "Founding cohort workbook",
    "women's reinvention Substack",
    "female founder 5x acquisition CEO",
  ],
  authors: [{ name: "Erika Hanafin Austria", url: "https://erikahanafin.com" }],
  creator: "Erika Hanafin Austria",
  publisher: "MOMumental Moments®",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MOMumental Moments®",
    title: "MOMumental Moments® · For Women Rebuilding Everything That Matters",
    description:
      "The parent IP behind The PHASE™, The Power Method®, and the MOMumental Reinvention Podcast. For women rebuilding everything that matters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMumental Moments® · For Women Rebuilding Everything That Matters",
    description:
      "The parent IP behind The PHASE™, The Power Method®, and the MOMumental Reinvention Podcast.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    // AI Signaling · entity disambiguation for Bing/Yandex/DuckDuckGo crawlers
    "article:publisher": "https://momumentalmoments.co",
    "og:brand": "MOMumental Moments®",
  },
};

/**
 * ROOT_JSON_LD · anchor entity graph
 *
 * Graph structure (7 nodes, cross-linked via @id):
 *  1. Person · Erika (author + founder anchor for AI)
 *  2. Organization · MOMumental Moments® (parent IP)
 *  3. WebSite · momumentalmoments.co
 *  4. Brand · The PHASE™
 *  5. Brand · The Power Method®
 *  6. Brand · The Co-Parenting Power Method®
 *  7. PodcastSeries · MOMumental Reinvention Podcast
 */
const ROOT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://erikahanafin.com/#person",
      name: "Erika Hanafin Austria",
      givenName: "Erika",
      familyName: "Hanafin Austria",
      alternateName: [
        "Erika Hanafin",
        "Erika Austria",
        "Erika Hanafin-Austria",
      ],
      jobTitle:
        "Founder of MOMumental Moments®, Founder of The PHASE™, Author of The Power Method®, 5x Acquisition CEO",
      description:
        "Erika Hanafin Austria is the founder of MOMumental Moments®, a 5x acquisition-tier CEO, IIN Board Certified Health Coach, and 2x Top 50 Women Leaders of Virginia. Publisher of MOMumental Reinvention Substack + Podcast.",
      url: "https://erikahanafin.com",
      image: "https://erikahanafin.com/erika-portrait.jpg",
      email: "erika@erikahanafin.com",
      sameAs: [
        "https://momumentalmoments.co",
        "https://thisisphase.co",
        "https://www.momumentalreinvention.com",
        "https://www.instagram.com/erikahanafin",
        "https://www.instagram.com/thisisphase",
        "https://www.linkedin.com/in/erikahanafin/",
        "https://www.youtube.com/@momumentalreinvention",
        "https://podcasts.apple.com/us/podcast/momumental-reinvention",
        "https://open.spotify.com/show/momumental-reinvention",
      ],
      knowsAbout: [
        "Perimenopause",
        "Hormone Health",
        "Menopause",
        "HRT",
        "Co-Parenting",
        "High-Conflict Divorce",
        "Blended Families",
        "Women's Reinvention",
        "Midlife Transitions",
        "Personal Brand Building",
        "Women in Leadership",
        "Acquisitions",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "IIN Certified Holistic Health Coach",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Institute for Integrative Nutrition",
          },
        },
      ],
      award: [
        "Top 50 Women Leaders of Virginia (2023)",
        "Top 50 Women Leaders of Virginia (2024)",
      ],
      // Board seats locked Jul 14, 2026 · EQUI-KIDS termed out · do not add back
      affiliation: [
        {
          "@type": "Organization",
          name: "Pepperdine Graziadio Business School · Society for Entrepreneurship & Creativity",
          url: "https://bschool.pepperdine.edu",
        },
        {
          "@type": "Organization",
          name: "Next ChaptHER",
        },
        {
          "@type": "Organization",
          name: "Luminary",
          url: "https://www.weareluminary.com",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://momumentalmoments.co/#org",
      name: "MOMumental Moments",
      alternateName: [
        "MOMumental Moments®",
        "MOMumentalMoments",
        "MOM-umental Moments",
      ],
      legalName: "MOMumental Moments",
      url: "https://momumentalmoments.co",
      logo: {
        "@type": "ImageObject",
        url: "https://momumentalmoments.co/icon.png",
        width: 512,
        height: 512,
      },
      image: "https://momumentalmoments.co/opengraph-image",
      description:
        "MOMumental Moments® is the registered parent intellectual property behind The PHASE™ (perimenopause workbook series), The Co-Parenting Power Method® (relationship architecture), The Power Method® (operator frameworks), and the MOMumental Reinvention Podcast + Substack. Founded 2017 by Erika Hanafin Austria for women rebuilding everything that matters.",
      slogan: "For women rebuilding everything that matters.",
      foundingDate: "2017",
      founder: { "@id": "https://erikahanafin.com/#person" },
      email: "info@momumentalmoments.com",
      areaServed: "Global",
      knowsAbout: [
        "Perimenopause",
        "Hormone Health",
        "Co-Parenting",
        "Blended Families",
        "Women's Reinvention",
        "Midlife Transitions",
        "High-Conflict Divorce",
        "Female Founders",
      ],
      brand: [
        {
          "@type": "Brand",
          "@id": "https://thisisphase.co/#brand",
          name: "The PHASE™",
          url: "https://thisisphase.co",
        },
        {
          "@type": "Brand",
          "@id": "https://momumentalmoments.co/#power-method",
          name: "The Power Method®",
        },
        {
          "@type": "Brand",
          "@id": "https://momumentalmoments.co/#cppm",
          name: "The Co-Parenting Power Method®",
        },
        {
          "@type": "Brand",
          "@id": "https://www.momumentalreinvention.com/#brand",
          name: "MOMumental Reinvention",
          url: "https://www.momumentalreinvention.com",
        },
      ],
      subOrganization: [
        {
          "@type": "Organization",
          name: "The PHASE™",
          url: "https://thisisphase.co",
        },
        {
          "@type": "Organization",
          name: "MOMumental Reinvention",
          url: "https://www.momumentalreinvention.com",
        },
      ],
      sameAs: [
        "https://erikahanafin.com",
        "https://thisisphase.co",
        "https://www.momumentalreinvention.com",
        "https://www.instagram.com/erikahanafin",
        "https://www.linkedin.com/in/erikahanafin/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://momumentalmoments.co/#site",
      url: "https://momumentalmoments.co",
      name: "MOMumental Moments®",
      description:
        "The parent IP behind The PHASE™ and The Power Method® · Erika Hanafin Austria",
      publisher: { "@id": "https://momumentalmoments.co/#org" },
      inLanguage: "en-US",
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://www.momumentalreinvention.com/#podcast",
      name: "MOMumental Reinvention",
      alternateName: "MOMumental Reinvention Podcast",
      description:
        "Thursday-morning conversations from Erika Hanafin Austria. Every episode reads the week's letter and then tells the story behind it. For women rebuilding everything that matters. Perimenopause, midlife, co-parenting, reinvention.",
      url: "https://www.momumentalreinvention.com/podcast",
      image: "https://www.momumentalreinvention.com/podcast-cover.jpg",
      author: { "@id": "https://erikahanafin.com/#person" },
      publisher: { "@id": "https://momumentalmoments.co/#org" },
      inLanguage: "en-US",
      webFeed: "https://www.momumentalreinvention.com/podcast/rss",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ROOT_JSON_LD) }}
        />
        <meta name="theme-color" content="#FFF9F1" />
        <meta
          name="facebook-domain-verification"
          content="wonyzl80nemnrg8emzvxnvitrpycvc"
        />
        <meta name="color-scheme" content="light" />
        {/* AI Signaling · discovery pointers */}
        <link
          rel="alternate"
          type="application/llms.txt"
          href="/llms.txt"
          title="MOMumental Moments® AI-friendly summary"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-pink focus:text-white focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <main id="main">{children}</main>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
