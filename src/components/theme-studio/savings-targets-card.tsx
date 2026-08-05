import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { savingsTargets } from "@/lib/dashboard-data"

export function SavingsTargetsCard() {
  const anyUnmet = savingsTargets.some((target) => !target.met)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="space-y-1.5">
          <CardTitle>Savings Targets</CardTitle>
          <CardDescription>Active milestones for 2024</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          New Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-5">
        {savingsTargets.map((target) => (
          <div key={target.id} className="space-y-2">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              {target.label.toUpperCase()}
            </p>
            <p className="text-2xl font-bold">{target.amount}</p>
            <Progress value={target.achievedPercent} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{target.achievedLabel}</span>
              <span>{target.remaining}</span>
            </div>
          </div>
        ))}
        {anyUnmet && (
          <p className="rounded-md border bg-muted/50 p-3 text-xs text-muted-foreground">
            You have not met your targets for this year.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
