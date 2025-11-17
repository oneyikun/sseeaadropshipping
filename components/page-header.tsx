import { Badge } from './ui/badge'
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
    <div className="mb-12">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#4682b4] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">{stepNumber}</span>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            {title}
          </h1>
          <p className="text-lg text-secondary">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
