import { DitherIllustration } from "@/components/site/dither-illustration"

export function EmptyState({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-32 text-center">
      <DitherIllustration />
      <div className="space-y-2">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          [ {eyebrow} ]
        </p>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
