'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function URLEncoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const handleEncode = () => {
    try {
      setOutput(encodeURIComponent(input))
    } catch (err) {
      alert('Error encoding URL')
    }
  }

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input))
    } catch (err) {
      alert('Error decoding URL')
    }
  }

  const handleConvert = () => {
    if (mode === 'encode') {
      handleEncode()
    } else {
      handleDecode()
    }
  }

  const handleCopy = () => {
    copyToClipboard(output, 'output')
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
  }

  const loadSample = () => {
    if (mode === 'encode') {
      setInput('https://example.com/search?q=hello world&lang=en')
    } else {
      setInput('https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world%26lang%3Den')
    }
  }

  return (
    <ToolLayout
      title="Free URL Encoder & Decoder Online - Encode URLs Instantly | DevTools Hub"
      description="Encode and decode URLs online for free. Convert special characters for safe URL transmission. Fast, secure URL encoding tool."
      icon="🔗"
    >
      <Breadcrumb 
        items={[
          { label: 'URL Encoder', href: '/url-encoder' }
        ]} 
      />

      <div className="mb-6">
        <AdComponent size="banner" />
      </div>

      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => { setMode('encode'); setOutput('') }}
            className={`flex-1 px-6 py-3 font-semibold rounded-lg transition-all ${
              mode === 'encode'
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                : 'bg-bg-secondary text-text-primary hover:bg-border'
            }`}
          >
            ⬆️ Encode
          </button>
          <button
            onClick={() => { setMode('decode'); setOutput('') }}
            className={`flex-1 px-6 py-3 font-semibold rounded-lg transition-all ${
              mode === 'decode'
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                : 'bg-bg-secondary text-text-primary hover:bg-border'
            }`}
          >
            ⬇️ Decode
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <label className="text-lg font-semibold text-text-primary">
              {mode === 'encode' ? 'URL to Encode' : 'URL to Decode'}
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
            placeholder={mode === 'encode' ? 'Enter URL to encode...' : 'Enter encoded URL to decode...'}
            className="w-full h-32 p-4 bg-bg-primary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleConvert}
            disabled={!input}
            className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mode === 'encode' ? '⬆️ Encode' : '⬇️ Decode'}
          </button>
          <button
            onClick={clearAll}
            className="px-6 py-3 bg-bg-secondary text-text-primary font-semibold rounded-lg hover:bg-border transition-all"
          >
            🗑️ Clear
          </button>
        </div>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold text-text-primary">
                {mode === 'encode' ? 'Encoded URL' : 'Decoded URL'}
              </label>
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
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full h-32 p-4 bg-bg-secondary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none resize-none"
            />
          </div>
        )}
      </div>

      <div className="my-8">
        <AdComponent size="leaderboard" />
      </div>

      <div className="mt-8 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          What is URL Encoding?
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          URL encoding (also called percent-encoding) converts special characters in URLs into a format that can be 
          transmitted over the internet. Special characters like spaces, ampersands, and non-ASCII characters are 
          converted to % followed by hexadecimal values.
        </p>

        <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
          When to Use URL Encoding
        </h2>
        <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
          <li><strong>Query Parameters:</strong> Encode values in URL query strings</li>
          <li><strong>Special Characters:</strong> Handle spaces, &, =, ?, # in URLs</li>
          <li><strong>API Requests:</strong> Properly format URLs for API calls</li>
          <li><strong>Form Data:</strong> Encode form submissions in URLs</li>
        </ul>
      </div>
    </ToolLayout>
  )
}
