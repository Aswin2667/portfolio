"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Code Snippets', path: '/code-snippets' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0)', 'rgba(17, 24, 39, 0.8)']
  )
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => setIsOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed w-full z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-green-400">BackendDev</span>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.path} passHref>
                  <span className={`cursor-pointer text-gray-300 p-3 hover:text-green-400 transition-colors relative ${
                    pathname === item.path ? 'text-green-400' : ''
                  }`}>
                    {item.name}
                    {pathname === item.path && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5  bg-green-400"
                        layoutId="underline"
                      />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <span
                className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}