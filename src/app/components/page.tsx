import Link from "next/link"
import { components, componentCategories } from "@/lib/components-data"

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-base text-muted-foreground">
          Beautifully designed components built with Base UI and Tailwind CSS. Copy, paste, and customise.
        </p>
      </div>

      {componentCategories.map((category) => {
        const items = components.filter((c) => c.category === category)
        return (
          <div key={category} className="space-y-4">
            <h2 className="font-heading text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {category}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {items.map((c) => (
                <Link
                  key={c.slug}
                  href={`/components/${c.slug}`}
                  className="group rounded-xl border bg-card p-5 transition-colors hover:border-foreground/20 hover:bg-muted/50"
                >
                  <p className="font-medium text-sm group-hover:text-foreground">{c.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
