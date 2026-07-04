"use client";

import { PageHeader } from "./page-header";
import { Contact } from "../contact";
import { FAQ } from "../sections-engage";

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        crumb="Contact"
        title={<>Let&apos;s talk about your supply chain</>}
        description="Tell us where it hurts — distribution costs, SLA misses, peak-season chaos — and we'll come back with a point of view. Our team in Hyderabad and Bengaluru is ready to help."
      />
      <Contact showHeading={false} />
      <FAQ />
    </>
  );
}
