"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Mail, ChevronDown, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KMark } from "@/components/site/k-mark"
import { KternMark } from "@/components/site/ktern-mark"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { siteNavLinks } from "@/lib/site-nav-data"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b bg-background/95 px-8 backdrop-blur supports-backdrop-filter:bg-background/80 sm:px-10">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <KMark className="h-7 w-7 text-foreground" />
        <span className="text-muted-foreground/60 text-base font-light">+</span>
        <KternMark className="h-6 w-6 text-foreground" />
        <span className="text-sm font-semibold tracking-tight whitespace-nowrap">Keos &amp; K-Tern Design</span>
      </Link>

      <nav className="flex items-center justify-center gap-5 font-mono text-xs tracking-widest whitespace-nowrap text-muted-foreground uppercase">
        {siteNavLinks.map((link) => {
          const active = link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href) ||
              link.children?.some((c) => pathname.startsWith(c.href))

          if (link.children) {
            return (
              <div key={link.id} className="group relative">
                {/* Trigger */}
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-0.5 ${active ? "text-foreground" : "hover:text-foreground"}`}
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown */}
                <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 -translate-y-2 scale-95 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                  <div className="min-w-[120px] overflow-hidden rounded-lg border bg-background shadow-lg">
                    {link.children.map((child) => {
                      const childActive = pathname.startsWith(child.href)
                      return (
                        <Link
                          key={child.id}
                          href={child.href}
                          className={`block px-4 py-2.5 text-xs tracking-widest uppercase transition-colors hover:bg-muted ${
                            childActive ? "text-foreground font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          }

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
        <ThemeToggle />
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          className="rounded-full"
          aria-label="Contact"
          render={<Link href="/contact" />}
        >
          <Mail className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          className="rounded-full text-rose-500 hover:text-rose-600 hover:border-rose-300"
          aria-label="Wall of Appreciation"
          render={<Link href="/appreciation" />}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
