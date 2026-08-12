export interface SiteNavChild {
  id: string
  label: string
  href: string
}

export interface SiteNavLink {
  id: string
  label: string
  href: string
  children?: SiteNavChild[]
}

export const siteNavLinks: SiteNavLink[] = [
  { id: "home",      label: "Home",   href: "/" },
  { id: "studio",    label: "Studio", href: "/studio" },
  {
    id: "foundation",
    label: "Product DS",
    href: "/foundation",
    children: [
      { id: "foundation-home", label: "Foundation",  href: "/foundation" },
      { id: "components",      label: "Components",  href: "/components" },
      { id: "blocks",          label: "Patterns",    href: "/blocks" },
      { id: "charts",          label: "Charts",      href: "/charts" },
      { id: "ai-ux",           label: "AI UX",       href: "/ai-ux" },
      { id: "accessibility",   label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/branding-kit",
    children: [
      { id: "branding-kit",   label: "Branding Kit",   href: "/branding-kit" },
      { id: "marketing-kit",  label: "Marketing Kit",  href: "/marketing-kit" },
      { id: "blogs",          label: "Blogs",          href: "/blogs" },
      { id: "keos-tv",        label: "KEOS TV",        href: "/keos-tv" },
    ],
  },
  { id: "news",      label: "News",   href: "/news" },
  { id: "documents", label: "Doc",    href: "/documents" },
]
