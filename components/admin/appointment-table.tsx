"use client"

import { useMemo, useState, type ChangeEvent } from "react"
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  CalendarX,
} from "lucide-react"

import {
  Card,
  CardContent,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/admin/status-badge"
import { AppointmentDrawer } from "@/components/admin/appointment-drawer"
import {
  appointments as allAppointments,
  BRANCHES,
  APPOINTMENT_STATUSES,
  formatDate,
  type Appointment,
} from "@/lib/data"

const PAGE_SIZE = 6

export function AppointmentTable({
  title = "Recent Appointments",
  pageSize = PAGE_SIZE,
}: {
  title?: string
  pageSize?: number
}) {
  const [query, setQuery] = useState("")
  const [branch, setBranch] = useState("all")
  const [status, setStatus] = useState("all")
  const [date, setDate] = useState("")
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Appointment | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const filtered = useMemo(() => {
    return allAppointments.filter((a) => {
      const matchesQuery = a.patientName
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesBranch = branch === "all" || a.branch === branch
      const matchesStatus = status === "all" || a.status === status
      const matchesDate = !date || a.date === date
      return matchesQuery && matchesBranch && matchesStatus && matchesDate
    })
  }, [query, branch, status, date])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const paged = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  function resetPage<T>(setter: (v: T) => void) {
    return (value: T) => {
      setter(value)
      setPage(1)
    }
  }

  function handleView(appointment: Appointment) {
    setSelected(appointment)
    setDrawerOpen(true)
  }

  return (
    <Card className="rounded-2xl border-border/60 shadow-sm">
      <CardHeader className="gap-4">
        <div className="flex flex-col gap-1">
          <CardTitle className="font-heading text-base">{title}</CardTitle>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative lg:max-w-xs lg:flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by patient name..."
              value={query}
              onChange={(e: ChangeEvent<HTMLInputElement>) => resetPage(setQuery)(e.target.value)}
              className="h-9 pl-9"
              aria-label="Search by patient name"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select value={branch} onValueChange={resetPage(setBranch)}>
              <SelectTrigger className="h-9 w-[140px]" aria-label="Filter by branch">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                {BRANCHES.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={status} onValueChange={resetPage(setStatus)}>
              <SelectTrigger className="h-9 w-[130px]" aria-label="Filter by status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {APPOINTMENT_STATUSES.map((s) => (
                  <SelectItem key={s} value={s} className="capitalize">
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={date}
              onChange={(e: ChangeEvent<HTMLInputElement>) => resetPage(setDate)(e.target.value)}
              className="h-9 w-[150px]"
              aria-label="Filter by date"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {paged.length === 0 ? (
          <Empty className="border-none py-12">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <CalendarX />
              </EmptyMedia>
              <EmptyTitle>No appointments found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or filters to find what you&apos;re
                looking for.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("")
                  setBranch("all")
                  setStatus("all")
                  setDate("")
                  setPage(1)
                }}
              >
                Clear filters
              </Button>
            </EmptyContent>
          </Empty>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Patient Name</TableHead>
                  <TableHead className="max-lg:hidden">Phone</TableHead>
                  <TableHead className="max-xl:hidden">Email</TableHead>
                  <TableHead className="max-md:hidden">Branch</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paged.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {a.patientName}
                        </span>
                        <span className="text-xs text-muted-foreground lg:hidden">
                          {a.phone}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="max-lg:hidden text-muted-foreground">
                      {a.phone}
                    </TableCell>
                    <TableCell className="max-xl:hidden text-muted-foreground">
                      {a.email}
                    </TableCell>
                    <TableCell className="max-md:hidden text-muted-foreground">
                      {a.branch}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex flex-col">
                        <span>{formatDate(a.date)}</span>
                        <span className="text-xs text-muted-foreground/70">
                          {a.time}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={a.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              aria-label="Row actions"
                            >
                              <MoreHorizontal />
                            </Button>
                          }
                        />
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleView(a)}>
                            <Eye />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            <Trash2 />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              Showing {(currentPage - 1) * pageSize + 1}–
              {Math.min(currentPage * pageSize, filtered.length)} of{" "}
              {filtered.length} appointments
            </p>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft data-icon="inline-start" />
                Previous
              </Button>
              <span className="px-2 text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
                <ChevronRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <AppointmentDrawer
        appointment={selected}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </Card>
  )
}
