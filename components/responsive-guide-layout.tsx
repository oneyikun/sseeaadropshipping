'use client'

import { GuideNavigation } from "@/components/guide-navigation"
import { GuideBanner } from "@/components/guide-banner"
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useRef } from 'react'

interface ResponsiveGuideLayoutProps {
  children: ReactNode
}

export function ResponsiveGuideLayout({ children }: ResponsiveGuideLayoutProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === '/guide'
  
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const desktopScrollRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollTop = 0
    }
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollTop = 0
    }
  }, [pathname])

  return (
    <>
      {/* Mobile view */}
      <div className="lg:hidden h-dvh flex flex-col overflow-hidden">
        <div 
          ref={mobileScrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden px-4 pt-6"
        >
          {children}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex h-dvh overflow-hidden">
        <aside className="absolute left-6 top-6 bottom-6 z-10 w-72">
          <div className="h-full bg-card backdrop-blur-sm rounded-3xl shadow-sm overflow-hidden flex flex-col">
            {/* Logo/Header区域 */}
            <div className="flex-1 overflow-y-auto px-5 py-3">
              <GuideNavigation variant="sidebar" />
            </div>
          </div>
        </aside>

        <main 
          ref={desktopScrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden ml-80"
        >
          {isHomePage ? (
            <div className="h-full flex items-center justify-center p-12">
              <GuideBanner />
            </div>
          ) : (
            <div className="max-w-5xl mx-auto px-12 py-6 h-full">
              {children}
            </div>
          )}
        </main>
      </div>
    </>
  )
}
