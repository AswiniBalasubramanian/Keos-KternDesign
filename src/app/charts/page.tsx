"use client"

import { useState, useEffect } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const barData = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 78 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 90 },
  { label: "May", value: 65 },
  { label: "Jun", value: 100 },
]

const lineData = [28, 45, 38, 60, 52, 70, 58, 85, 72, 95, 80, 100]

const donutData = [
  { label: "Direct", value: 40, color: "var(--chart-2)" },
  { label: "Organic", value: 30, color: "var(--chart-3)" },
  { label: "Referral", value: 20, color: "var(--chart-4)" },
  { label: "Social", value: 10, color: "var(--chart-1)" },
]

const areaData = [20, 35, 28, 50, 42, 65, 55, 75, 68, 88, 78, 100]

const BAR_MAX_PX = 140

function BarChart() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])
  const max = Math.max(...barData.map((d) => d.value))
  return (
    <div className="flex items-end gap-3 pt-4" style={{ height: BAR_MAX_PX + 24 }}>
      {barData.map((d, i) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full rounded-t-md cursor-pointer hover:opacity-80"
            style={{
              height: mounted ? `${(d.value / max) * BAR_MAX_PX}px` : "0px",
              backgroundColor: "var(--chart-2)",
              transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s`,
            }}
          />
          <span className="text-[10px] text-muted-foreground">{d.label}</span>
        </div>
      ))}
    </div>
  )
}

function LineChart() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])
  const max = Math.max(...lineData)
  const w = 100 / (lineData.length - 1)
  const points = lineData.map((v, i) => `${i * w},${100 - (v / max) * 100}`)
  return (
    <div className="h-48 w-full pt-4">
      <svg viewBox={`0 0 100 100`} preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="line-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-2)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--chart-2)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="line-clip">
            <rect x="0" y="0" width={mounted ? "100" : "0"} height="100" style={{ transition: "width 1s ease" }} />
          </clipPath>
        </defs>
        <polygon
          points={`0,100 ${points.join(" ")} 100,100`}
          fill="url(#line-fill)"
          clipPath="url(#line-clip)"
        />
        <polyline
          points={points.join(" ")}
          fill="none"
          stroke="var(--chart-2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          clipPath="url(#line-clip)"
        />
        {lineData.map((v, i) => (
          <circle
            key={i}
            cx={i * w}
            cy={100 - (v / max) * 100}
            r="1.5"
            fill="var(--chart-2)"
            vectorEffect="non-scaling-stroke"
            clipPath="url(#line-clip)"
          />
        ))}
      </svg>
    </div>
  )
}

function DonutChart() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])
  const total = donutData.reduce((s, d) => s + d.value, 0)
  const stops = donutData.reduce<{ text: string[]; cursor: number }>(
    (acc, d) => {
      const start = (acc.cursor / total) * 360
      const end = ((acc.cursor + d.value) / total) * 360
      acc.text.push(`${d.color} ${start}deg ${end}deg`)
      acc.cursor += d.value
      return acc
    },
    { text: [], cursor: 0 }
  ).text
  return (
    <div className="flex items-center gap-8 py-4">
      <div
        className="h-40 w-40 shrink-0 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(${stops.join(", ")})`,
          transform: mounted ? "scale(1)" : "scale(0.6)",
          opacity: mounted ? 1 : 0,
          transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
        }}
      >
        <div className="h-24 w-24 rounded-full bg-card flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{total}%</span>
          <span className="text-[10px] text-muted-foreground">Total</span>
        </div>
      </div>
      <div className="space-y-2">
        {donutData.map((d) => (
          <div key={d.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
            <span className="text-muted-foreground">{d.label}</span>
            <span className="ml-auto font-medium">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AreaChart() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])
  const max = Math.max(...areaData)
  const w = 100 / (areaData.length - 1)
  const points = areaData.map((v, i) => `${i * w},${100 - (v / max) * 100}`)
  return (
    <div className="h-48 w-full pt-4">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-3)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--chart-3)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="area-clip">
            <rect x="0" y="0" width={mounted ? "100" : "0"} height="100" style={{ transition: "width 1s ease" }} />
          </clipPath>
        </defs>
        <polygon
          points={`0,100 ${points.join(" ")} 100,100`}
          fill="url(#area-fill)"
          clipPath="url(#area-clip)"
        />
        <polyline
          points={points.join(" ")}
          fill="none"
          stroke="var(--chart-3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          clipPath="url(#area-clip)"
        />
      </svg>
    </div>
  )
}

const charts = [
  { id: "bar", label: "Bar", badge: "Column", component: <BarChart />, description: "Compare values across categories with vertical bars." },
  { id: "line", label: "Line", badge: "Trend", component: <LineChart />, description: "Show continuous data trends over time." },
  { id: "donut", label: "Donut", badge: "Proportion", component: <DonutChart />, description: "Visualise part-to-whole relationships." },
  { id: "area", label: "Area", badge: "Volume", component: <AreaChart />, description: "Emphasise volume and cumulative change over time." },
]

export function ChartsContent({ activeId }: { activeId: string }) {
  const chart = charts.find((c) => c.id === activeId) ?? charts[0]
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">{chart.label} Chart</h2>
          <Badge variant="secondary">{chart.badge}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{chart.description}</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="preview">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" key={activeId}>{chart.component}</TabsContent>
            <TabsContent value="usage">
              <pre className="rounded-lg bg-muted p-4 text-xs leading-relaxed overflow-auto">
{`// Themed to match your active chart palette
// Chart colors update live from the Studio`}
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {charts.filter((c) => c.id !== activeId).map((c) => (
          <div key={c.id} className="rounded-xl border bg-muted/30 p-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{c.label}</span>
              <Badge variant="outline" className="text-[10px]">{c.badge}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ChartsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="mx-auto w-full max-w-6xl px-8 py-14 sm:px-10">
        <div className="mb-10 space-y-2">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Charts</p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight">Chart Primitives</h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Lightweight, themeable chart components built without a chart library — pure SVG and CSS, responding to your active palette.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {charts.map((chart) => (
            <Card key={chart.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>{chart.label}</CardTitle>
                  <Badge variant="secondary">{chart.badge}</Badge>
                </div>
                <CardDescription>{chart.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="preview">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="usage">Usage</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview">{chart.component}</TabsContent>
                  <TabsContent value="usage">
                    <pre className="rounded-lg bg-muted p-4 text-xs leading-relaxed overflow-auto">
{`// Themed to match your active chart palette
// Chart colors update live from the Studio`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
