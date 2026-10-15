import type { Metadata } from "next"
import { LoginForm } from "@/components/admin/login-form"
import { Logo } from "@/components/admin/logo"

export const metadata: Metadata = {
  title: "Admin Login — Hira Fertility Center",
}

export default function LoginPage() {
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col gap-8 p-6 md:p-10">
        <Logo size="lg" />
        <div className="flex flex-1 items-center justify-center">
          <LoginForm />
        </div>
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Hira Fertility Center. All rights
          reserved.
        </p>
      </div>

      {/* Right: hero image */}
      <div className="relative hidden overflow-hidden bg-muted lg:block">
        <img
          src="/fertility-login.png"
          alt="Calm modern interior of Hira Fertility Center"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/5 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 rounded-2xl bg-background/85 p-6 shadow-lg backdrop-blur-sm">
          <p className="font-heading text-lg font-semibold text-foreground text-balance">
            Compassionate fertility care, thoughtfully managed.
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
            Manage appointments, doctors, and branches across Hyderabad from one
            secure dashboard.
          </p>
        </div>
      </div>
    </main>
  )
}
