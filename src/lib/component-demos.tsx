"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const componentDemos: Record<string, React.ReactNode> = {
  button: (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),

  badge: (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),

  input: (
    <div className="w-full max-w-sm space-y-3">
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),

  label: (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="name">Full name</Label>
      <Input id="name" placeholder="John Doe" />
    </div>
  ),

  textarea: (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself…" rows={4} />
    </div>
  ),

  checkbox: (
    <div className="space-y-3">
      {["Accept terms", "Subscribe to newsletter", "Enable notifications"].map((label) => (
        <div key={label} className="flex items-center gap-2">
          <Checkbox id={label} defaultChecked={label === "Accept terms"} />
          <Label htmlFor={label}>{label}</Label>
        </div>
      ))}
    </div>
  ),

  switch: (
    <div className="space-y-3">
      {["Dark mode", "Email notifications", "Two-factor auth"].map((label, i) => (
        <div key={label} className="flex items-center justify-between gap-4">
          <Label>{label}</Label>
          <Switch defaultChecked={i === 0} />
        </div>
      ))}
    </div>
  ),

  "radio-group": (
    <RadioGroup defaultValue="option-1" className="space-y-2">
      {["Option 1", "Option 2", "Option 3"].map((o, i) => (
        <div key={o} className="flex items-center gap-2">
          <RadioGroupItem value={`option-${i + 1}`} id={`option-${i + 1}`} />
          <Label htmlFor={`option-${i + 1}`}>{o}</Label>
        </div>
      ))}
    </RadioGroup>
  ),

  select: (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),

  slider: (
    <div className="w-full max-w-sm space-y-4">
      <Slider defaultValue={[40]} max={100} step={1} />
      <Slider defaultValue={[20, 70]} max={100} step={1} />
    </div>
  ),

  progress: (
    <div className="w-full max-w-sm space-y-3">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),

  avatar: (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KE</AvatarFallback>
      </Avatar>
    </div>
  ),

  card: (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Manage how you receive notifications.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">Later</Button>
        <Button size="sm">Mark all read</Button>
      </CardFooter>
    </Card>
  ),

  separator: (
    <div className="w-full max-w-sm space-y-3">
      <p className="text-sm font-medium">Keos Design System</p>
      <Separator />
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>Blog</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Docs</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Components</span>
      </div>
    </div>
  ),

  skeleton: (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  ),

  tabs: (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4 text-sm text-muted-foreground">
        Manage your account details and preferences.
      </TabsContent>
      <TabsContent value="password" className="mt-4 text-sm text-muted-foreground">
        Change your password here.
      </TabsContent>
      <TabsContent value="settings" className="mt-4 text-sm text-muted-foreground">
        Configure your settings.
      </TabsContent>
    </Tabs>
  ),

  accordion: (
    <Accordion className="w-full max-w-sm">
      {[
        { value: "q1", trigger: "Is it accessible?", content: "Yes. It adheres to WAI-ARIA guidelines." },
        { value: "q2", trigger: "Is it styled?", content: "Yes. It comes with default styles and is fully customisable." },
        { value: "q3", trigger: "Is it animated?", content: "Yes. It uses CSS transitions for open/close animations." },
      ].map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),

  table: (
    <div className="w-full max-w-lg overflow-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: "Alice Chen", role: "Designer", status: "Active" },
            { name: "Bob Smith", role: "Engineer", status: "Active" },
            { name: "Carol Lee", role: "Product", status: "Inactive" },
          ].map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell className="text-right">
                <Badge variant={row.status === "Active" ? "default" : "secondary"}>{row.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),

  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open Menu</Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  dialog: (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="dialog-name">Name</Label>
            <Input id="dialog-name" defaultValue="Alice Chen" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="dialog-email">Email</Label>
            <Input id="dialog-email" defaultValue="alice@example.com" type="email" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),

  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
