'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { BsSun, BsMoon } from 'react-icons/bs'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <BsMoon className="w-4 h-4" /> : <BsSun className="w-4 h-4" />}
    </motion.button>
  )
} 