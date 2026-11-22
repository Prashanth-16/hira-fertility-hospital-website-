"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function AddDoctorDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [name, setName] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [branch, setBranch] = useState("Toli Chowk")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <Sheet>
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
        <SheetContent className="relative w-full max-w-md rounded-2xl bg-background p-6 shadow-xl border border-border">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-lg font-bold text-foreground">Add New Doctor</SheetTitle>
            <SheetDescription className="text-sm text-muted-foreground">
              Enter doctor details to add them to the team roster.
            </SheetDescription>
          </SheetHeader>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">Doctor Name</label>
              <Input
                placeholder="Dr. Full Name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">Specialty</label>
              <Input
                placeholder="e.g. Senior Embryologist"
                value={specialty}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSpecialty(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">Branch</label>
              <Input
                placeholder="e.g. Toli Chowk"
                value={branch}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBranch(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">Email</label>
              <Input
                type="email"
                placeholder="doctor@hirafertility.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">Phone</label>
              <Input
                type="tel"
                placeholder="+91 ..."
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              />
            </div>

            <SheetFooter className="mt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Doctor</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </div>
    </Sheet>
  )
}
