import type { Metadata } from "next"
import Image from "next/image"
import { Star, Phone, GraduationCap, Award, Clock, Languages, Stethoscope, HeartPulse, CheckCircle2, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Our Doctor — Dr. Md. Fazalunnisa | Hira Fertility Center",
  description:
    "Meet Dr. Md. Fazalunnisa, MBBS, DGO (MRCOG) — Gynaecologist and Infertility Specialist at Hira Fertility Center with 7+ years of compassionate, evidence-based fertility care.",
}

const credentials = [
  { icon: GraduationCap, label: "MBBS, DGO (MRCOG)", sub: "Medical qualifications" },
  { icon: Award, label: "7+ Years Experience", sub: "Clinical excellence" },
  { icon: Clock, label: "Mon–Sun, 10 AM – 7 PM", sub: "Consultation hours" },
  { icon: Languages, label: "Multilingual Care", sub: "English, Hindi, Urdu, Telugu" },
]

const expertise = [
  {
    icon: HeartPulse,
    title: "In-Vitro Fertilization (IVF)",
    text: "Personalised IVF protocols tailored to each couple's unique fertility profile for the best possible outcomes.",
  },
  {
    icon: Stethoscope,
    title: "ICSI & IUI",
    text: "Advanced intracytoplasmic sperm injection and intrauterine insemination performed with precision and care.",
  },
  {
    icon: HeartPulse,
    title: "Reproductive Surgery",
    text: "Minimally invasive laparoscopy and hysteroscopy to diagnose and treat underlying fertility conditions.",
  },
  {
    icon: Stethoscope,
    title: "Fertility Evaluation",
    text: "Comprehensive testing and counselling to identify causes and design a clear, hopeful treatment path.",
  },
]

const approach = [
  "Every couple receives a personalised, evidence-based treatment plan",
  "Transparent guidance at every step of the journey",
  "Compassionate, judgement-free consultations",
  "Continuous support from first visit to parenthood",
]

export default function DoctorPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-brand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-brand">MEET OUR SPECIALIST</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              Dr. Md. <span className="text-brand">Fazalunnisa</span>
            </h1>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Gynaecologist &amp; Infertility Specialist
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              With more than 7 years of dedicated experience, Dr. Fazalunnisa combines advanced reproductive
              medicine with genuine empathy — guiding families through every step of their journey to parenthood
              with clarity, warmth, and care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Book a Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                View Services
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/20">
              <Image
                src="/doctor-portrait.png"
                alt="Dr. Md. Fazalunnisa, Gynaecologist and Infertility Specialist"
                width={520}
                height={620}
                className="h-[30rem] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent px-6 pb-6 pt-16 text-brand-foreground">
                <p className="font-display text-xl font-bold">Dr. Md. Fazalunnisa</p>
                <p className="text-sm text-brand-foreground/80">MBBS, DGO (MRCOG)</p>
              </div>
            </div>
            <div className="absolute -right-3 top-6 rounded-2xl bg-brand px-5 py-3 text-center text-brand-foreground shadow-lg">
              <p className="font-display text-2xl font-bold leading-none">7+</p>
              <p className="mt-1 text-[0.6rem] font-semibold tracking-widest">YEARS EXPERIENCE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                <c.icon className="h-6 w-6 text-brand" />
              </span>
              <p className="mt-4 font-display text-lg font-bold text-foreground">{c.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-brand">AREAS OF EXPERTISE</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Specialised Fertility Care
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Dr. Fazalunnisa offers a full spectrum of reproductive treatments, each backed by the latest
              science and delivered with a personal touch.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {expertise.map((e) => (
              <div key={e.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                  <e.icon className="h-6 w-6 text-brand" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{e.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-brand">HER APPROACH</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Care that puts <span className="text-brand">you first</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Dr. Fazalunnisa believes that no two fertility journeys are the same. She takes the time to
              understand each patient's story, explains every option clearly, and stands beside them from the
              very first consultation to the moment they hold their child.
            </p>
            <ul className="mt-7 space-y-4">
              {approach.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                  <span className="font-medium text-foreground/85">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-brand-soft p-8 sm:p-10">
            <div className="flex items-center gap-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand text-brand" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-xl font-semibold leading-relaxed text-foreground text-pretty">
              &ldquo;Dr. Fazalunnisa never made us feel like just another case. She listened, explained
              everything patiently, and gave us hope when we needed it most. Today we&apos;re parents because of
              her.&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-foreground">A grateful family</p>
            <p className="text-sm text-muted-foreground">Hira Fertility Center</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-foreground text-balance sm:text-4xl">
            Ready to begin your journey?
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-foreground/85">
            Book a consultation with Dr. Fazalunnisa and take the first confident step towards parenthood.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-brand shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" />
            Book an Appointment
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
