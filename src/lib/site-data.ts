import type { LucideIcon } from "lucide-react";
import {
  Warehouse, Truck, PackageCheck, Boxes, ClipboardList, ShieldCheck,
  ShoppingCart, Snowflake, Recycle, Network, Cpu, BarChart3,
  Headphones, Leaf, MapPin, Clock, IndianRupee, Users, Building2, Route,
  Smartphone, Factory, Pill, Shirt, Car, Laptop, Utensils,
  Package, Globe, BadgeCheck, Wrench, MessageSquare,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* BRAND                                                               */
/* ------------------------------------------------------------------ */
export const BRAND = {
  name: "Nuevo",
  full: "Nuevo Supply Chain Solutions",
  short: "NuevoSC",
  legal: "Nuevo Supply Chain Solutions Pvt. Ltd.",
  domain: "nuevosc.in",
  tagline: "Supply Chain Solutions",
  founded: 2011,
  cin: "U63030TG2011PTC072944",
};

/* ------------------------------------------------------------------ */
/* PAGES (SPA routing keys)                                            */
/* ------------------------------------------------------------------ */
export type PageKey =
  | "home" | "services" | "industries" | "technology"
  | "network" | "about" | "careers" | "insights" | "contact";

export const NAV_LINKS: { label: string; page: PageKey }[] = [
  { label: "Home", page: "home" },
  { label: "Services", page: "services" },
  { label: "Industries", page: "industries" },
  { label: "Technology", page: "technology" },
  { label: "About", page: "about" },
  { label: "Careers", page: "careers" },
  { label: "Contact", page: "contact" },
];

export const FOOTER_LINKS: { label: string; page: PageKey }[] = [
  { label: "About Us", page: "about" },
  { label: "Services", page: "services" },
  { label: "Industries", page: "industries" },
  { label: "Technology", page: "technology" },
  { label: "Network", page: "network" },
  { label: "Careers", page: "careers" },
  { label: "Insights", page: "insights" },
  { label: "Contact", page: "contact" },
];

export const TOP_BAR = {
  phone: "+91 40 7123 4500",
  phoneBlr: "+91 80 7123 4500",
  email: "hello@nuevosc.in",
  hours: "Mon–Sat · 9:00 AM – 7:00 PM IST",
  locations: "Head Office: Hyderabad · Regional Office: Bengaluru",
};

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
export const HERO = {
  badge: "Trusted by 400+ Indian & global brands",
  title: "Integrated Supply Chain & 3PL Solutions, built for India",
  subtitle:
    "From warehousing and contract logistics to transportation and e-commerce fulfilment — we engineer resilient, tech-driven supply chains that move your business across every Indian pin code, faster and leaner.",
  primaryCta: { label: "Get a Free Consultation", page: "contact" as PageKey },
  secondaryCta: { label: "Explore Services", page: "services" as PageKey },
  highlights: [
    { icon: MapPin, label: "8,000+ pin codes served" },
    { icon: Building2, label: "120+ warehouses pan-India" },
    { icon: Clock, label: "24×7 control tower" },
    { icon: ShieldCheck, label: "ISO 9001:2015 certified" },
  ],
};

/* ------------------------------------------------------------------ */
/* STATS                                                               */
/* ------------------------------------------------------------------ */
export const STATS = [
  { icon: Building2, value: 120, suffix: "+", label: "Warehouses across India", sub: "Multi-user & dedicated" },
  { icon: Boxes, value: 8.5, suffix: " Mn sq.ft", label: "Storage capacity", sub: "Across 28 states", decimals: 1 },
  { icon: MapPin, value: 8000, suffix: "+", label: "Pin codes served", sub: "Last-mile reach" },
  { icon: Truck, value: 3500, suffix: "+", label: "Fleet vehicles", sub: "Owned & partnered" },
  { icon: PackageCheck, value: 4.2, suffix: " Mn", label: "Orders fulfilled / month", sub: "Peak-ready", decimals: 1 },
  { icon: Users, value: 450, suffix: "+", label: "Supply-chain experts", sub: "Hyderabad · Bengaluru · beyond" },
];

/* ------------------------------------------------------------------ */
/* TRUSTED CLIENTS                                                     */
/* ------------------------------------------------------------------ */
export const CLIENTS = [
  "Reliance Retail", "Flipkart", "Tata Consumer", "Aditya Birla", "DMart",
  "Hindustan Unilever", "Nestlé India", "ITC Limited", "Asian Paints",
  "Bajaj Electricals", "boAt Lifestyle", "Mamaearth", "Philips India",
  "Pidilite", "Dabur India", "Godrej Consumer", "Patanjali", "Myntra",
];

/* ------------------------------------------------------------------ */
/* ABOUT                                                               */
/* ------------------------------------------------------------------ */
export const ABOUT = {
  eyebrow: "About Nuevo",
  title: "Engineering supply chains that keep India moving — since 2011",
  body:
    "Founded in Hyderabad in 2011 and expanded to Bengaluru, Nuevo Supply Chain Solutions Pvt. Ltd. is one of India's fastest-growing integrated 3PL and contract logistics providers. We combine deep domain expertise, a pan-India asset network and a proprietary technology stack to design, run and optimise supply chains for retail, e-commerce, FMCG, auto, pharma and industrial enterprises.",
  points: [
    { icon: BadgeCheck, title: "Asset-backed network", text: "Owned warehouses, MHEs and a managed fleet — control from dock to doorstep." },
    { icon: Cpu, title: "Technology-first", text: "In-house WMS, TMS & control tower with real-time visibility and analytics." },
    { icon: Leaf, title: "Sustainable by design", text: "Solar-powered warehouses, EV last-mile and packaging reduction targets." },
    { icon: Headphones, title: "Single point of accountability", text: "Dedicated client success managers and 24×7 operations support." },
  ],
  milestones: [
    { year: "2011", text: "Founded in Hyderabad with our first warehouse" },
    { year: "2014", text: "Expanded to Bengaluru; launched WMS v1" },
    { year: "2018", text: "Crossed 1 Mn sq.ft; e-commerce fulfilment live" },
    { year: "2021", text: "Control tower & TMS launched pan-India" },
    { year: "2024", text: "8.5 Mn sq.ft · 28 states · 8,000+ pin codes" },
  ],
};

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */
export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
  longDesc: string;
  accent?: "teal" | "saffron";
}

