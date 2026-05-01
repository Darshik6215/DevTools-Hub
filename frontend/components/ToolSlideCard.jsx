'use client'

import Link from 'next/link'
import { useState } from 'react'

/**
 * ToolSlideCard Component
 * Individual tool card with hover effects and animations
 */
export default function ToolSlideCard({ tool, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={tool.href}>
      <div
        className={`group relative bg-card-bg rounded-2xl shadow-lg border border-border overflow-hidden transition-all duration-500 h-full cursor-pointer reveal reveal-delay-${(index % 3) + 1}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered
            ? '0 20px 40px rgba(59, 130, 246, 0.3)'
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative p-8">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-center">
            <div
              className="text-6xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{
                filter: isHovered ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' : 'none',
              }}
            >
              {tool.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-text-primary mb-3 text-center group-hover:text-primary transition-colors duration-300">
            {tool.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-center mb-6 leading-relaxed min-h-[3rem]">
            {tool.description}
          </p>

          {/* Features */}
          {tool.features && (
            <ul className="space-y-2 mb-6">
              {tool.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300"
                >
                  <span className="text-green-500 mr-2 text-lg">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Steps */}
          {tool.steps && (
            <div className="bg-bg-secondary rounded-lg p-4 mb-6">
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">
                Quick Guide
              </h4>
              <ol className="space-y-1">
                {tool.steps.map((step, idx) => (
                  <li key={idx} className="text-sm text-text-secondary flex items-start">
                    <span className="text-primary font-bold mr-2">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* CTA Button */}
          <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/50 transform group-hover:scale-105 flex items-center justify-center gap-2">
            <span>Use Tool Now</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Shine Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: isHovered ? 'shine 1.5s ease-in-out' : 'none',
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </Link>
  )
}
