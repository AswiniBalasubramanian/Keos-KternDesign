"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sleepReport } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function SleepReportCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...sleepReport.map((n) => n.deep + n.light + n.rem))
  const [hovered, setHovered] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Report</CardTitle>
        <CardDescription>Last night · 7h 24m</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-stretch gap-4">
          {sleepReport.map((night, i) => (
            <div key={night.label} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="relative flex w-full flex-1 flex-col-reverse overflow-visible"
                onMouseEnter={() => setHovered(night.label)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === night.label && (
                  <div className="absolute bottom-[calc(100%+6px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background shadow-sm">
                    <div>Deep: {night.deep}h</div>
                    <div>Light: {night.light}h</div>
                    <div>REM: {night.rem}h</div>
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>
                )}
                <div className="flex w-full flex-1 cursor-pointer flex-col-reverse overflow-hidden rounded-md hover:opacity-80">
                  <div
                    style={{
                      height: mounted ? `${(night.deep / max) * 100}%` : "0%",
                      backgroundColor: activeChartColors[3],
                      transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`,
                    }}
                  />
                  <div
                    style={{
                      height: mounted ? `${(night.light / max) * 100}%` : "0%",
                      backgroundColor: activeChartColors[1],
                      transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.07 + 0.05}s`,
                    }}
                  />
                  <div
                    style={{
                      height: mounted ? `${(night.rem / max) * 100}%` : "0%",
                      backgroundColor: activeChartColors[0],
                      transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.07 + 0.1}s`,
                    }}
                  />
                </div>
              </div>
              <span className="text-xs font-medium">{night.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
          <span>Deep</span>
          <span>Light</span>
          <span>REM</span>
          <span>Score</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Badge variant="secondary">Good</Badge>
        <Button variant="outline" size="sm">
          Details
        </Button>
      </CardFooter>
    </Card>
  )
}
