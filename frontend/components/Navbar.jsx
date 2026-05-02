/**
 * Navbar Component
 * Main navigation bar with links to all tools and pages
 */
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import SearchBar from './SearchBar'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Set dark theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <nav className="bg-bg-primary shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
            <img src="/favicon.png" alt="DevTools Hub Logo" className="w-8 h-8 rounded-lg shadow-lg shadow-primary/20" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DevTools Hub
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <SearchBar />
            </div>

            <Link 
              href="/tools" 
              className={`relative text-text-primary hover:text-primary transition-colors font-medium pb-1 whitespace-nowrap ${
                pathname === '/tools' || pathname?.includes('/image-') || pathname?.includes('/base64') || 
                pathname?.includes('/code-') || pathname?.includes('/timestamp') || pathname?.includes('/hash') || 
                pathname?.includes('/color') || pathname?.includes('/uuid') || pathname?.includes('/url-') || 
                pathname?.includes('/json-') || pathname?.includes('/password-') ? 'text-primary' : ''
              }`}
            >
              All Tools
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                pathname === '/tools' || pathname?.includes('/image-') || pathname?.includes('/base64') || 
                pathname?.includes('/code-') || pathname?.includes('/timestamp') || pathname?.includes('/hash') || 
                pathname?.includes('/color') || pathname?.includes('/uuid') || pathname?.includes('/url-') || 
                pathname?.includes('/json-') || pathname?.includes('/password-') ? 'w-full' : 'w-0'
              }`}></span>
            </Link>

            <Link 
              href="/blog" 
              className={`relative text-text-primary hover:text-primary transition-colors font-medium pb-1 whitespace-nowrap ${
                pathname === '/blog' || pathname?.startsWith('/blog/') ? 'text-primary' : ''
              }`}
            >
              Blog
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                pathname === '/blog' || pathname?.startsWith('/blog/') ? 'w-full' : 'w-0'
              }`}></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              className="p-2 text-text-primary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-bg-primary reveal">
            <div className="flex flex-col space-y-4 px-4">
              {/* Mobile Search */}
              <div className="pb-4 border-b border-border">
                <SearchBar />
              </div>

              {[
                { href: '/tools', label: 'All Tools', icon: '🛠️' },
                { href: '/blog', label: 'Blog & Articles', icon: '📚' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    pathname === link.href || (link.href === '/blog' && pathname?.startsWith('/blog/')) 
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-text-primary hover:bg-bg-secondary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="flex-1 text-lg">{link.label}</span>
                  <span className="text-xl">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
