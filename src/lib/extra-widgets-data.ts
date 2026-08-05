export interface EnvVar {
  id: string
  key: string
  value: string
  masked: boolean
}

export const environmentVariables: EnvVar[] = [
  { id: "ev1", key: "DATABASE_URL", value: "postgres://••••••••", masked: true },
  { id: "ev2", key: "NEXT_PUBLIC_API", value: "https://api.example.com", masked: false },
  { id: "ev3", key: "STRIPE_SECRET", value: "sk_live_••••••••", masked: true },
]

export interface TrafficMonth {
  month: string
  desktop: number
  mobile: number
}

export const trafficChannels: TrafficMonth[] = [
  { month: "Jan", desktop: 65, mobile: 30 },
  { month: "Feb", desktop: 90, mobile: 45 },
  { month: "Mar", desktop: 75, mobile: 55 },
  { month: "Apr", desktop: 50, mobile: 25 },
  { month: "May", desktop: 80, mobile: 60 },
  { month: "Jun", desktop: 95, mobile: 50 },
]

export interface BrowserShare {
  id: string
  label: string
  percent: number
}

export const browserShare: BrowserShare[] = [
  { id: "chrome", label: "Chrome", percent: 41 },
  { id: "edge", label: "Edge", percent: 18 },
  { id: "firefox", label: "Firefox", percent: 31 },
  { id: "safari", label: "Safari", percent: 10 },
]

export interface TeamMember {
  id: string
  name: string
  initials: string
}

export const teamMembers: TeamMember[] = []

export interface SleepNight {
  label: string
  deep: number
  light: number
  rem: number
}

export const sleepReport: SleepNight[] = [
  { label: "2h 10m", deep: 40, light: 30, rem: 15 },
  { label: "3h 48m", deep: 30, light: 55, rem: 20 },
  { label: "1h 26m", deep: 55, light: 45, rem: 35 },
  { label: "84", deep: 50, light: 40, rem: 30 },
]

export interface TimeSlot {
  id: string
  label: string
}

export const appointmentSlots: TimeSlot[] = [
  { id: "s1", label: "9:00 AM" },
  { id: "s2", label: "10:30 AM" },
  { id: "s3", label: "11:00 AM" },
  { id: "s4", label: "1:30 PM" },
]

export interface ChecklistItem {
  id: string
  label: string
  meta?: string
}

export const cycleChecklist: ChecklistItem[] = [
  { id: "c1", label: "Edge Requests", meta: "$1.83K" },
  { id: "c2", label: "Fast Data Transfer", meta: "$952.51" },
  { id: "c3", label: "Monitoring data points", meta: "$901.20" },
  { id: "c4", label: "Web Analytics Events", meta: "$603.71" },
  { id: "c5", label: "ISR Writes", meta: "524.52K / 2M" },
  { id: "c6", label: "Function Duration", meta: "5.11 GB Hrs / 1K GB Hrs" },
]

export interface AnalyticsPoint {
  label: string
  value: number
}

export const analyticsSeries: AnalyticsPoint[] = [
  { label: "Mon", value: 30 },
  { label: "Tue", value: 45 },
  { label: "Wed", value: 38 },
  { label: "Thu", value: 60 },
  { label: "Fri", value: 52 },
  { label: "Sat", value: 80 },
  { label: "Sun", value: 68 },
]

export interface FeedbackTopic {
  value: string
  label: string
}

export const feedbackTopics: FeedbackTopic[] = [
  { value: "bug", label: "Bug report" },
  { value: "feature", label: "Feature request" },
  { value: "other", label: "Something else" },
]

export interface InviteRow {
  id: string
  email: string
  role: string
}

export const inviteRoles = ["Editor", "Viewer", "Admin"]

export const initialInviteRows: InviteRow[] = [
  { id: "i1", email: "alex@example.com", role: "Editor" },
  { id: "i2", email: "sam@example.com", role: "Viewer" },
]

export interface InvoiceLine {
  id: string
  item: string
  qty: number
  rate: number
}

export const invoiceLines: InvoiceLine[] = [
  { id: "l1", item: "Design System License", qty: 1, rate: 499 },
  { id: "l2", item: "Priority Support", qty: 12, rate: 99 },
  { id: "l3", item: "Custom Components", qty: 3, rate: 250 },
]

export interface FitnessDay {
  day: string
  calories: number
}

export const weeklyFitness: FitnessDay[] = [
  { day: "M", calories: 620 },
  { day: "T", calories: 340 },
  { day: "W", calories: 510 },
  { day: "T", calories: 380 },
  { day: "F", calories: 700 },
  { day: "S", calories: 280 },
  { day: "S", calories: 640 },
]

export interface Contributor {
  id: string
  initials: string
}

export const contributors: Contributor[] = [
  { id: "ct1", initials: "AK" },
  { id: "ct2", initials: "JS" },
  { id: "ct3", initials: "NM" },
  { id: "ct4", initials: "RW" },
  { id: "ct5", initials: "PL" },
  { id: "ct6", initials: "DC" },
  { id: "ct7", initials: "GB" },
  { id: "ct8", initials: "TV" },
  { id: "ct9", initials: "SF" },
  { id: "ct10", initials: "MQ" },
  { id: "ct11", initials: "EH" },
  { id: "ct12", initials: "OY" },
]

export const contributorCount = 312

export interface Shortcut {
  id: string
  label: string
  keys: string[]
}

export const shortcuts: Shortcut[] = [
  { id: "sc1", label: "Search", keys: ["⌘", "K"] },
  { id: "sc2", label: "Quick Actions", keys: ["⌘", "J"] },
  { id: "sc3", label: "New File", keys: ["⌘", "N"] },
  { id: "sc4", label: "Save", keys: ["⌘", "S"] },
  { id: "sc5", label: "Toggle Sidebar", keys: ["⌘", "B"] },
]

export interface AddressField {
  id: string
  label: string
  placeholder: string
  span?: "full" | "half"
}

export const addressFields: AddressField[] = [
  { id: "street", label: "Street address", placeholder: "123 Main Street", span: "full" },
  { id: "apt", label: "Apt / Suite", placeholder: "Apt 4B", span: "full" },
  { id: "city", label: "City", placeholder: "San Francisco", span: "half" },
]
