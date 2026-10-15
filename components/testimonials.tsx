import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dr. Fazalunnisa and her team gave us hope when we had almost none left. After two years of trying, we finally welcomed our baby girl. The care at Hira is truly exceptional.",
    initial: "P",
    name: "Priya & Rajan",
    detail: "IVF Success • Hyderabad",
  },
  {
    quote:
      "From the very first consultation, we felt heard and understood. The clinic is warm, professional and the treatment protocols are world-class. We couldn't be more grateful.",
    initial: "A",
    name: "Amina & Farhan",
    detail: "ICSI Treatment • Secunderabad",
  },
  {
    quote:
      "The transparency throughout the entire process was remarkable. Dr. Fazalunnisa explained every step clearly and kept us confident. Our twins are proof that miracles happen here.",
    initial: "L",
    name: "Lakshmi & Srinivas",
    detail: "IUI Treatment • Hyderabad",
  },
]

export function Testimonials() {
  return (
    <section className="bg-brand-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Stories of Hope
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real journeys from families who trusted us with their most precious dream
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-sm"
            >
              <Quote className="h-8 w-8 text-brand/30" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-brand-foreground">
                  {t.initial}
                </span>
                <span>
                  <span className="block font-display font-bold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
