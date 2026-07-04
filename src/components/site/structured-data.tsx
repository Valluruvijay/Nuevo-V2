import { BRAND, TOP_BAR, OFFICES } from "@/lib/site-data";

/**
 * JSON-LD structured data for SEO — helps Google understand the organization
 * and show rich results (LocalBusiness for Hyderabad HQ + Bengaluru office).
 */
export function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.full,
    legalName: BRAND.legal,
    alternateName: `${BRAND.name}SC`,
    url: "https://nuevosc.in",
    logo: "https://nuevosc.in/favicon.svg",
    description:
      "Nuevo Supply Chain Solutions is a leading Indian integrated logistics & 3PL company delivering warehousing, contract logistics, transportation and e-commerce fulfilment across 28 states and 8,000+ pin codes.",
    foundingDate: String(BRAND.founded),
    foundingLocation: "Hyderabad, India",
    email: TOP_BAR.email,
    telephone: TOP_BAR.phone,
    areaServed: "IN",
    knowsAbout: [
      "3PL", "Warehousing", "Contract Logistics", "Transportation",
      "E-commerce Fulfilment", "Cold Chain", "Supply Chain Consulting",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 14, Meenakshi Tech Park, Financial District, Gachibowli",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
  };

  // LocalBusiness nodes for each office (helps local/Maps ranking)
  const locals = OFFICES.map((o, i) => ({
    "@context": "https://schema.org",
    "@type": i === 0 ? "Corporation" : "LocalBusiness",
    name: `${BRAND.full} — ${o.city}`,
    parentOrganization: { "@type": "Organization", name: BRAND.full },
    telephone: o.phone,
    email: o.email,
    url: "https://nuevosc.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: o.address.split(",")[0],
      addressLocality: o.city.split(" (")[0],
      addressCountry: "IN",
    },
  }));

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.full,
    url: "https://nuevosc.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nuevosc.in/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      {locals.map((l, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(l) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
