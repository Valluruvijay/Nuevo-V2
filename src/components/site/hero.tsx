"use client";

import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Container, Reveal, Parallax } from "./_shared";
import { HERO } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useSiteRouter } from "./router";
import { Particles } from "./particles";

const SERVICE_TAGS = ["3PL", "Warehousing", "Transportation", "E-commerce Fulfilment"];

export function Hero() {
  const { navigate } = useSiteRouter();
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-950 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Background VIDEO (Apollo-style) — auto-play, muted, loop, with poster fallback */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-warehouse.png"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark scrim for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-950/80 to-brand-900/75" />
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        {/* Ambient particles */}
        <Particles count={16} />
      </div>

      {/* Glow accents (animated blobs) */}
      <div className="animate-blob pointer-events-none absolute -left-32 top-1/4 h-96 w-96 bg-brand-500/20 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute -right-24 bottom-0 h-96 w-96 bg-saffron-500/20 blur-3xl"
        style={{ animationDelay: "-7s" }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-saffron-300 ring-1 ring-white/15 backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-saffron-400 text-saffron-400" />
                {HERO.badge}
              </span>
            </Reveal>

            {/* Animated service tags (Apollo-style) */}
            <Reveal delay={1}>
              <div className="mt-5 flex flex-wrap gap-2">
                {SERVICE_TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur transition-colors hover:border-saffron-400/40 hover:bg-saffron-500/10 hover:text-saffron-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                India&apos;s trusted supply chain &amp; logistics partner,{" "}
                <span className="text-gradient-animate bg-gradient-to-r from-brand-300 via-brand-200 to-saffron-400 bg-clip-text text-transparent">
                  built for scale
                </span>
              </h1>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {HERO.subtitle}
              </p>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={() => navigate(HERO.primaryCta.page)}
                  size="lg"
                  className="group bg-saffron-500 text-white shadow-lg shadow-saffron-500/30 transition-all hover:bg-saffron-600 hover:shadow-saffron-500/40"
                >
                  {HERO.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => navigate(HERO.secondaryCta.page)}
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  {HERO.secondaryCta.label}
                </Button>
              </div>
            </Reveal>

            {/* Highlight chips */}
            <Reveal delay={5}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {HERO.highlights.map((h) => (
                  <li key={h.label} className="group flex items-center gap-2.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-saffron-500/20">
                      <h.icon className="h-4.5 w-4.5 text-saffron-400" />
                    </span>
                    <span className="text-sm font-medium leading-tight text-slate-200">
                      {h.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: floating stat card (with parallax) */}
          <div className="lg:col-span-5">
            <Reveal delay={3} className="relative">
              <Parallax distance={18} className="relative mx-auto max-w-md">
                {/* Main glass card */}
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-brand-950/40 backdrop-blur-xl sm:p-7">
                  <div>
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-saffron-300">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </span>
                      Live network
                    </p>
                    <p className="font-display mt-2 text-2xl font-bold text-white">
                      nuevoOS Control Tower
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { k: "8,000+", v: "Pin codes" },
                      { k: "120+", v: "Warehouses" },
                      { k: "4.2 Mn", v: "Orders / mo" },
                      { k: "99.4%", v: "On-time" },
                    ].map((s) => (
                      <div
                        key={s.v}
                        className="rounded-2xl border border-white/10 bg-brand-900/40 p-4 transition-colors hover:border-saffron-400/30"
                      >
                        <p className="font-display text-2xl font-bold text-white">{s.k}</p>
                        <p className="mt-0.5 text-xs text-slate-300">{s.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-5 overflow-hidden rounded-2xl bg-gradient-to-r from-saffron-500/20 to-transparent p-4 ring-1 ring-saffron-400/20">
                    <p className="text-sm text-slate-100">
                      <span className="font-semibold text-saffron-300">98.7%</span> fleet
                      utilisation across zones — updated 2 min ago
                    </p>
                  </div>
                </div>

                {/* Floating top-right rating badge */}
                <div className="animate-float-slow absolute -right-4 -top-6 hidden rounded-2xl border border-white/15 bg-white p-3 shadow-xl sm:block">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50">
                      <Star className="h-5 w-5 fill-saffron-500 text-saffron-500" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-slate-900">4.9 / 5</p>
                      <p className="text-[11px] text-slate-500">Client rating</p>
                    </div>
                  </div>
                </div>

                {/* Floating bottom-left ISO badge */}
                <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/15 bg-brand-700 p-3 shadow-xl sm:block">
                  <p className="font-display text-sm font-bold text-white">ISO 9001:2015</p>
                  <p className="text-[11px] text-brand-100">Certified operations</p>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 80" className="h-12 w-full sm:h-16" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,80 L0,40 C240,10 480,10 720,30 C960,50 1200,70 1440,40 L1440,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
