"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"
import { paymentOptions } from "@/lib/ledger-widgets-data"

export function PaymentsBreadcrumbCard() {
  const { iconLibrary } = useThemeStudio()

  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span>Home</span>
          <DynamicIcon name="arrowRight" library={iconLibrary} className="h-3 w-3" />
          <span className="text-foreground">Payments</span>
        </div>
        <div className="space-y-2">
          {paymentOptions.map((opt) => (
            <button
              key={opt.id}
              className="flex w-full items-center justify-between rounded-md border px-3 py-2.5 text-left hover:bg-accent"
            >
              <div>
                <p className="text-sm font-medium">{opt.title}</p>
                <p className="text-xs text-muted-foreground">{opt.description}</p>
              </div>
              <DynamicIcon name="arrowRight" library={iconLibrary} className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
