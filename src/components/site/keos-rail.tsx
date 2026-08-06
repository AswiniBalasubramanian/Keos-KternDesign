"use client"

import { useState } from "react"
import {
  Plus,
  History,
  Folder,
  Smile,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  PanelLeft,
} from "lucide-react"
import { railIcons, railNavGroups } from "@/lib/keos-preview-data"
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

const railIconComponents = [Plus, History, Folder, Smile, CheckSquare]

function RailBody() {
  const { open } = useSidebar()
  const [expandedId, setExpandedId] = useState<string | null>("projects")

  return (
    <aside
      className={`flex h-full shrink-0 flex-col border-r bg-muted/30 transition-[width] duration-200 ease-linear ${
        open ? "w-56" : "w-14"
      }`}
    >
      <div className={`flex h-12 items-center border-b px-2 ${open ? "justify-end" : "justify-center"}`}>
        <SidebarTrigger>
          <PanelLeft className="h-4 w-4" />
        </SidebarTrigger>
      </div>

      {!open && (
        <div className="flex flex-col items-center gap-2 py-3">
          {railIcons.map((r, i) => {
            const Icon = railIconComponents[i]
            return (
              <button
                key={r.id}
                aria-label={r.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </button>
            )
          })}
        </div>
      )}

      {open && (
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-3">
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
              {group.items.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => item.children && setExpandedId(expandedId === item.id ? null : item.id)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm text-foreground hover:bg-accent"
                  >
                    {item.label}
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
              ))}
            </div>
          ))}

          <div className="mt-auto flex items-center gap-2 border-t pt-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              A
            </div>
            <div>
              <p className="text-xs font-medium">Account</p>
              <p className="text-[10px] text-muted-foreground">Workspace</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export function KeosRail() {
  return (
    <SidebarProvider className="w-fit min-h-0">
      <RailBody />
    </SidebarProvider>
  )
}
