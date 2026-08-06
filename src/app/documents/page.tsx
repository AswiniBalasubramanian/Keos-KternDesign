import { SiteNav } from "@/components/site/site-nav"
import { EmptyState } from "@/components/site/empty-state"

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <EmptyState
        eyebrow="Documents"
        title="No documents yet"
        description="Guidelines, changelogs, and contribution docs will show up here once published."
      />
    </div>
  )
}
