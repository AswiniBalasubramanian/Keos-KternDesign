export interface ThemeVars {
  primary: string
  primaryForeground: string
  background: string
  foreground: string
  card: string
  ring: string
}

export const baseColors: Record<string, ThemeVars> = {
  Neutral: {
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.145 0 0)",
    card: "oklch(1 0 0)",
    ring: "oklch(0.708 0 0)",
  },
  Slate: {
    primary: "oklch(0.279 0.041 260.031)",
    primaryForeground: "oklch(0.984 0.003 247.858)",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.208 0.042 265.755)",
    card: "oklch(1 0 0)",
    ring: "oklch(0.704 0.04 256.788)",
  },
  Rose: {
    primary: "oklch(0.586 0.253 17.585)",
    primaryForeground: "oklch(0.985 0.003 17.585)",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.2 0.02 17.585)",
    card: "oklch(1 0 0)",
    ring: "oklch(0.7 0.15 17.585)",
  },
  Emerald: {
    primary: "oklch(0.51 0.14 163)",
    primaryForeground: "oklch(0.985 0.02 163)",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.18 0.02 163)",
    card: "oklch(1 0 0)",
    ring: "oklch(0.7 0.12 163)",
  },
  Orange: {
    primary: "oklch(0.702 0.226 42.7)",
    primaryForeground: "oklch(0.985 0 0)",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.18 0.02 42)",
    card: "oklch(1 0 0)",
    ring: "oklch(0.702 0.226 42.7)",
  },
}

export const chartColors: Record<string, string[]> = {
  Neutral: ["oklch(0.55 0 0)", "oklch(0.65 0 0)", "oklch(0.45 0 0)", "oklch(0.75 0 0)", "oklch(0.35 0 0)"],
  Vivid: ["oklch(0.6 0.2 30)", "oklch(0.6 0.2 140)", "oklch(0.6 0.2 250)", "oklch(0.7 0.2 90)", "oklch(0.6 0.2 320)"],
  Ocean: ["oklch(0.55 0.15 220)", "oklch(0.65 0.13 200)", "oklch(0.45 0.12 240)", "oklch(0.7 0.1 190)", "oklch(0.4 0.1 250)"],
  Orange: ["oklch(0.86 0.1 55)", "oklch(0.702 0.226 42.7)", "oklch(0.59 0.21 38)", "oklch(0.48 0.19 32)", "oklch(0.37 0.15 27)"],
}

export const styles = ["Nova", "Mono", "Classic", "Soft"] as const

export const fontOptions: { name: string; cssVar: string }[] = [
  { name: "Geist", cssVar: "var(--font-geist)" },
  { name: "Inter", cssVar: "var(--font-inter)" },
  { name: "Noto Sans", cssVar: "var(--font-noto-sans)" },
  { name: "Nunito Sans", cssVar: "var(--font-nunito-sans)" },
  { name: "Figtree", cssVar: "var(--font-figtree)" },
  { name: "Roboto", cssVar: "var(--font-roboto)" },
  { name: "Raleway", cssVar: "var(--font-raleway)" },
  { name: "DM Sans", cssVar: "var(--font-dm-sans)" },
  { name: "Public Sans", cssVar: "var(--font-public-sans)" },
  { name: "Outfit", cssVar: "var(--font-outfit)" },
]
export const headingFonts = fontOptions.map((f) => f.name)

export const iconLibraries = ["Lucide", "Tabler Icons", "Hugeicons", "Phosphor Icons", "Remix Icon"] as const

export const radiusOptions: { name: string; value: string }[] = [
  { name: "None", value: "0rem" },
  { name: "Small", value: "0.25rem" },
  { name: "Default", value: "0.625rem" },
  { name: "Large", value: "1rem" },
  { name: "Full", value: "1.5rem" },
]

export const menuOptions = ["Default / Solid", "Compact / Ghost", "Rounded / Outline"] as const
export const menuAccentOptions = ["Subtle", "Bold", "None"] as const

export const presets = [
  "b0", "Modern Minimal", "T3 Chat", "Twitter", "Mocha Mousse", "Bubblegum", "Doom 64",
]

export function isValidHex(hex: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(hex)
}

export function hexToForeground(hex: string): string {
  const normalized = hex.replace("#", "")
  const full =
    normalized.length === 3
      ? normalized.split("").map((c) => c + c).join("")
      : normalized
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6 ? "#0a0a0a" : "#fafafa"
}

export function buildChartRampFromHex(hex: string): string[] {
  return [
    `color-mix(in oklch, ${hex} 70%, white)`,
    hex,
    `color-mix(in oklch, ${hex} 85%, black)`,
    `color-mix(in oklch, ${hex} 70%, black)`,
    `color-mix(in oklch, ${hex} 55%, black)`,
  ]
}
