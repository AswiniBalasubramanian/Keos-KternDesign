"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const emails = ["m@shadcn.com", "hello@shadcn.com"]

export function ProfileCard() {
  const [name, setName] = useState("shadcn")
  const [email, setEmail] = useState(emails[0])
  const [bio, setBio] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <p className="text-xs text-muted-foreground">
            Your name may appear around GitHub where you contribute or are mentioned. You can
            remove it at any time.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Public Email</label>
          <Select value={email} onValueChange={(v) => v && setEmail(v)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {emails.map((e) => (
                <SelectItem key={e} value={e}>
                  {e}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            You can manage verified email addresses in your{" "}
            <a href="#" className="underline">
              email settings
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bio</label>
          <Textarea
            placeholder="Tell us a little bit about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            You can @mention other users and organizations to link to them.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
