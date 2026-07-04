"use client";

import { PageHeader } from "./page-header";
import { Services } from "../sections-services";
import { Process } from "../sections-why-tech";
import { Container, SectionHeading, Reveal } from "../_shared";
import { TECH } from "@/lib/site-data";
import { Check } from "lucide-react";
import { CtaBand } from "../contact";

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        crumb="Services"
        title={<>End-to-end supply chain services, under one roof</>}
        description="From the first mile to the last, we run the operations, technology and analytics that move your goods across India — so you can focus on growing your business."
      />
      <Services />
      <Process />

      {/* Integrations band */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Plug-and-play integrations"
            title={
              <>
                Connects with the tools{" "}
                <span className="text-brand-700">your team already uses</span>
              </>
            }
            description="nuevoOS ships with API and EDI connectors for the leading ERPs, marketplaces and commerce platforms — go-live in weeks, not quarters."
          />
          <Reveal>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
              {TECH.integrations.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <Check className="h-3.5 w-3.5 text-brand-600" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
