"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const currencies = ["USD — United States Dollar", "EUR — Euro", "GBP — British Pound"]

export function PreferencesCard() {
  const { iconLibrary } = useThemeStudio()
  const [currency, setCurrency] = useState(currencies[0])
  const [publicStats, setPublicStats] = useState(true)
  const [emailNotif, setEmailNotif] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Manage your account settings and notifications.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <DynamicIcon name="x" library={iconLibrary} className="h-3.5 w-3.5" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Default Currency</label>
          <Select value={currency} onValueChange={(v) => v && setCurrency(v)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div className="pr-4">
            <p className="text-sm font-medium">Public Statistics</p>
            <p className="text-xs text-muted-foreground">
              Allow others to see your total stream count and listening activity.
            </p>
          </div>
          <Switch checked={publicStats} onCheckedChange={setPublicStats} />
        </div>

        <div className="flex items-center justify-between">
          <div className="pr-4">
            <p className="text-sm font-medium">Email Notifications</p>
            <p className="text-xs text-muted-foreground">
              Monthly royalty reports and distribution updates.
            </p>
          </div>
          <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Button variant="outline" size="sm">
          Reset
        </Button>
        <Button size="sm">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
