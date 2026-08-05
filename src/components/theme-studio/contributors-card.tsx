import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { contributors, contributorCount } from "@/lib/extra-widgets-data"

export function ContributorsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Contributors
          <Badge variant="secondary">{contributorCount}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-2">
          {contributors.map((c) => (
            <Avatar key={c.id} className="h-9 w-9">
              <AvatarFallback className="text-xs">{c.initials}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
