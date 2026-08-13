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

      {/* ── Latest Releases ─────────────────────────────────────────────── */}
      <section className="border-b px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              [ Releases ]
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Latest releases
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden shrink-0 font-mono text-xs tracking-widest text-muted-foreground uppercase underline-offset-4 hover:text-foreground hover:underline sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Release card */}
          <article className="group flex flex-col justify-between gap-6 rounded-2xl border bg-muted/30 p-6 transition-colors hover:bg-muted/60">
            <div className="flex flex-col gap-3">
              {/* Tag */}
              <span className="inline-flex w-fit items-center rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Internal
              </span>
              <h3 className="text-lg font-bold leading-snug tracking-tight">
                Keos v0.1 — First internal release
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The first internal milestone of the Keos &amp; K-Tern Design System, shipped to the Kaartech team. Includes foundation tokens, core components, and the Studio theme switcher.
              </p>
            </div>

            <div className="flex flex-col gap-0">
              <div className="flex items-center justify-between border-t py-3">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Date</span>
                <span className="font-mono text-[11px] text-foreground">Aug 10, 2026</span>
              </div>
              <div className="flex items-center justify-between border-t py-3">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Audience</span>
                <span className="font-mono text-[11px] text-foreground">Kaartech internal</span>
              </div>
              <div className="pt-4">
                <Link
                  href="/news/keos-v01"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background transition hover:opacity-80"
                >
                  Read announcement
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </article>

          {/* Placeholder — more coming soon */}
          <div className="hidden items-center justify-center rounded-2xl border border-dashed sm:flex lg:col-span-2">
            <p className="font-mono text-xs tracking-widest text-muted-foreground/40 uppercase">
              More releases coming soon
            </p>
          </div>
        </div>
      </section>


      {/* ── System Bento ─────────────────────────────────────────────────── */}
      <section className="border-t px-6 py-20 sm:px-10">
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">[ System ]</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Discover the system<br className="hidden sm:block" /> powering our designs
          </h2>
        </div>

        {/* True bento: 3-col grid with row-span cards */}
        <div className="mt-12 grid grid-cols-3 grid-rows-[240px_200px_220px] gap-3 [&>*]:overflow-hidden [&>*]:rounded-2xl [&>*]:border">

          {/* Color — tall, spans 2 rows */}
          <Link href="/studio" className="group row-span-2 flex flex-col justify-between bg-background p-6 transition hover:bg-muted/30">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background text-[10px]">C</span>
              Color
            </div>
            <div className="flex flex-1 items-end gap-1.5 py-4">
              {[["#FF6900","70%"],["#FF8A3D","55%"],["#FFA566","40%"],["#3B3B3B","65%"],["#6B6B6B","30%"],["#D4D4D4","48%"]].map(([c,h],i) => (
                <div key={i} className="flex-1 rounded-t-md transition-all duration-300 group-hover:opacity-80" style={{ background: c, height: h }} />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold">Color</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Semantic tokens, palettes &amp; dark mode</p>
            </div>
          </Link>

          {/* Typography */}
          <Link href="/studio" className="group flex flex-col justify-between bg-background p-5 transition hover:bg-muted/30">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background text-[10px] font-bold">Tt</span>
              Typography
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <p className="font-mono text-[9px] text-muted-foreground">DM Sans — Primary</p>
              <p className="mt-1 text-xl font-bold leading-tight tracking-tight">Design<br/>Language</p>
              <p className="mt-1 text-[10px] text-muted-foreground">Aa Bb Cc 0123</p>
            </div>
            <div>
              <p className="text-xs font-semibold">Typography</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Type scale, weights, variable fonts</p>
            </div>
          </Link>

          {/* AI UX */}
          <Link href="/ai-ux" className="group flex flex-col justify-between bg-background p-5 transition hover:bg-muted/30">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FF6900] text-white text-[10px]">AI</span>
              AI Patterns
            </div>
            <div className="space-y-2">
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#FF6900] px-3 py-1.5 text-[11px] text-white">Show me the dashboard</div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm border bg-muted px-3 py-1.5 text-[11px]">Here&apos;s your summary ✦</div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold">AI UX</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Prompts, streaming states, AI flows</p>
            </div>
          </Link>

          {/* Banner — 2 cols */}
          <Link href="/studio" className="group col-span-2 flex flex-col items-center justify-center bg-foreground px-8 text-center transition hover:opacity-90">
            <span className="font-mono text-[9px] tracking-widest text-background/40 uppercase">[ System ]</span>
            <p className="mt-2 text-2xl font-bold tracking-tight text-background sm:text-3xl">
              KEOS &amp; K-Tern<br/>Design System
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-background/20 px-4 py-1.5 font-mono text-[10px] tracking-widest text-background/60 uppercase transition group-hover:border-background/50 group-hover:text-background/90">
              Explore Studio →
            </span>
          </Link>

          {/* Accessibility */}
          <Link href="/accessibility" className="group flex flex-col justify-between bg-background p-5 transition hover:bg-muted/30">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md border text-[10px]">♿</span>
              Accessibility
            </div>
            <div className="space-y-1.5">
              <div className="rounded-lg border bg-muted/20 px-3 py-2 text-[11px]">Sprint</div>
              <div className="rounded-lg border bg-muted/20 px-3 py-2 text-[11px] text-muted-foreground">Assignee</div>
              <div className="flex items-center gap-2 rounded-lg border border-[#FF6900]/40 bg-foreground px-3 py-2 text-[11px] text-background">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6900]" />WCAG AA
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold">Accessibility</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">ARIA, keyboard nav, contrast</p>
            </div>
          </Link>

          {/* Tokens */}
          <Link href="/studio" className="group flex flex-col justify-between bg-background p-5 transition hover:bg-muted/30">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background text-[10px]">{`{}`}</span>
              Tokens
            </div>
            <div className="space-y-1.5">
              {[["--color-primary","#FF6900"],["--color-foreground","#0A0A0A"],["--color-muted","#F5F5F5"],["--color-border","#E5E5E5"]].map(([token, color]) => (
                <div key={token} className="flex items-center gap-2 rounded-lg border bg-muted/20 px-2.5 py-1.5">
                  <div className="h-2.5 w-2.5 shrink-0 rounded-sm border" style={{ background: color }} />
                  <span className="truncate font-mono text-[9px] text-muted-foreground">{token}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold">Design Tokens</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Every value as a CSS variable</p>
            </div>
          </Link>

          {/* Iconography */}
          <Link href="/studio" className="group flex flex-col justify-between bg-background p-5 transition hover:bg-muted/30">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md border text-[10px]">⌘</span>
              Iconography
            </div>
            <div className="space-y-1.5">
              {["Lucide", "Phosphor", "Tabler", "Hugeicons"].map((lib) => (
                <div key={lib} className="flex items-center gap-2 rounded-lg border bg-muted/20 px-3 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF6900]" />
                  <span className="text-[11px]">{lib}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold">Iconography</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">5 libraries, swappable live</p>
            </div>
          </Link>

        </div>
      </section>

      {/* ── Meet our team ───────────────────────────────────────────────── */}
      <section className="border-t px-6 py-20 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            [ Team ]
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The people behind KEOS &amp; K-Tern — designers, engineers, and thinkers building the future of enterprise AI products at Kaartech.
          </p>
          <div className="mt-10 w-full overflow-hidden rounded-2xl border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team.jpg"
              alt="The KEOS & K-Tern team"
              className="w-full object-cover object-center transition-all duration-700 grayscale hover:grayscale-0"
              style={{ maxHeight: "520px", display: "block" }}
            />
          </div>
          <Link
            href="/team"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition hover:bg-foreground hover:text-background"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Quote */}
          <div className="mt-16 flex w-full flex-col items-start gap-6 rounded-2xl border bg-muted/20 px-8 py-10 text-left sm:flex-row sm:items-center sm:gap-10 sm:px-12">
            {/* Photo — illustration by default, real photo on hover */}
            <div className="group/photo relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border sm:h-44 sm:w-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/aswini-illustration.png"
                alt="Aswini B"
                className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 group-hover/photo:opacity-0"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Aswini.png"
                alt="Aswini B"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover/photo:opacity-100"
              />
            </div>
            {/* Text */}
            <div className="flex-1">
              <span className="font-serif text-5xl leading-none text-foreground/20 select-none">&ldquo;</span>
              <p className="mt-1 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                Design has the power to speak.
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold">Aswini B</p>
                <p className="text-xs text-muted-foreground">Designer &amp; Product Manager</p>
              </div>
            </div>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/iam-aswini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aswini B on LinkedIn"
              className="shrink-0 rounded-xl border bg-background p-3 text-muted-foreground transition hover:border-[#0A66C2] hover:text-[#0A66C2]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Letter from the designer ──────────────────────────────────────── */}
      <section
        className="relative border-t overflow-hidden"
        style={{
          minHeight: "520px",
          backgroundImage: "url('/desert-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Letter card */}
        <div className="relative z-10 flex justify-center px-6 py-16 sm:px-10">
          <div
            className="w-full max-w-lg rounded-sm px-10 py-14 shadow-2xl"
            style={{
              fontFamily: "var(--font-figtree), sans-serif",
              backgroundColor: "#edeae5",
              backgroundImage: [
                "repeating-linear-gradient(0deg,  rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 4px)",
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 4px)",
                "repeating-linear-gradient(0deg,  rgba(0,0,0,0.045)      0px, rgba(0,0,0,0.045)      1px, transparent 1px, transparent 4px)",
                "repeating-linear-gradient(90deg, rgba(0,0,0,0.045)      0px, rgba(0,0,0,0.045)      1px, transparent 1px, transparent 4px)",
              ].join(", "),
            }}
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1a1a2e]" style={{ fontFamily: "var(--font-eb-garamond), serif" }}>
              A letter from<br />the designer
            </h2>

            <p className="mt-5 text-sm italic text-[#555] leading-relaxed">
              Design is our shared language
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#333]">
              Every product decision carries a feeling. When we started building KEOS & K-Tern, we saw enterprise software full of friction, inconsistency, and invisible walls. We believed there had to be a better way — one built on genuine craft and human understanding.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#333]">
              A design system, to us, isn&apos;t just a library of components. It&apos;s the heartbeat of everything we ship — it&apos;s in every token we name, every interaction state we consider, and every decision we make together as a team.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#333]">
              We&apos;ve learned that great design is a practice. One that grows stronger every sprint. Through building with the Kaartech team, we&apos;ve discovered that consistency means: thinking before shipping, aligning before building, and caring deeply about the person on the other side of the screen.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-[#333]">
              Here&apos;s to building products where design isn&apos;t just seen — it is felt.
            </p>

            <p className="mt-6 text-sm text-[#555]">Warmly,</p>

            <div className="mt-4">
              <p className="font-sans text-[13px] font-semibold text-[#1a1a2e]">Aswini B</p>
              <p className="font-sans text-[11px] text-[#777]">Design Lead, KEOS & K-Tern</p>
            </div>
          </div>
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
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/iam-aswini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline"
        >
          Aswini
        </a>
        {" "}· KEOS &amp; K-Tern
      </footer>
      </div>
    </div>
  )
}
