"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { NotificationItem } from "@/lib/types"

interface NotificationSettingsProps {
  items: NotificationItem[]
}

export function NotificationSettings({ items: initialItems }: NotificationSettingsProps) {
  const [items, setItems] = useState<NotificationItem[]>(initialItems)

  const allEnabled = items.every((item) => item.enabled)

  function toggleItem(id: string, checked: boolean) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, enabled: checked } : item))
    )
  }

  function toggleAll(checked: boolean) {
    setItems((prev) => prev.map((item) => ({ ...item, enabled: checked })))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="space-y-1.5">
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Choose what you want to be notified about.</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="select-all"
            checked={allEnabled}
            onCheckedChange={(checked) => toggleAll(Boolean(checked))}
          />
          <label htmlFor="select-all" className="text-sm font-medium cursor-pointer">
            Select all
          </label>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start space-x-3">
            <Checkbox
              id={item.id}
              checked={item.enabled}
              onCheckedChange={(checked) => toggleItem(item.id, Boolean(checked))}
            />
            <div className="grid gap-0.5">
              <label htmlFor={item.id} className="text-sm font-medium cursor-pointer">
                {item.title}
              </label>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setItems(initialItems)}
          disabled={JSON.stringify(items) === JSON.stringify(initialItems)}
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  )
}
