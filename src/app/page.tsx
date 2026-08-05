import { NotificationSettings } from "@/components/notification-settings"
import { notificationItems } from "@/lib/notification-data"

const tokens = {
  spacing: ["0.5rem", "1rem", "1.5rem", "2rem", "3rem"],
  radius: ["var(--radius-sm)", "var(--radius-md)", "var(--radius-lg)", "var(--radius-xl)"],
  colors: [
    { name: "background", className: "bg-background border" },
    { name: "foreground", className: "bg-foreground" },
    { name: "primary", className: "bg-primary" },
    { name: "secondary", className: "bg-secondary" },
    { name: "muted", className: "bg-muted" },
    { name: "accent", className: "bg-accent" },
    { name: "destructive", className: "bg-destructive" },
  ],
}

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Design System</h1>
        <p className="text-sm text-muted-foreground">
          Next.js + Tailwind CSS + shadcn/ui, built loop-first: every list is an array mapped
          with <code className="rounded bg-muted px-1 py-0.5 text-xs">.map()</code>.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Colors</h2>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {tokens.colors.map((color) => (
            <div key={color.name} className="space-y-1.5">
              <div className={`h-12 w-full rounded-md ${color.className}`} />
              <p className="text-xs text-muted-foreground">{color.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Radius</h2>
        <div className="flex gap-3">
          {tokens.radius.map((r) => (
            <div
              key={r}
              style={{ borderRadius: r }}
              className="h-16 w-16 border bg-muted"
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Component test — data-driven list</h2>
        <NotificationSettings items={notificationItems} />
      </section>
    </div>
  )
}
