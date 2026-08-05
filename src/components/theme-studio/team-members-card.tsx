import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { teamMembers } from "@/lib/extra-widgets-data"

export function TeamMembersCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 rounded-lg border border-dashed py-8 text-center">
        <div className="flex -space-x-2">
          {["A", "B"].map((letter) => (
            <Avatar key={letter} className="h-9 w-9 border-2 border-card">
              <AvatarFallback>{letter}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="h-9 w-9 border-2 border-card bg-foreground text-background">
            <AvatarFallback className="bg-foreground text-background">N</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-sm font-medium">
          {teamMembers.length === 0 ? "No Team Members" : `${teamMembers.length} Team Members`}
        </p>
        <p className="text-xs text-muted-foreground">Invite your team to collaborate on this project.</p>
        <Button size="sm">Invite Members</Button>
      </CardContent>
    </Card>
  )
}
