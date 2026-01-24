'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SiPython, SiR, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, 
         SiTableau, SiMysql,
         SiGit, SiDocker, SiAmazon, SiCplusplus } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import { BsGraphUp, BsFiletypeXlsx, BsBarChartFill } from 'react-icons/bs'

type ToolItem = {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

type TechCategory = {
  title: string
  tools: ToolItem[]
}

const techCategories: TechCategory[] = [
  {
    title: "Data Science & Analytics",
    tools: [
      { name: "Python", icon: SiPython as unknown as React.ComponentType<{ className?: string }> },
      { name: "R", icon: SiR as unknown as React.ComponentType<{ className?: string }> },
      { name: "TensorFlow", icon: SiTensorflow as unknown as React.ComponentType<{ className?: string }> },
      { name: "Scikit-learn", icon: SiScikitlearn as unknown as React.ComponentType<{ className?: string }> },
      { name: "Pandas", icon: SiPandas as unknown as React.ComponentType<{ className?: string }> },
      { name: "NumPy", icon: SiNumpy as unknown as React.ComponentType<{ className?: string }> }
    ]
  },
  {
    title: "Business Intelligence",
      tools: [
      { name: "Tableau", icon: SiTableau as unknown as React.ComponentType<{ className?: string }> },
      { name: "Power BI", icon: BsBarChartFill as unknown as React.ComponentType<{ className?: string }> },
      { name: "Excel", icon: BsFiletypeXlsx as unknown as React.ComponentType<{ className?: string }> },
      { name: "SQL", icon: SiMysql as unknown as React.ComponentType<{ className?: string }> }
    ]
  },
  {
    title: "AI & Machine Learning",
      tools: [
      { name: "LangGraph", icon: TbBrain as unknown as React.ComponentType<{ className?: string }> },
      { name: "NLP", icon: TbBrain as unknown as React.ComponentType<{ className?: string }> },
      { name: "Predictive Modeling", icon: BsGraphUp as unknown as React.ComponentType<{ className?: string }> },
      { name: "Forecasting", icon: BsGraphUp as unknown as React.ComponentType<{ className?: string }> }
    ]
  },
  {
    title: "Development Tools",
    tools: [
      { name: "Git", icon: SiGit as unknown as React.ComponentType<{ className?: string }> },
      { name: "Docker", icon: SiDocker as unknown as React.ComponentType<{ className?: string }> },
      { name: "AWS", icon: SiAmazon as unknown as React.ComponentType<{ className?: string }> },
      { name: "C++", icon: SiCplusplus as unknown as React.ComponentType<{ className?: string }> }
    ]
  }
]

export default function TechStack() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-light mb-6"
            >
              Stack of
              <br />
              Technologies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400"
            >
              Leveraging cutting-edge tools in data science, machine learning, and analytics 
              to deliver impactful solutions. From predictive modeling to business intelligence, 
              I transform complex data into actionable insights.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#151515] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-colors"
              >
                <h3 className="text-xl font-light mb-4">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <div 
                        key={tool.name}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                      >
                        <span className="text-xl group-hover:text-blue-400 transition-colors">
                          <Icon className="w-6 h-6" />
                        </span>
                        <span className="text-sm">{tool.name}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 