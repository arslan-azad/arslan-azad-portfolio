'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { 
      href: "https://drive.google.com/file/d/1cEyJKHDqAbJxST1l9Og1w6PYpNNAPL5R/view?usp=sharing",
      label: "Résumé",
      isExternal: true 
    }
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur"
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-sm uppercase tracking-wider">
          Arslan Azad
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <React.Fragment key={link.href}>
              {link.isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-wider text-foreground/60 hover:text-foreground/80 transition-colors"
                >
                  {link.label} ↗
                </a>
              ) : (
                <Link 
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-foreground/80 ${
                    pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </motion.header>
  )
}