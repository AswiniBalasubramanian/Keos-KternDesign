"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { weeklyFitness } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function WeeklyFitnessCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...weeklyFitness.map((d) => d.calories))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Fitness Summary</CardTitle>
        <CardDescription>Calories and workout load by day</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-stretch gap-2">
          {weeklyFitness.map((d, i) => (
            <div key={`${d.day}-${i}`} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-md"
                  style={{
                    height: `${(d.calories / max) * 100}%`,
                    backgroundColor: activeChartColors[0],
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button className="w-full">View details</Button>
      </CardFooter>
    </Card>
  )
}
