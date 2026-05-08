import Link from "next/link";

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="border-b border-navy/10 bg-cream/95 backdrop-blur-sm sticky top-0 z-40"
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="MOMumental Moments · Home"
        >
          <span className="text-pink font-serif italic text-3xl leading-none group-hover:text-pink-deep transition">
            M
          </span>
          <span className="font-serif text-xl tracking-tightest text-navy">
            MOMumental Moments<sup className="text-xs ml-0.5">®</sup>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 eyebrow text-xs">
          <a
            href="https://thisisphase.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition"
          >
            The PHASE<sup>™</sup>
          </a>
          <a
            href="https://erikahanafin.com/co-parenting-power-method"
            className="hover:text-pink transition"
          >
            Power Method<sup>®</sup>
          </a>
          <a
            href="https://www.momumentalreinvention.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition"
          >
            Substack
          </a>
          <a
            href="https://erikahanafin.com"
            className="hover:text-pink transition"
          >
            Founder
          </a>
        </div>

        <a
          href="https://thisisphase.co"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs"
        >
          Get The PHASE<sup>™</sup> →
        </a>
      </div>
    </nav>
  );
}

export default Nav;
