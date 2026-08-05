"use client"

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { analyticsSeries, cycleChecklist } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function AnalyticsCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...analyticsSeries.map((p) => p.value))
  const points = analyticsSeries
    .map((p, i) => {
      const x = (i / (analyticsSeries.length - 1)) * 100
      const y = 100 - (p.value / max) * 100
      return `${x},${y}`
    })
    .join(" ")
  const areaPoints = `0,100 ${points} 100,100`

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardAction>
          <Badge>+10%</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-2xl font-bold">418.2K Visitors</p>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-28 w-full">
          <polygon points={areaPoints} fill={activeChartColors[0]} opacity={0.25} />
          <polyline
            points={points}
            fill="none"
            stroke={activeChartColors[0]}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="space-y-2 border-t pt-3">
          <p className="text-xs font-medium text-muted-foreground">5 days remaining in cycle</p>
          {cycleChecklist.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full border" />
                {item.label}
              </span>
              {item.meta && <span className="text-xs text-muted-foreground">{item.meta}</span>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
