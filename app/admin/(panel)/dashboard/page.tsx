import type { Metadata } from "next"
import { Plus, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/admin/page-header"
import { DashboardCards } from "@/components/admin/dashboard-cards"
import { AppointmentTable } from "@/components/admin/appointment-table"

export const metadata: Metadata = {
  title: "Dashboard — Hira Fertility Center",
}

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of appointments, activity and performance across all branches."
      >
        <Button variant="outline" size="sm">
          <Download data-icon="inline-start" />
          Export
        </Button>
        <Button size="sm">
          <Plus data-icon="inline-start" />
          New Appointment
        </Button>
      </PageHeader>

      <DashboardCards />

      <AppointmentTable />
    </>
  )
}
