import { ThemeStudioProvider } from "@/components/theme-studio/theme-provider"
import { StudioSidebar } from "@/components/theme-studio/sidebar"
import { StudioPageNav } from "@/components/theme-studio/studio-page-nav"

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeStudioProvider>
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 overflow-hidden">
          <StudioSidebar />
          <main className="flex-1 overflow-auto bg-muted/30 p-6">
            <StudioPageNav />
            {children}
          </main>
        </div>
      </div>
    </ThemeStudioProvider>
  )
}
