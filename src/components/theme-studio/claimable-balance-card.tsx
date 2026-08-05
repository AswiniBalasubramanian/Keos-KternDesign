import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ClaimableBalanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Claimable Balance</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 py-6">
        <p className="text-3xl font-bold">$0.00</p>
        <p className="text-center text-xs text-muted-foreground">
          Nothing to claim yet — payouts appear here once released.
        </p>
        <Button variant="outline" size="sm">
          + Add Source
        </Button>
      </CardContent>
    </Card>
  )
}
