import type { Metadata } from "next"
import Image from "next/image"
import {
  Heart,
  Target,
  Eye,
  ShieldCheck,
  HandHeart,
  Microscope,
  Users,
  Award,
  Building2,
  HeartPulse,
  Phone,
  ArrowRight,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Us — Hira Fertility Center",
  description:
    "Learn about Hira Fertility Center — our mission, our values, and our commitment to compassionate, evidence-based fertility care in Hyderabad.",
}

const values = [
  {
    icon: HandHeart,
    title: "Compassion First",
    text: "Every journey is personal. We listen, we care, and we walk beside you at every step.",
  },
  {
    icon: Microscope,
    title: "Scientific Excellence",
    text: "Advanced reproductive technology and evidence-based protocols for the best possible outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "Honest guidance, clear pricing and open communication so you always know where you stand.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    text: "No two paths to parenthood are alike. Your treatment plan is built around you.",
  },
]

const stats = [
  { icon: Users, value: "200+", label: "Happy Families" },
  { icon: Award, value: "7+", label: "Years Experience" },
  { icon: Building2, value: "100%", label: "Dedicated Care" },
  { icon: HeartPulse, value: "24/7", label: "Support Available" },
]

const reasons = [
  "Personalised treatment plans tailored to your unique needs",
  "State-of-the-art embryology laboratory and equipment",
  "Transparent, upfront pricing with no hidden costs",
  "Experienced, empathetic and multilingual care team",
  "End-to-end support from first consultation to parenthood",
  "Convenient availability, seven days a week",
]

export default function AboutPage() {
  return (
    <main className="bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-brand">ABOUT HIRA FERTILITY</p>
            <h1 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Caring for Every Step of Your <span className="text-brand">Parenthood Journey</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              At Hira Fertility Center, we blend advanced reproductive science with genuine warmth. Our
              mission is simple — to turn hope into happiness for every family that trusts us with their
              dream of parenthood.
            </p>
          </div>
        </div>
      </section>

      {/* Story with image */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/20">
              <Image
                src="/clinic-interior.png"
                alt="The welcoming interior of Hira Fertility Center"
                width={560}
                height={620}
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -left-3 bottom-6 rounded-2xl bg-brand px-6 py-4 text-center text-brand-foreground shadow-lg">
              <p className="font-display text-3xl font-bold leading-none">200+</p>
              <p className="mt-1 text-[0.6rem] font-semibold tracking-widest">FAMILIES BUILT</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-brand">OUR STORY</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where Science Meets Compassion
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Hira Fertility Center was founded on a single belief: that world-class fertility care should
              feel personal. We saw too many couples navigate their journey feeling like just another
              number, and we set out to change that.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Today, our center combines a modern embryology laboratory, proven treatment protocols and a
              team that treats every patient like family. From your very first consultation, you are never
              alone — we guide, support and celebrate with you until the moment you hold your child.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-soft/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft">
                <Target className="h-7 w-7 text-brand" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To make parenthood possible through accessible, ethical and advanced fertility care —
                delivered with the compassion and dignity every family deserves.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft">
                <Eye className="h-7 w-7 text-brand" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the most trusted fertility center in the region, recognised for outstanding success
                rates, transparent care and the countless families we help create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand">WHAT DRIVES US</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The principles that shape every consultation, every treatment and every relationship we build.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
                <Icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-border/70 bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft">
                <Icon className="h-6 w-6 text-brand" />
              </div>
              <p className="mt-4 font-display text-3xl font-bold text-brand">{value}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-brand">WHY CHOOSE US</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Center Built Around You
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We combine clinical expertise with a truly personal approach, so you get the very best care
              at every stage of your journey.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <Heart className="h-3.5 w-3.5 fill-brand text-brand" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground/85">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-brand-foreground shadow-xl shadow-brand/25 sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl">
            Ready to Begin Your Journey with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-brand-foreground/85">
            Book a consultation today and let our team guide you toward the family you have always dreamed of.
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
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/40 px-7 py-3.5 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
