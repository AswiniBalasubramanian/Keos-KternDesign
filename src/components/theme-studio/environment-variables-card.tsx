import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { environmentVariables } from "@/lib/extra-widgets-data"

export function EnvironmentVariablesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment Variables</CardTitle>
        <CardDescription>Production · {environmentVariables.length} variables</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {environmentVariables.map((env) => (
          <div key={env.id} className="flex items-center justify-between rounded-md border px-3 py-2">
            <span className="font-mono text-xs font-medium">{env.key}</span>
            <span className="font-mono text-xs text-muted-foreground">
              {env.masked ? "•••••••••" : env.value}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button size="sm">Deploy</Button>
        </div>
      </CardContent>
    </Card>
  )
}