export const SERVICES: Service[] = [
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    desc: "Multi-user and dedicated warehousing with bonded & temperature-controlled zones, backed by a cloud WMS.",
    features: ["Bonded & FTWZ facilities", "Rack-supported design", "Pick-pack-ship", "Cross-docking"],
    longDesc:
      "Operate from 120+ strategically located warehouses across India — including our flagship mega-fulfilment centres in Hyderabad and Bengaluru. Choose multi-user shared space for flexibility or dedicated build-to-suit facilities for scale, all running on our cloud WMS with real-time inventory, cycle counting and EDI to your ERP.",
    accent: "teal",
  },
  {
    icon: Truck,
    title: "Transportation & Freight",
    desc: "Full-truck, part-truck, express and project cargo movement with GPS-tracked, GPS-validated fleet.",
    features: ["FTL / PTL / LTL", "Container & ODC", "GPS + geo-fencing", "Dedicated SPOC"],
    longDesc:
      "Move goods across 8,000+ pin codes with a managed fleet of 3,500+ vehicles. Full-truck, part-truck and express options, plus container and over-dimensional cargo handling. Every vehicle is GPS-tracked with geo-fenced alerts and electronic proof of delivery — your dispatch team always knows where every shipment is.",
    accent: "saffron",
  },
  {
    icon: PackageCheck,
    title: "Contract Logistics",
    desc: "End-to-end, customised logistics operating partnerships with committed SLAs and shared risk-reward.",
    features: ["Design → run → optimise", "SLA-backed", "Dedicated assets", "Quarterly business reviews"],
    longDesc:
      "Hand us the design, operation and continuous optimisation of your end-to-end logistics under a single SLA-backed contract. We bring dedicated assets, embedded teams and a quarterly business-review cadence with shared KPIs and risk-reward — so our wins are your wins.",
    accent: "teal",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Fulfilment",
    desc: "High-velocity fulfilment for marketplaces and D2C brands with same-day dispatch and returns processing.",
    features: ["Marketplace integration", "D2C & quick-commerce", "Returns & QC", "Same-day dispatch"],
    longDesc:
      "Power marketplace and D2C growth with high-velocity fulfilment cells designed for same-day dispatch and festive-season elasticity. Integrated with Amazon, Flipkart, Myntra, Shopify and more, with end-to-end returns triage, QC and re-fulfilment to protect your margins.",
    accent: "saffron",
  },
  {
    icon: ClipboardList,
    title: "Inventory Management",
    desc: "Demand-aware stocking, ABC/XYZ analysis, safety-stock optimisation and cycle counting.",
    features: ["ABC/XYZ analysis", "Cycle counting", "Slow-mover management", "Replenishment planning"],
    longDesc:
      "Keep the right stock in the right place at the right time. We run ABC/XYZ classification, demand-aware safety-stock optimisation, continuous cycle counting and automated replenishment — so you avoid both stock-outs and capital tied up in slow movers.",
    accent: "teal",
  },
  {
    icon: Snowflake,
    title: "Cold Chain & Pharma",
    desc: "Temperature-controlled storage and transport (2–8°C, –18°C) with GDP compliance and data loggers.",
    features: ["GDP compliant", "Temp-controlled fleet", "Data loggers", "Pharma validations"],
    longDesc:
      "Move temperature-sensitive cargo with confidence. Our GDP-compliant cold-chain network handles 2–8°C and –18°C storage and transport with calibrated data loggers, validated routes and full audit trails — trusted by vaccine manufacturers and hospital supply chains.",
    accent: "teal",
  },
  {
    icon: Recycle,
    title: "Reverse Logistics",
    desc: "Returns, refurbishment, recycling and e-waste disposition with audit-ready trails.",
    features: ["Returns triage", "Refurb & resale", "E-waste disposal", "RTO optimisation"],
    longDesc:
      "Turn returns from a cost centre into a recovered-value stream. We triage returns, run refurbishment and resale programmes, manage compliant e-waste disposition and optimise RTO flows — all with audit-ready digital trails.",
    accent: "saffron",
  },
  {
    icon: Wrench,
    title: "Value-Added Services",
    desc: "Kitting, bundling, packaging, labelling, assembly and pre-retail tasks inside the warehouse.",
    features: ["Kitting & bundling", "Labelling & MRP", "Sub-assembly", "Promo packs"],
    longDesc:
      "Get product shelf-, channel- and season-ready inside the warehouse. Our value-added services team handles kitting, bundling, MRP labelling, sub-assembly and promotional packaging — so goods arrive at the shelf ready to sell.",
    accent: "teal",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Consulting",
    desc: "Network design, S&OP, cost-to-serve analysis and digital transformation advisory.",
    features: ["Network design", "Cost-to-serve", "S&OP advisory", "Digital roadmap"],
    longDesc:
      "Before you outsource, optimise. Our consulting practice runs 2-week diagnostics covering network design, cost-to-serve, S&OP maturity and a digital transformation roadmap — giving you a clear, quantified path to a leaner supply chain.",
    accent: "saffron",
  },
];

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                          */
/* ------------------------------------------------------------------ */
export interface Industry {
  id: string;
  icon: LucideIcon;
  name: string;
  blurb: string;
  offerings: string[];
  longDesc: string;
  metric: { value: string; label: string };
}

