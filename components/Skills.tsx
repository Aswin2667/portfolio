"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const skills = [
  { name: 'Node.js', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'SQL', level: 95 },
  { name: 'MongoDB', level: 88 },
  { name: 'Docker', level: 82 },
  { name: 'Kubernetes', level: 75 },
  { name: 'AWS', level: 85 },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Level',
        data: skills.map(skill => skill.level),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Radar
              data={data}
              options={{
                ...options,
                scales: {
                  ...options.scales,
                  r: {
                    ...options.scales.r,
                    ticks: {
                      display: false
                    }
                  }
                }
              }}
            /> 
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800 p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-green-400 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                {hoveredSkill === skill.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-sm text-gray-400"
                  >
                    Proficiency: {skill.level}%
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}