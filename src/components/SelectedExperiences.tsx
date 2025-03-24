'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AwardsBanner from './AwardsBanner'
import { TbBulb } from 'react-icons/tb'

export default function SelectedExperiences() {
  const experiences = [
    {
      title: "University Lecturer - Data Science",
      company: "University of South Australia",
      period: "Feb 2025 – Present",
      description: "Teaching Design Thinking & Data Visualisation, Statistical Methods, Social Media Analytics, and Machine Learning. Designing industry-aligned curricula and advancing Generative AI in education for AI-driven learning solutions.",
      image: "/images/teaching.jpg",
      tech: ["Python", "R", "Machine Learning", "LangGraph", "Statistical Analysis", "Design Thinking", "Data Visualisation"]
    },
    {
      title: "PhD Researcher, Data Science",
      company: "University of South Australia",
      period: "Jul 2021 – Dec 2024",
      description: "Leveraged predictive modeling and advanced network analysis approaches to predict human behaviours. Devised novel indicators, metrics and visualisations to deliver actionable insights for decision makers. \n Enhanced global healthcare strategy by analysing data for the Geneva Learning Foundation, optimising COVID-19 immunization training for 4,000+ professionals.",
      image: "/images/research.jpg",
      tech: ["Python", "C++", "Predictive Modeling", "Data Analysis", "Healthcare Analytics"]
    },
    {
      title: "Freelance Consultant",
      company: "Fiverr",
      period: "Apr 2016 – Jul 2018",
      description: "Generated 177+ successful proposals for 501(c)3 nonprofits, achieving 99% satisfaction rating. Created ROI-driven proposals expanding client portfolios across 12%+ countries globally.",
      image: "/images/consulting.jpg",
      tech: ["Grant Writing", "Proposal Development", "Business Development"]
    }
  ]

  return (
    <section className="py-24">
      <div className="container mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-8 mb-24"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-7xl text-foreground/80 mb-12 flex justify-center"
          >
            <TbBulb className="w-20 h-20" />
          </motion.div>
          
          <h2 className="text-xl font-light">
            I have created measurable business impact using all types of data, from time-series (continuous) to categorical, across business contexts.
            <br />
            <br />
            I am
            <br />
            <span className="text-muted-foreground">
              Goal obsessed. 
              <br />
              Problem obsessed.
            </span>
          </h2>
        </motion.div>
        <br />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light mb-16"
        >
          Selected Experiences
        </motion.h2>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center ${
              index % 2 === 1 ? 'md:[grid-template-areas:_"image_content"]' : ''
            }`}
          >
            <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="space-y-1">
                <h3 className="text-2xl font-light">{exp.title}</h3>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                {exp.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {index === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-background to-background/50"
              >
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                >
                  {/* Neural Network Grid */}
                  {Array.from({ length: 6 }).map((_, row) => (
                    Array.from({ length: 8 }).map((_, col) => (
                      <React.Fragment key={`node-${row}-${col}`}>
                        <motion.circle
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1, 0.8],
                            opacity: [0, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            delay: (row * 8 + col) * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          cx={50 + col * 50}
                          cy={50 + row * 50}
                          r="3"
                          className="fill-foreground/80"
                        />
                        {/* Horizontal connections */}
                        {col < 7 && (
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                              pathLength: 1,
                              opacity: [0, 0.3, 0]
                            }}
                            transition={{
                              duration: 2,
                              delay: (row * 8 + col) * 0.1,
                              repeat: Infinity
                            }}
                            d={`M${53 + col * 50} ${50 + row * 50} L${97 + col * 50} ${50 + row * 50}`}
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-foreground/40"
                            fill="none"
                          />
                        )}
                        {/* Vertical connections */}
                        {row < 5 && (
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                              pathLength: 1,
                              opacity: [0, 0.3, 0]
                            }}
                            transition={{
                              duration: 2,
                              delay: (row * 8 + col) * 0.1,
                              repeat: Infinity
                            }}
                            d={`M${50 + col * 50} ${53 + row * 50} L${50 + col * 50} ${97 + row * 50}`}
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-foreground/40"
                            fill="none"
                          />
                        )}
                      </React.Fragment>
                    ))
                  ))}

                  {/* Floating Data Elements */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.g key={`data-${i}`}>
                      <motion.rect
                        initial={{ 
                          x: 50 + Math.random() * 300,
                          y: 50 + Math.random() * 200,
                          opacity: 0
                        }}
                        animate={{
                          y: [null, 50 + Math.random() * 200],
                          opacity: [0, 0.8, 0],
                          rotate: [0, 180]
                        }}
                        transition={{
                          duration: 5,
                          delay: i * 0.5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        width="8"
                        height="8"
                        className="fill-foreground/30"
                      />
                    </motion.g>
                  ))}

                  {/* Central AI Core */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    cx="200"
                    cy="150"
                    r="30"
                    className="fill-foreground/20"
                  />
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    cx="200"
                    cy="150"
                    r="20"
                    className="fill-foreground/40"
                  />

                  {/* Pulsing Waves */}
                  {[40, 60, 80].map((radius, i) => (
                    <motion.circle
                      key={`wave-${i}`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ 
                        scale: [0.5, 1.5],
                        opacity: [0.5, 0]
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      cx="200"
                      cy="150"
                      r={radius}
                      className="fill-none stroke-foreground/30"
                      strokeWidth="1"
                    />
                  ))}
                </svg>
              </motion.div>
            ) : index === 1 ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden p-12 flex items-center justify-center ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <div className="relative w-full h-full">
                  {/* PhD Hat */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full"
                    >
                      {/* Main cap body */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        d="M50 100 L150 100 L150 105 L50 105 Z"
                        fill="currentColor"
                        className="text-foreground"
                      />
                      
                      {/* Top square */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        d="M40 100 L160 100 L160 95 L40 95 Z M40 95 L160 95 L140 75 L60 75 Z"
                        fill="currentColor"
                        className="text-foreground"
                      />
                      
                      {/* Gold tassel */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        d="M140 95 Q145 105, 150 125"
                        stroke="#FFD700"
                        strokeWidth="3"
                        fill="none"
                      />
                      <motion.circle
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        cx="150"
                        cy="125"
                        r="4"
                        fill="#FFD700"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ) : index === 2 ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-background to-background/50"
              >
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Sales Circle */}
                  <motion.circle
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    cx="160"
                    cy="140"
                    r="90"
                    className="fill-foreground/10 mix-blend-multiply"
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    x="120"
                    y="140"
                    className="text-foreground/60 text-[16px] font-light"
                  >
                    Sales
                  </motion.text>

                  {/* Business Development Circle */}
                  <motion.circle
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    cx="240"
                    cy="140"
                    r="90"
                    className="fill-foreground/10 mix-blend-multiply"
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    x="205"
                    y="120"
                    className="text-foreground/60 text-[16px] font-light"
                  >
                    Business
                  </motion.text>
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    x="195"
                    y="140"
                    className="text-foreground/60 text-[16px] font-light"
                  >
                    Development
                  </motion.text>

                  {/* Customer Service Circle */}
                  <motion.circle
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    cx="200"
                    cy="200"
                    r="90"
                    className="fill-foreground/10 mix-blend-multiply"
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    x="155"
                    y="220"
                    className="text-foreground/60 text-[16px] font-light"
                  >
                    Customer Service
                  </motion.text>

                  {/* Central Intersection Animation */}
                  <motion.circle
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 0.85, 0.8],
                      opacity: 0.3
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    cx="200"
                    cy="160"
                    r="35"
                    className="fill-foreground/20"
                  />
                </svg>
              </motion.div>
            ) : (
              <div className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <Image
                  src={exp.image}
                  alt={`${exp.title} at ${exp.company}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <AwardsBanner />
    </section>
  )
} 