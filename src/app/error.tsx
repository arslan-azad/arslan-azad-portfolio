'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-light">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="border rounded-full px-8 py-2 text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
