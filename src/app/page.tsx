import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site/site-nav"
import { DotGridBackground } from "@/components/site/dot-grid-background"
import { HeroCursorTag } from "@/components/site/hero-cursor-tag"
import { landingFeatures, landingStats } from "@/lib/landing-data"

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <SiteNav />

      <div className="mx-auto w-full max-w-6xl border-x">

      {/* ── Immersive image hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b"
        style={{
          minHeight: "min(620px, 80svh)",
          /* Warm gradient shows as CSS background while image loads */
          background: "linear-gradient(135deg, #6B0A1A 0%, #C0340E 30%, #E85520 52%, #FF7020 70%, #3A0610 100%)",
        }}
      >
        {/* Actual hero image — sits above CSS bg, below overlays */}
        <Image
          src="/landing bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 1 }}
        />
        {/* Dark vignette for text legibility — sits above image */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            zIndex: 2,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.48) 100%)",
          }}
        />
        {/* Dot grid animation — direct child of section so section is the event parent */}
        <DotGridBackground
          className="absolute inset-0"
          style={{ zIndex: 3 }}
          dotColor="rgba(255,255,255,0.6)"
          dotSize={1.8}
          spacing={26}
          impactRadius={180}
          scaleOnHover={3.0}
        />
        <HeroCursorTag />

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-6 py-32 text-center sm:px-12" style={{ zIndex: 4 }}>
          <h1 className="animate-hero-reveal max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.08s" }}>
            Design decisions<br />
            Made once.<br />
            <em className="not-italic opacity-80">Used everywhere.</em>
          </h1>
          <p className="animate-hero-reveal mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg" style={{ animationDelay: "0.22s" }}>
            The visual and experience layer behind KEOS &amp; KTERN —<br />
            color, type, motion, and interaction, unified and themeable in real time.
          </p>
          <div className="animate-hero-reveal mt-10 flex items-center gap-4" style={{ animationDelay: "0.36s" }}>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-3 w-3" />
              </span>
              Explore Design System
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b px-6 py-16 sm:px-10">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          [ Problem ]
        </p>
        <h2 className="mt-3 max-w-xl text-2xl leading-tight font-bold tracking-tight sm:text-4xl">
          Every product ships its own colors, its own spacing, its own drift.
        </h2>
        <div className="mx-auto mt-10 max-w-3xl">
          <Image
            src="/problem-illustration.svg"
            alt=""
            aria-hidden="true"
            width={1748}
            height={1165}
            className="pointer-events-none mx-auto w-full max-w-2xl dark:invert"
          />
        </div>
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
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-80"
          >
            Explore Design System
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <footer className="border-t px-6 py-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-10">
        Built with Next.js · Tailwind CSS · shadcn/ui · by{" "}
        <a
          href="https://www.linkedin.com/in/iam-aswini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline"
        >
          Aswini
        </a>
      </footer>
      </div>
    </div>
  )
}
