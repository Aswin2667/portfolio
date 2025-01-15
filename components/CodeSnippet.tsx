"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeSnippets = [
  {
    language: 'javascript',
    code: `
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', async (req, res) => {
  try {
    const data = await fetchDataFromDatabase();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
    `.trim(),
    description: 'A simple Express.js API endpoint',
  },
  {
    language: 'python',
    code: `
import asyncio
from aiohttp import web

async def handle(request):
    name = request.match_info.get('name', "Anonymous")
    text = f"Hello, {name}"
    return web.Response(text=text)

app = web.Application()
app.add_routes([web.get('/', handle),
                web.get('/{name}', handle)])

if __name__ == '__main__':
    web.run_app(app)
    `.trim(),
    description: 'Asynchronous web server using aiohttp',
  },
]

export default function CodeSnippet() {
  const [activeSnippet, setActiveSnippet] = useState(0)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Code Snippets
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex justify-center space-x-4">
            {codeSnippets.map((snippet, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded ${
                  activeSnippet === index
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => setActiveSnippet(index)}
              >
                {snippet.language}
              </button>
            ))}
          </div>
          <motion.div
            key={activeSnippet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SyntaxHighlighter
              language={codeSnippets[activeSnippet].language}
              style={atomDark}
              className="rounded-lg text-sm"
            >
              {codeSnippets[activeSnippet].code}
            </SyntaxHighlighter>
            <p className="mt-4 text-center text-gray-400">
              {codeSnippets[activeSnippet].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

