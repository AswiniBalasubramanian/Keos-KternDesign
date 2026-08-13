"use client"

import { useEffect, useRef, useState } from "react"

const S = 14 // triangle size in px

// Direction: where the equilateral triangle TIP points
type Dir = "dr" | "dl" | "ur" | "ul"

// Prism-style equilateral triangle â€” default tip points RIGHT.
// Rotated around center to face each direction.
function Triangle({ color, dir }: { color: string; dir: Dir }) {
  const rotate: Record<Dir, number> = {
    dr: 45,
    dl: 135,
    ur: -45,
    ul: -135,
  }
  return (
    <svg
      width={S} height={S} viewBox={`0 0 ${S} ${S}`}
      style={{
        display: "block",
        overflow: "visible",
        transform: `rotate(${rotate[dir]}deg)`,
        transformOrigin: "center",
      }}
    >
      {/* Isosceles triangle pointing right: base on left, tip at right-center */}
      <polygon points={`0,0 ${S},${S / 2} 0,${S}`} fill={color} />
    </svg>
  )
}

function Pill({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="whitespace-nowrap rounded-full px-2.5 py-[5px] text-[11px] font-semibold leading-none text-white"
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 16px 2px ${color}80, 0 2px 6px 0 rgba(0,0,0,0.35)`,
      }}
    >
      {label}
    </div>
  )
}

// Cursor widget: pill + triangle. Triangle tip faces `dir`.
// For dr/dl: pill on top, triangle below (right-aligned for dr, left-aligned for dl)
// For ur/ul: triangle above (right-aligned for ur, left-aligned for ul), pill below
function CollabCursor({
  label,
  color,
  dir,
  visible = true,
  posStyle,
}: {
  label: string
  color: string
  dir: Dir
  visible?: boolean
  posStyle: React.CSSProperties
}) {
  const pill = <Pill label={label} color={color} />
  const tri = <Triangle color={color} dir={dir} />
  const wrap: React.CSSProperties = { ...posStyle, opacity: visible ? 1 : 0, transition: "opacity 0.15s ease" }

  if (dir === "dr")
    return (
      <div className="absolute inline-flex flex-col items-end" style={wrap}>
        {pill}
        <div style={{ marginTop: 2 }}>{tri}</div>
      </div>
    )

  if (dir === "dl")
    return (
      <div className="absolute inline-flex flex-col items-start" style={wrap}>
        {pill}
        <div style={{ marginTop: 2 }}>{tri}</div>
      </div>
    )

  if (dir === "ur")
    return (
      <div className="absolute inline-flex flex-col items-end" style={wrap}>
        <div style={{ marginBottom: 2 }}>{tri}</div>
        {pill}
      </div>
    )

  // ul
  return (
    <div className="absolute inline-flex flex-col items-start" style={wrap}>
      <div style={{ marginBottom: 2 }}>{tri}</div>
      {pill}
    </div>
  )
}

export function HeroCursorTag() {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [youVisible, setYouVisible] = useState(false)

  useEffect(() => {
    const parent = ref.current?.parentElement as HTMLElement | null
    if (!parent) return

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      if (!youVisible) setYouVisible(true)
      parent.style.cursor = "none"
    }

    const handleLeave = () => {
      setYouVisible(false)
      parent.style.cursor = ""
    }

    parent.addEventListener("mousemove", handleMove)
    parent.addEventListener("mouseleave", handleLeave)
    return () => {
      parent.removeEventListener("mousemove", handleMove)
      parent.removeEventListener("mouseleave", handleLeave)
      parent.style.cursor = ""
    }
  }, [youVisible])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: 5 }}>

      {/* Keos â€” top-right; triangle tip points down-left toward title */}
      <CollabCursor label="Keos"   color="#800020" dir="dl" posStyle={{ left: "72%", top: "10%" }} />

      {/* Aswini â€” upper-left; triangle tip points down-right toward "Design decisions" */}
      <CollabCursor label="Aswini" color="#FB540C" dir="dr" posStyle={{ left: "10%", top: "14%" }} />

      {/* KTern â€” lower-left; triangle tip points up-right toward title */}
      <CollabCursor label="KTern" color="#DC143C" dir="ur" posStyle={{ left: "12%", top: "68%" }} />

      {/* You â€” follows mouse; tip points down-right from pill */}
      <CollabCursor
        label="You"
        color="#0D0D0D"
        dir="dr"
        visible={youVisible}
        posStyle={{ left: pos.x, top: pos.y }}
      />

    </div>
  )
}
