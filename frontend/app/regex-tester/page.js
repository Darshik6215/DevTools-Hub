'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState('\\d{3}-\\d{3}-\\d{4}')
  const [testString, setTestString] = useState('Call me at 555-123-4567 or 555-987-6543')
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false, u: false })
  const [matches, setMatches] = useState([])
  const [error, setError] = useState('')
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  useEffect(() => {
    testRegex()
  }, [pattern, testString, flags])

  const testRegex = () => {
    if (!pattern) {
      setMatches([])
      setError('')
      return
    }

    try {
      const flagString = Object.keys(flags).filter(key => flags[key]).join('')
      const regex = new RegExp(pattern, flagString)
      
      if (flags.g) {
        const allMatches = [...testString.matchAll(regex)]
        setMatches(allMatches.map((match, index) => ({
          match: match[0],
          index: match.index,
          groups: match.slice(1),
          id: index
        })))
      } else {
        const match = testString.match(regex)
        if (match) {
          setMatches([{
            match: match[0],
            index: match.index,
            groups: match.slice(1),
            id: 0
          }])
        } else {
          setMatches([])
        }
      }
      setError('')
    } catch (err) {
      setError(err.message)
      setMatches([])
    }
  }

  const handleClear = () => {
    setPattern('')
    setTestString('')
    setMatches([])
    setError('')
  }

  const highlightMatches = () => {
    if (!matches.length || !testString) return testString

    let result = []
    let lastIndex = 0

    matches.forEach((match, idx) => {
      result.push(testString.substring(lastIndex, match.index))
      result.push(
        <span key={idx} className="bg-accent/30 text-accent font-bold border-b-2 border-accent">
          {match.match}
        </span>
      )
      lastIndex = match.index + match.match.length
    })
    result.push(testString.substring(lastIndex))

    return result
  }

  const commonPatterns = [
    { name: 'Email', pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}' },
    { name: 'Phone (US)', pattern: '\\d{3}-\\d{3}-\\d{4}' },
    { name: 'URL', pattern: 'https?://[^\\s]+' },
    { name: 'IP Address', pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b' },
    { name: 'Date (YYYY-MM-DD)', pattern: '\\d{4}-\\d{2}-\\d{2}' },
    { name: 'Hex Color', pattern: '#[0-9A-Fa-f]{6}' },
  ]

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test and debug regular expressions with real-time pattern matching"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Pattern Input */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">
            Regular Expression Pattern
          </label>
          <div className="flex items-center gap-2 bg-bg-secondary rounded-lg p-3 border border-border">
            <span className="text-text-secondary font-mono">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter regex pattern..."
              className="flex-1 bg-transparent text-text-primary font-mono outline-none"
            />
            <span className="text-text-secondary font-mono">/</span>
            <div className="flex gap-1">
              {Object.keys(flags).map(flag => (
                <button
                  key={flag}
                  onClick={() => setFlags({ ...flags, [flag]: !flags[flag] })}
                  className={`px-2 py-1 rounded font-mono text-sm transition-colors ${
                    flags[flag] 
                      ? 'bg-primary text-white' 
                      : 'bg-bg-primary text-text-secondary hover:bg-border'
                  }`}
                  title={getFlagTitle(flag)}
                >
                  {flag}
                </button>
              ))}
            </div>
          </div>
          {error && (
            <p className="mt-2 text-red-500 text-sm">❌ {error}</p>
          )}
        </div>

        {/* Common Patterns */}
        <div className="mb-6">
          <label className="block text-text-secondary text-sm mb-2">Quick Patterns:</label>
          <div className="flex flex-wrap gap-2">
            {commonPatterns.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setPattern(item.pattern)}
                className="px-3 py-1 bg-bg-secondary hover:bg-border text-text-primary text-sm rounded-lg transition-colors border border-border"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Test String Input */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">
            Test String
          </label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Enter text to test against your regex pattern..."
            rows={6}
            className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
          />
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-text-primary font-semibold">
              Matches: {matches.length}
            </label>
            {matches.length > 0 && (
              <span className="text-green-500 text-sm">✅ Pattern matched!</span>
            )}
          </div>
          <div className="bg-bg-secondary rounded-lg p-4 border border-border min-h-[100px]">
            <pre className="text-text-primary font-mono text-sm whitespace-pre-wrap break-words">
              {highlightMatches()}
            </pre>
          </div>
        </div>

        {/* Match Details */}
        {matches.length > 0 && (
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              Match Details
            </label>
            <div className="space-y-2">
              {matches.map((match, idx) => (
                <div key={idx} className="bg-bg-secondary rounded-lg p-3 border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-text-secondary text-sm">Match #{idx + 1}</span>
                    <button
                      onClick={() => copyToClipboard(match.match)}
                      className="text-primary hover:text-primary-hover text-sm transition-colors"
                    >
                      {copyStatus === match.match ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                  <p className="text-text-primary font-mono text-sm">
                    <span className="text-accent font-bold">{match.match}</span>
                    <span className="text-text-secondary ml-2">at position {match.index}</span>
                  </p>
                  {match.groups.length > 0 && (
                    <p className="text-text-secondary text-xs mt-1">
                      Groups: {match.groups.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleClear}
            className="px-6 py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border font-medium"
          >
            🗑️ Clear All
          </button>
          {matches.length > 0 && (
            <button
              onClick={() => copyToClipboard(matches.map(m => m.match).join('\n'))}
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium shadow-lg"
            >
              {copyStatus ? '✅ Copied!' : '📋 Copy All Matches'}
            </button>
          )}
        </div>
      </div>

      {/* Middle Ad */}
      <div className="my-8">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose prose-invert max-w-none">
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is a Regex Tester?</h2>
          <p className="text-text-secondary mb-4">
            A Regex Tester (Regular Expression Tester) is an online tool that helps developers test, debug, and validate regular expression patterns. 
            It provides real-time feedback on pattern matching, highlights matches in your test string, and helps you understand how your regex works.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the Regex Tester</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Enter your regular expression pattern in the pattern field</li>
            <li>Select regex flags (g=global, i=case-insensitive, m=multiline, s=dotAll, u=unicode)</li>
            <li>Enter or paste your test string in the test area</li>
            <li>View real-time matches highlighted in the results</li>
            <li>Check match details including position and captured groups</li>
            <li>Copy individual matches or all matches at once</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Regex Flags Explained</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">g (global):</strong> Find all matches, not just the first one</li>
            <li><strong className="text-text-primary">i (case-insensitive):</strong> Ignore case when matching</li>
            <li><strong className="text-text-primary">m (multiline):</strong> ^ and $ match start/end of lines</li>
            <li><strong className="text-text-primary">s (dotAll):</strong> . matches newline characters</li>
            <li><strong className="text-text-primary">u (unicode):</strong> Enable full Unicode support</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our Regex Tester</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Real-time pattern matching with instant feedback</li>
            <li>✅ Syntax highlighting for easy visualization</li>
            <li>✅ Detailed match information including position and groups</li>
            <li>✅ Common regex patterns for quick testing</li>
            <li>✅ Support for all JavaScript regex flags</li>
            <li>✅ Copy matches with one click</li>
            <li>✅ No installation required - works in your browser</li>
            <li>✅ Free and unlimited usage</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <p className="text-text-secondary mb-2">
            Regular expressions are essential for:
          </p>
          <ul className="text-text-secondary space-y-2">
            <li>📧 Email validation and extraction</li>
            <li>📱 Phone number formatting and validation</li>
            <li>🔗 URL parsing and validation</li>
            <li>🔍 Text search and replace operations</li>
            <li>✅ Input validation in forms</li>
            <li>📊 Data extraction from logs and files</li>
            <li>🎨 Pattern matching in code editors</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/text-diff" className="text-primary hover:text-primary-hover transition-colors">
            → Text Diff Checker
          </Link>
          <Link href="/json-formatter" className="text-primary hover:text-primary-hover transition-colors">
            → JSON Formatter
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

function getFlagTitle(flag) {
  const titles = {
    g: 'Global - Find all matches',
    i: 'Case-insensitive',
    m: 'Multiline - ^ and $ match line boundaries',
    s: 'DotAll - . matches newlines',
    u: 'Unicode - Full Unicode support'
  }
  return titles[flag] || flag
}