export const INDUSTRIES: Industry[] = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    blurb: "Omnichannel fulfilment for marketplaces, D2C brands and large-format retail with peak-season elasticity.",
    offerings: ["Marketplace fulfilment", "D2C & quick-commerce", "Store replenishment", "Returns & RTO"],
    longDesc:
      "Omnichannel fulfilment for marketplaces, D2C brands and large-format retail. We handle festive-season spikes with elastic capacity, marketplace integrations and a returns engine that protects your margins.",
    metric: { value: "99.2%", label: "On-time dispatch" },
  },
  {
    id: "fmcg",
    icon: Package,
    name: "FMCG & Consumer Goods",
    blurb: "High-velocity distribution with primary, secondary and tertiary movement and sales-order integration.",
    offerings: ["Primary & secondary distribution", "SE/PSO integration", "Shelf-ready packaging", "DSD"],
    longDesc:
      "High-velocity distribution engineered for FMCG. Primary, secondary and tertiary movement integrated with your sales-order system, shelf-ready packaging and direct-store-delivery where it counts.",
    metric: { value: "32 hrs", label: "Avg. cycle time" },
  },
  {
    id: "auto",
    icon: Car,
    name: "Automotive & EV",
    blurb: "Inbound-to-line, sequenced deliveries, after-parts distribution and EV battery handling.",
    offerings: ["Inbound-to-line", "Sequential JIT", "Aftermarket parts", "EV battery logistics"],
    longDesc:
      "Keep lines moving with inbound-to-line and sequential JIT deliveries, plus aftermarket parts distribution and specialised EV battery handling — all with line-side accuracy that keeps plants running.",
    metric: { value: "99.9%", label: "Line-side accuracy" },
  },
  {
    id: "pharma",
    icon: Pill,
    name: "Pharma & Healthcare",
    blurb: "GDP-compliant cold chain for formulations, vaccines, devices and hospital supplies.",
    offerings: ["GDP-compliant storage", "2–8°C & –18°C transport", "Recall management", "Batch & expiry control"],
    longDesc:
      "GDP-compliant cold chain for formulations, vaccines, devices and hospital supplies. Calibrated data loggers, validated routes, batch and expiry control and a tested recall-management process.",
    metric: { value: "100%", label: "Temp integrity" },
  },
  {
    id: "electronics",
    icon: Laptop,
    name: "Electronics & Technology",
    blurb: "High-value, anti-static handling for CE, appliances and mobile devices with serial-level tracking.",
    offerings: ["Serial / IMEI tracking", "Anti-static zones", "Secure cages", "Installer dispatch"],
    longDesc:
      "High-value, anti-static handling for consumer electronics, appliances and mobile devices. Serial and IMEI-level tracking, secure cages and installer-dispatch for the last technical mile.",
    metric: { value: "<0.1%", label: "Shrinkage" },
  },
  {
    id: "industrial",
    icon: Factory,
    name: "Industrial & Manufacturing",
    blurb: "Vendor-managed inventory, inbound logistics and project cargo for heavy industry.",
    offerings: ["VMI hubs", "Inbound logistics", "Project cargo", "MRO management"],
    longDesc:
      "Vendor-managed inventory hubs, inbound logistics and project cargo for heavy industry. We keep your lines fed and your MRO organised, with project-cargo expertise for plant setups and shutdowns.",
    metric: { value: "15%", label: "Inventory reduction" },
  },
  {
    id: "food",
    icon: Utensils,
    name: "Food & Beverage",
    blurb: "Cold and ambient storage for packaged foods, perishables and QSR supply chains.",
    offerings: ["Cold storage", "FIFO / FEFO", "QSR distribution", "Compliance & FSSAI"],
    longDesc:
      "Cold and ambient storage for packaged foods, perishables and QSR supply chains. FIFO/FEFO discipline, FSSAI-compliant processes and time-window-driven QSR distribution that never misses a slot.",
    metric: { value: "0", label: "Cold-chain breaks" },
  },
  {
    id: "textile",
    icon: Shirt,
    name: "Textile & Apparel",
    blurb: "Garment-on-hanger, pre-retail finishing and seasonal distribution for apparel brands.",
    offerings: ["GOH handling", "Pre-retail finishing", "Seasonal push", "Mystery-box fulfilment"],
    longDesc:
      "Garment-on-hanger handling, pre-retail finishing and seasonal push distribution for apparel brands. We get garments to-shelf ready and manage the seasonal volume swings that define apparel logistics.",
    metric: { value: "24 hrs", label: "To-shelf ready" },
  },
];

