'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface UnlockContextType {
  isUnlocked: boolean
  toggleUnlock: () => void
}

const UnlockContext = createContext<UnlockContextType | undefined>(undefined)

export function UnlockProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const toggleUnlock = () => {
    setIsUnlocked((prev) => !prev)
  }

  return (
    <UnlockContext.Provider value={{ isUnlocked, toggleUnlock }}>
      {children}
    </UnlockContext.Provider>
  )
}

export function useUnlock() {
  const context = useContext(UnlockContext)
  if (context === undefined) {
    throw new Error('useUnlock must be used within UnlockProvider')
  }
  return context
}
