"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

const swatches = [
  { label: "--background", var: "--background" },
  { label: "--foreground", var: "--foreground" },
  { label: "--primary", var: "--primary" },
  { label: "--secondary", var: "--secondary" },
  { label: "--muted", var: "--muted" },
  { label: "--accent", var: "--accent" },
]

const chartSwatches = [
  { label: "--border", var: "--border" },
  { label: "--chart-1", var: "--chart-1" },
  { label: "--chart-2", var: "--chart-2" },
  { label: "--chart-3", var: "--chart-3" },
  { label: "--chart-4", var: "--chart-4" },
  { label: "--chart-5", var: "--chart-5" },
]

export function TypographyPreviewCard() {
  const { headingFont, font } = useThemeStudio()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {headingFont} - {font}
        </CardTitle>
        <CardDescription>
          Designers love packing quirky glyphs into test phrases. This is a preview of the
          typography…
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-6 gap-2">
          {swatches.map((s) => (
            <div key={s.var} className="space-y-1.5">
              <div className="h-11 w-full rounded-md border" style={{ backgroundColor: `var(${s.var})` }} />
              <p className="truncate text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-2">
          {chartSwatches.map((s) => (
            <div key={s.var} className="space-y-1.5">
              <div className="h-11 w-full rounded-md border" style={{ backgroundColor: `var(${s.var})` }} />
              <p className="truncate text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
