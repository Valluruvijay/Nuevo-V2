"use client";

import * as React from "react";
import {
  Phone, Mail, Clock, MapPin, ChevronDown, Menu, ArrowRight,
} from "lucide-react";
import { Container } from "./_shared";
import { NAV_LINKS, TOP_BAR, BRAND } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSiteRouter } from "./router";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { page, navigate } = useSiteRouter();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNav = (p: (typeof NAV_LINKS)[number]["page"]) => {
    setOpen(false);
    navigate(p);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div
        className={cn(
          "hidden border-b border-white/10 bg-brand-950 text-slate-300 transition-all duration-300 lg:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100",
        )}
      >
        <Container className="flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${TOP_BAR.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-saffron-300">
              <Phone className="h-3.5 w-3.5 text-saffron-400" />
              {TOP_BAR.phone}
            </a>
            <a href={`mailto:${TOP_BAR.email}`} className="inline-flex items-center gap-1.5 hover:text-saffron-300">
              <Mail className="h-3.5 w-3.5 text-saffron-400" />
              {TOP_BAR.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-saffron-400" />
              {TOP_BAR.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-saffron-400" />
              {TOP_BAR.locations}
            </span>
            <button
              onClick={() => onNav("careers")}
              className="font-semibold text-white hover:text-saffron-300"
            >
              We&apos;re hiring →
            </button>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/90 shadow-lg shadow-brand-950/5 backdrop-blur-md"
            : "bg-white/95 backdrop-blur-sm",
        )}
      >
        <Container>
          <nav
            className={cn(
              "flex items-center justify-between gap-4 transition-all duration-300",
              scrolled ? "h-16" : "h-18 py-3 lg:h-20",
            )}
          >
            {/* Logo */}
            <button
              onClick={() => onNav("home")}
              className="flex shrink-0 items-center gap-2.5"
              aria-label={`${BRAND.full} home`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 shadow-md shadow-brand-900/20">
                <BrandMark className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-tight text-brand-900">
                  {BRAND.name}<span className="text-saffron-500">SC</span>
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  {BRAND.tagline}
                </span>
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden items-center gap-0.5 xl:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNav(link.page)}
                  className={cn(
                    "nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    page === link.page
                      ? "text-brand-700 active"
                      : "text-slate-700 hover:text-brand-700",
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <Button
                onClick={() => onNav("contact")}
                size="sm"
                className="hidden bg-saffron-500 text-white shadow-md shadow-saffron-500/25 hover:bg-saffron-600 sm:inline-flex"
              >
                Get a Quote
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>

              {/* Mobile drawer */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-brand-900 xl:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[88vw] max-w-sm border-l-0 bg-white p-0"
                >
                  <SheetHeader className="border-b border-slate-100 px-5 py-4 text-left">
                    <SheetTitle className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-700 to-brand-900">
                        <BrandMark className="h-5 w-5" />
                      </span>
                      <span className="font-display text-base font-extrabold text-brand-900">
                        {BRAND.name}<span className="text-saffron-500">SC</span>
                      </span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col px-3 py-4">
                    {NAV_LINKS.map((link) => (
                      <button
                        key={link.page}
                        onClick={() => onNav(link.page)}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium transition-colors",
                          page === link.page
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-brand-50 hover:text-brand-700",
                        )}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
                      </button>
                    ))}
                    <Button
                      onClick={() => onNav("contact")}
                      className="mt-4 bg-saffron-500 text-white hover:bg-saffron-600"
                    >
                      Get a Free Quote
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-auto space-y-2 border-t border-slate-100 px-5 py-4 text-sm text-slate-600">
                    <a href={`tel:${TOP_BAR.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-brand-700">
                      <Phone className="h-4 w-4 text-saffron-500" /> {TOP_BAR.phone}
                    </a>
                    <a href={`mailto:${TOP_BAR.email}`} className="flex items-center gap-2 hover:text-brand-700">
                      <Mail className="h-4 w-4 text-saffron-500" /> {TOP_BAR.email}
                    </a>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-saffron-500" /> {TOP_BAR.hours}
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M14 24 L32 15 L50 24 L32 33 Z" fill="#ffffff" />
      <path d="M18 28 L18 44 L32 51 L32 33 Z" fill="#5eead4" />
      <path d="M46 28 L46 44 L32 51 L32 33 Z" fill="#fb923c" />
      <circle cx="50" cy="20" r="4" fill="#f97316" />
    </svg>
  );
}
