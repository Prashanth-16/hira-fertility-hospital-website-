import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react"
import { Logo } from "./logo"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctor", href: "/doctor" },
  { label: "Services", href: "/services" },
  { label: "Pricing & Scans", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
]
const services = ["IVF Treatment", "ICSI", "IUI Treatment", "Laparoscopy", "Hysteroscopy", "Fertility Testing"]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16.5 7.5h.01" />
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 7.5a2.8 2.8 0 0 0-1.95-2.75C18.06 4.5 12 4.5 12 4.5s-6.06 0-8.05.25A2.8 2.8 0 0 0 2 7.5 28 28 0 0 0 2 16.5a2.8 2.8 0 0 0 1.95 2.75C5.94 19.5 12 19.5 12 19.5s6.06 0 8.05-.25A2.8 2.8 0 0 0 22 16.5V7.5Z" />
      <path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3.5C12.57 2 12 2.57 12 3.5V6H9.5a1 1 0 0 0-1 1V11H12v9h4v-9h3.25a1 1 0 0 0 1-1l.01-3.5A1 1 0 0 0 16.25 5H14V3.5C14 2.67 14.67 2 15.5 2H18Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="17" rx="2" />
      <line x1="7" y1="9" x2="7" y2="18" />
      <circle cx="7" cy="6" r="1" fill="currentColor" stroke="none" />
      <path d="M11 18v-5a2 2 0 0 1 2-2h3" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-14" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold">Hira Fertility</span>
              <span className="text-xs font-medium text-brand-foreground/70">Center</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-brand-foreground/75">
            Hyderabad Institute of Research &amp; Assisted Reproduction. Trusted fertility care with advanced
            treatments and compassionate support.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-brand-foreground/70">QUICK LINKS</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-brand-foreground/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-brand-foreground/70">SERVICES</h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a href="/services" className="text-sm text-brand-foreground/80 transition-colors hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-brand-foreground/70">CONTACT INFO</h3>
          <ul className="mt-5 space-y-4 text-sm text-brand-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand-foreground/60" />
              <span>
                8-1-351/A/11, 3rd Floor, Above TVS Showroom, Rahul Colony, Old Mumbai Hwy, Toli Chowki, Hyderabad,
                Telangana 500008
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-foreground/60" />
              <a href="tel:7337225251" className="transition-colors hover:text-white">
                +91 73372 25251
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-foreground/60" />
              <a href="mailto:info@hirafertility.com" className="transition-colors hover:text-white">
                info@hirafertility.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-brand-foreground/60" />
              <span>Mon - Sun: 10 AM - 7 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-brand-foreground/70 sm:flex-row sm:px-6 lg:px-8">
          <p>2024 Hira Fertility Center. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-4 w-4 fill-current text-brand-foreground/80" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  )
}