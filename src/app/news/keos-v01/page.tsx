import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site/site-nav"
import { KMark } from "@/components/site/k-mark"

export const metadata = {
  title: "Keos v0.1 — First internal release",
  description: "The first internal milestone of the Keos & K-tern Design System, shipped to the Kaartech team.",
}

export default function KeosV01Page() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <SiteNav />

      <div className="mx-auto w-full max-w-6xl border-x">

        {/* ── Hero thumbnail ──────────────────────────────────────────────── */}
        <div
          className="relative flex items-center justify-center overflow-hidden border-b"
          style={{
            minHeight: "480px",
            background: "linear-gradient(135deg, #6B0A1A 0%, #A8200D 18%, #C93415 32%, #E04A10 48%, #F26318 62%, #C0340E 76%, #7A0E1E 100%)",
          }}
        >
          {/* Halftone dot grid overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              zIndex: 1,
            }}
          />
          {/* Abstract geometric shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
            <div style={{
              position: "absolute", top: "-10%", left: "-5%",
              width: "55%", height: "70%",
              background: "rgba(120,10,30,0.55)",
              transform: "rotate(-18deg) skewY(-6deg)",
              borderRadius: "4px",
            }} />
            <div style={{
              position: "absolute", bottom: "-15%", right: "-8%",
              width: "50%", height: "65%",
              background: "rgba(80,5,15,0.5)",
              transform: "rotate(12deg) skewX(-8deg)",
              borderRadius: "4px",
            }} />
            <div style={{
              position: "absolute", top: "20%", right: "15%",
              width: "28%", height: "45%",
              background: "rgba(200,60,20,0.35)",
              transform: "rotate(-6deg)",
              borderRadius: "2px",
            }} />
            {/* Star sparkles */}
            {[
              { top: "12%", left: "8%", size: 20, opacity: 0.25 },
              { top: "70%", right: "10%", size: 28, opacity: 0.2 },
              { bottom: "15%", left: "30%", size: 14, opacity: 0.18 },
            ].map((s, i) => (
              <svg key={i} width={s.size} height={s.size} viewBox="0 0 24 24"
                style={{ position: "absolute", opacity: s.opacity, ...s }}
              >
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="white" />
              </svg>
            ))}
          </div>
          {/* Centred K mark */}
          <div className="relative flex flex-col items-center gap-3" style={{ zIndex: 2 }}>
            <KMark className="h-24 w-24 text-white/90 drop-shadow-2xl" />
          </div>
        </div>

        {/* ── Article layout ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_320px]">

          {/* Main content */}
          <article className="border-b px-6 py-14 sm:px-12 lg:border-r lg:border-b-0">

            {/* Back */}
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-muted-foreground uppercase transition hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to home
            </Link>

            {/* Tag */}
            <span className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Internal release
            </span>

            {/* Title — EB Garamond */}
            <h1
              className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-eb-garamond)" }}
            >
              Keos v0.1 — First internal release for Kaartech
            </h1>

            {/* Byline */}
            <div className="mt-5 flex items-center gap-3 border-b pb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FB540C] text-[11px] font-bold text-white">A</div>
              <div>
                <p className="text-sm font-medium" style={{ fontFamily: "var(--font-figtree)" }}>Aswini Balasubramanian</p>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">Aug 10, 2026 · 3 min read</p>
              </div>
            </div>

            {/* Body — Figtree */}
            <div
              className="mt-8 space-y-6 text-[17px] leading-[1.75] text-foreground/85"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              <p>
                Today marks a significant milestone for the Keos &amp; K-tern product family at Kaartech. We're shipping <strong>Keos v0.1</strong> — the first internal release of our unified design system — to the full Kaartech team.
              </p>

              <p>
                This release isn't about perfection. It's about alignment. For the first time, every product under the Keos and K-tern umbrella shares the same foundation: a single token layer for color, spacing, radius, and typography; a core component library built on Radix primitives; and a live Studio where any designer or engineer can switch themes and see changes reflected instantly.
              </p>

              <h2
                className="mt-10 text-2xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                What's included in v0.1
              </h2>

              <ul className="space-y-3 pl-5">
                {[
                  "Foundation tokens — color, spacing, radius, shadow, typography scales for both Keos and K-tern themes",
                  "26 core UI components — Button, Input, Card, Dialog, Dropdown, Accordion, Tabs, and more",
                  "Theme Studio — live switcher between Keos and K-tern palettes with dark mode support",
                  "Charts layer — Recharts-based data visualisation components pre-wired to the token system",
                  "AI UX patterns — interaction blueprints for streaming responses, tool calls, and agent states",
                  "Branding Kit — logo marks, color palettes, and type specimens for both brands",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FB540C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                className="mt-10 text-2xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                Why now
              </h2>

              <p>
                As Kaartech scales its product portfolio, design debt compounds. Every team building their own button, every product shipping its own shade of blue — it adds up. Keos v0.1 is the first step toward eliminating that drift. Every decision made in this system is made once, and used everywhere.
              </p>

              <p>
                This release is internal to Kaartech. We're sharing it with the team to gather real-world feedback before a broader rollout. If something feels off — a token name that doesn't make sense, a component that doesn't flex to your use case — we want to hear it.
              </p>

              <h2
                className="mt-10 text-2xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                What's next
              </h2>

              <p>
                v0.2 is already in progress. On deck: Motion system (spring curves + transition presets), Icon library (custom Keos icon set), Pattern blocks (full page-section compositions), and the first public release candidate.
              </p>

              <p className="border-l-2 border-[#FB540C] pl-5 italic text-muted-foreground">
                "Design decisions made once, used everywhere." — This isn't a tagline. It's the constraint that every future Keos decision will be measured against.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-14 flex items-center gap-4 border-t pt-10">
              <Link
                href="/foundation"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-80"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                Explore the system
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                Open Studio
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="px-6 py-14 sm:px-8">
            <div className="sticky top-24 space-y-8">

              {/* Meta */}
              <div className="space-y-0 rounded-xl border overflow-hidden">
                {[
                  { label: "Date", value: "Aug 10, 2026" },
                  { label: "Version", value: "v0.1.0" },
                  { label: "Audience", value: "Kaartech internal" },
                  { label: "Category", value: "Release" },
                  { label: "Status", value: "Live" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between border-b px-4 py-3 last:border-b-0">
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</span>
                    <span className="font-mono text-[11px] text-foreground">{value}</span>
                  </div>
                ))}
              </div>

              {/* What's in v0.1 quick links */}
              <div>
                <p className="mb-3 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">On this page</p>
                <div className="space-y-2">
                  {["What's included in v0.1", "Why now", "What's next"].map((s) => (
                    <p key={s} className="text-sm text-muted-foreground transition hover:text-foreground cursor-pointer"
                      style={{ fontFamily: "var(--font-figtree)" }}>
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div>
                <p className="mb-3 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Share</p>
                <div className="flex gap-2">
                  {["LinkedIn", "X / Twitter"].map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase cursor-pointer transition hover:border-foreground hover:text-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <footer className="border-t px-6 py-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-10">
          Keos &amp; K-tern Design System · Kaartech © 2026 ·{" "}
          <Link href="/news" className="text-foreground hover:underline">All releases</Link>
        </footer>

      </div>
    </div>
  )
}
