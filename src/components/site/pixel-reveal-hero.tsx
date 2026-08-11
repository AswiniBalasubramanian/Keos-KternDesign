"use client"

import { useEffect, useRef } from "react"

const TILE        = 32     // tile size px — no gap, seamless when dense
const RADIUS      = 200    // cursor reveal radius px
const IN_SPD      = 0.20   // reveal speed (fast)
const OUT_SPD     = 0.04   // cover speed (slow — lingers nicely)
const AMBIENT_PROB = 0.025  // ~2.5 % of tiles faintly visible by default

// Fallback brand geometry (used when no imageSrc is provided)
// Colours matched to the actual KEOS brand image
const SHAPES: { pts: [number, number][]; hex: string }[] = [
  { pts: [[0,0],[0.55,0],[0.22,1],[0,0.75]],           hex: "#6B0A1A" },
  { pts: [[0.52,0],[1,0],[1,0.42],[0.32,0.22]],        hex: "#FF5500" },
  { pts: [[0.25,1],[0.55,0],[0.78,0.38],[0.58,1]],     hex: "#D43010" },
  { pts: [[0.58,1],[0.78,0.38],[1,0.42],[1,1]],        hex: "#8C1420" },
  { pts: [[0,0.75],[0.25,1],[0,1]],                    hex: "#3A0610" },
  { pts: [[0.32,0.22],[0.52,0],[0.82,0],[0.62,0.52]],  hex: "#FF7020" },
  { pts: [[0,0],[0.28,0],[0.08,0.48],[0,0.28]],        hex: "#560810" },
  { pts: [[0.38,0.18],[0.68,0.08],[0.76,0.48],[0.48,0.58]], hex: "#E03818" },
  { pts: [[0.08,0.38],[0.32,0.28],[0.28,0.68],[0.04,0.72]], hex: "#B82030" },
  // Top-right bright orange
  { pts: [[0.72,0],[1,0],[1,0.22],[0.78,0.1]],         hex: "#FF8030" },
  // Bottom-left dark shadow
  { pts: [[0,0.55],[0.18,0.72],[0.08,1],[0,1]],        hex: "#280408" },
]

function drawFallback(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#200408"
  ctx.fillRect(0, 0, w, h)
  for (const s of SHAPES) {
    ctx.beginPath()
    ctx.moveTo(s.pts[0][0] * w, s.pts[0][1] * h)
    for (let i = 1; i < s.pts.length; i++) ctx.lineTo(s.pts[i][0] * w, s.pts[i][1] * h)
    ctx.closePath()
    ctx.fillStyle = s.hex
    ctx.fill()
  }
}

type Pix = {
  x: number; y: number
  reveal: number
  ambient: number
  r: number; g: number; b: number
}

interface Props {
  /** Path to brand image in /public. Tiles will sample exact pixel colours from it. */
  imageSrc?: string
  tileSize?: number
  revealRadius?: number
  className?: string
  children?: React.ReactNode
}

