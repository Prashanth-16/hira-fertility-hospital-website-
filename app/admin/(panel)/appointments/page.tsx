import type { Metadata } from "next"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/admin/page-header"
import { AppointmentTable } from "@/components/admin/appointment-table"

export const metadata: Metadata = {
  title: "Appointments — Hira Fertility Center",
}

export default function AppointmentsPage() {
  return (
    <>
      <PageHeader
        title="Appointments"
        description="Search, filter and manage every appointment across your branches."
      >
        <Button size="sm">
          <Plus data-icon="inline-start" />
          New Appointment
        </Button>
      </PageHeader>

      <AppointmentTable title="All Appointments" pageSize={8} />
    </>
  )
}
