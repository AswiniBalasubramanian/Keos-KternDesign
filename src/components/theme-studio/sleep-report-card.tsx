"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sleepReport } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function SleepReportCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...sleepReport.map((n) => n.deep + n.light + n.rem))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Report</CardTitle>
        <CardDescription>Last night · 7h 24m</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-stretch gap-4">
          {sleepReport.map((night) => (
            <div key={night.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 flex-col-reverse overflow-hidden rounded-md">
                <div
                  style={{ height: `${(night.deep / max) * 100}%`, backgroundColor: activeChartColors[3] }}
                />
                <div
                  style={{ height: `${(night.light / max) * 100}%`, backgroundColor: activeChartColors[1] }}
                />
                <div
                  style={{ height: `${(night.rem / max) * 100}%`, backgroundColor: activeChartColors[0] }}
                />
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
