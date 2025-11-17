interface NoteCardProps {
  children: React.ReactNode
  variant?: 'note' | 'warning'
}

export function NoteCard({ children, variant = 'note' }: NoteCardProps) {
  const bgColor = 'bg-background'
  const textColor = variant === 'warning' ? 'text-[rgba(255,56,60,1)]' : 'text-secondary'

  return (
    <div className={`rounded-lg p-4 ${bgColor} border border-border`}>
      <p className={`text-xs ${textColor}`}>
        {children}
      </p>
    </div>
  )
}
