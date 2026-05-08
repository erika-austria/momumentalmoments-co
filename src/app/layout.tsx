import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
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
  description:
    "MOMumental Moments® is the registered parent IP behind The PHASE™ (the body-truth pillar) and The Power Method® (the architecture pillar). For women rebuilding everything that matters. Founded by Erika Hanafin Austria.",
  keywords: [
    "MOMumental Moments",
    "Erika Hanafin Austria",
    "The PHASE",
    "The Power Method",
    "perimenopause",
    "midlife reinvention",
    "co-parenting",
    "women rebuilding",
    "MOMumental Reinvention",
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
      "The parent IP behind The PHASE™ and The Power Method®. Two consumer products. One voice. For women rebuilding everything that matters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMumental Moments® · For Women Rebuilding Everything That Matters",
    description:
      "Two consumer products. One voice. For women rebuilding everything that matters.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const ROOT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://erikahanafin.com/#person",
      name: "Erika Hanafin Austria",
      givenName: "Erika",
      familyName: "Hanafin Austria",
      jobTitle:
        "Founder of MOMumental Moments®, Founder of The PHASE™, 5x Acquisition CEO",
      url: "https://erikahanafin.com",
      sameAs: [
        "https://momumentalmoments.co",
        "https://www.momumentalreinvention.com",
        "https://thisisphase.co",
        "https://www.instagram.com/erikahanafin",
        "https://www.linkedin.com/in/erikahanafin/",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://momumentalmoments.co/#org",
      name: "MOMumental Moments",
      alternateName: "MOMumental Moments®",
      url: "https://momumentalmoments.co",
      logo: "https://momumentalmoments.co/icon.png",
      founder: { "@id": "https://erikahanafin.com/#person" },
      email: "info@momumentalmoments.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://momumentalmoments.co/#site",
      url: "https://momumentalmoments.co",
      name: "MOMumental Moments®",
      publisher: { "@id": "https://momumentalmoments.co/#org" },
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
        <meta name="color-scheme" content="light" />
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
      </body>
    </html>
  );
}
