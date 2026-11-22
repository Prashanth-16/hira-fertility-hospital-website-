"use client"

import { useMemo, useState, type ChangeEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { doctors as allDoctors, type Doctor } from "@/lib/data"
import { Search, Star, Stethoscope, Mail, Phone, Plus } from "lucide-react"
import { AddDoctorDialog } from "./add-doctor-dialog"

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <Avatar className="size-14 border">
            <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
            <AvatarFallback className="bg-accent text-accent-foreground">
              {doctor.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <p className="font-heading font-semibold leading-tight">{doctor.name}</p>
              <Badge
                variant="secondary"
                className={
                  doctor.status === "Available"
                    ? "border-transparent bg-emerald-500/12 text-emerald-700 dark:text-emerald-300"
                    : "border-transparent bg-muted text-muted-foreground"
                }
              >
                {doctor.status}
              </Badge>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Stethoscope className="size-3.5" />
              {doctor.specialty}
            </p>
            <div className="flex items-center gap-1 text-sm">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              <span className="font-medium">{doctor.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">· {doctor.patients} patients</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 border-t pt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 truncate">
            <Mail className="size-3.5 shrink-0" />
            {doctor.email}
          </span>
          <span className="flex items-center gap-2">
            <Phone className="size-3.5 shrink-0" />
            {doctor.phone}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{doctor.branch}</Badge>
          <Button variant="ghost" size="sm">
            View profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function DoctorsGrid() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allDoctors
    return allDoctors.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.branch.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search doctors..."
            className="pl-9"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setOpen(true)}>
          <Plus data-icon="inline-start" />
          Add doctor
        </Button>
      </div>

      {filtered.length === 0 ? (
        <Empty className="rounded-xl border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Stethoscope />
            </EmptyMedia>
            <EmptyTitle>No doctors found</EmptyTitle>
            <EmptyDescription>Try a different search term.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}

      <AddDoctorDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}
