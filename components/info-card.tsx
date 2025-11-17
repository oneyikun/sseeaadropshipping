import { Type as type, LucideIcon, Info, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface InfoCardProps {
  title?: string
  icon?: LucideIcon
  children: ReactNode
  variant?: 'default' | 'primary' | 'warning' | 'secondary' | 'note' | 'success' | 'error' | 'info'
  id?: string
  size?: 'sm' | 'md'
}

export function InfoCard({ title, icon: Icon, children, variant = 'default', id, size = 'md' }: InfoCardProps) {
  const variantStyles = {
    default: { bg: 'bg-background', text: 'text-secondary' },
    primary: { bg: 'bg-background', text: 'text-[#4682b4]' },
    warning: { bg: 'bg-background', text: 'text-[rgba(255,56,60,1)]' },
    secondary: { bg: 'bg-background', text: 'text-secondary' },
    note: { bg: 'bg-background', text: 'text-secondary' },
    success: { bg: 'bg-background', text: 'text-[#4682b4]' },
    error: { bg: 'bg-background', text: 'text-[rgba(255,56,60,1)]' },
    info: { bg: 'bg-background', text: 'text-[#4682b4]' }
  }

  // Auto-assign icons for alert variants
  const variantIcons: Record<string, LucideIcon> = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle2,
    error: AlertCircle
  }

  const displayIcon = Icon || variantIcons[variant]
  const styles = variantStyles[variant]
  const padding = size === 'sm' ? 'p-4' : 'p-5'
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm'

  return (
    <div id={id} className={`rounded-lg ${padding} h-full flex flex-col ${styles.bg} border border-border`}>
      {(title || displayIcon) && (
        <div className="flex items-start gap-2 mb-3">
          {displayIcon && <displayIcon className={`h-4 w-4 ${styles.text} flex-shrink-0 mt-0.5`} />}
          {title && <div className={`font-semibold text-base text-foreground`}>{title}</div>}
        </div>
      )}
      <div className={`${textSize} ${styles.text} flex-1`}>{children}</div>
    </div>
  )
}
