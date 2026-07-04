"use client";

import * as React from "react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./_shared";
import { OFFICES, CONTACT_REASONS, TOP_BAR } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSiteRouter } from "./router";

/* ---------------- CTA band ---------------- */
export function CtaBand() {
  const { navigate } = useSiteRouter();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saffron-500 via-saffron-600 to-saffron-700 py-14 sm:py-16">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
      <Container className="relative">
        <div className="flex flex-col items-center justify-between gap-6 text-center text-white lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Let&apos;s build your supply chain advantage
            </h2>
            <p className="mt-3 text-base text-saffron-50 sm:text-lg">
              Book a free 30-minute consultation. We&apos;ll map quick wins and a 90-day roadmap — no strings attached.
            </p>
          </div>
          <Button
            onClick={() => navigate("contact")}
            size="lg"
            className="shrink-0 bg-white text-saffron-700 shadow-xl shadow-saffron-900/20 hover:bg-saffron-50"
          >
            Book my consultation
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      form.reset();
      toast({
        title: "Thank you for reaching out!",
        description: "Our supply-chain team will get back to you within one business day.",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or email us directly at " + TOP_BAR.email,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28"
    >
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Contact Us"
            title={
              <>
                Let&apos;s talk about your{" "}
                <span className="text-brand-700">supply chain</span>
              </>
            }
            description="Tell us where it hurts — distribution costs, SLA misses, peak-season chaos — and we'll come back with a point of view."
          />
        )}

        <div className={showHeading ? "mt-12 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10" : "grid gap-8 lg:grid-cols-12 lg:gap-10"}>
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              {done ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-slate-900">
                    Message received!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">
                    Thanks for reaching out. A supply-chain advisor will email you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-brand-200 text-brand-700 hover:bg-brand-50"
                    onClick={() => setDone(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName">First name *</Label>
                    <Input id="firstName" name="firstName" required placeholder="Aarav" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName">Last name *</Label>
                    <Input id="lastName" name="lastName" required placeholder="Sharma" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="aarav@company.in" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+91 98XXX XXXXX" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" name="company" required placeholder="Acme India Pvt. Ltd." />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="reason">I want to *</Label>
                    <Select name="reason" required>
                      <SelectTrigger id="reason">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTACT_REASONS.map((r) => (
                          <SelectItem key={r} value={r}>{r}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your current supply chain, volumes, pain points and what good looks like…"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full bg-brand-700 text-white shadow-lg shadow-brand-700/20 hover:bg-brand-800 sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="mt-3 text-xs text-slate-500">
                      By submitting, you agree to be contacted about your enquiry. We never share your data.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Sidebar: contact + offices */}
          <div className="space-y-5 lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-7 text-white shadow-lg">
                <h3 className="font-display text-lg font-bold">Reach us directly</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a href={`tel:${TOP_BAR.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-saffron-300">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-saffron-400" />
                      <div>
                        <p className="text-xs text-slate-400">Call us</p>
                        <p className="font-semibold">{TOP_BAR.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${TOP_BAR.email}`} className="flex items-start gap-3 hover:text-saffron-300">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-saffron-400" />
                      <div>
                        <p className="text-xs text-slate-400">Email us</p>
                        <p className="font-semibold">{TOP_BAR.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-saffron-400" />
                    <div>
                      <p className="text-xs text-slate-400">Operating hours</p>
                      <p className="font-semibold">{TOP_BAR.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900">Our offices</h3>
                <ul className="mt-5 space-y-4">
                  {OFFICES.map((o) => (
                    <li key={o.city} className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                        <MapPin className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
                          {o.city}
                          <span className="rounded-full bg-saffron-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-saffron-600 ring-1 ring-saffron-100">
                            {o.tag}
                          </span>
                        </p>
                        <p className="text-xs leading-relaxed text-slate-600">{o.address}</p>
                        <div className="mt-1 flex flex-col gap-0.5 text-xs font-medium text-brand-700">
                          <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:underline">{o.phone}</a>
                          <a href={`mailto:${o.email}`} className="font-normal text-slate-500 hover:text-brand-700">{o.email}</a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
