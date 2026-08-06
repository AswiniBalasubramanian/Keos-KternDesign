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
              height="36"
              viewBox="0 0 104 104"
              fill="none"
              className="h-9 w-9"
              style={{ color: activeChartColors[0] }}
            >
              <path
                d="M12.9681 1.4629C15.098 -0.560507 18.4649 -0.474211 20.4886 1.65528L30.2328 11.9111C32.2564 14.041 32.1709 17.4078 30.0413 19.4316L19.7855 29.1758C16.6838 32.1231 16.9873 34.2363 19.7386 37.25C19.8693 37.3606 19.9955 37.4783 20.1156 37.6045L29.6468 47.6572C33.2783 51.4727 34.6132 51.0099 38.0169 47.7705L45.7318 40.4268L84.4681 1.69141C86.6364 -0.476619 90.1525 -0.476773 92.3206 1.69141L101.82 11.1914C103.988 13.3596 103.988 16.8747 101.82 19.043L68.4652 52.3965L101 85.2188C103.159 87.3963 103.143 90.9116 100.966 93.0703L91.6976 102.258C89.52 104.416 86.0047 104.401 83.846 102.224L36.7191 54.6816C34.196 52.476 32.5055 53.1486 29.6449 55.8711L19.1771 65.9102C19.0388 66.0418 18.8945 66.1635 18.7464 66.2774C16.127 69.1155 16.692 71.2527 19.5589 74.3223L29.3675 84.8232C31.4044 87.0042 31.3179 90.4522 29.1742 92.5244L18.8509 102.502C16.7069 104.574 13.3177 104.486 11.2806 102.305L1.47299 91.8047C-0.564114 89.6237 -0.47765 86.1748 1.66635 84.1025L11.9886 74.125C15.8324 70.4097 14.8599 69.2021 11.6019 65.7139L1.91928 55.0156C1.11752 54.1572 0.645958 53.1024 0.498378 52.0127C0.284402 50.6002 0.63955 49.121 1.55697 47.9443C1.62681 47.8522 1.69932 47.7613 1.77572 47.6729C1.92585 47.4853 2.08984 47.3049 2.26889 47.1348L4.06185 45.4307L12.4359 37.3369C12.6747 37.1061 12.9295 36.9029 13.1956 36.7256C16.226 33.5799 15.2952 32.1747 12.264 28.9844L2.51986 18.7285C0.49629 16.5985 0.583305 13.2308 2.71322 11.207L12.9681 1.4629Z"
                fill="currentColor"
              />
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
