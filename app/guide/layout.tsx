import { GuideSidebar } from '../../components/guide-sidebar'

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-7xl">
        <div className="flex gap-8">
          <GuideSidebar />
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
