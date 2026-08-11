"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

function StreamingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.9s" }}
        />
      ))}
    </span>
  )
}

function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: "user", text: "What components are in the design system?" },
    { role: "assistant", text: "The Keos design system includes 26 components across 5 categories — Layout, Form, Data Display, Overlay, and Navigation." },
  ])
  const [streaming, setStreaming] = useState(false)

  function sendMessage() {
    if (streaming) return
    setStreaming(true)
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: "You can browse all components at /components, and preview each one with live code examples." }])
      setStreaming(false)
    }, 1800)
  }

  return (
    <div className="flex h-80 flex-col overflow-hidden rounded-xl border">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5">
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium">Keos AI</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <Avatar className="h-6 w-6 shrink-0">
              <AvatarFallback className="text-[9px]">{m.role === "user" ? "U" : "AI"}</AvatarFallback>
            </Avatar>
            <div
              className={`max-w-[75%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                m.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {streaming && (
          <div className="flex gap-2">
            <Avatar className="h-6 w-6 shrink-0">
              <AvatarFallback className="text-[9px]">AI</AvatarFallback>
            </Avatar>
            <div className="rounded-xl bg-muted px-3 py-2">
              <StreamingDots />
            </div>
          </div>
        )}
      </div>
      <div className="border-t p-3">
        <Button size="sm" className="w-full" onClick={sendMessage} disabled={streaming}>
          {streaming ? "Responding…" : "Ask a follow-up"}
        </Button>
      </div>
    </div>
  )
}

const patterns = [
  {
    id: "streaming",
    title: "Streaming Response",
    badge: "Animation",
    description: "Animated dots indicate the model is generating a response.",
    preview: (
      <div className="flex items-center gap-3 rounded-xl border bg-muted/30 px-4 py-3">
        <Avatar className="h-7 w-7"><AvatarFallback className="text-[9px]">AI</AvatarFallback></Avatar>
        <StreamingDots />
      </div>
    ),
  },
  {
    id: "tool-call",
    title: "Tool Call",
    badge: "State",
    description: "Surfaces when an agent is invoking a tool or fetching data.",
    preview: (
      <div className="rounded-xl border bg-muted/30 px-4 py-3 space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          Calling <code className="font-mono text-foreground">search_components()</code>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-2/3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    id: "agent-handoff",
    title: "Agent Handoff",
    badge: "Multi-agent",
    description: "Shows when one agent delegates a task to another specialist agent.",
    preview: (
      <div className="flex items-center gap-2 rounded-xl border bg-muted/30 px-4 py-3 text-xs">
        <Avatar className="h-6 w-6"><AvatarFallback className="text-[9px]">A1</AvatarFallback></Avatar>
        <span className="text-muted-foreground">Handing off to</span>
        <Avatar className="h-6 w-6"><AvatarFallback className="text-[9px]">A2</AvatarFallback></Avatar>
        <Badge variant="secondary" className="ml-auto">Design Agent</Badge>
      </div>
    ),
  },
  {
    id: "empty-state",
    title: "AI Empty State",
    badge: "Onboarding",
    description: "Prompt starters to help users begin a conversation.",
    preview: (
      <div className="space-y-2 rounded-xl border bg-muted/30 p-4">
        <p className="text-xs font-medium text-center text-muted-foreground mb-3">What would you like to explore?</p>
        {["Browse components", "Preview a theme", "Get the install command"].map((s) => (
          <button key={s} className="w-full rounded-lg border bg-background px-3 py-2 text-left text-xs hover:bg-muted transition-colors">
            {s}
          </button>
        ))}
      </div>
    ),
  },
]

export function AiUxContent({ activeId }: { activeId: string }) {
  if (activeId === "chat") {
    return (
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Chat Interface</h2>
          <p className="text-sm text-muted-foreground">Interactive chat with streaming simulation. Click to trigger a response.</p>
        </div>
        <ChatDemo />
      </div>
    )
  }
  const patternMap: Record<string, string> = {
    streaming: "streaming",
    actions: "tool-call",
    suggestions: "empty-state",
  }
  const patternId = patternMap[activeId] ?? "streaming"
  const pattern = patterns.find((p) => p.id === patternId) ?? patterns[0]
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">{pattern.title}</h2>
        <p className="text-sm text-muted-foreground">{pattern.description}</p>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm">{pattern.title}</CardTitle>
            <Badge variant="outline" className="text-[10px]">{pattern.badge}</Badge>
          </div>
          <CardDescription className="text-xs">{pattern.description}</CardDescription>
        </CardHeader>
        <CardContent>{pattern.preview}</CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {patterns.filter((p) => p.id !== patternId).map((p) => (
          <div key={p.id} className="rounded-xl border bg-muted/30 p-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{p.title}</span>
              <Badge variant="outline" className="text-[10px]">{p.badge}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AiUxPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="mx-auto w-full max-w-6xl px-8 py-14 sm:px-10">
        <div className="mb-10 space-y-2">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">AI UX</p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight">AI Interaction Patterns</h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Chat surfaces, agent handoffs, streaming states, and empty-state starters for building AI-native products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Chat Interface</h2>
            <p className="text-sm text-muted-foreground">Interactive chat with streaming simulation. Click to trigger a response.</p>
            <ChatDemo />
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Pattern Library</h2>
            <p className="text-sm text-muted-foreground">Reusable AI-specific UI primitives.</p>
            <div className="space-y-3">
              {patterns.map((p) => (
                <Card key={p.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm">{p.title}</CardTitle>
                      <Badge variant="outline" className="text-[10px]">{p.badge}</Badge>
                    </div>
                    <CardDescription className="text-xs">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent>{p.preview}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
