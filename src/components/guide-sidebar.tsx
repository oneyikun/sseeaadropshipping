'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Shield,
  Calculator,
  UserPlus,
  MapPin,
  Package,
  Ship,
  Link as LinkIcon,
  Activity,
  AlertTriangle
} from 'lucide-react'

const steps = [
  {
    number: 1,
    title: '了解海海一件代发优势',
    href: '/guide/promise',
    icon: Shield
  },
  {
    number: 2,
    title: '试算一件代发精确成本',
    href: '#',
    icon: Calculator,
    disabled: true
  },
  {
    number: 3,
    title: '在海海开户',
    href: '/guide/account',
    icon: UserPlus
  },
  {
    number: 4,
    title: '获得海外仓地址和资质',
    href: '/guide/warehouse-info',
    icon: MapPin
  },
  {
    number: 5,
    title: '准备你的商品',
    href: '/guide/prepare',
    icon: Package
  },
  {
    number: 6,
    title: '发货至海外仓',
    href: '/guide/shipping',
    icon: Ship
  },
  {
    number: 7,
    title: '拉取平台订单',
    href: '/guide/integration',
    icon: LinkIcon
  },
  {
    number: 8,
    title: '你的日常业务',
    href: '/guide/operations',
    icon: Activity
  },
  {
    number: 9,
    title: '处理异常情况',
    href: '/guide/support',
    icon: AlertTriangle
  }
]

export function GuideSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0 pr-8">
      <div className="sticky top-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">服务流程</h2>
        <nav className="space-y-1">
          {steps.map((step) => {
            const isActive = pathname === step.href
            const Icon = step.icon

            if (step.disabled) {
              return (
                <div
                  key={step.number}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-400 cursor-not-allowed"
                >
                  <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-gray-400">{step.number}</span>
                  </div>
                  <span className="truncate">{step.title}</span>
                </div>
              )
            }

            return (
              <Link
                key={step.number}
                href={step.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                  isActive ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
                    {step.number}
                  </span>
                </div>
                <span className="truncate">{step.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
