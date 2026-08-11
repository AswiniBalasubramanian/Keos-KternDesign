"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { contributionHistory } from "@/lib/dashboard-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function ContributionHistoryCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...contributionHistory.map((m) => m.value))
  const [hovered, setHovered] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
        <CardDescription>Last 6 months of activity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex h-40 items-stretch gap-4">
          {contributionHistory.map((month, i) => (
            <div key={month.month} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex w-full flex-1 items-end">
                {hovered === month.month && (
                  <div className="absolute bottom-[calc(100%+6px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background shadow-sm">
                    {month.month}: {month.value}
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>
                )}
                <div
                  className="w-full cursor-pointer rounded-md hover:opacity-80"
                  style={{
                    height: mounted ? `${(month.value / max) * 100}%` : "0%",
                    backgroundColor: activeChartColors[0],
                    transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s, opacity 0.2s`,
                  }}
                  onMouseEnter={() => setHovered(month.month)}
                  onMouseLeave={() => setHovered(null)}
                />
              </div>
              <span className="text-xs text-muted-foreground">{month.month}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md border p-3">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">UPCOMING</p>
            <p className="mt-1 text-sm font-semibold">May 25, 2024</p>
            <p className="text-xs text-muted-foreground">$1,000 scheduled</p>
          </div>
          <div className="rounded-md border p-3">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">AUTO-SAVE PLAN</p>
            <p className="mt-1 text-sm font-semibold">Accelerated</p>
            <p className="text-xs text-muted-foreground">Recurring weekly</p>
          </div>
        </div>

        <Button className="w-full">View Full Report</Button>
      </CardContent>
    </Card>
  )
}
