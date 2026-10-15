"use client"

import { useActionState, useEffect, useRef } from "react"
import { Send } from "lucide-react"
import { submitContactMessage, type ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = { success: false, message: "" }

const branches = ["Toli Chowk", "Shamshabad", "Secunderabad"]

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactMessage, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8">
      <h2 className="text-2xl font-bold text-foreground">BOOK A CONSULTATION</h2>
      <p className="mt-1 text-sm text-primary">Fill in the form and we&apos;ll get back to you shortly.</p>

      <form ref={formRef} action={formAction} className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter your phone number"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email (optional)"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="branch" className="text-sm font-medium text-foreground">
            Preferred Branch
          </label>
          <select
            id="branch"
            name="branch"
            defaultValue={branches[0]}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {state.message ? (
          <p
            role="status"
            className={`rounded-xl px-4 py-3 text-sm ${
              state.success
                ? "bg-primary/10 text-primary"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {isPending ? "Sending..." : "Book Appointment"}
        </button>
      </form>
    </div>
  )
}
