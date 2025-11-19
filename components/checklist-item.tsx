import { CheckCircle2 } from 'lucide-react'

interface ChecklistItemProps {
  children: React.ReactNode
}

export function ChecklistItem({ children }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 text-sm text-foreground">
      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
      <span className="leading-relaxed">{children}</span>
    </div>
  )
}

interface ChecklistGroupProps {
  children: React.ReactNode
  columns?: 1 | 2
}

export function ChecklistGroup({ children, columns = 1 }: ChecklistGroupProps) {
  if (columns === 2) {
    return (
      <div className="grid md:grid-cols-2 gap-2">
        {children}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {children}
    </div>
  )
}
