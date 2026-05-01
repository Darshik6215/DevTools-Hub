'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function CodeFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [mode, setMode] = useState('beautify') // 'beautify' or 'minify'
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  // Simple beautifier
  const beautifyCode = (code, lang) => {
    if (lang === 'javascript') {
      return beautifyJS(code)
    } else if (lang === 'css') {
      return beautifyCSS(code)
    } else if (lang === 'html') {
      return beautifyHTML(code)
    }
    return code
  }

  // Simple minifier
  const minifyCode = (code, lang) => {
    if (lang === 'javascript') {
      return minifyJS(code)
    } else if (lang === 'css') {
      return minifyCSS(code)
    } else if (lang === 'html') {
      return minifyHTML(code)
    }
    return code
  }

  // JavaScript beautifier
  const beautifyJS = (code) => {
    let formatted = code
    let indent = 0
    let result = ''
    
    for (let i = 0; i < formatted.length; i++) {
      const char = formatted[i]
      
      if (char === '{' || char === '[') {
        result += char + '\n' + '  '.repeat(++indent)
      } else if (char === '}' || char === ']') {
        result += '\n' + '  '.repeat(--indent) + char
      } else if (char === ';') {
        result += char + '\n' + '  '.repeat(indent)
      } else if (char === ',') {
        result += char + ' '
      } else {
        result += char
      }
    }
    
    return result.replace(/\n\s*\n/g, '\n').trim()
  }

  // JavaScript minifier
  const minifyJS = (code) => {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\/\/.*/g, '') // Remove single-line comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\s*([{}();,:])\s*/g, '$1') // Remove spaces around operators
      .trim()
  }

  // CSS beautifier
  const beautifyCSS = (code) => {
    return code
      .replace(/\{/g, ' {\n  ')
      .replace(/\}/g, '\n}\n')
      .replace(/;/g, ';\n  ')
      .replace(/,/g, ', ')
      .replace(/\n\s*\n/g, '\n')
      .trim()
  }

  // CSS minifier
  const minifyCSS = (code) => {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces
      .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around operators
      .trim()
  }

  // HTML beautifier
  const beautifyHTML = (code) => {
    let formatted = code
    let indent = 0
    let result = ''
    const tags = formatted.match(/<[^>]+>/g) || []
    
    formatted.split(/(<[^>]+>)/).forEach(part => {
      if (part.match(/<[^>]+>/)) {
        if (part.match(/<\/\w+>/)) {
          indent--
          result += '  '.repeat(Math.max(0, indent)) + part + '\n'
        } else if (part.match(/<\w+[^>]*>/)) {
          result += '  '.repeat(indent) + part + '\n'
          if (!part.match(/<\w+[^>]*\/>/)) {
            indent++
          }
        }
      } else if (part.trim()) {
        result += '  '.repeat(indent) + part.trim() + '\n'
      }
    })
    
    return result.trim()
  }

  // HTML minifier
  const minifyHTML = (code) => {
    return code
      .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces
      .replace(/>\s+</g, '><') // Remove spaces between tags
      .trim()
  }

  const handleFormat = () => {
    if (mode === 'beautify') {
      setOutput(beautifyCode(input, language))
    } else {
      setOutput(minifyCode(input, language))
    }
  }

  const handleCopy = () => {
    copyToClipboard(output, 'output')
  }

  const downloadCode = () => {
    const extensions = { javascript: 'js', css: 'css', html: 'html' }
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `formatted.${extensions[language]}`
    link.click()
    URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
  }

  const loadSample = () => {
    const samples = {
      javascript: `function hello(name){console.log("Hello, "+name);return true;}const arr=[1,2,3];`,
      css: `.container{display:flex;justify-content:center;align-items:center;background:#fff;}`,
      html: `<div class="container"><h1>Title</h1><p>Paragraph text</p></div>`
    }
    setInput(samples[language])
  }

  const faqs = [
    {
      question: 'What is code minification?',
      answer: 'Code minification removes unnecessary characters (spaces, line breaks, comments) from source code to reduce file size without changing functionality. This improves website loading speed.'
    },
    {
      question: 'What is code beautification?',
      answer: 'Code beautification (or formatting) adds proper indentation, spacing, and line breaks to make code more readable and maintainable for developers.'
    },
    {
      question: 'Should I minify code for production?',
      answer: 'Yes! Minified code loads faster and uses less bandwidth. Always minify CSS, JavaScript, and HTML for production websites while keeping beautified versions for development.'
    },
    {
      question: 'Does minification affect code functionality?',
      answer: 'No, minification only removes whitespace and comments. The code functionality remains exactly the same.'
    }
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <ToolLayout
        title="Free HTML CSS JavaScript Minifier & Beautifier Online"
        description="Minify and beautify HTML, CSS, and JavaScript code instantly. Reduce file size, improve performance, and format code for better readability. Free online code formatter."
        icon="⚡"
      >
        <Breadcrumb 
          items={[
            { label: 'Code Formatter', href: '/code-formatter' }
          ]} 
        />

        {/* Ad Placement - Above Tool */}
        <div className="mb-6">
          <AdComponent size="banner" />
        </div>

        {/* Tool Interface */}
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Language Selector */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Language
              </label>
              <div className="flex gap-2">
                {['javascript', 'css', 'html'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`flex-1 px-4 py-2 font-medium rounded-lg transition-all ${
                      language === lang
                        ? 'bg-primary text-white'
                        : 'bg-bg-secondary text-text-primary hover:bg-border'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Selector */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Mode
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setMode('beautify')}
                  className={`flex-1 px-4 py-2 font-medium rounded-lg transition-all ${
                    mode === 'beautify'
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'bg-bg-secondary text-text-primary hover:bg-border'
                  }`}
                >
                  ✨ Beautify
                </button>
                <button
                  onClick={() => setMode('minify')}
                  className={`flex-1 px-4 py-2 font-medium rounded-lg transition-all ${
                    mode === 'minify'
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'bg-bg-secondary text-text-primary hover:bg-border'
                  }`}
                >
                  🗜️ Minify
                </button>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold text-text-primary">
                Input Code
              </label>
              <button
                onClick={loadSample}
                className="text-sm text-primary hover:underline font-medium"
              >
                Load Sample
              </button>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter ${language.toUpperCase()} code here...`}
              className="w-full h-64 p-4 bg-bg-primary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <div className="text-sm text-text-secondary mt-2">
              {input.length} characters
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={handleFormat}
              disabled={!input}
              className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mode === 'beautify' ? '✨ Beautify' : '🗜️ Minify'}
            </button>
            <button
              onClick={clearAll}
              className="px-6 py-3 bg-bg-secondary text-text-primary font-semibold rounded-lg hover:bg-border transition-all"
            >
              🗑️ Clear
            </button>
          </div>

          {/* Output */}
          {output && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-text-primary">
                  Output Code
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className={`px-4 py-2 font-medium rounded-lg transition-all text-sm ${
                      isCopied('output')
                        ? 'bg-green-500 text-white'
                        : 'bg-primary text-white hover:opacity-90'
                    }`}
                  >
                    {isCopied('output') ? '✅ Copied!' : '📋 Copy'}
                  </button>
                  <button
                    onClick={downloadCode}
                    className="px-4 py-2 bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-all text-sm"
                  >
                    📥 Download
                  </button>
                </div>
              </div>
              <textarea
                value={output}
                readOnly
                className="w-full h-64 p-4 bg-bg-secondary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none resize-none"
              />
              <div className="flex justify-between text-sm text-text-secondary mt-2">
                <span>{output.length} characters</span>
                {mode === 'minify' && input.length > 0 && (
                  <span className="text-green-500 font-semibold">
                    Reduced by {Math.round((1 - output.length / input.length) * 100)}%
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Ad Placement - After Tool */}
        <div className="my-8">
          <AdComponent size="leaderboard" />
        </div>

        {/* SEO Content */}
        <div className="mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Why Minify and Beautify Code?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Code minification and beautification are essential practices in web development. Minification reduces file 
            sizes for faster loading times and better performance, while beautification makes code readable and 
            maintainable for developers.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            Benefits of Code Minification
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Faster Loading:</strong> Smaller files load faster, improving user experience</li>
            <li><strong>Reduced Bandwidth:</strong> Less data transfer saves hosting costs</li>
            <li><strong>Better SEO:</strong> Google favors fast-loading websites</li>
            <li><strong>Improved Performance:</strong> Faster parsing and execution by browsers</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            When to Use Beautification
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li>Making minified code readable for debugging</li>
            <li>Formatting messy or inconsistent code</li>
            <li>Improving code maintainability in development</li>
            <li>Code review and collaboration</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card-bg rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-text-primary mb-2">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </ToolLayout>
    </>
  )
}
