import type { Metadata } from "next"
import { BadgeIndianRupee, ShieldCheck, HandCoins, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PricingExplorer } from "@/components/pricing-explorer"

export const metadata: Metadata = {
  title: "Pricing — Hira Fertility Center",
  description:
    "Transparent, upfront pricing for consultations, scans, lab investigations, IVF procedures and OP theatre services at Hira Fertility Center.",
}

const highlights = [
  { icon: ShieldCheck, label: "No hidden charges" },
  { icon: HandCoins, label: "Flexible payment options" },
  { icon: BadgeIndianRupee, label: "Fair, upfront pricing" },
]

export default function PricingPage() {
  return (
    <main className="bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-sm font-semibold text-brand shadow-sm">
            <BadgeIndianRupee className="h-4 w-4" />
            Transparent Pricing
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Clear Pricing, No Surprises
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We believe every family deserves clarity on their fertility journey. Browse our complete price
            list for consultations, scans, lab tests and procedures.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
              >
                <Icon className="h-4 w-4 text-brand" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-14">
        <PricingExplorer />
      </div>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-brand-foreground shadow-xl shadow-brand/25 sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl">
            Questions About Costs or Packages?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-brand-foreground/85">
            Our team is happy to walk you through pricing, insurance and personalized treatment packages.
            Reach out and we&apos;ll help you plan with confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-foreground px-7 py-3.5 text-base font-semibold text-brand transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
