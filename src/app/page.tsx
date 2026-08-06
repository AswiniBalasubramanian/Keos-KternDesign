import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { landingFeatures, landingStats } from "@/lib/landing-data"

function KMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 104 104" fill="none" className={className}>
      <path
        d="M12.9681 1.4629C15.098 -0.560507 18.4649 -0.474211 20.4886 1.65528L30.2328 11.9111C32.2564 14.041 32.1709 17.4078 30.0413 19.4316L19.7855 29.1758C16.6838 32.1231 16.9873 34.2363 19.7386 37.25C19.8693 37.3606 19.9955 37.4783 20.1156 37.6045L29.6468 47.6572C33.2783 51.4727 34.6132 51.0099 38.0169 47.7705L45.7318 40.4268L84.4681 1.69141C86.6364 -0.476619 90.1525 -0.476773 92.3206 1.69141L101.82 11.1914C103.988 13.3596 103.988 16.8747 101.82 19.043L68.4652 52.3965L101 85.2188C103.159 87.3963 103.143 90.9116 100.966 93.0703L91.6976 102.258C89.52 104.416 86.0047 104.401 83.846 102.224L36.7191 54.6816C34.196 52.476 32.5055 53.1486 29.6449 55.8711L19.1771 65.9102C19.0388 66.0418 18.8945 66.1635 18.7464 66.2774C16.127 69.1155 16.692 71.2527 19.5589 74.3223L29.3675 84.8232C31.4044 87.0042 31.3179 90.4522 29.1742 92.5244L18.8509 102.502C16.7069 104.574 13.3177 104.486 11.2806 102.305L1.47299 91.8047C-0.564114 89.6237 -0.47765 86.1748 1.66635 84.1025L11.9886 74.125C15.8324 70.4097 14.8599 69.2021 11.6019 65.7139L1.91928 55.0156C1.11752 54.1572 0.645958 53.1024 0.498378 52.0127C0.284402 50.6002 0.63955 49.121 1.55697 47.9443C1.62681 47.8522 1.69932 47.7613 1.77572 47.6729C1.92585 47.4853 2.08984 47.3049 2.26889 47.1348L4.06185 45.4307L12.4359 37.3369C12.6747 37.1061 12.9295 36.9029 13.1956 36.7256C16.226 33.5799 15.2952 32.1747 12.264 28.9844L2.51986 18.7285C0.49629 16.5985 0.583305 13.2308 2.71322 11.207L12.9681 1.4629Z"
        fill="currentColor"
      />
    </svg>
  )
}

const navLinks = ["Docs", "Components", "Patterns"]

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
      <header className="flex h-16 w-full items-center justify-between border-b px-6">
        <div className="flex items-center gap-2">
          <KMark className="h-4 w-4 text-foreground" />
          <span className="text-sm font-semibold tracking-tight">Keos</span>
        </div>
        <nav className="hidden items-center gap-6 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:flex">
          {navLinks.map((link) => (
            <Link key={link} href="/studio" className="hover:text-foreground">
              {link}
            </Link>
          ))}
        </nav>
        <PillButton href="/studio">Explore Design System</PillButton>
      </header>

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
