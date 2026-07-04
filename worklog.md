# Worklog — Bharat Supply Chain Solutions (Indian 3PL/Logistics Website)

Project: Rebuild the uploaded "Nueva Solutions" design into a comprehensive, highly-responsive **Indian supply chain company** website (reference: apollosupplychain.com content scope).

Design system:
- Fonts: Sora (headings) + Inter (body) via next/font/google
- Palette: Teal primary (teal-700/900 / #0f766e/#134e4a), Saffron-Amber accent (#f59e0b / #ea580c), Slate neutrals, white bg
- Tech: Next.js 16 App Router, Tailwind v4, shadcn/ui, lucide-react, framer-motion
- Layout: min-h-screen flex flex-col; footer mt-auto (sticky bottom rule)
- Single route "/" only; section-based single page with smooth-scroll nav + mobile drawer

---
Task ID: 1
Agent: main
Task: Set up design system (globals.css, layout metadata, fonts, color tokens, content data file, shared helpers)

Work Log:
- Will update after writing files.

Stage Summary:
- (pending)

---
Task ID: 1-10
Agent: main (full build)
Task: Build a comprehensive, highly-responsive Indian supply chain company website (reference: apollosupplychain.com content scope) using the uploaded Nueva Solutions design as a quality baseline.

Work Log:
- Researched Apollo Supply Chain (Indian integrated 3PL/logistics) via web_search to scope content.
- Generated 4 AI images: hero-warehouse, network-fleet, technology-control, about-campus (z-ai image CLI, 1344x768).
- Designed brand system: teal (#0f766e) + saffron (#f97316) Indian palette, Sora+Inter fonts, custom CSS (marquee, float, grid bg, gradient text, card-lift).
- Created content data file (src/lib/site-data.ts): nav, hero, 6 stats, 18 clients, about+milestones, 9 services, 8 industries, 6 why-us, 6 tech features, network(8 hubs+4 regions), 4-step process, 4 sustainability, 3 case studies, 4 testimonials, 6 leadership, 8 certifications, 5 awards, careers(4 perks+6 openings), 3 insights, 6 FAQs, 4 offices.
- Built shared UI helpers (_shared.tsx): Container, Reveal (framer-motion scroll), SectionHeading, CountUp.
- Built 9 component files: header (topbar+sticky nav+mobile Sheet drawer+scrollspy), hero, sections-top (clients marquee, stats, about), sections-services (9-service grid + tabbed industries), sections-why-tech (why-us, technology, network, process), sections-proof (sustainability, case studies, testimonials, leadership, certifications+awards), sections-engage (careers, insights, FAQ accordion), contact (CTA band + form + offices), footer (newsletter + 4-col + social + certs + bottom bar).
- Created POST /api/contact route (validates + logs enquiry, returns JSON).
- Composed page.tsx with min-h-screen flex flex-col + main flex-1 + footer mt-auto (sticky-bottom rule).
- Lint: 0 errors, 0 warnings.

Verification (Agent Browser):
- Page loads 200, no console/runtime errors.
- All sections render (hero, clients, stats, about, services x9, industries x8, why-us, technology, network, process, sustainability, case studies, testimonials, leadership, certifications, careers, insights, FAQ, CTA, contact, footer).
- Industries tabs switch correctly (tested E-commerce -> Automotive).
- Contact form submits end-to-end: POST /api/contact 200, success state "Message received!" shown, toast fired, enquiry logged server-side.
- Mobile menu drawer opens with all nav links + contact info.
- Mobile (390px) layout verified clean by VLM (no overflow/cramped text).
- Desktop full-page verified clean by VLM (no layout problems).
- Fixed one minor hero floating-badge overlap (moved rating badge to top-right, ISO badge to bottom-left).
- Footer present at bottom (sticky-bottom layout confirmed).

Stage Summary:
- Delivered a complete, production-ready Indian 3PL/supply chain marketing site on "/" with 22 content sections, full mobile-first responsiveness, animations, working contact form + API, and zero lint errors.
- Brand: "Bharat Supply Chain Solutions" (fictional Indian integrated logistics company), teal+saffron palette, Sora/Inter fonts.

---
Task ID: 2
Agent: full-stack-developer
Task: Build the backend API routes and seed the database (contact, subscribe, careers, careers/apply + seed 8 job openings).

Work Log:
- Read worklog.md, prisma/schema.prisma (4 models: Enquiry, Subscriber, JobOpening, JobApplication), src/lib/db.ts (PrismaClient singleton), existing /api/contact/route.ts, package.json, tsconfig.json (@/* → ./src/*).
- Created prisma/seed.ts: imports `db` from "@/lib/db" (alias resolves fine under bun), clears JobOpening rows via deleteMany, then createMany of 8 active openings (Senior WMS Engineer, Warehouse Operations Manager, Supply Chain Consultant, Cold Chain Specialist, Fleet & Transport Manager, Data Analyst — Control Tower, E-commerce Fulfilment Lead, Frontend Engineer (Customer Portal)). Prints "Seeded N job openings" then disconnects.
- Added "db:seed": "bun prisma/seed.ts" to package.json scripts (all existing scripts preserved).
- Ran the seed via `bun prisma/seed.ts` → output: "Seeded 8 job openings".
- Replaced /api/contact/route.ts: POST handler validates non-empty firstName, email, reason, message (422 with field list on failure), console.logs the enquiry, then db.enquiry.create({ data }) and returns { ok:true, id } (200). DB error → 500.
- Created /api/subscribe/route.ts: POST validates email via basic regex (/^[^\s@]+@[^\s@]+\.[^\s@]+$/), db.subscriber.upsert({ where:{email}, create:{email}, update:{} }) — duplicate (P2002) and existing rows both return { ok:true }. Invalid email → 422 { ok:false, error:"Invalid email" }.
- Created /api/careers/route.ts: GET returns { openings:[{ id, role, team, location, type, experience, description }] } using db.jobOpening.findMany with where:{active:true}, orderBy:{createdAt:"desc"}, and explicit select of the 7 fields.
- Created /api/careers/apply/route.ts: POST parses { jobId, name, email, phone, resumeLink, coverNote }, validates non-empty jobId/name/email (422), db.jobApplication.create with trimmed strings + null coercion of optional fields, returns { ok:true, id } (200). DB error → 500.
- All handlers use `export async function POST/GET(request: Request)`, `import { NextResponse } from "next/server"`, `import { db } from "@/lib/db"`, try/catch around DB calls.
- Ran `bun run lint` → 0 errors, 0 warnings.

Stage Summary:
- 1 seed script + 4 API routes delivered, all DB-backed with proper validation and error handling.
- SQLite DB (db/custom.db) now contains 8 active job openings; schema untouched.
- Seed verified: "Seeded 8 job openings". Lint clean.

---
Task ID: SEO + Animation Polish
Agent: main
Task: (1) Enhance animations/styling to match apollosupplychain.com reference polish, (2) Add full SEO foundation.

Work Log:
- Researched Apollo Supply Chain reference site (screenshots + VLM analysis) to extract its design language: dark hero, dotted texture in stats, full-width CTA banners, icon-led cards, staggered reveals, image zoom, premium whitespace.
- Enhanced _shared.tsx with new animation primitives: StaggerGroup/StaggerItem, ScaleIn, Parallax (useScroll/useTransform).
- Enhanced globals.css with keyframes/utilities: ken-burns (slow bg zoom), blob-morph (animated hero glows), img-zoom (image zoom-on-hover), text-gradient-animate, link-underline, shimmer.
- Rewrote Hero: ken-burns background, animated blob glows, Apollo-style animated service tags (3PL/Warehousing/Transportation/E-comm), parallax on the control-tower card, gradient-animated headline, hover micro-interactions.
- Stats section: added Apollo-style dotted texture overlay + staggered reveals.
- Added img-zoom hover to About + Technology images; renamed alt text to Nuevo.
- Converted Services, Case Studies, Leadership grids to staggered reveals; extracted CaseCard component.
- SEO foundation:
  - Created structured-data.tsx: Organization + 2 LocalBusiness (Hyderabad HQ + Bengaluru) + WebSite JSON-LD (4 scripts injected).
  - Created src/app/sitemap.ts (9 routes incl. hash routes) → /sitemap.xml serves 200.
  - Created src/app/robots.ts → /robots.txt serves 200 (removed conflicting static public/robots.txt).
  - Updated layout.tsx metadata: metadataBase, canonical URL, OG/Twitter images, robots index directives, StructuredData injected.
- Lint: 0 errors, 0 warnings.

Verification (Agent Browser):
- Page loads 200, no console/runtime errors.
- /robots.txt → 200 (dynamic), /sitemap.xml → 200.
- 4 JSON-LD scripts present (Organization + 2 LocalBusiness + WebSite).
- canonical link = https://nuevosc.in/.
- SPA navigation still works (tested Home → About → #/about).
- VLM comparison: Nuevo now "comparably polished/premium to Apollo", animations/styling/layout "on par" with modern flair added.
- VLM full-page layout check: "Clean".

Stage Summary:
- Nuevo site now matches Apollo reference polish (ken-burns hero, blob glows, staggered reveals, image zoom, dotted stats texture, animated service tags, parallax).
- Full SEO foundation live: sitemap.xml, robots.txt, 4 JSON-LD structured-data blocks (Org + LocalBusiness for both offices + WebSite), canonical URLs, OG/Twitter images, robots index directives. Ready for deployment to a real domain + Google Search Console submission.

---
Task ID: Reference-match v2 (video bg + loader + ambient motion)
Agent: main
Task: Carefully verify apollosupplychain.com's real background animations + page-loading style and implement faithfully.

Work Log:
- Deep-inspected Apollo's live DOM: confirmed it is WordPress+Elementor (no canvas/WebGL, no custom JS anim framework). Real motion = Elementor CSS: fadeIn/slideInUp (translateY 20px->0), scroll reveals, parallax, card hover-lift, and CRUCIALLY a looping background VIDEO in the hero (Pexels logistics video, autoPlay/muted/loop, dark scrim, white 65px/600 heading overlay).
- Downloaded Apollo's hero video (https://www.pexels.com/download/video/29470941/) → /public/hero-bg.mp4 (20MB MP4, valid).
- Built src/components/site/page-loader.tsx: full-screen branded loader (dual counter-rotating rings, NuevoSC mark, "Loading supply chain…"), fades out on window load (min 600ms, safety 3500ms cap).
- Built src/components/site/particles.tsx: ambient floating-particles layer (randomised size/position/duration/opacity, drift-up keyframe, glow shadow).
- Added CSS keyframes to globals.css: animate-mesh (3-stop radial gradient mesh that shifts), animate-drift (particles), loader-spin, [data-reveal] progressive-enhancement.
- Rewrote Hero background: replaced static ken-burns image with the looping <video> (opacity-40, poster fallback) + dark scrim + grid + Particles. Removed unused Image import.
- Added animate-mesh + Particles to Stats section (dark) for ambient depth.
- Added animate-mesh + Particles to Why-Us section (dark); fixed eyebrow "Why Bharat SC" -> "Why Nuevo".
- Added <PageLoader/> to the SPA shell in page.tsx.

Verification (Agent Browser):
- Page loads 200, no console/runtime errors; video readyState=4, paused=false, actively playing (currentTime advancing).
- 38 particle elements + 2 mesh backgrounds animating on home.
- Page loader shows on reload then dismisses (confirmed "loader dismissed" after 2.5s).
- SPA navigation intact (tested Home -> Services -> #/services).
- Lint: 0 errors, 0 warnings.
- VLM comparison vs Apollo reference: video bg works, text readable, "premium/alive", polish match 8/10.
- VLM full-page layout check: "Clean".
- framer-motion emits a benign container-position console warning from Parallax useScroll (target already relative; cosmetic only).

Stage Summary:
- Nuevo now genuinely matches the Apollo reference's loading + background-animation style: a real looping video hero background (the signature Apollo element), a branded page loader, ambient floating particles + animated gradient-mesh on dark sections, plus existing staggered scroll reveals and image zoom. Site is no longer "basic" — it has the reference's alive, premium feel.
