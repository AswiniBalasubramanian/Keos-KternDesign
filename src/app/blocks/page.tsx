"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SiteNav } from "@/components/site/site-nav"
import { Button } from "@/components/ui/button"
import { BlockPreview } from "@/components/site/block-preview"
import { blockCategories, blockItems } from "@/lib/blocks-data"

export default function BlocksPage() {
  const [active, setActive] = useState("featured")
  const visible = active === "featured" ? blockItems : blockItems.filter((b) => b.category === active)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      <section className="flex flex-col items-center gap-5 border-b px-6 py-20 text-center">
        <span className="rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Copy, paste, ship
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Building blocks for your product.</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Clean, themeable sections assembled from the component library. Drop them straight into
          any page.
        </p>
        <Button
          nativeButton={false}
          className="gap-1.5 rounded-full px-4"
          render={<Link href="/studio" />}
        >
          Browse in Studio
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
        <div className="mb-8 flex gap-6 border-b font-mono text-xs tracking-widest uppercase">
          {blockCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`-mb-px border-b-2 pb-3 ${
                active === c.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {visible.map((block) => {
            const content = (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{block.title}</p>
                  <span className="font-mono text-[11px] text-muted-foreground">{block.slug}</span>
                </div>
                <div className="h-48 overflow-hidden rounded-xl border transition-colors group-hover:border-foreground/30">
                  <BlockPreview variant={block.preview} />
                </div>
              </div>
            )
            return block.slug === "keos-01" ? (
              <Link key={block.id} href="/blocks/keos-01" className="group">
                {content}
              </Link>
            ) : (
              <div key={block.id}>{content}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
