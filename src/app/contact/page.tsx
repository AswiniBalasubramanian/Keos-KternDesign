"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="mx-auto flex w-full max-w-6xl flex-1 px-8 py-14 sm:px-10">
        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Left — copy */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Contact</p>
              <h1 className="font-heading text-3xl font-semibold tracking-tight">Get in touch</h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Have a question about the design system, want to contribute, or need a custom implementation? Send a message and we&apos;ll get back to you.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Design System", detail: "Component requests, token questions, theming help" },
                { label: "Contributions", detail: "Open a discussion before submitting a pull request" },
                { label: "Enterprise", detail: "Custom builds, white-labelling, and support contracts" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-xl border bg-muted/30 px-4 py-3">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center gap-4 rounded-2xl border bg-muted/20 p-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold">Message sent</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out — we&apos;ll reply within 1–2 business days.
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="first">First name</Label>
                    <Input id="first" placeholder="Alice" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="last">Last name</Label>
                    <Input id="last" placeholder="Chen" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="alice@example.com" required />
                </div>
                <div className="space-y-1.5">
                  <Label>Topic</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design-system">Design System</SelectItem>
                      <SelectItem value="contribution">Contribution</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you have in mind…"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Send message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
