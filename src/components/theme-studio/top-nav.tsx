"use client"

import { Star, Moon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

const navLinks = ["Home", "Docs", "Components", "Blocks", "Charts", "Directory", "Typeset", "Create"]

export function TopNav() {
  const { cssVariableText } = useThemeStudio()

  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-6">
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Input placeholder="Search documentation..." className="w-64" />
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4" />
          120k
        </div>
        <Separator />
        <Moon className="h-4 w-4 text-muted-foreground" />
        <Button variant="outline">Open in v0</Button>
        <Dialog>
          <DialogTrigger render={<Button>Get Code</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Theme CSS variables</DialogTitle>
            </DialogHeader>
            <pre className="max-h-80 overflow-auto rounded-md bg-muted p-4 text-xs">
              {cssVariableText}
            </pre>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}

function Separator() {
  return <div className="h-5 w-px bg-border" />
}
