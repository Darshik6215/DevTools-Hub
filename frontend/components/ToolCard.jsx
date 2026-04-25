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
      className="group block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-400 hover:-translate-y-2 cursor-pointer">
        {/* Icon with animation */}
        <div className={`text-5xl md:text-6xl mb-4 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
          {tool.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
          {tool.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {tool.description}
        </p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {tool.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-500 flex items-center">
              <span className="text-green-500 mr-2 text-lg">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* How to Use - Mini Guide */}
        {tool.steps && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="text-sm font-semibold text-blue-900 mb-2">Quick Guide:</h4>
            <ol className="space-y-1">
              {tool.steps.map((step, idx) => (
                <li key={idx} className="text-xs text-blue-800 flex items-start">
                  <span className="font-bold mr-2">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        
        {/* CTA Button */}
        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform group-hover:scale-105">
          Use Tool Now →
        </button>
      </div>
    </Link>
  )
}
