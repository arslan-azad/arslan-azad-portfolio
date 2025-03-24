'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function FixedLinks() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex gap-8 text-sm items-center bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-foreground/10"
      >
        <span>🇦🇺 Australia</span>
        <span>GMT+11</span>
        <a 
          href="https://linkedin.com/in/arslan-azad" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground/80 transition-colors"
        >
          LinkedIn
        </a>
       <a 
          href="https://github.com/arslan-azad" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground/80 transition-colors"
        >
          GitHub
        </a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.7,
          ease: "easeOut"
        }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-foreground/10 via-foreground/5 to-foreground/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
        <p className="relative text-xs font-light tracking-[0.2em] px-3 py-1 bg-background/50 backdrop-blur-sm rounded-lg border border-foreground/5">
          <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Designed and developed by Arslan
          </span>
        </p>
      </motion.div>
    </div>
  )
} 
