"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import emailjs from "@emailjs/browser"

type Tab = "product" | "peer"

const productCards = [
  {
    name: "Edson",
    role: "Head of K-Tern",
    message: "The design system has transformed how our team ships — consistent, beautiful, and fast.",
    emoji: "🚀",
    source: "team",
  },
  {
    name: "Vijayaraghavan",
    role: "Lead Engineer",
    message: "Having a single source of truth for tokens and components makes engineering so much smoother.",
    emoji: "⚡",
    source: "team",
  },
  {
    name: "Kaartech Team",
    role: "Internal",
    message: "KEOS & K-Tern is the backbone of everything we build. Proud to ship with it.",
    emoji: "💙",
    source: "external",
  },
]

const peerCards = [
  {
    from: "Edson",
    fromRole: "Head of K-Tern",
    to: "Aswini B",
    toRole: "Design Lead",
    message: "Aswini's attention to detail and design thinking elevated every component. Truly exceptional work.",
    emoji: "🌟",
  },
  {
    from: "Aswini B",
    fromRole: "Design Lead",
    to: "Vijayaraghavan",
    toRole: "Lead Engineer",
    message: "Vijay's ability to translate complex designs into pixel-perfect code is unmatched. Thank you!",
    emoji: "🙌",
  },
]

function ProductCard({ name, role, message, emoji, source }: typeof productCards[0]) {
  return (
    <div className="break-inside-avoid rounded-2xl border bg-muted/20 p-6 transition hover:bg-muted/40">
      <div className="flex items-start justify-between">
        <span className="text-3xl">{emoji}</span>
        <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase ${
          source === "team" ? "bg-orange-500/10 text-orange-600" : "bg-blue-500/10 text-blue-600"
        }`}>
          {source === "team" ? "Team" : "External"}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed">&ldquo;{message}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border font-mono text-xs font-bold text-muted-foreground">
          {name[0]}
        </div>
        <div>
          <p className="text-xs font-semibold">{name}</p>
          <p className="text-[11px] text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

function PeerCard({ from, fromRole, to, toRole, message, emoji }: typeof peerCards[0]) {
  return (
    <div className="break-inside-avoid rounded-2xl border bg-muted/20 p-6 transition hover:bg-muted/40">
      <span className="text-3xl">{emoji}</span>
      {/* From → To */}
      <div className="mt-4 flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-border font-mono text-[10px] font-bold text-muted-foreground">
            {from[0]}
          </div>
          <span className="font-semibold">{from}</span>
        </div>
        <span className="text-muted-foreground/40">→</span>
        <div className="flex items-center gap-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground font-mono text-[10px] font-bold text-background">
            {to[0]}
          </div>
          <span className="font-semibold">{to}</span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed">&ldquo;{message}&rdquo;</p>
      <div className="mt-4">
        <p className="text-[11px] text-muted-foreground">{fromRole} → {toRole}</p>
      </div>
    </div>
  )
}

function SubmitForm({ type }: { type: Tab }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const fd = new FormData(e.currentTarget)
    const params: Record<string, string> = {
      firstName: fd.get("name") as string,
      lastName: "",
      email: fd.get("email") as string,
      reply_to: fd.get("email") as string,
      topic: type === "product" ? "Product Feedback" : "Peer Appreciation",
      message: type === "peer"
        ? `To: ${fd.get("to") as string}\n\n${fd.get("message") as string}`
        : fd.get("message") as string,
    }
    try {
      await emailjs.send("service_6kfp61k", "template_9dnt128", params, "sLIeQuNU2As7OPJX2")
      setSent(true)
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setError("Something went wrong — please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border bg-muted/20 px-8 py-10 text-center">
        <p className="text-3xl">💌</p>
        <p className="mt-3 font-semibold">Received! Thank you.</p>
        <p className="mt-1 text-sm text-muted-foreground">We'll add it to the wall soon.</p>
        <button onClick={() => setSent(false)} className="mt-4 font-mono text-xs text-muted-foreground underline-offset-2 hover:underline">
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border bg-muted/20 p-6 space-y-4">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {type === "product" ? "Share your feedback" : "Appreciate a teammate"}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium">Your name</label>
          <input name="name" required placeholder="Alice" className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-foreground/20" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium">Your email</label>
          <input name="email" type="email" required placeholder="alice@example.com" className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-foreground/20" />
        </div>
      </div>

      {type === "peer" && (
        <div className="space-y-1">
          <label className="text-xs font-medium">Appreciating who?</label>
          <input name="to" required placeholder="Team member's name" className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-foreground/20" />
        </div>
      )}

      <div className="space-y-1">
        <label className="text-xs font-medium">
          {type === "product" ? "Your feedback" : "Your message"}
        </label>
        <textarea name="message" required rows={4} placeholder={type === "product" ? "Tell us what KEOS & K-Tern means to you…" : "Write something kind…"} className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-foreground/20 resize-none" />
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition hover:opacity-80 disabled:opacity-50"
      >
        {loading ? "Sending…" : type === "product" ? "Share feedback ✦" : "Send appreciation ♥"}
      </button>
    </form>
  )
}

export default function AppreciationPage() {
  const [tab, setTab] = useState<Tab>("product")

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">[ Wall of Appreciation ]</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Kind words from<br />
            <span className="text-muted-foreground">the people we build for.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Product feedback and peer appreciation — two ways to say thank you.
          </p>

          {/* Tabs */}
          <div className="mt-8 inline-flex rounded-full border bg-muted/30 p-1">
            <button
              onClick={() => setTab("product")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${tab === "product" ? "bg-foreground text-background shadow" : "text-muted-foreground hover:text-foreground"}`}
            >
              ✦ For the Product
            </button>
            <button
              onClick={() => setTab("peer")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${tab === "peer" ? "bg-foreground text-background shadow" : "text-muted-foreground hover:text-foreground"}`}
            >
              ♥ For a Teammate
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          {tab === "product" ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {/* Cards */}
              <div className="lg:col-span-2 columns-1 gap-5 space-y-5 sm:columns-2">
                {productCards.map((item, i) => <ProductCard key={i} {...item} />)}
              </div>
              {/* Form */}
              <div>
                <SubmitForm type="product" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {/* Cards */}
              <div className="lg:col-span-2 columns-1 gap-5 space-y-5 sm:columns-2">
                {peerCards.map((item, i) => <PeerCard key={i} {...item} />)}
                {peerCards.length === 0 && (
                  <div className="rounded-2xl border border-dashed px-8 py-12 text-center col-span-2">
                    <p className="text-2xl">🫶</p>
                    <p className="mt-3 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">Be the first</p>
                    <p className="mt-1 text-sm text-muted-foreground">Recognise a teammate's great work.</p>
                  </div>
                )}
              </div>
              {/* Form */}
              <div>
                <SubmitForm type="peer" />
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="mt-auto border-t px-6 py-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-10">
        Built by{" "}
        <a href="https://www.linkedin.com/in/iam-aswini" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
          Aswini
        </a>
        {" "}· KEOS & K-Tern
      </footer>
    </div>
  )
}
