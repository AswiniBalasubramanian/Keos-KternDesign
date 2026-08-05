"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"
import { ledgerTransactions } from "@/lib/ledger-widgets-data"

export function LedgerTransactionsCard() {
  const { iconLibrary } = useThemeStudio()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest account activity.</CardDescription>
        <CardAction>
          <Button variant="link" size="sm" className="h-auto p-0">
            View All
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-1">
        {ledgerTransactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between gap-3 border-b py-2.5 last:border-0">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border">
                <DynamicIcon name="card" library={iconLibrary} className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">{tx.name}</p>
                <p className="text-xs text-muted-foreground">{tx.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">{tx.date}</span>
              <span className={`text-sm font-medium ${tx.positive ? "text-emerald-600" : ""}`}>
                {tx.amount}
              </span>
              <DynamicIcon name="more" library={iconLibrary} className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
