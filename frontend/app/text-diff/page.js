'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function TextDiffPage() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [diffResult, setDiffResult] = useState([])
  const [stats, setStats] = useState({ added: 0, removed: 0, unchanged: 0 })
  const [viewMode, setViewMode] = useState('side-by-side') // 'side-by-side' or 'unified'
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  useEffect(() => {
    calculateDiff()
  }, [text1, text2])

  const calculateDiff = () => {
    const lines1 = text1.split('\n')
    const lines2 = text2.split('\n')
    
    const diff = simpleDiff(lines1, lines2)
    setDiffResult(diff)
    
    // Calculate stats
    const added = diff.filter(d => d.type === 'added').length
    const removed = diff.filter(d => d.type === 'removed').length
    const unchanged = diff.filter(d => d.type === 'unchanged').length
    setStats({ added, removed, unchanged })
  }

  // Simple line-by-line diff algorithm
  const simpleDiff = (lines1, lines2) => {
    const result = []
    const maxLen = Math.max(lines1.length, lines2.length)
    
    for (let i = 0; i < maxLen; i++) {
      const line1 = lines1[i]
      const line2 = lines2[i]
      
      if (line1 === undefined) {
        result.push({ type: 'added', line: line2, lineNum1: null, lineNum2: i + 1 })
      } else if (line2 === undefined) {
        result.push({ type: 'removed', line: line1, lineNum1: i + 1, lineNum2: null })
      } else if (line1 === line2) {
        result.push({ type: 'unchanged', line: line1, lineNum1: i + 1, lineNum2: i + 1 })
      } else {
        result.push({ type: 'removed', line: line1, lineNum1: i + 1, lineNum2: null })
        result.push({ type: 'added', line: line2, lineNum1: null, lineNum2: i + 1 })
      }
    }
    
    return result
  }

  const handleClear = () => {
    setText1('')
    setText2('')
    setDiffResult([])
    setStats({ added: 0, removed: 0, unchanged: 0 })
  }

  const handleSwap = () => {
    const temp = text1
    setText1(text2)
    setText2(temp)
  }

  const loadSample = () => {
    setText1(`function greet(name) {
  console.log("Hello " + name);
  return true;
}`)
    setText2(`function greet(name) {
  console.log("Hi " + name + "!");
  console.log("Welcome!");
  return true;
}`)
  }

  const getLineClass = (type) => {
    switch (type) {
      case 'added':
        return 'bg-green-500/20 border-l-4 border-green-500'
      case 'removed':
        return 'bg-red-500/20 border-l-4 border-red-500'
      default:
        return 'bg-bg-secondary'
    }
  }

  const getLinePrefix = (type) => {
    switch (type) {
      case 'added':
        return '+ '
      case 'removed':
        return '- '
      default:
        return '  '
    }
  }

  return (
    <ToolLayout
      title="Text Diff Checker"
      description="Compare two texts and see differences side-by-side"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border text-sm font-medium"
            >
              🗑️ Clear
            </button>
            <button
              onClick={handleSwap}
              className="px-4 py-2 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border text-sm font-medium"
            >
              🔄 Swap
            </button>
            <button
              onClick={loadSample}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors text-sm font-medium"
            >
              📝 Load Sample
            </button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'side-by-side'
                  ? 'bg-primary text-white'
                  : 'bg-bg-secondary text-text-primary hover:bg-border border border-border'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setViewMode('unified')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'unified'
                  ? 'bg-primary text-white'
                  : 'bg-bg-secondary text-text-primary hover:bg-border border border-border'
              }`}
            >
              Unified
            </button>
          </div>
        </div>

        {/* Stats */}
        {(text1 || text2) && (
          <div className="flex flex-wrap gap-4 mb-6 p-4 bg-bg-secondary rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold">+{stats.added}</span>
              <span className="text-text-secondary text-sm">Added</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold">-{stats.removed}</span>
              <span className="text-text-secondary text-sm">Removed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-primary font-bold">{stats.unchanged}</span>
              <span className="text-text-secondary text-sm">Unchanged</span>
            </div>
          </div>
        )}

        {/* Input Areas - Side by Side */}
        {viewMode === 'side-by-side' && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                Original Text
              </label>
              <textarea
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder="Paste original text here..."
                rows={15}
                className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
              />
            </div>
            <div>
              <label className="block text-text-primary font-semibold mb-2">
                Modified Text
              </label>
              <textarea
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                placeholder="Paste modified text here..."
                rows={15}
                className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
              />
            </div>
          </div>
        )}

        {/* Unified View */}
        {viewMode === 'unified' && (
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              Text Comparison
            </label>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <textarea
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder="Original text..."
                rows={8}
                className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
              />
              <textarea
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                placeholder="Modified text..."
                rows={8}
                className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
              />
            </div>
          </div>
        )}

        {/* Diff Results */}
        {diffResult.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-text-primary font-semibold">
                Differences
              </label>
              <button
                onClick={() => copyToClipboard(diffResult.map(d => getLinePrefix(d.type) + d.line).join('\n'))}
                className="text-primary hover:text-primary-hover text-sm transition-colors"
              >
                {copyStatus ? '✅ Copied!' : '📋 Copy Diff'}
              </button>
            </div>
            <div className="bg-bg-secondary rounded-lg border border-border overflow-hidden">
              <div className="max-h-[500px] overflow-y-auto">
                {diffResult.map((diff, idx) => (
                  <div
                    key={idx}
                    className={`${getLineClass(diff.type)} px-4 py-2 font-mono text-sm flex items-start gap-3`}
                  >
                    <span className="text-text-secondary min-w-[60px] text-right select-none">
                      {diff.lineNum1 || '-'} | {diff.lineNum2 || '-'}
                    </span>
                    <span className={`${
                      diff.type === 'added' ? 'text-green-400' :
                      diff.type === 'removed' ? 'text-red-400' :
                      'text-text-primary'
                    }`}>
                      {getLinePrefix(diff.type)}{diff.line || ' '}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500/20 border-l-2 border-green-500"></div>
                <span className="text-text-secondary">Added lines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500/20 border-l-2 border-red-500"></div>
                <span className="text-text-secondary">Removed lines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-bg-secondary"></div>
                <span className="text-text-secondary">Unchanged lines</span>
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
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is a Text Diff Checker?</h2>
          <p className="text-text-secondary mb-4">
            A Text Diff Checker (also called text comparison tool or diff tool) compares two text documents and highlights the differences between them. 
            It shows which lines were added, removed, or modified, making it easy to track changes in code, documents, or any text content.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the Text Diff Checker</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Paste your original text in the left text area</li>
            <li>Paste the modified text in the right text area</li>
            <li>The tool automatically compares and highlights differences</li>
            <li>Green highlights show added lines</li>
            <li>Red highlights show removed lines</li>
            <li>Switch between side-by-side and unified view modes</li>
            <li>Copy the diff output or swap texts as needed</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">View Modes</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">Side-by-Side:</strong> View original and modified texts in separate columns for easy comparison</li>
            <li><strong className="text-text-primary">Unified:</strong> View all changes in a single column with color-coded additions and deletions</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our Text Diff Tool</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Real-time comparison as you type</li>
            <li>✅ Color-coded highlighting for easy visualization</li>
            <li>✅ Line-by-line comparison with line numbers</li>
            <li>✅ Statistics showing added, removed, and unchanged lines</li>
            <li>✅ Multiple view modes (side-by-side and unified)</li>
            <li>✅ Copy diff output with formatting</li>
            <li>✅ Swap texts with one click</li>
            <li>✅ No file upload required - paste directly</li>
            <li>✅ Free and unlimited usage</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <ul className="text-text-secondary space-y-2">
            <li>💻 Compare code versions before committing</li>
            <li>📝 Track document changes and revisions</li>
            <li>🔍 Review pull request changes</li>
            <li>✏️ Compare configuration files</li>
            <li>📊 Analyze data file differences</li>
            <li>🎓 Check plagiarism or text similarity</li>
            <li>🔧 Debug code by comparing working vs broken versions</li>
            <li>📄 Compare contract or legal document versions</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Understanding Diff Output</h2>
          <p className="text-text-secondary mb-2">
            The diff output uses standard notation:
          </p>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-green-400">+ (Plus sign):</strong> Line was added in the modified version</li>
            <li><strong className="text-red-400">- (Minus sign):</strong> Line was removed from the original version</li>
            <li><strong className="text-text-primary">(Space):</strong> Line is unchanged in both versions</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Tips for Best Results</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📌 Ensure both texts use the same line ending format</li>
            <li>📌 Remove extra whitespace if you want to ignore formatting changes</li>
            <li>📌 Use the swap button to reverse the comparison direction</li>
            <li>📌 Try the sample data to understand how the tool works</li>
            <li>📌 Use side-by-side view for large texts</li>
            <li>📌 Use unified view for a compact diff output</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/regex-tester" className="text-primary hover:text-primary-hover transition-colors">
            → Regex Tester
          </Link>
          <Link href="/code-formatter" className="text-primary hover:text-primary-hover transition-colors">
            → Code Formatter
          </Link>
          <Link href="/json-formatter" className="text-primary hover:text-primary-hover transition-colors">
            → JSON Formatter
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
