"use client";

import * as React from "react";
import { SiteRouter, useSiteRouter, PageTransition } from "@/components/site/router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageLoader } from "@/components/site/page-loader";
import { HomePage } from "@/components/site/pages/home";
import { AboutPage } from "@/components/site/pages/about";
import { ServicesPage } from "@/components/site/pages/services";
import { IndustriesPage } from "@/components/site/pages/industries";
import { TechnologyPage } from "@/components/site/pages/technology";
import { NetworkPage } from "@/components/site/pages/network";
import { CareersPage } from "@/components/site/pages/careers";
import { InsightsPage } from "@/components/site/pages/insights";
import { ContactPage } from "@/components/site/pages/contact";
import type { PageKey } from "@/lib/site-data";

function CurrentPage({ page }: { page: PageKey }) {
  switch (page) {
    case "home":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "services":
      return <ServicesPage />;
    case "industries":
      return <IndustriesPage />;
    case "technology":
      return <TechnologyPage />;
    case "network":
      return <NetworkPage />;
    case "careers":
      return <CareersPage />;
    case "insights":
      return <InsightsPage />;
    case "contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

function Shell() {
  const { page } = useSiteRouter();
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageTransition pageKey={page}>
          <CurrentPage page={page} />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <SiteRouter>
      <PageLoader />
      <Shell />
    </SiteRouter>
  );
}