/* ------------------------------------------------------------------ */
/* WHY US                                                              */
/* ------------------------------------------------------------------ */
export const WHY_US = [
  { icon: Network, title: "Pan-India reach", text: "28 states, 8,000+ pin codes and last-mile partners in every district." },
  { icon: Cpu, title: "Proprietary tech", text: "WMS, TMS, OMS and control tower — fully integrated, real-time." },
  { icon: ShieldCheck, title: "Compliance & risk", text: "ISO 9001, GDP, FSSAI, AEO and CTPAT-aligned processes." },
  { icon: Clock, title: "24×7 operations", text: "Round-the-clock control tower and hub operations for time-critical flows." },
  { icon: IndianRupee, title: "Cost-to-serve focus", text: "Continuous optimisation that reduces your landed cost, not just your rate." },
  { icon: Leaf, title: "Sustainable logistics", text: "Solar warehouses, EV last-mile and a science-based emissions reduction target." },
];

/* ------------------------------------------------------------------ */
/* TECHNOLOGY                                                          */
/* ------------------------------------------------------------------ */
export const TECH = {
  eyebrow: "Technology & Innovation",
  title: "One control tower. Total visibility. End-to-end control.",
  body:
    "Our proprietary suite — nuevoOS — unifies WMS, TMS, OMS and analytics so you see every SKU, every vehicle and every order in one place, in real time.",
  features: [
    { icon: Boxes, title: "nuevoOS WMS", text: "Slotting, wave-picking, cycle counting and EDI integration with your ERP." },
    { icon: Route, title: "nuevoOS TMS", text: "Route optimisation, freight procurement, e-POD and freight audit." },
    { icon: BarChart3, title: "Control Tower", text: "Exception management, predictive ETA and proactive intervention." },
    { icon: Smartphone, title: "Customer Portal & App", text: "Live inventory, orders, track-and-trace and reports on the go." },
    { icon: Globe, title: "API & EDI", text: "Plug-and-play connectors for SAP, Oracle, Shopify, Amazon and more." },
    { icon: MessageSquare, title: "AI forecasting", text: "Demand sensing and inventory positioning driven by machine learning." },
  ],
  integrations: ["SAP", "Oracle", "Shopify", "Magento", "Amazon", "Flipkart", "Myntra", "Zoho", "Tally", "WhatsApp Business"],
};

