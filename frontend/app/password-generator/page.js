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
    if (strength === 'Weak') return 'text-red-500 bg-red-500/10'
    if (strength === 'Medium') return 'text-yellow-500 bg-yellow-500/10'
    return 'text-green-500 bg-green-500/10'
  }

  return (
    <ToolLayout 
      title="Password Generator" 
      description="Generate secure random passwords with customizable options"
    >
      <div className="max-w-2xl mx-auto">
        {/* Password Length Slider */}
        <div className="mb-8 reveal">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-text-primary">
              Password Length
            </label>
            <span className="text-2xl font-bold text-primary">{length}</span>
          </div>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-secondary mt-1">
            <span>8</span>
            <span>64</span>
          </div>
        </div>

        {/* Character Options */}
        <div className="space-y-4 mb-8 p-6 bg-bg-secondary rounded-xl border border-border reveal reveal-delay-1">
          <h3 className="font-semibold text-text-primary mb-3">Character Options</h3>
          
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary bg-bg-primary border-border"
            />
            <span className="text-text-secondary group-hover:text-primary transition-colors">
              Include Uppercase Letters (A-Z)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary bg-bg-primary border-border"
            />
            <span className="text-text-secondary group-hover:text-primary transition-colors">
              Include Lowercase Letters (a-z)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary bg-bg-primary border-border"
            />
            <span className="text-text-secondary group-hover:text-primary transition-colors">
              Include Numbers (0-9)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary bg-bg-primary border-border"
            />
            <span className="text-text-secondary group-hover:text-primary transition-colors">
              Include Symbols (!@#$%^&*)
            </span>
          </label>
        </div>

        {/* Password Strength Indicator */}
        <div className="mb-6 reveal reveal-delay-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-primary">Password Strength:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStrengthColor()}`}>
              {strength}
            </span>
          </div>
        </div>

        {/* Generated Password Display */}
        {password && (
          <div className="mb-6 p-6 bg-bg-secondary rounded-xl border-2 border-primary/20 reveal">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Generated Password
            </label>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <code className="flex-1 text-xl font-mono break-all bg-bg-primary p-4 rounded-lg border border-border text-text-primary w-full text-center md:text-left">
                {password}
              </code>
              <button
                onClick={copyToClipboard}
                className="w-full md:w-auto px-8 py-4 bg-accent text-white rounded-lg hover:opacity-90 transition-all font-bold shadow-lg transform active:scale-95"
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
          className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-white text-lg font-bold rounded-xl hover:opacity-90 disabled:from-border disabled:to-border disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-xl transform active:scale-[0.98] reveal reveal-delay-3"
        >
          {loading && <LoadingSpinner size="small" />}
          {loading ? 'Generating...' : '🔐 Generate Secure Password'}
        </button>

        {/* Security Tips */}
        <div className="mt-8 p-6 bg-bg-secondary rounded-xl border border-border reveal">
          <h3 className="font-bold text-text-primary mb-3 flex items-center gap-2">
            <span className="text-xl">🔒</span> Security Tips:
          </h3>
          <ul className="text-sm text-text-secondary space-y-3">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Use at least 12 characters for better security</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Include a mix of uppercase, lowercase, numbers, and symbols</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Never reuse passwords across different accounts</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Consider using a password manager</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Change passwords regularly</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
