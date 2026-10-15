"use client"

import Link from "next/link"
import { Bell, Search, LogOut, User, Settings } from "lucide-react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const notifications = [
  {
    title: "New appointment request",
    desc: "Priya Nair booked at Mehdipatnam",
    time: "5m ago",
  },
  {
    title: "Appointment confirmed",
    desc: "Dr. Sana Reddy confirmed Ayesha Khan",
    time: "1h ago",
  },
  {
    title: "Cancellation",
    desc: "Zoya Sheikh cancelled her appointment",
    time: "3h ago",
  },
]

export function AdminNavbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
      <SidebarTrigger className="text-muted-foreground" />
      <Separator orientation="vertical" className="h-6 max-md:hidden" />

      <div className="relative w-full max-w-sm max-md:max-w-none">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search patients, appointments..."
          className="h-9 w-full rounded-lg bg-muted/50 pl-9"
          aria-label="Search"
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-lg"
                aria-label="Notifications"
              >
                <Bell className="size-5 text-muted-foreground" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="text-sm font-semibold text-foreground">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {notifications.map((n) => (
                <DropdownMenuItem
                  key={n.title}
                  className="flex flex-col items-start gap-0.5 py-2"
                >
                  <span className="text-sm font-medium text-foreground">
                    {n.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {n.desc}
                  </span>
                  <span className="text-[0.7rem] text-muted-foreground/70">
                    {n.time}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                className="h-10 gap-2 rounded-lg pl-1.5 pr-2"
                aria-label="Account menu"
              >
                <Avatar className="size-7">
                  <AvatarImage src="/admin-avatar.png" alt="Admin" />
                  <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                    HA
                  </AvatarFallback>
                </Avatar>
                <span className="flex flex-col items-start leading-tight max-md:hidden">
                  <span className="text-sm font-medium text-foreground">
                    Hira Admin
                  </span>
                  <span className="text-[0.7rem] text-muted-foreground">
                    Administrator
                  </span>
                </span>
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="text-foreground">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem render={<Link href="/admin/settings" />}>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href="/admin/settings" />}>
                <Settings />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              render={<Link href="/admin/login" />}
            >
              <LogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
