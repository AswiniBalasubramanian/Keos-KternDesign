import Link from "next/link"
import { Plus, Folder, Search, Bell, Book, HelpCircle, ChevronRight, Mic, ArrowUp } from "lucide-react"
import { Lightbulb, Globe, Robot } from "@phosphor-icons/react/dist/ssr"
import { SiteNav } from "@/components/site/site-nav"
import { KMark } from "@/components/site/k-mark"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { KeosRail } from "@/components/site/keos-rail"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { connectorApps, keosPrompts } from "@/lib/keos-preview-data"

const promptIconComponents = [Lightbulb, Globe, Robot]

export default function KeosConversationBlockPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      <div className="border-b bg-muted/30 px-6 py-4">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Preview</p>
        <p className="mt-1 text-sm text-foreground">
          A live preview of the Keos conversation welcome screen.
        </p>
      </div>

      <SidebarProvider className="w-full min-h-0 flex-1">
        <KeosRail />

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-12 items-center justify-between border-b px-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <SidebarTrigger className="-ml-1" />
              <span className="font-mono text-xs tracking-widest uppercase">Keos</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Chats</span>
            </div>
            <div className="flex items-center gap-4">
              <Search className="h-4 w-4" />
              <div className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-destructive text-[8px] text-destructive-foreground">
                  3
                </span>
              </div>
              <Book className="h-4 w-4" />
              <HelpCircle className="h-4 w-4" />
            </div>
          </div>

          <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-6 px-6 py-16 text-center">
            <KMark className="h-10 w-10 text-primary" />
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight">Welcome to KEOS</h1>
              <p className="text-sm text-muted-foreground">
                Every answer starts with a question — you just need the right one.
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <div className="flex w-full flex-wrap justify-start gap-2">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Folder className="h-3.5 w-3.5" />
                  Scope: Project
                  <ChevronRight className="h-3.5 w-3.5 rotate-90" />
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  Project workspace
                  <ChevronRight className="h-3.5 w-3.5 rotate-90" />
                </Button>
              </div>

              <div className="relative w-full">
                <Input
                  placeholder="Ask KEOS — use @ to mention an agent..."
                  className="h-12 rounded-xl pr-24 pl-10"
                />
                <Plus className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2">
                  <Mic className="h-4 w-4 text-muted-foreground" />
                  <Button size="icon" className="h-8 w-8 rounded-full">
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between gap-3 rounded-xl border bg-muted/40 p-4 text-left">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {connectorApps.map((c) => (
                    <span
                      key={c.id}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-background text-[10px] font-medium ${c.className}`}
                    >
                      {c.label}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Connectors are now available.</p>
                  <p className="text-xs text-muted-foreground">
                    Connect apps to interact with them directly in conversations.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button variant="ghost" size="sm">
                  Dismiss
                </Button>
                <Button size="sm">Connect</Button>
              </div>
            </div>

            <div className="w-full space-y-1 text-left">
              <p className="px-1 text-xs font-medium text-muted-foreground">Recommended Prompts</p>
              {keosPrompts.map((p, i) => {
                const Icon = promptIconComponents[i]
                return (
                  <button
                    key={p.id}
                    className="flex w-full items-center justify-between gap-3 border-b px-3 py-3 text-left last:border-0 hover:bg-accent"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      {p.text}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">{p.category}</span>
                  </button>
                )
              })}
            </div>
          </main>
        </div>
      </SidebarProvider>

      <div className="border-t px-6 py-4 text-center">
        <Link href="/blocks" className="text-xs text-muted-foreground hover:text-foreground">
          &larr; Back to Blocks
        </Link>
      </div>
    </div>
  )
}
