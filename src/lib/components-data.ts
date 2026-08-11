export interface ComponentDoc {
  slug: string
  name: string
  description: string
  category: string
  shadcnName: string
}

export const componentCategories = [
  "Layout",
  "Form",
  "Data Display",
  "Overlay",
  "Navigation",
]

export const components: ComponentDoc[] = [
  // Layout
  {
    slug: "card",
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    category: "Layout",
    shadcnName: "card",
  },
  {
    slug: "separator",
    name: "Separator",
    description: "Visually or semantically separates content.",
    category: "Layout",
    shadcnName: "separator",
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    category: "Layout",
    shadcnName: "skeleton",
  },
  // Form
  {
    slug: "button",
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "Form",
    shadcnName: "button",
  },
  {
    slug: "badge",
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    category: "Form",
    shadcnName: "badge",
  },
  {
    slug: "input",
    name: "Input",
    description: "Displays a form input field or a component that looks like an input field.",
    category: "Form",
    shadcnName: "input",
  },
  {
    slug: "label",
    name: "Label",
    description: "Renders an accessible label associated with controls.",
    category: "Form",
    shadcnName: "label",
  },
  {
    slug: "textarea",
    name: "Textarea",
    description: "Displays a form textarea or a component that looks like a textarea.",
    category: "Form",
    shadcnName: "textarea",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "Form",
    shadcnName: "checkbox",
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description: "A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.",
    category: "Form",
    shadcnName: "radio-group",
  },
  {
    slug: "select",
    name: "Select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    category: "Form",
    shadcnName: "select",
  },
  {
    slug: "switch",
    name: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "Form",
    shadcnName: "switch",
  },
  {
    slug: "slider",
    name: "Slider",
    description: "An input where the user selects a value from within a given range.",
    category: "Form",
    shadcnName: "slider",
  },
  // Data Display
  {
    slug: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    category: "Data Display",
    shadcnName: "avatar",
  },
  {
    slug: "table",
    name: "Table",
    description: "A responsive table component.",
    category: "Data Display",
    shadcnName: "table",
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    category: "Data Display",
    shadcnName: "tabs",
  },
  {
    slug: "accordion",
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "Data Display",
    shadcnName: "accordion",
  },
  {
    slug: "progress",
    name: "Progress",
    description: "Displays an indicator showing the completion progress of a task.",
    category: "Data Display",
    shadcnName: "progress",
  },
  // Overlay
  {
    slug: "dialog",
    name: "Dialog",
    description: "A window overlaid on either the primary window or another dialog window.",
    category: "Overlay",
    shadcnName: "dialog",
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    category: "Overlay",
    shadcnName: "alert-dialog",
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "Extends the Dialog component to display content that complements the main content of the screen.",
    category: "Overlay",
    shadcnName: "sheet",
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    category: "Overlay",
    shadcnName: "tooltip",
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
    category: "Overlay",
    shadcnName: "dropdown-menu",
  },
  // Navigation
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links.",
    category: "Navigation",
    shadcnName: "breadcrumb",
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    description: "An interactive component which expands/collapses a panel.",
    category: "Navigation",
    shadcnName: "collapsible",
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    description: "A composable, themeable and customizable sidebar component.",
    category: "Navigation",
    shadcnName: "sidebar",
  },
]

export function getComponentBySlug(slug: string): ComponentDoc | undefined {
  return components.find((c) => c.slug === slug)
}

export function getComponentsByCategory(category: string): ComponentDoc[] {
  return components.filter((c) => c.category === category)
}
