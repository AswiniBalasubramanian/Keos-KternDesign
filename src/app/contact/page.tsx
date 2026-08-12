"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
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

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border bg-background shadow-2xl">
        {/* Illustration area */}
        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#FF6900]/6">
          {/* Background rings */}
          <div className="absolute h-64 w-64 rounded-full border border-[#FF6900]/10" />
          <div className="absolute h-44 w-44 rounded-full border border-[#FF6900]/15" />
          <div className="absolute h-28 w-28 rounded-full border border-[#FF6900]/20" />

          {/* Envelope illustration */}
          <svg width="88" height="72" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="12" width="80" height="56" rx="6" fill="#FFF4EC" stroke="#FF6900" strokeWidth="2.5"/>
            <path d="M4 18L44 44L84 18" stroke="#FF6900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 68L30 42" stroke="#FF6900" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            <path d="M84 68L58 42" stroke="#FF6900" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            <circle cx="68" cy="18" r="14" fill="#FF6900"/>
            <path d="M62 18L66 22L74 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Floating dots */}
          <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[#FF6900]/30" />
          <div className="absolute right-10 bottom-10 h-1.5 w-1.5 rounded-full bg-[#FF6900]/20" />
          <div className="absolute left-16 bottom-8 h-1 w-1 rounded-full bg-[#FF6900]/40" />
        </div>

        {/* Content */}
        <div className="px-8 py-6 text-center">
          <p className="font-mono text-[10px] tracking-widest text-[#FF6900] uppercase">Message received</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight">We&apos;ve got it!</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We received your message and will reply back shortly.
          </p>
          <Button className="mt-6 w-full" onClick={onClose}>
            Done
          </Button>
          <button
            onClick={onClose}
            className="mt-3 w-full font-mono text-[10px] tracking-widest text-muted-foreground uppercase transition hover:text-foreground"
          >
            Send another message
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [topic, setTopic] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [attachmentName, setAttachmentName] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const fd = new FormData(e.currentTarget)
    const firstName = fd.get("first") as string
    const lastName = fd.get("last") as string
    const email = fd.get("email") as string
    const message = fd.get("message") as string
    const file = fileInputRef.current?.files?.[0]

    try {
      const templateParams: Record<string, string> = {
        firstName,
        lastName: lastName ?? "",
        email,
        reply_to: email,
        topic: topic || "General",
        message,
      }

      // Include attachment as base64 if provided
      if (file && file.size > 0) {
        const base64 = await new Promise<string>((res, rej) => {
          const reader = new FileReader()
          reader.onload = () => res((reader.result as string).split(",")[1])
          reader.onerror = rej
          reader.readAsDataURL(file)
        })
        templateParams.attachment = base64
        templateParams.attachment_name = file.name
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      setShowSuccess(true)
      formRef.current?.reset()
      setTopic("")
      setAttachmentName(null)
    } catch (err) {
      console.error("[emailjs]", err)
      setError("Something went wrong — please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="first">First name</Label>
                  <Input id="first" name="first" placeholder="Alice" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last">Last name</Label>
                  <Input id="last" name="last" placeholder="Chen" required />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="alice@example.com" required />
              </div>
              <div className="space-y-1.5">
                <Label>Topic</Label>
                <Select value={topic} onValueChange={setTopic}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Design System">Design System</SelectItem>
                    <SelectItem value="Contribution">Contribution</SelectItem>
                    <SelectItem value="Enterprise">Enterprise</SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                    <SelectItem value="Bug Report">Bug Report</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you have in mind…"
                  rows={5}
                  required
                />
              </div>

              {/* Optional attachment */}
              <div className="space-y-1.5">
                <Label>
                  Attachment{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="attachment"
                  accept="image/*,.pdf,.png,.jpg,.jpeg,.gif,.webp"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    setAttachmentName(file ? file.name : null)
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full items-center gap-2.5 rounded-lg border border-dashed border-input bg-transparent px-3 py-2.5 text-sm text-muted-foreground transition hover:border-ring hover:text-foreground"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                  </svg>
                  <span className="truncate">
                    {attachmentName ?? "Attach an image or file…"}
                  </span>
                  {attachmentName && (
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(ev) => {
                        ev.stopPropagation()
                        if (fileInputRef.current) fileInputRef.current.value = ""
                        setAttachmentName(null)
                      }}
                      onKeyDown={(ev) => {
                        if (ev.key === "Enter") {
                          ev.stopPropagation()
                          if (fileInputRef.current) fileInputRef.current.value = ""
                          setAttachmentName(null)
                        }
                      }}
                      className="ml-auto shrink-0 rounded-full p-0.5 hover:text-destructive"
                      aria-label="Remove attachment"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12"/>
                      </svg>
                    </span>
                  )}
                </button>
                <p className="text-[11px] text-muted-foreground/60">Images, PDF — max 10 MB</p>
              </div>

              {error && (
                <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-xs text-destructive">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
