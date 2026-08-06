"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const pages = [
  { href: "/studio", label: "Page 1" },
  { href: "/studio/page-2", label: "Page 2" },
]

export function StudioPageNav() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 left-0 z-20 mb-4 flex w-fit gap-2 bg-muted/30 py-1 backdrop-blur supports-backdrop-filter:bg-muted/60">
      {pages.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className={`rounded-md border px-3 py-1.5 text-sm font-medium ${
            pathname === p.href ? "bg-foreground text-background" : "bg-card hover:bg-accent"
          }`}
        >
          {p.label}
        </Link>
      ))}
    </div>
  )
}
