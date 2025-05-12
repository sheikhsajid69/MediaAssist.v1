"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserAccountNav, NotificationsButton } from "@/components/user-account-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Globe } from "lucide-react"

export function Header() {
  // For demo purposes
  const user = {
    name: "Dr. Ahmed Al-Farsi",
    email: "ahmed.alfarsi@hospital.sa",
    image: ""
  }

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search medical records, patients..."
            className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <NotificationsButton />
        <ModeToggle />
        <UserAccountNav user={user} />
      </div>
    </header>
  )
}

function LanguageToggle() {
  return (
    <Button variant="ghost" size="icon" className="relative" aria-label="Toggle Language">
      <Globe className="h-5 w-5" />
    </Button>
  )
}
