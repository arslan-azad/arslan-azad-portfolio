import React from 'react'
import { inter } from '@/config/fonts'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import FixedLinks from '@/components/FixedLinks'

export const metadata = {
  title: 'Your Portfolio | Data Scientist',
  description: 'Welcome to my portfolio - showcasing my projects and skills in Data Science, Machine Learning and AI.',
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
