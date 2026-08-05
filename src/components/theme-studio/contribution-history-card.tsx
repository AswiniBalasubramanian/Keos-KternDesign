"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { contributionHistory } from "@/lib/dashboard-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function ContributionHistoryCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...contributionHistory.map((m) => m.value))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
        <CardDescription>Last 6 months of activity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex h-40 items-stretch gap-4">
          {contributionHistory.map((month) => (
            <div key={month.month} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-md"
                  style={{
                    height: `${(month.value / max) * 100}%`,
                    backgroundColor: activeChartColors[0],
                  }}
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
