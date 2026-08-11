"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { weeklyFitness } from "@/lib/extra-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function WeeklyFitnessCard() {
  const { activeChartColors } = useThemeStudio()
  const max = Math.max(...weeklyFitness.map((d) => d.calories))
  const [hovered, setHovered] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setMounted(true)) }, [])

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
                {hovered === d.day && (
                  <div className="absolute bottom-[calc(100%+6px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background shadow-sm">
                    {d.day}: {d.calories} kcal
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>
                )}
                <div
                  className="w-full cursor-pointer rounded-md hover:opacity-80"
                  style={{
                    height: mounted ? `${(d.calories / max) * 100}%` : "0%",
                    backgroundColor: activeChartColors[0],
                    transition: `height 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s, opacity 0.2s`,
                  }}
                  onMouseEnter={() => setHovered(d.day)}
                  onMouseLeave={() => setHovered(null)}
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
