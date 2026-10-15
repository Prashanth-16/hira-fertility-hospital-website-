import {
  CalendarDays,
  CalendarClock,
  Clock,
  CheckCircle2,
  CircleCheck,
  XCircle,
  IndianRupee,
  type LucideIcon,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { getDashboardStats, formatCurrency } from "@/lib/data"

interface StatCard {
  label: string
  value: string
  icon: LucideIcon
  tint: string
  iconColor: string
}

export function DashboardCards() {
  const stats = getDashboardStats()

  const cards: StatCard[] = [
    {
      label: "Total Appointments",
      value: String(stats.total),
      icon: CalendarDays,
      tint: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      label: "Today's Appointments",
      value: String(stats.today),
      icon: CalendarClock,
      tint: "bg-sky-500/10",
      iconColor: "text-sky-600 dark:text-sky-400",
    },
    {
      label: "Pending",
      value: String(stats.pending),
      icon: Clock,
      tint: "bg-amber-500/10",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      label: "Confirmed",
      value: String(stats.confirmed),
      icon: CheckCircle2,
      tint: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Completed",
      value: String(stats.completed),
      icon: CircleCheck,
      tint: "bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Cancelled",
      value: String(stats.cancelled),
      icon: XCircle,
      tint: "bg-red-500/10",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      label: "Revenue (est.)",
      value: formatCurrency(stats.revenue),
      icon: IndianRupee,
      tint: "bg-fuchsia-500/10",
      iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {cards.map((card) => (
        <Card
          key={card.label}
          className="gap-0 rounded-2xl border-border/60 shadow-sm transition-shadow hover:shadow-md"
        >
          <CardContent className="flex items-center gap-4 p-4 md:p-5">
            <div
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-xl",
                card.tint,
              )}
            >
              <card.icon className={cn("size-5", card.iconColor)} />
            </div>
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="truncate text-xs font-medium text-muted-foreground">
                {card.label}
              </span>
              <span className="font-heading text-xl font-bold text-foreground md:text-2xl">
                {card.value}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
