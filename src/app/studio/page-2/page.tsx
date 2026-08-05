import { DistributeTrackCard } from "@/components/theme-studio/distribute-track-card"
import { QrConnectCard } from "@/components/theme-studio/qr-connect-card"
import { DividendIncomeCard } from "@/components/theme-studio/dividend-income-card"
import { DollarCostAveragingCard } from "@/components/theme-studio/dollar-cost-averaging-card"
import { ClaimableBalanceRoyaltiesCard } from "@/components/theme-studio/claimable-balance-royalties-card"
import { PreferencesCard } from "@/components/theme-studio/preferences-card"
import { GoalDonutCard } from "@/components/theme-studio/goal-donut-card"
import { LedgerTransactionsCard } from "@/components/theme-studio/ledger-transactions-card"
import { AppNavCard } from "@/components/theme-studio/app-nav-card"
import { AccountNavCard } from "@/components/theme-studio/account-nav-card"
import { PaymentsBreadcrumbCard } from "@/components/theme-studio/payments-breadcrumb-card"
import { SupportFaqCard } from "@/components/theme-studio/support-faq-card"
import { FrontDoorCard } from "@/components/theme-studio/front-door-card"

export default function StudioPageTwo() {
  return (
    <div className="min-w-[1800px] columns-4 gap-6 [&>*]:mb-6 [&>*]:break-inside-avoid">
      <DistributeTrackCard />
      <QrConnectCard />
      <DividendIncomeCard />
      <DollarCostAveragingCard />
      <ClaimableBalanceRoyaltiesCard />
      <PreferencesCard />
      <GoalDonutCard />
      <LedgerTransactionsCard />
      <AppNavCard />
      <AccountNavCard />
      <PaymentsBreadcrumbCard />
      <SupportFaqCard />
      <FrontDoorCard />
    </div>
  )
}
