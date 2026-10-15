import { HeartPulse } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  showText = true,
  size = "default",
}: {
  className?: string
  showText?: boolean
  size?: "default" | "lg"
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
          size === "lg" ? "size-11" : "size-9",
        )}
      >
        <HeartPulse className={size === "lg" ? "size-6" : "size-5"} />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-heading font-bold tracking-tight text-foreground",
              size === "lg" ? "text-lg" : "text-sm",
            )}
          >
            Hira Fertility
          </span>
          <span className="text-[0.7rem] font-medium text-muted-foreground">
            Center
          </span>
        </div>
      )}
    </div>
  )
}
