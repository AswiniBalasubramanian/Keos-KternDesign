"use client"

import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  inclination: number
  ascension: number
  phase: number
  pull: number
}

interface DotGridBackgroundProps {
  /** Any valid CSS color. Defaults to the element's computed `color` (theme-aware via `currentColor`). */
  dotColor?: string
  /** Dot radius in px, 1–12. */
  dotSize?: number
  /** Grid spacing in px, 12 (tight) – 80 (airy). */
  spacing?: number
  /** Toggles the 3D orbit effect; when off, dots still scale/brighten under the cursor. */
  enableOrbiting?: boolean
  /** Orbit revolutions per second-ish, independent of cursor activity. */
  orbitSpeed?: number
  /** How far from the cursor the effect reaches, 20–400px. */
  impactRadius?: number
  /** How much dots enlarge at the center of the impact zone. */
  scaleOnHover?: number
  className?: string
  style?: React.CSSProperties
}

export function DotGridBackground({
  dotColor,
  dotSize = 2,
  spacing = 28,
  enableOrbiting = true,
  orbitSpeed = 0.6,
  impactRadius = 140,
  scaleOnHover = 2.2,
  className,
  style,
}: DotGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dots: Dot[] = []
    const mouse = { x: -9999, y: -9999, active: false }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function buildGrid() {
      dots = []
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            inclination: Math.random() * Math.PI,
            ascension: Math.random() * Math.PI * 2,
            phase: Math.random() * Math.PI * 2,
            pull: 0,
          })
        }
      }
    }

    function resize() {
      const rect = parent!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      buildGrid()
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(parent)

    function handleMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    function handleLeave() {
      mouse.active = false
    }
    parent.addEventListener("mousemove", handleMove)
    parent.addEventListener("mouseleave", handleLeave)

    let rafId = 0
    const start = performance.now()

    function frame(now: number) {
      const time = (now - start) / 1000
      const color = dotColor ?? getComputedStyle(canvas!).color

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, width, height)
      ctx!.fillStyle = color

      for (const dot of dots) {
        const dx = dot.x - mouse.x
        const dy = dot.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const t = mouse.active && dist < impactRadius ? 1 - dist / impactRadius : 0
        const target = t * t * (3 - 2 * t)
        const rate = target > dot.pull ? 0.18 : 0.05
        dot.pull += (target - dot.pull) * rate

        let drawX = dot.x
        let drawY = dot.y
        let depthScale = 1

        if (enableOrbiting && dot.pull > 0.001) {
          const angle = time * orbitSpeed * Math.PI * 2 + dot.phase
          const orbitRadius = spacing * 0.4 * dot.pull
          const ox = orbitRadius * Math.cos(angle)
          const oyFlat = orbitRadius * Math.sin(angle) * Math.cos(dot.inclination)
          const z = orbitRadius * Math.sin(angle) * Math.sin(dot.inclination)
          drawX = dot.x + ox * Math.cos(dot.ascension) - oyFlat * Math.sin(dot.ascension)
          drawY = dot.y + ox * Math.sin(dot.ascension) + oyFlat * Math.cos(dot.ascension)
          depthScale = 1 + (z / spacing) * 0.5
        }

        const radius = Math.max(dotSize * (1 + (scaleOnHover - 1) * dot.pull) * depthScale, 0.4)
        const alpha = 0.16 + dot.pull * 0.6

        ctx!.globalAlpha = Math.min(alpha, 1)
        ctx!.beginPath()
        ctx!.arc(drawX, drawY, radius, 0, Math.PI * 2)
        ctx!.fill()
      }

      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      parent.removeEventListener("mousemove", handleMove)
      parent.removeEventListener("mouseleave", handleLeave)
    }
  }, [dotColor, dotSize, spacing, enableOrbiting, orbitSpeed, impactRadius, scaleOnHover])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={style}
      className={`pointer-events-auto text-foreground/70 ${className ?? ""}`}
    />
  )
}
