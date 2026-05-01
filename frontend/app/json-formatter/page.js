'use client'

import { useState } from 'react'
import Link from 'next/link'
import ToolLayout from '@/components/ToolLayout'
import { formatJSON } from '@/lib/api'
import { formatJSONClient } from '@/lib/client-tools'
import LoadingSpinner from '@/components/LoadingSpinner'
import AdComponent from '@/components/AdComponent'

export default function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleFormat = async () => {
    if (!input.trim()) {
      setError('Please enter JSON data')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      // Use client-side formatting (no backend needed)
      const result = formatJSONClient(input)
      setOutput(result.formatted)
    } catch (err) {
      setError(err.message || 'Failed to format JSON')
      setOutput('')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!output) return
    
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setError('Failed to copy to clipboard')
    }
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
    setError('')
    setCopied(false)
  }

  const loadSample = () => {
    const sample = '{"name":"John Doe","age":30,"email":"john@example.com","address":{"street":"123 Main St","city":"New York","country":"USA"},"hobbies":["reading","coding","gaming"]}'
    setInput(sample)
    setError('')
  }

  const toolFaqs = [
    {
      question: 'What is a JSON formatter?',
      answer: 'A JSON formatter is an online tool that validates, formats, and beautifies JSON data. It adds proper indentation, highlights syntax errors, and makes JSON easier to read and debug.'
    },
    {
      question: 'Is this JSON formatter free to use?',
      answer: 'Yes! Our JSON formatter is 100% free with no limitations. You can format unlimited JSON data without any registration or payment.'
    },
    {
      question: 'Does this tool store my JSON data?',
      answer: 'No, we do not store any of your data. All JSON formatting happens in real-time on our servers and is immediately discarded. Your data remains completely private.'
    },
    {
      question: 'Can I format large JSON files?',
      answer: 'Yes, our tool can handle large JSON files efficiently. However, for very large files (over 1MB), processing may take a few seconds.'
    },
    {
      question: 'What JSON errors can this tool detect?',
      answer: 'Our formatter detects common errors including missing commas, trailing commas, unquoted keys, single quotes instead of double quotes, and invalid JSON structure.'
    }
  ]

  return (
    <>
      <ToolLayout 
        title="Free Online JSON Formatter & Validator" 
        description="Format, validate and beautify JSON data instantly. Free JSON formatter with syntax highlighting and error detection."
      >
        {/* Tool Interface */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap gap-3">
            <button
              onClick={handleFormat}
              disabled={loading || !input.trim()}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 disabled:bg-border disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform active:scale-95"
            >
              {loading && <LoadingSpinner size="small" />}
              {loading ? 'Formatting...' : 'Format JSON'}
            </button>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="px-6 py-2 bg-accent text-white rounded-lg hover:opacity-90 disabled:bg-border disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform active:scale-95"
            >
              {copied ? '✓ Copied!' : 'Copy Output'}
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-2 bg-bg-secondary text-text-primary border border-border rounded-lg hover:bg-border transition-all"
            >
              Clear All
            </button>
            <button
              onClick={loadSample}
              className="px-6 py-2 bg-bg-secondary text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-all font-medium"
            >
              Load Sample
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-text-primary">
                Input JSON
                <span className="text-text-secondary ml-2 text-xs">
                  ({input.length} characters)
                </span>
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-96 p-4 bg-bg-secondary border border-border text-text-primary rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                placeholder='{"key": "value", "array": [1, 2, 3]}'
                spellCheck={false}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-text-primary">
                Formatted Output
                {output && (
                  <span className="text-green-500 ml-2 text-xs font-bold">
                    ✓ Valid JSON
                  </span>
                )}
              </label>
              <textarea
                value={output}
                readOnly
                className="w-full h-96 p-4 bg-bg-primary border border-border text-text-primary rounded-lg font-mono text-sm resize-none transition-all"
                placeholder="Formatted JSON will appear here..."
                spellCheck={false}
              />
            </div>
          </div>
          
          {error && (
            <div className="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-lg reveal">
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⚠</span>
                <div>
                  <h3 className="font-semibold text-text-primary">Error</h3>
                  <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-5 bg-bg-secondary rounded-lg border border-border reveal">
            <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span> Quick Tips:
            </h3>
            <ul className="text-sm text-text-secondary space-y-2">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Paste your JSON data in the input field</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Click &quot;Format JSON&quot; to validate and beautify</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Use &quot;Load Sample&quot; to see an example</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Copy the formatted output with one click</li>
            </ul>
          </div>
        </div>

        {/* Ad Placement */}
        <div className="my-8 reveal">
          <AdComponent size="rectangle" />
        </div>

        {/* SEO Content Section */}
        <div className="prose prose-lg max-w-none mt-12 reveal">
          <h2 className="text-3xl font-bold mb-6 text-text-primary">What is a JSON Formatter?</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A JSON formatter is an essential online tool that helps developers format, validate, and beautify JSON (JavaScript Object Notation) data. 
            JSON has become the de facto standard for data exchange in web applications, APIs, and configuration files. However, raw JSON data is 
            often minified or poorly formatted, making it extremely difficult to read, understand, and debug.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Our free JSON formatter tool instantly transforms compressed, minified, or messy JSON into a clean, readable format with proper 
            indentation, syntax highlighting, and structure. Whether you&apos;re debugging API responses, validating configuration files, working with 
            REST APIs, or simply trying to understand complex JSON structures, our formatter makes the process effortless and error-free.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-8 text-text-primary">How to Use the JSON Formatter</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Using our JSON formatter is incredibly simple and requires no technical expertise. Follow these easy steps:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-text-secondary">
            <li>
              <strong className="text-text-primary">Paste Your JSON:</strong> Copy your JSON data from any source (API response, file, database) and paste it into the 
              &quot;Input JSON&quot; text area on the left side.
            </li>
            <li>
              <strong className="text-text-primary">Click Format JSON:</strong> Press the primary button &quot;Format JSON&quot;. Our tool will instantly validate and format your JSON data.
            </li>
            <li>
              <strong className="text-text-primary">View Results:</strong> The formatted, beautified JSON will appear in the &quot;Formatted Output&quot; area on the right side with 
              proper indentation and structure.
            </li>
            <li>
              <strong className="text-text-primary">Copy Output:</strong> Click the &quot;Copy Output&quot; button to copy the formatted JSON to your clipboard for use in your projects.
            </li>
            <li>
              <strong className="text-text-primary">Error Detection:</strong> If your JSON contains syntax errors, our tool will display a clear error message explaining 
              what&apos;s wrong and where the error is located.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mb-6 mt-8 text-text-primary">Key Benefits of Using Our JSON Formatter</h2>
          <ul className="list-disc pl-6 space-y-3 text-text-secondary">
            <li>
              <strong className="text-text-primary">Instant Validation:</strong> Automatically detects and reports JSON syntax errors including missing commas, trailing commas, 
              unquoted keys, and invalid characters.
            </li>
            <li>
              <strong className="text-text-primary">Beautiful Formatting:</strong> Adds proper indentation (2 spaces) and line breaks to make JSON data easy to read and understand.
            </li>
            <li>
              <strong className="text-text-primary">Fast Performance:</strong> Processes JSON data instantly, even for large files up to several megabytes in size.
            </li>
            <li>
              <strong className="text-text-primary">100% Free:</strong> No registration, no payment, no limitations. Format unlimited JSON data completely free.
            </li>
            <li>
              <strong className="text-text-primary">Privacy Guaranteed:</strong> All processing happens in your browser and data is treated securely. We never store 
              or log your JSON data.
            </li>
            <li>
              <strong className="text-text-primary">Copy to Clipboard:</strong> One-click copy functionality to quickly use formatted JSON in your projects.
            </li>
            <li>
              <strong className="text-text-primary">Sample Data:</strong> Load example JSON to see how the tool works before using your own data.
            </li>
            <li>
              <strong className="text-text-primary">Mobile Friendly:</strong> Works perfectly on desktop, tablet, and mobile devices.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-8 text-text-primary">Common JSON Errors We Detect</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Our JSON formatter automatically detects and reports these common errors:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            <li>Missing commas between key-value pairs or array elements</li>
            <li>Trailing commas after the last element (not allowed in JSON)</li>
            <li>Single quotes instead of double quotes (JSON requires double quotes)</li>
            <li>Unquoted keys (all keys must be in double quotes)</li>
            <li>Invalid escape sequences in strings</li>
            <li>Unclosed brackets, braces, or quotes</li>
            <li>Invalid characters or control characters</li>
          </ul>

          {/* Internal Links */}
          <div className="mt-12 p-8 bg-bg-secondary rounded-2xl border border-border reveal">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Try Our Other Free Tools</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/password-generator" className="group block p-6 bg-card-bg rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary transition-all hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform">🔐</span>
                  <h4 className="font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                    Password Generator
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed">Generate cryptographically secure passwords with custom options</p>
                <div className="mt-4 text-primary font-bold inline-flex items-center gap-1">Use Tool →</div>
              </Link>
              <Link href="/image-converter" className="group block p-6 bg-card-bg rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary transition-all hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform">🖼️</span>
                  <h4 className="font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                    Image Converter
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed">Convert images between PNG, JPG, WebP, and GIF formats</p>
                <div className="mt-4 text-primary font-bold inline-flex items-center gap-1">Use Tool →</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 reveal">
          <h2 className="text-3xl font-bold mb-8 text-text-primary text-center">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {toolFaqs.map((faq, index) => (
              <div key={index} className="bg-card-bg rounded-xl shadow-md p-6 border border-border hover:border-primary hover:shadow-lg transition-all group">
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Blog Posts */}
        <div className="mt-16 p-8 bg-bg-secondary border border-border rounded-2xl reveal">
          <h3 className="text-2xl font-bold mb-6 text-text-primary flex items-center gap-2">
            📚 Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-to-fix-json-errors" className="flex items-center p-4 bg-card-bg rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group">
              <span className="text-primary font-bold mr-3 group-hover:mr-4 transition-all">→</span>
              <span className="text-text-primary font-semibold">How to Fix Common JSON Errors</span>
            </Link>
            <Link href="/blog" className="flex items-center p-4 bg-card-bg rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group">
              <span className="text-primary font-bold mr-3 group-hover:mr-4 transition-all">→</span>
              <span className="text-text-primary font-semibold">View All Developer Tutorials</span>
            </Link>
          </div>
        </div>
      </ToolLayout>
    </>
  )
}
