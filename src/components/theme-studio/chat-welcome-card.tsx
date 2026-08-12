"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"
import { recommendedPrompts, connectorIcons } from "@/lib/chat-widget-data"

export function ChatWelcomeCard() {
  const { iconLibrary, activeChartColors } = useThemeStudio()

  return (
    <Card>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-2 py-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center">
            <svg
              width="36"
              height="48"
              viewBox="0 0 328 438"
              fill="none"
              className="h-9 w-auto"
              style={{ color: activeChartColors[0] }}
            >
              <path d="M56.9668 321.1C56.9685 353.309 82.7769 379.42 114.612 379.42C114.838 379.42 115.065 379.418 115.29 379.415C115.29 379.417 115.291 379.419 115.291 379.42C115.291 379.421 115.29 379.423 115.29 379.424C115.065 379.421 114.838 379.42 114.612 379.42C82.7899 379.42 56.9896 405.51 56.9668 437.701C56.9442 405.739 31.5103 379.791 0 379.424V379.415C31.5229 379.048 56.9645 353.081 56.9668 321.101V321.1Z" fill="currentColor"/>
              <path d="M6.02592 194.6V1.09985C6.02592 1.09985 57.0264 45.5999 85.0259 76.0999C98.9055 91.2189 104.026 104.576 104.026 125.1V298.1L157.026 239.6C157.026 239.6 170.175 227.199 180.526 222.6C190.049 218.369 206.526 216.6 206.526 216.6H304.526C304.526 216.6 318.526 223.1 307.526 234.1C302.026 239.6 265.614 278.75 238.526 298.1C224.526 308.1 216.234 313.6 200.026 313.6H104.026C104.026 313.6 90.488 313.562 85.0259 308.1L16.5259 239.6C7.75056 222.847 5.73867 212.937 6.02592 194.6Z" fill="currentColor"/>
              <path d="M210.897 333.1H123.934C118.451 333.1 115.965 344.425 119.974 348.6C139.737 369.178 170 402.1 196.169 421.1C203.944 426.745 219.67 430.1 219.67 430.1H327.67C327.67 430.1 322.634 424.6 312.669 413.6C307.687 408.1 271.707 367.949 247.169 348.6C234.487 338.6 225.579 333.1 210.897 333.1Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="font-heading text-lg font-bold">Welcome to Conversation</h3>
          <p className="max-w-xs text-xs text-muted-foreground">
            Ask anything across your project&apos;s knowledge — or type @ to bring an agent in.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <DynamicIcon name="folder" library={iconLibrary} className="h-3.5 w-3.5" />
            Scope: Project
            <DynamicIcon name="chevronDown" library={iconLibrary} className="h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5">
            Aramco Ras Tanura Turnaround
            <DynamicIcon name="chevronDown" library={iconLibrary} className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="relative">
          <Input placeholder="Ask — use @ to mention an agent..." className="pr-16" />
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1.5 text-muted-foreground">
            <DynamicIcon name="mail" library={iconLibrary} className="h-4 w-4" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted/40 p-3">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {connectorIcons.map((c) => (
                <span
                  key={c.id}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-card text-[10px] font-medium ${c.className}`}
                >
                  {c.label[0]}
                </span>
              ))}
            </div>
            <div>
              <p className="text-xs font-medium">Connectors are now available.</p>
              <p className="text-[11px] text-muted-foreground">
                Connect apps to interact with them directly.
              </p>
            </div>
          </div>
          <Button size="sm">Connect</Button>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Recommended Prompts</p>
          {recommendedPrompts.map((p) => (
            <button
              key={p.id}
              className="flex w-full items-center justify-between gap-3 rounded-md border-b py-2.5 text-left last:border-0 hover:bg-accent"
            >
              <span className="flex items-center gap-2 text-sm">
                <span>{p.icon}</span>
                {p.text}
              </span>
              <span className="shrink-0 text-xs text-muted-foreground">{p.category}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
