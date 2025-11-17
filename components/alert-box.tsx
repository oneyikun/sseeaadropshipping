import { AlertCircle, Info, CheckCircle2, AlertTriangle } from 'lucide-react'

interface AlertBoxProps {
  children: React.ReactNode
  variant?: 'info' | 'warning' | 'success' | 'error'
}

export function AlertBox({ children, variant = 'info' }: AlertBoxProps) {
  const variants = {
    info: {
      bg: 'bg-background',
      border: 'border-border',
      icon: Info,
      iconColor: 'text-[#4682b4]'
    },
    warning: {
      bg: 'bg-background',
      border: 'border-border',
      icon: AlertTriangle,
      iconColor: 'text-[rgba(255,56,60,1)]'
    },
    success: {
      bg: 'bg-background',
      border: 'border-border',
      icon: CheckCircle2,
      iconColor: 'text-[#4682b4]'
    },
    error: {
      bg: 'bg-background',
      border: 'border-border',
      icon: AlertCircle,
      iconColor: 'text-[rgba(255,56,60,1)]'
    }
  }

  const config = variants[variant]
  const Icon = config.icon

  return (
    <div className={`${config.bg} border ${config.border} rounded-lg p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="text-sm flex-1 text-foreground">{children}</div>
      </div>
    </div>
  )
}
