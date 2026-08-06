import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteNav } from "@/components/site/site-nav"
import { landingFeatures, landingStats } from "@/lib/landing-data"

function PillButton({
  children,
  href,
  variant = "outline",
}: {
  children: React.ReactNode
  href: string
  variant?: "outline" | "default"
}) {
  return (
    <Button
      variant={variant}
      nativeButton={false}
      className="gap-1.5 rounded-full border-foreground/15 px-4"
      render={<Link href={href} />}
    >
      {children}
      <ChevronRight className="h-3.5 w-3.5" />
    </Button>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <SiteNav />

      <section className="relative border-b px-6 py-24 sm:px-10">
        <span className="absolute right-6 top-6 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:right-10">
          Live Theming
        </span>
        <h1 className="max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
          One system,
          <br />
          every product surface.
        </h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          The token layer for building consistent, on-brand interfaces — themeable in real time.
        </p>
        <div className="mt-8">
          <PillButton href="/studio" variant="default">
            Explore Design System
          </PillButton>
        </div>
      </section>

      <section className="border-b px-6 py-16 sm:px-10">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          [ Problem ]
        </p>
        <h2 className="mt-3 max-w-xl text-2xl leading-tight font-bold tracking-tight sm:text-4xl">
          Every product ships its own colors, its own spacing, its own drift.
        </h2>
      </section>

      <section className="grid grid-cols-2 border-b sm:grid-cols-4">
        {landingStats.map((stat, i) => (
          <div
            key={stat.id}
            className={`px-6 py-10 text-center ${i !== 0 ? "border-l" : ""} ${i >= 2 ? "border-t sm:border-t-0" : ""}`}
          >
            <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
            <p className="mt-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className="px-6 py-16 sm:px-10">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          [ System ]
        </p>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {landingFeatures.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="group flex flex-col justify-between gap-8 bg-background p-6 transition-colors hover:bg-muted/40"
            >
              <div className="flex h-24 items-center justify-center rounded-lg border border-dashed font-mono text-[11px] text-muted-foreground">
                {feature.id}()
              </div>
              <div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t px-6 py-20 sm:px-10">
        <div className="flex flex-col items-start gap-4">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            [ Get Started ]
          </p>
          <h2 className="max-w-lg text-2xl font-bold tracking-tight sm:text-4xl">
            Ready to look under the hood?
          </h2>
          <PillButton href="/studio" variant="default">
            Explore Design System
          </PillButton>
        </div>
      </section>

      <footer className="border-t px-6 py-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-10">
        Built with Next.js · Tailwind CSS · shadcn/ui
      </footer>
    </div>
  )
}
