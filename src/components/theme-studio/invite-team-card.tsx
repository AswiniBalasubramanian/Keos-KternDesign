"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { initialInviteRows, inviteRoles, InviteRow } from "@/lib/extra-widgets-data"

export function InviteTeamCard() {
  const [rows, setRows] = useState<InviteRow[]>(initialInviteRows)

  function addRow() {
    setRows((prev) => [...prev, { id: `i${prev.length + 1}-${Date.now()}`, email: "", role: "Viewer" }])
  }

  function updateRow(id: string, patch: Partial<InviteRow>) {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, ...patch } : row)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Team</CardTitle>
        <CardDescription>Add members to your workspace</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {rows.map((row) => (
          <div key={row.id} className="flex gap-2">
            <Input
              placeholder="name@example.com"
              value={row.email}
              onChange={(e) => updateRow(row.id, { email: e.target.value })}
              className="flex-1"
            />
            <Select value={row.role} onValueChange={(v) => v && updateRow(row.id, { role: v })}>
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {inviteRoles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full gap-1.5" onClick={addRow}>
          <Plus className="h-4 w-4" />
          Add another
        </Button>
        <div className="space-y-2 pt-2">
          <label className="text-sm font-medium">Or share invite link</label>
          <Input readOnly value="https://app.co/invite/x8f2k" />
        </div>
        <Button className="w-full">Send Invites</Button>
      </CardContent>
    </Card>
  )
}
