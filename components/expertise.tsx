import { Baby, Syringe, TestTube, Microscope, Stethoscope, ClipboardList, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Baby,
    title: "IVF Treatment",
    description:
      "Our state-of-the-art IVF program offers comprehensive fertility treatment with personalized protocols. We use the latest techniques including time-lapse embryo monitoring and blastocyst culture to maximize success rates.",
  },
  {
    icon: Syringe,
    title: "ICSI",
    description:
      "ICSI is an advanced fertilization technique where a single sperm is injected directly into the egg. Ideal for male factor infertility, low sperm count, or previous IVF failures.",
  },
  {
    icon: TestTube,
    title: "IUI Treatment",
    description:
      "A less invasive fertility procedure where specially prepared sperm is placed directly into the uterus during ovulation. An excellent first-line treatment for various fertility challenges.",
  },
  {
    icon: Microscope,
    title: "Laparoscopy",
    description:
      "Diagnostic and operative laparoscopy for evaluating and treating conditions like endometriosis, fibroids, tubal blockage, and PCOS. Small incisions, faster recovery.",
  },
  {
    icon: Stethoscope,
    title: "Hysteroscopy",
    description:
      "A procedure to examine the inside of the uterus using a thin, lighted telescope. Used to diagnose and treat conditions such as polyps, fibroids, and adhesions.",
  },
  {
    icon: ClipboardList,
    title: "Fertility Testing",
    description:
      "Complete male and female fertility evaluation including hormone panels, ultrasound scanning, semen analysis, and advanced immunological tests to identify the root cause.",
  },
]

export function Expertise() {
  return (
    <section id="services" className="bg-brand-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive fertility treatments tailored to your unique needs
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-brand" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <a
              key={title}
              href="/services"
              className="group flex flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-md shadow-brand/25">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
