import { ListChecks, ScanLine, TrendingUp, Video } from "lucide-react";

import { FEATURES } from "@/lib/content";
import SectionHeading from "@/components/section-heading";

const ICONS = {
  video: Video,
  "scan-line": ScanLine,
  "list-checks": ListChecks,
  "trending-up": TrendingUp,
} as const;

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-16 border-t border-white/5 bg-navy-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            label="What We Deliver"
            title="Every Detail Matters."
            description="Four commitments shape every lesson we produce. They are the difference between watching lifting and learning it."
          />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS];
            return (
              <article
                key={feature.number}
                className="reveal group relative border border-white/10 bg-navy p-8 transition-colors duration-300 hover:border-brand/50 hover:bg-navy-darker"
                data-delay={index * 100}
              >
                <span
                  aria-hidden="true"
                  className="font-display absolute top-6 right-6 text-4xl font-bold text-white/8 transition-colors duration-300 group-hover:text-brand/30"
                >
                  {feature.number}
                </span>
                <span className="flex h-12 w-12 items-center justify-center border border-brand/40 bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                  <Icon
                    className="h-6 w-6 text-brand transition-colors duration-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="font-display mt-6 text-lg font-bold tracking-wide text-white uppercase">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{feature.body}</p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-[3px] w-8 bg-brand transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
