import { CheckCircle2 } from 'lucide-react'

interface ChecklistItemProps {
  children: React.ReactNode
}

export function ChecklistItem({ children }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </div>
  )
}
