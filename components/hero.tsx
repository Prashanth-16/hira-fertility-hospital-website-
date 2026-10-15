"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Calendar, ArrowRight, BadgeCheck, HeartHandshake, Baby, Sparkles } from "lucide-react"
import { Logo } from "./logo"

const badges = ["MBBS, DGO (MRCOG)", "ISO Certified", "Mon–Sun Open"]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // rAF-throttled scroll progress relative to the hero
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current
        if (el) {
          const rect = el.getBoundingClientRect()
          // 0 at top of viewport, grows as user scrolls past
          setScrollY(Math.min(Math.max(-rect.top, 0), 600))
        }
        raf = 0
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -10, y: px * 12 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const p = scrollY / 600 // 0 → 1 scroll progress

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-background to-background"
    >
      {/* Layered premium background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: "radial-gradient(60% 55% at 80% 22%, oklch(0.9 0.09 345) 0%, transparent 62%)",
            transform: `translateY(${p * 60}px)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "radial-gradient(45% 45% at 12% 85%, oklch(0.93 0.06 30) 0%, transparent 60%)",
            transform: `translateY(${p * -40}px)`,
          }}
        />
        {/* Floating glow orbs at varying depths */}
        <div
          className="absolute right-[6%] top-24 h-40 w-40 rounded-full bg-brand/25 blur-3xl"
          style={{ transform: `translate3d(0, ${p * -120}px, 0)` }}
        />
        <div
          className="absolute left-[10%] top-1/2 h-56 w-56 rounded-full bg-brand/15 blur-3xl"
          style={{ transform: `translate3d(0, ${p * 90}px, 0)` }}
        />
        {/* Subtle dotted texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(oklch(0.4 0.18 356) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24"
        style={{ perspective: "1400px" }}
      >
        {/* Copy column — subtle parallax lift */}
        <div style={{ transform: `translateY(${p * -30}px)` }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-sm font-medium text-brand shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Trusted Fertility Care in Hyderabad
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Your Journey to <span className="text-brand">Parenthood</span> Starts Here
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            At Hira Fertility Center we combine advanced reproductive technology with compassionate,
            personalised care — helping you build the family you have always dreamed of.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:border-brand hover:text-brand"
            >
              Our Services
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 h-px w-full max-w-md bg-border" />

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <BadgeCheck className="h-4 w-4 text-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* 3D image stage */}
        <div
          className="relative mx-auto w-full max-w-lg"
          style={{ perspective: "1400px", transform: `translateY(${p * 40}px)` }}
          onPointerMove={onPointerMove}
          onPointerLeave={resetTilt}
        >
          <div
            className="relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]"
            style={{
              transform: `rotateX(${tilt.x + p * 4}deg) rotateY(${tilt.y}deg) rotateZ(${p * -1.5}deg)`,
            }}
          >
            {/* Soft glow behind card */}
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-brand/25 blur-3xl"
              style={{ transform: "translateZ(-80px)" }}
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/25 ring-1 ring-white/40">
              <Image
                src="/hero-mother-baby.png"
                alt="Mother tenderly holding her newborn baby"
                width={640}
                height={720}
                priority
                className="h-[26rem] w-full object-cover sm:h-[32rem]"
              />
              {/* subtle top sheen */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(150deg, rgba(255,255,255,0.25), transparent 40%)" }}
                aria-hidden="true"
              />

              <div
                className="absolute right-5 top-5 rounded-2xl bg-brand px-5 py-3 text-center text-brand-foreground shadow-lg"
                style={{ transform: "translateZ(60px)" }}
              >
                <p className="font-display text-2xl font-bold leading-none">200+</p>
                <p className="mt-1 text-[0.65rem] font-semibold tracking-widest">HAPPY FAMILIES</p>
              </div>

              <div
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-background/95 px-4 py-3 shadow-lg backdrop-blur"
                style={{ transform: "translateZ(50px)" }}
              >
                <Logo className="h-11 w-14 shrink-0" />
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Hira Fertility Center</p>
                  <p className="text-xs text-muted-foreground">HIRA — Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Floating 3D glass chips */}
            <div
              className="absolute -left-6 top-1/3 flex items-center gap-2 rounded-2xl border border-white/50 bg-background/80 px-4 py-3 shadow-xl backdrop-blur-md"
              style={{ transform: `translateZ(110px) translateY(${p * -24}px)` }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <div className="pr-1">
                <p className="font-display text-sm font-bold leading-none text-foreground">98%</p>
                <p className="mt-0.5 text-[0.7rem] text-muted-foreground">Care rating</p>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-24 flex items-center gap-2 rounded-2xl border border-white/50 bg-background/80 px-4 py-3 shadow-xl backdrop-blur-md"
              style={{ transform: `translateZ(90px) translateY(${p * 20}px)` }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Baby className="h-5 w-5" />
              </span>
              <div className="pr-1">
                <p className="font-display text-sm font-bold leading-none text-foreground">15+ yrs</p>
                <p className="mt-0.5 text-[0.7rem] text-muted-foreground">Expertise</p>
              </div>
            </div>

            <div
              className="absolute -top-5 left-10 flex items-center gap-1.5 rounded-full border border-white/50 bg-background/80 px-3 py-1.5 text-xs font-semibold text-brand shadow-lg backdrop-blur-md"
              style={{ transform: `translateZ(130px) translateY(${p * -32}px)` }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Advanced IVF Lab
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
