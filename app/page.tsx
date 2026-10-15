import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { Expertise } from "@/components/expertise"
import { EducationHub } from "@/components/education-hub"
import { Doctor } from "@/components/doctor"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <Expertise />
        <EducationHub />
        <Doctor />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