export function PixelRevealHero({
  imageSrc,
  tileSize = TILE,
  revealRadius = RADIUS,
  className,
  children,
}: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas  = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const offCanvas = document.createElement("canvas")
    const offCtx    = offCanvas.getContext("2d")!
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0, h = 0
    const mouse = { x: -9999, y: -9999, active: false }
    let pixels: Pix[] = []
    let rafId = 0

    // ── Render brand source onto offscreen canvas ───────────────────────────
    function renderSource(imgEl: HTMLImageElement | null, sw: number, sh: number) {
      offCanvas.width  = sw
      offCanvas.height = sh
      if (imgEl) {
        // Scale image to fill offscreen canvas (cover)
        const ir = imgEl.naturalWidth / imgEl.naturalHeight
        const cr = sw / sh
        let dx = 0, dy = 0, dw = sw, dh = sh
        if (ir > cr) { dw = sh * ir; dx = (sw - dw) / 2 }
        else          { dh = sw / ir; dy = (sh - dh) / 2 }
        offCtx.drawImage(imgEl, dx, dy, dw, dh)
      } else {
        drawFallback(offCtx, sw, sh)
      }
      return offCtx.getImageData(0, 0, sw, sh)
    }

    // ── Build pixel grid, sampling colours from offscreen canvas ────────────
    function buildGrid(img: ImageData) {
      const cols = Math.ceil(w / tileSize) + 1
      const rows = Math.ceil(h / tileSize) + 1
      pixels = []
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const sx  = Math.min(Math.round(i * tileSize + tileSize * 0.5), w - 1)
          const sy  = Math.min(Math.round(j * tileSize + tileSize * 0.5), h - 1)
          const idx = (sy * w + sx) * 4
          pixels.push({
            x: i * tileSize, y: j * tileSize,
            reveal: 0,
            ambient: Math.random() < AMBIENT_PROB ? 0.12 + Math.random() * 0.20 : 0,
            r: img.data[idx],
            g: img.data[idx + 1],
            b: img.data[idx + 2],
          })
        }
      }
    }

    // ── Resize + rebuild ────────────────────────────────────────────────────
    let loadedImg: HTMLImageElement | null = null

    function rebuild() {
      const rect = section!.getBoundingClientRect()
      w = Math.round(rect.width)
      h = Math.round(rect.height)
      if (!w || !h) return
      canvas!.width        = w * dpr
      canvas!.height       = h * dpr
      canvas!.style.width  = `${w}px`
      canvas!.style.height = `${h}px`
      const imgData = renderSource(loadedImg, w, h)
      buildGrid(imgData)
    }

    // ── Load image if provided, otherwise use fallback shapes ───────────────
    if (imageSrc) {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => { loadedImg = img; rebuild() }
      img.onerror = () => { loadedImg = null; rebuild() }
      img.src = imageSrc
    }
    rebuild()

    const ro = new ResizeObserver(rebuild)
    ro.observe(section)

    // ── Input listeners ─────────────────────────────────────────────────────
    function move(cx: number, cy: number) {
      const rect   = canvas!.getBoundingClientRect()
      mouse.x      = cx - rect.left
      mouse.y      = cy - rect.top
      mouse.active = true
    }
    const onMM    = (e: MouseEvent) => move(e.clientX, e.clientY)
    const onTM    = (e: TouchEvent) => { if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY) }
    const onLeave = () => { mouse.active = false }

    section.addEventListener("mousemove",  onMM)
    section.addEventListener("touchmove",  onTM,   { passive: true })
    section.addEventListener("mouseleave", onLeave)
    section.addEventListener("touchend",   onLeave)

    // ── Animation loop ──────────────────────────────────────────────────────
    function frame() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const isDark = document.documentElement.classList.contains("dark")
      ctx!.globalAlpha = 1
      ctx!.fillStyle   = isDark ? "#09090b" : "#ffffff"
      ctx!.fillRect(0, 0, w, h)

      for (const p of pixels) {
        const cx   = p.x + tileSize * 0.5
        const cy   = p.y + tileSize * 0.5
        const dist = Math.sqrt((cx - mouse.x) ** 2 + (cy - mouse.y) ** 2)
        const target = mouse.active && dist < revealRadius
          ? (1 - dist / revealRadius) ** 1.5
          : 0
        p.reveal += (target > p.reveal ? IN_SPD : OUT_SPD) * (target - p.reveal)

        const alpha = Math.max(p.ambient, p.reveal)
        if (alpha < 0.006) continue

        ctx!.globalAlpha = alpha
        ctx!.fillStyle   = `rgb(${p.r},${p.g},${p.b})`
        // No gap — tiles are perfectly seamless when fully revealed
        ctx!.fillRect(p.x, p.y, tileSize, tileSize)
      }

      ctx!.globalAlpha = 1
      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      section.removeEventListener("mousemove",  onMM)
      section.removeEventListener("touchmove",  onTM)
      section.removeEventListener("mouseleave", onLeave)
      section.removeEventListener("touchend",   onLeave)
    }
  }, [imageSrc, tileSize, revealRadius])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-auto absolute inset-0 z-0" />
      {children}
    </div>
  )
}
