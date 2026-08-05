"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { faqItems } from "@/lib/ledger-widgets-data"

export function SupportFaqCard() {
  return (
    <Card>
      <CardContent>
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4 pt-3">
            <Accordion multiple={false}>
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-sm">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
          </TabsContent>
          <TabsContent value="billing" className="pt-3 text-sm text-muted-foreground">
            Manage your subscription and payment methods from the Billing settings page.
          </TabsContent>
          <TabsContent value="goals" className="pt-3 text-sm text-muted-foreground">
            Set savings goals and track progress from the Goals page.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
