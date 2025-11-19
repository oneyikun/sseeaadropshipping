import { Type as type, LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  stepNumber: number
  title: string
  description: string
}

export function PageHeader({ stepNumber, title, description }: PageHeaderProps) {
  return (
    <div className="mb-6 md:mb-10">
      <h1 className="text-xl md:text-2xl font-bold mb-2 text-foreground break-words">
        {title}
      </h1>
      <p className="text-sm md:text-base text-muted-foreground break-words leading-relaxed">
        {description}
      </p>
    </div>
  )
}
