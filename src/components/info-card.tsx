import { type LucideIcon, Info, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react'
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
    default: { bg: 'bg-gray-50', text: 'text-gray-600' },
    primary: { bg: 'bg-blue-50', text: 'text-blue-600' },
    warning: { bg: 'bg-amber-50', text: 'text-amber-600' },
    secondary: { bg: 'bg-gray-100', text: 'text-gray-600' },
    note: { bg: 'bg-gray-50', text: 'text-gray-500' },
    success: { bg: 'bg-green-50', text: 'text-green-600' },
    error: { bg: 'bg-red-50', text: 'text-red-600' },
    info: { bg: 'bg-blue-50', text: 'text-blue-600' }
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
    <div id={id} className={`rounded-lg ${padding} h-full flex flex-col ${styles.bg}`}>
      {(title || displayIcon) && (
        <div className="flex items-start gap-2 mb-3">
          {displayIcon && <displayIcon className={`h-4 w-4 ${styles.text} flex-shrink-0 mt-0.5`} />}
          {title && <div className={`font-semibold text-base text-gray-900`}>{title}</div>}
        </div>
      )}
      <div className={`${textSize} ${styles.text} flex-1`}>{children}</div>
    </div>
  )
}
</invoke>
