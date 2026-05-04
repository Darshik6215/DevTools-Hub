'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

/**
 * SearchBar Component
 * Intelligent search with autocomplete for all tools
 */
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [filteredTools, setFilteredTools] = useState([])
  const searchRef = useRef(null)
  const router = useRouter()

  // All available tools
  const allTools = [
    { 
      title: 'JSON Formatter', 
      href: '/json-formatter', 
      icon: '📋',
      keywords: ['json', 'format', 'validate', 'beautify', 'pretty print', 'lint', 'parse']
    },
    { 
      title: 'Image Compressor', 
      href: '/image-compressor', 
      icon: '🗜️',
      keywords: ['image', 'compress', 'reduce', 'optimize', 'size', 'minify', 'photo']
    },
    { 
      title: 'Base64 Converter', 
      href: '/base64-converter', 
      icon: '🔤',
      keywords: ['base64', 'encode', 'decode', 'convert', 'string', 'binary']
    },
    { 
      title: 'Code Formatter', 
      href: '/code-formatter', 
      icon: '⚡',
      keywords: ['code', 'format', 'minify', 'beautify', 'html', 'css', 'javascript', 'prettier']
    },
    { 
      title: 'Timestamp Converter', 
      href: '/timestamp-converter', 
      icon: '⏰',
      keywords: ['timestamp', 'unix', 'time', 'date', 'convert', 'epoch', 'seconds']
    },
    { 
      title: 'Hash Generator', 
      href: '/hash-generator', 
      icon: '🔐',
      keywords: ['hash', 'md5', 'sha256', 'sha512', 'generate', 'checksum', 'secure']
    },
    { 
      title: 'Color Picker', 
      href: '/color-picker', 
      icon: '🎨',
      keywords: ['color', 'picker', 'hex', 'rgb', 'hsl', 'convert', 'palette', 'design']
    },
    { 
      title: 'UUID Generator', 
      href: '/uuid-generator', 
      icon: '🆔',
      keywords: ['uuid', 'guid', 'generate', 'unique', 'id', 'random', 'identifier']
    },
    { 
      title: 'URL Encoder', 
      href: '/url-encoder', 
      icon: '🔗',
      keywords: ['url', 'encode', 'decode', 'escape', 'uri', 'percent']
    },
    { 
      title: 'Password Generator', 
      href: '/password-generator', 
      icon: '🔑',
      keywords: ['password', 'generate', 'secure', 'random', 'security', 'strong']
    },
    { 
      title: 'Image Converter', 
      href: '/image-converter', 
      icon: '🖼️',
      keywords: ['image', 'convert', 'png', 'jpg', 'webp', 'format', 'extension']
    },
    { 
      title: 'Regex Tester', 
      href: '/regex-tester', 
      icon: '🔤',
      keywords: ['regex', 'regular expression', 'pattern', 'match', 'test', 'find', 'validate']
    },
    { 
      title: 'JWT Decoder', 
      href: '/jwt-decoder', 
      icon: '🔓',
      keywords: ['jwt', 'token', 'decode', 'json web token', 'auth', 'inspect', 'payload']
    },
    { 
      title: 'Text Diff Checker', 
      href: '/text-diff', 
      icon: '🔍',
      keywords: ['diff', 'compare', 'text', 'difference', 'merge', 'side-by-side', 'changes']
    },
    { 
      title: 'Image Resizer', 
      href: '/image-resizer', 
      icon: '📐',
      keywords: ['image', 'resize', 'crop', 'dimensions', 'scale', 'width', 'height', 'photo']
    },
    { 
      title: 'QR Code Generator', 
      href: '/qr-generator', 
      icon: '📱',
      keywords: ['qr', 'qr code', 'generate', 'barcode', 'scan', 'link', 'mobile']
    },
    // New Tools - Phase 3
    { 
      title: 'JSON ⇄ CSV Converter', 
      href: '/json-csv-converter', 
      icon: '🔄',
      keywords: ['json', 'csv', 'convert', 'excel', 'data', 'spreadsheet', 'table']
    },
    { 
      title: 'JWT Encoder', 
      href: '/jwt-encoder', 
      icon: '🔐',
      keywords: ['jwt', 'encode', 'sign', 'token', 'create', 'auth', 'json web token']
    },
    { 
      title: 'Dockerfile Generator', 
      href: '/dockerfile-generator', 
      icon: '🐳',
      keywords: ['docker', 'dockerfile', 'container', 'devops', 'generate', 'deployment', 'linux']
    },
    { 
      title: '.env Generator & Validator', 
      href: '/env-generator-validator', 
      icon: '🛠️',
      keywords: ['env', 'dotenv', 'validate', 'environment', 'variables', 'config', 'secret']
    },
    { 
      title: '.gitignore Generator', 
      href: '/gitignore-generator', 
      icon: '📄',
      keywords: ['gitignore', 'git', 'ignore', 'config', 'devops', 'generate', 'version control']
    },
    { 
      title: 'SLA Uptime Calculator', 
      href: '/sla-uptime-calculator', 
      icon: '⏱️',
      keywords: ['sla', 'uptime', 'downtime', 'calculator', 'devops', '99.9', '99.99', 'availability', 'nines']
    },
  ]

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredTools([])
      setIsOpen(false)
      return
    }

    const query = searchQuery.toLowerCase()
    const results = allTools.filter(tool => {
      const titleMatch = tool.title.toLowerCase().includes(query)
      const keywordMatch = tool.keywords.some(keyword => keyword.includes(query))
      return titleMatch || keywordMatch
    })

    setFilteredTools(results)
    setIsOpen(results.length > 0)
  }, [searchQuery])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredTools.length > 0) {
      router.push(filteredTools[0].href)
      setSearchQuery('')
      setIsOpen(false)
    }
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleToolClick = (href) => {
    setSearchQuery('')
    setIsOpen(false)
    router.push(href)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery && setIsOpen(true)}
          placeholder="Search tools..."
          className="w-full px-4 py-2 pl-10 bg-bg-secondary border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        
        {/* Search Icon */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('')
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && filteredTools.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-bg-primary border border-border rounded-lg shadow-2xl z-[70] max-h-96 overflow-y-auto animate-fadeIn">
          <div className="p-2">
            {filteredTools.map((tool, index) => (
              <button
                key={tool.href}
                onClick={() => handleToolClick(tool.href)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg-secondary transition-colors text-left group"
              >
                <span className="text-2xl">{tool.icon}</span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {tool.title}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {tool.keywords.slice(0, 3).join(', ')}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-3 bg-bg-secondary">
            <Link
              href="/tools"
              onClick={() => {
                setSearchQuery('')
                setIsOpen(false)
              }}
              className="text-sm text-primary hover:underline font-semibold flex items-center justify-center gap-2"
            >
              View All Tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery && filteredTools.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-bg-primary border border-border rounded-lg shadow-2xl z-[70] p-6 text-center animate-fadeIn">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-text-primary font-semibold mb-1">No tools found</p>
          <p className="text-sm text-text-secondary mb-4">
            Try searching for "json", "image", "password", etc.
          </p>
          <Link
            href="/tools"
            onClick={() => {
              setSearchQuery('')
              setIsOpen(false)
            }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all text-sm font-semibold"
          >
            Browse All Tools
          </Link>
        </div>
      )}
    </div>
  )
}
