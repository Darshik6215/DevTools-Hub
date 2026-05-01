'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function APITesterPage() {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('')
  const [headers, setHeaders] = useState([{ key: '', value: '' }])
  const [body, setBody] = useState('')
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }])
  }

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index))
  }

  const updateHeader = (index, field, value) => {
    const newHeaders = [...headers]
    newHeaders[index][field] = value
    setHeaders(newHeaders)
  }

  const sendRequest = async () => {
    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }

    setLoading(true)
    setError('')
    setResponse(null)

    const startTime = Date.now()

    try {
      // Build headers object
      const requestHeaders = {}
      headers.forEach(header => {
        if (header.key && header.value) {
          requestHeaders[header.key] = header.value
        }
      })

      // Build request options
      const options = {
        method,
        headers: requestHeaders,
      }

      // Add body for methods that support it
      if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
        options.body = body
        if (!requestHeaders['Content-Type']) {
          options.headers['Content-Type'] = 'application/json'
        }
      }

      const res = await fetch(url, options)
      const endTime = Date.now()
      const duration = endTime - startTime

      // Get response headers
      const responseHeaders = {}
      res.headers.forEach((value, key) => {
        responseHeaders[key] = value
      })

      // Get response body
      const contentType = res.headers.get('content-type')
      let responseBody
      
      if (contentType && contentType.includes('application/json')) {
        responseBody = await res.json()
      } else {
        responseBody = await res.text()
      }

      setResponse({
        status: res.status,
        statusText: res.statusText,
        headers: responseHeaders,
        body: responseBody,
        duration,
        size: JSON.stringify(responseBody).length,
      })
    } catch (err) {
      setError(err.message || 'Request failed')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setUrl('')
    setHeaders([{ key: '', value: '' }])
    setBody('')
    setResponse(null)
    setError('')
  }

  const loadExample = () => {
    setMethod('GET')
    setUrl('https://jsonplaceholder.typicode.com/posts/1')
    setHeaders([{ key: 'Accept', value: 'application/json' }])
    setBody('')
  }

  const formatJSON = (obj) => {
    try {
      return JSON.stringify(obj, null, 2)
    } catch {
      return obj
    }
  }

  return (
    <ToolLayout
      title="API Tester"
      description="Test REST APIs with custom headers and request body"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Request Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-text-primary">Request</h3>
            <button
              onClick={loadExample}
              className="text-primary hover:text-primary-hover text-sm transition-colors"
            >
              Load Example
            </button>
          </div>

          {/* Method and URL */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex gap-2">
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-medium min-w-[100px]"
              >
                {methods.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <button
                onClick={sendRequest}
                disabled={loading}
                className="flex-1 sm:hidden px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⏳' : '🚀 Send'}
              </button>
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://api.example.com/endpoint"
              className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none w-full"
            />
            <button
              onClick={sendRequest}
              disabled={loading}
              className="hidden sm:block px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Sending...' : '🚀 Send'}
            </button>
          </div>

          {/* Headers */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-text-primary font-semibold">Headers</label>
              <button
                onClick={addHeader}
                className="text-primary hover:text-primary-hover text-sm transition-colors"
              >
                + Add Header
              </button>
            </div>
            <div className="space-y-2">
              {headers.map((header, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2 bg-bg-secondary/50 p-3 sm:p-0 rounded-lg sm:bg-transparent border border-border sm:border-none">
                  <div className="flex gap-2 flex-1">
                    <input
                      type="text"
                      value={header.key}
                      onChange={(e) => updateHeader(index, 'key', e.target.value)}
                      placeholder="Header name"
                      className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-3 py-2 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    />
                    <button
                      onClick={() => removeHeader(index)}
                      className="sm:hidden px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    type="text"
                    value={header.value}
                    onChange={(e) => updateHeader(index, 'value', e.target.value)}
                    placeholder="Header value"
                    className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-3 py-2 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                  <button
                    onClick={() => removeHeader(index)}
                    className="hidden sm:block px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          {['POST', 'PUT', 'PATCH'].includes(method) && (
            <div className="mb-4">
              <label className="block text-text-primary font-semibold mb-2">Request Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='{"key": "value"}'
                rows={8}
                className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleClear}
              className="px-6 py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border font-medium"
            >
              🗑️ Clear
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400">❌ {error}</p>
          </div>
        )}

        {/* Response Section */}
        {response && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-text-primary">Response</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className={`px-3 py-1 rounded-full font-medium ${
                  response.status >= 200 && response.status < 300
                    ? 'bg-green-500/20 text-green-400'
                    : response.status >= 400
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {response.status} {response.statusText}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-text-secondary whitespace-nowrap">⏱️ {response.duration}ms</span>
                  <span className="text-text-secondary whitespace-nowrap">📦 {response.size} bytes</span>
                </div>
              </div>
            </div>

            {/* Response Headers */}
            <div className="mb-4">
              <label className="block text-text-primary font-semibold mb-2">Response Headers</label>
              <div className="bg-bg-secondary rounded-lg p-4 border border-border max-h-48 overflow-y-auto">
                <pre className="text-text-primary font-mono text-xs">
                  {formatJSON(response.headers)}
                </pre>
              </div>
            </div>

            {/* Response Body */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-text-primary font-semibold">Response Body</label>
                <button
                  onClick={() => copyToClipboard(typeof response.body === 'string' ? response.body : formatJSON(response.body))}
                  className="text-primary hover:text-primary-hover text-sm transition-colors"
                >
                  {copyStatus ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4 border border-border max-h-96 overflow-y-auto">
                <pre className="text-text-primary font-mono text-sm whitespace-pre-wrap break-words">
                  {typeof response.body === 'string' ? response.body : formatJSON(response.body)}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Middle Ad */}
      <div className="my-8">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose prose-invert max-w-none">
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is an API Tester?</h2>
          <p className="text-text-secondary mb-4">
            An API Tester (also called REST API client or HTTP client) is a tool that allows developers to test and debug APIs by sending HTTP requests 
            and viewing responses. It's similar to Postman but runs entirely in your browser without requiring installation. You can test GET, POST, PUT, 
            DELETE, and other HTTP methods with custom headers and request bodies.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the API Tester</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Select the HTTP method (GET, POST, PUT, DELETE, etc.)</li>
            <li>Enter the API endpoint URL</li>
            <li>Add custom headers if needed (Authorization, Content-Type, etc.)</li>
            <li>For POST/PUT/PATCH requests, add a request body (JSON, XML, etc.)</li>
            <li>Click "Send" to execute the request</li>
            <li>View the response status, headers, and body</li>
            <li>Copy the response or use it for debugging</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">HTTP Methods Explained</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">GET:</strong> Retrieve data from the server (read-only)</li>
            <li><strong className="text-text-primary">POST:</strong> Send data to create a new resource</li>
            <li><strong className="text-text-primary">PUT:</strong> Update an existing resource completely</li>
            <li><strong className="text-text-primary">PATCH:</strong> Partially update an existing resource</li>
            <li><strong className="text-text-primary">DELETE:</strong> Remove a resource from the server</li>
            <li><strong className="text-text-primary">HEAD:</strong> Get headers only (no body)</li>
            <li><strong className="text-text-primary">OPTIONS:</strong> Check which methods are supported</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our API Tester</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ No installation required - works in your browser</li>
            <li>✅ Test APIs instantly without authentication setup</li>
            <li>✅ Support for all HTTP methods</li>
            <li>✅ Custom headers and request body</li>
            <li>✅ View formatted JSON responses</li>
            <li>✅ Response time and size metrics</li>
            <li>✅ Copy responses with one click</li>
            <li>✅ Free and unlimited usage</li>
            <li>✅ Privacy-friendly - requests from your browser</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <ul className="text-text-secondary space-y-2">
            <li>🔍 Test REST API endpoints during development</li>
            <li>🐛 Debug API integration issues</li>
            <li>📊 Verify API responses and status codes</li>
            <li>🔐 Test authentication and authorization</li>
            <li>⚡ Check API performance and response times</li>
            <li>📝 Document API behavior</li>
            <li>🎓 Learn how APIs work</li>
            <li>🔧 Quick API testing without Postman</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Headers</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">Content-Type:</strong> application/json, application/xml, text/plain</li>
            <li><strong className="text-text-primary">Authorization:</strong> Bearer token, Basic auth, API key</li>
            <li><strong className="text-text-primary">Accept:</strong> application/json, application/xml</li>
            <li><strong className="text-text-primary">User-Agent:</strong> Identify your client application</li>
            <li><strong className="text-text-primary">Cache-Control:</strong> no-cache, max-age=3600</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Tips for API Testing</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📌 Always check the API documentation first</li>
            <li>📌 Use proper Content-Type headers for JSON/XML</li>
            <li>📌 Test error cases (404, 500, etc.)</li>
            <li>📌 Verify response status codes</li>
            <li>📌 Check response times for performance</li>
            <li>📌 Use example endpoints to learn (jsonplaceholder.typicode.com)</li>
            <li>📌 Save common requests for reuse</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/json-formatter" className="text-primary hover:text-primary-hover transition-colors">
            → JSON Formatter
          </Link>
          <Link href="/jwt-decoder" className="text-primary hover:text-primary-hover transition-colors">
            → JWT Decoder
          </Link>
          <Link href="/base64-converter" className="text-primary hover:text-primary-hover transition-colors">
            → Base64 Converter
          </Link>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="mt-8">
        <AdComponent size="leaderboard" />
      </div>
    </ToolLayout>
  )
}
