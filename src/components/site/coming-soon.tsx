import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteNav } from "@/components/site/site-nav"

interface ComingSoonProps {
  label: string
  title: string
  description: string
  backHref?: string
  backLabel?: string
}

export function ComingSoon({
  label,
  title,
  description,
  backHref = "/",
  backLabel = "Back to home",
}: ComingSoonProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          [ {label} ]
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-8 h-px w-12 bg-border" />
        <p className="mt-6 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
          Coming soon
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase transition hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" />
          {backLabel}
        </Link>
      </div>
    </div>
  )
}
