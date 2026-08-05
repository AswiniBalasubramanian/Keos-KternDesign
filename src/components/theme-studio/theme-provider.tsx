"use client"

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react"
import {
  baseColors,
  chartColors,
  styles,
  fontOptions,
  iconLibraries,
  radiusOptions,
  menuOptions,
  menuAccentOptions,
  hexToForeground,
  buildChartRampFromHex,
} from "@/lib/theme-presets"

interface StudioState {
  style: (typeof styles)[number]
  baseColor: keyof typeof baseColors
  theme: keyof typeof baseColors
  chartColor: keyof typeof chartColors
  headingFont: string
  font: string
  iconLibrary: (typeof iconLibraries)[number]
  radius: string
  menu: (typeof menuOptions)[number]
  menuAccent: (typeof menuAccentOptions)[number]
  customThemeHex: string | null
  customChartHex: string | null
}

interface StudioContextValue extends StudioState {
  setStyle: (v: StudioState["style"]) => void
  setBaseColor: (v: StudioState["baseColor"]) => void
  setTheme: (v: StudioState["theme"]) => void
  setChartColor: (v: StudioState["chartColor"]) => void
  setHeadingFont: (v: StudioState["headingFont"]) => void
  setFont: (v: StudioState["font"]) => void
  setIconLibrary: (v: StudioState["iconLibrary"]) => void
  setRadius: (v: StudioState["radius"]) => void
  setMenu: (v: StudioState["menu"]) => void
  setMenuAccent: (v: StudioState["menuAccent"]) => void
  setCustomThemeHex: (v: string | null) => void
  setCustomChartHex: (v: string | null) => void
  activeChartColors: string[]
  cssVariableText: string
}

const StudioContext = createContext<StudioContextValue | null>(null)

export function ThemeStudioProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<StudioState["style"]>("Nova")
  const [baseColor, setBaseColor] = useState<StudioState["baseColor"]>("Neutral")
  const [theme, setTheme] = useState<StudioState["theme"]>("Neutral")
  const [chartColor, setChartColor] = useState<StudioState["chartColor"]>("Neutral")
  const [headingFont, setHeadingFont] = useState<StudioState["headingFont"]>("Figtree")
  const [font, setFont] = useState<StudioState["font"]>("Figtree")
  const [iconLibrary, setIconLibrary] = useState<StudioState["iconLibrary"]>("Phosphor Icons")
  const [radius, setRadius] = useState<StudioState["radius"]>(radiusOptions[2].name)
  const [menu, setMenu] = useState<StudioState["menu"]>("Default / Solid")
  const [menuAccent, setMenuAccent] = useState<StudioState["menuAccent"]>("Subtle")
  const [customThemeHex, setCustomThemeHexState] = useState<string | null>(null)
  const [customChartHex, setCustomChartHexState] = useState<string | null>(null)

  function setCustomThemeHex(v: string | null) {
    setCustomThemeHexState(v)
  }
  function setCustomChartHex(v: string | null) {
    setCustomChartHexState(v)
  }

  const activeChartColors = customChartHex ? buildChartRampFromHex(customChartHex) : chartColors[chartColor]
  const activePrimary = customThemeHex ?? baseColors[theme].primary
  const activePrimaryForeground = customThemeHex
    ? hexToForeground(customThemeHex)
    : baseColors[theme].primaryForeground

  const cssVariableText = useMemo(() => {
    const vars = baseColors[theme]
    const radiusValue = radiusOptions.find((r) => r.name === radius)?.value ?? "0.625rem"
    return [
      `--primary: ${activePrimary};`,
      `--primary-foreground: ${activePrimaryForeground};`,
      `--background: ${vars.background};`,
      `--foreground: ${vars.foreground};`,
      `--ring: ${customThemeHex ?? vars.ring};`,
      `--radius: ${radiusValue};`,
      `--font-sans: ${font};`,
      `--font-heading: ${headingFont};`,
      ...activeChartColors.map((c, i) => `--chart-${i + 1}: ${c};`),
    ].join("\n")
  }, [theme, activeChartColors, radius, font, headingFont, activePrimary, activePrimaryForeground, customThemeHex])

  useEffect(() => {
    const vars = baseColors[theme]
    const radiusValue = radiusOptions.find((r) => r.name === radius)?.value ?? "0.625rem"
    const fontVar = fontOptions.find((f) => f.name === font)?.cssVar
    const headingVar = fontOptions.find((f) => f.name === headingFont)?.cssVar
    const root = document.documentElement
    root.style.setProperty("--primary", activePrimary)
    root.style.setProperty("--primary-foreground", activePrimaryForeground)
    root.style.setProperty("--ring", customThemeHex ?? vars.ring)
    root.style.setProperty("--radius", radiusValue)
    if (fontVar) root.style.setProperty("--font-sans", fontVar)
    if (headingVar) root.style.setProperty("--font-heading", headingVar)
    activeChartColors.forEach((c, i) => root.style.setProperty(`--chart-${i + 1}`, c))
  }, [theme, activeChartColors, radius, font, headingFont, activePrimary, activePrimaryForeground, customThemeHex])

  return (
    <StudioContext.Provider
      value={{
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
        customThemeHex,
        customChartHex,
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
        setCustomThemeHex,
        setCustomChartHex,
        activeChartColors,
        cssVariableText,
      }}
    >
      {children}
    </StudioContext.Provider>
  )
}

export function useThemeStudio() {
  const ctx = useContext(StudioContext)
  if (!ctx) throw new Error("useThemeStudio must be used within ThemeStudioProvider")
  return ctx
}
