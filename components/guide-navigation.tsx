'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Lock } from 'lucide-react'
import { guideSteps } from '@/lib/guide-data'
import { useUnlock } from '@/lib/unlock-context'
import { cn } from '@/lib/utils'

interface GuideNavigationProps {
  variant?: 'sidebar' | 'overview'
}

export function GuideNavigation({ variant = 'sidebar' }: GuideNavigationProps) {
  const pathname = usePathname()
  const { isUnlocked } = useUnlock()


  return (
    <nav className="space-y-1">
      {guideSteps.map((step) => {
        const isActive = pathname === step.href
        const Icon = step.icon
        const requiresUnlock = step.id > 3
        const isLocked = requiresUnlock && !isUnlocked

        if (step.disabled) {
          return (
            <div
              key={step.id}
              className="flex items-center gap-3 py-3 text-muted-foreground/40 cursor-not-allowed"
            >
              <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium">{step.id}</span>
              </div>
              <span className="text-sm">{step.title}</span>
            </div>
          )
        }

        return (
          <Link
            key={step.id}
            href={step.href}
            className={cn(
              "group flex items-center gap-3 py-3",
              isLocked && !isActive && 'opacity-50'
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
              isActive 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-foreground/8 text-foreground group-hover:bg-primary/15 group-hover:text-primary'
            )}>
              <span className={cn(
                "text-sm",
                isActive ? 'font-bold' : 'font-medium'
              )}>
                {step.id}
              </span>
            </div>
            <div className="flex-1 flex items-center justify-between gap-2">
              <span className={cn(
                "text-sm",
                isActive 
                  ? 'font-bold text-primary' 
                  : 'font-normal text-foreground group-hover:font-semibold group-hover:text-primary'
              )}>
                {step.title}
              </span>
              {isLocked && (
                <Lock className={cn(
                  "w-4 h-4 flex-shrink-0",
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                )} />
              )}
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
