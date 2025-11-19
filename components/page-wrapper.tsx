'use client'

import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  isLocked?: boolean
}

export function PageWrapper({ children, isLocked = false }: PageWrapperProps) {
  if (isLocked) {
    // 未解锁状态：使用 flex 居中布局，内容在屏幕中央
    return (
      <div className="h-full flex items-center justify-center p-6 lg:p-12">
        {children}
      </div>
    )
  }

  // 解锁状态：正常滚动容器，有上下内边距
  return (
    <div className="pb-6">
      {children}
    </div>
  )
}
