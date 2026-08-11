"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteNav } from "@/components/site/site-nav"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"

// ── News items ──────────────────────────────────────────────────────────────
const newsItems = [
  {
    id: "n1",
    type: "release" as const,
    title: "KEOS Design System v2.0 — Now with AI UX Patterns",
    date: "Aug 2026",
    summary: "Version 2.0 ships with 12 new AI-native components, streaming state patterns, and a refreshed token architecture.",
    tag: "Release",
  },
  {
    id: "n2",
    type: "event" as const,
    title: "Design System Office Hours — September Edition",
    date: "Sep 2026",
    summary: "Join the team for a live Q&A on adopting the new component library across enterprise products.",
    tag: "Event",
  },
  {
    id: "n3",
    type: "update" as const,
    title: "Dark Mode Tokens Upgraded to CSS @layer architecture",
    date: "Jul 2026",
    summary: "All theme tokens have been migrated to CSS @layer for better cascade control and zero-flash dark mode.",
    tag: "Update",
  },
  {
    id: "n4",
    type: "release" as const,
    title: "K-tern Icon Library Expanded to 340 Icons",
    date: "Jun 2026",
    summary: "80 new icons added across product, finance, and communication categories — all available in 3 weights.",
    tag: "Release",
  },
]

// ── Blog posts ───────────────────────────────────────────────────────────────
const blogPosts = [
  {
    id: "b1",
    title: "Why We Built a Shared Design Language Across Two Products",
    date: "Aug 5, 2026",
    readTime: "6 min",
    category: "Design Systems",
    summary: "When KEOS and K-tern shipped independently, each team made slightly different decisions about color, spacing, and interaction. Here's how we solved the drift.",
    featured: true,
  },
  {
    id: "b2",
    title: "Designing for AI: Patterns for Uncertainty and Streaming",
    date: "Jul 22, 2026",
    readTime: "8 min",
    category: "AI UX",
    summary: "AI responses are probabilistic and streaming. Traditional components weren't built for this. We share the patterns we developed to handle it gracefully.",
    featured: true,
  },
  {
    id: "b3",
    title: "From Figma to Code: How We Keep Tokens in Sync",
    date: "Jul 8, 2026",
    readTime: "5 min",
    category: "Tooling",
    summary: "A breakdown of our token pipeline — Figma Variables → design-tokens.json → CSS custom properties — and how we automate the handoff.",
    featured: false,
  },
  {
    id: "b4",
    title: "The Case for Boring Components",
    date: "Jun 25, 2026",
    readTime: "4 min",
    category: "Philosophy",
    summary: "The best component library isn't the most impressive one — it's the one teams don't have to think about. We talk about predictability as a design value.",
    featured: false,
  },
  {
    id: "b5",
    title: "Motion Principles at KEOS: When Animation Helps and When It Hurts",
    date: "Jun 10, 2026",
    readTime: "7 min",
    category: "Motion",
    summary: "We document the motion scale we use — from micro-interactions at 80ms to full page transitions at 400ms — and the reasoning behind each.",
    featured: false,
  },
  {
    id: "b6",
    title: "Accessibility-First: Building Components That Work for Everyone",
    date: "May 28, 2026",
    readTime: "9 min",
    category: "Accessibility",
    summary: "A deep dive into how we approach keyboard navigation, ARIA, and focus management in every component we ship.",
    featured: false,
  },
]

const categories = ["All", "Design Systems", "AI UX", "Tooling", "Philosophy", "Motion", "Accessibility"]

const tagColor: Record<string, string> = {
  Release: "bg-green-500/10 text-green-600",
  Event:   "bg-blue-500/10 text-blue-600",
  Update:  "bg-orange-500/10 text-orange-600",
}

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<"news" | "blog">("news")
  const [activeCat, setActiveCat] = useState("All")

  const filteredPosts = activeCat === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCat)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-16 sm:px-10">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">[ News &amp; Blog ]</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">What's happening</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Releases, events, and design thinking from the KEOS &amp; K-tern team.
        </p>
      </section>

      {/* Tab bar */}
      <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-1 px-6 sm:px-10">
          {(["news", "blog"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`-mb-px border-b-2 px-4 pb-3 pt-3 font-mono text-[11px] tracking-widest uppercase transition-colors ${
                activeTab === t
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "news" ? "News" : "Blog"}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">

        {/* ── News tab ──────────────────────────────────────────────────── */}
        {activeTab === "news" && (
          <div className="space-y-4">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5 rounded-xl border p-5 transition-colors hover:bg-muted/30"
              >
                <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-widest uppercase ${tagColor[item.tag]}`}>
                  {item.tag}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold leading-snug">{item.title}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                  <div className="mt-2 flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
            ))}
          </div>
        )}

        {/* ── Blog tab ──────────────────────────────────────────────────── */}
        {activeTab === "blog" && (
          <div className="space-y-10">

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors ${
                    activeCat === cat
                      ? "bg-foreground text-background border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured posts */}
            {activeCat === "All" && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filteredPosts.filter((p) => p.featured).map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.id}`}
                    className="group overflow-hidden rounded-xl border transition-all hover:shadow-md"
                  >
                    <div className="flex h-36 items-end bg-gradient-to-br from-muted/60 to-muted/20 p-5">
                      <span className="inline-flex items-center gap-1 rounded-full border bg-background/80 px-2.5 py-1 font-mono text-[10px] text-muted-foreground uppercase backdrop-blur">
                        <Tag className="h-2.5 w-2.5" />
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <p className="font-semibold leading-snug group-hover:underline">{post.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{post.summary}</p>
                      <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime} read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* All / filtered posts list */}
            <div className="space-y-4">
              {(activeCat === "All" ? filteredPosts.filter((p) => !p.featured) : filteredPosts).map((post) => (
                <Link
                  key={post.id}
                  href={`/news/${post.id}`}
                  className="group flex items-start gap-5 rounded-xl border p-5 transition-colors hover:bg-muted/30"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="font-semibold leading-snug group-hover:underline">{post.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.summary}</p>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime} read</span>
                      <span className="flex items-center gap-1"><Tag className="h-3 w-3" />{post.category}</span>
                    </div>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
