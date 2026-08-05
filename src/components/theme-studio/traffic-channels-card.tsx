"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { trafficChannels } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function TrafficChannelsCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...trafficChannels.map((m) => Math.max(m.desktop, m.mobile)))

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
          {trafficChannels.map((month) => (
            <div key={month.month} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex w-full flex-1 items-end gap-1">
                <div
                  className="w-1/2 rounded-t-sm"
                  style={{ height: `${(month.desktop / max) * 100}%`, backgroundColor: activeChartColors[0] }}
                />
                <div
                  className="w-1/2 rounded-t-sm"
                  style={{ height: `${(month.mobile / max) * 100}%`, backgroundColor: activeChartColors[1] }}
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
