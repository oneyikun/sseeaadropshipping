import { InfoCard } from './info-card'
import Link from 'next/link'
import { Button } from './ui/button'

interface DetailCardProps {
  title: string
  value?: string
  description?: string
  note?: string
  rightLink?: {
    text: string
    href: string
  }
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  id?: string
}

export function DetailCard({ title, value, description, note, rightLink, primaryAction, secondaryAction, id }: DetailCardProps) {
  return (
    <InfoCard id={id}>
      <div className="flex flex-col h-full">
        <div className="flex-grow space-y-2">
          <div className="flex justify-between items-baseline gap-4">
            <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
            {rightLink ? (
              <Link
                href={rightLink.href}
                className="text-sm text-blue-600 hover:text-blue-700 font-semibold whitespace-nowrap flex items-center gap-1"
              >
                {rightLink.text}
                <span>›</span>
              </Link>
            ) : value ? (
              <span className="font-semibold text-gray-900 text-sm">{value}</span>
            ) : null}
          </div>
          {description && <p className="text-xs text-gray-500">{description}</p>}
          {note && <p className="text-xs text-red-600 mt-3">{note}</p>}
        </div>

        {(primaryAction || secondaryAction) && (
          <div className="flex gap-2 mt-3">
            {primaryAction && (
              <Button asChild size="sm" className="flex-1">
                <Link href={primaryAction.href}>
                  {primaryAction.text}
                </Link>
              </Button>
            )}
            {secondaryAction && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link href={secondaryAction.href}>
                  {secondaryAction.text}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </InfoCard>
  )
}
