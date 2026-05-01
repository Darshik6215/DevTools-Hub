/**
 * ToolCard Component
 * Enhanced clickable tool card with hover animations
 */
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ToolCard({ tool }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={tool.href}
      className="group block h-full reveal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full p-6 md:p-8 bg-card-bg rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary hover:-translate-y-2 cursor-pointer">
        {/* Icon with animation */}
        <div className={`text-5xl md:text-6xl mb-4 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
          {tool.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
          {tool.title}
        </h3>
        
        {/* Description */}
        <p className="text-text-secondary mb-4 leading-relaxed">
          {tool.description}
        </p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {tool.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-text-secondary flex items-center">
              <span className="text-green-500 mr-2 text-lg">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* How to Use - Mini Guide */}
        {tool.steps && (
          <div className="mb-6 p-4 bg-bg-secondary rounded-lg border border-border">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Quick Guide:</h4>
            <ol className="space-y-1">
              {tool.steps.map((step, idx) => (
                <li key={idx} className="text-xs text-text-secondary flex items-start">
                  <span className="font-bold mr-2 text-primary">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        
        {/* CTA Button */}
        <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform group-hover:scale-105">
          Use Tool Now →
        </button>
      </div>
    </Link>
  )
}
