import { SiteNav } from "@/components/site/site-nav"
import { ComponentsNav } from "@/components/site/components-nav"

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-0 px-8 sm:px-10">
        <ComponentsNav />
        <main className="flex-1 border-l py-10 pl-10">{children}</main>
      </div>
    </div>
  )
}
