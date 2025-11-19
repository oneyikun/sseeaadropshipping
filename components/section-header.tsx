import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  icon: string
  title: string
  className?: string
}

export function SectionHeader({ icon, title, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center gap-2 mb-4 !mt-12 first:!mt-0', className)}>
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
        <span className="text-lg">{icon}</span>
      </div>
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
    </div>
  )
}
