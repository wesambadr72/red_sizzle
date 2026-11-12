"use client";

import { cn } from "cn";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/lib/content";
import Logo from "@/components/logo";

export default function Header() {
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-navy/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" aria-label="Red Sizzle — back to top" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "group relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors",
                active === id ? "text-white" : "text-steel hover:text-white",
              )}
            >
              {label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 bottom-0 h-[2px] bg-brand transition-transform duration-300 origin-left",
                  active === id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden bg-brand px-5 py-2.5 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-brand-dark sm:inline-block"
          >
            Start Training
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-white/10 bg-navy-deep/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden",
          menuOpen ? "max-h-96 border-b opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col px-4 py-3">
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "relative border-b border-white/5 px-2 py-3.5 text-sm font-medium tracking-widest uppercase last:border-0",
                active === id ? "text-brand" : "text-steel hover:text-white",
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 mb-2 bg-brand px-5 py-3 text-center text-sm font-semibold tracking-widest text-white uppercase"
          >
            Start Training
          </Link>
        </nav>
      </div>
    </header>
  );
}
