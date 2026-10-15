import { Users, Award, Building2, HeartPulse } from "lucide-react"

const stats = [
  { icon: Users, value: "200+", label: "Happy Families" },
  { icon: Award, value: "7+", label: "Years Experience" },
  { icon: Building2, value: "100%", label: "Dedicated Care" },
  { icon: HeartPulse, value: "24/7", label: "Support Available" },
]

export function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
  )
}
