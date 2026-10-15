import Image from "next/image"
import { Star, User, Phone } from "lucide-react"

const highlights = [
  "MBBS, DGO (MRCOG) qualifications",
  "7+ years of clinical excellence",
  "Available Mon–Sun, 10 AM – 7 PM",
  "Specialisation in IVF, ICSI & IUI",
  "Multilingual consultations available",
]

export function Doctor() {
  return (
    <section id="doctor" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/20">
            <Image
              src="/doctor-portrait.png"
              alt="Dr. Md. Fazalunnisa, Gynaecologist and Infertility Specialist"
              width={520}
              height={620}
              className="h-[30rem] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent px-6 pb-6 pt-16 text-brand-foreground">
              <p className="font-display text-xl font-bold">Dr. Md. Fazalunnisa</p>
              <p className="text-sm text-brand-foreground/80">Gynaecologist &amp; Infertility Specialist</p>
            </div>
          </div>
          <div className="absolute -right-3 top-6 rounded-2xl bg-brand px-5 py-3 text-center text-brand-foreground shadow-lg">
            <p className="font-display text-2xl font-bold leading-none">7+</p>
            <p className="mt-1 text-[0.6rem] font-semibold tracking-widest">YEARS EXPERIENCE</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-brand">MEET OUR SPECIALIST</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Expert Care from <span className="text-brand">Dr. Fazalunnisa</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            With over 7 years of dedicated experience and qualifications including MBBS and DGO (MRCOG),
            Dr. Fazalunnisa brings precision, empathy, and evidence-based medicine to every consultation —
            from the very first visit to the moment you hold your child.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <Star className="h-4 w-4 fill-brand text-brand" />
                </span>
                <span className="font-medium text-foreground/85">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/doctor"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
            >
              <User className="h-5 w-5" />
              Full Profile
            </a>
            <a
              href="tel:7337225251"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
