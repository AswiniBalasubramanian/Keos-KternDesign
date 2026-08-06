export function BlockPreview({ variant }: { variant: "dashboard" | "sidebar" | "login" | "signup" | "chat" }) {
  if (variant === "chat") {
    return (
      <div className="flex h-full w-full bg-muted/40">
        <div className="flex w-8 flex-col items-center gap-2 border-r bg-background/60 py-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-3 w-3 rounded-sm bg-muted-foreground/20" />
          ))}
          <div className="mt-auto h-4 w-4 rounded-full bg-foreground/70" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4">
          <div className="h-3 w-3 rotate-45 rounded-sm bg-foreground/70" />
          <div className="h-2 w-1/2 rounded-sm bg-muted-foreground/25" />
          <div className="h-1.5 w-2/3 rounded-sm bg-muted-foreground/15" />
          <div className="mt-1 h-4 w-3/4 rounded-full border bg-background" />
          <div className="flex w-3/4 items-center gap-1.5 rounded-md border bg-background p-1.5">
            <div className="flex -space-x-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-3 w-3 rounded-full border-2 border-background bg-muted-foreground/30" />
              ))}
            </div>
            <div className="h-1.5 flex-1 rounded-sm bg-muted-foreground/15" />
          </div>
        </div>
      </div>
    )
  }


  if (variant === "dashboard") {
    return (
      <div className="flex h-full w-full gap-2 bg-muted/40 p-3">
        <div className="w-1/5 space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-2 w-full rounded-sm bg-muted-foreground/15" />
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-8 rounded-md border bg-background" />
            ))}
          </div>
          <div className="h-16 rounded-md border bg-background" />
        </div>
      </div>
    )
  }

  if (variant === "sidebar") {
    return (
      <div className="flex h-full w-full gap-2 bg-muted/40 p-3">
        <div className="w-1/3 space-y-1.5 rounded-md border bg-background p-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 rounded-sm bg-muted-foreground/15" style={{ width: `${80 - i * 8}%` }} />
          ))}
        </div>
        <div className="flex-1 rounded-md border bg-background" />
      </div>
    )
  }

  if (variant === "login") {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted/40 p-3">
        <div className="w-2/3 space-y-2 rounded-md border bg-background p-3">
          <div className="h-2 w-1/2 rounded-sm bg-muted-foreground/20" />
          <div className="h-5 rounded-sm border" />
          <div className="h-5 rounded-sm border" />
          <div className="h-5 rounded-sm bg-foreground/80" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full gap-2 bg-muted/40 p-3">
      <div className="flex w-1/2 flex-col justify-center gap-2 rounded-md border bg-background p-3">
        <div className="h-2 w-2/3 rounded-sm bg-muted-foreground/20" />
        <div className="h-5 rounded-sm border" />
        <div className="h-5 rounded-sm border" />
        <div className="h-5 rounded-sm bg-foreground/80" />
      </div>
      <div className="w-1/2 rounded-md border bg-background" />
    </div>
  )
}
