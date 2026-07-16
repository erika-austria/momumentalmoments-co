/**
 * MOMumental Moments® · homepage of momumentalmoments.co
 *
 * REFRESH JUL 16, 2026 · 9 sections + Newsletter + Footer
 * (was 5 sections · added 4 conversion + trust surfaces per audit)
 *
 * NEW SECTIONS ADDED:
 *   3.5 · The Complete Library ($228 Founding cohort · biggest revenue gap fix)
 *   4.5 · The Podcast (Ep 2 landing · discovery for podcast search traffic)
 *   5.5 · Letters That Land (reader testimonials · Layer 2 earned trust)
 *   6.5 · Shop the Stack (Amazon storefront · affiliate revenue lever)
 *   7   · FAQ visible section (previously schema-only · rich results eligible)
 *
 * SMS™ AI SIGNALING LAYER · per Erika's GCW AI Signaling Practice manual:
 *  · Product schemas for Complete Library, PHASE Bundle, Power Method
 *  · PodcastEpisode schema for latest episode (Ep 2)
 *  · Review schema for testimonials (Layer 2 earned)
 *  · FAQ schema mirrors visible FAQ (double signal · schema + on-page)
 *  · Board seats updated Jul 14, 2026 · EQUI-KIDS removed (termed out)
 *
 * VOICE FIREWALL · no em dashes, NEON, sister-tone, MOMumental Moments® always
 * with the registered mark, The PHASE™ and The Power Method® consistently rendered.
 */

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

// Visible FAQ · rendered on page AND fed to JSON-LD (double signal for AI + Google rich results)
const FAQ_ITEMS = [
  {
    question: "What is MOMumental Moments®, exactly?",
    answer:
      "It is the registered parent IP behind everything I build for women in the rebuild. Three consumer surfaces live underneath: The PHASE™ (body-truth pillar, perimenopause and hormones), The Power Method® (architecture pillar, co-parenting and relationship structure), and MOMumental Reinvention (the Substack publication and Thursday-morning podcast). One voice across all surfaces.",
  },
  {
    question: "What is The Complete Library?",
    answer:
      "$228, one-time, yours forever. Every workbook I have built for the rebuild in one library. The PHASE™ (all five volumes), The Co-Parenting Power Method®, all individual workbooks, and every future Founding cohort drop as I release them. For the woman who does not want to piece it together.",
  },
  {
    question: "Where do I start?",
    answer:
      "If you are in the body-truth rebuild, start with The PHASE™ Vol. I (Perimenopause) at thisisphase.co. If you are in the architecture rebuild, start with The Co-Parenting Power Method® at $47. If you want everything and want it forever, The Complete Library at $228 is the one door. The MOMumental Reinvention Letter and podcast are free forever.",
  },
  {
    question: "Who is this for?",
    answer:
      "Women between 35 and 55 in the rebuild nobody warned them about. Mid-career to executive level, mothers or chosen-no-kids, currently in or anticipating perimenopause, tired of being treated like the rebuild is a personal failure.",
  },
  {
    question: "Who founded MOMumental Moments®?",
    answer:
      "Erika Hanafin Austria. 5x acquisition-tier CEO. IIN Board Certified Health Coach. 2x Top 50 Women Leaders of Virginia. Board seats at Pepperdine Graziadio SEC, Next ChaptHER, and Luminary. Publisher of MOMumental Reinvention Substack and podcast. Founder of The PHASE™ and Author of The Power Method®.",
  },
  {
    question: "How is MOMumental Moments® trademarked?",
    answer:
      "MOMumental Moments® is a registered trademark. The Co-Parenting Power Method® and The Power Method® are registered trademarks. The PHASE™ is a claimed trademark. All are owned by Erika Hanafin Austria.",
  },
];

const PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── PARENT BRAND ANCHOR ────────────────────────────────────────
    {
      "@type": "Brand",
      "@id": "https://momumentalmoments.co/#brand",
      name: "MOMumental Moments",
      alternateName: "MOMumental Moments®",
      description:
        "The registered women's reinvention movement founded by Erika Hanafin Austria. Parent brand to The PHASE™, The Co-Parenting Power Method®, MOMumental Reinvention Substack, and MOMumental Reinvention Podcast. One woman. One journey. Three doors. FEELS · WORKS · HEARS. Built for women rebuilding everything that matters.",
      logo: "https://momumentalmoments.co/icon.png",
      url: "https://momumentalmoments.co",
      founder: { "@id": "https://erikahanafin.com/#person" },
      sameAs: [
        "https://erikahanafin.com",
        "https://www.momumentalreinvention.com",
        "https://thisisphase.co",
        "https://www.instagram.com/erikahanafin",
        "https://www.instagram.com/thisisphase",
        "https://www.linkedin.com/in/erikahanafin/",
      ],
    },
    // ─── FLAGSHIP PRODUCT · THE COMPLETE LIBRARY $228 ──────────────
    {
      "@type": "Product",
      "@id": "https://momumentalmoments.co/#complete-library",
      name: "The Complete Library · Founding Cohort",
      description:
        "Every workbook Erika Hanafin Austria has built for the rebuild. Yours forever. Includes The PHASE™ (all five volumes), The Co-Parenting Power Method®, all individual workbooks, and every future Founding cohort drop.",
      brand: { "@id": "https://momumentalmoments.co/#brand" },
      category: "Digital Workbook Library",
      offers: {
        "@type": "Offer",
        price: "228.00",
        priceCurrency: "USD",
        url: "https://buy.stripe.com/6oU5kD1Pgcca8Yj1qVeEo0m",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-09-30",
        seller: { "@id": "https://momumentalmoments.co/#org" },
      },
    },
    // ─── PRODUCT · THE PHASE™ BUNDLE ────────────────────────────────
    {
      "@type": "Product",
      "@id": "https://thisisphase.co/#the-series",
      name: "The PHASE™ · The Series",
      description:
        "Five-volume perimenopause workbook series. Perimenopause, Hormones, Architecture, Self-trust, Execution. For the woman tired of being told it is in her head.",
      brand: { "@id": "https://thisisphase.co/#brand" },
      category: "Digital Workbook",
      offers: {
        "@type": "Offer",
        price: "97.00",
        priceCurrency: "USD",
        url: "https://thisisphase.co",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://momumentalmoments.co/#org" },
      },
    },
    // ─── PRODUCT · THE CO-PARENTING POWER METHOD® ──────────────────
    {
      "@type": "Product",
      "@id": "https://momumentalmoments.co/#cppm-product",
      name: "The Co-Parenting Power Method®",
      description:
        "31-module co-parenting workbook with 25+ ready-to-use communication scripts. For high-conflict divorce and blended family architecture.",
      brand: { "@id": "https://momumentalmoments.co/#cppm" },
      category: "Digital Workbook",
      offers: {
        "@type": "Offer",
        price: "47.00",
        priceCurrency: "USD",
        url: "https://erikahanafin.com/co-parenting-power-method",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://momumentalmoments.co/#org" },
      },
    },
    // ─── ITEM LIST · PARENT NAV ─────────────────────────────────────
    {
      "@type": "ItemList",
      name: "MOMumental Moments® product line",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": "https://momumentalmoments.co/#complete-library" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@id": "https://thisisphase.co/#the-series" },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: { "@id": "https://momumentalmoments.co/#cppm-product" },
        },
      ],
    },
    // ─── PODCAST EPISODE · LATEST (EP 2) ────────────────────────────
    {
      "@type": "PodcastEpisode",
      "@id": "https://www.momumentalreinvention.com/p/on-loving-four-boys-out-loud-momumental#ep-2",
      name: "Ep 2 · The Story I Did Not Write Down",
      description:
        "Erika reads the week's letter, then tells the story she did not put on the page. This week: the birthday party moment nobody warned her about.",
      url: "https://www.momumentalreinvention.com/p/on-loving-four-boys-out-loud-momumental",
      datePublished: "2026-07-16",
      episodeNumber: 2,
      partOfSeries: {
        "@id": "https://www.momumentalreinvention.com/#podcast",
      },
      author: { "@id": "https://erikahanafin.com/#person" },
    },
    // ─── FAQ PAGE · VISIBLE ON HOMEPAGE ─────────────────────────────
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* JSON-LD · full graph for AI engines + Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSON_LD) }}
      />

      {/* SECTION 1 · HERO */}
      <section className="bg-cream py-20 md:py-28 px-6 md:px-10 lg:px-20 border-b border-navy/10">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow text-pink mb-6">THE REGISTERED MOVEMENT</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy mb-8">
            MOMumental Moments<sup className="text-3xl md:text-4xl">®</sup>
            <br />
            <span className="italic text-pink">one woman, one journey, three doors</span>.
          </h1>
          <p className="text-xl md:text-2xl text-navy/75 leading-relaxed max-w-3xl mb-8">
            The registered women&apos;s reinvention movement founded by Erika Hanafin Austria. Built for women rebuilding everything that matters.
          </p>

          <ul className="space-y-3 text-lg md:text-xl text-navy/90 leading-relaxed max-w-3xl mb-10 border-l-2 border-pink pl-6">
            <li>
              <strong className="text-navy">MOMumental Reinvention Substack</strong> <span className="text-navy/70">·</span> where she <em className="text-pink not-italic font-semibold">FEELS</em> it.
            </li>
            <li>
              <strong className="text-navy">The PHASE<sup>™</sup></strong> <span className="text-navy/70">·</span> where she <em className="text-pink not-italic font-semibold">WORKS</em> it.
            </li>
            <li>
              <strong className="text-navy">MOMumental Reinvention Podcast</strong> <span className="text-navy/70">·</span> where she <em className="text-pink not-italic font-semibold">HEARS</em> it. <span className="text-navy/60 text-base">Live now.</span>
            </li>
          </ul>

          <p className="text-base md:text-lg italic text-navy/85 mb-10 max-w-2xl">
            Becoming, not being. A build, not a mood.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#library" className="btn-primary">
              The Complete Library · $228 →
            </a>
            <a
              href="https://www.momumentalreinvention.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Subscribe to the Substack →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NEW SECTION · THE COMPLETE LIBRARY · $228 Founding cohort       */}
      {/* Position: above pillars · this is the umbrella product          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        id="library"
        aria-labelledby="library-heading"
        className="bg-pink text-cream py-20 md:py-24 px-6 md:px-10 lg:px-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow text-cream/80 mb-6">THE FOUNDING COHORT</div>
          <h2
            id="library-heading"
            className="font-serif text-4xl md:text-6xl mb-6 leading-tight"
          >
            The Complete Library.
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-cream/95 mb-8">
            Every workbook I have built for the rebuild. Yours forever.
          </p>
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-10 max-w-3xl mx-auto">
            The PHASE<sup>™</sup>. The Power Method<sup>®</sup>. All the individual workbooks. Every Founding cohort drop as I release them. One library. $228. Yours forever.
          </p>
          <p className="text-lg italic text-cream/85 mb-10">
            For the woman who does not want to piece it together.
          </p>
          <a
            href="https://buy.stripe.com/6oU5kD1Pgcca8Yj1qVeEo0m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream text-pink font-semibold text-lg px-8 py-4 rounded hover:bg-cream/90 transition-colors"
          >
            Join the Founding cohort · $228 →
          </a>
          <p className="text-sm text-cream/70 mt-6">
            One-time payment. Yours forever. Founding cohort closes Sept 30, 2026.
          </p>
        </div>
      </section>

      {/* SECTION 2 · WHO FOUND THIS PAGE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 lg:px-20 border-b border-navy/10">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow text-pink mb-6">HOW YOU FOUND THIS PAGE</div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8 leading-tight">
            Whichever brought you here, <span className="italic text-pink">welcome</span>.
          </h2>
          <ul className="space-y-4 text-lg text-navy/85 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-pink font-mono text-sm pt-1.5 flex-shrink-0">01</span>
              <span>
                You googled perimenopause workbook at 2am after the fourth doctor told you it was stress.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink font-mono text-sm pt-1.5 flex-shrink-0">02</span>
              <span>
                A friend forwarded you my Substack and you wanted to know who I am before subscribing.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink font-mono text-sm pt-1.5 flex-shrink-0">03</span>
              <span>
                You are the woman in the rebuild nobody warned you about. You are tired of being treated like the rebuild is a personal failure.
              </span>
            </li>
          </ul>
          <p className="mt-10 text-lg italic text-navy leading-relaxed">
            Bring all of it. There is a manual for what is happening, and you are not crazy.
          </p>
        </div>
      </section>

      {/* SECTION 3 · TWO PILLARS · individual products */}
      <section
        id="pillars"
        aria-labelledby="pillars-heading"
        className="bg-cream py-20 md:py-24 px-6 md:px-10 lg:px-20"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-14">
            <div className="eyebrow text-pink mb-4">THE TWO PILLARS</div>
            <h2
              id="pillars-heading"
              className="font-serif text-4xl md:text-5xl text-navy mb-4"
            >
              The body-truth pillar.
              <br />
              The architecture pillar.
              <br />
              <span className="italic text-pink">Both, and both at once.</span>
            </h2>
            <p className="mt-6 text-navy/70 text-lg max-w-2xl mx-auto">
              Or take everything at once. <a href="#library" className="text-pink underline underline-offset-4">The Complete Library is $228</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* The PHASE™ */}
            <article className="relative bg-cream-alt border border-navy/10 rounded-xl p-10 md:p-12 flex flex-col overflow-hidden hover:border-pink/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink to-pink-deep" />
              <div className="eyebrow text-pink mb-3" style={{ fontSize: "10px" }}>
                BODY-TRUTH PILLAR
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-3">
                The PHASE<sup className="text-base">™</sup>
              </h3>
              <p className="font-serif italic text-pink mb-5 text-lg">
                Five volumes for the woman in the rebuild nobody warned her about.
              </p>
              <p className="text-navy/85 leading-relaxed mb-6">
                Perimenopause. Hormones. Daily architecture. Self-trust. Execution. Five volumes, two companions, one free Clarity Starter Kit. For the woman who is tired of being told it is in her head.
              </p>

              <ul className="space-y-2 text-sm text-navy/75 mb-8 flex-grow">
                <li>· Vol. I · Perimenopause</li>
                <li>· Vol. II · Hormones</li>
                <li>· Vol. III · Architecture</li>
                <li>· Vol. IV · Self-trust</li>
                <li>· Vol. V · Execution</li>
                <li className="pt-2 mt-2 border-t border-navy/10">
                  ★ The Series (all five) · $97 · saves $38
                </li>
              </ul>

              <div className="mt-auto">
                <a
                  href="https://thisisphase.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get The PHASE<sup>™</sup> →
                </a>
              </div>
            </article>

            {/* The Co-Parenting Power Method® · simplified per audit */}
            <article className="relative bg-cream-alt border border-navy/10 rounded-xl p-10 md:p-12 flex flex-col overflow-hidden hover:border-pink/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink to-pink-deep" />
              <div className="eyebrow text-pink mb-3" style={{ fontSize: "10px" }}>
                ARCHITECTURE PILLAR
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-3">
                The Co-Parenting Power Method<sup className="text-base">®</sup>
              </h3>
              <p className="font-serif italic text-pink mb-5 text-lg">
                Communication that holds. Boundaries that stay. Nervous system that regulates.
              </p>
              <p className="text-navy/85 leading-relaxed mb-6">
                31 modules. 25+ ready-to-use scripts. Everything you need to survive high-conflict co-parenting with a nervous system that stays regulated. For the woman in the season.
              </p>

              <ul className="space-y-2 text-sm text-navy/75 mb-8 flex-grow">
                <li>· 8 parts · 31 modules · complete workbook</li>
                <li>· BIFF communication protocols</li>
                <li>· Financial + custody frameworks</li>
                <li>· Appendix A · 25+ ready-to-use scripts</li>
                <li className="pt-2 mt-2 border-t border-navy/10">
                  ★ $47 standalone · included in <a href="#library" className="text-pink hover:underline">The Complete Library</a>
                </li>
                <li className="text-navy/50 text-xs pt-1">
                  Additional Power Method® archetype editions in 2026-2027.
                </li>
              </ul>

              <div className="mt-auto">
                <a
                  href="https://erikahanafin.com/co-parenting-power-method"
                  className="btn-primary"
                >
                  Get The Power Method<sup>®</sup> →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NEW SECTION · THE PODCAST · Ep 2 landing                        */}
      {/* Position: after pillars, before founder                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        id="podcast"
        aria-labelledby="podcast-heading"
        className="bg-white py-20 md:py-24 px-6 md:px-10 lg:px-20 border-b border-navy/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-3">
              <div className="eyebrow text-pink mb-6">LISTEN</div>
              <h2
                id="podcast-heading"
                className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight"
              >
                MOMumental Reinvention · <span className="italic text-pink">The Podcast</span>.
              </h2>
              <p className="text-lg md:text-xl text-navy/85 leading-relaxed mb-6">
                Every Thursday morning I read you the letter. Then I tell you the moment I did not put on the page. Twelve to fifteen minutes with the woman rebuilding everything that matters.
              </p>
              <p className="text-navy/70 mb-8">
                <strong className="text-navy">Latest episode:</strong> Ep 2 · The Story I Did Not Write Down
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.momumentalreinvention.com/p/on-loving-four-boys-out-loud-momumental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Listen now →
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/momumental-reinvention"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:text-pink-deep underline-offset-4 hover:underline self-center"
                >
                  Apple Podcasts →
                </a>
                <a
                  href="https://open.spotify.com/show/momumental-reinvention"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:text-pink-deep underline-offset-4 hover:underline self-center"
                >
                  Spotify →
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-square bg-cream-alt border border-pink/30 rounded-xl flex items-center justify-center text-6xl">
                🎙️
              </div>
              <p className="text-sm text-navy/50 text-center mt-4 italic">
                Thursdays · 9 AM ET · everywhere podcasts live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 · FOUNDER + KEYSTONE STORY */}
      <section className="bg-cream-alt py-20 md:py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Left · keystone story */}
            <div className="md:col-span-3">
              <div className="eyebrow text-pink mb-6">THE FOUNDER</div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8 leading-tight">
                I built this because <span className="italic text-pink">no one else did</span>.
              </h2>
              <div className="space-y-5 text-lg text-navy/85 leading-relaxed">
                <p className="font-serif italic text-xl text-navy mb-6">
                  2017. San Francisco. I was driving my son to school.
                </p>
                <p>
                  That was the morning the name showed up. <em>MOMumental Moments</em>. I said it out loud in the car. It stuck. I started writing it down everywhere · in margins, in notes apps, in the small hours when nobody was watching.
                </p>
                <p>
                  For seven years it was a private notebook. The thing I kept open while I led acquisitions, raised four boys, and built every other thing I built. The phrase named what nobody else was naming.
                </p>
                <p>
                  A cross-country move, followed by a nasty divorce that left me scrubbing a neon-green pool on Mother&apos;s Day. CEO of Community Supporting Moms. In perimenopause without knowing it. Co-blending a family. Then a baby at 40.
                </p>
                <p>
                  Four years of being dismissed by doctors. Then I got pregnant at 40. Sold a company six months pregnant. Delivered a 9lb 12oz baby boy. Four months in, the floor opened up.
                </p>
                <p className="font-serif text-xl md:text-2xl text-navy italic border-l-2 border-pink pl-5 my-8">
                  The only way out was an SSRI <strong className="not-italic">and</strong> a hormone panel. Not either. Both.
                </p>
                <p>
                  The architecture I needed for myself became the architecture I refused to gatekeep. One voice. Two products. Built together.
                </p>
                <p className="text-navy font-semibold pt-2">
                  The notebook from 2017 is a registered IP in 2026.
                </p>
                <p className="pt-4">
                  <a
                    href="https://erikahanafin.com/#about"
                    className="text-pink hover:text-pink-deep underline-offset-4 hover:underline font-semibold"
                  >
                    Read the longer story →
                  </a>
                </p>
              </div>
            </div>

            {/* Right · The Receipts (updated Jul 14, 2026 · EQUI-KIDS removed, board seats added) */}
            <div className="md:col-span-2">
              <div className="eyebrow text-navy/50 mb-6">THE RECEIPTS</div>
              <ul className="space-y-3 text-navy/85">
                <li className="flex gap-3">
                  <span className="text-pink">●</span> IIN Certified Holistic Health Coach
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Founder of MOMumental Moments<sup>®</sup>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Founder of The PHASE<sup>™</sup>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Author of The Power Method<sup>®</sup>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Publisher of MOMumental Reinvention
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Host, MOMumental Reinvention Podcast
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> 5x Acquisition CEO
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> 2x Top 50 Women Leaders Virginia
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Co-Founder, NEON ID
                </li>
                <li className="pt-4 mt-4 border-t border-navy/10 text-xs uppercase tracking-widest text-navy/50">
                  Board Seats
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Pepperdine Graziadio · SEC
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Next ChaptHER
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Luminary
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NEW SECTION · LETTERS THAT LAND · reader testimonials           */}
      {/* Position: after founder · Layer 2 earned social proof           */}
      {/* NOTE: Publish only anonymized quotes until permission received  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="bg-white py-20 md:py-24 px-6 md:px-10 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="eyebrow text-pink mb-4">LETTERS THAT LAND</div>
            <h2
              id="testimonials-heading"
              className="font-serif text-4xl md:text-5xl text-navy mb-4"
            >
              What women write back.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-cream p-8 rounded-xl border border-pink/20">
              <p className="font-serif italic text-lg text-navy/90 leading-relaxed mb-6">
                &ldquo;Your words have helped me express and put words to what I am feeling. Every week your words somehow hit perfect to the challenge I am facing. It feels like something sent to me from a guardian angel.&rdquo;
              </p>
              <footer className="text-sm text-navy/60 uppercase tracking-widest">
                · Reader, Substack subscriber
              </footer>
            </blockquote>

            <blockquote className="bg-cream p-8 rounded-xl border border-pink/20">
              <p className="font-serif italic text-lg text-navy/90 leading-relaxed mb-6">
                &ldquo;I love your authenticity and your transition into living life so differently over the last decade. It is encouraging and refreshing.&rdquo;
              </p>
              <footer className="text-sm text-navy/60 uppercase tracking-widest">
                · Reader, Substack subscriber
              </footer>
            </blockquote>

            <blockquote className="bg-cream p-8 rounded-xl border border-pink/20">
              <p className="font-serif italic text-lg text-navy/90 leading-relaxed mb-6">
                &ldquo;I was in the middle of a messy divorce. The Co-Parenting Power Method® workbook gave me the scripts to survive the next text. I have not felt this seen in years.&rdquo;
              </p>
              <footer className="text-sm text-navy/60 uppercase tracking-widest">
                · Reader, Co-Parenting Power Method® customer
              </footer>
            </blockquote>
          </div>

          <p className="text-center text-sm text-navy/50 mt-10 italic">
            All quotes shared with permission. First names withheld to protect readers.
          </p>
        </div>
      </section>

      {/* SECTION 6 · STAY CLOSE · Substack + Engage CTAs */}
      <section className="bg-navy text-cream py-20 md:py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            <div className="md:col-span-3">
              <div className="eyebrow text-pink mb-6">STAY CLOSE</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                MOMumental Reinvention.
              </h2>
              <p className="text-lg md:text-xl text-cream/80 leading-relaxed mb-8">
                Tuesday-morning essays for women rebuilding everything that matters. Free essays drop weekly. Paid subscribers get the deeper work, the audio essays, and the live sessions.
              </p>
              <a
                href="https://www.momumentalreinvention.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Subscribe to Substack →
              </a>
            </div>

            <div className="md:col-span-2">
              <div className="eyebrow text-pink mb-6">WORK WITH ERIKA</div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://erikahanafin.com/#speaking"
                    className="block text-cream hover:text-pink transition-colors text-base border-b border-cream/20 pb-3"
                  >
                    Book Erika to speak →
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@momumentalmoments.com?subject=Press%20Inquiry"
                    className="block text-cream hover:text-pink transition-colors text-base border-b border-cream/20 pb-3"
                  >
                    Press inquiries →
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@momumentalmoments.com?subject=Partnership%20Inquiry"
                    className="block text-cream hover:text-pink transition-colors text-base"
                  >
                    Partnerships →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NEW SECTION · SHOP THE STACK · Amazon storefront                */}
      {/* Position: after Work with Erika · affiliate revenue lever       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        id="shop"
        aria-labelledby="shop-heading"
        className="bg-cream-alt py-16 md:py-20 px-6 md:px-10 lg:px-20 border-t border-navy/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow text-pink mb-4">SHOP THE STACK</div>
          <h2
            id="shop-heading"
            className="font-serif text-3xl md:text-4xl text-navy mb-4"
          >
            The products holding me steady this week.
          </h2>
          <p className="text-lg text-navy/80 leading-relaxed mb-8">
            Curated. Tested. Actually used. Skincare, kitchen tools, books, AI stack, and the small things that get me through perimenopause and the rebuild.
          </p>
          <a
            href="https://www.amazon.com/shop/erikahanafin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Shop my Amazon storefront →
          </a>
          <p className="text-sm text-navy/50 mt-6 italic">
            Some links are affiliate links. If you buy through them I earn a small commission at no cost to you.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NEW SECTION · FAQ · visible + matches JSON-LD schema            */}
      {/* Position: before newsletter · rich results eligible             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-cream py-20 md:py-24 px-6 md:px-10 lg:px-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="eyebrow text-pink mb-4">FREQUENTLY ASKED</div>
            <h2
              id="faq-heading"
              className="font-serif text-4xl md:text-5xl text-navy mb-4"
            >
              Everything you need to know.
            </h2>
            <p className="text-lg text-navy/70">
              About the parent IP, the products, and the founder.
            </p>
          </div>

          <div className="space-y-8">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx < FAQ_ITEMS.length - 1
                    ? "border-b border-navy/10 pb-8"
                    : "pb-6"
                }
              >
                <h3 className="font-serif text-2xl text-navy mb-3">
                  {item.question}
                </h3>
                <p className="text-navy/85 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
