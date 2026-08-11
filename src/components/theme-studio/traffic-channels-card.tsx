"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { trafficChannels } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function TrafficChannelsCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...trafficChannels.map((m) => Math.max(m.desktop, m.mobile)))
  const [hovered, setHovered] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic channels</CardTitle>
        <CardDescription>
          Monthly desktop and mobile traffic for the last six months — compare volume and mix
          across platforms.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex h-40 items-stretch gap-3">
          {trafficChannels.map((month, i) => (
            <div key={month.month} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="relative flex w-full flex-1 items-end gap-1"
                onMouseEnter={() => setHovered(month.month)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === month.month && (
                  <div className="absolute bottom-[calc(100%+6px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background shadow-sm">
                    <div>Desktop: {month.desktop}</div>
                    <div>Mobile: {month.mobile}</div>
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>
                )}
                <div
                  className="w-1/2 cursor-pointer rounded-t-sm hover:opacity-80"
                  style={{
                    height: mounted ? `${(month.desktop / max) * 100}%` : "0%",
                    backgroundColor: activeChartColors[0],
                    transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s, opacity 0.2s`,
                  }}
                />
                <div
                  className="w-1/2 cursor-pointer rounded-t-sm hover:opacity-80"
                  style={{
                    height: mounted ? `${(month.mobile / max) * 100}%` : "0%",
                    backgroundColor: activeChartColors[1],
                    transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.06 + 0.03}s, opacity 0.2s`,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{month.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: activeChartColors[0] }} />
            Desktop
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: activeChartColors[1] }} />
            Mobile
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
