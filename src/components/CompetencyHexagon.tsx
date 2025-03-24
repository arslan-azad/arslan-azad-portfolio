'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function CompetencyHexagon() {
  // Define the dimensions and center of the SVG canvas
  const width = 600
  const height = 600
  const centerX = width / 2
  const centerY = height / 2
  const radius = 240 // increased radius for better visibility
  const textOffset = 30 // Offset to position text above the sides

  const categories = [
    "Data Science & Analytics",
    "Technical & Programming",
    "Research & Innovation",
    "Leadership & Mentorship",
    "Business & Strategy",
    "Creative & Design"
  ]

  // Compute vertices with adjusted angles for parallel text
  const vertices = categories.map((cat, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle: (angle * 180) / Math.PI
    }
  })

  const polygonPoints = vertices.map(v => `${v.x},${v.y}`).join(' ')

  // Calculate text positions with offset from sides
  const textPositions = vertices.map((vertex, i) => {
    const nextVertex = vertices[(i + 1) % vertices.length]
    
    // Calculate midpoint of the side
    const midX = (vertex.x + nextVertex.x) / 2
    const midY = (vertex.y + nextVertex.y) / 2
    
    // Calculate the perpendicular vector for text offset
    const dx = nextVertex.x - vertex.x
    const dy = nextVertex.y - vertex.y
    const length = Math.sqrt(dx * dx + dy * dy)
    const normalX = -dy / length
    const normalY = dx / length
    
    // Position text above the side
    const textX = midX + normalX * textOffset
    const textY = midY + normalY * textOffset
    
    // Calculate angle for text rotation
    const angle = Math.atan2(dy, dx) * 180 / Math.PI
    
    return {
      text: categories[i],
      x: textX,
      y: textY,
      angle: angle
    }
  })

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <motion.svg 
        width={width} 
        height={height} 
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2575fc" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6a11cb" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2575fc" />
            <stop offset="100%" stopColor="#6a11cb" />
          </linearGradient>
        </defs>

        {/* Background hexagon with gradient */}
        <polygon 
          points={polygonPoints} 
          fill="url(#hexGradient)"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="opacity-80"
        />

        {/* Radial lines with gradient */}
        {vertices.map((v, i) => (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={v.x}
            y2={v.y}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="opacity-30"
          />
        ))}

        {/* Text labels that rotate with the hexagon */}
        {textPositions.map((pos, i) => (
          <g key={i}>
            {/* Background for better text readability */}
            <text
              x={pos.x}
              y={pos.y}
              transform={`rotate(${pos.angle}, ${pos.x}, ${pos.y})`}
              textAnchor="middle"
              className="text-sm font-light"
              style={{
                fill: 'white',
                stroke: 'white',
                strokeWidth: '4px',
                strokeLinejoin: 'round',
                strokeLinecap: 'round',
                opacity: 0.2,
              }}
            >
              {pos.text}
            </text>
            {/* Actual text */}
            <text
              x={pos.x}
              y={pos.y}
              transform={`rotate(${pos.angle}, ${pos.x}, ${pos.y})`}
              textAnchor="middle"
              className="text-sm font-light fill-current"
              style={{
                filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))',
              }}
            >
              {pos.text}
            </text>
          </g>
        ))}

        {/* Center point with gradient */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r="4" 
          fill="url(#lineGradient)"
          className="filter drop-shadow-lg"
        />
      </motion.svg>
    </div>
  )
} 