/* ------------------------------------------------------------------ */
/* NETWORK                                                             */
/* ------------------------------------------------------------------ */
export const NETWORK = {
  eyebrow: "Pan-India Network",
  title: "Wherever your customers are, we already are.",
  body:
    "A hub-and-spoke network anchored by mega-fulfilment centres in Hyderabad and Bengaluru and a dense spoke network reaching every tier-2 and tier-3 town.",
  hubs: [
    { city: "Hyderabad (Mehdipatnam)", type: "Mega FC · HQ", area: "1.3 Mn sq.ft" },
    { city: "Bengaluru (Hoskote)", type: "Mega FC", area: "1.2 Mn sq.ft" },
    { city: "Mumbai (Bhiwandi)", type: "Mega FC", area: "1.4 Mn sq.ft" },
    { city: "Delhi NCR (Bilaspur)", type: "Mega FC", area: "1.1 Mn sq.ft" },
    { city: "Chennai", type: "Regional Hub", area: "0.7 Mn sq.ft" },
    { city: "Kolkata", type: "Regional Hub", area: "0.6 Mn sq.ft" },
    { city: "Pune", type: "Regional Hub", area: "0.5 Mn sq.ft" },
    { city: "Vizag", type: "Spoke Hub", area: "0.2 Mn sq.ft" },
  ],
  regions: [
    { name: "South", states: "Telangana, Karnataka, TN, Kerala, AP", hubs: 34 },
    { name: "North", states: "Delhi, UP, Punjab, Haryana, Rajasthan", hubs: 24 },
    { name: "West", states: "Maharashtra, Gujarat, Goa, MP", hubs: 28 },
    { name: "East & NE", states: "WB, Odisha, Assam, NE states", hubs: 18 },
  ],
};

