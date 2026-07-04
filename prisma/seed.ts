import { db } from "@/lib/db";

const openings = [
  {
    role: "Senior WMS Engineer",
    team: "Technology",
    location: "Bengaluru",
    type: "Full-time",
    experience: "5–8 yrs",
    description:
      "Architect and scale our nuevoOS WMS — slotting, wave-picking, cycle counting and ERP/EDI integrations.",
  },
  {
    role: "Warehouse Operations Manager",
    team: "Operations",
    location: "Hyderabad",
    type: "Full-time",
    experience: "8–12 yrs",
    description:
      "Own P&L of a 1Mn+ sq.ft mega-FC in Hyderabad — inbound, outbound, inventory accuracy and team of 120+.",
  },
  {
    role: "Supply Chain Consultant",
    team: "Consulting",
    location: "Hyderabad",
    type: "Full-time",
    experience: "4–7 yrs",
    description:
      "Run 2-week diagnostics: network design, cost-to-serve, S&OP and digital roadmaps for enterprise clients.",
  },
  {
    role: "Cold Chain Specialist",
    team: "Pharma Vertical",
    location: "Hyderabad",
    type: "Full-time",
    experience: "5–8 yrs",
    description:
      "Run GDP-compliant cold-chain operations — 2–8°C and –18°C storage, validated routes, data-logger audits.",
  },
  {
    role: "Fleet & Transport Manager",
    team: "Transportation",
    location: "Bengaluru",
    type: "Full-time",
    experience: "6–10 yrs",
    description:
      "Manage 3,500+ vehicle fleet utilisation, route optimisation, vendor SLAs and e-POD adoption.",
  },
  {
    role: "Data Analyst — Control Tower",
    team: "Analytics",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2–5 yrs",
    description:
      "Monitor 24×7 control tower dashboards, drive exception management and build predictive-ETA models.",
  },
  {
    role: "E-commerce Fulfilment Lead",
    team: "Operations",
    location: "Bengaluru",
    type: "Full-time",
    experience: "5–8 yrs",
    description:
      "Lead high-velocity D2C/marketplace fulfilment cells — same-day dispatch, returns and peak-season ops.",
  },
  {
    role: "Frontend Engineer (Customer Portal)",
    team: "Technology",
    location: "Bengaluru",
    type: "Full-time",
    experience: "3–6 yrs",
    description:
      "Build the nuevoOS customer portal & app — Next.js, React, real-time track-and-trace UI.",
  },
];

async function main() {
  // Clear existing job openings
  await db.jobOpening.deleteMany({});

  // Insert fresh set
  await db.jobOpening.createMany({
    data: openings.map((o) => ({ ...o, active: true })),
  });

  const count = await db.jobOpening.count();
  console.log(`Seeded ${count} job openings`);
}

main()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
