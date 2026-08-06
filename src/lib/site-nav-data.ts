export interface SiteNavLink {
  id: string
  label: string
  href: string
}

export const siteNavLinks: SiteNavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "studio", label: "Studio", href: "/studio" },
  { id: "foundation", label: "Foundation", href: "/foundation" },
  { id: "components", label: "Components", href: "/components" },
  { id: "blocks", label: "Blocks", href: "/blocks" },
  { id: "charts", label: "Charts", href: "/charts" },
  { id: "ai-ux", label: "AI UX", href: "/ai-ux" },
  { id: "documents", label: "Documents", href: "/documents" },
]
