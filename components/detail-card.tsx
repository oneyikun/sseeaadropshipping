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
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
            {rightLink ? (
              <Link
                href={rightLink.href}
                className="text-sm text-[#4682b4] hover:text-[#4682b4]/80 font-semibold whitespace-nowrap flex items-center gap-1"
              >
                {rightLink.text}
                <span>›</span>
              </Link>
            ) : value ? (
              <span className="font-semibold text-foreground text-sm">{value}</span>
            ) : null}
          </div>
          {description && <p className="text-xs text-secondary">{description}</p>}
          {note && <p className="text-xs text-[rgba(255,56,60,1)] mt-3">{note}</p>}
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
