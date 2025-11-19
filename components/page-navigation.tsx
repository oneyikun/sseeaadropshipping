'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { guideSteps } from '@/lib/guide-data'

interface PageNavigationProps {
  position?: 'top' | 'bottom'
}

export function PageNavigation({ position = 'bottom' }: PageNavigationProps) {
  const pathname = usePathname()
  const spacingClass = position === 'top' ? 'mb-10' : 'mt-10'
  
  const currentIndex = guideSteps.findIndex(step => step.href === pathname)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < guideSteps.length - 1
  const previousHref = hasPrevious ? guideSteps[currentIndex - 1].href : (currentIndex === 0 ? '/' : null)
  const nextHref = hasNext ? guideSteps[currentIndex + 1].href : null
  
  return (
    <div className={`flex justify-between items-center gap-4 ${spacingClass}`}>
      <Link 
        href="/"
        className="flex items-center justify-center gap-2 pl-2 pr-4 h-11 md:h-11 rounded-full bg-foreground text-background font-medium text-base hover:bg-foreground/90"
      >
        <svg 
          className="w-5 h-5 md:w-6 md:h-6" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        返回
      </Link>

      <div className="flex items-center rounded-full bg-background border border-border shadow-sm overflow-hidden">
        {/* 左半部分：上一步 */}
        {previousHref ? (
          <Link 
            href={previousHref}
            className="flex items-center justify-center w-11 h-11 hover:bg-muted/50"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
        ) : (
          <div className="w-11 h-11 opacity-30 flex items-center justify-center">
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        )}

        {/* 分隔线 */}
        <div className="w-px h-6 bg-border" />

        {/* 右半部分：下一步 */}
        {nextHref ? (
          <Link 
            href={nextHref}
            className="flex items-center justify-center w-11 h-11 hover:bg-muted/50"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ) : (
          <div className="w-11 h-11 opacity-30 flex items-center justify-center">
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
