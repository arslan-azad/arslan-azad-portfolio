'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SiPython, SiR, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, 
         SiTableau, SiMysql,
         SiGit, SiDocker, SiAmazon, SiCplusplus } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import { BsGraphUp, BsFiletypeXlsx, BsBarChartFill } from 'react-icons/bs'

const techCategories = [
  {
    title: "Data Science & Analytics",
    tools: [
      { name: "Python", icon: <SiPython /> },
      { name: "R", icon: <SiR /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> }
    ]
  },
  {
    title: "Business Intelligence",
    tools: [
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Power BI", icon: <BsBarChartFill /> },
      { name: "Excel", icon: <BsFiletypeXlsx /> },
      { name: "SQL", icon: <SiMysql /> }
    ]
  },
  {
    title: "AI & Machine Learning",
    tools: [
      { name: "LangGraph", icon: <TbBrain /> },
      { name: "NLP", icon: <TbBrain /> },
      { name: "Predictive Modeling", icon: <BsGraphUp /> },
      { name: "Forecasting", icon: <BsGraphUp /> }
    ]
  },
  {
    title: "Development Tools",
    tools: [
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "AWS", icon: <SiAmazon /> },
      { name: "C++", icon: <SiCplusplus /> }
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
                  {category.tools.map((tool) => (
                    <div 
                      key={tool.name}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <span className="text-xl group-hover:text-blue-400 transition-colors">
                        {tool.icon}
                      </span>
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 