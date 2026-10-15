import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getBranchStats } from "@/lib/data"

export function ReportsTable() {
  const branchStats = getBranchStats()

  return (
    <Card className="rounded-2xl border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="font-heading text-base">
          Branch-wise Statistics
        </CardTitle>
        <CardDescription>
          Appointment and staffing summary per branch
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Branch</TableHead>
                <TableHead className="text-right">Today</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Doctors</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {branchStats.map((b) => (
                <TableRow key={b.branch}>
                  <TableCell className="font-medium text-foreground">
                    {b.branch}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {b.today}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {b.total}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {b.doctors}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      {b.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
