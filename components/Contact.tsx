"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormStatus('sent')
    // Reset form after successful submission
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-6 relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-white border-b-2 border-gray-600 focus:border-green-400 focus:outline-none py-2 px-4 transition-colors peer"
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all ${
                formData.name ? '-top-6 text-sm text-green-400' : 'top-2 text-gray-400'
              } peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-400`}
            >
              Name
            </label>
          </div>
          <div className="mb-6 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-white border-b-2 border-gray-600 focus:border-green-400 focus:outline-none py-2 px-4 transition-colors peer"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all ${
                formData.email ? '-top-6 text-sm text-green-400' : 'top-2 text-gray-400'
              } peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-400`}
            >
              Email
            </label>
          </div>
          <div className="mb-6 relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-gray-700 text-white border-b-2 border-gray-600 focus:border-green-400 focus:outline-none py-2 px-4 transition-colors peer"
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all ${
                formData.message ? '-top-6 text-sm text-green-400' : 'top-2 text-gray-400'
              } peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-400`}
            >
              Message
            </label>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus !== 'idle'}
          >
            {formStatus === 'idle' && 'Send Message'}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'sent' && 'Message Sent!'}
            {formStatus === 'error' && 'Error. Try Again.'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

