import { SiteNav } from "@/components/site/site-nav"
import { EmptyState } from "@/components/site/empty-state"

export default function ChartsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <EmptyState
        eyebrow="Charts"
        title="Chart primitives — coming soon"
        description="Bar, line, donut, and area chart components, themed to match your palette."
      />
    </div>
  )
}
