import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      {/* Atmospheric ground — layered light and texture, no photography */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,32,59,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-navy to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-transparent to-navy/80" />
        <div className="absolute top-1/3 -left-40 h-112 w-md rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="reveal flex items-center gap-4 text-sm font-semibold tracking-[0.35em] text-brand uppercase">
              <span aria-hidden="true" className="h-0.75 w-12 bg-brand" />
              Precision. Strength. Performance.
            </p>

            <h1
              className="reveal font-display mt-6 max-w-4xl text-5xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl xl:text-[6rem]"
              data-delay="100"
            >
              Train smarter.
              <br />
              <span className="text-brand">Lift stronger.</span>
            </h1>

            <p
              className="reveal mt-7 max-w-xl text-lg leading-relaxed text-steel"
              data-delay="200"
            >
              Professional weightlifting education built on verified technique — every
              lift explained frame by frame, every cue grounded in what the movement
              actually demands.
            </p>

            <div className="reveal mt-10 flex flex-wrap items-center gap-4" data-delay="300">
              <Link
                href="#training"
                className="group inline-flex items-center gap-2 bg-brand px-7 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-brand-dark"
              >
                Explore Our Training
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center border border-white/25 px-7 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:border-brand hover:text-brand"
              >
                Discover Our Approach
              </Link>
            </div>

            <p className="reveal mt-8 text-sm tracking-widest text-steel uppercase" data-delay="400">
              Built for lifters. Driven by precision.
            </p>
          </div>

          {/* Hero visual — framed technique photo, desktop composition */}
          <div className="reveal relative hidden lg:block" data-delay="450">
            <div
              className="absolute -inset-px -rotate-2 border border-brand/40"
              aria-hidden="true"
            />
            <div className="relative -rotate-2 overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-3/2">
                <Image
                  src="/images/Weights exercise weightlifter strong athletic _ Free Photo.webp"
                  alt="Weightlifter mid-lift, demonstrating controlled technique"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6">
                  <span aria-hidden="true" className="h-0.75 w-8 bg-brand" />
                  <span className="font-display text-lg font-bold tracking-wide text-white uppercase">
                    Technique First
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
