import { SiteNav } from "@/components/site/site-nav"
import { EmptyState } from "@/components/site/empty-state"

export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <EmptyState
        eyebrow="Components"
        title="Component library — coming soon"
        description="Browse-and-copy component previews, in the spirit of ui.shadcn.com, are on the way."
      />
    </div>
  )
}
