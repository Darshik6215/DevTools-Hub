'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function JWTDecoderPage() {
  const [token, setToken] = useState('')
  const [header, setHeader] = useState(null)
  const [payload, setPayload] = useState(null)
  const [signature, setSignature] = useState('')
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(false)
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  useEffect(() => {
    decodeJWT()
  }, [token])

  const decodeJWT = () => {
    if (!token.trim()) {
      setHeader(null)
      setPayload(null)
      setSignature('')
      setError('')
      setIsValid(false)
      return
    }

    try {
      const parts = token.split('.')
      
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format. JWT must have 3 parts separated by dots.')
      }

      // Decode header
      const decodedHeader = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')))
      setHeader(decodedHeader)

      // Decode payload
      const decodedPayload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))
      setPayload(decodedPayload)

      // Store signature
      setSignature(parts[2])

      setError('')
      setIsValid(true)
    } catch (err) {
      setError(err.message || 'Invalid JWT token')
      setHeader(null)
      setPayload(null)
      setSignature('')
      setIsValid(false)
    }
  }

  const handleClear = () => {
    setToken('')
    setHeader(null)
    setPayload(null)
    setSignature('')
    setError('')
    setIsValid(false)
  }

  const formatJSON = (obj) => {
    return JSON.stringify(obj, null, 2)
  }

  const getExpirationStatus = () => {
    if (!payload || !payload.exp) return null
    
    const expDate = new Date(payload.exp * 1000)
    const now = new Date()
    const isExpired = expDate < now
    
    return {
      date: expDate.toLocaleString(),
      isExpired,
      timeLeft: isExpired ? 'Expired' : getTimeRemaining(expDate)
    }
  }

  const getTimeRemaining = (expDate) => {
    const now = new Date()
    const diff = expDate - now
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    if (days > 0) return `${days}d ${hours}h`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  const sampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

  const expStatus = getExpirationStatus()

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode and inspect JSON Web Tokens (JWT) instantly"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Token Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-text-primary font-semibold">
              JWT Token
            </label>
            <button
              onClick={() => setToken(sampleToken)}
              className="text-primary hover:text-primary-hover text-sm transition-colors"
            >
              Load Sample Token
            </button>
          </div>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Paste your JWT token here..."
            rows={6}
            className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
          />
          {error && (
            <p className="mt-2 text-red-500 text-sm">❌ {error}</p>
          )}
          {isValid && (
            <p className="mt-2 text-green-500 text-sm">✅ Valid JWT structure</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleClear}
            className="px-6 py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border font-medium"
          >
            🗑️ Clear
          </button>
        </div>

        {/* Decoded Results */}
        {isValid && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-text-primary">📋 Header</h3>
                <button
                  onClick={() => copyToClipboard(formatJSON(header))}
                  className="text-primary hover:text-primary-hover text-sm transition-colors"
                >
                  {copyStatus === formatJSON(header) ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4 border border-border">
                <pre className="text-text-primary font-mono text-sm overflow-x-auto">
                  {formatJSON(header)}
                </pre>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                  Algorithm: {header.alg}
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                  Type: {header.typ}
                </span>
              </div>
            </div>

            {/* Payload */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-text-primary">📦 Payload (Claims)</h3>
                <button
                  onClick={() => copyToClipboard(formatJSON(payload))}
                  className="text-primary hover:text-primary-hover text-sm transition-colors"
                >
                  {copyStatus === formatJSON(payload) ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4 border border-border">
                <pre className="text-text-primary font-mono text-sm overflow-x-auto">
                  {formatJSON(payload)}
                </pre>
              </div>
              
              {/* Expiration Info */}
              {expStatus && (
                <div className={`mt-3 p-3 rounded-lg border ${
                  expStatus.isExpired 
                    ? 'bg-red-500/10 border-red-500/30' 
                    : 'bg-green-500/10 border-green-500/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-text-primary font-medium">
                      {expStatus.isExpired ? '⚠️ Token Expired' : '✅ Token Valid'}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {expStatus.isExpired ? expStatus.date : `Expires in ${expStatus.timeLeft}`}
                    </span>
                  </div>
                </div>
              )}

              {/* Common Claims */}
              <div className="mt-3 space-y-2">
                {payload.iss && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-secondary">Issuer:</span>
                    <span className="text-text-primary font-mono">{payload.iss}</span>
                  </div>
                )}
                {payload.sub && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-secondary">Subject:</span>
                    <span className="text-text-primary font-mono">{payload.sub}</span>
                  </div>
                )}
                {payload.aud && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-secondary">Audience:</span>
                    <span className="text-text-primary font-mono">{payload.aud}</span>
                  </div>
                )}
                {payload.iat && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-secondary">Issued At:</span>
                    <span className="text-text-primary font-mono">
                      {new Date(payload.iat * 1000).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Signature */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-text-primary">🔐 Signature</h3>
                <button
                  onClick={() => copyToClipboard(signature)}
                  className="text-primary hover:text-primary-hover text-sm transition-colors"
                >
                  {copyStatus === signature ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <div className="bg-bg-secondary rounded-lg p-4 border border-border">
                <p className="text-text-primary font-mono text-sm break-all">
                  {signature}
                </p>
              </div>
              <p className="mt-2 text-text-secondary text-xs">
                ⚠️ Note: This tool only decodes the JWT. Signature verification requires the secret key.
              </p>
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
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is a JWT Decoder?</h2>
          <p className="text-text-secondary mb-4">
            A JWT (JSON Web Token) Decoder is a tool that decodes and displays the contents of JWT tokens. JWTs are commonly used for authentication 
            and authorization in web applications. Our decoder helps you inspect the header, payload, and signature of any JWT token without requiring 
            server-side processing.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the JWT Decoder</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Copy your JWT token from your application or API response</li>
            <li>Paste the token into the input field</li>
            <li>The tool automatically decodes and displays the header, payload, and signature</li>
            <li>View token expiration status and common claims</li>
            <li>Copy individual sections (header, payload, or signature) as needed</li>
            <li>Use the sample token to see how JWT decoding works</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Understanding JWT Structure</h2>
          <p className="text-text-secondary mb-2">
            A JWT token consists of three parts separated by dots (.):
          </p>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">Header:</strong> Contains token type (JWT) and signing algorithm (e.g., HS256, RS256)</li>
            <li><strong className="text-text-primary">Payload:</strong> Contains claims (user data, permissions, expiration time)</li>
            <li><strong className="text-text-primary">Signature:</strong> Ensures token integrity and authenticity</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common JWT Claims</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">iss (Issuer):</strong> Who created and signed the token</li>
            <li><strong className="text-text-primary">sub (Subject):</strong> The subject of the token (usually user ID)</li>
            <li><strong className="text-text-primary">aud (Audience):</strong> Who the token is intended for</li>
            <li><strong className="text-text-primary">exp (Expiration):</strong> When the token expires</li>
            <li><strong className="text-text-primary">iat (Issued At):</strong> When the token was created</li>
            <li><strong className="text-text-primary">nbf (Not Before):</strong> Token is not valid before this time</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our JWT Decoder</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Instant JWT decoding without server requests</li>
            <li>✅ View header, payload, and signature separately</li>
            <li>✅ Automatic expiration checking</li>
            <li>✅ Display common JWT claims in readable format</li>
            <li>✅ Copy decoded sections with one click</li>
            <li>✅ Client-side processing - your tokens stay private</li>
            <li>✅ No registration or installation required</li>
            <li>✅ Free and unlimited usage</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Security Note</h2>
          <p className="text-text-secondary mb-4">
            ⚠️ <strong className="text-text-primary">Important:</strong> This tool only decodes JWT tokens - it does not verify signatures. 
            JWT tokens are encoded (Base64), not encrypted. Anyone can decode a JWT and read its contents. Never store sensitive information 
            in JWT payloads. Always verify JWT signatures on your server before trusting the token data.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <ul className="text-text-secondary space-y-2">
            <li>🔍 Debugging authentication issues</li>
            <li>👤 Inspecting user claims and permissions</li>
            <li>⏰ Checking token expiration times</li>
            <li>🔧 Testing JWT implementation</li>
            <li>📊 Analyzing token structure</li>
            <li>🎓 Learning about JWT tokens</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/base64-converter" className="text-primary hover:text-primary-hover transition-colors">
            → Base64 Converter
          </Link>
          <Link href="/json-formatter" className="text-primary hover:text-primary-hover transition-colors">
            → JSON Formatter
          </Link>
          <Link href="/hash-generator" className="text-primary hover:text-primary-hover transition-colors">
            → Hash Generator
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
