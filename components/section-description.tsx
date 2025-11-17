interface SectionDescriptionProps {
  children: React.ReactNode
}

export function SectionDescription({ children }: SectionDescriptionProps) {
  return (
    <p className="text-sm text-gray-500 mb-2">
      {children}
    </p>
  )
}
