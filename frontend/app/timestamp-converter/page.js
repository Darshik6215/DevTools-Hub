'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function TimestampConverter() {
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [unixInput, setUnixInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [convertedResult, setConvertedResult] = useState('')
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const unixToHuman = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000)
    return {
      full: date.toString(),
      iso: date.toISOString(),
      utc: date.toUTCString(),
      local: date.toLocaleString(),
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    }
  }

  const humanToUnix = (dateString) => {
    const date = new Date(dateString)
    return Math.floor(date.getTime() / 1000)
  }

  const handleUnixConvert = () => {
    if (!unixInput) return
    const result = unixToHuman(unixInput)
    setConvertedResult(JSON.stringify(result, null, 2))
  }

  const handleDateConvert = () => {
    if (!dateInput) return
    const result = humanToUnix(dateInput)
    setConvertedResult(`Unix Timestamp: ${result}`)
  }

  const handleCopyResult = () => {
    copyToClipboard(convertedResult, 'result')
  }

  const handleCopyUnix = (unix) => {
    copyToClipboard(unix.toString(), 'unix')
  }

  const currentUnix = Math.floor(currentTime / 1000)
  const currentDate = new Date(currentTime)

  const faqs = [
    {
      question: 'What is a Unix timestamp?',
      answer: 'A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (Unix epoch). It\'s a universal way to represent time across different systems.'
    },
    {
      question: 'Why use Unix timestamps?',
      answer: 'Unix timestamps are timezone-independent, easy to store and compare, and universally understood by programming languages and databases.'
    },
    {
      question: 'How do I convert Unix time to readable date?',
      answer: 'Enter your Unix timestamp in the converter above and click convert. You\'ll get multiple date formats including ISO, UTC, and local time.'
    },
    {
      question: 'What\'s the difference between seconds and milliseconds?',
      answer: 'Unix timestamps are typically in seconds. JavaScript uses milliseconds (multiply by 1000). Our tool handles both automatically.'
    }
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <ToolLayout
        title="Free Unix Timestamp Converter - Convert Unix Time to Date Online"
        description="Convert Unix timestamp to human-readable date and vice versa. Free online timestamp converter with multiple date formats. Fast, accurate, and easy to use."
        icon="⏰"
      >
        <Breadcrumb 
          items={[
            { label: 'Timestamp Converter', href: '/timestamp-converter' }
          ]} 
        />

        {/* Ad Placement - Above Tool */}
        <div className="mb-6">
          <AdComponent size="banner" />
        </div>

        {/* Current Time Display */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg p-6 md:p-8 text-white mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Current Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="text-sm opacity-80 mb-1">Unix Timestamp</div>
              <div className="text-3xl font-bold font-mono">{currentUnix}</div>
              <button
                onClick={() => handleCopyUnix(currentUnix)}
                className={`mt-2 text-sm px-3 py-1 rounded transition-all ${
                  isCopied('unix')
                    ? 'bg-green-500/30 text-green-200'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {isCopied('unix') ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="text-sm opacity-80 mb-1">Human Readable</div>
              <div className="text-xl font-semibold">{currentDate.toLocaleString()}</div>
              <div className="text-sm opacity-80 mt-1">{currentDate.toUTCString()}</div>
            </div>
          </div>
        </div>

        {/* Converter Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Unix to Human */}
          <div className="bg-card-bg rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Unix → Human Readable
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Unix Timestamp (seconds)
                </label>
                <input
                  type="text"
                  value={unixInput}
                  onChange={(e) => setUnixInput(e.target.value)}
                  placeholder="e.g., 1640000000"
                  className="w-full p-3 bg-bg-primary border border-border rounded-lg text-text-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                onClick={handleUnixConvert}
                disabled={!unixInput}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Convert to Date
              </button>
              <button
                onClick={() => setUnixInput(currentUnix.toString())}
                className="w-full px-6 py-3 bg-bg-secondary text-text-primary font-semibold rounded-lg hover:bg-border transition-all"
              >
                Use Current Time
              </button>
            </div>
          </div>

          {/* Human to Unix */}
          <div className="bg-card-bg rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Human Readable → Unix
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full p-3 bg-bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                onClick={handleDateConvert}
                disabled={!dateInput}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Convert to Unix
              </button>
              <button
                onClick={() => {
                  const now = new Date()
                  const formatted = now.toISOString().slice(0, 16)
                  setDateInput(formatted)
                }}
                className="w-full px-6 py-3 bg-bg-secondary text-text-primary font-semibold rounded-lg hover:bg-border transition-all"
              >
                Use Current Time
              </button>
            </div>
          </div>
        </div>

        {/* Result Display */}
        {convertedResult && (
          <div className="bg-card-bg rounded-xl shadow-lg p-6 border border-border mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold text-text-primary">Result</h3>
              <button
                onClick={handleCopyResult}
                className={`px-4 py-2 font-medium rounded-lg transition-all text-sm ${
                  isCopied('result')
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:opacity-90'
                }`}
              >
                {isCopied('result') ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <pre className="bg-bg-primary p-4 rounded-lg text-text-primary font-mono text-sm overflow-x-auto border border-border">
              {convertedResult}
            </pre>
          </div>
        )}

        {/* Ad Placement - After Tool */}
        <div className="my-8">
          <AdComponent size="leaderboard" />
        </div>

        {/* SEO Content */}
        <div className="mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            What is a Unix Timestamp?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A Unix timestamp (also known as Epoch time or POSIX time) is a system for tracking time as a running 
            count of seconds since the Unix Epoch - January 1, 1970, 00:00:00 UTC. It's widely used in programming, 
            databases, and APIs because it's timezone-independent and easy to work with.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            Common Use Cases
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Database Storage:</strong> Store dates as integers for efficient querying</li>
            <li><strong>API Communication:</strong> Exchange time data between systems</li>
            <li><strong>Logging:</strong> Track events with precise timestamps</li>
            <li><strong>Scheduling:</strong> Calculate time differences and intervals</li>
            <li><strong>Caching:</strong> Set expiration times for cached data</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            How to Use This Converter
          </h2>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>To convert Unix to date: Enter timestamp and click "Convert to Date"</li>
            <li>To convert date to Unix: Select date/time and click "Convert to Unix"</li>
            <li>Use "Current Time" buttons to quickly insert the current timestamp</li>
            <li>Copy results to clipboard with one click</li>
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
