'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AdComponent from '@/components/AdComponent'

export default function AllToolsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const toolCategories = [
    {
      category: 'Text & Data Tools',
      icon: '📝',
      tools: [
        {
          title: 'JSON Formatter',
          description: 'Format and validate JSON data',
          href: '/json-formatter',
          icon: '📋',
          keywords: ['json', 'format', 'validate', 'beautify']
        },
        {
          title: 'Base64 Converter',
          description: 'Encode and decode Base64',
          href: '/base64-converter',
          icon: '🔤',
          keywords: ['base64', 'encode', 'decode']
        },
        {
          title: 'Hash Generator',
          description: 'Generate MD5, SHA256, SHA512 hashes',
          href: '/hash-generator',
          icon: '🔐',
          keywords: ['hash', 'md5', 'sha256', 'sha512', 'cryptography']
        },
        {
          title: 'URL Encoder',
          description: 'Encode and decode URLs',
          href: '/url-encoder',
          icon: '🔗',
          keywords: ['url', 'encode', 'decode', 'escape']
        },
        {
          title: 'Text Diff Checker',
          description: 'Compare two texts side-by-side',
          href: '/text-diff',
          icon: '🔍',
          keywords: ['diff', 'compare', 'text', 'difference']
        },
        {
          title: 'JWT Decoder',
          description: 'Decode and inspect JWT tokens',
          href: '/jwt-decoder',
          icon: '🔓',
          keywords: ['jwt', 'token', 'decode', 'auth']
        },
        {
          title: 'JWT Encoder',
          description: 'Create and sign JWT tokens',
          href: '/jwt-encoder',
          icon: '🔐',
          keywords: ['jwt', 'encode', 'sign', 'token', 'auth']
        },
        {
          title: 'JSON ⇄ CSV Converter',
          description: 'Convert between JSON and CSV formats',
          href: '/json-csv-converter',
          icon: '🔄',
          keywords: ['json', 'csv', 'convert', 'excel', 'spreadsheet']
        },
      ]
    },
    {
      category: 'API & Developer Tools',
      icon: '🚀',
      tools: [
        {
          title: 'Dockerfile Generator',
          description: 'Generate optimized Dockerfiles instantly',
          href: '/dockerfile-generator',
          icon: '🐳',
          keywords: ['docker', 'dockerfile', 'container', 'devops']
        },
        {
          title: '.env Generator & Validator',
          description: 'Create and validate .env files',
          href: '/env-generator-validator',
          icon: '🛠️',
          keywords: ['env', 'dotenv', 'validate', 'environment']
        },
        {
          title: '.gitignore Generator',
          description: 'Generate custom .gitignore files instantly',
          href: '/gitignore-generator',
          icon: '📄',
          keywords: ['gitignore', 'git', 'ignore', 'config', 'devops']
        },
        {
          title: 'SLA Uptime Calculator',
          description: 'Calculate allowed downtime for any SLA uptime %',
          href: '/sla-uptime-calculator',
          icon: '⏱️',
          keywords: ['sla', 'uptime', 'downtime', 'calculator', 'devops', '99.9', 'availability']
        },
      ]
    },
    {
      category: 'Code Tools',
      icon: '⚡',
      tools: [
        {
          title: 'Code Formatter',
          description: 'Minify and beautify HTML, CSS, JS',
          href: '/code-formatter',
          icon: '⚡',
          keywords: ['code', 'format', 'minify', 'beautify', 'html', 'css', 'javascript']
        },
        {
          title: 'Regex Tester',
          description: 'Test and debug regular expressions',
          href: '/regex-tester',
          icon: '🔤',
          keywords: ['regex', 'regular expression', 'pattern', 'test']
        },
      ]
    },
    {
      category: 'Image Tools',
      icon: '🖼️',
      tools: [
        {
          title: 'Image Compressor',
          description: 'Reduce image size without quality loss',
          href: '/image-compressor',
          icon: '🗜️',
          keywords: ['image', 'compress', 'reduce', 'optimize']
        },
        {
          title: 'Image Converter',
          description: 'Convert between image formats',
          href: '/image-converter',
          icon: '🖼️',
          keywords: ['image', 'convert', 'png', 'jpg', 'webp']
        },
        {
          title: 'Image Resizer',
          description: 'Resize and crop images easily',
          href: '/image-resizer',
          icon: '📐',
          keywords: ['image', 'resize', 'crop', 'scale']
        },
      ]
    },
    {
      category: 'Generator Tools',
      icon: '🎲',
      tools: [
        {
          title: 'Password Generator',
          description: 'Generate secure passwords',
          href: '/password-generator',
          icon: '🔐',
          keywords: ['password', 'generate', 'secure', 'random']
        },
        {
          title: 'UUID Generator',
          description: 'Generate unique identifiers',
          href: '/uuid-generator',
          icon: '🆔',
          keywords: ['uuid', 'guid', 'generate', 'unique']
        },
        {
          title: 'QR Code Generator',
          description: 'Create custom QR codes',
          href: '/qr-generator',
          icon: '📱',
          keywords: ['qr', 'qr code', 'generate', 'barcode']
        },
      ]
    },
    {
      category: 'Converter Tools',
      icon: '🔄',
      tools: [
        {
          title: 'Timestamp Converter',
          description: 'Convert Unix timestamps to dates',
          href: '/timestamp-converter',
          icon: '⏰',
          keywords: ['timestamp', 'unix', 'time', 'date', 'convert']
        },
        {
          title: 'Color Picker',
          description: 'Pick and convert colors',
          href: '/color-picker',
          icon: '🎨',
          keywords: ['color', 'picker', 'hex', 'rgb', 'hsl']
        },
      ]
    },
  ]

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return toolCategories

    const query = searchQuery.toLowerCase()
    return toolCategories.map(category => ({
      ...category,
      tools: category.tools.filter(tool => 
        tool.title.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query) ||
        tool.keywords.some(k => k.toLowerCase().includes(query))
      )
    })).filter(category => category.tools.length > 0)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: 'All Tools', href: '/tools' }
          ]} 
        />

        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent py-2">
            All Developer Tools
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Complete collection of free online tools for developers and designers
          </p>

          {/* Search Bar on Tools Page */}
          <div className="max-w-2xl mx-auto relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a tool (e.g. 'json', 'docker', 'image')..."
              className="w-full px-6 py-4 bg-bg-secondary border border-border rounded-2xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary shadow-xl transition-all group-hover:border-primary/50"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors">
              {searchQuery ? (
                <button onClick={() => setSearchQuery('')} className="hover:text-red-500">✕</button>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Ad Placement */}
        <div className="mb-12">
          <AdComponent size="leaderboard" />
        </div>

        {/* Tool Categories */}
        <div className="space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, catIndex) => (
              <div key={catIndex} className="animate-fadeIn" style={{ animationDelay: `${catIndex * 50}ms` }}>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <span className="text-3xl p-2 bg-bg-secondary rounded-xl border border-border">{category.icon}</span>
                  {category.category}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <Link
                      key={toolIndex}
                      href={tool.href}
                      className="group bg-card-bg rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-border hover:border-primary hover:-translate-y-2 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="text-6xl">{tool.icon}</div>
                      </div>
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="text-4xl p-3 bg-bg-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                          {tool.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                            {tool.title}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                        <div className="text-primary text-xl group-hover:translate-x-1 transition-transform self-center">
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-bg-secondary rounded-3xl border border-dashed border-border">
              <div className="text-6xl mb-4">🏜️</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">No tools match your search</h3>
              <p className="text-text-secondary">Try searching for something else or browse all categories.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all font-bold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Ad Placement - Bottom */}
        <div className="mt-12">
          <AdComponent size="leaderboard" />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Tools?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We're constantly adding new tools to help developers. If you have a suggestion, feel free to contact us or check our latest blog posts!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-lg transition-all"
            >
              📚 Read Our Blog
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-bg-primary/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              ✉️ Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
