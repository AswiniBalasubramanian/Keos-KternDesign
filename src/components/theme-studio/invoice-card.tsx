import { Card, CardContent, CardHeader, CardTitle, CardAction, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { invoiceLines } from "@/lib/extra-widgets-data"

export function InvoiceCard() {
  const subtotal = invoiceLines.reduce((sum, l) => sum + l.qty * l.rate, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice #INV-2847</CardTitle>
        <CardAction>
          <Badge variant="secondary">Pending</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="mb-3 text-xs text-muted-foreground">Due March 30, 2026</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground">
                <th className="pb-2 font-medium">Item</th>
                <th className="pb-2 font-medium">Qty</th>
                <th className="pb-2 font-medium">Rate</th>
                <th className="pb-2 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceLines.map((line) => (
                <tr key={line.id} className="border-t">
                  <td className="py-2">{line.item}</td>
                  <td className="py-2">{line.qty}</td>
                  <td className="py-2">${line.rate.toFixed(2)}</td>
                  <td className="py-2 text-right">${(line.qty * line.rate).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="border-t">
                <td colSpan={3} className="py-2 text-right text-xs text-muted-foreground">
                  Subtotal
                </td>
                <td className="py-2 text-right">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan={3} className="py-2 text-right text-xs text-muted-foreground">
                  Tax
                </td>
                <td className="py-2 text-right">$0.00</td>
              </tr>
              <tr className="border-t">
                <td colSpan={3} className="py-2 text-right font-medium">
                  Total Due
                </td>
                <td className="py-2 text-right font-medium">${subtotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Button variant="outline" size="sm">
          Download PDF
        </Button>
        <Button size="sm">Pay Now</Button>
      </CardFooter>
    </Card>
  )
}
