"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function TypographyBodyCard() {
  const { font } = useThemeStudio()

  return (
    <Card>
      <CardContent className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">INHERIT - {font.toUpperCase()}</p>
        <h3 className="font-heading text-2xl font-bold leading-tight">
          Designing with rhythm and hierarchy.
        </h3>
        <p className="text-sm text-muted-foreground">
          A strong body style keeps long-form content readable and balances the visual weight of
          headings.
        </p>
        <p className="text-sm text-muted-foreground">
          Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.
        </p>
      </CardContent>
    </Card>
  )
}
