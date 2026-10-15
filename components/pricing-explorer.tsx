"use client"

import { useMemo, useState } from "react"
import { Search, Stethoscope, FlaskConical, TestTubes, Building2, type LucideIcon } from "lucide-react"

type PriceItem = { name: string; price: string }
type Category = {
  id: string
  title: string
  icon: LucideIcon
  accent: string // tailwind classes for icon tile
  items: PriceItem[]
}

const categories: Category[] = [
  {
    id: "general",
    title: "General Consultation & Scans",
    icon: Stethoscope,
    accent: "bg-brand text-brand-foreground shadow-brand/25",
    items: [
      { name: "Consultation Fee (15 Days)", price: "500" },
      { name: "USG (1 Day) / USG Scrotal", price: "600" },
      { name: "T.O.C", price: "800" },
      { name: "Follicular Study / Scanning (1 Cycle)", price: "1,500" },
      { name: "Basic Scan", price: "1,000" },
      { name: "Day 2 Scan", price: "200" },
      { name: "Early Pregnant Scan", price: "1,200" },
    ],
  },
  {
    id: "ivf",
    title: "IVF Lab Investigation / Procedures",
    icon: FlaskConical,
    accent: "bg-chart-3 text-brand-foreground shadow-chart-3/25",
    items: [
      { name: "IVF 1 Cycle", price: "1,80,000" },
      { name: "ICSI", price: "20,000" },
      { name: "Laser Charges", price: "15,000" },
      { name: "IMSI", price: "60,000" },
    ],
  },
  {
    id: "lab",
    title: "Lab Investigation",
    icon: TestTubes,
    accent: "bg-brand text-brand-foreground shadow-brand/25",
    items: [
      { name: "HIV I & II (Tri Dot)", price: "350" },
      { name: "HBS AG", price: "300" },
      { name: "VDRL", price: "300" },
      { name: "MX Test (Mount On)", price: "400" },
      { name: "CRP", price: "500" },
      { name: "RA Factor", price: "600" },
      { name: "BT, CT", price: "100" },
      { name: "Blood Group", price: "100" },
      { name: "RBS", price: "100" },
      { name: "Serum Creatinine", price: "200" },
      { name: "Blood Urea", price: "200" },
      { name: "Uric Acid", price: "300" },
      { name: "LFT", price: "700" },
      { name: "RFT", price: "700" },
      { name: "GTT", price: "500" },
      { name: "Lipid Profile", price: "600" },
      { name: "HB A1C", price: "500" },
      { name: "HB%", price: "100" },
      { name: "CBP", price: "300" },
      { name: "CUE", price: "150" },
      { name: "FSH", price: "500" },
      { name: "LH", price: "500" },
      { name: "PRL", price: "500" },
      { name: "TSH", price: "300" },
      { name: "T. Testosterone", price: "600" },
      { name: "AMH", price: "2,000" },
      { name: "E2", price: "600" },
      { name: "P4", price: "600" },
      { name: "B-HCG", price: "600" },
      { name: "UPT", price: "150" },
      { name: "TORCH Profile - 10 IgG & IgM", price: "3,500" },
      { name: "TB Gold", price: "2,500" },
      { name: "APTT", price: "600" },
      { name: "ACLA IgG & IgM", price: "2,000" },
      { name: "ANA", price: "800" },
      { name: "APLA IgG & IgM", price: "2,000" },
      { name: "Biopsy (Small)", price: "850" },
      { name: "Biopsy (Big)", price: "1,500" },
      { name: "TBPCR (Tissue)", price: "2,000" },
      { name: "Surgical Profile Major", price: "4,500" },
      { name: "Surgical Profile Minor", price: "3,500" },
      { name: "ECG", price: "300" },
      { name: "PIH Profile", price: "2,900" },
      { name: "BGH Profile", price: "3,500" },
      { name: "C-Reactive Protein (CRP)", price: "500" },
      { name: "ASO Titre", price: "600" },
      { name: "Chest X-Ray", price: "300" },
      { name: "Semen Analysis", price: "400" },
      { name: "ESR", price: "200" },
      { name: "Serum Electrolytes", price: "600" },
    ],
  },
  {
    id: "op",
    title: "OP Theatre / Labour Room",
    icon: Building2,
    accent: "bg-chart-3 text-brand-foreground shadow-chart-3/25",
    items: [
      { name: "Testicular Biopsy", price: "20,000" },
      { name: "D & C / DDC Under GA / SB (GA)", price: "15,000" },
      { name: "Cyst Aspiration", price: "6,000" },
      { name: "Intra Uterine Insemination IUI Single", price: "8,000" },
      { name: "IUI Double (Process)", price: "12,000" },
      { name: "IUI-D Single (Process)", price: "30,000" },
      { name: "IUI-D Double (Process)", price: "12,000" },
      { name: "Cerclage / Evacuation & Curettage", price: "16,000" },
      { name: "Hysteroscopy (With Medicines)", price: "30,000" },
      { name: "Diagnostic Laparoscopy & Hysteroscopy", price: "45,000" },
      { name: "Hydrocele", price: "20,000" },
      { name: "Varicocele", price: "50,000" },
      { name: "Thrombophilia Panel", price: "18,000" },
      { name: "Myomectomy / Re-Canalisation", price: "60,000" },
      { name: "IUI Scheme (Without Medicines) 3 Cycles", price: "22,000" },
      { name: "Diagnostic Laparoscopy PCOD DD", price: "65,000" },
      { name: "Operative Laparoscopy", price: "40,000 – 60,000" },
    ],
  },
]

export function PricingExplorer() {
  const [query, setQuery] = useState("")
  const [activeId, setActiveId] = useState<string | "all">("all")

  const trimmed = query.trim().toLowerCase()

  const visibleCategories = useMemo(() => {
    return categories
      .filter((c) => activeId === "all" || c.id === activeId)
      .map((c) => ({
        ...c,
        items: trimmed
          ? c.items.filter((i) => i.name.toLowerCase().includes(trimmed))
          : c.items,
      }))
      .filter((c) => c.items.length > 0)
  }, [activeId, trimmed])

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Search */}
      <div className="mx-auto max-w-xl">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tests, procedures, scans..."
            aria-label="Search tests, procedures and scans"
            className="w-full rounded-full border border-border bg-card py-3.5 pl-12 pr-4 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveId("all")}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            activeId === "all"
              ? "bg-brand text-brand-foreground shadow-lg shadow-brand/25"
              : "border border-border bg-card text-foreground/80 hover:border-brand hover:text-brand"
          }`}
        >
          All Services
        </button>
        {categories.map((c) => {
          const Icon = c.icon
          const active = activeId === c.id
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "bg-brand text-brand-foreground shadow-lg shadow-brand/25"
                  : "border border-border bg-card text-foreground/80 hover:border-brand hover:text-brand"
              }`}
            >
              <Icon className="h-4 w-4" />
              {c.title}
            </button>
          )
        })}
      </div>

      {/* Category cards */}
      <div className="mt-12 space-y-10">
        {visibleCategories.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No results found for {`"${query}"`}. Try a different search term.
          </p>
        )}

        {visibleCategories.map((c) => {
          const Icon = c.icon
          return (
            <div
              key={c.id}
              className="overflow-hidden rounded-3xl border border-border/70 bg-brand-soft p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-md ${c.accent}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {c.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{c.items.length} items</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-border/50 py-3 text-sm"
                  >
                    <span className="text-foreground/85">{item.name}</span>
                    <span className="shrink-0 font-semibold text-brand">
                      <span className="font-sans">₹</span> {item.price}/-
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
