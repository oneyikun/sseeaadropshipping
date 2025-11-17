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
