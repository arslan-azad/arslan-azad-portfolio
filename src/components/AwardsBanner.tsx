'use client'
import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const awards = [
  "Winning team, Oxford Style Parliamentary Research Debate (2024)",
  "People's Choice Award, 3MT Research Pitch (2024)",
  "Finalist, AIIA iAwards for Industry Innovation (2024)",
  "2× Volunteer Recognition Award (Gold), NUSTIANUSA (2023, 2020)",
  "Doctoral Consortium Scholarship, LAK23 (2023)",
  "Thyne Reid Fully Funded PhD Scholarship (2023)",
  "Quick Learner Award, UniSA International (2020)"
]

// Duplicate awards to create seamless loop
const duplicatedAwards = [...awards, ...awards]

export default function AwardsBanner() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimationControls()
  const cardWidth = 500 // Width of each card in pixels
  const cardGap = 32 // Gap between cards (gap-8 = 2rem = 32px)

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % awards.length
    setCurrentIndex(nextIndex)
    controls.start({ 
      x: -(nextIndex * (cardWidth + cardGap)),
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + awards.length) % awards.length
    setCurrentIndex(prevIndex)
    controls.start({ 
      x: -(prevIndex * (cardWidth + cardGap)),
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }

  React.useEffect(() => {
    if (isHovered) {
      controls.stop()
    } else {
      controls.start({ 
        x: [0, -(awards.length * (cardWidth + cardGap))],
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }
      })
    }
  }, [isHovered, controls, awards.length, cardWidth, cardGap])

  return (
    <div className="w-full overflow-hidden bg-background">
      <div className="container mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light"
        >
          Recognition & Awards
        </motion.h2>
      </div>

      <div className="relative group">
        <div className="container mx-auto">
          <motion.div
            initial={{ x: 0 }}
            animate={controls}
            className="flex gap-8 w-fit"
          >
            {awards.map((award, i) => (
              <div
                key={i}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                  relative inline-flex items-center px-8 py-12 
                  w-[500px] h-[200px] rounded-2xl 
                  ${i % 2 === 0 
                    ? 'bg-foreground text-background'
                    : 'bg-background text-foreground border border-foreground/10'
                  }
                  before:absolute before:top-0 before:right-0
                  before:w-24 before:h-24
                  before:bg-gradient-to-br
                  before:from-white/20 before:to-transparent
                  before:rounded-tr-2xl
                  before:opacity-50
                  hover:before:opacity-70
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  shadow-lg
                  cursor-pointer
                `}
              >
                {/* Award number */}
                <div className={`
                  absolute -top-3 -left-3 
                  w-10 h-10 
                  rounded-full 
                  flex items-center justify-center
                  font-light text-lg
                  shadow-lg
                  border-2
                  ${i % 2 === 0 
                    ? 'bg-background text-foreground border-foreground/10' 
                    : 'bg-foreground text-background border-background/10'
                  }
                `}>
                  {i + 1}
                </div>

                <div className="absolute top-4 right-4 w-8 h-8">
                  <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                </div>

                <span className="text-lg font-light tracking-wider whitespace-normal">
                  {award}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2
                     p-2 rounded-full bg-background/80 backdrop-blur border border-foreground/10 text-foreground 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200
                     hover:bg-background"
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2
                     p-2 rounded-full bg-background/80 backdrop-blur border border-foreground/10 text-foreground 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200
                     hover:bg-background"
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
} 