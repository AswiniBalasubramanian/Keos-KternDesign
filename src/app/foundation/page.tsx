"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { DotGridBackground } from "@/components/site/dot-grid-background"
import { DitherIllustration } from "@/components/site/dither-illustration"
import { ComponentDetailClient } from "@/components/site/component-detail-client"
import { ChartsContent } from "@/app/charts/page"
import { AiUxContent } from "@/app/ai-ux/page"
import { PatternsContent } from "@/app/blocks/page"
import { ColorSwatch } from "@/components/site/color-swatch"
import {
  foundationSections,
  colorTokens,
  chartTokens,
  spacingTokens,
  radiusTokens,
  typeScale,
  iconLibraryNames,
  elevationTokens,
} from "@/lib/foundation-data"
import { components as componentDocs, componentCategories } from "@/lib/components-data"
import { blockCategories } from "@/lib/blocks-data"

/* ─── Section thumbnails ─────────────────────────────────────────────────── */

function ThumbColor() {
  const swatches = [
    "bg-primary", "bg-secondary", "bg-accent", "bg-muted",
    "bg-foreground", "bg-destructive", "bg-success", "bg-warning",
    "bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4",
  ]
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {swatches.map((c, i) => (
        <div key={i} className={`h-8 w-8 rounded-md ${c}`} />
      ))}
    </div>
  )
}

function ThumbTypography() {
  return (
    <div className="flex flex-col gap-1 leading-none select-none">
      <span className="font-heading text-5xl font-bold tracking-tight text-foreground/90">Aa</span>
      {["text-2xl", "text-xl", "text-lg", "text-base", "text-sm", "text-xs"].map((s, i) => (
        <span key={i} className={`${s} font-heading text-muted-foreground/60`}>The quick brown fox</span>
      ))}
    </div>
  )
}

function ThumbSpacing() {
  const sizes = [64, 48, 36, 24, 16, 8]
  return (
    <div className="flex items-end gap-2">
      {sizes.map((s, i) => (
        <div
          key={i}
          className="rounded border border-primary/30 bg-primary/10"
          style={{ width: s, height: s }}
        />
      ))}
    </div>
  )
}

function ThumbRadius() {
  const radii = ["0px", "4px", "8px", "12px", "18px", "9999px"]
  return (
    <div className="flex items-center gap-3">
      {radii.map((r, i) => (
        <div
          key={i}
          className="h-10 w-10 border-2 border-foreground/30 bg-muted"
          style={{ borderRadius: r }}
        />
      ))}
    </div>
  )
}

function ThumbIconography() {
  const icons = [
    "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v4M12 16h.01",
    "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {icons.map((d, i) => (
        <div key={i} className="flex h-10 w-10 items-center justify-center rounded-lg border bg-muted/50">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-foreground/70">
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
          </svg>
        </div>
      ))}
    </div>
  )
}

