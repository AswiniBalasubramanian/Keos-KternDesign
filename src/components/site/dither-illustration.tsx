"use client"

import { useEffect, useRef } from "react"

const bayer4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
]

export function DitherIllustration({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 220
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const styles = getComputedStyle(document.documentElement)
    const fg = styles.getPropertyValue("--foreground").trim() || "black"

    ctx.clearRect(0, 0, size, size)
    ctx.fillStyle = fg

    const cell = 4
    const cx = size / 2
    const cy = size / 2

    for (let y = 0; y < size; y += cell) {
      for (let x = 0; x < size; x += cell) {
        const dx = (x - cx) / (size / 2)
        const dy = (y - cy) / (size / 2)
        const dist = Math.sqrt(dx * dx + dy * dy)
        const wave = Math.sin(dist * 8) * 0.5 + 0.5
        const brightness = Math.max(0, 1 - dist) * wave
        const threshold = bayer4[(y / cell) % 4][(x / cell) % 4] / 16
        if (brightness > threshold) {
          const alpha = Math.min(1, brightness)
          ctx.globalAlpha = alpha
          ctx.fillRect(x, y, cell - 1, cell - 1)
        }
      }
    }
    ctx.globalAlpha = 1
  }, [])

  return <canvas ref={canvasRef} className={className} style={{ width: 220, height: 220 }} />
}
