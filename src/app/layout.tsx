import React from 'react'
import { inter } from '@/config/fonts'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import FixedLinks from '@/components/FixedLinks'

// Icon attribution: Statistics icons created by kliwir art - Flaticon
// Source: https://www.flaticon.com/free-icons/statisctics
export const metadata = {
  title: "Arslan's Portfolio | Data Scientist",
  description: 'Welcome to my portfolio - showcasing my projects and skills in Data Science, Machine Learning and AI.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
  // Adding proper attribution metadata
  other: {
    'icon-attribution': 'Statistics icons created by kliwir art - Flaticon',
    'icon-source': 'https://www.flaticon.com/free-icons/statisctics'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <FixedLinks />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
