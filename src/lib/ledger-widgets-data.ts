export interface HoldingRow {
  id: string
  name: string
  shares: string
  amount: string
  spark: number[]
}

export const dividendHoldings: HoldingRow[] = [
  { id: "h1", name: "Vanguard VIG", shares: "450 Shares", amount: "$1,842.10", spark: [3, 5, 4, 6, 8] },
  { id: "h2", name: "S&P 500 VOO", shares: "112 Shares", amount: "$928.40", spark: [4, 3, 5, 3, 4] },
  { id: "h3", name: "Apple AAPL", shares: "85 Shares", amount: "$340.00", spark: [2, 4, 3, 5, 3] },
  { id: "h4", name: "Realty Income", shares: "320 Shares", amount: "$1,139.50", spark: [5, 6, 5, 7, 6] },
]

export interface TxRow2 {
  id: string
  name: string
  category: string
  date: string
  amount: string
  positive: boolean
}

export const ledgerTransactions: TxRow2[] = [
  { id: "t1", name: "Blue Bottle Coffee", category: "Food & Drink", date: "Today, 10:24 AM", amount: "-$6.50", positive: false },
  { id: "t2", name: "Whole Foods Market", category: "Groceries", date: "Yesterday", amount: "-$142.30", positive: false },
  { id: "t3", name: "Stripe Payout", category: "Income", date: "Oct 12", amount: "+$4,200.00", positive: true },
  { id: "t4", name: "Uber Technologies", category: "Transport", date: "Oct 11", amount: "-$24.10", positive: false },
  { id: "t5", name: "Netflix Subscription", category: "Entertainment", date: "Oct 10", amount: "-$19.99", positive: false },
]

export interface NavGroup {
  id: string
  label: string
  items: { id: string; label: string; active?: boolean }[]
}

export const navGroups: NavGroup[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { id: "n1", label: "Dashboard" },
      { id: "n2", label: "Transactions" },
      { id: "n3", label: "Investments" },
      { id: "n4", label: "Accounts" },
      { id: "n5", label: "Spending" },
    ],
  },
  {
    id: "planning",
    label: "Planning",
    items: [
      { id: "n6", label: "Goals" },
      { id: "n7", label: "Budget" },
      { id: "n8", label: "Reports" },
      { id: "n9", label: "Documents" },
    ],
  },
]

export const accountNavGroups: NavGroup[] = [
  {
    id: "account",
    label: "Account",
    items: [
      { id: "a1", label: "Profile" },
      { id: "a2", label: "Billing", active: true },
      { id: "a3", label: "Notifications" },
      { id: "a4", label: "Security" },
      { id: "a5", label: "Appearance" },
    ],
  },
  {
    id: "support",
    label: "Support",
    items: [
      { id: "a6", label: "Help Center" },
      { id: "a7", label: "Contact Us" },
      { id: "a8", label: "Documentation" },
      { id: "a9", label: "Status" },
    ],
  },
]

export interface PaymentOption {
  id: string
  title: string
  description: string
}

export const paymentOptions: PaymentOption[] = [
  { id: "p1", title: "Change transfer limit", description: "Adjust how much you can send from your balance." },
  { id: "p2", title: "Scheduled transfers", description: "Set up a transfer to send at a later date." },
  { id: "p3", title: "Direct Debits", description: "Set up and manage regular payments." },
  { id: "p4", title: "Recurring card payments", description: "Manage your repeated card transactions." },
]

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "How secure is my financial data with Ledger?",
    answer:
      "We use bank-level AES-256 encryption, SOC 2 Type II certified infrastructure, and never store your credentials. All connections use read-only access tokens. We are a SEC registered investment advisor.",
  },
  {
    id: "f2",
    question: "How do I connect my bank or investment accounts?",
    answer: "Go to Accounts and select \"Add Account\" to securely link your bank or brokerage.",
  },
  {
    id: "f3",
    question: "Can I export my data for tax purposes?",
    answer: "Yes — export CSV or PDF statements from the Reports page at any time.",
  },
]
