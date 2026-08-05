"use client"

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function FrontDoorCard() {
  const { iconLibrary } = useThemeStudio()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Front Door</CardTitle>
          <p className="text-xs text-muted-foreground">Smart Lock Pro</p>
        </div>
        <CardAction>
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Live</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex h-40 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
          Live camera preview
        </div>
        <div className="flex items-center gap-2 text-sm">
          <DynamicIcon name="lock" library={iconLibrary} className="h-4 w-4" />
          Locked
        </div>
      </CardContent>
    </Card>
  )
}
