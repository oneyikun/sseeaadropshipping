interface CardGroupProps {
  children: React.ReactNode
  columns?: 1 | 2
}

export function CardGroup({ children, columns = 1 }: CardGroupProps) {
  if (columns === 2) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {children}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {children}
    </div>
  )
}
