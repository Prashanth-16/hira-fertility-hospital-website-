"use client"

import {
  User,
  Phone,
  Mail,
  Building2,
  CalendarDays,
  Stethoscope,
  FileText,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { StatusBadge } from "@/components/admin/status-badge"
import { formatDate, type Appointment } from "@/lib/data"

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
        <Icon className="size-4 text-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  )
}

export function AppointmentDrawer({
  appointment,
  open,
  onOpenChange,
}: {
  appointment: Appointment | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="font-heading">Appointment Details</SheetTitle>
          <SheetDescription>
            {appointment
              ? `Reference ${appointment.id}`
              : "No appointment selected"}
          </SheetDescription>
        </SheetHeader>

        {appointment && (
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <StatusBadge status={appointment.status} />
            </div>
            <Separator />
            <div className="flex flex-col gap-4">
              <DetailRow
                icon={User}
                label="Patient Name"
                value={appointment.patientName}
              />
              <DetailRow
                icon={Phone}
                label="Phone Number"
                value={appointment.phone}
              />
              <DetailRow icon={Mail} label="Email" value={appointment.email} />
              <DetailRow
                icon={Building2}
                label="Branch"
                value={appointment.branch}
              />
              <DetailRow
                icon={Stethoscope}
                label="Doctor"
                value={appointment.doctor}
              />
              <DetailRow
                icon={CalendarDays}
                label="Appointment Date"
                value={`${formatDate(appointment.date)} · ${appointment.time}`}
              />
            </div>
            <Separator />
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                <FileText className="size-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Notes</span>
                <p className="text-sm leading-relaxed text-foreground text-pretty">
                  {appointment.notes}
                </p>
              </div>
            </div>
          </div>
        )}

        <SheetFooter className="grid grid-cols-1 gap-2 border-t border-border sm:grid-cols-3">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            disabled={appointment?.status === "confirmed"}
          >
            Confirm
          </Button>
          <Button
            className="bg-emerald-600 text-white hover:bg-emerald-700"
            disabled={appointment?.status === "completed"}
          >
            Complete
          </Button>
          <Button
            variant="destructive"
            disabled={appointment?.status === "cancelled"}
          >
            Cancel
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
