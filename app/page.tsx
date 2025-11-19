"use client"

import { GuideBanner } from "@/components/guide-banner"
import { GuideNavigation } from "@/components/guide-navigation"

export default function HomePage() {
  return (
    <div className="h-full px-4 py-8 space-y-8 bg-background">
      <div className="flex items-center justify-center">
        <GuideBanner />
      </div>
      
      <div>
        <GuideNavigation variant="overview" />
      </div>
    </div>
  )
}
