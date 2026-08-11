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
          style={{ minHeight: "520px", background: "#8B0A14" }}
        >
          {/* Full SVG scene — exact match of the Keos brand image */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial gradient — hot orange center */}
              <radialGradient id="bg" cx="55%" cy="50%" r="65%">
                <stop offset="0%" stopColor="#F05A00" />
                <stop offset="40%" stopColor="#C0280C" />
                <stop offset="100%" stopColor="#5C0010" />
              </radialGradient>
              {/* Halftone pattern */}
              <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="1" fill="rgba(255,255,255,0.14)" />
              </pattern>
            </defs>

            {/* Base gradient fill */}
            <rect width="1440" height="520" fill="url(#bg)" />

            {/* ── Large overlapping diamond / rhombus shapes ─────────────── */}
            {/* Top-left dark crimson diamond */}
            <polygon points="0,0 340,200 200,440 -120,240" fill="#6B0010" opacity="0.9" />
            {/* Top-left purple bleed */}
            <polygon points="-60,-20 260,160 80,380 -200,200" fill="#5A0040" opacity="0.5" />
            {/* Center-left large dark red slab */}
            <polygon points="120,0 560,0 480,520 80,520" fill="#8C0014" opacity="0.65" />
            {/* Top center swooping dark shape */}
            <polygon points="300,-60 760,0 700,300 200,200" fill="#7A0012" opacity="0.7" />
            {/* Right large orange-red diamond */}
            <polygon points="800,80 1200,0 1500,260 1100,520" fill="#D03800" opacity="0.6" />
            {/* Bottom-right deep red diamond */}
            <polygon points="900,300 1440,200 1440,520 700,520" fill="#6A0010" opacity="0.75" />
            {/* Center mid-right orange slab */}
            <polygon points="600,100 1000,60 1060,400 620,420" fill="#E04500" opacity="0.45" />
            {/* Top-right bright orange triangle */}
            <polygon points="1100,-20 1440,-20 1440,260 1200,300" fill="#F06000" opacity="0.55" />
            {/* Small dark accent bottom-center */}
            <polygon points="400,380 720,300 780,520 360,520" fill="#5A0012" opacity="0.6" />

            {/* Halftone overlay */}
            <rect width="1440" height="520" fill="url(#dots)" />

            {/* ── Sparkle stars ─────────────────────────────────────────── */}
            {/* top-left small */}
            <g transform="translate(110,88)" opacity="0.35">
              <path d="M0,-14 L2.5,0 L14,0 L2.5,2.5 L0,14 L-2.5,2.5 L-14,0 L-2.5,-2.5 Z" fill="white"/>
            </g>
            {/* left-mid */}
            <g transform="translate(60,290)" opacity="0.22">
              <path d="M0,-10 L1.8,0 L10,0 L1.8,1.8 L0,10 L-1.8,1.8 L-10,0 L-1.8,-1.8 Z" fill="white"/>
            </g>
            {/* right-center-bottom */}
            <g transform="translate(1300,390)" opacity="0.28">
              <path d="M0,-18 L3,0 L18,0 L3,3 L0,18 L-3,3 L-18,0 L-3,-3 Z" fill="white"/>
            </g>
            {/* top-right */}
            <g transform="translate(1380,80)" opacity="0.2">
              <path d="M0,-10 L1.8,0 L10,0 L1.8,1.8 L0,10 L-1.8,1.8 L-10,0 L-1.8,-1.8 Z" fill="white"/>
            </g>
            {/* bottom-left */}
            <g transform="translate(330,460)" opacity="0.18">
              <path d="M0,-8 L1.4,0 L8,0 L1.4,1.4 L0,8 L-1.4,1.4 L-8,0 L-1.4,-1.4 Z" fill="white"/>
            </g>
          </svg>

          {/* Centred K mark */}
          <div className="relative flex flex-col items-center gap-3" style={{ zIndex: 2, color: "#F5EDE0" }}>
            <KMark className="h-28 w-28 drop-shadow-2xl" />
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
                KEOS, the <strong>Kaar Enterprise Operating System</strong>, brings your data, AI models, agents, and controls together in one system — built on your enterprise core. Version 1 is now live for KaarTech people.
              </p>

              <p className="border-l-2 border-[#FB540C] pl-5 italic text-muted-foreground">
                "Engineering the intelligence fabric for enterprise transformation."
              </p>

              <p>
                KEOS is a chat-based way of working, built by KaarTech for KaarTech people. You describe what you want in plain language, and KEOS plans, researches, and acts — using the models, skills, and connectors available in your workspace. It's grounded in your organization's own systems and data, operating inside the access and governance rules your organization has set.
              </p>

              <div className="rounded-xl border border-[#FB540C]/20 bg-[#FB540C]/5 px-5 py-4 text-sm">
                <strong>Note:</strong> KEOS is not a general-purpose chatbot. It's KaarTech's operating layer for AI work — deterministic, governed, and built around your systems, not a replacement for them.
              </div>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                What you can use KEOS for
              </h2>

              <ul className="space-y-3 pl-5">
                {[
                  "Writing and editing — emails, docs, specs, scripts",
                  "Coding help — explaining, debugging, generating snippets",
                  "Research — summarizing documents, extracting insights across systems",
                  "Brainstorming and planning — ideas, content strategy, prep work",
                  "Learning — breaking down complex concepts in plain language",
                  "Structured deliverables — project charters, stakeholder emails, workflow documentation grounded in your project's skills and connectors",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FB540C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                Getting started
              </h2>

              <p>
                Three steps between an invite and your first conversation. An Admin adds you to your team cohort via SSO using your work email — you'll receive an invite. Sign in at <strong>keos.kaartech.com</strong> with your work account or Microsoft SSO. Once in, you land directly in the conversation space: <em>"Think It. Ask It. Done."</em>
              </p>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                Scope: what KEOS remembers
              </h2>

              <p>Every conversation in KEOS runs within a scope — controlling what KEOS can see and remember while it works with you:</p>

              <ul className="space-y-3 pl-5">
                {[
                  "Personal — stays with you. Only you can see the conversation and its knowledge.",
                  "Project — shared with everyone invited to that project. Teammates can see the conversation and the knowledge behind it.",
                  "Organization — draws on organization-wide knowledge. Visible only to Admins.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FB540C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                Projects: your shared AI workspace
              </h2>

              <p>
                A project is a shared workspace with its own Skills, Connectors, Knowledge Base, Memory, and Tools — all scoped to one goal. Create one from the Projects menu, give it a name and description, select the skills and connectors it needs, and your team is ready to work.
              </p>

              <p>
                Each project member takes one of three roles: <strong>Project Admin</strong> (full control), <strong>Project Manager</strong> (manages members and settings), or <strong>Project Member</strong> (works inside the project). Only a Project Admin can delete a project.
              </p>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                What a real KEOS conversation looks like
              </h2>

              <p>
                Inside a project, a single prompt — <em>"Act as a Senior Project Manager. Create a comprehensive project charter for Acme. Include the project objective, key deliverables, core stakeholders, major milestones, key risks and mitigations, and success metrics."</em> — with a reference file attached, produces a fully formatted, print-ready Word document in seconds.
              </p>

              <p>
                KEOS reasons about the request, loads the right skills (DOCX generation), reaches into the project's connectors, reads the attached file, generates the charter across all ten required sections, validates it, and hands it back — alongside a clear list of what still needs a human decision. A follow-up prompt then turns the same context into a stakeholder review email, without starting over.
              </p>

              <p className="border-l-2 border-[#FB540C] pl-5 italic text-muted-foreground">
                "Every answer starts with a question — you just need the right one."
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
                  { label: "Version", value: "v1.0" },
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
                  {["What you can use KEOS for", "Getting started", "Scope", "Projects", "What a real conversation looks like"].map((s) => (
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
