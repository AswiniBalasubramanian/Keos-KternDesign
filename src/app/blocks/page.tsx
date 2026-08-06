import { SiteNav } from "@/components/site/site-nav"
import { EmptyState } from "@/components/site/empty-state"

export default function BlocksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <EmptyState
        eyebrow="Blocks"
        title="Ready-made blocks — coming soon"
        description="Full page sections built from the component library, ready to drop into any product."
      />
    </div>
  )
}
