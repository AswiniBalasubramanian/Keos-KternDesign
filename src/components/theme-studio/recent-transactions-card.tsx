import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { recentTransactions } from "@/lib/dashboard-data"

export function RecentTransactionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest account activity.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentTransactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
            <div>
              <p className="text-sm font-medium">{tx.label}</p>
              <p className="text-xs text-muted-foreground">{tx.date}</p>
            </div>
            <span
              className={`text-sm font-semibold ${tx.positive ? "text-emerald-600" : "text-foreground"}`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
