"use client";

import {
  ArrowRight,
  Award,
  Users,
  Sparkles,
  HeartHandshake,
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  HeartPulse,
  Gem,
  Briefcase,
  TrendingUp,
  Quote,
  Phone,
  CalendarCheck,
  Link2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LeadershipPage() {
  return (
    <>
      <SiteHeader />

      <main className="relative w-full overflow-hidden bg-white">
        {/* SECTION 1 — LUXURY HERO */}
        <section className="relative isolate flex min-h-[70vh] w-full items-center justify-center px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-pink-50 via-white to-white" />
          <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#E91E63]/20 to-pink-200/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-pink-300/20 to-[#E91E63]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl" />

          <div className="pointer-events-none absolute top-24 left-[12%] -z-10 h-3 w-3 rounded-full bg-[#E91E63]/40 animate-pulse" />
          <div className="pointer-events-none absolute top-1/2 right-[15%] -z-10 h-4 w-4 rounded-full bg-pink-300/50 animate-pulse [animation-delay:0.5s]" />
          <div className="pointer-events-none absolute bottom-20 left-[20%] -z-10 h-2 w-2 rounded-full bg-[#E91E63]/50 animate-pulse [animation-delay:1s]" />

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-5 py-2 text-sm font-medium tracking-wide text-[#E91E63] backdrop-blur-sm shadow-sm">
              <Sparkles className="h-4 w-4" />
              Hira Fertility Center
            </span>

            <h1 className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-[#E91E63] bg-clip-text font-serif text-5xl font-semibold leading-tight tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Leadership Team
            </h1>

            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-neutral-500 sm:text-xl">
              Meet the visionary leaders driving Hira Fertility Center with
              excellence, compassion and innovation.
            </p>
          </div>
        </section>

        {/* SECTION 2 — LEADERSHIP CARDS */}
        <section className="relative w-full px-6 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
            <LeadershipCard
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              name="Mr. Arjun Mehta"
              role="CEO & Managing Director"
              qualification="Entrepreneur | Healthcare Visionary"
              bio="With over two decades of experience building patient-first healthcare institutions, Arjun leads Hira Fertility Center's mission to blend clinical excellence with genuine human care. His leadership philosophy centers on trust, transparency and innovation at every step of the patient journey."
              tags={[
                { icon: Briefcase, label: "Experience" },
                { icon: Users, label: "Leadership" },
                { icon: Lightbulb, label: "Innovation" },
                { icon: HeartHandshake, label: "Patient First Vision" },
              ]}
              quote="Healthcare begins with trust. Our mission is to make world-class fertility care accessible with compassion and integrity."
            />

            <LeadershipCard
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              name="Ms. Priya Sharma"
              role="Managing Director"
              qualification="Business Strategist"
              bio="Priya brings a rare combination of strategic rigor and empathetic leadership to Hira Fertility Center. She oversees operational excellence and sustainable growth, ensuring every family who walks through our doors receives care that is both clinically superior and deeply personal."
              tags={[
                { icon: TrendingUp, label: "Operations" },
                { icon: Target, label: "Growth" },
                { icon: Gem, label: "Quality" },
                { icon: HeartPulse, label: "Patient Experience" },
              ]}
              quote="Every family deserves hope. We are committed to delivering excellence in every patient journey."
            />
          </div>
        </section>

        {/* SECTION 3 — VISION SECTION */}
        <section className="relative w-full px-6 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-pink-50/60 via-white to-white" />

          <div className="mx-auto max-w-5xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
              Our Purpose
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-neutral-900 sm:text-5xl">
              Leading with Purpose
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            <PurposeCard
              icon={Target}
              title="Mission"
              text="To provide compassionate, ethical and world-class fertility care, empowering every individual and couple on their journey to parenthood with dignity, hope and cutting-edge medical excellence."
            />
            <PurposeCard
              icon={Eye}
              title="Vision"
              text="To be recognized as the most trusted fertility care institution, known for pioneering innovation, exceptional outcomes and an unwavering commitment to every family we serve."
            />
          </div>
        </section>

        {/* SECTION 4 — VALUES */}
        <section className="relative w-full px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
              What Drives Us
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-neutral-900 sm:text-5xl">
              Our Core Values
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={ShieldCheck}
              title="Integrity"
              text="Honest, ethical care in every decision we make."
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              text="Advanced fertility science delivered with precision."
            />
            <ValueCard
              icon={HeartHandshake}
              title="Compassion"
              text="Warmth and empathy at every step of your journey."
            />
            <ValueCard
              icon={Award}
              title="Excellence"
              text="Uncompromising quality in outcomes and experience."
            />
          </div>
        </section>

        {/* SECTION 5 — CALL TO ACTION */}
        <section className="relative w-full px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#E91E63] via-[#d81b60] to-[#ad1457] px-8 py-16 text-center shadow-2xl shadow-pink-300/40 sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
                Let&apos;s Build Hope Together
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-pink-50/90">
                Discover how our leadership and medical excellence are
                transforming fertility care.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-[#E91E63] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto">
                  <CalendarCheck className="h-4 w-4" />
                  Book Consultation
                </button>
                <button className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-white/50 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

/* ===================================================== */
/* Reusable Components                                    */
/* ===================================================== */

type Tag = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

function LeadershipCard({
  image,
  name,
  role,
  qualification,
  bio,
  tags,
  quote,
}: {
  image: string;
  name: string;
  role: string;
  qualification: string;
  bio: string;
  tags: Tag[];
  quote: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-br from-[#E91E63] via-pink-400 to-pink-200 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />

      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-pink-200 via-pink-100 to-white p-[1.5px] shadow-lg shadow-pink-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-pink-200/60">
        <div className="flex h-full flex-col rounded-[2.5rem] bg-white/80 p-8 backdrop-blur-xl sm:p-10">
          <div className="relative mx-auto mb-6 h-40 w-40 shrink-0 sm:h-44 sm:w-44">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E91E63] to-pink-300 opacity-70 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src={image}
              alt={name}
              className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-lg"
            />
            <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#E91E63] text-white shadow-md">
              <Award className="h-4 w-4" />
            </span>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">
              {name}
            </h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#E91E63]">
              {role}
            </p>
            <p className="mt-1 text-sm text-neutral-400">{qualification}</p>
          </div>

          <p className="mt-6 text-center text-[15px] leading-relaxed text-neutral-500">
            {bio}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 bg-pink-50/70 px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors duration-300 group-hover:border-pink-200 group-hover:bg-pink-100/70"
              >
                <Icon className="h-3.5 w-3.5 text-[#E91E63]" />
                {label}
              </span>
            ))}
          </div>

          <div className="relative mt-8 rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50 to-white p-6">
            <Quote className="absolute -top-3 left-6 h-6 w-6 rotate-180 text-[#E91E63]/40" />
            <p className="text-center text-sm italic leading-relaxed text-neutral-600">
              &ldquo;{quote}&rdquo;
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-pink-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-md">
              <Link2 className="h-4 w-4" />
              LinkedIn
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#E91E63] px-5 py-3 text-sm font-medium text-white shadow-md shadow-pink-200 transition-all duration-300 hover:bg-[#d81b60] hover:shadow-lg">
              Know More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PurposeCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-pink-100 bg-white/70 p-8 text-center shadow-sm shadow-pink-100/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-200/40">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E91E63] to-pink-400 shadow-lg shadow-pink-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="font-serif text-2xl font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
        {text}
      </p>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-pink-100 bg-white p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-200/40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#E91E63] group-hover:to-pink-400">
        <Icon className="h-6 w-6 text-[#E91E63] transition-colors duration-500 group-hover:text-white" />
      </div>
      <h4 className="relative font-serif text-lg font-semibold text-neutral-900">
        {title}
      </h4>
      <p className="relative mt-2 text-sm leading-relaxed text-neutral-500">
        {text}
      </p>
    </div>
  );
}