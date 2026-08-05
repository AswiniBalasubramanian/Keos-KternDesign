"use client"

import { X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { dividendHoldings } from "@/lib/ledger-widgets-data"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function DividendIncomeCard() {
  const { activeChartColors } = useThemeStudio()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Q2 Dividend Income</CardTitle>
        <CardDescription>Quarterly dividend payouts across your portfolio holdings.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <X className="h-3.5 w-3.5" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        {dividendHoldings.map((h) => {
          const max = Math.max(...h.spark)
          return (
            <div key={h.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium">{h.name}</p>
                <p className="text-xs text-muted-foreground">{h.shares}</p>
              </div>
              <div className="flex items-end gap-0.5">
                {h.spark.map((v, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-sm"
                    style={{ height: `${(v / max) * 20 + 4}px`, backgroundColor: activeChartColors[0] }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{h.amount}</span>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
