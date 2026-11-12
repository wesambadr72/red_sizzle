import { BarChart3, Clock3, Play } from "lucide-react";

import { LESSON, STAGES } from "@/lib/content";
import SectionHeading from "@/components/section-heading";

export default function Training() {
  return (
    <section id="training" className="scroll-mt-16 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            label="The Method"
            title="Know the Movement. Own the Lift."
            description="Every Red Sizzle program follows the same disciplined arc — three stages that turn observation into ownership."
          />
        </div>

        {/* Method stages */}
        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {STAGES.map((stage, index) => (
            <li
              key={stage.name}
              className="reveal relative md:pr-10"
              data-delay={index * 150}
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="font-display flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brand text-lg font-bold text-brand"
                >
                  {index + 1}
                </span>
                {index < STAGES.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-0.5 flex-1 bg-linear-to-r from-brand to-brand/10 md:block"
                  />
                )}
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold tracking-wide text-white uppercase">
                {stage.name}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel">{stage.body}</p>
            </li>
          ))}
        </ol>

        {/* Sample lesson card */}
        <div className="reveal mt-24 grid overflow-hidden border border-white/10 bg-navy-deep lg:grid-cols-[1.1fr_1fr]">
          <div className="group relative min-h-64 overflow-hidden bg-navy">
            {/* Authored technique diagram — side-view barbell with phase markers */}
            <svg
              viewBox="0 0 640 420"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label={`Technique diagram for the lesson: ${LESSON.title}`}
            >
              <defs>
                <radialGradient id="lesson-glow" cx="50%" cy="35%" r="70%">
                  <stop offset="0%" stopColor="rgba(240,32,59,0.10)" />
                  <stop offset="100%" stopColor="rgba(240,32,59,0)" />
                </radialGradient>
              </defs>
              <rect width="640" height="420" fill="url(#lesson-glow)" />

              {/* Floor */}
              <line x1="0" y1="368" x2="640" y2="368" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              <line x1="0" y1="376" x2="640" y2="376" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Chalk specks */}
              <circle cx="150" cy="120" r="2" fill="rgba(255,255,255,0.10)" />
              <circle cx="420" cy="90" r="1.5" fill="rgba(255,255,255,0.08)" />
              <circle cx="540" cy="150" r="2" fill="rgba(255,255,255,0.07)" />
              <circle cx="240" cy="70" r="1.5" fill="rgba(255,255,255,0.09)" />

              {/* Bar shaft */}
              <rect x="96" y="252" width="448" height="10" rx="5" fill="#A5A8B5" />
              {/* Knurling marks */}
              <rect x="300" y="252" width="2" height="10" fill="rgba(32,34,51,0.8)" />
              <rect x="312" y="252" width="2" height="10" fill="rgba(32,34,51,0.8)" />
              <rect x="324" y="252" width="2" height="10" fill="rgba(32,34,51,0.8)" />

              {/* Plates */}
              <rect x="104" y="168" width="26" height="200" rx="3" fill="#292C40" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
              <rect x="136" y="196" width="18" height="172" rx="3" fill="#202233" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
              <rect x="510" y="168" width="26" height="200" rx="3" fill="#292C40" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
              <rect x="486" y="196" width="18" height="172" rx="3" fill="#202233" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

              {/* Center-of-mass axis */}
              <line x1="320" y1="80" x2="320" y2="368" stroke="#F0203B" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.7" />
              <circle cx="320" cy="257" r="5" fill="#F0203B" />

              {/* Pull-path arrows */}
              <path d="M 380 320 L 380 180" stroke="#F0203B" strokeWidth="2" opacity="0.55" />
              <path d="M 380 180 L 374 194 L 386 194 Z" fill="#F0203B" opacity="0.55" />

              {/* Phase markers */}
              <g className="fill-steel" fontSize="13" fontFamily="var(--font-oswald), sans-serif" letterSpacing="3">
                <text x="96" y="404">SETUP</text>
                <text x="286" y="404" className="fill-white">PULL</text>
                <text x="500" y="404">LOCKOUT</text>
              </g>
              <rect x="96" y="388" width="56" height="3" fill="#F0203B" opacity="0.35" />
              <rect x="286" y="388" width="44" height="3" fill="#F0203B" />
              <rect x="500" y="388" width="72" height="3" fill="#F0203B" opacity="0.35" />
            </svg>

            <button
              type="button"
              aria-label={`Play lesson: ${LESSON.title}`}
              className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand shadow-xl shadow-brand/30 transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              <Play className="ml-1 h-8 w-8 fill-white text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
              {LESSON.category}
            </p>
            <h3 className="font-display mt-3 text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl">
              {LESSON.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steel">
              A complete walkthrough of the conventional deadlift — setup, brace, pull,
              and lockout — with slow-motion breakdowns and the faults to watch for.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
              <div className="flex items-center gap-3 bg-navy-deep px-5 py-4">
                <Clock3 className="h-5 w-5 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-xs tracking-widest text-steel uppercase">Duration</dt>
                  <dd className="font-display text-lg font-semibold text-white tabular-nums">
                    {LESSON.duration}
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-navy-deep px-5 py-4">
                <BarChart3 className="h-5 w-5 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-xs tracking-widest text-steel uppercase">Level</dt>
                  <dd className="font-display text-lg font-semibold text-white">
                    {LESSON.level}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
