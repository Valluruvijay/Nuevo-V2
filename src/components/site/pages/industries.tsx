"use client";

import { PageHeader } from "./page-header";
import { Industries } from "../sections-services";
import { CtaBand } from "../contact";

export function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        crumb="Industries"
        title={<>Deep expertise across 8 industry verticals</>}
        description="Each vertical is led by a dedicated team that understands your category, compliance and customer expectations — not a one-size-fits-all 3PL."
      />
      <Industries />
      <CtaBand />
    </>
  );
}
