"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const daysInYear = 365
const weeksInYear = 52

const generateRandomContributions = () => {
  return Array.from({ length: daysInYear }, () => Math.floor(Math.random() * 5))
}

export default function GitHubGraph() {
  const [contributions, setContributions] = useState<number[]>([])

  useEffect(() => {
    setContributions(generateRandomContributions())
  }, [])

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-800'
    if (count < 2) return 'bg-green-900'
    if (count < 3) return 'bg-green-700'
    if (count < 4) return 'bg-green-500'
    return 'bg-green-300'
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GitHub Contributions
        </motion.h2>
        <motion.div
          className="w-full max-w-4xl mx-auto mt-12 overflow-x-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex space-x-1">
            {Array.from({ length: weeksInYear }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col space-y-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const contributionIndex = weekIndex * 7 + dayIndex
                  const contributionCount = contributions[contributionIndex] || 0
                  return (
                    <motion.div
                      key={dayIndex}
                      className={`w-3 h-3 rounded-sm ${getColor(contributionCount)}`}
                      variants={item}
                      whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

