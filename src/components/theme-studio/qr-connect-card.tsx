import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const qrPattern = [
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 0, 0, 1, 0, 1,
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 1, 0, 0, 0, 0,
  1, 0, 1, 1, 0, 1, 1, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 0, 0, 1, 0, 1,
  1, 1, 1, 0, 1, 0, 1, 1, 1,
]

export function QrConnectCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 py-6 text-center">
        <div className="grid grid-cols-9 gap-0.5 rounded-md border p-3">
          {qrPattern.map((cell, i) => (
            <span key={i} className={`h-3 w-3 ${cell ? "bg-foreground" : "bg-transparent"}`} />
          ))}
        </div>
        <p className="text-sm font-medium">Scan to connect your mobile device</p>
        <p className="px-6 text-xs text-muted-foreground">
          Open the Ledger mobile app and scan this code to link your device.
        </p>
        <Button variant="outline" size="sm" className="w-full">
          Got it
        </Button>
      </CardContent>
    </Card>
  )
}
