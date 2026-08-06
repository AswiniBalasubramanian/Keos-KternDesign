export interface FoundationSection {
  id: string
  label: string
  description: string
}

export const foundationSections: FoundationSection[] = [
  { id: "color", label: "Color", description: "The palette and semantic color roles used across the system." },
  { id: "typography", label: "Typography", description: "Type scale, weights, and the fonts available to every surface." },
  { id: "spacing", label: "Spacing", description: "A consistent scale for padding, margin, and layout rhythm." },
  { id: "radius", label: "Radius", description: "Corner rounding tokens, from sharp to fully pill-shaped." },
  { id: "iconography", label: "Iconography", description: "Five interchangeable icon libraries, one consistent API." },
  { id: "elevation", label: "Elevation", description: "Shadow and ring tokens used to express depth and hierarchy." },
]

export const colorTokens = [
  { name: "background", className: "bg-background border" },
  { name: "foreground", className: "bg-foreground" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "destructive", className: "bg-destructive" },
  { name: "success", className: "bg-success" },
  { name: "warning", className: "bg-warning" },
  { name: "info", className: "bg-info" },
]

export const spacingTokens = [
  { name: "1", value: "0.25rem" },
  { name: "2", value: "0.5rem" },
  { name: "3", value: "0.75rem" },
  { name: "4", value: "1rem" },
  { name: "6", value: "1.5rem" },
  { name: "8", value: "2rem" },
  { name: "12", value: "3rem" },
]

export const radiusTokens = [
  { name: "sm", value: "var(--radius-sm)" },
  { name: "md", value: "var(--radius-md)" },
  { name: "lg", value: "var(--radius-lg)" },
  { name: "xl", value: "var(--radius-xl)" },
  { name: "2xl", value: "var(--radius-2xl)" },
]

export const typeScale = [
  { name: "text-xs", className: "text-xs" },
  { name: "text-sm", className: "text-sm" },
  { name: "text-base", className: "text-base" },
  { name: "text-lg", className: "text-lg" },
  { name: "text-xl", className: "text-xl" },
  { name: "text-2xl", className: "text-2xl" },
  { name: "text-3xl", className: "text-3xl" },
]

export const iconLibraryNames = ["Lucide", "Tabler Icons", "Phosphor Icons", "Remix Icon", "Hugeicons"]

export const elevationTokens = [
  { name: "ring-1", className: "ring-1 ring-foreground/10" },
  { name: "shadow-sm", className: "shadow-sm" },
  { name: "shadow-md", className: "shadow-md" },
  { name: "shadow-lg", className: "shadow-lg" },
]
