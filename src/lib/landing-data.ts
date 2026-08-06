export interface LandingFeature {
  id: string
  title: string
  description: string
  href: string
}

export const landingFeatures: LandingFeature[] = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Color, typography, spacing, and radius tokens that define the visual language.",
    href: "/studio",
  },
  {
    id: "components",
    title: "Components",
    description: "40+ production-ready components built on shadcn/ui, themed and array-driven.",
    href: "/studio",
  },
  {
    id: "theming",
    title: "Theming",
    description: "Live color, font, icon-library, and radius pickers — with custom hex overrides.",
    href: "/studio",
  },
  {
    id: "patterns",
    title: "Patterns",
    description: "Real dashboard, finance, and support layouts assembled from the same primitives.",
    href: "/studio/page-2",
  },
  {
    id: "icons",
    title: "Icon Libraries",
    description: "Swap between Lucide, Tabler, Phosphor, Remix, and Hugeicons without touching code.",
    href: "/studio",
  },
  {
    id: "tokens",
    title: "Design Tokens",
    description: "Every value maps to a CSS variable — copy exact tokens straight from the studio.",
    href: "/studio",
  },
]

export interface LandingStat {
  id: string
  value: string
  label: string
}

export const landingStats: LandingStat[] = [
  { id: "s1", value: "40+", label: "Components" },
  { id: "s2", value: "5", label: "Icon libraries" },
  { id: "s3", value: "10", label: "Typefaces" },
  { id: "s4", value: "2", label: "Live workspaces" },
]
