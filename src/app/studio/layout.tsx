import { ThemeStudioProvider } from "@/components/theme-studio/theme-provider"
import { StudioSidebar } from "@/components/theme-studio/sidebar"
import { StudioPageNav } from "@/components/theme-studio/studio-page-nav"
import { SiteNav } from "@/components/site/site-nav"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeStudioProvider>
      <div className="flex h-screen flex-col">
        <SiteNav />
        <SidebarProvider className="min-h-0 flex-1 overflow-hidden">
          <StudioSidebar />
          <main className="flex-1 overflow-auto bg-muted/30 p-6">
            <StudioPageNav />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </ThemeStudioProvider>
  )
}
