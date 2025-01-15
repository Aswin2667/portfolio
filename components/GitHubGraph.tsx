"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const daysInYear = 365;
const weeksInYear = 52;

const fetchOverallCommits = async (username: string): Promise<number[]> => {
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://api.github.com/graphql",
      { query, variables: { login: username } },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // Use environment variable for the token
        },
      }
    );

    const weeks = response.data.data.user.contributionsCollection.contributionCalendar.weeks;
    const dailyContributions = weeks.flatMap((week: any) => week.contributionDays.map((day: any) => day.contributionCount));

    return dailyContributions;
  } catch (error) {
    console.error("Failed to fetch overall commits:", error);
    return Array(daysInYear).fill(0);
  }
};

export default function GitHubGraph() {
  const [contributions, setContributions] = useState<number[]>([]);

  useEffect(() => {
    const loadContributions = async () => {
      const data = await fetchOverallCommits(`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`);
      setContributions(data);
    };
    loadContributions();
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-800";
    if (count < 2) return "bg-green-900";
    if (count < 3) return "bg-green-700";
    if (count < 4) return "bg-green-500";
    return "bg-green-300";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="py-20 bg-gray-900">
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
          className="w-full max-w-4xl mx-auto mt-12 overflow-hidden"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex space-x-1">
            {Array.from({ length: weeksInYear }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col space-y-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const contributionIndex = weekIndex * 7 + dayIndex;
                  const contributionCount = contributions[contributionIndex] || 0;
                  return (
                    <motion.div
                      key={dayIndex}
                      className={`w-3 h-3 rounded-sm ${getColor(contributionCount)}`}
                      variants={item}
                      whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
