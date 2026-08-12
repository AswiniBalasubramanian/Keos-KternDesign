"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

function rgbToHex(rgb: string): string {
  const m = rgb.match(/\d+/g)
  if (!m || m.length < 3) return rgb
  return (
    "#" +
    [m[0], m[1], m[2]]
      .map((n) => parseInt(n).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  )
}

interface ColorSwatchProps {
  name: string
  className: string
}

export function ColorSwatch({ name, className }: ColorSwatchProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hex, setHex] = useState<string | null>(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const rgb = getComputedStyle(ref.current).backgroundColor
    setHex(rgbToHex(rgb))
  }, [])

  function handleClick() {
    if (!hex) return
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className="space-y-1.5">
      <div
        className="relative h-16 w-full cursor-pointer overflow-hidden rounded-md"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        {/* Actual color fill */}
        <div ref={ref} className={`absolute inset-0 ${className}`} />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-0.5 bg-black/40 backdrop-blur-[1px] transition-opacity duration-150 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          ) : (
            <Copy className="h-3.5 w-3.5 text-white" strokeWidth={2} />
          )}
          <span className="font-mono text-[10px] font-semibold text-white">
            {copied ? "Copied!" : (hex ?? "—")}
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{name}</p>
    </div>
  )
}
