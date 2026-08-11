"use client"

import { useState } from "react"
import Link from "next/link"
import type { ComponentDoc } from "@/lib/components-data"
import { componentDemos } from "@/lib/component-demos"
import { cn } from "@/lib/utils"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className="rounded-md border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-muted/40">
      <div className="flex items-center justify-between border-b bg-muted/60 px-4 py-2">
        <span className="text-xs text-muted-foreground font-mono">tsx</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function PreviewTabs({ slug, demo }: { slug: string; demo: React.ReactNode }) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  const importName = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")

  const usageCode = `import { ${importName} } from "@/components/ui/${slug}"\n\nexport default function Example() {\n  return <${importName} />\n}`

  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="flex items-center gap-1 border-b bg-muted/40 px-4 py-2">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
              tab === t ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "preview" ? (
        <div className="flex min-h-64 items-center justify-center bg-[radial-gradient(var(--muted)_1px,transparent_1px)] bg-[size:20px_20px] px-10 py-20">
          {demo ?? (
            <p className="text-sm text-muted-foreground">Preview coming soon</p>
          )}
        </div>
      ) : (
        <div className="p-0">
          <pre className="overflow-x-auto bg-muted/20 p-5 text-xs leading-relaxed">
            <code>{usageCode}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

export function ComponentDetailClient({ component }: { component: ComponentDoc }) {
  const demo = componentDemos[component.slug]

  const installCode = `npx shadcn@latest add ${component.shadcnName}`

  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/components" className="hover:text-foreground">Components</Link>
        <span>/</span>
        <span className="text-foreground">{component.name}</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">{component.name}</h1>
          <span className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
            {component.category}
          </span>
        </div>
        <p className="text-base text-muted-foreground max-w-2xl">{component.description}</p>
      </div>

      {/* Preview */}
      <section className="space-y-3">
        <PreviewTabs slug={component.slug} demo={demo} />
      </section>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-semibold">Installation</h2>
        <CodeBlock code={installCode} />
      </section>

      {/* Usage */}
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-semibold">Usage</h2>
        <CodeBlock
          code={`import { ${component.name.replace(/\s/g, "")} } from "@/components/ui/${component.slug}"\n\nexport default function Example() {\n  return (\n    <${component.name.replace(/\s/g, "")} />\n  )\n}`}
        />
      </section>

      {/* About */}
      <section className="rounded-xl border bg-muted/30 p-6 space-y-2">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Source</p>
        <p className="text-sm text-muted-foreground">
          This component is built on top of{" "}
          <span className="font-medium text-foreground">Base UI</span> and styled with{" "}
          <span className="font-medium text-foreground">Tailwind CSS v4</span>. The source file lives at{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            src/components/ui/{component.slug}.tsx
          </code>
          .
        </p>
      </section>
    </div>
  )
}
