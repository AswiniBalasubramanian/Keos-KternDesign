"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { KMark } from "@/components/site/k-mark"
import { KternMark } from "@/components/site/ktern-mark"
import { Check, Copy, Download } from "lucide-react"

// â”€â”€ Color tokens â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const brandColors = [
  { name: "Keos Orange",    hex: "#F97316", var: "--color-keos-orange",  group: "Primary" },
  { name: "Keos Dark",      hex: "#0D0D0D", var: "--color-keos-dark",    group: "Primary" },
  { name: "K-Tern Cyan",    hex: "#06B6D4", var: "--color-ktern-cyan",   group: "Secondary" },
  { name: "K-Tern Violet",  hex: "#8B5CF6", var: "--color-ktern-violet", group: "Secondary" },
  { name: "Surface",        hex: "#FAFAFA", var: "--background",          group: "Neutral" },
  { name: "Border",         hex: "#E5E7EB", var: "--border",              group: "Neutral" },
  { name: "Muted Text",     hex: "#6B7280", var: "--muted-foreground",    group: "Neutral" },
  { name: "Foreground",     hex: "#111827", var: "--foreground",          group: "Neutral" },
]

// â”€â”€ Type specimens â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const typeSpecimens = [
  { name: "Display",   size: "text-5xl", weight: "font-bold",     sample: "Aa" },
  { name: "Heading 1", size: "text-3xl", weight: "font-bold",     sample: "Design Systems" },
  { name: "Heading 2", size: "text-xl",  weight: "font-semibold", sample: "Component Library" },
  { name: "Body",      size: "text-sm",  weight: "font-normal",   sample: "The visual and experience layer behind KEOS & KTERN." },
  { name: "Caption",   size: "text-xs",  weight: "font-normal",   sample: "Made once. Used everywhere. Unified and themeable." },
  { name: "Mono",      size: "text-xs",  weight: "font-normal",   sample: "COLOR · TYPOGRAPHY · MOTION · SPACING",  mono: true },
]

// â”€â”€ Logo usage rules â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const logoRules = [
  { label: "Do",   ok: true,  text: "Use the logo on white or very dark backgrounds." },
  { label: "Do",   ok: true,  text: "Maintain minimum 16px clear space on all sides." },
  { label: "Do",   ok: true,  text: "Scale proportionally â€” never stretch or distort." },
  { label: "Don't", ok: false, text: "Don't rotate, skew, or add drop shadows." },
  { label: "Don't", ok: false, text: "Don't place the mark on a busy or low-contrast background." },
  { label: "Don't", ok: false, text: "Don't recolor the mark outside the approved palette." },
]

function ColorSwatch({ color }: { color: typeof brandColors[0] }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(color.hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button
      onClick={copy}
      className="group flex flex-col overflow-hidden rounded-xl border transition-all hover:shadow-md text-left"
    >
      <div className="h-20 w-full" style={{ backgroundColor: color.hex }} />
      <div className="flex items-start justify-between gap-2 px-3 py-2.5">
        <div>
          <p className="text-xs font-semibold leading-tight">{color.name}</p>
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{color.hex}</p>
        </div>
        <span className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
          {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
        </span>
      </div>
    </button>
  )
}

export default function BrandingKitPage() {
  const [activeTab, setActiveTab] = useState<"logos" | "colors" | "typography" | "guidelines">("logos")

  const tabs = [
    { id: "logos" as const,      label: "Logos" },
    { id: "colors" as const,     label: "Colors" },
    { id: "typography" as const, label: "Typography" },
    { id: "guidelines" as const, label: "Guidelines" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-16 sm:px-10">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">[ Brand ]</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Branding Kit</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Official logos, colors, typography, and usage guidelines for KEOS &amp; K-Tern.
          Everything you need to represent the brand consistently.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-80"
        >
          <Download className="h-3.5 w-3.5" />
          Download Full Kit
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

        {/* â”€â”€ Logos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {activeTab === "logos" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Logo Marks</h2>
              <p className="mt-1 text-sm text-muted-foreground">Primary marks for KEOS and K-Tern.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { bg: "bg-background", border: true,  label: "KMark · Light",  mark: <KMark className="h-12 w-12 text-foreground" /> },
                { bg: "bg-foreground", border: false,  label: "KMark · Dark",   mark: <KMark className="h-12 w-12 text-background" /> },
                { bg: "bg-background", border: true,  label: "K-Tern · Light", mark: <KternMark className="h-12 w-12 text-foreground" /> },
                { bg: "bg-foreground", border: false,  label: "K-Tern · Dark",  mark: <KternMark className="h-12 w-12 text-background" /> },
              ].map((v, i) => (
                <div key={i} className={`overflow-hidden rounded-xl ${v.border ? "border" : ""}`}>
                  <div className={`flex h-36 items-center justify-center ${v.bg}`}>
                    {v.mark}
                  </div>
                  <div className="flex items-center justify-between border-t px-3 py-2">
                    <p className="text-xs text-muted-foreground">{v.label}</p>
                    <Download className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight">Combined Lockup</h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">Full wordmark combining both brands side by side.</p>
              <div className="flex items-center justify-center gap-4 rounded-xl border py-12">
                <KMark className="h-10 w-10 text-foreground" />
                <span className="text-xl font-light text-muted-foreground/50">+</span>
                <KternMark className="h-9 w-9 text-foreground" />
                <span className="text-base font-semibold tracking-tight">Keos &amp; K-Tern Design</span>
              </div>
            </div>
          </div>
        )}

        {/* â”€â”€ Colors â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {activeTab === "colors" && (
          <div className="space-y-12">
            {(["Primary", "Secondary", "Neutral"] as const).map((group) => (
              <div key={group}>
                <h2 className="mb-4 text-lg font-semibold tracking-tight">{group}</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {brandColors.filter((c) => c.group === group).map((c) => (
                    <ColorSwatch key={c.name} color={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* â”€â”€ Typography â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {activeTab === "typography" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Type Scale</h2>
              <p className="mt-1 text-sm text-muted-foreground">DM Sans for UI text · DM Mono for labels and code.</p>
            </div>
            <div className="divide-y rounded-xl border overflow-hidden">
              {typeSpecimens.map((t) => (
                <div key={t.name} className="flex items-center gap-6 px-6 py-5">
                  <div className="w-28 shrink-0">
                    <p className="text-xs font-semibold">{t.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{t.size.replace("text-", "")}</p>
                  </div>
                  <p className={`${t.size} ${t.weight} ${t.mono ? "font-mono tracking-widest text-muted-foreground uppercase" : "tracking-tight"} truncate`}>
                    {t.sample}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* â”€â”€ Guidelines â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {activeTab === "guidelines" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Logo Usage</h2>
              <p className="mt-1 text-sm text-muted-foreground">Follow these rules to keep the brand consistent.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {logoRules.map((r, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${
                    r.ok ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"
                  }`}
                >
                  <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest uppercase ${
                    r.ok ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
                  }`}>
                    {r.label}
                  </span>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Minimum Size</h2>
              <div className="flex flex-wrap items-end gap-8 rounded-xl border px-8 py-10">
                {[6, 8, 12, 16, 20].map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <div style={{ width: size * 4, height: size * 4 }}>
                      <KMark className="h-full w-full text-foreground" />
                    </div>
                    <p className="font-mono text-[10px] text-muted-foreground">{size * 4}px</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
