export interface ContributionMonth {
  month: string
  value: number
}

export const contributionHistory: ContributionMonth[] = [
  { month: "Dec", value: 55 },
  { month: "Jan", value: 78 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 90 },
  { month: "Apr", value: 60 },
  { month: "May", value: 100 },
]

export interface SavingsTarget {
  id: string
  label: string
  amount: string
  achievedLabel: string
  achievedPercent: number
  remaining: string
  met: boolean
}

export const savingsTargets: SavingsTarget[] = [
  {
    id: "retirement",
    label: "Retirement",
    amount: "$420,000",
    achievedLabel: "65% achieved",
    achievedPercent: 65,
    remaining: "$273,000",
    met: false,
  },
  {
    id: "real-estate",
    label: "Real Estate",
    amount: "$85,000",
    achievedLabel: "32% achieved",
    achievedPercent: 32,
    remaining: "$27,200",
    met: false,
  },
]

export interface Transaction {
  id: string
  label: string
  amount: string
  date: string
  positive: boolean
}

export const recentTransactions: Transaction[] = [
  { id: "t1", label: "Payroll deposit", amount: "+$4,250.00", date: "May 20, 2024", positive: true },
  { id: "t2", label: "Brokerage transfer", amount: "-$1,000.00", date: "May 18, 2024", positive: false },
  { id: "t3", label: "Dividend payout", amount: "+$182.40", date: "May 12, 2024", positive: true },
]

export const currencyOptions = [
  { value: "USD", label: "USD — United States Dollar" },
  { value: "EUR", label: "EUR — Euro" },
  { value: "GBP", label: "GBP — British Pound" },
]
