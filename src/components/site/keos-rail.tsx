"use client"

import { useState } from "react"
import {
  Plus,
  CalendarClock,
  Folder,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Bot,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import { railNavGroups } from "@/lib/keos-preview-data"
import { useSidebar } from "@/components/ui/sidebar"
import { KMark } from "@/components/site/k-mark"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const navItemIcons: Record<string, LucideIcon> = {
  routine: CalendarClock,
  projects: Folder,
  "agent-store": Bot,
  admin: ShieldCheck,
}

const collapsedRailItems = [
  { id: "new", label: "New chat", icon: Plus },
  ...railNavGroups.flatMap((group) =>
    group.items.map((item) => ({ id: item.id, label: item.label, icon: navItemIcons[item.id] ?? CheckSquare }))
  ),
]

export function KeosRail() {
  const { open } = useSidebar()
  const [expandedId, setExpandedId] = useState<string | null>("projects")

  return (
    <aside
      className={`sticky top-16 grid h-[calc(100vh-4rem)] shrink-0 grid-rows-[auto_1fr_auto] border-r bg-muted/30 transition-[width] duration-200 ease-linear ${
        open ? "w-56" : "w-14"
      }`}
    >
      <div className={`flex h-12 items-center border-b px-3 ${open ? "gap-2" : "justify-center"}`}>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-background">
          <KMark className="h-4 w-4" />
        </div>
        {open && (
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-tight">KEOS</p>
            <p className="truncate text-[10px] leading-tight text-muted-foreground">Kaar tech</p>
          </div>
        )}
      </div>

      {!open && (
        <TooltipProvider>
          <div className="flex flex-1 min-h-0 flex-col items-center gap-2 overflow-y-auto py-3">
            {collapsedRailItems.map((r) => {
              const Icon = r.icon
              return (
                <Tooltip key={r.id}>
                  <TooltipTrigger
                    render={
                      <button
                        aria-label={r.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    }
                  />
                  <TooltipContent side="right">{r.label}</TooltipContent>
                </Tooltip>
              )
            })}
          </div>
          <div className="flex items-center justify-center border-t py-3">
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    aria-label="Account"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground"
                  >
                    A
                  </button>
                }
              />
              <TooltipContent side="right">Account · Workspace</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      )}

      {open && (
        <>
          <div className="flex flex-1 min-h-0 flex-col gap-4 overflow-y-auto p-3">
            <button className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
              <Plus className="h-4 w-4" />
              New chat
            </button>

            {railNavGroups.map((group) => (
              <div key={group.id} className="space-y-0.5">
                {group.label && (
                  <p className="px-2 pb-1 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                    {group.label}
                  </p>
                )}
                {group.items.map((item) => {
                  const Icon = navItemIcons[item.id]
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => item.children && setExpandedId(expandedId === item.id ? null : item.id)}
                        className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm text-foreground hover:bg-accent"
                      >
                        <span className="flex items-center gap-2">
                          {Icon && <Icon className="h-3.5 w-3.5 text-muted-foreground" />}
                          {item.label}
                        </span>
                        {item.children && (
                          <span className="text-muted-foreground">
                            {expandedId === item.id ? (
                              <ChevronDown className="h-3.5 w-3.5" />
                            ) : (
                              <ChevronRight className="h-3.5 w-3.5" />
                            )}
                          </span>
                        )}
                      </button>
                      {item.children && expandedId === item.id && (
                        <div className="ml-2 space-y-0.5 border-l pl-3">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              className="block w-full rounded-md px-2 py-1 text-left text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 border-t p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              A
            </div>
            <div>
              <p className="text-xs font-medium">Account</p>
              <p className="text-[10px] text-muted-foreground">Workspace</p>
            </div>
          </div>
        </>
      )}
    </aside>
  )
}
