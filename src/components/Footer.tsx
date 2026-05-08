import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-cream mt-24">
      <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-2xl">
            MOMumental Moments<sup className="text-sm ml-0.5">®</sup>
          </Link>
          <p className="mt-4 text-cream/80 max-w-sm leading-relaxed">
            The registered parent IP behind The PHASE<sup>™</sup> and The Power Method<sup>®</sup>. Built for women rebuilding everything that matters.
          </p>
          <p className="mt-6 text-cream/60 text-sm">
            Founded by{" "}
            <a
              href="https://erikahanafin.com"
              className="text-pink hover:underline"
            >
              Erika Hanafin Austria
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream/70 mb-4">The Products</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://thisisphase.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition"
              >
                The PHASE<sup>™</sup>
              </a>
            </li>
            <li>
              <a
                href="https://erikahanafin.com/co-parenting-power-method"
                className="hover:text-pink transition"
              >
                The Power Method<sup>®</sup>
              </a>
            </li>
            <li>
              <a
                href="https://www.momumentalreinvention.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition"
              >
                MOMumental Reinvention
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream/70 mb-4">More</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://erikahanafin.com"
                className="hover:text-pink transition"
              >
                erikahanafin.com →
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/erikahanafin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/erikahanafin/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:info@momumentalmoments.com"
                className="hover:text-pink transition"
              >
                info@momumentalmoments.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-cream/60 text-xs">
          <div>
            © {new Date().getFullYear()} MOMumental Moments<sup>®</sup>. All rights reserved. The PHASE<sup>™</sup> and The Power Method<sup>®</sup> are trademarks of MOMumental Moments<sup>®</sup>.
          </div>
          <div>Built with care for women rebuilding everything that matters.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
