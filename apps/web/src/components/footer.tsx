import { AtSign, Globe, Mail, Play } from "lucide-react";
import Link from "next/link";

import { CONTACT, NAV_LINKS } from "@/lib/content";
import Logo from "@/components/logo";

const SOCIALS = [
  { icon: AtSign, label: "Red Sizzle on Instagram", href: "#" },
  { icon: Play, label: "Red Sizzle on YouTube", href: "#" },
  { icon: Globe, label: "Red Sizzle on X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-darker">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo className="h-9" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel">
            Professional weightlifting education, built around precision, knowledge, and
            progress.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-steel transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
            Quick Links
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className="text-sm text-steel transition-colors hover:text-brand"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
            Contact
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-5 inline-flex items-center gap-3 text-sm text-steel transition-colors hover:text-brand"
          >
            <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
            {CONTACT.email}
          </a>
          <p className="mt-3 text-sm text-steel">{CONTACT.location}</p>
          <p className="mt-1 text-sm text-steel">{CONTACT.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-steel/80 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Red Sizzle. All rights reserved.</p>
          <p className="tracking-widest uppercase">Built for lifters. Driven by precision.</p>
        </div>
      </div>
    </footer>
  );
}
