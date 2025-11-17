import Link from 'next/link'
import { Home } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">SSEEAA海海</span>
            <span className="text-xs text-muted-foreground leading-tight">海外仓一件代发</span>
          </div>
        </Link>

        <nav className="ml-auto flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            首页
          </Link>
          <Link
            href="/guide/promise"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            海海承诺
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            服务流程
          </Link>
        </nav>
      </div>
    </header>
  )
}
