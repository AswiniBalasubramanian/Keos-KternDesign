import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ArticleCard() {
  return (
    <Card size="sm" className="overflow-hidden pt-0">
      <div className="flex h-32 items-center justify-center bg-muted text-xs text-muted-foreground">
        Photo placeholder
      </div>
      <CardContent className="space-y-2">
        <h3 className="font-heading text-base font-medium">Observability Plus is replacing Monitoring</h3>
        <p className="text-sm text-muted-foreground">
          Switch to the improved way to explore your data, with natural language. Monitoring will
          no longer be available on the Pro plan in November, 2025.
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Button size="sm" className="gap-1.5">
          Create Query
        </Button>
        <Badge variant="outline" className="text-amber-600">
          Warning
        </Badge>
      </CardFooter>
    </Card>
  )
}