/* ------------------------------------------------------------------ */
/* PROCESS                                                             */
/* ------------------------------------------------------------------ */
export const PROCESS = [
  { step: "01", title: "Discover & Diagnose", text: "We map your current supply chain, cost-to-serve and pain points in a 2-week consulting sprint." },
  { step: "02", title: "Design & Engineer", text: "Network design, SOPs, tech integration plan and SLA framework tailored to your goals." },
  { step: "03", title: "Deploy & Integrate", text: "Warehouse setup, fleet onboarding, WMS/TMS integration and team training — go-live in weeks." },
  { step: "04", title: "Run & Optimise", text: "24×7 operations, control-tower monitoring and quarterly continuous-improvement reviews." },
];

/* ------------------------------------------------------------------ */
/* SUSTAINABILITY                                                      */
/* ------------------------------------------------------------------ */
export const SUSTAINABILITY = [
  { icon: Leaf, title: "Solar-powered warehouses", text: "4.2 MW of rooftop solar across our mega-FCs, cutting grid dependency by 38%." },
  { icon: Truck, title: "EV last-mile fleet", text: "450+ electric 3-wheelers and cargo vans across 12 cities, scaling to 1,500 by 2026." },
  { icon: Recycle, title: "Packaging reduction", text: "Right-sized cartons, reusable totes and a target to cut single-use plastic by 60%." },
  { icon: BarChart3, title: "Carbon reporting", text: "Scope 1–3 emissions tracking per shipment, shared with every client quarterly." },
];

