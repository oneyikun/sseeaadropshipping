interface NoteCardProps {
  children: React.ReactNode
  variant?: 'note' | 'warning'
}

export function NoteCard({ children, variant = 'note' }: NoteCardProps) {
  const bgColor = variant === 'warning' ? 'bg-red-50' : 'bg-gray-50'
  const textColor = variant === 'warning' ? 'text-red-600' : 'text-gray-500'

  return (
    <div className={`rounded-lg p-4 ${bgColor}`}>
      <p className={`text-xs ${textColor}`}>
        {children}
      </p>
    </div>
  )
}
