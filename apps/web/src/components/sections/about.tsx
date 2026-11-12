import { BookOpen, Crosshair, Users } from "lucide-react";

import { PRINCIPLES } from "@/lib/content";
import SectionHeading from "@/components/section-heading";

const ICONS = {
  crosshair: Crosshair,
  "book-open": BookOpen,
  users: Users,
} as const;

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            label="Who We Are"
            title="Built on Precision. Driven by Progress."
            description="Red Sizzle exists for one reason: most lifters are told what to do, but rarely shown why it works. We close that gap with instruction that treats technique as the foundation of every result."
          />
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {PRINCIPLES.map((principle, index) => {
            const Icon = ICONS[principle.icon as keyof typeof ICONS];
            return (
              <div
                key={principle.number}
                className="reveal group relative bg-navy p-8 transition-colors duration-300 hover:bg-navy-deep sm:p-10"
                data-delay={index * 120}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-brand/40">
                    {principle.number}
                  </span>
                  <Icon
                    className="h-6 w-6 text-brand"
                    aria-hidden="true"
                  />
                </div>
                <dt className="font-display mt-6 text-xl font-bold tracking-wide text-white uppercase">
                  {principle.title}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-steel">{principle.body}</dd>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.75 w-0 bg-brand transition-all duration-500 group-hover:w-full"
                />
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
