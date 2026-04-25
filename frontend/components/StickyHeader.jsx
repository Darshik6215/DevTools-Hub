/**
 * StickyHeader Component
 * Adds sticky behavior to navbar on scroll
 */
'use client'

import { useEffect, useState } from 'react'

export default function StickyHeader({ children }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}>
      {children}
    </div>
  )
}
