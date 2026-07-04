"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Reveal, SectionHeading } from "./_shared";
import { INSIGHTS, FAQS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { NavButton, useSiteRouter } from "./router";

/* ---------------- Insights ---------------- */
export function Insights({ limit, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const { navigate } = useSiteRouter();
  const posts = limit ? INSIGHTS.slice(0, limit) : INSIGHTS;
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Ideas &amp; perspectives from our{" "}
                <span className="text-brand-700">supply-chain experts</span>
              </>
            }
            align="left"
            className="max-w-2xl"
          />
          {showViewAll && (
            <Reveal>
              <Button
                onClick={() => navigate("insights")}
                variant="outline"
                className="border-brand-200 text-brand-700 hover:bg-brand-50 hover:text-brand-800"
              >
                View all articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i % 3}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-950/5">
                {/* Visual header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-700 to-brand-950">
                  <div className="absolute inset-0 bg-grid-dark opacity-30" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-300 ring-1 ring-white/15 backdrop-blur">
                      {post.category}
                    </span>
                    <span className="font-display text-5xl font-black text-white/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>{post.read}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Questions, <span className="text-brand-700">answered</span>
                </>
              }
              description="Everything you need to know before partnering with us. Can't find your question? Our team is one message away."
              align="left"
            />
            <Reveal delay={2}>
              <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <p className="font-display text-base font-bold text-brand-900">
                  Still have questions?
                </p>
                <p className="mt-1.5 text-sm text-slate-600">
                  Talk to a supply-chain advisor — no obligation, no jargon.
                </p>
                <NavButton
                  page="contact"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-brand-700 px-5 text-sm font-semibold text-white hover:bg-brand-800"
                >
                  Talk to an expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="overflow-hidden rounded-2xl border border-slate-100 bg-white px-5 shadow-sm data-[state=open]:border-brand-200 data-[state=open]:shadow-md"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-slate-900 hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
