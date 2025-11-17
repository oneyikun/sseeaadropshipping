import { type LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  className?: string
  iconColor?: string
}

export function SectionHeader({ icon: Icon, title, className = '', iconColor = 'text-[#4682b4]' }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${className}`}>
      <Icon className={`h-5 w-5 ${iconColor}`} />
      <h3 className="font-semibold text-xl text-foreground">{title}</h3>
    </div>
  )
}
