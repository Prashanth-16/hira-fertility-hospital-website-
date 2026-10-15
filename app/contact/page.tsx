import type { Metadata } from "next"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { BranchLocations } from "@/components/branch-locations"

export const metadata: Metadata = {
  title: "Contact Us — Hira Fertility Center",
  description:
    "Get in touch with Hira Fertility Center. Reach out for appointments, inquiries, or any information about our services across our Toli Chowk, Shamshabad and Secunderabad branches.",
}

const infoCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["8-1-351/A/11, 3rd Floor,", "Above TVS Showroom, Rahul Colony,", "Old Mumbai Hwy, Toli Chowk,", "Hyderabad, Telangana 500008"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Sunday", "10:00 AM - 7:00 PM", "In-Person Visits"],
    highlightLast: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 73372 25251", "for appointments"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@hirafertility.com"],
  },
]

export default function ContactPage() {
  return (
    <main className="bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-sm font-semibold text-brand shadow-sm">
            <MapPin className="h-4 w-4" />
            Get in Touch
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are here to help. Reach out to us for appointments, inquiries, or any information about our services.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-lg shadow-brand/25">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{card.title}</h3>
                <div className="mt-2 flex flex-col gap-0.5 text-sm leading-relaxed text-muted-foreground">
                  {card.lines.map((line, i) => (
                    <span
                      key={line}
                      className={card.highlightLast && i === card.lines.length - 1 ? "font-medium text-brand" : ""}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Map + form */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-border">
            <iframe
              title="Hira Fertility Center — Toli Chowk location"
              src="https://www.google.com/maps?q=Hira%20Fertility%20Center%20Toli%20Chowk%20Hyderabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-96 w-full border-0"
              allowFullScreen
            />
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Branches */}
      <BranchLocations />

      <SiteFooter />
    </main>
  )
}
