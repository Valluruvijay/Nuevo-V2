"use client";

import { PageHeader } from "./page-header";
import { Insights } from "../sections-engage";
import { CtaBand } from "../contact";

export function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        crumb="Insights"
        title={<>Ideas & perspectives from our supply-chain experts</>}
        description="Strategy, technology, sustainability and operations — practical thinking for Indian supply-chain leaders, from the people running them every day."
      />
      <Insights showViewAll={false} />
      <CtaBand />
    </>
  );
}
