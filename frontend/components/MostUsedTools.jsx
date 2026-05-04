/**
 * MostUsedTools Component
 * Displays the most popular tools at the top of the homepage
 */
'use client'

import Link from 'next/link'

export default function MostUsedTools() {
  const mostUsedTools = [
    {
      title: 'JSON Formatter',
      description: 'Format & validate JSON',
      href: '/json-formatter',
      icon: '📋',
      badge: 'popular',
      uses: '50K+ uses'
    },
    {
      title: 'Dockerfile Generator',
      description: 'Generate optimized Dockerfiles',
      href: '/dockerfile-generator',
      icon: '🐳',
      badge: 'popular',
      uses: '28K+ uses'
    },
    {
      title: 'Image Compressor',
      description: 'Reduce image size',
      href: '/image-compressor',
      icon: '🗜️',
      badge: 'popular',
      uses: '40K+ uses'
    },
    {
      title: 'Regex Tester',
      description: 'Test regex patterns',
      href: '/regex-tester',
      icon: '🔤',
      badge: 'popular',
      uses: '30K+ uses'
    },
  ]

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2 flex items-center gap-3">
            <span className="text-4xl">🔥</span>
            Most Used Tools
          </h2>
          <p className="text-text-secondary">
            Start with our most popular developer tools
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mostUsedTools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
            className="group relative block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-card-bg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-border hover:border-orange-500/50 group-hover:-translate-y-2 overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                  🔥 Popular
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-3xl">
                  {tool.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary group-hover:text-orange-500 transition-colors mb-2">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-3">
                {tool.description}
              </p>

              {/* Usage Stats */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary/60">
                  {tool.uses}
                </span>
                <svg className="w-5 h-5 text-orange-500 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
