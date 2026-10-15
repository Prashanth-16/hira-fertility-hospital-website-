"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Play, ArrowRight, X } from "lucide-react"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const CHANNEL_URL = "https://youtube.com/@hirafertilitycenter"
const INSTAGRAM_URL = "https://www.instagram.com/hirafertility/"
const FACEBOOK_URL = "https://www.facebook.com/HiraFertilityCenter/"

const videos = [
  {
    tag: "IVF BASICS",
    image: "/video-ivf.png",
    title: "What Is IVF? A Complete Guide",
    description: "A comprehensive walkthrough of the IVF process — from stimulation to embryo transfer.",
    videoId: "y0Fm_514N7Y",
  },
  {
    tag: "COMPARISON",
    image: "/video-icsi.png",
    title: "ICSI vs IVF — Which Is Right for You?",
    description: "Understanding the key differences between ICSI and IVF to help guide your fertility journey.",
    videoId: "EnyZkKeoeuA",
  },
  {
    tag: "TYPES IN IVF",
    image: "/video-types.png",
    title: "Types In IVF",
    description:
      "In Vitro Fertilization (IVF) can be broadly categorized into three main types, each tailored to different reproductive needs.",
    videoId: "nfm8a6cjP0A",
  },
]

export function EducationHub() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null)

  useEffect(() => {
    if (!activeVideo) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeVideo])

  return (
    <section className="bg-brand-dark py-20 text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-foreground/70">LEARN &amp; UNDERSTAND</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your Fertility <span className="text-white/70">Education Hub</span>
          </h2>
          <p className="mt-4 text-lg text-brand-foreground/80">
            Knowledge is the first step on your journey. Watch these expert guides to better understand your options.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.title}
              className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-transform hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Play video: ${video.title}`}
                className="group relative block w-full"
              >
                <Image
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  width={480}
                  height={300}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold tracking-wide">
                  {video.tag}
                </span>
                <span className="absolute inset-0 flex items-center justify-center bg-brand-dark/30 transition-colors group-hover:bg-brand-dark/10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                  </span>
                </span>
              </button>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{video.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-foreground/75">{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand transition-transform hover:-translate-y-0.5"
          >
            <YoutubeIcon className="h-5 w-5" />
            Explore Our Channel
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Hira Fertility on Instagram"
            className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl p-8 ring-1 ring-white/10 transition-transform hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg, #833ab4 0%, #c13584 35%, #e1306c 60%, #fd1d1d 80%, #fcb045 100%)",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <InstagramIcon className="h-7 w-7 text-white" />
              </span>
              <ArrowRight className="h-6 w-6 text-white/80 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white/80">FOLLOW US ON</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">Instagram</h3>
              <p className="mt-2 text-white/90">@hirafertility</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Patient stories, fertility tips, and behind-the-scenes moments from our clinic.
              </p>
            </div>
          </a>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Hira Fertility on Facebook"
            className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl bg-[#1877f2] p-8 ring-1 ring-white/10 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <FacebookIcon className="h-7 w-7 text-white" />
              </span>
              <ArrowRight className="h-6 w-6 text-white/80 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white/80">FOLLOW US ON</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">Facebook</h3>
              <p className="mt-2 text-white/90">Hira Fertility Center</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Community updates, success celebrations, and the latest news from Hira Fertility Center.
              </p>
            </div>
          </a>
        </div>
      </div>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform hover:scale-105 sm:-top-4 sm:-right-4"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                key={activeVideo.videoId}
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
