'use client'

import { useUnlock } from '@/lib/unlock-context'

export function UnlockDebugPanel() {
  const { isUnlocked, toggleUnlock } = useUnlock()

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-lg border-2 border-primary p-4 flex items-center gap-3">
      <span className="text-sm font-medium text-foreground">
        {isUnlocked ? '已解锁' : '未解锁'}
      </span>
      <button
        onClick={toggleUnlock}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isUnlocked ? 'bg-primary' : 'bg-muted'
        }`}
        role="switch"
        aria-checked={isUnlocked}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isUnlocked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}
