/**
 * MOMumental Moments® · homepage of momumentalmoments.co
 *
 * STREAMLINED · 5 sections + Newsletter + Footer
 * (CMO directive May 8 · less = more · cut for engagement)
 *
 * EDITORIAL FIREWALL · four-question stamp per MOMumental-Habit-Voice-Guide.
 *
 * Page-level loop:
 * - CUE     · Reader landed here. She's asking "what is MOMumental Moments and is it for me?"
 * - ROUTINE · Scroll five sections in 60-90 seconds.
 * - REWARD  · Product clarity, founder trust, one screenshot-able line.
 * - CRAVING · "She names what I have been living. I want her in my week."
 *
 * Section-level audit:
 * 1. Hero ........... cue: "what is this brand?" / reward: instant orient
 * 2. Who Found This . cue: name 3 specific moments / reward: recognition
 * 3. Two Pillars .... cue: "show me the offer" / reward: product clarity (CONVERSION)
 * 4. Founder ........ cue: "do I trust her?" / reward: receipts + keystone story
 * 5. Stay Close ..... cue: "I'm not ready to buy" / reward: Substack + engage paths
 *
 * VOICE FIREWALL · no em dashes, NEON, sister-tone, MOMumental Moments® always
 * with the registered mark, The PHASE™ and The Power Method® consistently rendered.
 */

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

// FAQ data lives in JSON-LD only for SEO. Not rendered on page (cut for engagement per CMO).
const FAQ_FOR_SCHEMA = [
  {
    question: "What is MOMumental Moments®, exactly?",
    answer:
      "It is the registered parent IP behind everything I build for women in the rebuild. Two consumer products live underneath: The PHASE™ (body-truth pillar, perimenopause and hormones) and The Power Method® (architecture pillar, co-parenting and relationship structure). The Substack publication is MOMumental Reinvention. One voice across all surfaces.",
  },
  {
    question: "Why two products instead of one?",
    answer:
      "Because the rebuild is two pillars. The body changes whether you are ready or not. The architecture of your life has to be rebuilt deliberately. I built one product for each pillar so women in the middle of either or both can find the manual that fits.",
  },
  {
    question: "Where do I start?",
    answer:
      "If you are in the body-truth rebuild · start with The PHASE™ Vol. I (Perimenopause) at thisisphase.co. If you are in the architecture rebuild · start with The Power Method® at erikahanafin.com/co-parenting-power-method. The Clarity Starter Kit at thisisphase.co is free.",
  },
  {
    question: "Who is this for?",
    answer:
      "Women between 35 and 55 in the rebuild nobody warned them about. Mid-career to executive level, mothers or chosen-no-kids, currently in or anticipating perimenopause, tired of being treated like the rebuild is a personal failure.",
  },
];

const PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      "@id": "https://momumentalmoments.co/#brand",
      name: "MOMumental Moments",
      alternateName: "MOMumental Moments®",
      description:
        "The parent IP behind The PHASE™ and The Power Method®. Built for women rebuilding everything that matters.",
      logo: "https://momumentalmoments.co/icon.png",
      url: "https://momumentalmoments.co",
      founder: { "@id": "https://erikahanafin.com/#person" },
      sameAs: [
        "https://erikahanafin.com",
        "https://www.momumentalreinvention.com",
        "https://thisisphase.co",
        "https://www.instagram.com/erikahanafin",
        "https://www.linkedin.com/in/erikahanafin/",
      ],
    },
    {
      "@type": "ItemList",
      name: "MOMumental Moments® product line",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "The PHASE™",
            url: "https://thisisphase.co",
            description:
              "Five-volume women's reinvention series covering perimenopause, hormones, daily architecture, self-trust, and execution.",
            author: { "@id": "https://erikahanafin.com/#person" },
            brand: { "@id": "https://momumentalmoments.co/#brand" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "The Power Method®",
            url: "https://erikahanafin.com/co-parenting-power-method",
            description:
              "Co-parenting and relationship architecture system. Five archetype editions covering structure, diplomacy, strategy, sovereignty, and fortress-level boundary work.",
            author: { "@id": "https://erikahanafin.com/#person" },
            brand: { "@id": "https://momumentalmoments.co/#brand" },
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_FOR_SCHEMA.map((q) => ({
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

      {/* JSON-LD · Brand + ItemList + FAQ for AI engines and Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSON_LD) }}
      />

      {/* SECTION 1 · HERO */}
      {/* CUE: she just landed · ROUTINE: read H1 + scan two CTAs · REWARD: instant orient */}
      <section className="bg-cream py-20 md:py-28 px-6 md:px-10 lg:px-20 border-b border-navy/10">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow text-pink mb-6">THE PARENT IP</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy mb-8">
            MOMumental Moments<sup className="text-3xl md:text-4xl">®</sup>
            <br />
            <span className="italic text-pink">behind everything I build</span>.
          </h1>
          <p className="text-xl md:text-2xl text-navy/75 leading-relaxed max-w-3xl mb-10">
            The registered parent IP behind The PHASE<sup>™</sup> and The Power Method<sup>®</sup>. Two consumer products. One voice. Built for women rebuilding everything that matters.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://thisisphase.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              The PHASE<sup>™</sup> is live →
            </a>
            <a
              href="https://erikahanafin.com/co-parenting-power-method"
              className="btn-secondary"
            >
              The Power Method<sup>®</sup>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 · WHO FOUND THIS PAGE */}
      {/* CUE: name a specific moment · ROUTINE: read 3 numbered bullets · REWARD: "she sees me" */}
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

      {/* SECTION 3 · TWO PILLARS · the conversion section */}
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

            {/* The Power Method® */}
            <article className="relative bg-cream-alt border border-navy/10 rounded-xl p-10 md:p-12 flex flex-col overflow-hidden hover:border-pink/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink to-pink-deep" />
              <div className="eyebrow text-pink mb-3" style={{ fontSize: "10px" }}>
                ARCHITECTURE PILLAR
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-3">
                The Power Method<sup className="text-base">®</sup>
              </h3>
              <p className="font-serif italic text-pink mb-5 text-lg">
                Five archetype editions for the woman doing the harder version of the work.
              </p>
              <p className="text-navy/85 leading-relaxed mb-6">
                Co-parenting through structure, not chaos. Boundaries that hold without performance. The architecture for the relationships that hold up your life.
              </p>

              <ul className="space-y-2 text-sm text-navy/75 mb-8 flex-grow">
                <li>· Vol. I · The Architect Edition · live</li>
                <li>· Vol. II · The Diplomat · 2026</li>
                <li>· Vol. III · The Strategist · 2026</li>
                <li>· Vol. IV · The Sovereign · 2026</li>
                <li>· Vol. V · The Fortress · 2026</li>
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

            {/* Right · credentials */}
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
                  <span className="text-pink">●</span> 5x Acquisition CEO
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> 2x Top 50 Women Leaders Virginia
                </li>
                <li className="flex gap-3">
                  <span className="text-pink">●</span> Co-Founder, NEON ID
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 · STAY CLOSE · Substack + Engage CTAs */}
      <section className="bg-navy text-cream py-20 md:py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Left · Substack hero */}
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

            {/* Right · Work With Erika compact CTAs */}
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

      <Newsletter />
      <Footer />
    </>
  );
}
