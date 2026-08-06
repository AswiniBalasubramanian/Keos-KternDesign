"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KMark } from "@/components/site/k-mark"
import { siteNavLinks } from "@/lib/site-nav-data"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="flex h-16 w-full items-center justify-between gap-4 border-b px-6">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <KMark className="h-4 w-4 text-foreground" />
        <span className="text-sm font-semibold tracking-tight">Keos</span>
      </Link>
      <nav className="flex flex-1 items-center gap-5 overflow-x-auto font-mono text-xs tracking-widest whitespace-nowrap text-muted-foreground uppercase">
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
      <Button
        variant="default"
        nativeButton={false}
        className="shrink-0 gap-1.5 rounded-full px-4"
        render={<Link href="/studio" />}
      >
        Explore Design System
        <ChevronRight className="h-3.5 w-3.5" />
      </Button>
    </header>
  )
}
