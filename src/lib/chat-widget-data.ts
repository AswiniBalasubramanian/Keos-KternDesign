export interface RecommendedPrompt {
  id: string
  icon: string
  text: string
  category: string
}

export const recommendedPrompts: RecommendedPrompt[] = [
  {
    id: "p1",
    icon: "💡",
    text: "Guide: choose static site or dynamic app by weighing engineering, data, and UX complexity",
    category: "Projects",
  },
  {
    id: "p2",
    icon: "🌐",
    text: "Build a tool to predict if your project needs a simple site or a full web app",
    category: "Web search",
  },
  {
    id: "p3",
    icon: "🤖",
    text: "Do web apps require more advanced hosting than standard sites?",
    category: "Agents",
  },
]

export interface ConnectorIcon {
  id: string
  label: string
  className: string
}

export const connectorIcons: ConnectorIcon[] = [
  { id: "c1", label: "Drive", className: "bg-amber-100 text-amber-700" },
  { id: "c2", label: "Mail", className: "bg-red-100 text-red-700" },
  { id: "c3", label: "Team", className: "bg-blue-100 text-blue-700" },
  { id: "c4", label: "Notion", className: "bg-zinc-200 text-zinc-800" },
]
