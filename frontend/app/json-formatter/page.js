'use client'

import { useState } from 'react'
import Link from 'next/link'
import ToolLayout from '@/components/ToolLayout'
import { formatJSON } from '@/lib/api'
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
      const result = await formatJSON(input)
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
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {loading && <LoadingSpinner size="small" />}
              {loading ? 'Formatting...' : 'Format JSON'}
            </button>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {copied ? '✓ Copied!' : 'Copy Output'}
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={loadSample}
              className="px-6 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
            >
              Load Sample
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Input JSON
                <span className="text-gray-400 ml-2 text-xs">
                  ({input.length} characters)
                </span>
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder='&#123;&quot;key&quot;: &quot;value&quot;, &quot;array&quot;: [1, 2, 3]&#125;'
                spellCheck={false}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Formatted Output
                {output && (
                  <span className="text-green-600 ml-2 text-xs">
                    ✓ Valid JSON
                  </span>
                )}
              </label>
              <textarea
                value={output}
                readOnly
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none"
                placeholder="Formatted JSON will appear here..."
                spellCheck={false}
              />
            </div>
          </div>
          
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⚠</span>
                <div>
                  <h3 className="font-semibold text-red-800">Error</h3>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Quick Tips:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Paste your JSON data in the input field</li>
              <li>• Click "Format JSON" to validate and beautify</li>
              <li>• Use "Load Sample" to see an example</li>
              <li>• Copy the formatted output with one click</li>
            </ul>
          </div>
        </div>

        {/* Ad Placement */}
        <div className="my-8">
          <AdComponent size="rectangle" />
        </div>

        {/* SEO Content Section */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold mb-6">What is a JSON Formatter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A JSON formatter is an essential online tool that helps developers format, validate, and beautify JSON (JavaScript Object Notation) data. 
            JSON has become the de facto standard for data exchange in web applications, APIs, and configuration files. However, raw JSON data is 
            often minified or poorly formatted, making it extremely difficult to read, understand, and debug.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our free JSON formatter tool instantly transforms compressed, minified, or messy JSON into a clean, readable format with proper 
            indentation, syntax highlighting, and structure. Whether you're debugging API responses, validating configuration files, working with 
            REST APIs, or simply trying to understand complex JSON structures, our formatter makes the process effortless and error-free.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-8">How to Use the JSON Formatter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Using our JSON formatter is incredibly simple and requires no technical expertise. Follow these easy steps:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Paste Your JSON:</strong> Copy your JSON data from any source (API response, file, database) and paste it into the 
              "Input JSON" text area on the left side.
            </li>
            <li>
              <strong>Click Format JSON:</strong> Press the blue "Format JSON" button. Our tool will instantly validate and format your JSON data.
            </li>
            <li>
              <strong>View Results:</strong> The formatted, beautified JSON will appear in the "Formatted Output" area on the right side with 
              proper indentation and structure.
            </li>
            <li>
              <strong>Copy Output:</strong> Click the "Copy Output" button to copy the formatted JSON to your clipboard for use in your projects.
            </li>
            <li>
              <strong>Error Detection:</strong> If your JSON contains syntax errors, our tool will display a clear error message explaining 
              what's wrong and where the error is located.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mb-6 mt-8">Key Benefits of Using Our JSON Formatter</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Instant Validation:</strong> Automatically detects and reports JSON syntax errors including missing commas, trailing commas, 
              unquoted keys, and invalid characters.
            </li>
            <li>
              <strong>Beautiful Formatting:</strong> Adds proper indentation (2 spaces) and line breaks to make JSON data easy to read and understand.
            </li>
            <li>
              <strong>Fast Performance:</strong> Processes JSON data instantly, even for large files up to several megabytes in size.
            </li>
            <li>
              <strong>100% Free:</strong> No registration, no payment, no limitations. Format unlimited JSON data completely free.
            </li>
            <li>
              <strong>Privacy Guaranteed:</strong> All processing happens on our secure servers and data is immediately discarded. We never store 
              or log your JSON data.
            </li>
            <li>
              <strong>Copy to Clipboard:</strong> One-click copy functionality to quickly use formatted JSON in your projects.
            </li>
            <li>
              <strong>Sample Data:</strong> Load example JSON to see how the tool works before using your own data.
            </li>
            <li>
              <strong>Mobile Friendly:</strong> Works perfectly on desktop, tablet, and mobile devices.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-8">Common JSON Errors We Detect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our JSON formatter automatically detects and reports these common errors:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Missing commas between key-value pairs or array elements</li>
            <li>Trailing commas after the last element (not allowed in JSON)</li>
            <li>Single quotes instead of double quotes (JSON requires double quotes)</li>
            <li>Unquoted keys (all keys must be in double quotes)</li>
            <li>Invalid escape sequences in strings</li>
            <li>Unclosed brackets, braces, or quotes</li>
            <li>Invalid characters or control characters</li>
          </ul>

          {/* Internal Links */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold mb-4">Try Our Other Free Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/password-generator" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">🔐 Password Generator</h4>
                <p className="text-sm text-gray-600">Generate cryptographically secure passwords with custom options</p>
              </Link>
              <Link href="/image-converter" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">🖼️ Image Converter</h4>
                <p className="text-sm text-gray-600">Convert images between PNG, JPG, WebP, and GIF formats</p>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {toolFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Blog Posts */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">📚 Related Articles</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/how-to-fix-json-errors" className="text-blue-600 hover:underline font-medium">
                → How to Fix Common JSON Errors - Complete Guide
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline font-medium">
                → View All Developer Tutorials
              </Link>
            </li>
          </ul>
        </div>
      </ToolLayout>
    </>
  )
}
