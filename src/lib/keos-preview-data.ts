export interface RailIcon {
  id: string
  label: string
}

export const railIcons: RailIcon[] = [
  { id: "new", label: "New chat" },
  { id: "history", label: "History" },
  { id: "files", label: "Files" },
  { id: "agents", label: "Agents" },
  { id: "tasks", label: "Tasks" },
]

export interface RailNavItem {
  id: string
  label: string
  children?: { id: string; label: string }[]
}

export interface RailNavGroup {
  id: string
  label?: string
  items: RailNavItem[]
}

export const railNavGroups: RailNavGroup[] = [
  {
    id: "primary",
    items: [
      { id: "routine", label: "Routine" },
      {
        id: "projects",
        label: "Projects",
        children: [
          { id: "all-projects", label: "All Projects" },
          { id: "new-project", label: "New Project" },
        ],
      },
    ],
  },
  {
    id: "build",
    label: "Build",
    items: [{ id: "agent-store", label: "Agent Store" }],
  },
  {
    id: "governance",
    label: "Governance",
    items: [
      {
        id: "admin",
        label: "Admin",
        children: [
          { id: "user-analytics", label: "User Analytics" },
          { id: "agent-analytics", label: "Agent Analytics" },
          { id: "prompt-analytics", label: "Prompt Analytics" },
          { id: "tokens-cost", label: "Tokens & Cost" },
          { id: "groups", label: "Groups" },
          { id: "budget", label: "Budget" },
        ],
      },
    ],
  },
]

export interface ConnectorApp {
  id: string
  label: string
  className: string
}

export const connectorApps: ConnectorApp[] = [
  { id: "drive", label: "D", className: "bg-amber-100 text-amber-700" },
  { id: "mail", label: "M", className: "bg-red-100 text-red-700" },
  { id: "team", label: "T", className: "bg-blue-100 text-blue-700" },
  { id: "notes", label: "N", className: "bg-zinc-200 text-zinc-800" },
]

export interface KeosPrompt {
  id: string
  icon: string
  text: string
  category: string
}

export const keosPrompts: KeosPrompt[] = [
  {
    id: "kp1",
    icon: "\u{1F4A1}",
    text: "Guide: choose static site or dynamic app by weighing engineering, data, and UX complexity",
    category: "Projects",
  },
  {
    id: "kp2",
    icon: "\u{1F310}",
    text: "Build a tool to predict if your project needs a simple site or a full web app",
    category: "Web search",
  },
  {
    id: "kp3",
    icon: "\u{1F916}",
    text: "Do web apps require more advanced hosting than standard sites?",
    category: "Agents",
  },
]
