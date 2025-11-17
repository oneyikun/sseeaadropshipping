import { ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'secondary'
  className?: string
}

export function LinkButton({ href, children, variant = 'outline', className = '' }: LinkButtonProps) {
  return (
    <Button
      variant={variant}
      asChild
      className={`group ${className}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        {children}
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </Button>
  )
}
