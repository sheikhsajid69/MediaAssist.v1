"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Stethoscope,
  Activity,
  FileText,
  MessageSquare,
  Calendar,
  Settings,
  Users,
  Brain,
  BadgeAlert
} from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ElementType
  }[]
}

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const items = [
    {
      title: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Patient Records",
      href: "/patients",
      icon: Users,
    },
    {
      title: "Medical Coding",
      href: "/coding",
      icon: FileText,
    },
    {
      title: "AI Transcription",
      href: "/transcription",
      icon: MessageSquare,
    },
    {
      title: "Health Analytics",
      href: "/analytics",
      icon: Activity,
    },
    {
      title: "Diagnostics",
      href: "/diagnostics",
      icon: Stethoscope,
    },
    {
      title: "AI Insights",
      href: "/insights",
      icon: Brain,
    },
    {
      title: "Appointments",
      href: "/appointments",
      icon: Calendar,
    },
    {
      title: "Alerts",
      href: "/alerts",
      icon: BadgeAlert,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="group flex flex-col h-screen border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="w-8 h-8 rounded-md flex items-center justify-center bg-primary text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
          </span>
          <span className="hidden md:inline">Medical AI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <SidebarNav items={items} className="px-2" />
      </div>
    </div>
  )
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-1", className)} {...props}>
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start gap-2"
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden md:inline-flex">{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}
