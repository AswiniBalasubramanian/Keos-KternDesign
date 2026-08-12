"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { Download, ExternalLink } from "lucide-react"

const socialTemplates = [
  { name: "LinkedIn Banner",       size: "1584 Ã— 396",  tag: "LinkedIn",   bg: "#0A66C2" },
  { name: "Twitter / X Header",    size: "1500 Ã— 500",  tag: "X",          bg: "#000000" },
  { name: "Instagram Square",      size: "1080 Ã— 1080", tag: "Instagram",  bg: "#E1306C" },
  { name: "Instagram Story",       size: "1080 Ã— 1920", tag: "Instagram",  bg: "#833AB4" },
  { name: "OG / Link Preview",     size: "1200 Ã— 630",  tag: "Web",        bg: "#F97316" },
  { name: "Email Header",          size: "600 Ã— 200",   tag: "Email",      bg: "#06B6D4" },
]

const presentationSlides = [
  { name: "Title Slide",    desc: "Full-bleed hero with logo lockup and tagline." },
  { name: "Agenda",         desc: "Clean numbered list with section icons." },
  { name: "Two-column",     desc: "Text left, visual right â€” great for case studies." },
  { name: "Data Slide",     desc: "KPI spotlight cards with chart placeholder." },
  { name: "Quote",          desc: "Centered pull-quote with speaker attribution." },
  { name: "Thank You",      desc: "Closing slide with contact and QR code." },
]

const copySnippets = [
  {
    label: "Tagline",
    text: "Design decisions. Made once. Used everywhere.",
  },
  {
    label: "One-liner",
    text: "KEOS & K-Tern.ai is the visual and experience layer unifying all our products â€” color, type, motion, and interaction, themeable in real time.",
  },
  {
    label: "Mission",
    text: "We believe great design should never be rebuilt from scratch. KEOS & K-Tern.ai gives every team a shared language that ships faster and stays consistent.",
  },
  {
    label: "Tweet-size",
    text: "40+ components. 5 icon libraries. 10 typefaces. 2 live workspaces. One design system to rule them all. ðŸŽ¨",
  },
]

function CopySnippet({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="rounded-xl border p-5 space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
          className="rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase transition-colors hover:bg-muted"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  )
}

export default function MarketingKitPage() {
  const [activeTab, setActiveTab] = useState<"social" | "presentations" | "copy" | "email">("social")

  const tabs = [
    { id: "social" as const,         label: "Social" },
    { id: "presentations" as const,  label: "Presentations" },
    { id: "copy" as const,           label: "Copy" },
    { id: "email" as const,          label: "Email" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-16 sm:px-10">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">[ Marketing ]</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Marketing Kit</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Ready-to-use templates for social media, presentations, email campaigns, and
          copy â€” all on-brand for KEOS &amp; K-Tern.ai.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-80"
        >
          <Download className="h-3.5 w-3.5" />
          Download All Assets
        </a>
      </section>

      {/* Tab bar */}
      <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 sm:px-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`-mb-px border-b-2 px-4 pb-3 pt-3 font-mono text-[11px] tracking-widest whitespace-nowrap uppercase transition-colors ${
                activeTab === t.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">

        {/* Social */}
        {activeTab === "social" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Social Media Templates</h2>
              <p className="mt-1 text-sm text-muted-foreground">Pre-sized artwork for every platform, ready to customise in Figma.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {socialTemplates.map((t) => (
                <div key={t.name} className="group overflow-hidden rounded-xl border transition-all hover:shadow-md">
                  <div className="flex h-32 items-center justify-center" style={{ backgroundColor: t.bg }}>
                    <span className="font-mono text-[11px] tracking-widest text-white/60 uppercase">{t.size}</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <span className="font-mono text-[10px] text-muted-foreground">{t.tag}</span>
                    </div>
                    <button className="rounded-full border p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Presentations */}
        {activeTab === "presentations" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Presentation Deck</h2>
              <p className="mt-1 text-sm text-muted-foreground">6-slide starter template. Import into Google Slides or Figma Slides.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {presentationSlides.map((s, i) => (
                <div key={s.name} className="rounded-xl border p-5 space-y-3 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground">Slide {i + 1}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex h-24 items-center justify-center rounded-lg border border-dashed font-mono text-[11px] text-muted-foreground">
                    {s.name}
                  </div>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
            >
              <Download className="h-3.5 w-3.5" />
              Download Deck (.pptx &amp; Figma)
            </a>
          </div>
        )}

        {/* Copy */}
        {activeTab === "copy" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Brand Copy</h2>
              <p className="mt-1 text-sm text-muted-foreground">Approved messaging for pitches, social posts, and product descriptions.</p>
            </div>
            <div className="space-y-4">
              {copySnippets.map((s) => (
                <CopySnippet key={s.label} label={s.label} text={s.text} />
              ))}
            </div>
          </div>
        )}

        {/* Email */}
        {activeTab === "email" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Email Templates</h2>
              <p className="mt-1 text-sm text-muted-foreground">HTML-ready templates for newsletters, announcements, and onboarding.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["Newsletter", "Product Update", "Onboarding Welcome", "Event Invite"].map((name) => (
                <div key={name} className="overflow-hidden rounded-xl border hover:shadow-md transition-all group">
                  <div className="flex h-40 flex-col items-start gap-2 bg-muted/30 px-5 py-4">
                    <div className="h-2 w-16 rounded bg-foreground/20" />
                    <div className="h-2 w-32 rounded bg-foreground/10" />
                    <div className="mt-2 h-1.5 w-full rounded bg-foreground/10" />
                    <div className="h-1.5 w-5/6 rounded bg-foreground/10" />
                    <div className="h-1.5 w-4/6 rounded bg-foreground/10" />
                    <div className="mt-2 h-7 w-24 rounded-full bg-foreground/20" />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm font-semibold">{name}</p>
                    <button className="rounded-full border p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
