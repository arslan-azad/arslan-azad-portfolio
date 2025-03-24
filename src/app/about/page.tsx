'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const paragraphs = [
    "I'm Arslan Azad—researcher, educator, consultant, and a data storyteller. At heart, I'm driven by curiosity and a passion for uncovering hidden patterns in data. My journey spans from Electrical Engineering from the top engineering university in Pakistan (acceptance rate below 4%) to advanced analytics and AI research in Australia. Consistent in my journey is a persistent desire to make sense of complexity, generate actionable insights, motivate meaningful action, and deliver value.",
    "With a Ph.D. in Data Science & AI from the University of South Australia, my expertise lies in predictive modeling, machine learning, and network analysis - skills I've harnessed to bridge the worlds of academia and industry. Whether guiding 250+ students with their careers or shaping global healthcare training strategies during the COVID-19 pandemic, my work consistently aims for real-world impact.",
    "As a lecturer at UniSA, I take the opportunity to nurture the next generation of problem-solvers. I take pride in mentoring students through hands-on, industry-aligned projects, preparing them to transform theory into practice. My passion for innovation finds its expression in using Generative AI to revolutionize education by leveraging emerging technologies.",
    "Currently, I am pursuing a fully funded fellowship in Business Management and Strategy during weekends. As with my past career choices, I am once again guided by my obsession with following my curiosity. As I took a data-driven approach to understanding human behaviours during my PhD, I discovered a knowledge gap. This engagement is an effort to fill that gap while meeting changemakers from around the world. It will fuel my interest in creating impactful, scalable ventures by becoming a part of the entrepreneurship and startup ecosystem.",
    "Outside academia, my consulting journey began by crafting persuasive proposals that secured funding for nonprofits worldwide. This early experience taught me important lessons about sales, business development, and fundraising. Today, I carry this forward by translating complex analytics into compelling visual stories, enabling businesses to make confident, informed decisions.",
    "I am proud of my achievements and awards including People's Choice Award in the 3MT Research Pitch and finalist recognition in the AIIA iAwards, among others. But, my biggest source of self-actualisation is community impact that I have been able to create through my volunteer engagements over the years.",
    "When I'm not immersed in data, you'll find me hiking trails, creating coaching content for YouTube, engaging in creative writing and debates, or capturing reflections through writing. But, my most cherished time, after family, is spent acknowledging the mightyness of nature and mountains, and the agility of oceans and streams.",
    "At my core, I believe that impactful change starts with agency. And, hence, it is the trait I look for in myself and others. I am always looking to meet highly agentic people with similar values and greater aims. Let's connect!"
  ]

  return (
    <section className="min-h-screen py-24">
      <div className="container max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-light mb-12"
        >
          About Me
        </motion.h1>

        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
} 