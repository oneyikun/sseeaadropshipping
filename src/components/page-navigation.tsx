import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PageNavigationProps {
  previousPage?: {
    href: string
    label: string
  }
  nextPage?: {
    href: string
    label: string
  }
}

export function PageNavigation({ previousPage, nextPage }: PageNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-8 border-t">
      {previousPage ? (
        <Button variant="outline" asChild>
          <Link href={previousPage.href}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {previousPage.label}
          </Link>
        </Button>
      ) : (
        <div />
      )}

      {nextPage && (
        <Button asChild>
          <Link href={nextPage.href}>
            {nextPage.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}
