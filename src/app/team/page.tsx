import { SiteNav } from "@/components/site/site-nav"

const members = [
  { name: "Edson", role: "Head of K-Tern", dept: "Product" },
  { name: "Aswini B", role: "Design Lead", dept: "Design" },
  { name: "Vijayaraghavan", role: "Lead Engineer", dept: "Engineering" },
  { name: "Team Member", role: "Frontend Engineer", dept: "Engineering" },
  { name: "Team Member", role: "UI Designer", dept: "Design" },
  { name: "Team Member", role: "Backend Engineer", dept: "Engineering" },
  { name: "Team Member", role: "AI Engineer", dept: "AI" },
  { name: "Team Member", role: "UX Researcher", dept: "Design" },
  { name: "Team Member", role: "DevOps Engineer", dept: "Engineering" },
]

const deptColors: Record<string, string> = {
  Design: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  Product: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Engineering: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  AI: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="border-b px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            [ Team ]
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            We&apos;re building the future<br />
            <span className="text-muted-foreground">of enterprise design.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            KEOS &amp; K-Tern is the design system powering AI-native enterprise products at Kaartech.
            Our team of designers, engineers, and researchers work together to build tools that help millions of users work smarter.
          </p>
        </div>
      </section>

      {/* Team photo */}
      <section className="border-b px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team.jpg"
              alt="The KEOS & K-Tern team"
              className="w-full object-cover object-center transition-all duration-700 grayscale hover:grayscale-0"
              style={{ maxHeight: "600px", display: "block" }}
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
            The KEOS &amp; K-Tern team — Kaartech, 2026
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-b px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            [ Values ]
          </p>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
            {[
              {
                title: "Design with purpose",
                body: "Every decision has a reason. We design systems that are coherent, intentional, and built to scale across products.",
              },
              {
                title: "Build in the open",
                body: "Tokens, components, and patterns are documented, versioned, and shared across every team that builds on KEOS.",
              },
              {
                title: "Ship with craft",
                body: "We care about the details — motion, contrast, spacing, and accessibility — because the details add up to the experience.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-background px-6 py-8">
                <h3 className="text-sm font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            [ People ]
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            The people behind KEOS
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {members.map((m, i) => (
              <div
                key={i}
                className="group flex flex-col gap-3 rounded-xl border bg-muted/20 p-5 transition hover:bg-muted/50"
              >
                {/* Avatar placeholder */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-border font-mono text-sm font-bold text-muted-foreground">
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug">{m.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{m.role}</p>
                </div>
                <span className={`w-fit rounded-full px-2 py-0.5 font-mono text-[10px] tracking-wide ${deptColors[m.dept]}`}>
                  {m.dept}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join section */}
      <section className="border-t px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border bg-muted/20 px-8 py-12 text-center sm:px-16">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              [ Join us ]
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Want to build with us?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We&apos;re always looking for thoughtful designers and engineers who care about craft.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition hover:opacity-80"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-8 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-10">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/iam-aswini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline"
        >
          Aswini
        </a>
        {" "}Â· KEOS &amp; K-Tern
      </footer>
    </div>
  )
}
