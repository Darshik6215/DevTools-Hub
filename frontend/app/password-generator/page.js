'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { generatePassword } from '@/lib/api'
import { generatePasswordClient } from '@/lib/client-tools'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [strength, setStrength] = useState('')

  /**
   * Calculate password strength based on options
   */
  useEffect(() => {
    let score = 0
    if (length >= 12) score++
    if (length >= 16) score++
    if (includeUppercase) score++
    if (includeLowercase) score++
    if (includeNumbers) score++
    if (includeSymbols) score++

    if (score <= 2) setStrength('Weak')
    else if (score <= 4) setStrength('Medium')
    else setStrength('Strong')
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  /**
   * Generate password with selected options
   */
  const handleGenerate = async () => {
    // Validate at least one option is selected
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      alert('Please select at least one character type')
      return
    }

    setLoading(true)
    try {
      // Use client-side generation (no backend needed)
      const result = generatePasswordClient({
        length,
        include_uppercase: includeUppercase,
        include_lowercase: includeLowercase,
        include_numbers: includeNumbers,
        include_symbols: includeSymbols
      })
      setPassword(result.password)
      setCopied(false)
    } catch (err) {
      console.error('Failed to generate password:', err)
      alert('Failed to generate password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Copy password to clipboard
   */
  const copyToClipboard = async () => {
    if (!password) return
    
    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      alert('Failed to copy to clipboard')
    }
  }

  /**
   * Get strength color
   */
  const getStrengthColor = () => {
    if (strength === 'Weak') return 'text-red-600 bg-red-50'
    if (strength === 'Medium') return 'text-yellow-600 bg-yellow-50'
    return 'text-green-600 bg-green-50'
  }

  return (
    <ToolLayout 
      title="Password Generator" 
      description="Generate secure random passwords with customizable options"
    >
      <div className="max-w-2xl mx-auto">
        {/* Password Length Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700">
              Password Length
            </label>
            <span className="text-2xl font-bold text-blue-600">{length}</span>
          </div>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>8</span>
            <span>64</span>
          </div>
        </div>

        {/* Character Options */}
        <div className="space-y-4 mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-3">Character Options</h3>
          
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="group-hover:text-blue-600 transition-colors">
              Include Uppercase Letters (A-Z)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="group-hover:text-blue-600 transition-colors">
              Include Lowercase Letters (a-z)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="group-hover:text-blue-600 transition-colors">
              Include Numbers (0-9)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="group-hover:text-blue-600 transition-colors">
              Include Symbols (!@#$%^&*)
            </span>
          </label>
        </div>

        {/* Password Strength Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Password Strength:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStrengthColor()}`}>
              {strength}
            </span>
          </div>
        </div>

        {/* Generated Password Display */}
        {password && (
          <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Generated Password
            </label>
            <div className="flex items-center gap-3">
              <code className="flex-1 text-xl font-mono break-all bg-white p-4 rounded border">
                {password}
              </code>
              <button
                onClick={copyToClipboard}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
        >
          {loading && <LoadingSpinner size="small" />}
          {loading ? 'Generating...' : '🔐 Generate Secure Password'}
        </button>

        {/* Security Tips */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-3">🔒 Security Tips:</h3>
          <ul className="text-sm text-yellow-800 space-y-2">
            <li>• Use at least 12 characters for better security</li>
            <li>• Include a mix of uppercase, lowercase, numbers, and symbols</li>
            <li>• Never reuse passwords across different accounts</li>
            <li>• Consider using a password manager</li>
            <li>• Change passwords regularly</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
