import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DollarCostAveragingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dollar-Cost Averaging</CardTitle>
        <CardDescription>A strategy for building wealth over time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Investing a fixed amount at regular intervals smooths out market volatility and removes
          the guesswork of timing your purchases.
        </p>
        <Button variant="outline" size="sm">
          Set Up Auto-Invest
        </Button>
      </CardContent>
    </Card>
  )
}
