import { MapPin, Navigation, Phone } from "lucide-react"

type Branch = {
  name: string
  tag: string
  address: string
  phone: string
  mapQuery: string
  directionsUrl: string
}

const branches: Branch[] = [
  {
    name: "Toli Chowki",
    tag: "Main Branch",
    address:
      "8-1-351/A/11, 3rd Floor, Above TVS Showroom, Rahul Colony, Old Mumbai Hwy, Toli Chowk, Hyderabad, Telangana 500008",
    phone: "+91 73372 25251",
    mapQuery: "Hira Fertility Center Toli Chowk Hyderabad",
    directionsUrl: "https://maps.app.goo.gl/7CUts9JrVRfg8am66",
  },
  {
    name: "Shamshabad",
    tag: "Branch",
    address: "Shamshabad, Hyderabad, Telangana",
    phone: "+91 73372 25251",
    mapQuery: "Hira Fertility Center Shamshabad Hyderabad",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Hira+Fertility+Center+Shamshabad+Hyderabad",
  },
  {
    name: "Secunderabad",
    tag: "Branch",
    address: "Secunderabad, Hyderabad, Telangana",
    phone: "+91 73372 25251",
    mapQuery: "Hira Fertility Center Secunderabad Hyderabad",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Hira+Fertility+Center+Secunderabad+Hyderabad",
  },
]

export function BranchLocations() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Our Branches
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Three Locations Across Hyderabad
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Visit whichever branch is most convenient for you. Each center offers our full range of fertility care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border"
            >
              <iframe
                title={`Map of Hira Fertility Center ${branch.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-52 w-full border-0"
                allowFullScreen
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground">{branch.name}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {branch.tag}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-pretty">{branch.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                    {branch.phone}
                  </a>
                </div>

                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
