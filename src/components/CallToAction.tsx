'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-foreground/10"
            style={{
              transform: `translateX(${i * 100}%)`
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <h2 className="text-4xl font-light">
            A little more
            <span className="inline-block mx-2">✨</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase transition-all duration-300 ease-out border rounded-full hover:bg-foreground hover:text-background"
            >
              <span>About Me</span>
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-0 rounded-full bg-foreground opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link 
              href="https://drive.google.com/file/d/1R6SmZpUd2Zo0hIhphDexYJfq_O57svAe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase transition-all duration-300 ease-out border rounded-full hover:bg-foreground hover:text-background"
            >
              <span className="flex items-center gap-2">
                Résumé
                <BsArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-0 rounded-full bg-foreground opacity-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 