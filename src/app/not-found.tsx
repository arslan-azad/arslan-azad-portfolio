import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-light">Page Not Found</h2>
      <p className="text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="border rounded-full px-8 py-2 text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
