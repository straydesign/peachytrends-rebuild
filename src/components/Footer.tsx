"use client";

function getFooterLinks(basePath: string) {
  return {
    shop: [
      { label: "All Products", href: `${basePath}#shop` },
      { label: "New Arrivals", href: `${basePath}#shop` },
      { label: "Best Sellers", href: `${basePath}#shop` },
      { label: "Gift Cards", href: `${basePath}#shop` },
    ],
    company: [
      { label: "Our Mission", href: `${basePath}#mission` },
      { label: "Our Impact", href: `${basePath}#impact` },
      { label: "The Cause", href: "https://www.unrwa.org/" },
      { label: "Careers", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: `${basePath}#contact` },
      { label: "Shipping & Returns", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };
}

export default function Footer({ basePath = "" }: { basePath?: string }) {
  const footerLinks = getFooterLinks(basePath);

  return (
    <footer className="border-t border-peach/10 bg-warm-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href={basePath || "/"} className="flex items-center gap-2">
              <span className="font-heading text-2xl  text-cream">
                Peachy
              </span>
              <span className="font-heading text-2xl font-light text-peach">
                Trends
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/50">
              Apparel with purpose. Every purchase supports Palestinian refugee
              families with shelter, education, and essential resources.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/thepeachytrends"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-peach/30 hover:text-peach"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@thepeachytrends"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-peach/30 hover:text-peach"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.16V11.7a4.84 4.84 0 01-3.77-1.82V6.69h3.77z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/peachytrends"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-peach/30 hover:text-peach"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/70">
                {category}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/40 transition-colors hover:text-peach"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/5 pt-8 sm:flex-row">
          <p className="text-xs text-cream/30">
            &copy; 2026 Peachy Trends. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-cream/30">
            Made with
            <svg className="h-3.5 w-3.5 text-peach" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            for a better world
          </p>
        </div>
      </div>
    </footer>
  );
}