/* ------------------------------------------------------------------ */
/* CASE STUDIES                                                        */
/* ------------------------------------------------------------------ */
export interface CaseStudy {
  industry: string;
  client: string;
  title: string;
  summary: string;
  metrics: { value: string; label: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "E-commerce",
    client: "Leading D2C beauty brand",
    title: "Cut dispatch TAT by 63% for a festive-season surge",
    summary:
      "Stood up a dedicated fulfilment cell in our Bengaluru mega-FC with wave-picking and marketplace integration to handle a 4.8× festive spike without breaching SLAs.",
    metrics: [
      { value: "63%", label: "Lower dispatch TAT" },
      { value: "4.8×", label: "Peak volume handled" },
      { value: "99.4%", label: "Order accuracy" },
    ],
  },
  {
    industry: "FMCG",
    client: "Top-3 packaged foods major",
    title: "Redistributed primary network to save ₹14 Cr/yr",
    summary:
      "Redesigned the primary distribution network across 4 zones, consolidating 22 hubs into 8 and optimising vehicle utilisation — all without dropping service levels.",
    metrics: [
      { value: "₹14 Cr", label: "Annual savings" },
      { value: "−18%", label: "Freight cost / case" },
      { value: "32 hrs", label: "Avg. cycle time" },
    ],
  },
  {
    industry: "Pharma",
    client: "Global vaccines manufacturer",
    title: "GDP-grade cold chain with 100% temperature integrity",
    summary:
      "Deployed 2–8°C storage at our Hyderabad hub and a temp-controlled fleet with data loggers and geo-fenced routes for last-mile vaccine delivery across 6 states.",
    metrics: [
      { value: "100%", label: "Temp integrity" },
      { value: "6", label: "States covered" },
      { value: "0", label: "Cold-chain breaks" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS = [
  {
    quote:
      "Nuevo feels like an extension of our own team. Their control tower flagged a hub-level risk 18 hours before it could hurt our SLAs — that's the kind of partnership we needed.",
    name: "Rohit Menon",
    role: "VP Supply Chain",
    company: "Leading beauty & personal care D2C",
    initials: "RM",
  },
  {
    quote:
      "We moved from 5 fragmented 3PLs to a single contract logistics partner. Inventory accuracy moved from 96.1% to 99.6% and our cost-to-serve dropped by a fifth in the first year.",
    name: "Anjali Deshpande",
    role: "Head of Logistics",
    company: "FMCG major",
    initials: "AD",
  },
  {
    quote:
      "Their cold-chain discipline is best-in-class. Real-time data loggers, geo-fenced routes and zero temperature excursions across 14 months of vaccine distribution from Hyderabad.",
    name: "Dr. Senthil Kumar",
    role: "Director, Distribution",
    company: "Pharma & vaccines",
    initials: "SK",
  },
  {
    quote:
      "The technology stack is genuinely differentiated. Our planners live in the customer portal — every shipment, every SKU, every exception, in one view.",
    name: "Pooja Agarwal",
    role: "Head of E-commerce",
    company: "Consumer electronics brand",
    initials: "PA",
  },
];

/* ------------------------------------------------------------------ */
/* LEADERSHIP                                                          */
/* ------------------------------------------------------------------ */
export const LEADERSHIP = [
  { name: "Vikram Reddy", role: "Co-founder & CEO", initials: "VR", bio: "22 yrs in logistics. Ex-DHL, ex-Blue Dart. Built 3PL networks across APAC. Founded Nuevo in Hyderabad." },
  { name: "Meera Nair", role: "Co-founder & COO", initials: "MN", bio: "18 yrs in supply chain ops. Scaled warehousing from 0.3 to 8.5 Mn sq.ft across India." },
  { name: "Arjun Kapoor", role: "Chief Technology Officer", initials: "AK", bio: "Built nuevoOS WMS/TMS. Ex-Flipkart, ex-Microsoft. Leads our Bengaluru tech hub." },
  { name: "Sneha Reddy", role: "Chief Commercial Officer", initials: "SR", bio: "16 yrs in B2B sales. Leads industry verticals & key accounts from Hyderabad." },
  { name: "Rajat Banerjee", role: "Head of Cold Chain & Pharma", initials: "RB", bio: "GDP & cold-chain specialist. Ex-World Health Organisation partner network." },
  { name: "Fatima Sheikh", role: "Head of Sustainability", initials: "FS", bio: "Drives the net-zero roadmap, EV fleet and circular packaging programmes." },
];

/* ------------------------------------------------------------------ */
/* CERTIFICATIONS & AWARDS                                             */
/* ------------------------------------------------------------------ */
export const CERTIFICATIONS = [
  { code: "ISO 9001:2015", label: "Quality Management" },
  { code: "ISO 14001:2015", label: "Environmental" },
  { code: "ISO 27001", label: "Information Security" },
  { code: "GDP", label: "Good Distribution Practice" },
  { code: "FSSAI", label: "Food Safety" },
  { code: "AEO T2", label: "Authorized Economic Operator" },
  { code: "CTPAT", label: "Supply-chain Security" },
  { code: "Great Place to Work", label: "Certified 2024" },
];

export const AWARDS = [
  { year: "2024", title: "3PL Provider of the Year", org: "Indian Supply Chain Awards" },
  { year: "2024", title: "Best Warehouse Automation", org: "Logistics Excellence Awards" },
  { year: "2023", title: "Sustainable Logistics Initiative", org: "Green Supply Chain Forum" },
  { year: "2023", title: "Top 10 Cold Chain Companies", org: "Pharma Logistics Review" },
  { year: "2022", title: "E-commerce Fulfilment Innovator", org: "Retail Tech India" },
];

/* ------------------------------------------------------------------ */
/* CAREERS                                                             */
/* ------------------------------------------------------------------ */
export const CAREERS = {
  eyebrow: "Careers",
  title: "Build the supply chain of India with us",
  body:
    "We're 450+ supply-chain nerds, engineers and operators obsessed with moving things better. Headquartered in Hyderabad with a thriving Bengaluru office — if you love solving hard, real-world problems at scale, you'll feel at home.",
  perks: [
    { icon: IndianRupee, title: "Market-leading pay", text: "Competitive compensation plus performance bonuses and ESOPs." },
    { icon: BadgeCheck, title: "Learn & grow", text: "Sponsored certifications, internal mobility and a clear career track." },
    { icon: Leaf, title: "Purpose-led work", text: "Build sustainable logistics that millions of Indians rely on." },
    { icon: Users, title: "Inclusive culture", text: "Great Place to Work certified, with 38% women in operations." },
  ],
};

/* ------------------------------------------------------------------ */
/* INSIGHTS                                                            */
/* ------------------------------------------------------------------ */
export interface Insight {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
}

export const INSIGHTS: Insight[] = [
  {
    category: "Strategy",
    title: "Designing an India-ready supply chain for quick-commerce",
    excerpt: "Why hyperlocal fulfilment needs a fundamentally different network design — and how to fund it.",
    date: "Mar 2025",
    read: "6 min read",
  },
  {
    category: "Technology",
    title: "How AI is reshaping demand sensing in Indian retail",
    excerpt: "From festival spikes to monsoon dips — ML models that forecast 4 weeks out at pin-code level.",
    date: "Feb 2025",
    read: "8 min read",
  },
  {
    category: "Sustainability",
    title: "The EV last-mile playbook for Indian 3PLs",
    excerpt: "TCO economics, charging swaps and where EVs already beat diesel in 2025.",
    date: "Jan 2025",
    read: "5 min read",
  },
  {
    category: "Operations",
    title: "Running a 24×7 control tower: lessons from our Hyderabad hub",
    excerpt: "What it really takes to keep 3,400+ shipments monitored every single night.",
    date: "Dec 2024",
    read: "7 min read",
  },
  {
    category: "Pharma",
    title: "GDP compliance for Indian cold-chain: a practical checklist",
    excerpt: "The 12 controls that separate a compliant cold chain from a costly one.",
    date: "Nov 2024",
    read: "6 min read",
  },
  {
    category: "Network",
    title: "Why we chose Hoskote for our second mega-FC",
    excerpt: "Site selection, labour catchment and the maths of south-India distribution.",
    date: "Oct 2024",
    read: "5 min read",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const FAQS = [
  {
    q: "What does 3PL mean and how is it different from contract logistics?",
    a: "3PL (third-party logistics) covers outsourced services like warehousing and transportation. Contract logistics is a deeper, longer-term partnership where we design, run and optimise your end-to-end supply chain under committed SLAs — often with dedicated assets and shared KPIs.",
  },
  {
    q: "Where are your offices and warehouses?",
    a: "Our head office and flagship mega-fulfilment centre are in Hyderabad, with a regional office and second mega-FC in Bengaluru. We operate 120+ warehouses across 28 states and serve 8,000+ pin codes nationwide.",
  },
  {
    q: "How quickly can you go live in a new city?",
    a: "For cities where we already have a hub, we can onboard inventory in 2–3 weeks. Greenfield dedicated facilities typically take 10–14 weeks depending on size, fit-out and integrations.",
  },
  {
    q: "Do you handle temperature-sensitive and pharma shipments?",
    a: "Yes. We operate GDP-compliant cold-chain storage at 2–8°C and –18°C with data loggers, validated routes and full audit trails — serving vaccines, formulations and hospital supplies.",
  },
  {
    q: "Can you integrate with our ERP and marketplaces?",
    a: "Absolutely. nuevoOS ships with API and EDI connectors for SAP, Oracle, Shopify, Magento, Amazon, Flipkart and more. Custom integrations are typically delivered in 3–6 weeks.",
  },
  {
    q: "How do you price your services?",
    a: "Most engagements are structured as a transparent cost-to-serve — per-pallet storage, per-order fulfilment, per-kg-km transport — with shared savings on continuous improvement. We share a detailed proposal after a 2-week diagnostic.",
  },
];

/* ------------------------------------------------------------------ */
/* CONTACT / OFFICES                                                   */
/* ------------------------------------------------------------------ */
export const OFFICES = [
  {
    city: "Hyderabad (Head Office)",
    address: "Plot 14, Meenakshi Tech Park, Financial District, Gachibowli, Hyderabad, Telangana 500032",
    phone: "+91 40 7123 4500",
    email: "hyderabad@nuevosc.in",
    tag: "HQ",
  },
  {
    city: "Bengaluru (Regional Office)",
    address: "Tower B, Prestige Tech Park, Marathahalli–Sarjapur Ring Road, Bengaluru, Karnataka 560103",
    phone: "+91 80 7123 4500",
    email: "bengaluru@nuevosc.in",
    tag: "Regional",
  },
];

export const CONTACT_REASONS = [
  "Request a proposal",
  "Schedule a warehouse visit",
  "Partner with us (carrier / vendor)",
  "Media & press",
  "Careers",
  "General enquiry",
];
