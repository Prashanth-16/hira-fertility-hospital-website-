"use client"

import { useRef } from "react"
import {
  Baby,
  Syringe,
  TestTube,
  Microscope,
  Stethoscope,
  ClipboardList,
  HeartPulse,
  UserRound,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"

const treatments = [
  {
    icon: Baby,
    title: "IVF Treatment",
    subtitle: "In Vitro Fertilization",
    description:
      "Our state-of-the-art IVF program offers comprehensive fertility treatment with personalized protocols. We use the latest techniques including time-lapse embryo monitoring and blastocyst culture to maximize success rates.",
    features: ["Personalized protocols", "Blastocyst culture", "Embryo monitoring", "High success rates"],
  },
  {
    icon: Syringe,
    title: "ICSI",
    subtitle: "Intracytoplasmic Sperm Injection",
    description:
      "ICSI is an advanced fertilization technique where a single sperm is injected directly into the egg. Ideal for male factor infertility, low sperm count, or previous IVF failures.",
    features: ["Single sperm injection", "Male factor treatment", "High fertilization rate", "Expert embryologists"],
  },
  {
    icon: TestTube,
    title: "IUI Treatment",
    subtitle: "Intrauterine Insemination",
    description:
      "A less invasive fertility procedure where specially prepared sperm is placed directly into the uterus during ovulation. An excellent first-line treatment for various fertility challenges.",
    features: ["Minimally invasive", "Cost-effective", "Single & double IUI", "Donor options available"],
  },
  {
    icon: Microscope,
    title: "Laparoscopy",
    subtitle: "Minimally Invasive Surgery",
    description:
      "Diagnostic and operative laparoscopy for evaluating and treating conditions like endometriosis, fibroids, tubal blockage, and PCOS. Small incisions, faster recovery.",
    features: ["Minimal scarring", "Quick recovery", "Diagnostic & operative", "PCOS treatment"],
  },
  {
    icon: Stethoscope,
    title: "Hysteroscopy",
    subtitle: "Uterine Evaluation",
    description:
      "A procedure to examine the inside of the uterus using a thin, lighted telescope. Used to diagnose and treat conditions such as polyps, fibroids, and adhesions.",
    features: ["Uterine evaluation", "Polyp removal", "Fibroid treatment", "Adhesion correction"],
  },
  {
    icon: ClipboardList,
    title: "Fertility Testing",
    subtitle: "Comprehensive Diagnostics",
    description:
      "Complete male and female fertility evaluation including hormone panels, ultrasound scanning, semen analysis, and advanced immunological tests to identify the root cause.",
    features: ["Hormone panels", "Ultrasound scans", "Semen analysis", "TORCH profile"],
  },
  {
    icon: HeartPulse,
    title: "Gynecology",
    subtitle: "Women's Health Care",
    description:
      "Expert gynecological care covering prenatal check-ups, high-risk pregnancy management, menstrual disorders, and general women's health with a compassionate approach.",
    features: ["Prenatal care", "High-risk pregnancy", "Menstrual disorders", "Wellness check-ups"],
  },
  {
    icon: UserRound,
    title: "Specialist Consultation",
    subtitle: "Expert Medical Advice",
    description:
      "One-on-one consultation with Dr. Fazalunnisa, an experienced gynaecologist and infertility specialist, to discuss your unique situation and create a personalized treatment plan.",
    features: ["Personalized plans", "7+ years experience", "Follow-up care", "Comprehensive guidance"],
  },
]

export function TreatmentsExplorer() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our Treatments
          </h2>
          <p className="mt-3 text-muted-foreground">Scroll horizontally to explore all services</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy("left")}
            aria-label="Scroll to previous treatments"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy("right")}
            aria-label="Scroll to next treatments"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {treatments.map(({ icon: Icon, title, subtitle, description, features }) => (
          <article
            key={title}
            className="flex w-[19rem] shrink-0 snap-start flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-md shadow-brand/25">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-1 text-sm font-semibold text-brand">{subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

            <ul className="mt-5 flex-1 space-y-2.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="/services"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
