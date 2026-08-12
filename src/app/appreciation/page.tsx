import { SiteNav } from "@/components/site/site-nav"

const appreciations = [
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
    name: "Kaartech Team",
    role: "Internal",
    message: "KEOS & K-Tern is the backbone of everything we build. Proud to ship with it.",
    emoji: "💙",
  },
]

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
            Appreciation from teammates, collaborators, and everyone who has used KEOS & K-Tern to build something great.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {appreciations.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl border bg-muted/20 p-6 transition hover:bg-muted/40"
            >
              <span className="text-3xl">{item.emoji}</span>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                &ldquo;{item.message}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border font-mono text-xs font-bold text-muted-foreground">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold">{item.name}</p>
                  <p className="text-[11px] text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Empty card — invite */}
          <div className="break-inside-avoid rounded-2xl border border-dashed p-6 text-center">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground/50 uppercase">
              Your words here
            </p>
            <a
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-80"
            >
              Share appreciation ♥
            </a>
          </div>
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
