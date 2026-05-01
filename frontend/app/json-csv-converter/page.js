'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function JSONCSVConverterPage() {
  const [mode, setMode] = useState('json-to-csv') // 'json-to-csv' or 'csv-to-json'
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [delimiter, setDelimiter] = useState(',')
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  const jsonToCSV = (jsonString) => {
    try {
      const data = JSON.parse(jsonString)
      
      // Handle array of objects
      if (Array.isArray(data) && data.length > 0) {
        const headers = Object.keys(data[0])
        const csvRows = []
        
        // Add headers
        csvRows.push(headers.join(delimiter))
        
        // Add data rows
        for (const row of data) {
          const values = headers.map(header => {
            const value = row[header]
            // Escape values containing delimiter or quotes
            if (typeof value === 'string' && (value.includes(delimiter) || value.includes('"') || value.includes('\n'))) {
              return `"${value.replace(/"/g, '""')}"`
            }
            return value ?? ''
          })
          csvRows.push(values.join(delimiter))
        }
        
        return csvRows.join('\n')
      }
      
      // Handle single object
      if (typeof data === 'object' && !Array.isArray(data)) {
        const headers = Object.keys(data)
        const values = Object.values(data).map(v => {
          if (typeof v === 'string' && (v.includes(delimiter) || v.includes('"') || v.includes('\n'))) {
            return `"${v.replace(/"/g, '""')}"`
          }
          return v ?? ''
        })
        return headers.join(delimiter) + '\n' + values.join(delimiter)
      }
      
      throw new Error('JSON must be an array of objects or a single object')
    } catch (err) {
      throw new Error(`Invalid JSON: ${err.message}`)
    }
  }

  const csvToJSON = (csvString) => {
    try {
      const lines = csvString.trim().split('\n')
      if (lines.length < 2) {
        throw new Error('CSV must have at least a header row and one data row')
      }
      
      // Parse headers
      const headers = parseCSVLine(lines[0], delimiter)
      
      // Parse data rows
      const result = []
      for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i], delimiter)
        const obj = {}
        headers.forEach((header, index) => {
          obj[header] = values[index] || ''
        })
        result.push(obj)
      }
      
      return JSON.stringify(result, null, 2)
    } catch (err) {
      throw new Error(`Invalid CSV: ${err.message}`)
    }
  }

  const parseCSVLine = (line, delimiter) => {
    const result = []
    let current = ''
    let inQuotes = false
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      const nextChar = line[i + 1]
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          current += '"'
          i++
        } else {
          inQuotes = !inQuotes
        }
      } else if (char === delimiter && !inQuotes) {
        result.push(current)
        current = ''
      } else {
        current += char
      }
    }
    result.push(current)
    
    return result
  }

  const handleConvert = () => {
    if (!input.trim()) {
      setError('Please enter some data to convert')
      setOutput('')
      return
    }

    try {
      if (mode === 'json-to-csv') {
        const csv = jsonToCSV(input)
        setOutput(csv)
        setError('')
      } else {
        const json = csvToJSON(input)
        setOutput(json)
        setError('')
      }
    } catch (err) {
      setError(err.message)
      setOutput('')
    }
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
    setError('')
  }

  const handleDownload = () => {
    if (!output) return
    
    const extension = mode === 'json-to-csv' ? 'csv' : 'json'
    const mimeType = mode === 'json-to-csv' ? 'text/csv' : 'application/json'
    const blob = new Blob([output], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `converted-${Date.now()}.${extension}`
    link.click()
    URL.revokeObjectURL(url)
  }

  const loadSampleJSON = () => {
    setMode('json-to-csv')
    setInput(`[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "age": 35
  }
]`)
  }

  const loadSampleCSV = () => {
    setMode('csv-to-json')
    setInput(`id,name,email,age
1,John Doe,john@example.com,30
2,Jane Smith,jane@example.com,25
3,Bob Johnson,bob@example.com,35`)
  }

  return (
    <ToolLayout
      title="JSON ⇄ CSV Converter"
      description="Convert between JSON and CSV formats instantly"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Mode Selection */}
        <div className="mb-6">
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setMode('json-to-csv')}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                mode === 'json-to-csv'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-bg-secondary text-text-primary hover:bg-border border border-border'
              }`}
            >
              📄 JSON → CSV
            </button>
            <button
              onClick={() => setMode('csv-to-json')}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                mode === 'csv-to-json'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-bg-secondary text-text-primary hover:bg-border border border-border'
              }`}
            >
              📊 CSV → JSON
            </button>
          </div>

          {/* Delimiter Selection */}
          {mode === 'csv-to-json' && (
            <div className="flex items-center gap-3">
              <label className="text-text-secondary text-sm">CSV Delimiter:</label>
              <select
                value={delimiter}
                onChange={(e) => setDelimiter(e.target.value)}
                className="bg-bg-secondary text-text-primary rounded-lg px-3 py-2 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              >
                <option value=",">Comma (,)</option>
                <option value=";">Semicolon (;)</option>
                <option value="\t">Tab (\t)</option>
                <option value="|">Pipe (|)</option>
              </select>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-text-primary font-semibold">
              Input ({mode === 'json-to-csv' ? 'JSON' : 'CSV'})
            </label>
            <button
              onClick={mode === 'json-to-csv' ? loadSampleJSON : loadSampleCSV}
              className="text-primary hover:text-primary-hover text-sm transition-colors"
            >
              Load Sample
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'json-to-csv' ? 'Paste JSON array here...' : 'Paste CSV data here...'}
            rows={12}
            className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleConvert}
            className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium shadow-lg"
          >
            🔄 Convert
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border font-medium"
          >
            🗑️ Clear
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400">❌ {error}</p>
          </div>
        )}

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-text-primary font-semibold">
                Output ({mode === 'json-to-csv' ? 'CSV' : 'JSON'})
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => copyToClipboard(output)}
                  className="text-primary hover:text-primary-hover text-sm transition-colors"
                >
                  {copyStatus === output ? '✅ Copied!' : '📋 Copy'}
                </button>
                <button
                  onClick={handleDownload}
                  className="text-accent hover:opacity-80 text-sm transition-colors"
                >
                  💾 Download
                </button>
              </div>
            </div>
            <textarea
              value={output}
              readOnly
              rows={12}
              className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border font-mono text-sm resize-none"
            />
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
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is a JSON to CSV Converter?</h2>
          <p className="text-text-secondary mb-4">
            A JSON to CSV Converter is a tool that transforms data between JSON (JavaScript Object Notation) and CSV (Comma-Separated Values) formats. 
            JSON is commonly used in APIs and web applications, while CSV is ideal for spreadsheets, Excel, and data analysis tools. This converter 
            makes it easy to switch between these formats without writing code.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Convert JSON to CSV</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Select "JSON → CSV" mode</li>
            <li>Paste your JSON array of objects into the input field</li>
            <li>Click "Convert" to transform the data</li>
            <li>View the CSV output with headers and rows</li>
            <li>Copy the result or download as a .csv file</li>
            <li>Import into Excel, Google Sheets, or any spreadsheet tool</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Convert CSV to JSON</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Select "CSV → JSON" mode</li>
            <li>Choose your CSV delimiter (comma, semicolon, tab, or pipe)</li>
            <li>Paste your CSV data with headers in the first row</li>
            <li>Click "Convert" to generate JSON</li>
            <li>View the formatted JSON array output</li>
            <li>Copy or download the JSON file for use in your application</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our Converter</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Bidirectional conversion (JSON ⇄ CSV)</li>
            <li>✅ Handles complex data with special characters</li>
            <li>✅ Multiple delimiter support (comma, semicolon, tab, pipe)</li>
            <li>✅ Proper escaping of quotes and delimiters</li>
            <li>✅ Download converted files instantly</li>
            <li>✅ Copy to clipboard with one click</li>
            <li>✅ No file size limits</li>
            <li>✅ Client-side processing - data stays private</li>
            <li>✅ Free and unlimited usage</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📊 Import API data into Excel or Google Sheets</li>
            <li>📈 Convert spreadsheet data to JSON for web apps</li>
            <li>🔄 Transform database exports between formats</li>
            <li>📝 Prepare data for data analysis tools</li>
            <li>🎯 Convert configuration files</li>
            <li>📦 Process bulk data imports/exports</li>
            <li>🔧 Debug API responses in spreadsheet format</li>
            <li>📋 Create reports from JSON data</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">JSON vs CSV: When to Use Each</h2>
          <div className="grid md:grid-cols-2 gap-6 text-text-secondary">
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Use JSON when:</h3>
              <ul className="space-y-1">
                <li>• Working with APIs and web services</li>
                <li>• Need nested or hierarchical data</li>
                <li>• Building web applications</li>
                <li>• Storing configuration files</li>
                <li>• Need data type preservation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Use CSV when:</h3>
              <ul className="space-y-1">
                <li>• Importing to Excel or Google Sheets</li>
                <li>• Need simple tabular data</li>
                <li>• Working with data analysis tools</li>
                <li>• Smaller file sizes required</li>
                <li>• Human-readable format needed</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Tips for Best Results</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📌 JSON must be an array of objects with consistent keys</li>
            <li>📌 CSV first row should contain column headers</li>
            <li>📌 Choose the correct delimiter for your CSV data</li>
            <li>📌 Ensure data doesn't contain unescaped quotes</li>
            <li>📌 Use sample data to test before converting large files</li>
            <li>📌 Validate JSON before conversion</li>
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
          <Link href="/base64-converter" className="text-primary hover:text-primary-hover transition-colors">
            → Base64 Converter
          </Link>
          <Link href="/api-tester" className="text-primary hover:text-primary-hover transition-colors">
            → API Tester
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
