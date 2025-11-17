import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface StepSectionProps {
  stepNumber?: string
  title: string
  description?: string
  children: React.ReactNode
  id?: string
}

export function StepSection({ stepNumber, title, description, children, id }: StepSectionProps) {
  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          {stepNumber && <span className="text-blue-600">{stepNumber}</span>}
          {title}
        </CardTitle>
        {description && <CardDescription className="text-base mt-2">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  )
}
