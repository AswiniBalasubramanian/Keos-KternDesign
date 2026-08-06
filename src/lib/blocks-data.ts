export interface BlockCategory {
  id: string
  label: string
}

export const blockCategories: BlockCategory[] = [
  { id: "featured", label: "Featured" },
  { id: "dashboard", label: "Dashboard" },
  { id: "sidebar", label: "Sidebar" },
  { id: "login", label: "Login" },
  { id: "signup", label: "Signup" },
  { id: "keos", label: "Keos" },
  { id: "ktern", label: "Ktern" },
]

export interface BlockItem {
  id: string
  slug: string
  title: string
  category: string
  preview: "dashboard" | "sidebar" | "login" | "signup" | "chat"
}

export const blockItems: BlockItem[] = [
  { id: "b1", slug: "dashboard-01", title: "A dashboard with sidebar, charts, and a data table.", category: "dashboard", preview: "dashboard" },
  { id: "b2", slug: "sidebar-07", title: "A collapsible sidebar with nested navigation groups.", category: "sidebar", preview: "sidebar" },
  { id: "b3", slug: "login-03", title: "A simple login form with social auth options.", category: "login", preview: "login" },
  { id: "b4", slug: "signup-02", title: "A two-column signup page with a testimonial panel.", category: "signup", preview: "signup" },
  { id: "b5", slug: "dashboard-04", title: "A dashboard focused on billing and usage metrics.", category: "dashboard", preview: "dashboard" },
  { id: "b6", slug: "sidebar-03", title: "A minimal sidebar with icon-only collapsed state.", category: "sidebar", preview: "sidebar" },
  { id: "b7", slug: "keos-01", title: "Keos conversation welcome screen with agent avatars.", category: "keos", preview: "chat" },
  { id: "b8", slug: "keos-02", title: "Keos onboarding flow with a signup panel.", category: "keos", preview: "signup" },
  { id: "b9", slug: "ktern-01", title: "Ktern client portal with sidebar navigation.", category: "ktern", preview: "sidebar" },
  { id: "b10", slug: "ktern-02", title: "Ktern secure sign-in screen.", category: "ktern", preview: "login" },
]
