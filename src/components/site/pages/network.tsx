"use client";

import { PageHeader } from "./page-header";
import { Network } from "../sections-why-tech";
import { CtaBand } from "../contact";

export function NetworkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pan-India Network"
        crumb="Network"
        title={<>Wherever your customers are, we already are</>}
        description="A hub-and-spoke network anchored by mega-fulfilment centres in Hyderabad and Bengaluru and a dense spoke network reaching every tier-2 and tier-3 town."
      />
      <Network />
      <CtaBand />
    </>
  );
}
