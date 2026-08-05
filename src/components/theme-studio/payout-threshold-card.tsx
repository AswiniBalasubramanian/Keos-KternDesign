"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { currencyOptions } from "@/lib/dashboard-data"

export function PayoutThresholdCard() {
  const [currency, setCurrency] = useState("USD")
  const [amount, setAmount] = useState(2500)
  const [notes, setNotes] = useState("")

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1.5">
          <CardTitle>Payout Threshold</CardTitle>
          <CardDescription>
            Set the minimum balance required before a payout is triggered.
          </CardDescription>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8 shrink-0">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Preferred Currency</label>
          <Select
            value={currency}
            onValueChange={(v) => {
              if (v) setCurrency(v)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencyOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Minimum Payout Amount</label>
            <span className="text-lg font-semibold">${amount.toFixed(2)}</span>
          </div>
          <Slider
            value={[amount]}
            min={50}
            max={10000}
            step={50}
            onValueChange={(v) => setAmount(Array.isArray(v) ? v[0] : v)}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$50 (MIN)</span>
            <span>$10,000 (MAX)</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Notes</label>
          <Textarea
            placeholder="Add any notes for this payout configuration..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <Button className="w-full">Save Threshold</Button>
      </CardContent>
    </Card>
  )
}
