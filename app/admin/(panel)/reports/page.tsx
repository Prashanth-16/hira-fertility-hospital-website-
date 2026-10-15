import type { Metadata } from "next"
import { FileSpreadsheet, FileText, Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/admin/page-header"
import { StatisticsCards } from "@/components/admin/statistics-cards"
import { ChartsSection } from "@/components/admin/charts-section"
import { ReportsTable } from "@/components/admin/reports-table"

export const metadata: Metadata = {
  title: "Reports — Hira Fertility Center",
}

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        description="Analytics and performance insights across appointments and branches."
      >
        <Button variant="outline" size="sm">
          <FileSpreadsheet data-icon="inline-start" />
          Export Excel
        </Button>
        <Button variant="outline" size="sm">
          <FileText data-icon="inline-start" />
          Export PDF
        </Button>
        <Button variant="outline" size="sm">
          <Printer data-icon="inline-start" />
          Print
        </Button>
      </PageHeader>

      <StatisticsCards />

      <ChartsSection />

      <ReportsTable />
    </>
  )
}
