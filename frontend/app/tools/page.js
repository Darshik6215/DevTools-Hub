import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AdComponent from '@/components/AdComponent'

export const metadata = {
  title: 'All Developer Tools - Complete Collection | DevTools Hub',
  description: 'Browse our complete collection of free online developer tools. JSON formatter, image compressor, code minifier, and more.',
  keywords: ['developer tools', 'online tools', 'free tools', 'web development tools'],
}

export default function AllToolsPage() {
  const toolCategories = [
    {
      category: 'Text & Data Tools',
      icon: '📝',
      tools: [
        {
          title: 'JSON Formatter',
          description: 'Format and validate JSON data',
          href: '/json-formatter',
          icon: '📋'
        },
        {
          title: 'Base64 Converter',
          description: 'Encode and decode Base64',
          href: '/base64-converter',
          icon: '🔤'
        },
        {
          title: 'Hash Generator',
          description: 'Generate MD5, SHA256, SHA512 hashes',
          href: '/hash-generator',
          icon: '🔐'
        },
        {
          title: 'URL Encoder',
          description: 'Encode and decode URLs',
          href: '/url-encoder',
          icon: '🔗'
        },
        {
          title: 'Text Diff Checker',
          description: 'Compare two texts side-by-side',
          href: '/text-diff',
          icon: '🔍'
        },
        {
          title: 'JWT Decoder',
          description: 'Decode and inspect JWT tokens',
          href: '/jwt-decoder',
          icon: '🔓'
        },
        {
          title: 'JWT Encoder',
          description: 'Create and sign JWT tokens',
          href: '/jwt-encoder',
          icon: '🔐'
        },
        {
          title: 'JSON ⇄ CSV Converter',
          description: 'Convert between JSON and CSV formats',
          href: '/json-csv-converter',
          icon: '🔄'
        },
      ]
    },
    {
      category: 'API & Developer Tools',
      icon: '🚀',
      tools: [
        {
          title: 'API Tester',
          description: 'Test REST APIs like Postman',
          href: '/api-tester',
          icon: '🧪'
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
          icon: '⚡'
        },
        {
          title: 'Regex Tester',
          description: 'Test and debug regular expressions',
          href: '/regex-tester',
          icon: '🔤'
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
          icon: '🗜️'
        },
        {
          title: 'Image Converter',
          description: 'Convert between image formats',
          href: '/image-converter',
          icon: '🖼️'
        },
        {
          title: 'Image Resizer',
          description: 'Resize and crop images easily',
          href: '/image-resizer',
          icon: '📐'
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
          icon: '🔐'
        },
        {
          title: 'UUID Generator',
          description: 'Generate unique identifiers',
          href: '/uuid-generator',
          icon: '🆔'
        },
        {
          title: 'QR Code Generator',
          description: 'Create custom QR codes',
          href: '/qr-generator',
          icon: '📱'
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
          icon: '⏰'
        },
        {
          title: 'Color Picker',
          description: 'Pick and convert colors',
          href: '/color-picker',
          icon: '🎨'
        },
      ]
    },
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            All Developer Tools
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Complete collection of free online tools for developers and designers
          </p>
        </div>

        {/* Ad Placement */}
        <div className="mb-12">
          <AdComponent size="leaderboard" />
        </div>

        {/* Tool Categories */}
        <div className="space-y-12">
          {toolCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Link
                    key={toolIndex}
                    href={tool.href}
                    className="group bg-card-bg rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-border hover:border-primary hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{tool.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                          {tool.title}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {tool.description}
                        </p>
                      </div>
                      <div className="text-primary text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ad Placement - Bottom */}
        <div className="mt-12">
          <AdComponent size="leaderboard" />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Need More Tools?</h2>
          <p className="text-lg mb-6 opacity-90">
            We're constantly adding new tools. Check back regularly for updates!
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
          >
            📚 Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
