"use client";

import * as React from "react";
import {
  Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Facebook, Instagram, Send, ArrowRight,
} from "lucide-react";
import { Container } from "./_shared";
import { TOP_BAR, BRAND, NAV_LINKS, FOOTER_LINKS, SERVICES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useSiteRouter } from "./router";

export function Footer() {
  const { toast } = useToast();
  const { navigate } = useSiteRouter();
  const [email, setEmail] = React.useState("");
  const [subscribing, setSubscribing] = React.useState(false);

  async function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      toast({
        title: "Subscribed!",
        description: "You're on the list for supply-chain insights & updates.",
      });
      setEmail("");
    } catch {
      toast({
        variant: "destructive",
        title: "Could not subscribe",
        description: "Please try again later.",
      });
    } finally {
      setSubscribing(false);
    }
  }

  return (
    <footer className="relative mt-auto overflow-hidden bg-brand-950 text-slate-300">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

      <Container className="relative">
        {/* Newsletter strip */}
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-2 lg:items-center lg:py-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Supply-chain insights, in your inbox
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
              Monthly perspectives on Indian logistics, technology and sustainability. No spam, unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={onSubscribe} className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              className="max-w-sm border-white/15 bg-white/5 text-white placeholder:text-slate-500 focus-visible:border-saffron-400 focus-visible:ring-saffron-400/30"
            />
            <Button
              type="submit"
              disabled={subscribing}
              className="bg-saffron-500 text-white shadow-lg shadow-saffron-500/25 hover:bg-saffron-600"
            >
              {subscribing ? "Subscribing…" : "Subscribe"}
              {!subscribing && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-2.5"
              aria-label={`${BRAND.full} home`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-md">
                <FooterMark className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">
                  {BRAND.name}<span className="text-saffron-400">SC</span>
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {BRAND.tagline}
                </span>
              </span>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              India&apos;s trusted integrated 3PL &amp; supply chain partner — engineering resilient, tech-driven and
              sustainable logistics across 28 states &amp; 8,000+ pin codes since {BRAND.founded}.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a href={`tel:${TOP_BAR.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-saffron-300">
                <Phone className="h-4 w-4 text-saffron-400" /> {TOP_BAR.phone} (Hyd)
              </a>
              <a href={`tel:${TOP_BAR.phoneBlr.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-saffron-300">
                <Phone className="h-4 w-4 text-saffron-400" /> {TOP_BAR.phoneBlr} (Blr)
              </a>
              <a href={`mailto:${TOP_BAR.email}`} className="flex items-center gap-2.5 hover:text-saffron-300">
                <Mail className="h-4 w-4 text-saffron-400" /> {TOP_BAR.email}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" />
                <span>Plot 14, Meenakshi Tech Park, Financial District, Gachibowli, Hyderabad 500032</span>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[Linkedin, Twitter, Youtube, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-saffron-400/30 hover:bg-saffron-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => navigate("services")}
                    className="text-left text-slate-400 transition-colors hover:text-saffron-300"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.map((c) => (
                <li key={c.label}>
                  <button
                    onClick={() => navigate(c.page)}
                    className="text-left text-slate-400 transition-colors hover:text-saffron-300"
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links / CTA */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Get started</h3>
            <p className="mt-4 text-sm text-slate-400">
              Get a free supply-chain diagnostic in 2 weeks. Tell us your challenge.
            </p>
            <Button
              onClick={() => navigate("contact")}
              className="mt-4 w-full bg-saffron-500 text-white hover:bg-saffron-600 sm:w-auto"
            >
              Request a quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-xs">
              {["ISO 9001", "ISO 27001", "GDP", "FSSAI", "AEO T2", "CTPAT"].map((b) => (
                <li key={b} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-center font-medium text-slate-300">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.legal} · CIN: {BRAND.cin} · Made in India 🇮🇳</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.slice(0, 5).map((l) => (
              <button key={l.page} onClick={() => navigate(l.page)} className="hover:text-saffron-300">
                {l.label}
              </button>
            ))}
            <a href="#" className="hover:text-saffron-300">Privacy</a>
            <a href="#" className="hover:text-saffron-300">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M14 24 L32 15 L50 24 L32 33 Z" fill="#ffffff" />
      <path d="M18 28 L18 44 L32 51 L32 33 Z" fill="#5eead4" />
      <path d="M46 28 L46 44 L32 51 L32 33 Z" fill="#fb923c" />
      <circle cx="50" cy="20" r="4" fill="#f97316" />
    </svg>
  );
}
