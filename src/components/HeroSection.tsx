'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CompetencyHexagon from './CompetencyHexagon'

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-8 p-24">
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] leading-none font-light"
        >
          Data & AI Portfolio
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-3xl mx-auto -mt-12"
        >
          <CompetencyHexagon />
        </motion.div>

        <div className="flex justify-between items-end mt-4">
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-wider mb-4">
              Hello there
              <br /> 
              I'm Arslan, a full-stack data scientist.
            </p>
            <button className="border rounded-full px-8 py-2 text-sm uppercase tracking-wider">
              Scroll to explore ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}