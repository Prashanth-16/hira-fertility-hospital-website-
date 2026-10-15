import { CalendarDays, CalendarRange, CalendarClock, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatItem {
  label: string
  value: string
  delta: string
  icon: LucideIcon
  tint: string
  iconColor: string
}

const stats: StatItem[] = [
  {
    label: "Appointments Today",
    value: "3",
    delta: "+2 vs yesterday",
    icon: CalendarClock,
    tint: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "This Week",
    value: "48",
    delta: "+12% vs last week",
    icon: CalendarRange,
    tint: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "This Month",
    value: "312",
    delta: "+8% vs last month",
    icon: CalendarDays,
    tint: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

export function StatisticsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <Card key={s.label} className="rounded-2xl border-border/60 shadow-sm">
          <CardContent className="flex flex-col gap-3 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {s.label}
              </span>
              <div
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg",
                  s.tint,
                )}
              >
                <s.icon className={cn("size-4", s.iconColor)} />
              </div>
            </div>
            <span className="font-heading text-3xl font-bold text-foreground">
              {s.value}
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {s.delta}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
