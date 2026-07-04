"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Container, Reveal } from "../_shared";
import { useSiteRouter } from "../router";
import { BRAND, type PageKey } from "@/lib/site-data";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  crumb: string;
}) {
  const { navigate } = useSiteRouter();
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-28 pb-12 text-white sm:pt-32 lg:pt-36 lg:pb-16">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <button onClick={() => navigate("home")} className="hover:text-saffron-300">
              {BRAND.name}SC
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-saffron-300">{crumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={1}>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-saffron-300 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={2}>
          <h1 className="font-display mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={3}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 60" className="h-10 w-full sm:h-12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 L0,30 C240,8 480,8 720,22 C960,36 1200,52 1440,28 L1440,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

export type { PageKey };
