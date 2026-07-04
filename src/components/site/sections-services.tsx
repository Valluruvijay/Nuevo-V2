"use client";

import * as React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, Reveal, SectionHeading, StaggerGroup, StaggerItem } from "./_shared";
import { SERVICES, INDUSTRIES, type Service } from "@/lib/site-data";
import { NavButton } from "./router";
import { cn } from "@/lib/utils";

/* ---------------- Services ---------------- */
export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              End-to-end supply chain services,{" "}
              <span className="text-brand-700">under one roof</span>
            </>
          }
          description="From the first mile to the last, we run the operations, technology and analytics that move your goods across India — so you can focus on growing your business."
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.title}>
              <ServiceCard service={s} index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isSaffron = service.accent === "saffron";
  return (
    <article
      className={cn(
        "card-lift group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-brand-950/5 sm:p-7",
      )}
    >
      {/* index ribbon */}
      <span className="font-display absolute right-5 top-5 text-5xl font-black text-slate-100 transition-colors group-hover:text-brand-50">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className={cn(
          "relative grid h-14 w-14 place-items-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-110",
          isSaffron
            ? "bg-saffron-50 text-saffron-600 ring-saffron-100"
            : "bg-brand-50 text-brand-700 ring-brand-100",
        )}
      >
        <service.icon className="h-7 w-7" />
      </span>

      <h3 className="font-display relative mt-5 text-xl font-bold text-slate-900">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{service.desc}</p>

      <ul className="relative mt-5 grid grid-cols-2 gap-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
            <Check
              className={cn(
                "h-3.5 w-3.5 shrink-0",
                isSaffron ? "text-saffron-500" : "text-brand-600",
              )}
            />
            {f}
          </li>
        ))}
      </ul>

      <NavButton
        page="contact"
        className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-colors hover:text-saffron-600"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </NavButton>

      {/* hover accent bar */}
      <span
        className={cn(
          "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
          isSaffron ? "bg-saffron-500" : "bg-brand-600",
        )}
      />
    </article>
  );
}

/* ---------------- Industries (tabbed) ---------------- */
export function Industries() {
  const [active, setActive] = React.useState(INDUSTRIES[0].id);
  const current = INDUSTRIES.find((i) => i.id === active) ?? INDUSTRIES[0];

  return (
    <section
      id="industries"
      className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Deep expertise across{" "}
              <span className="text-brand-700">8 industry verticals</span>
            </>
          }
          description="Each vertical is led by a dedicated team that understands your category, compliance, and customer expectations — not a one-size-fits-all 3PL."
        />

        <div className="mt-12 lg:mt-14">
          {/* Tabs */}
          <div className="scrollbar-thin -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {INDUSTRIES.map((ind) => {
              const isActive = ind.id === active;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                    isActive
                      ? "border-brand-700 bg-brand-700 text-white shadow-md shadow-brand-700/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700",
                  )}
                >
                  <ind.icon className="h-4 w-4" />
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white shadow-sm">
            <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-12">
              <div className="lg:col-span-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white shadow-md shadow-brand-700/25">
                    <current.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                      {current.name}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {current.blurb}
                    </p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {current.offerings.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-saffron-50 text-saffron-600">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>

                <NavButton
                  page="contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-saffron-600"
                >
                  Talk to our {current.name} team
                  <ArrowUpRight className="h-4 w-4" />
                </NavButton>
              </div>

              {/* Metric */}
              <div className="lg:col-span-5">
                <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-center text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron-300">
                    Proven impact
                  </p>
                  <p className="font-display mt-3 text-6xl font-extrabold tracking-tight sm:text-7xl">
                    {current.metric.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{current.metric.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
