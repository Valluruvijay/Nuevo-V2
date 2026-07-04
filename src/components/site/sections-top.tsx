"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container, Reveal, SectionHeading, CountUp, StaggerGroup, StaggerItem } from "./_shared";
import { Particles } from "./particles";
import { CLIENTS, STATS, ABOUT } from "@/lib/site-data";

/* ---------------- Clients marquee ---------------- */
export function ClientsMarquee() {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-b border-slate-100 bg-white py-8 sm:py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by India&apos;s leading brands across 8+ industries
        </p>
        <div className="marquee-pause relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {list.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display whitespace-nowrap text-lg font-bold text-slate-400/80 transition-colors hover:text-brand-700 sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Stats ---------------- */
export function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-950 py-14 sm:py-20">
      <div className="animate-mesh absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <Particles count={10} color="rgba(251,146,60,0.45)" />
      {/* dotted texture (Apollo-style) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1.3px, transparent 1.3px)", backgroundSize: "22px 22px" }}
      />
      <Container className="relative">
        <StaggerGroup className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12 lg:grid-cols-6 lg:gap-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center lg:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors hover:bg-saffron-500/20 lg:mx-0">
                  <s.icon className="h-6 w-6 text-saffron-400" />
                </div>
                <p className="font-display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  <CountUp
                    value={s.value}
                    decimals={(s as { decimals?: number }).decimals ?? 0}
                    suffix={s.suffix}
                  />
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{s.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">{s.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative">
            <div className="img-zoom relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-950/10">
              <Image
                src="/about-campus.png"
                alt="Aerial view of Nuevo Supply Chain mega fulfilment campus in India"
                width={1344}
                height={768}
                className="aspect-[7/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:block lg:-right-6">
              <p className="font-display text-4xl font-extrabold text-brand-700">15+</p>
              <p className="text-sm font-medium text-slate-600">years engineering India&apos;s supply chains</p>
            </div>

            {/* Floating top badge */}
            <div className="absolute -left-3 -top-3 hidden rounded-xl bg-saffron-500 px-4 py-2 text-sm font-semibold text-white shadow-lg sm:block">
              Since 2009
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow={ABOUT.eyebrow}
              title={ABOUT.title}
              description={ABOUT.body}
              align="left"
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {ABOUT.points.map((p, i) => (
                <Reveal key={p.title} delay={i}>
                  <div className="card-lift rounded-2xl border border-slate-100 bg-slate-50/60 p-5 hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-brand-950/5">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <p.icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="font-display mt-4 text-base font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Milestones timeline */}
            <Reveal delay={2}>
              <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-700">
                  Our journey
                </p>
                <ol className="mt-5 space-y-4">
                  {ABOUT.milestones.map((m) => (
                    <li key={m.year} className="flex gap-4">
                      <span className="font-display w-14 shrink-0 text-sm font-extrabold text-saffron-600">
                        {m.year}
                      </span>
                      <span className="relative pl-4 text-sm text-slate-600 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                        {m.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
