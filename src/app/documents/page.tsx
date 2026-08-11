import Link from "next/link"
import { SiteNav } from "@/components/site/site-nav"
import { Badge } from "@/components/ui/badge"

const changelog = [
  {
    version: "1.3.0",
    date: "Aug 2026",
    tag: "Feature",
    changes: [
      "Added Charts page with Bar, Line, Donut, and Area primitives",
      "Added AI UX pattern library with chat, streaming, and agent handoff demos",
      "Components page now has pastel chip navigation and live previews",
      "Orange theme preset with auto-linked chart color ramp",
    ],
  },
  {
    version: "1.2.0",
    date: "Aug 2026",
    tag: "Feature",
    changes: [
      "Chart animations — bars grow from base, donut springs in",
      "Hover tooltips on all chart cards in Studio",
      "Applied shadcn preset b3kHzdhiq — 9 components updated",
      "Renamed Blocks to Patterns in site nav",
    ],
  },
  {
    version: "1.1.0",
    date: "Aug 2026",
    tag: "Enhancement",
    changes: [
      "KEOS brand logo replaced in site header",
      "Dark/light mode toggle added",
      "Studio sidebar auto-syncs chart color when theme changes",
    ],
  },
  {
    version: "1.0.0",
    date: "Jul 2026",
    tag: "Initial",
    changes: [
      "26 UI components across 5 categories",
      "Theme Studio with live preview canvas",
      "Foundation docs: Color, Typography, Spacing, Radius, Iconography, Elevation",
      "Blocks/Patterns library with 5+ layout templates",
    ],
  },
]

const guides = [
  {
    title: "Getting Started",
    description: "Install the design system, configure Tailwind, and add your first component.",
    steps: [
      { label: "Install", code: "npx shadcn@latest init" },
      { label: "Add a component", code: "npx shadcn@latest add button" },
      { label: "Import", code: `import { Button } from "@/components/ui/button"` },
    ],
  },
  {
    title: "Theming",
    description: "Customise colors, fonts, radius, and chart palettes from the Studio.",
    steps: [
      { label: "Open Studio", code: "localhost:3000/studio" },
      { label: "Pick a theme", code: "Theme → Orange, Rose, Emerald, Slate…" },
      { label: "Copy CSS vars", code: `Get Code → paste into globals.css` },
    ],
  },
  {
    title: "Contributing",
    description: "Add a new component, fix a bug, or improve docs.",
    steps: [
      { label: "Clone", code: "git clone <repo>" },
      { label: "Install", code: "npm install" },
      { label: "Dev", code: "npm run dev" },
    ],
  },
]

const tagColor: Record<string, string> = {
  Feature: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
  Enhancement: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  Initial: "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
}

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="mx-auto w-full max-w-6xl px-8 py-14 sm:px-10">
        <div className="mb-10 space-y-2">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Docs</p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight">Documents</h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Guides, changelogs, and contribution docs for the Keos design system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Guides */}
          <div className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">Guides</h2>
            {guides.map((guide) => (
              <div key={guide.title} className="space-y-3 rounded-xl border p-5">
                <div>
                  <h3 className="font-medium text-sm">{guide.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{guide.description}</p>
                </div>
                <div className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{step.label}</p>
                        <code className="font-mono text-xs text-foreground">{step.code}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Changelog */}
          <div className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">Changelog</h2>
            <div className="space-y-6">
              {changelog.map((entry) => (
                <div key={entry.version} className="relative border-l-2 border-border pl-5">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-heading text-sm font-semibold">v{entry.version}</span>
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium ${tagColor[entry.tag]}`}
                    >
                      {entry.tag}
                    </span>
                    <span className="ml-auto text-[11px] text-muted-foreground">{entry.date}</span>
                  </div>
                  <ul className="space-y-1">
                    {entry.changes.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
