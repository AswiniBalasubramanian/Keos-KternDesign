import { SiteNav } from "@/components/site/site-nav"

const teamAppreciations = [
  {
    name: "Edson",
    role: "Head of K-Tern",
    message: "The design system has transformed how our team ships — consistent, beautiful, and fast.",
    emoji: "🚀",
  },
  {
    name: "Vijayaraghavan",
    role: "Lead Engineer",
    message: "Having a single source of truth for tokens and components makes engineering so much smoother.",
    emoji: "⚡",
  },
  {
    name: "Aswini B",
    role: "Design Lead",
    message: "Building KEOS & K-Tern has been the most meaningful design work I've done. Every detail matters.",
    emoji: "✨",
  },
]

const externalAppreciations: { name: string; role: string; message: string; emoji: string }[] = [
  // Add external appreciations here as they come in
]

function AppreciationCard({ name, role, message, emoji }: { name: string; role: string; message: string; emoji: string }) {
  return (
    <div className="break-inside-avoid rounded-2xl border bg-muted/20 p-6 transition hover:bg-muted/40">
      <span className="text-3xl">{emoji}</span>
      <p className="mt-4 text-sm leading-relaxed text-foreground">
        &ldquo;{message}&rdquo;
      </p>
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

export default function AppreciationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            [ Wall of Appreciation ]
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Kind words from<br />
            <span className="text-muted-foreground">the people we build for.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Gratitude from teammates and collaborators who have used KEOS & K-Tern to build something great.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[10px] text-background">♥</span>
            <div>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">From the team</p>
              <h2 className="mt-0.5 text-lg font-bold tracking-tight">Internal appreciation</h2>
            </div>
          </div>

          <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
            {teamAppreciations.map((item, i) => (
              <AppreciationCard key={i} {...item} />
            ))}
            {/* Invite card */}
            <div className="break-inside-avoid rounded-2xl border border-dashed p-6 text-center">
              <p className="font-mono text-[11px] tracking-widest text-muted-foreground/50 uppercase">
                Team member?
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Share what KEOS & K-Tern means to you.</p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-80"
              >
                Add yours ♥
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* External Section */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border text-[10px]">✦</span>
            <div>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">From outside</p>
              <h2 className="mt-0.5 text-lg font-bold tracking-tight">External appreciation</h2>
            </div>
          </div>

          {externalAppreciations.length > 0 ? (
            <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
              {externalAppreciations.map((item, i) => (
                <AppreciationCard key={i} {...item} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed px-8 py-16 text-center">
              <p className="text-2xl">💌</p>
              <p className="mt-3 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
                Waiting for the first one
              </p>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                Used KEOS & K-Tern in your product or project? We'd love to hear from you.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition hover:opacity-80"
              >
                Share your experience →
              </a>
            </div>
          )}
        </div>
      </section>

      <footer className="mt-auto border-t px-6 py-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-10">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/iam-aswini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline"
        >
          Aswini
        </a>
        {" "}· KEOS & K-Tern
      </footer>
    </div>
  )
}
