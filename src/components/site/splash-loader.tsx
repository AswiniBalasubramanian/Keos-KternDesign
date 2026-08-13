"use client"

import { useEffect, useState, useRef } from "react"
import { KMark } from "@/components/site/k-mark"
import { KanvasMark } from "@/components/site/kanvas-mark"

type Phase = "blank" | "reveal" | "hold" | "exit" | "done"

export function SplashLoader() {
  const [phase, setPhase]   = useState<Phase>("blank")
  const [count, setCount]   = useState(0)
  const countRef            = useRef(0)
  const intervalRef         = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem("splash-done")) { setPhase("done"); return }

    // Counter 0 → 100 in ~1.6 s with variable speed
    const tick = () => {
      countRef.current += Math.ceil(Math.random() * 4 + 1)
      if (countRef.current >= 100) {
        countRef.current = 100
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
      setCount(countRef.current)
    }
    intervalRef.current = setInterval(tick, 16)

    const t1 = setTimeout(() => setPhase("reveal"), 80)
    const t2 = setTimeout(() => setPhase("hold"),   2000)
    const t3 = setTimeout(() => setPhase("exit"),   2600)
    const t4 = setTimeout(() => {
      setPhase("done")
      sessionStorage.setItem("splash-done", "1")
    }, 3400)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (phase === "done") return null

  const visible  = phase !== "blank"
  const exiting  = phase === "exit"

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{
        backgroundColor: "#0D0D0D",
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting
          ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)"
          : "none",
        pointerEvents: "none",
      }}
    >
      {/* ── Subtle noise grain ───────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* ── Thin horizontal accent line ───────────────────────────────── */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
          width: visible ? "100%" : "0%",
          transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      />

      {/* ── Center content ────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 2 }}
      >
        {/* Logo */}
        <div style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
        }}>
          <KanvasMark className="h-16 w-16 text-white" />
        </div>

        {/* Wordmark — clip-path reveal */}
        <div style={{ marginTop: "1.5rem", overflow: "hidden" }}>
          <div style={{
            transform:  visible ? "translateY(0)" : "translateY(110%)",
            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}>
            <p style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "10px",
              letterSpacing: "0.45em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
              Keos &amp; KTern Design System
            </p>
          </div>
        </div>

        {/* Tagline — delayed reveal */}
        <div style={{ marginTop: "6px", overflow: "hidden" }}>
          <div style={{
            transform:  visible ? "translateY(0)" : "translateY(110%)",
            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.52s",
          }}>
            <p style={{
              fontFamily: "var(--font-geist-mono, monospace)",
              fontSize: "8px",
              letterSpacing: "0.5em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
              Design decisions. Made once. Used everywhere.
            </p>
          </div>
        </div>
      </div>

      {/* ── Counter — bottom-right ────────────────────────────────────── */}
      <div
        className="absolute bottom-8 right-10"
        style={{ zIndex: 2 }}
      >
        <p style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.2)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease 0.3s",
          tabularNums: true,
          fontVariantNumeric: "tabular-nums",
        } as React.CSSProperties}>
          {String(count).padStart(3, "0")}
        </p>
      </div>

      {/* ── Year label — bottom-left ──────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-10"
        style={{ zIndex: 2 }}
      >
        <p style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          fontSize: "9px",
          letterSpacing: "0.35em",
          color: "rgba(255,255,255,0.15)",
          textTransform: "uppercase",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.5s",
        }}>
          Â© 2026
        </p>
      </div>

      {/* ── Top-left brand mark ───────────────────────────────────────── */}
      <div
        className="absolute top-7 left-10 flex items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <div style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? "translateX(0)" : "translateX(-10px)",
          transition: "opacity 0.5s ease 0.2s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}>
          <KMark className="h-5 w-5 text-white/30" />
        </div>
        <div style={{
          width: "1px", height: "14px",
          background: "rgba(255,255,255,0.1)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease 0.35s",
        }} />
        <p style={{
          fontFamily: "var(--font-geist-mono, monospace)",
          fontSize: "8px",
          letterSpacing: "0.4em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.35s",
        }}>
          v2.0
        </p>
      </div>
    </div>
  )
}
