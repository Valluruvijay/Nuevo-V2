"use client";

import { PageHeader } from "./page-header";
import { Technology } from "../sections-why-tech";
import { Container, Reveal, SectionHeading } from "../_shared";
import { TECH } from "@/lib/site-data";
import { Check } from "lucide-react";
import { CtaBand } from "../contact";

export function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow={TECH.eyebrow}
        crumb="Technology"
        title={TECH.title}
        description={TECH.body}
      />
      <Technology />

      {/* Integrations */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Integrations"
            title={
              <>
                One platform, <span className="text-brand-700">every system you run</span>
              </>
            }
            description="nuevoOS connects to your ERP, marketplaces and commerce stack out of the box — with custom EDI/API builds for anything else."
          />
          <Reveal>
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
              {TECH.integrations.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
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
