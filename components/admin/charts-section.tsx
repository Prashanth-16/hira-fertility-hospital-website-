"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { getStatusBreakdown, monthlyAppointments } from "@/lib/data"

const statusConfig = {
  value: { label: "Appointments" },
  pending: { label: "Pending", color: "var(--chart-4)" },
  confirmed: { label: "Confirmed", color: "var(--chart-2)" },
  completed: { label: "Completed", color: "var(--chart-3)" },
  cancelled: { label: "Cancelled", color: "var(--chart-5)" },
} satisfies ChartConfig

const monthlyConfig = {
  appointments: { label: "Appointments", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChartsSection() {
  const statusData = getStatusBreakdown()

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* Pie chart */}
      <Card className="rounded-2xl border-border/60 shadow-sm lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-heading text-base">
            Appointment Status
          </CardTitle>
          <CardDescription>Distribution across all statuses</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={statusConfig}
            className="mx-auto aspect-square max-h-[260px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="status"
                innerRadius={55}
                strokeWidth={4}
              >
                {statusData.map((entry) => (
                  <Cell
                    key={entry.key}
                    fill={`var(--color-${entry.key})`}
                  />
                ))}
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="status" />}
                className="-translate-y-2 flex-wrap gap-2 *:justify-center"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Bar chart */}
      <Card className="rounded-2xl border-border/60 shadow-sm lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-heading text-base">
            Monthly Appointments
          </CardTitle>
          <CardDescription>Last 6 months trend</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={monthlyConfig}
            className="max-h-[260px] w-full"
          >
            <BarChart accessibilityLayer data={monthlyAppointments}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
              />
              <Bar
                dataKey="appointments"
                fill="var(--color-appointments)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
