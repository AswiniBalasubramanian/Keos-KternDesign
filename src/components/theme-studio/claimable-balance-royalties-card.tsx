import { Card, CardContent, CardHeader, CardAction } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const rows = [
  { id: "r1", label: "Net Royalties", value: "$0.00" },
  { id: "r2", label: "Processing Fee", value: "-$0.00" },
]

export function ClaimableBalanceRoyaltiesCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <p className="text-xs text-muted-foreground">Claimable Balance</p>
        <p className="text-3xl font-bold">$0.00</p>
        <CardAction>
          <Badge variant="secondary">Pending Setup</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 border-t pt-3">
          {rows.map((r) => (
            <div key={r.id} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{r.label}</span>
              <span>{r.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-2 text-sm font-medium">
            <span>Total Ready to Claim</span>
            <span>$0.00 USD</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Once your bank is connected, balances over $10.00 are automatically eligible for monthly
          distribution on the 15th of each month.
        </p>
      </CardContent>
    </Card>
  )
}
