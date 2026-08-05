import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { shortcuts } from "@/lib/extra-widgets-data"

export function ShortcutsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shortcuts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {shortcuts.map((s) => (
          <div key={s.id} className="flex items-center justify-between border-b py-2.5 last:border-0">
            <span className="text-sm text-muted-foreground">{s.label}</span>
            <div className="flex items-center gap-1">
              {s.keys.map((key) => (
                <kbd
                  key={key}
                  className="flex h-5 min-w-5 items-center justify-center rounded border bg-muted px-1.5 text-xs font-medium"
                >
                  {key}
                </kbd>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
