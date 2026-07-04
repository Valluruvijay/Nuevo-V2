"use client";

import { PageHeader } from "./page-header";
import { About } from "../sections-top";
import { Sustainability, Leadership, Certifications } from "../sections-proof";
import { Process } from "../sections-why-tech";
import { CtaBand } from "../contact";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Nuevo"
        crumb="About"
        title={<>Engineering supply chains that keep India moving — since 2011</>}
        description="Founded in Hyderabad and expanded to Bengaluru, Nuevo Supply Chain Solutions is one of India's fastest-growing integrated 3PL and contract logistics providers — combining assets, technology and obsessive operations discipline."
      />
      <About />
      <Process />
      <Sustainability />
      <Leadership />
      <Certifications />
      <CtaBand />
    </>
  );
}
