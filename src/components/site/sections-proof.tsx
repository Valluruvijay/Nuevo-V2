"use client";

import { Quote, Star, Award, BadgeCheck, ArrowUpRight } from "lucide-react";
import { Container, Reveal, SectionHeading, StaggerGroup, StaggerItem } from "./_shared";
import { NavButton } from "./router";
import {
  SUSTAINABILITY, CASE_STUDIES, TESTIMONIALS, LEADERSHIP, CERTIFICATIONS, AWARDS,
} from "@/lib/site-data";

/* ---------------- Sustainability ---------------- */
export function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-saffron-50 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Sustainable Logistics"
              title={
                <>
                  Green supply chains are{" "}
                  <span className="text-brand-700">better supply chains</span>
                </>
              }
              description="We're decarbonising Indian logistics one hub, one route and one package at a time — with measurable targets, not just promises."
              align="left"
            />
            <Reveal delay={2}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <p className="font-display text-4xl font-extrabold text-brand-700">38%</p>
                  <p className="text-sm text-slate-600">Grid power cut via solar</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <p className="font-display text-4xl font-extrabold text-saffron-600">450+</p>
                  <p className="text-sm text-slate-600">EV last-mile vehicles</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <p className="font-display text-4xl font-extrabold text-brand-700">−60%</p>
                  <p className="text-sm text-slate-600">Single-use plastic target</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SUSTAINABILITY.map((s, i) => (
              <Reveal key={s.title} delay={i % 2}>
                <div className="card-lift h-full rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur hover:border-brand-200 hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-brand-700 text-white shadow-md shadow-brand-700/20">
                    <s.icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Case Studies ---------------- */
export function CaseStudies() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title={
            <>
              Real outcomes for{" "}
              <span className="text-brand-700">real Indian supply chains</span>
            </>
          }
          description="A few partnerships where the right design, technology and operations discipline moved the needle — fast."
        />

        <StaggerGroup className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <StaggerItem key={c.title}>
              <CaseCard c={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function CaseCard({ c }: { c: (typeof CASE_STUDIES)[number] }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-950/5">
      {/* top metric band */}
      <div className="relative bg-gradient-to-br from-brand-800 to-brand-950 p-6 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <span className="relative inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-300 ring-1 ring-white/15">
          {c.industry}
        </span>
        <p className="relative mt-4 text-xs text-slate-300">{c.client}</p>
        <div className="relative mt-3 flex items-baseline gap-2">
          {c.metrics.slice(0, 1).map((m) => (
            <span key={m.label}>
              <span className="font-display text-4xl font-extrabold text-white">{m.value}</span>
              <span className="ml-2 text-xs text-slate-300">{m.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
          {c.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.summary}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">
          {c.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-base font-extrabold text-brand-700">{m.value}</p>
              <p className="mt-0.5 text-[10px] leading-tight text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>

        <NavButton
          page="contact"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-saffron-600"
        >
          Read the full story
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </NavButton>
      </div>
    </article>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Client Voices"
          title={
            <>
              What our partners{" "}
              <span className="text-brand-700">say about us</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i % 2}>
              <figure className="card-lift relative h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-lg sm:p-8">
                <Quote className="h-9 w-9 text-brand-200" />
                <blockquote className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-900 font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-saffron-500 text-saffron-500" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Leadership ---------------- */
export function Leadership() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              Operators &amp; engineers who&apos;ve{" "}
              <span className="text-brand-700">built and scaled supply chains</span>
            </>
          }
          description="A leadership team with decades of combined experience at DHL, Blue Dart, Flipkart and beyond — now building for India."
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {LEADERSHIP.map((p) => (
            <StaggerItem key={p.name}>
              <div className="card-lift group flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-brand-200 hover:shadow-lg">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 font-display text-xl font-extrabold text-white shadow-md shadow-brand-900/20">
                  {p.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-slate-900">{p.name}</h3>
                  <p className="text-xs font-semibold text-saffron-600">{p.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

/* ---------------- Certifications & Awards ---------------- */
export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-grid-dark opacity-25" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Certs */}
          <div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-saffron-400" />
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-saffron-300">
                Certifications &amp; Compliance
              </h3>
            </div>
            <p className="mt-3 text-base text-slate-300">
              Audited, accredited and aligned with global supply-chain standards.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.code}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-colors hover:border-saffron-400/30 hover:bg-white/[0.07]"
                >
                  <p className="font-display text-sm font-bold text-white">{c.code}</p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-400">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-saffron-400" />
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-saffron-300">
                Awards &amp; Recognition
              </h3>
            </div>
            <p className="mt-3 text-base text-slate-300">
              Recognised by India&apos;s logistics &amp; retail community.
            </p>
            <ul className="mt-6 space-y-3">
              {AWARDS.map((a) => (
                <li
                  key={a.title + a.year}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-colors hover:border-saffron-400/30 hover:bg-white/[0.07]"
                >
                  <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-saffron-500/15 text-sm font-extrabold text-saffron-300 ring-1 ring-saffron-400/20">
                    {a.year}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{a.title}</p>
                    <p className="text-xs text-slate-400">{a.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
