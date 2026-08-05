"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { appointmentSlots } from "@/lib/extra-widgets-data"

export function BookAppointmentCard() {
  const [selected, setSelected] = useState(appointmentSlots[0].id)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Appointment</CardTitle>
        <CardDescription>Dr. Sarah Chen · Cardiology</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-medium">Available on March 18, 2026</p>
        <div className="grid grid-cols-2 gap-2">
          {appointmentSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => setSelected(slot.id)}
              className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                selected === slot.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {slot.label}
            </button>
          ))}
        </div>
        <div className="rounded-md border bg-muted/50 p-3">
          <p className="text-xs font-medium">New patient?</p>
          <p className="text-xs text-muted-foreground">Please arrive 15 minutes early.</p>
        </div>
        <Button className="w-full">Book Appointment</Button>
      </CardContent>
    </Card>
  )
}
