import { notFound } from "next/navigation"
import { getComponentBySlug, components } from "@/lib/components-data"
import { ComponentDetailClient } from "@/components/site/component-detail-client"

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }))
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponentBySlug(slug)
  if (!component) notFound()

  return <ComponentDetailClient component={component} />
}
