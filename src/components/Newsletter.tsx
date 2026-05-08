/**
 * Substack subscribe block. Drops above Footer on the homepage.
 * Soft CTA · the "stay close" entry point for readers not ready to buy.
 */
export function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-cream-alt py-16 md:py-20 px-6 md:px-10 lg:px-20 border-t border-navy/10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow text-pink mb-4">STAY CLOSE</p>
        <h2
          id="newsletter-heading"
          className="font-serif text-3xl md:text-4xl text-navy mb-4 leading-tight"
        >
          Tuesday letters.
          <br />
          <span className="italic text-pink">For women rebuilding everything that matters.</span>
        </h2>
        <p className="text-base md:text-lg text-navy/75 leading-relaxed mb-8 max-w-2xl mx-auto">
          MOMumental Reinvention drops every Tuesday at 9am ET. Free essays for everyone. Paid subscribers go deeper with audio essays, live sessions, and the work behind the work.
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
    </section>
  );
}

export default Newsletter;
