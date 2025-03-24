'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-wider text-center mb-4"
        >
          TESTIMONIALS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl font-light">
            Don't take my word for it.
            </h2>

          <blockquote className="relative mt-16 pt-16">
            {/* Decorative quote mark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-foreground/10">
              "
            </div>
            
            <p className="text-xl font-light leading-relaxed mb-8">
              You set the stage for some great work in the future. A lot is already in progress, and I'm sure many more PhD students will continue to build on what you started.
            </p>
            
            <footer className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Associate Professor Srecko Joksimovic
              </p>
              <p>Co-Director C3L Lab</p>
              <p>University of South Australia</p>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
} 