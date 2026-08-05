import { ContributionHistoryCard } from "@/components/theme-studio/contribution-history-card"
import { PayoutThresholdCard } from "@/components/theme-studio/payout-threshold-card"
import { SavingsTargetsCard } from "@/components/theme-studio/savings-targets-card"
import { RecentTransactionsCard } from "@/components/theme-studio/recent-transactions-card"
import { ClaimableBalanceCard } from "@/components/theme-studio/claimable-balance-card"
import { EnvironmentVariablesCard } from "@/components/theme-studio/environment-variables-card"
import { TrafficChannelsCard } from "@/components/theme-studio/traffic-channels-card"
import { BrowserShareCard } from "@/components/theme-studio/browser-share-card"
import { TeamMembersCard } from "@/components/theme-studio/team-members-card"
import { ReportBugCard } from "@/components/theme-studio/report-bug-card"
import { SleepReportCard } from "@/components/theme-studio/sleep-report-card"
import { ProfileCard } from "@/components/theme-studio/profile-card"
import { BookAppointmentCard } from "@/components/theme-studio/book-appointment-card"
import { AnalyticsCard } from "@/components/theme-studio/analytics-card"
import { ShareFeedbackCard } from "@/components/theme-studio/share-feedback-card"
import { CodespacesCard } from "@/components/theme-studio/codespaces-card"
import { ArticleCard } from "@/components/theme-studio/article-card"
import { ShippingAddressCard } from "@/components/theme-studio/shipping-address-card"
import { InviteTeamCard } from "@/components/theme-studio/invite-team-card"
import { InvoiceCard } from "@/components/theme-studio/invoice-card"
import { WeeklyFitnessCard } from "@/components/theme-studio/weekly-fitness-card"
import { FileUploadCard } from "@/components/theme-studio/file-upload-card"
import { ContributorsCard } from "@/components/theme-studio/contributors-card"
import { ShortcutsCard } from "@/components/theme-studio/shortcuts-card"
import { TypographyPreviewCard } from "@/components/theme-studio/typography-preview-card"
import { TypographyBodyCard } from "@/components/theme-studio/typography-body-card"
import { ComponentShowcaseCard } from "@/components/theme-studio/component-showcase-card"

export default function StudioPage() {
  return (
    <div className="min-w-[1800px] columns-3 gap-6 [&>*]:mb-6 [&>*]:break-inside-avoid">
      <TypographyPreviewCard />
      <ComponentShowcaseCard />
      <ContributionHistoryCard />
      <PayoutThresholdCard />
      <SavingsTargetsCard />
      <ClaimableBalanceCard />
      <RecentTransactionsCard />
      <EnvironmentVariablesCard />
      <TrafficChannelsCard />
      <BrowserShareCard />
      <TeamMembersCard />
      <ReportBugCard />
      <TypographyBodyCard />
      <SleepReportCard />
      <ProfileCard />
      <ContributorsCard />
      <BookAppointmentCard />
      <AnalyticsCard />
      <ShortcutsCard />
      <ShareFeedbackCard />
      <CodespacesCard />
      <ArticleCard />
      <ShippingAddressCard />
      <InviteTeamCard />
      <InvoiceCard />
      <WeeklyFitnessCard />
      <FileUploadCard />
    </div>
  )
}
