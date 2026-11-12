"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal driver. Observes every `.reveal` element once and adds
 * `.is-visible` when it enters the viewport. Per-element stagger is set via
 * the `data-delay` attribute (milliseconds), mapped to `--reveal-delay`.
 */
export default function ScrollFX() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    for (const el of elements) {
      const delay = el.dataset.delay;
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
