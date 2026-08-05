"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/theme-studio/icon-picker"
import { useThemeStudio } from "@/components/theme-studio/theme-provider"

export function FileUploadCard() {
  const { iconLibrary } = useThemeStudio()

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Upload</CardTitle>
        <CardDescription>Drag and drop or browse</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-3 rounded-md border border-dashed py-10 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <DynamicIcon name="upload" library={iconLibrary} className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium">Upload files</p>
          <p className="text-xs text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
          <Button size="sm">Browse Files</Button>
        </div>
      </CardContent>
    </Card>
  )
}
