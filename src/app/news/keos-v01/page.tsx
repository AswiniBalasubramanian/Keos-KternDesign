import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site/site-nav"

export const metadata = {
  title: "Keos v0.1 — First internal release",
  description: "The first internal milestone of the Keos & KTern Design System, shipped to the Kaartech team.",
}

export default function KeosV01Page() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <SiteNav />

      <div className="mx-auto w-full max-w-6xl border-x">

        {/* ── Hero thumbnail ──────────────────────────────────────────────── */}
        <div className="relative overflow-hidden border-b" style={{ minHeight: "520px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/keos-v01-thumb.svg"
            alt="Keos v0.1 release thumbnail"
            className="h-full w-full object-cover"
            style={{ minHeight: "520px", display: "block" }}
          />
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

            {/* ── Full document block ─────────────────────────────────── */}
            <div className="mt-14 rounded-2xl border overflow-hidden">
              {/* Cover image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/keos-v01-cover.svg"
                alt="KEOS v1 Knowledge Base document cover"
                className="w-full object-cover"
                style={{ maxHeight: "340px", objectPosition: "top" }}
              />
              {/* Footer row */}
              <div className="flex items-center justify-between gap-4 border-t bg-muted/30 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-figtree)" }}>
                    KEOS v1 — Knowledge Base
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    Full document · PDF
                  </p>
                </div>
                <a
                  href="https://kaartechit.sharepoint.com/:b:/g/IQCGqYwZEL7cRZ851AUYAjMAAZK9bC0meVhRSh19YJSk0y0?e=IxbmN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-80"
                  style={{ fontFamily: "var(--font-figtree)" }}
                >
                  View full document
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
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
          Keos &amp; KTern Design System · Kaartech © 2026 ·{" "}
          <Link href="/news" className="text-foreground hover:underline">All releases</Link>
        </footer>

      </div>
    </div>
  )
}
