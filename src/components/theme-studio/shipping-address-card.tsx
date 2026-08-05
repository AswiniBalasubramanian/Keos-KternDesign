"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { addressFields } from "@/lib/extra-widgets-data"

const usStates = ["California", "New York", "Texas", "Washington"]

export function ShippingAddressCard() {
  const [saveDefault, setSaveDefault] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Address</CardTitle>
        <CardDescription>Where should we deliver?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {addressFields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label className="text-sm font-medium">{field.label}</label>
            <Input placeholder={field.placeholder} />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">State</label>
            <select className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm">
              {usStates.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">ZIP Code</label>
            <Input placeholder="94102" />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox checked={saveDefault} onCheckedChange={(c) => setSaveDefault(Boolean(c))} />
          Save as default address
        </label>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Address</Button>
      </CardFooter>
    </Card>
  )
}
