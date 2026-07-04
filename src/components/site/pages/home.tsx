"use client";

import { Hero } from "../hero";
import { ClientsMarquee, Stats, About } from "../sections-top";
import { Services, Industries } from "../sections-services";
import { WhyUs, Process } from "../sections-why-tech";
import { CaseStudies, Testimonials } from "../sections-proof";
import { CtaBand } from "../contact";
import { useSiteRouter } from "../router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Container } from "../_shared";

export function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <Stats />
      <Services />
      <Industries />
      <WhyUs />
      <CaseStudies />
      <Testimonials />
      <Process />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}

/* A compact about teaser that nudges users to the About page */
function AboutTeaser() {
  const { navigate } = useSiteRouter();
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-50 to-saffron-50 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Curious how Nuevo engineers supply chains since 2011?
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                From our Hyderabad HQ to our Bengaluru tech hub — meet the team, the milestones and the
                certifications that keep India&apos;s brands moving.
              </p>
            </div>
            <Button
              onClick={() => navigate("about")}
              size="lg"
              className="shrink-0 bg-brand-700 text-white shadow-lg shadow-brand-700/20 hover:bg-brand-800"
            >
              About Nuevo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
