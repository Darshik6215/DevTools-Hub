'use client'

/**
 * Footer Component
 * Site footer with copyright, links, and navigation
 */
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const footerLinks = {
    popularTools: [
      { name: 'JSON Formatter', href: '/json-formatter' },
      { name: 'Password Generator', href: '/password-generator' },
      { name: 'Image Compressor', href: '/image-compressor' },
      { name: 'API Tester', href: '/api-tester' },
      { name: 'Image Converter', href: '/image-converter' },
    ],
    devTools: [
      { name: 'JWT Encoder', href: '/jwt-encoder' },
      { name: 'Base64 Converter', href: '/base64-converter' },
      { name: 'Code Formatter', href: '/code-formatter' },
      { name: 'UUID Generator', href: '/uuid-generator' },
      { name: 'Regex Tester', href: '/regex-tester' },
    ],
    resources: [
      { name: 'Blogs', href: '/blog' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'All Tools', href: '/tools' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Contact Us', href: '/contact' },
    ]
  }

  return (
    <>
      <footer className="bg-bg-primary border-t border-border pt-20 pb-10 mt-16 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Gradient Background */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <img src="/favicon.png" alt="DevTools Hub Logo" className="w-8 h-8 rounded-lg shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent tracking-tighter">
                  DevTools Hub
                </h3>
              </Link>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed max-w-sm">
                Professional-grade developer tools for the modern web. Fast, secure, and 100% free forever.
              </p>
              
              {/* Newsletter Section */}
              <div className="max-w-sm">
                <h4 className="font-bold mb-4 text-text-primary uppercase tracking-wider text-sm">Stay Updated</h4>
                <div className="flex gap-2 p-1.5 bg-bg-secondary border border-border rounded-xl focus-within:border-primary transition-all">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-transparent border-none focus:ring-0 text-sm flex-1 px-3 py-2 text-text-primary"
                  />
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95">
                    Join
                  </button>
                </div>
                <p className="text-[10px] text-text-secondary mt-2 px-1">
                  * Weekly updates on new tools and developer guides.
                </p>
              </div>
            </div>

            {/* Popular Tools */}
            <div>
              <h4 className="font-black mb-6 text-text-primary uppercase tracking-widest text-xs">Popular Tools</h4>
              <ul className="space-y-3">
                {footerLinks.popularTools.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dev Tools */}
            <div>
              <h4 className="font-black mb-6 text-text-primary uppercase tracking-widest text-xs">Developer Utilities</h4>
              <ul className="space-y-3">
                {footerLinks.devTools.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Legal */}
            <div>
              <h4 className="font-black mb-6 text-text-primary uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-black mb-6 text-text-primary uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-text-secondary text-sm font-medium order-2 md:order-1">
              &copy; {currentYear} <span className="text-primary font-bold">DevTools Hub</span> (devtoolskit.pro). Crafted with ❤️ for Developers.
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Back to Top Button */}
      <button 
        onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-2xl shadow-primary/40 transition-all duration-500 z-[100] transform hover:-translate-y-2 active:scale-90 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg 
          className="w-7 h-7 transform group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}
