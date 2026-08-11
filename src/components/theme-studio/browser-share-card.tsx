"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { browserShare } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function BrowserShareCard() {
  const { activeChartColors } = useThemeStudio()
  const total = browserShare.reduce((sum, b) => sum + b.percent, 0)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])

  const stops = browserShare.reduce<{ text: string[]; cursor: number }>(
    (acc, b, i) => {
      const start = (acc.cursor / total) * 360
      const nextCursor = acc.cursor + b.percent
      const end = (nextCursor / total) * 360
      acc.text.push(`${activeChartColors[i % activeChartColors.length]} ${start}deg ${end}deg`)
      acc.cursor = nextCursor
      return acc
    },
    { text: [], cursor: 0 }
  ).text

  const leading = browserShare[0]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browser Share</CardTitle>
        <CardDescription>January - June 2026</CardDescription>
        <CardAction>
          <Badge variant="outline">{leading.label}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div
          className="flex h-40 w-40 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(${stops.join(", ")})`,
            transform: mounted ? "scale(1)" : "scale(0.6)",
            opacity: mounted ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
          }}
        >
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-card">
            <span className="text-2xl font-bold">{total * 10}</span>
            <span className="text-xs text-muted-foreground">Visitors</span>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 text-xs">
          {browserShare.map((b, i) => (
            <span key={b.id} className="flex items-center gap-1.5 text-muted-foreground">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: activeChartColors[i % activeChartColors.length] }}
              />
              {b.label}
            </span>
          ))}
        </div>
        <div className="w-full space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span>{leading.label}</span>
            <span className="text-muted-foreground">{leading.percent}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full"
              style={{
                width: mounted ? `${leading.percent}%` : "0%",
                backgroundColor: activeChartColors[0],
                transition: "width 0.6s cubic-bezier(0.4,0,0.2,1) 0.3s",
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
