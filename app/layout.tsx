import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ResponsiveGuideLayout } from '@/components/responsive-guide-layout'
import { UnlockProvider } from '@/lib/unlock-context'
import { UnlockDebugPanel } from '@/components/unlock-debug-panel'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-[#f5f5f5] text-[rgba(0,0,0,0.87)]`}>
        <UnlockProvider>
          <ResponsiveGuideLayout>
            {children}
          </ResponsiveGuideLayout>
          <UnlockDebugPanel />
        </UnlockProvider>
        <Analytics />
      </body>
    </html>
  )
}
