"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { components, componentCategories } from "@/lib/components-data"
import { cn } from "@/lib/utils"

const categoryChip: Record<string, { base: string; active: string }> = {
  Layout:       { base: "bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:hover:bg-violet-900/60",   active: "bg-violet-200 text-violet-800 dark:bg-violet-900 dark:text-violet-200" },
  Form:         { base: "bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:hover:bg-sky-900/60",                     active: "bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-200" },
  "Data Display":{ base: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60", active: "bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
  Overlay:      { base: "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:hover:bg-rose-900/60",               active: "bg-rose-200 text-rose-800 dark:bg-rose-900 dark:text-rose-200" },
  Navigation:   { base: "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:hover:bg-amber-900/60",         active: "bg-amber-200 text-amber-800 dark:bg-amber-900 dark:text-amber-200" },
}

export function ComponentsNav() {
  const pathname = usePathname()

  return (
    <nav className="w-56 shrink-0 space-y-6 py-6 pr-4">
      <div className="space-y-1">
        <Link
          href="/components"
          className={cn(
            "block rounded-full px-3 py-1 text-sm font-medium transition-colors",
            pathname === "/components"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Overview
        </Link>
      </div>

      {componentCategories.map((category) => {
        const items = components.filter((c) => c.category === category)
        const chip = categoryChip[category]
        return (
          <div key={category} className="space-y-1.5">
            <p className="px-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              {category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((c) => {
                const isActive = pathname === `/components/${c.slug}`
                return (
                  <Link
                    key={c.slug}
                    href={`/components/${c.slug}`}
                    className={cn(
                      "inline-block rounded-full px-3 py-1 text-xs font-medium transition-colors",
                      isActive ? chip.active : chip.base
                    )}
                  >
                    {c.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
