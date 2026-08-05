"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DynamicIcon, IconName } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"
import { accountNavGroups } from "@/lib/ledger-widgets-data"

const groupIcons: IconName[] = ["settings", "help"]

export function AccountNavCard() {
  const { iconLibrary } = useThemeStudio()

  return (
    <Card>
      <CardContent className="space-y-4">
        {accountNavGroups.map((group, gi) => (
          <div key={group.id} className="space-y-1">
            <p className="px-1 text-xs font-medium text-muted-foreground">{group.label}</p>
            {group.items.map((item, ii) => (
              <div
                key={item.id}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
                  item.active ? "bg-accent font-medium" : "text-muted-foreground"
                }`}
              >
                <DynamicIcon
                  name={groupIcons[(gi + ii) % groupIcons.length]}
                  library={iconLibrary}
                  className="h-4 w-4"
                />
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
