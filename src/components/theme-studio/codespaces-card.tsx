"use client"

import { LayoutGrid } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function CodespacesCard() {
  return (
    <Card>
      <CardContent>
        <Tabs defaultValue="codespaces">
          <TabsList>
            <TabsTrigger value="codespaces">Codespaces</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
          </TabsList>
          <TabsContent value="codespaces" className="space-y-4 pt-2">
            <div>
              <p className="text-sm font-medium">Codespaces</p>
              <p className="text-xs text-muted-foreground">Your workspaces in the cloud</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-md border py-8 text-center">
              <LayoutGrid className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium">No codespaces</p>
              <p className="px-6 text-xs text-muted-foreground">
                You don&apos;t have any codespaces with this repository checked out
              </p>
              <Button size="sm">Create Codespace</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Codespace usage for this repository is paid for by shadcn.
            </p>
          </TabsContent>
          <TabsContent value="local" className="pt-2 text-xs text-muted-foreground">
            Clone this repository to work on it locally.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
