"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function DistributeTrackCard() {
  const { iconLibrary } = useThemeStudio()

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border">
          <DynamicIcon name="plus" library={iconLibrary} className="h-4 w-4" />
        </div>
        <p className="text-sm font-medium">Distribute Track</p>
        <p className="px-4 text-xs text-muted-foreground">
          Upload your first master to start reaching listeners on Spotify, Apple Music, and more.
        </p>
        <Button size="sm">Create Release</Button>
      </CardContent>
    </Card>
  )
}
