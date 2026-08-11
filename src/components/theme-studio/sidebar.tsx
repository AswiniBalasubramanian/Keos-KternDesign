"use client"

import { useState } from "react"
import { Type, Lock, PenLine, RectangleHorizontal, Menu as MenuFieldIcon, PaintBucket } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import {
  baseColors,
  chartColors,
  styles,
  fontOptions,
  iconLibraries,
  radiusOptions,
  menuOptions,
  menuAccentOptions,
  isValidHex,
} from "@/lib/theme-presets"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

const swatchDot = (color: string) => (
  <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: color }} />
)

export function StudioSidebar() {
  const {
    style,
    baseColor,
    theme,
    chartColor,
    headingFont,
    font,
    iconLibrary,
    radius,
    menu,
    menuAccent,
    setStyle,
    setBaseColor,
    setTheme,
    setChartColor,
    setHeadingFont,
    setFont,
    setIconLibrary,
    setRadius,
    setMenu,
    setMenuAccent,
    customThemeHex,
    customChartHex,
    setCustomThemeHex,
    setCustomChartHex,
  } = useThemeStudio()
  const { open } = useSidebar()

  return (
    <aside
      className={`h-full shrink-0 overflow-hidden border-r bg-zinc-950 text-zinc-100 transition-[width] duration-200 ease-linear ${
        open ? "w-72" : "w-0 border-r-0"
      }`}
    >
      <div className="flex h-full w-72 flex-col gap-3 overflow-y-auto p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Keos design system</span>
        <SidebarTrigger className="text-zinc-100 hover:bg-zinc-800 hover:text-zinc-100" />
      </div>

      <FieldSelect
        label="Style"
        value={style}
        onChange={(v) => setStyle(v as typeof style)}
        options={styles as unknown as string[]}
      />

      <FieldSelect
        label="Base Color"
        value={baseColor}
        onChange={(v) => setBaseColor(v as typeof baseColor)}
        options={Object.keys(baseColors)}
        dot={baseColors[baseColor].primary}
      />

      <FieldSelect
        label="Theme"
        value={theme}
        onChange={(v) => {
          setTheme(v as typeof theme)
          setCustomThemeHex(null)
          if (v in chartColors) {
            setChartColor(v as typeof chartColor)
            setCustomChartHex(null)
          }
        }}
        options={Object.keys(baseColors)}
        dot={customThemeHex ?? baseColors[theme].primary}
      />
      <HexInput key={`theme-${theme}`} value={customThemeHex} onChange={setCustomThemeHex} />

      <FieldSelect
        label="Chart Color"
        value={chartColor}
        onChange={(v) => {
          setChartColor(v as typeof chartColor)
          setCustomChartHex(null)
        }}
        options={Object.keys(chartColors)}
        dot={customChartHex ?? chartColors[chartColor][0]}
      />
      <HexInput key={`chart-${chartColor}`} value={customChartHex} onChange={setCustomChartHex} />

      <FieldSelect
        label="Heading"
        value={headingFont}
        onChange={setHeadingFont}
        options={fontOptions.map((f) => f.name)}
        icon={<Type className="h-4 w-4 text-zinc-400" />}
        fontPreview
      />

      <FieldSelect
        label="Font"
        value={font}
        onChange={setFont}
        options={fontOptions.map((f) => f.name)}
        icon={
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Lock className="h-3.5 w-3.5" />
            <Type className="h-4 w-4" />
          </div>
        }
        fontPreview
      />

      <FieldSelect
        label="Icon Library"
        value={iconLibrary}
        onChange={(v) => setIconLibrary(v as typeof iconLibrary)}
        options={iconLibraries as unknown as string[]}
        icon={<PenLine className="h-4 w-4 text-zinc-400" />}
      />

      <FieldSelect
        label="Radius"
        value={radius}
        onChange={setRadius}
        options={radiusOptions.map((r) => r.name)}
        icon={<RectangleHorizontal className="h-4 w-4 text-zinc-400" />}
      />

      <FieldSelect
        label="Menu"
        value={menu}
        onChange={(v) => setMenu(v as typeof menu)}
        options={menuOptions as unknown as string[]}
        icon={<MenuFieldIcon className="h-4 w-4 text-zinc-400" />}
      />

      <FieldSelect
        label="Menu Accent"
        value={menuAccent}
        onChange={(v) => setMenuAccent(v as typeof menuAccent)}
        options={menuAccentOptions as unknown as string[]}
        icon={<PaintBucket className="h-4 w-4 text-zinc-400" />}
      />

      </div>
    </aside>
  )
}

function HexInput({
  value,
  onChange,
}: {
  value: string | null
  onChange: (value: string | null) => void
}) {
  const [draft, setDraft] = useState(value ?? "")
  const valid = draft === "" || isValidHex(draft)

  return (
    <div className="-mt-1 flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2">
      <input
        type="color"
        value={valid && draft ? draft : "#000000"}
        onChange={(e) => {
          setDraft(e.target.value)
          onChange(e.target.value)
        }}
        className="h-5 w-5 shrink-0 cursor-pointer rounded border-0 bg-transparent p-0"
      />
      <input
        type="text"
        value={draft}
        placeholder="Custom hex, e.g. #ff6a00"
        onChange={(e) => {
          const next = e.target.value
          setDraft(next)
          if (next === "") {
            onChange(null)
          } else if (isValidHex(next)) {
            onChange(next)
          }
        }}
        className={`w-full bg-transparent text-xs outline-none placeholder:text-zinc-600 ${
          valid ? "text-zinc-100" : "text-red-400"
        }`}
      />
    </div>
  )
}

function FieldSelect({
  label,
  value,
  onChange,
  options,
  dot,
  icon,
  fontPreview,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  dot?: string
  icon?: React.ReactNode
  fontPreview?: boolean
}) {
  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2">
      <div className="text-xs text-zinc-400">{label}</div>
      <Select
        value={value}
        onValueChange={(v) => {
          if (v) onChange(v)
        }}
      >
        <SelectTrigger className="h-auto w-full border-0 bg-transparent p-0 text-sm font-medium text-zinc-100 shadow-none focus:ring-0">
          <div className="flex w-full items-center justify-between">
            <SelectValue />
            {icon ?? (dot ? swatchDot(dot) : null)}
          </div>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            const font = fontPreview ? fontOptions.find((f) => f.name === option)?.cssVar : undefined
            return (
              <SelectItem key={option} value={option} style={font ? { fontFamily: font } : undefined}>
                {option}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
