import { STATS } from "@/lib/content";
import CountUp from "@/components/count-up";
import SectionHeading from "@/components/section-heading";

export default function Results() {
  return (
    <section
      id="results"
      className="scroll-mt-16 border-t border-white/5 bg-navy-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            label="By The Numbers"
            title="The Numbers Behind the Progress."
            description="A library measured in results, not uploads — built for a community that keeps coming back to the platform."
          />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal group relative bg-navy px-6 py-12 text-center transition-colors duration-300 hover:bg-navy-darker sm:px-8"
              data-delay={index * 120}
            >
              <dd className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                <CountUp value={stat.value} />
                <span className="text-brand">{stat.suffix}</span>
              </dd>
              <dt className="mt-4 text-xs font-semibold tracking-[0.25em] text-steel uppercase">
                {stat.label}
              </dt>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-brand transition-all duration-500 group-hover:w-1/3"
              />
            </div>
          ))}
        </dl>

        <p className="reveal mt-6 text-center text-xs tracking-wide text-steel/70">
          Figures shown are illustrative brand statistics.
        </p>
      </div>
    </section>
  );
}
