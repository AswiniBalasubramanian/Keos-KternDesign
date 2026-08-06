import { SiteNav } from "@/components/site/site-nav"
import { EmptyState } from "@/components/site/empty-state"

export default function AiUxPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <EmptyState
        eyebrow="AI UX"
        title="AI interaction patterns — coming soon"
        description="Chat surfaces, agent handoffs, and streaming states for building AI-native products."
      />
    </div>
  )
}
