"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { DitherIllustration } from "@/components/site/dither-illustration"
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

export default function FoundationPage() {
  const [active, setActive] = useState(foundationSections[0].id)
  const section = foundationSections.find((s) => s.id === active) ?? foundationSections[0]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="mx-auto flex w-full max-w-6xl flex-1">
        <aside className="w-56 shrink-0 border-r px-4 py-10">
          <p className="mb-3 px-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Foundations
          </p>
          <nav className="space-y-0.5">
            {foundationSections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`block w-full rounded-md px-2 py-1.5 text-left text-sm ${
                  s.id === active
                    ? "bg-accent font-medium text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-8 py-10">
          <div className="mb-8 max-w-xl space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">{section.label}</h1>
            <p className="text-sm text-muted-foreground">{section.description}</p>
          </div>

          {section.id === "color" && (
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
                {colorTokens.map((c) => (
                  <div key={c.name} className="space-y-1.5">
                    <div className={`h-16 w-full rounded-md ${c.className}`} />
                    <p className="text-xs text-muted-foreground">{c.name}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="mb-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  Chart Palette
                </p>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
                  {chartTokens.map((c) => (
                    <div key={c.name} className="space-y-1.5">
                      <div className={`h-16 w-full rounded-md ${c.className}`} />
                      <p className="text-xs text-muted-foreground">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section.id === "typography" && (
            <div className="space-y-4">
              {typeScale.map((t) => (
                <div key={t.name} className="flex items-baseline gap-4 border-b pb-3">
                  <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">{t.name}</span>
                  <span className={`font-heading ${t.className}`}>The quick brown fox jumps.</span>
                </div>
              ))}
            </div>
          )}

          {section.id === "spacing" && (
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

          {section.id === "radius" && (
            <div className="flex flex-wrap gap-6">
              {radiusTokens.map((r) => (
                <div key={r.name} className="space-y-1.5 text-center">
                  <div className="h-20 w-20 border bg-muted" style={{ borderRadius: r.value }} />
                  <p className="text-xs text-muted-foreground">{r.name}</p>
                </div>
              ))}
            </div>
          )}

          {section.id === "iconography" && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {iconLibraryNames.map((lib) => (
                <div key={lib} className="rounded-lg border p-4 text-center">
                  <p className="text-sm font-medium">{lib}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Selectable in Studio</p>
                </div>
              ))}
            </div>
          )}

          {section.id === "elevation" && (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {elevationTokens.map((e) => (
                <div key={e.name} className="space-y-1.5">
                  <div className={`h-16 w-full rounded-lg bg-card ${e.className}`} />
                  <p className="text-xs text-muted-foreground">{e.name}</p>
                </div>
              ))}
            </div>
          )}

          {section.id === "illustration" && (
            <div className="flex flex-col items-center gap-4 rounded-xl border py-16 text-center">
              <DitherIllustration />
              <p className="max-w-xs text-xs text-muted-foreground">
                Rendered client-side with ordered dithering — no image assets required.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
