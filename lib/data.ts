export type AppointmentStatus = "pending" | "confirmed" | "cancelled" | "completed"

export type Appointment = {
  id?: string
  date: string
  status: AppointmentStatus
  branch: string
  patientName: string
  phone: string
  email: string
  doctor: string
  time: string
  notes: string
}

export const appointments: Appointment[] = []

export function formatCurrency(n: number) {
  return `$${n.toFixed(2)}`
}

export function getDashboardStats() {
  return { total: 0, today: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0, revenue: 0 }
}

export function getStatusBreakdown() {
  return [] as Array<{ key: string; status: AppointmentStatus; count: number }>
}

export function monthlyAppointments() {
  return [] as Array<{ month: string; count: number }>
}

export function getBranchStats(): Array<{
  branch: string
  today: number
  total: number
  doctors: number
  status: string
}> {
  return []
}

export function formatDate(d?: string) {
  if (!d) return ""
  try {
    const dt = new Date(d)
    return dt.toLocaleDateString()
  } catch {
    return String(d)
  }
}

export const BRANCHES = ["Main", "East"]
export const APPOINTMENT_STATUSES: AppointmentStatus[] = ["pending", "confirmed", "cancelled", "completed"]

export type Doctor = {
  id: string
  name: string
  specialty: string
  branch: string
  rating: number
  patients: number
  avatar?: string
  status: "Available" | "On Leave" | "Busy"
  email: string
  phone: string
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Md. Fazalunnisa",
    specialty: "Gynaecologist & Infertility Specialist",
    branch: "Toli Chowk",
    rating: 4.9,
    patients: 280,
    avatar: "/doctor-portrait.png",
    status: "Available",
    email: "fazalunnisa@hirafertility.com",
    phone: "+91 73372 25251",
  },
]

