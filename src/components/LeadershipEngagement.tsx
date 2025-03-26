'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const leadershipRoles = [
  {
    title: "PhD Student Board Member",
    organization: "Academic Unit Board (AUB), UniSA",
    period: "Sep 2022 - Nov 2024",
    category: "Education",
    description: "Assisted Unit Executive in developing and reviewing strategic initiatives in teaching, learning, and research that align with University's strategic plan."
  },
  {
    title: "Vice President (VP) Placement",
    organization: "NUST Alumni Association Australia",
    period: "Apr 2023 - Present",
    category: "Science and Technology",
    description: "Lead alumni initiatives in Australia, expand industry networks, and launch knowledge exchange programs for NUST alumni placement."
  },
  {
    title: "Executive Member",
    organization: "Research Degrees Group, UniSA",
    period: "Jul 2023 - Dec 2024",
    category: "Science and Technology",
    description: "Shaped university's research strategy by representing research degrees students' feedback and concerns."
  },
  {
    title: "Content Co-lead & Career Coach",
    organization: "NUSTIAN USA",
    period: "Feb 2020 - Present",
    category: "Education",
    description: "Execute career guidance initiatives, manage mentorship programs, and streamline coaching resources for students."
  },
  {
    title: "Co-Lead",
    organization: "HDR Club, C3L",
    period: "Aug 2022 - Nov 2023",
    category: "Education",
    description: "Planned and implemented events for research students, supporting cohesiveness among 25+ PhD candidates."
  },
  {
    title: "Co-Founder",
    organization: "Zariah",
    period: "May 2017 - Present",
    category: "Social Services",
    description: "Lead sustainable charity initiatives helping struggling vendors in Pakistan through resource allocation and expertise sharing."
  },
  {
    title: "Career Coach",
    organization: "NUST Alumni Association",
    period: "Mar 2016 - Present",
    category: "Education",
    description: "Coach upcoming graduates on career choices, liaise with global alumni for mentoring, and organize career guidance sessions."
  },
  {
    title: "General Secretary",
    organization: "NUST Alumni Association Australia",
    period: "Jul 2022 - Apr 2023",
    category: "Science and Technology",
    description: "Supported alumni initiatives, launched knowledge exchange platforms, and expanded networks across industries."
  },
  {
    title: "Chairperson IEEE MCS Branch",
    organization: "IEEE",
    period: "May 2017 - May 2018",
    category: "Science and Technology",
    description: "Led technical workshops, managed executive team, introduced mentoring programs, and organized guest lectures."
  }
]

export default function LeadershipEngagement() {
  const [showLeftNotch, setShowLeftNotch] = useState(false)
  const [showRightNotch, setShowRightNotch] = useState(true)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    setShowLeftNotch(container.scrollLeft > 20)
    setShowRightNotch(
      container.scrollLeft < (container.scrollWidth - container.clientWidth - 20)
    )
  }

  return (
    <section className="py-24 relative overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a]">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a148c0a_1px,transparent_1px),linear-gradient(to_bottom,#4a148c0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-light mb-4"
          >
            Leadership & Community Engagement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Driving positive change through leadership roles and community initiatives
          </motion.p>
        </div>

        {/* Horizontal scrollable container */}
        <div className="relative">
          <div 
            className="overflow-x-auto pb-12 -mx-4 px-4 scrollbar-hide"
            onScroll={handleScroll}
          >
            <div className="inline-flex gap-6" style={{ width: 'max-content' }}>
              {/* Group roles into sets of 3 */}
              {Array.from({ length: Math.ceil(leadershipRoles.length / 3) }).map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6">
                  {leadershipRoles.slice(groupIndex * 3, (groupIndex + 1) * 3).map((role, index) => {
                    const isBlackCard = index % 2 === 0
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`
                          group relative rounded-[32px] p-8
                          ${isBlackCard 
                            ? 'bg-[#1a1a1a] text-white' 
                            : 'bg-white text-[#1a1a1a]'
                          }
                          shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                          hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                          transition-all duration-300
                          w-[400px]
                          ${index % 2 === 0 ? 'translate-y-12' : ''}
                        `}
                      >
                        {/* Category tag */}
                        <span className={`
                          inline-block px-4 py-1.5 rounded-full text-sm font-light border mb-6
                          ${isBlackCard
                            ? 'border-purple-400/30 text-purple-300'
                            : 'border-[#4a148c20] text-[#4a148c]'
                          }
                        `}>
                          {role.category}
                        </span>

                        <h3 className="text-2xl font-light mb-2">
                          {role.title}
                        </h3>
                        <p className={`text-base mb-1 ${isBlackCard ? 'text-gray-300' : 'text-gray-600'}`}>
                          {role.organization}
                        </p>
                        <p className={`text-sm mb-4 ${isBlackCard ? 'text-gray-400' : 'text-gray-500'}`}>
                          {role.period}
                        </p>
                        <p className={`text-base leading-relaxed ${isBlackCard ? 'text-gray-300' : 'text-gray-600'}`}>
                          {role.description}
                        </p>

                        {/* Purple gradient hover effect */}
                        <div className={`
                          absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 
                          ${isBlackCard
                            ? 'bg-gradient-to-br from-purple-500/[0.1] to-purple-500/[0.15]'
                            : 'bg-gradient-to-br from-purple-500/[0.02] to-purple-500/[0.08]'
                          }
                        `} />
                      </motion.div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll notches */}
          {showLeftNotch && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <BsChevronLeft className="w-4 h-4 text-gray-400" />
              </motion.div>
            </div>
          )}
          {showRightNotch && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <BsChevronRight className="w-4 h-4 text-gray-400" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 