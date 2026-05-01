'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function Base64Converter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode') // 'encode' or 'decode'
  const [fileMode, setFileMode] = useState(false)
  const [error, setError] = useState('')
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const handleEncode = () => {
    try {
      setError('')
      const encoded = btoa(unescape(encodeURIComponent(input)))
      setOutput(encoded)
    } catch (err) {
      setError('Error encoding text. Please check your input.')
    }
  }

  const handleDecode = () => {
    try {
      setError('')
      const decoded = decodeURIComponent(escape(atob(input)))
      setOutput(decoded)
    } catch (err) {
      setError('Invalid Base64 string. Please check your input.')
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64 = event.target.result.split(',')[1]
      setOutput(base64)
    }
    reader.readAsDataURL(file)
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
    setError('')
  }

  const loadSample = () => {
    if (mode === 'encode') {
      setInput('Hello, World! This is a sample text for Base64 encoding.')
    } else {
      setInput('SGVsbG8sIFdvcmxkISBUaGlzIGlzIGEgc2FtcGxlIHRleHQgZm9yIEJhc2U2NCBlbmNvZGluZy4=')
    }
  }

  const faqs = [
    {
      question: 'What is Base64 encoding?',
      answer: 'Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It\'s commonly used to encode data for transmission over text-based protocols.'
    },
    {
      question: 'When should I use Base64 encoding?',
      answer: 'Use Base64 for embedding images in HTML/CSS, encoding data in URLs, storing binary data in JSON/XML, or transmitting binary data over text-only channels.'
    },
    {
      question: 'Is Base64 encryption?',
      answer: 'No, Base64 is encoding, not encryption. It\'s easily reversible and provides no security. Use proper encryption for sensitive data.'
    },
    {
      question: 'Can I encode files to Base64?',
      answer: 'Yes! Switch to file mode to upload and convert files (images, documents, etc.) to Base64 format.'
    }
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <ToolLayout
        title="Free Base64 Encoder & Decoder Online - Convert Text & Files"
        description="Encode and decode Base64 strings instantly. Convert text, images, and files to Base64 format. Free, fast, and secure Base64 conversion tool."
        icon="🔤"
      >
        <Breadcrumb 
          items={[
            { label: 'Base64 Converter', href: '/base64-converter' }
          ]} 
        />

        {/* Ad Placement - Above Tool */}
        <div className="mb-6">
          <AdComponent size="banner" />
        </div>

        {/* Tool Interface */}
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          {/* Mode Selector */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => { setMode('encode'); setError(''); setOutput('') }}
              className={`flex-1 sm:flex-none px-6 py-3 font-semibold rounded-lg transition-all ${
                mode === 'encode'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                  : 'bg-bg-secondary text-text-primary hover:bg-border'
              }`}
            >
              ⬆️ Encode
            </button>
            <button
              onClick={() => { setMode('decode'); setError(''); setOutput('') }}
              className={`flex-1 sm:flex-none px-6 py-3 font-semibold rounded-lg transition-all ${
                mode === 'decode'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                  : 'bg-bg-secondary text-text-primary hover:bg-border'
              }`}
            >
              ⬇️ Decode
            </button>
            <button
              onClick={() => setFileMode(!fileMode)}
              className={`flex-1 sm:flex-none px-6 py-3 font-semibold rounded-lg transition-all ${
                fileMode
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-bg-secondary text-text-primary hover:bg-border'
              }`}
            >
              📁 {fileMode ? 'Text Mode' : 'File Mode'}
            </button>
          </div>

          {/* File Upload Mode */}
          {fileMode && mode === 'encode' ? (
            <div className="mb-6">
              <label className="block text-lg font-semibold text-text-primary mb-3">
                Upload File to Encode
              </label>
              <label className="cursor-pointer block">
                <div className="border-2 border-dashed border-border hover:border-primary rounded-lg p-8 text-center transition-all hover:bg-bg-secondary">
                  <div className="text-5xl mb-3">📄</div>
                  <p className="text-text-primary font-medium mb-1">
                    Click to upload file
                  </p>
                  <p className="text-sm text-text-secondary">
                    Any file type supported
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          ) : (
            <>
              {/* Input Textarea */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold text-text-primary">
                    {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
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
                  placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string to decode...'}
                  className="w-full h-48 p-4 bg-bg-primary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <div className="text-sm text-text-secondary mt-2">
                  {input.length} characters
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={handleConvert}
                  disabled={!input}
                  className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
            </>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg">
              <p className="text-red-500 font-medium">❌ {error}</p>
            </div>
          )}

          {/* Output */}
          {output && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-text-primary">
                  {mode === 'encode' ? 'Encoded Base64' : 'Decoded Text'}
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
                className="w-full h-48 p-4 bg-bg-secondary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none resize-none"
              />
              <div className="text-sm text-text-secondary mt-2">
                {output.length} characters
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
            What is Base64 Encoding?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Base64 is a binary-to-text encoding scheme that converts binary data into ASCII text format. 
            It uses 64 different ASCII characters (A-Z, a-z, 0-9, +, /) to represent binary data, making it 
            safe for transmission over text-based protocols like email, JSON, or XML.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            Common Use Cases for Base64
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Embedding Images:</strong> Encode images directly in HTML or CSS using data URIs</li>
            <li><strong>API Data Transfer:</strong> Send binary data through JSON APIs</li>
            <li><strong>Email Attachments:</strong> Encode files for MIME email transmission</li>
            <li><strong>Data Storage:</strong> Store binary data in text-based databases</li>
            <li><strong>URL Parameters:</strong> Safely pass binary data in URLs</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            How to Use This Tool
          </h2>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Choose Encode or Decode mode</li>
            <li>For text: Enter your text or Base64 string</li>
            <li>For files: Switch to File Mode and upload your file</li>
            <li>Click the convert button to process</li>
            <li>Copy the result to your clipboard</li>
          </ol>
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
