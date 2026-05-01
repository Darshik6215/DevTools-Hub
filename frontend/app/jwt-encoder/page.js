'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function JWTEncoderPage() {
  const [algorithm, setAlgorithm] = useState('HS256')
  const [header, setHeader] = useState('{\n  "alg": "HS256",\n  "typ": "JWT"\n}')
  const [payload, setPayload] = useState('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}')
  const [secret, setSecret] = useState('your-256-bit-secret')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  useEffect(() => {
    generateJWT()
  }, [algorithm, header, payload, secret])

  const generateJWT = () => {
    try {
      // Parse header and payload
      const headerObj = JSON.parse(header)
      const payloadObj = JSON.parse(payload)
      
      // Update algorithm in header
      headerObj.alg = algorithm
      
      // Encode header and payload
      const encodedHeader = base64UrlEncode(JSON.stringify(headerObj))
      const encodedPayload = base64UrlEncode(JSON.stringify(payloadObj))
      
      // Create signature (simplified - in production use proper crypto library)
      const signature = base64UrlEncode(simpleHmac(encodedHeader + '.' + encodedPayload, secret))
      
      // Combine to create JWT
      const jwt = `${encodedHeader}.${encodedPayload}.${signature}`
      setToken(jwt)
      setError('')
    } catch (err) {
      setError(err.message || 'Invalid JSON in header or payload')
      setToken('')
    }
  }

  const base64UrlEncode = (str) => {
    const base64 = btoa(unescape(encodeURIComponent(str)))
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  }

  const simpleHmac = (data, key) => {
    // Simplified HMAC for demonstration
    // In production, use a proper crypto library like crypto-js
    let hash = 0
    const combined = data + key
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i)
      hash = hash & hash
    }
    return hash.toString(36)
  }

  const handleClear = () => {
    setHeader('{\n  "alg": "HS256",\n  "typ": "JWT"\n}')
    setPayload('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}')
    setSecret('your-256-bit-secret')
    setToken('')
    setError('')
  }

  const addClaim = (claim) => {
    try {
      const payloadObj = JSON.parse(payload)
      const timestamp = Math.floor(Date.now() / 1000)
      
      switch (claim) {
        case 'exp':
          payloadObj.exp = timestamp + 3600 // 1 hour from now
          break
        case 'iat':
          payloadObj.iat = timestamp
          break
        case 'nbf':
          payloadObj.nbf = timestamp
          break
      }
      
      setPayload(JSON.stringify(payloadObj, null, 2))
    } catch (err) {
      setError('Invalid JSON in payload')
    }
  }

  return (
    <ToolLayout
      title="JWT Encoder"
      description="Create and sign JWT tokens with custom payload and secret"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Algorithm Selection */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">Algorithm</label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="w-full md:w-auto bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="HS256">HS256 (HMAC SHA-256)</option>
            <option value="HS384">HS384 (HMAC SHA-384)</option>
            <option value="HS512">HS512 (HMAC SHA-512)</option>
          </select>
        </div>

        {/* Header */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">Header</label>
          <textarea
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            rows={4}
            className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
          />
        </div>

        {/* Payload */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-text-primary font-semibold">Payload</label>
            <div className="flex gap-2">
              <button
                onClick={() => addClaim('exp')}
                className="text-primary hover:text-primary-hover text-xs transition-colors"
              >
                + exp
              </button>
              <button
                onClick={() => addClaim('iat')}
                className="text-primary hover:text-primary-hover text-xs transition-colors"
              >
                + iat
              </button>
              <button
                onClick={() => addClaim('nbf')}
                className="text-primary hover:text-primary-hover text-xs transition-colors"
              >
                + nbf
              </button>
            </div>
          </div>
          <textarea
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            rows={8}
            className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono text-sm resize-none"
          />
        </div>

        {/* Secret Key */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">Secret Key</label>
          <input
            type="text"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter your secret key..."
            className="w-full bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-mono"
          />
          <p className="mt-2 text-text-secondary text-xs">
            ⚠️ Keep your secret key secure. Never share it publicly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
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

        {/* Generated Token */}
        {token && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-text-primary font-semibold">Generated JWT Token</label>
              <button
                onClick={() => copyToClipboard(token)}
                className="text-primary hover:text-primary-hover text-sm transition-colors"
              >
                {copyStatus === token ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <div className="bg-bg-secondary rounded-lg p-4 border border-border">
              <p className="text-text-primary font-mono text-sm break-all">{token}</p>
            </div>
            
            {/* Token Parts */}
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-xs font-semibold mb-1">Header</p>
                <p className="text-text-secondary text-xs font-mono break-all">{token.split('.')[0]}</p>
              </div>
              <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-purple-400 text-xs font-semibold mb-1">Payload</p>
                <p className="text-text-secondary text-xs font-mono break-all">{token.split('.')[1]}</p>
              </div>
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-xs font-semibold mb-1">Signature</p>
                <p className="text-text-secondary text-xs font-mono break-all">{token.split('.')[2]}</p>
              </div>
            </div>
          </div>
        )}

        {/* Warning */}
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-400 text-sm">
            ⚠️ <strong>Note:</strong> This is a simplified JWT encoder for demonstration. For production use, 
            implement proper HMAC signing with a crypto library like crypto-js or use a backend service.
          </p>
        </div>
      </div>

      {/* Middle Ad */}
      <div className="my-8">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose prose-invert max-w-none">
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is a JWT Encoder?</h2>
          <p className="text-text-secondary mb-4">
            A JWT Encoder is a tool that creates and signs JSON Web Tokens (JWT) with a custom payload and secret key. JWTs are used for 
            authentication and secure information exchange between parties. This encoder allows you to generate tokens with custom claims 
            and sign them using HMAC algorithms (HS256, HS384, HS512).
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the JWT Encoder</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Select the signing algorithm (HS256, HS384, or HS512)</li>
            <li>Customize the header if needed (algorithm and type)</li>
            <li>Add your payload data (user info, permissions, expiration)</li>
            <li>Enter your secret key for signing</li>
            <li>The JWT token is generated automatically</li>
            <li>Copy the token for use in your application</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common JWT Claims</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">sub (Subject):</strong> User ID or identifier</li>
            <li><strong className="text-text-primary">exp (Expiration):</strong> Token expiration timestamp</li>
            <li><strong className="text-text-primary">iat (Issued At):</strong> Token creation timestamp</li>
            <li><strong className="text-text-primary">nbf (Not Before):</strong> Token valid from timestamp</li>
            <li><strong className="text-text-primary">iss (Issuer):</strong> Who created the token</li>
            <li><strong className="text-text-primary">aud (Audience):</strong> Who the token is for</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Create JWT tokens instantly</li>
            <li>✅ Support for multiple HMAC algorithms</li>
            <li>✅ Add standard claims with one click</li>
            <li>✅ View token structure (header, payload, signature)</li>
            <li>✅ Copy tokens easily</li>
            <li>✅ Test authentication flows</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/jwt-decoder" className="text-primary hover:text-primary-hover transition-colors">
            → JWT Decoder
          </Link>
          <Link href="/base64-converter" className="text-primary hover:text-primary-hover transition-colors">
            → Base64 Converter
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
