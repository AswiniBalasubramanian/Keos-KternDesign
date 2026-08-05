"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { DynamicIcon, IconName } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

const toolbarIconsRow1: IconName[] = ["copy", "info", "trash", "share", "briefcase", "more"]
const toolbarIconsRow2: IconName[] = ["minus", "arrowLeft", "arrowRight", "check", "chevronDown", "search"]
const toolbarIconsRow3: IconName[] = ["sun", "plus", "settings"]

const buttonVariants = ["Button", "Secondary", "Outline", "Ghost"] as const
const badgeVariants = ["Badge", "Secondary", "Outline"] as const

const semanticColors = [
  { label: "Success", bg: "bg-success", text: "text-success-foreground" },
  { label: "Warning", bg: "bg-warning", text: "text-warning-foreground" },
  { label: "Destructive", bg: "bg-destructive", text: "text-destructive-foreground" },
  { label: "Info", bg: "bg-info", text: "text-info-foreground" },
]

export function ComponentShowcaseCard() {
  const { iconLibrary } = useThemeStudio()
  const [activeVariant, setActiveVariant] = useState<(typeof buttonVariants)[number]>("Button")
  const [activeBadge, setActiveBadge] = useState<(typeof badgeVariants)[number]>("Badge")
  const [twoFactor, setTwoFactor] = useState(false)
  const [threshold, setThreshold] = useState(40)
  const [checked, setChecked] = useState(true)
  const [switchOn, setSwitchOn] = useState(true)

  return (
    <Card className="gap-4">
      <CardContent className="grid grid-cols-2 gap-2">
        {[...toolbarIconsRow1, ...toolbarIconsRow2, ...toolbarIconsRow3].map((name, i) => (
          <Button key={`${name}-${i}`} variant="outline" size="icon" className="h-9 w-9">
            <DynamicIcon name={name} library={iconLibrary} className="h-4 w-4" />
          </Button>
        ))}
      </CardContent>

      <CardContent className="space-y-4 border-t pt-4">
        <div className="flex gap-2">
          {buttonVariants.map((v) => (
            <Button
              key={v}
              size="sm"
              variant={activeVariant === v ? "default" : v === "Secondary" ? "secondary" : v === "Outline" ? "outline" : "ghost"}
              onClick={() => setActiveVariant(v)}
            >
              {v}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-md border p-3">
          <div>
            <p className="text-sm font-medium">Two-factor authentication</p>
            <p className="text-xs text-muted-foreground">Verify via email or phone number.</p>
          </div>
          <Button size="sm" variant={twoFactor ? "secondary" : "default"} onClick={() => setTwoFactor((v) => !v)}>
            {twoFactor ? "Enabled" : "Enable"}
          </Button>
        </div>

        <Slider value={[threshold]} onValueChange={(v) => setThreshold(Array.isArray(v) ? v[0] : v)} />

        <div className="relative">
          <Input placeholder="Name" className="pr-8" />
          <DynamicIcon
            name="search"
            library={iconLibrary}
            className="absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>

        <Textarea placeholder="Message" rows={2} />

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Semantic Colors</p>
          <div className="grid grid-cols-4 gap-2">
            {semanticColors.map((c) => (
              <div key={c.label} className="space-y-1.5">
                <div className={`flex h-9 items-center justify-center rounded-md text-xs font-medium ${c.bg} ${c.text}`}>
                  {c.label[0]}
                </div>
                <p className="text-center text-[10px] text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {badgeVariants.map((v) => (
            <Badge
              key={v}
              variant={activeBadge === v ? "default" : v === "Secondary" ? "secondary" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveBadge(v)}
            >
              {v}
            </Badge>
          ))}
          <button
            onClick={() => setChecked((c) => !c)}
            className={`flex h-4 w-4 items-center justify-center rounded-full border ${checked ? "border-foreground bg-foreground text-background" : ""}`}
          >
            {checked && <DynamicIcon name="check" library={iconLibrary} className="h-2.5 w-2.5" />}
          </button>
          <button className="h-4 w-4 rounded-full border" />
        </div>

        <div className="flex items-center justify-between">
          <AlertDialog>
            <AlertDialogTrigger className="inline-flex h-8 items-center justify-center rounded-md border px-3 text-sm font-medium hover:bg-accent">
              Alert Dialog
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button variant="outline" size="sm" className="gap-1">
            Button Group
            <DynamicIcon name="chevronDown" library={iconLibrary} className="h-3.5 w-3.5" />
          </Button>

          <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
        </div>
      </CardContent>
    </Card>
  )
}
