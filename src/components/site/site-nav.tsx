"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Search, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KMark } from "@/components/site/k-mark"
import { siteNavLinks } from "@/lib/site-nav-data"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b bg-background/95 px-8 backdrop-blur supports-backdrop-filter:bg-background/80 sm:px-10">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <KMark className="h-4 w-4 text-foreground" />
        <span className="text-sm font-semibold tracking-tight">Keos</span>
      </Link>
      <nav className="flex items-center justify-center gap-5 overflow-x-auto font-mono text-xs tracking-widest whitespace-nowrap text-muted-foreground uppercase">
        {siteNavLinks.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
          return (
            <Link
              key={link.id}
              href={link.href}
              className={active ? "text-foreground" : "hover:text-foreground"}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
      <div className="flex shrink-0 items-center gap-2.5">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search..." className="w-40 rounded-full pl-8" />
        </div>
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Contact">
          <Mail className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          nativeButton={false}
          className="gap-1.5 rounded-full px-4"
          render={<Link href="/studio" />}
        >
          Explore Design System
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </header>
  )
}
