"use client";

import * as React from "react";
import {
  ArrowRight, Briefcase, MapPin, Users2, Loader2, CheckCircle2, Send,
} from "lucide-react";
import { PageHeader } from "./page-header";
import { Container, Reveal, SectionHeading } from "../_shared";
import { CAREERS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { CtaBand } from "../contact";

interface Opening {
  id: string;
  role: string;
  team: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export function CareersPage() {
  const [openings, setOpenings] = React.useState<Opening[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState<string>("");

  React.useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/careers", { cache: "no-store" });
        if (!res.ok) throw new Error("failed");
        const data = (await res.json()) as { openings: Opening[] };
        if (!active) return;
        setOpenings(data.openings);
        if (data.openings[0]) setSelectedJob(data.openings[0].id);
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <PageHeader
        eyebrow={CAREERS.eyebrow}
        crumb="Careers"
        title={CAREERS.title}
        description={CAREERS.body}
      />

      {/* Perks */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why join Nuevo"
            title={
              <>
                More than a job — a{" "}
                <span className="text-brand-700">mission worth showing up for</span>
              </>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAREERS.perks.map((p, i) => (
              <Reveal key={p.title} delay={i % 4}>
                <div className="card-lift h-full rounded-2xl border border-slate-100 bg-slate-50/60 p-6 hover:border-brand-200 hover:bg-white hover:shadow-md">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
                    <p.icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Openings */}
      <section id="openings" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Open positions"
              title={
                <>
                  Find your{" "}
                  <span className="text-brand-700">next role</span>
                </>
              }
              align="left"
              className="max-w-xl"
            />
            {!loading && !error && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
                <Briefcase className="h-4 w-4" />
                {openings.length} open roles
              </span>
            )}
          </div>

          <div className="mt-10">
            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full rounded-2xl" />
                ))}
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-sm text-red-700">
                We couldn&apos;t load open roles right now. Please email{" "}
                <a className="font-semibold underline" href="mailto:careers@nuevosc.in">careers@nuevosc.in</a>.
              </div>
            ) : openings.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                No open roles at the moment — but we&apos;re always keen to meet great people. Send us your profile below.
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                <ul className="divide-y divide-slate-100">
                  {openings.map((o) => (
                    <li key={o.id}>
                      <button
                        onClick={() => {
                          setSelectedJob(o.id);
                          document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="group flex w-full flex-col gap-3 px-6 py-5 text-left transition-colors hover:bg-slate-50/70 sm:flex-row sm:items-center sm:justify-between sm:px-8"
                      >
                        <div className="min-w-0">
                          <p className="font-display text-base font-bold text-slate-900 group-hover:text-brand-700">
                            {o.role}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">{o.description}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                            <span className="inline-flex items-center gap-1">
                              <Users2 className="h-3.5 w-3.5" /> {o.team}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" /> {o.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Briefcase className="h-3.5 w-3.5" /> {o.experience}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                              {o.type}
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 group-hover:bg-brand-700 group-hover:text-white">
                          Apply
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Apply now"
              title={<>Send us your application</>}
              description="Pick a role, share your details and a link to your resume. Our talent team responds within 3 business days."
            />
            <Reveal>
              <ApplyForm openings={openings} loading={loading} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function ApplyForm({
  openings,
  loading,
  selectedJob,
  setSelectedJob,
}: {
  openings: Opening[];
  loading: boolean;
  selectedJob: string;
  setSelectedJob: (v: string) => void;
}) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
      form.reset();
      toast({
        title: "Application received!",
        description: "Our talent team will reach out within 3 business days.",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again or email careers@nuevosc.in",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="mt-8 flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50 py-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="font-display mt-5 text-xl font-bold text-slate-900">Application received!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Thank you for applying to Nuevo. Our talent team will review your profile and respond within 3 business days.
        </p>
        <Button
          variant="outline"
          className="mt-6 border-brand-200 text-brand-700 hover:bg-brand-50"
          onClick={() => setDone(false)}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 sm:grid-cols-2">
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="jobId">Role *</Label>
        <Select name="jobId" value={selectedJob} onValueChange={setSelectedJob} required disabled={loading}>
          <SelectTrigger id="jobId">
            <SelectValue placeholder={loading ? "Loading roles…" : "Select a role"} />
          </SelectTrigger>
          <SelectContent>
            {openings.map((o) => (
              <SelectItem key={o.id} value={o.id}>
                {o.role} · {o.location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="name">Full name *</Label>
        <Input id="name" name="name" required placeholder="Aarav Sharma" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="aarav@email.com" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="+91 98XXX XXXXX" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="resumeLink">Resume link (Google Drive / Dropbox)</Label>
        <Input id="resumeLink" name="resumeLink" placeholder="https://…" />
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="coverNote">Why Nuevo? (optional)</Label>
        <Textarea id="coverNote" name="coverNote" rows={4} placeholder="Tell us briefly why you'd be a great fit…" />
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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : (
            <>
              Submit application
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        <p className="mt-3 text-xs text-slate-500">
          By applying, you agree to Nuevo processing your data for recruitment. We never share it with third parties.
        </p>
      </div>
    </form>
  );
}
