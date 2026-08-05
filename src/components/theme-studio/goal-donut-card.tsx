"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

const goal = { current: 24000, target: 30000, projectedFinish: "October 2024", monthlyAverage: "$1,250", topContributor: "Auto-Transfer" }

export function GoalDonutCard() {
  const { activeChartColors } = useThemeStudio()
  const percent = Math.round((goal.current / goal.target) * 100)

  return (
    <Card>
      <CardContent className="space-y-4">
        <div
          className="mx-auto flex h-36 w-36 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(${activeChartColors[0]} 0% ${percent}%, var(--muted) ${percent}% 100%)`,
          }}
        >
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-card text-center">
            <span className="text-xl font-bold">${(goal.current / 1000).toFixed(0)},000</span>
            <span className="text-xs text-muted-foreground">
              {percent}% of ${(goal.target / 1000).toFixed(0)},000
            </span>
          </div>
        </div>
        <div className="space-y-2 border-t pt-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Projected Finish</span>
            <span>{goal.projectedFinish}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Monthly Average</span>
            <span>{goal.monthlyAverage}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Top Contributor</span>
            <span>{goal.topContributor}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
