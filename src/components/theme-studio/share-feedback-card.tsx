"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { feedbackTopics } from "@/lib/extra-widgets-data"

export function ShareFeedbackCard() {
  const [topic, setTopic] = useState<string | null>(null)
  const [feedback, setFeedback] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Topic</label>
          <Select value={topic ?? undefined} onValueChange={(v) => setTopic(v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              {feedbackTopics.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Feedback</label>
          <Textarea
            placeholder="Your feedback helps us improve..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
