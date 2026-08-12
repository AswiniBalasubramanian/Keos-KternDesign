"use client"

import Link from "next/link"
import { SiteNav } from "@/components/site/site-nav"
import { ArrowRight, Calendar } from "lucide-react"

const releases = [
  {
    id: "keos-v01",
    href: "/news/keos-v01",
    tag: "Internal release",
    tagColor: "bg-[#FB540C]/10 text-[#FB540C]",
    title: "Keos v0.1 â€” First internal release for Kaartech",
    summary:
      "The first internal milestone of the Keos & K-Tern.ai Design System, shipped to the Kaartech team. Includes foundation tokens, core components, and the Studio theme switcher.",
    date: "Aug 10, 2026",
    audience: "Kaartech internal",
  },
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-16 sm:px-10">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">[ Releases ]</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">News &amp; Releases</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Official announcements and release notes from the KEOS &amp; K-Tern.ai Design System team.
        </p>
      </section>

      {/* List */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
        <div className="space-y-4">
          {releases.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-start gap-5 rounded-xl border p-5 transition-colors hover:bg-muted/30"
            >
              <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-widest uppercase ${item.tagColor}`}>
                {item.tag}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-snug group-hover:underline">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                  <span>{item.audience}</span>
                </div>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
