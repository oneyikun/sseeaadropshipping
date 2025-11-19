import Link from 'next/link'
import { Lock } from 'lucide-react'

interface LockedContentProps {
  title: string
  description: string
}

export function LockedContent({ title, description }: LockedContentProps) {
  return (
    <div className="text-center space-y-8 max-w-xl px-6">
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Lock className="w-12 h-12 text-primary" />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>

      <p className="text-base text-muted-foreground leading-relaxed">{description}</p>

      <Link
        href="/guide/account"
        className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-80 transition-opacity"
      >
        立即开户解锁
      </Link>
    </div>
  )
}