function ThumbElevation() {
  return (
    <div className="relative h-20 w-48">
      {[
        "shadow-sm translate-x-0 translate-y-0 z-30",
        "shadow-md translate-x-4 translate-y-3 z-20",
        "shadow-lg translate-x-8 translate-y-6 z-10",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute left-0 top-0 h-14 w-36 rounded-xl border bg-card ${cls}`}
        />
      ))}
    </div>
  )
}

function ThumbIllustration() {
  return (
    <div className="scale-75 origin-left opacity-80">
      <DitherIllustration />
    </div>
  )
}

const sectionThumbs: Record<string, React.ReactNode> = {
  color: <ThumbColor />,
  typography: <ThumbTypography />,
  spacing: <ThumbSpacing />,
  radius: <ThumbRadius />,
  iconography: <ThumbIconography />,
  elevation: <ThumbElevation />,
  illustration: <ThumbIllustration />,
}

/* ─── Sidebar nav items ──────────────────────────────────────────────────── */

type ActiveGroup = "foundation" | "components" | "patterns" | "charts" | "aiux"

const chartSidebarItems = [
  { id: "bar",   label: "Bar Chart" },
  { id: "line",  label: "Line Chart" },
  { id: "area",  label: "Area Chart" },
  { id: "donut", label: "Donut Chart" },
]

const aiUxSidebarItems = [
  { id: "chat",        label: "Chat Interface" },
  { id: "streaming",   label: "Streaming" },
  { id: "actions",     label: "Tool Actions" },
  { id: "suggestions", label: "Suggestions" },
]

/* ─── Hero banner ────────────────────────────────────────────────────────── */

function SectionHero({
  group, id, foundationSection, componentDoc,
}: {
  group: ActiveGroup
  id: string
  foundationSection: typeof foundationSections[0] | undefined
  componentDoc: typeof componentDocs[0] | undefined
}) {
  let breadcrumb = ""
  let title = ""
  let description = ""
  let thumb: React.ReactNode = null

  if (group === "foundation" && foundationSection) {
    breadcrumb = `Foundation · ${foundationSection.label}`
    title = foundationSection.label
    description = foundationSection.description
    thumb = sectionThumbs[foundationSection.id]
  } else if (group === "components") {
    if (componentDoc) {
      breadcrumb = `Components · ${componentDoc.category}`
      title = componentDoc.name
      description = componentDoc.description
    } else {
      breadcrumb = "Components"
      title = "Components"
      description = "Beautifully designed components built with Base UI and Tailwind CSS."
    }
  } else if (group === "patterns") {
    const cat = blockCategories.find((c) => c.id === id)
    breadcrumb = `Patterns · ${cat?.label ?? "Featured"}`
    title = `${cat?.label ?? "Featured"} Patterns`
    description = "Clean, themeable sections assembled from the component library."
  } else if (group === "charts") {
    const chartLabels: Record<string, string> = { bar: "Bar", line: "Line", area: "Area", donut: "Donut" }
    breadcrumb = `Charts · ${chartLabels[id] ?? "Bar"}`
    title = `${chartLabels[id] ?? "Bar"} Chart`
    description = "Lightweight, themeable chart components built without a chart library — pure SVG and CSS."
  } else if (group === "aiux") {
    const aiLabels: Record<string, string> = { chat: "Chat Interface", streaming: "Streaming", actions: "Tool Actions", suggestions: "Suggestions" }
    breadcrumb = `AI UX · ${aiLabels[id] ?? "Overview"}`
    title = aiLabels[id] ?? "AI UX"
    description = "Chat surfaces, agent handoffs, streaming states, and empty-state starters."
  }

  return (
    <div className="relative overflow-hidden border-b px-8 py-10">
      <DotGridBackground className="absolute inset-0 z-0" spacing={24} dotSize={1.4} impactRadius={140} />
      <div className="relative z-10 flex items-center justify-between gap-8">
        <div className="space-y-2 max-w-sm">
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{breadcrumb}</p>
          <h1 className="font-heading text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        {thumb && (
          <div className="shrink-0 hidden sm:flex items-center justify-center rounded-2xl border bg-background/60 backdrop-blur-sm px-6 py-5 shadow-sm min-h-[100px]">
            {thumb}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Sidebar button ─────────────────────────────────────────────────────── */

function NavBtn({
  label, active, onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`block w-full rounded-md px-2 py-1.5 text-left text-sm ${
        active
          ? "bg-accent font-medium text-accent-foreground"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function FoundationPage() {
  const [activeGroup, setActiveGroup] = useState<ActiveGroup>("foundation")
  const [activeId, setActiveId] = useState("color")

  const foundationSection = foundationSections.find((s) => s.id === activeId)
  const componentDoc = activeGroup === "components" ? componentDocs.find((c) => c.slug === activeId) : undefined

  function activate(group: ActiveGroup, id: string) {
    setActiveGroup(group)
    setActiveId(id)
  }

  return (
    <div className="flex flex-col" style={{ height: "100dvh" }}>
      <SiteNav />
      <div className="mx-auto flex w-full max-w-6xl flex-1 overflow-hidden border-x">

        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <aside className="w-56 shrink-0 border-r overflow-y-auto px-4 py-8">

          {/* FOUNDATIONS */}
          <p className="mb-2 px-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Foundations
          </p>
          <nav className="space-y-0.5">
            {foundationSections.map((s) => (
              <NavBtn
                key={s.id}
                label={s.label}
                active={activeGroup === "foundation" && activeId === s.id}
                onClick={() => activate("foundation", s.id)}
              />
            ))}
          </nav>

          {/* COMPONENTS */}
          <p className="mt-6 mb-2 px-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Components
          </p>
          <nav className="space-y-0.5">
            {componentCategories.map((cat) => (
              <div key={cat}>
                <p className="mt-3 mb-0.5 px-2 font-mono text-[9px] tracking-widest text-muted-foreground/40 uppercase">
                  {cat}
                </p>
                {componentDocs.filter((c) => c.category === cat).map((c) => (
                  <NavBtn
                    key={c.slug}
                    label={c.name}
                    active={activeGroup === "components" && activeId === c.slug}
                    onClick={() => activate("components", c.slug)}
                  />
                ))}
              </div>
            ))}
          </nav>

          {/* PATTERNS */}
          <p className="mt-6 mb-2 px-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Patterns
          </p>
          <nav className="space-y-0.5">
            {blockCategories.map((cat) => (
              <NavBtn
                key={cat.id}
                label={cat.label}
                active={activeGroup === "patterns" && activeId === cat.id}
                onClick={() => activate("patterns", cat.id)}
              />
            ))}
          </nav>

          {/* CHARTS */}
          <p className="mt-6 mb-2 px-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Charts
          </p>
          <nav className="space-y-0.5">
            {chartSidebarItems.map((s) => (
              <NavBtn
                key={s.id}
                label={s.label}
                active={activeGroup === "charts" && activeId === s.id}
                onClick={() => activate("charts", s.id)}
              />
            ))}
          </nav>

          {/* AI UX */}
          <p className="mt-6 mb-2 px-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            AI UX
          </p>
          <nav className="space-y-0.5 pb-8">
            {aiUxSidebarItems.map((s) => (
              <NavBtn
                key={s.id}
                label={s.label}
                active={activeGroup === "aiux" && activeId === s.id}
                onClick={() => activate("aiux", s.id)}
              />
            ))}
          </nav>
        </aside>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0 overflow-y-auto">
          {/* Hero banner */}
          <SectionHero
            group={activeGroup}
            id={activeId}
            foundationSection={foundationSection}
            componentDoc={componentDoc}
          />

          {/* Content */}
          <div className="px-8 py-10">

            {/* Foundation sections */}
            {activeGroup === "foundation" && (
              <div>
                {activeId === "color" && (
                  <div className="space-y-8">
                    <div>
                      <p className="mb-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">Semantic Tokens</p>
                      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
                        {colorTokens.map((c) => (
                          <ColorSwatch key={c.name} name={c.name} className={c.className} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">Chart Palette</p>
                      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
                        {chartTokens.map((c) => (
                          <ColorSwatch key={c.name} name={c.name} className={c.className} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeId === "typography" && (
                  <div className="space-y-4">
                    {typeScale.map((t) => (
                      <div key={t.name} className="flex items-baseline gap-4 border-b pb-3">
                        <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">{t.name}</span>
                        <span className={`font-heading ${t.className}`}>The quick brown fox jumps.</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeId === "spacing" && (
                  <div className="space-y-3">
                    {spacingTokens.map((s) => (
                      <div key={s.name} className="flex items-center gap-4">
                        <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">{s.name}</span>
                        <div className="h-4 bg-primary" style={{ width: s.value }} />
                        <span className="font-mono text-xs text-muted-foreground">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeId === "radius" && (
                  <div className="flex flex-wrap gap-6">
                    {radiusTokens.map((r) => (
                      <div key={r.name} className="space-y-1.5 text-center">
                        <div className="h-20 w-20 border bg-muted" style={{ borderRadius: r.value }} />
                        <p className="text-xs text-muted-foreground">{r.name}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeId === "iconography" && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {iconLibraryNames.map((lib) => (
                      <div key={lib} className="rounded-lg border p-4 text-center">
                        <p className="text-sm font-medium">{lib}</p>
                        <p className="mt-1 text-xs text-muted-foreground">Selectable in Studio</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeId === "elevation" && (
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {elevationTokens.map((e) => (
                      <div key={e.name} className="space-y-1.5">
                        <div className={`h-16 w-full rounded-lg bg-card ${e.className}`} />
                        <p className="text-xs text-muted-foreground">{e.name}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeId === "illustration" && (
                  <div className="flex flex-col items-center gap-4 rounded-xl border py-16 text-center">
                    <DitherIllustration />
                    <p className="max-w-xs text-xs text-muted-foreground">
                      Rendered client-side with ordered dithering — no image assets required.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Components */}
            {activeGroup === "components" && componentDoc && (
              <ComponentDetailClient component={componentDoc} />
            )}
            {activeGroup === "components" && !componentDoc && (
              <div className="space-y-8">
                {componentCategories.map((cat) => {
                  const items = componentDocs.filter((c) => c.category === cat)
                  return (
                    <div key={cat} className="space-y-3">
                      <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">{cat}</p>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {items.map((c) => (
                          <button
                            key={c.slug}
                            onClick={() => activate("components", c.slug)}
                            className="group rounded-xl border bg-card p-5 text-left transition-colors hover:border-foreground/20 hover:bg-muted/50"
                          >
                            <p className="font-medium text-sm">{c.name}</p>
                            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Patterns */}
            {activeGroup === "patterns" && (
              <PatternsContent activeId={activeId} />
            )}

            {/* Charts */}
            {activeGroup === "charts" && (
              <ChartsContent activeId={activeId} />
            )}

            {/* AI UX */}
            {activeGroup === "aiux" && (
              <AiUxContent activeId={activeId} />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
