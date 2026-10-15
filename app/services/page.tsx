import type { Metadata } from "next"
import { Stethoscope, Phone, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TreatmentsExplorer } from "@/components/treatments-explorer"

export const metadata: Metadata = {
  title: "Services — Hira Fertility Center",
  description:
    "Explore the comprehensive fertility treatments at Hira Fertility Center — IVF, ICSI, IUI, laparoscopy, hysteroscopy, fertility testing, gynecology and specialist consultations.",
}

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-sm font-semibold text-brand shadow-sm">
              <Stethoscope className="h-4 w-4" />
              Our Services
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Comprehensive Fertility Treatments
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              From initial diagnosis to advanced reproductive procedures, we offer a full spectrum of
              fertility services tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments carousel */}
      <TreatmentsExplorer />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-brand-foreground shadow-xl shadow-brand/25 sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-brand-foreground/85">
            Book a consultation and our team will help you understand your options and design a personalized
            plan for your journey to parenthood.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-foreground px-7 py-3.5 text-base font-semibold text-brand transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Book a Consultation
            </a>
            <a
              href="/doctor"
              className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/40 px-7 py-3.5 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
            >
              Meet Our Doctor
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
