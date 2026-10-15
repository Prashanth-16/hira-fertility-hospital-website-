import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/family-sunset.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-dark/85" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center text-brand-foreground sm:px-6">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl text-balance">
          Ready to Start Your Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-foreground/85">
          Book a consultation with our expert team and take the first step towards building your family.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Pricing
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
