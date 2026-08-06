import { SiteNav } from "@/components/site/site-nav"
import { EmptyState } from "@/components/site/empty-state"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <EmptyState
        eyebrow="Contact"
        title="Nothing here yet"
        description="A contact form will live here soon."
      />
    </div>
  )
}
