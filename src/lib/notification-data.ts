import { NotificationItem } from "@/lib/types"

export const notificationItems: NotificationItem[] = [
  {
    id: "marketing-emails",
    title: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
    enabled: true,
  },
  {
    id: "security-alerts",
    title: "Security alerts",
    description: "Get notified when there is unusual activity on your account.",
    enabled: true,
  },
  {
    id: "product-updates",
    title: "Product updates",
    description: "Stay informed about updates to features you use.",
    enabled: false,
  },
  {
    id: "weekly-digest",
    title: "Weekly digest",
    description: "A summary of activity from the past week, sent every Monday.",
    enabled: false,
  },
]
