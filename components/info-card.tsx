'use client'

import { Type as type, type LucideIcon, Info, AlertTriangle, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface InfoCardProps {
  title?: string
  icon?: LucideIcon | string
  children?: ReactNode
  variant?: 'default' | 'info' | 'warning' | 'success' | 'error' | 'address' | 'time'
  id?: string
  size?: 'sm' | 'md'
  collapsible?: boolean
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
  recipient?: string
  phone?: string
  address?: string
  hours?: string
  timeValue?: string
}

export function InfoCard({ 
  title, 
  icon, 
  children, 
  variant = 'default', 
  id, 
  size = 'md',
  collapsible = false,
  value,
  description,
  note,
  rightLink,
  primaryAction,
  secondaryAction,
  recipient,
  phone,
  address,
  hours,
  timeValue
}: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const variantStyles = {
    default: { 
      container: 'bg-background2',
      text: 'text-muted-foreground',
      icon: 'text-muted-foreground'
    },
    info: { 
      container: 'bg-primary/5 border-primary/20',
      text: 'text-foreground',
      icon: 'text-primary'
    },
    warning: { 
      container: 'bg-warning-background border-l-4 border-warning',
      text: 'text-warning-foreground',
      icon: 'text-warning'
    },
    success: { 
      container: 'bg-primary/5 border-primary/20',
      text: 'text-foreground',
      icon: 'text-primary'
    },
    error: { 
      container: 'bg-destructive/5 border-destructive/20',
      text: 'text-destructive',
      icon: 'text-destructive'
    },
    address: { 
      container: 'bg-background2',
      text: 'text-muted-foreground',
      icon: 'text-primary'
    },
    time: { 
      container: 'bg-background2',
      text: 'text-muted-foreground',
      icon: 'text-primary'
    }
  }

  const variantIcons: Record<string, LucideIcon> = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle2,
    error: AlertCircle
  }

  const getIconToDisplay = () => {
    if (icon) return icon
    return variantIcons[variant]
  }

  const iconToDisplay = getIconToDisplay()
  const isEmojiIcon = typeof iconToDisplay === 'string'
  const IconComponent = !isEmojiIcon && iconToDisplay ? iconToDisplay as LucideIcon : null

  const styles = variantStyles[variant]
  const padding = size === 'sm' ? 'p-4' : 'p-6'
  const isDetailCard = description || primaryAction || secondaryAction || value || rightLink

  const containerClass = cn(
    'flex flex-col rounded-2xl first:mt-0',
    padding,
    styles.container,
    collapsible && 'cursor-pointer'
  )

  const handleClick = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded)
    }
  }

  const renderIcon = (className: string) => {
    if (isEmojiIcon) {
      return <span className={cn('text-lg', className)}>{iconToDisplay as string}</span>
    }
    if (IconComponent) {
      return <IconComponent className={className} />
    }
    return null
  }

  if (variant === 'address' && recipient && phone && address && hours) {
    return (
      <div id={id} className={cn('flex flex-col rounded-2xl', padding, styles.container)}>
        <div className="flex items-center gap-2 mb-4">
          {iconToDisplay && renderIcon('h-5 w-5 text-primary')}
          <span className="font-semibold text-sm md:text-base text-foreground">{title}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">收件人：</span>
            <span className="font-medium text-foreground">{recipient}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">电话：</span>
            <span className="font-medium text-foreground">{phone}</span>
          </div>
          <div className="flex justify-between text-sm items-start">
            <span className="text-muted-foreground">地址：</span>
            <span className="font-medium text-foreground text-right text-sm max-w-[60%]">{address}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">收货时间：</span>
            <span className="font-medium text-foreground">{hours}</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'time' && timeValue) {
    const extractTimeValue = (value: string) => {
      const match = value.match(/^(\d+)(.*)$/)
      if (match) {
        return { number: match[1], unit: match[2] }
      }
      return { number: value, unit: '' }
    }
    const { number, unit } = extractTimeValue(timeValue)

    return (
      <div id={id} className={cn('rounded-2xl', padding, styles.container)}>
        <div className="mb-4 flex items-center gap-2">
          {iconToDisplay && renderIcon('h-4 w-4 text-primary')}
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            {title}
            {collapsible && (
              <ChevronDown 
                className={cn(
                  'h-4 w-4 text-muted-foreground transition-transform',
                  isExpanded && 'rotate-180'
                )} 
              />
            )}
          </h3>
        </div>
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-3xl md:text-4xl font-bold text-primary leading-none">{number}</span>
          {unit && <span className="text-sm font-medium text-foreground">{unit}</span>}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    )
  }

  return (
    <div id={id} className={containerClass} onClick={collapsible ? handleClick : undefined}>
      {isDetailCard ? (
        <div className="flex flex-col min-h-0 h-full">
          <div className="flex-grow">
            <div className="flex justify-between items-baseline gap-4">
              <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                {title}
                {collapsible && (
                  <ChevronDown 
                    className={cn(
                      'h-4 w-4 text-muted-foreground transition-transform',
                      isExpanded && 'rotate-180'
                    )} 
                  />
                )}
              </h4>
              {rightLink ? (
                <Link
                  href={rightLink.href}
                  className="text-sm text-primary hover:text-primary/80 font-medium whitespace-nowrap flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {rightLink.text}
                  <span className="text-base">›</span>
                </Link>
              ) : value ? (
                <span className="font-semibold text-foreground text-sm">{value}</span>
              ) : null}
            </div>
            {(!collapsible || isExpanded) && (
              <>
                {description && <p className="text-sm text-muted-foreground leading-relaxed mt-3">{description}</p>}
                {note && <p className="text-sm text-destructive mt-4 leading-relaxed">{note}</p>}
                {children && <div className={cn('text-sm leading-relaxed mt-3', styles.text)}>{children}</div>}
              </>
            )}
          </div>

          {(!collapsible || isExpanded) && (primaryAction || secondaryAction) && (
            <div className="flex gap-3 mt-6 pt-2" onClick={(e) => e.stopPropagation()}>
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {primaryAction.text}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-300 text-foreground hover:bg-background2 transition-colors cursor-pointer"
                >
                  {secondaryAction.text}
                </Link>
              )}
            </div>
          )}
        </div>
      ) : (
        <>
          {(title || iconToDisplay) && (
            <div className="flex items-start gap-3 mb-4">
              {iconToDisplay && renderIcon(cn('h-5 w-5 flex-shrink-0 mt-0.5', styles.icon))}
              {title && <div className="font-semibold text-sm text-foreground leading-tight">{title}</div>}
            </div>
          )}
          <div className={cn('text-sm leading-relaxed flex-grow', styles.text)}>{children}</div>
        </>
      )}
    </div>
  )
}

export const AddressCard = InfoCard
export const TimeCommitmentCard = InfoCard
