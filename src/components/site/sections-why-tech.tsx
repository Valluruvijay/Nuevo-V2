"use client";

import Image from "next/image";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./_shared";
import { WHY_US, TECH, NETWORK, PROCESS } from "@/lib/site-data";
import { NavButton } from "./router";
import { Particles } from "./particles";

/* ---------------- Why Us ---------------- */
export function WhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 relative overflow-hidden bg-brand-950 py-16 text-white sm:py-24 lg:py-28"
    >
      <div className="animate-mesh absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <Particles count={12} />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-saffron-500/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Nuevo"
          title={
            <>
              Six reasons India&apos;s top brands{" "}
              <span className="text-saffron-400">trust us with their supply chain</span>
            </>
          }
          description="We combine assets, technology and obsessive operations discipline into a partnership that compounds value year after year."
          light
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i % 3}>
              <div className="card-lift group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-saffron-400/30 hover:bg-white/[0.07] sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-saffron-300 ring-1 ring-white/10">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-base text-slate-200 sm:text-lg">
              <span className="font-display font-bold text-white">Ready to redesign your supply chain?</span>{" "}
              Get a free 2-week diagnostic from our consulting team.
            </p>
            <NavButton
              page="contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-saffron-500 px-6 text-sm font-semibold text-white shadow-lg shadow-saffron-500/25 transition-colors hover:bg-saffron-600"
            >
              Start the conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Technology ---------------- */
export function Technology() {
  return (
    <section
      id="technology"
      className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="img-zoom relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-950/10">
              <Image
                src="/technology-control.png"
                alt="nuevoOS control tower dashboard with India supply chain analytics"
                width={1344}
                height={768}
                className="aspect-[7/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-950/5" />
            </div>
            {/* Floating live card */}
            <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Live · 2 min ago</p>
                  <p className="text-[11px] text-slate-500">3,420 shipments tracked in real time</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy + features */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={TECH.eyebrow}
              title={TECH.title}
              description={TECH.body}
              align="left"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TECH.features.map((f, i) => (
                <Reveal key={f.title} delay={i % 2}>
                  <div className="card-lift flex h-full gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 hover:border-brand-200 hover:bg-white hover:shadow-md">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-slate-900">{f.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Network ---------------- */
export function Network() {
  return (
    <section
      id="network"
      className="scroll-mt-24 relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-dots opacity-60" />
      <Container className="relative">
        <SectionHeading
          eyebrow={NETWORK.eyebrow}
          title={NETWORK.title}
          description={NETWORK.body}
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-12">
          {/* Hubs list */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Key hubs &amp; mega-fulfilment centres
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {NETWORK.hubs.map((h) => (
                  <li
                    key={h.city}
                    className="card-lift flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3.5 hover:border-brand-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
                        <Building2 className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="font-display text-sm font-bold text-slate-900">{h.city}</p>
                        <p className="text-xs text-slate-500">{h.type}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-700">{h.area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Regions */}
          <div className="lg:col-span-5">
            <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {NETWORK.regions.map((r, i) => (
                <Reveal key={r.name} delay={i}>
                  <div className="card-lift flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:border-brand-200 hover:shadow-md">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron-400 to-saffron-600 text-white shadow-md shadow-saffron-500/20">
                      <MapPin className="h-5.5 w-5.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-display text-base font-bold text-slate-900">{r.name} India</h4>
                        <span className="shrink-0 text-xs font-bold text-saffron-600">{r.hubs} hubs</span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{r.states}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function Process() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A proven 4-step path from{" "}
              <span className="text-brand-700">diagnostic to always-on optimisation</span>
            </>
          }
          description="No boilerplate handovers. We embed, diagnose and run — then keep improving every quarter."
        />

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand-100 via-brand-300 to-saffron-200 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i}>
                <div className="relative text-center lg:text-left">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 font-display text-lg font-extrabold text-white shadow-lg shadow-brand-900/25 ring-4 ring-white lg:mx-0">
                    {p.step}
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
