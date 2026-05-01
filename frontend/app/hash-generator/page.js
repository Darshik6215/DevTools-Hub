'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function HashGenerator() {
  const [input, setInput] = useState('')
  const [hashes, setHashes] = useState({})
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  // Simple hash functions (for demo - use crypto library in production)
  const generateMD5 = async (str) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hashBuffer = await crypto.subtle.digest('MD5', data).catch(() => null)
    if (!hashBuffer) return 'MD5 not supported in this browser'
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  const generateSHA256 = async (str) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  const generateSHA512 = async (str) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hashBuffer = await crypto.subtle.digest('SHA-512', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  const handleGenerate = async () => {
    if (!input) return
    
    const results = {
      sha256: await generateSHA256(input),
      sha512: await generateSHA512(input)
    }
    
    setHashes(results)
  }

  const handleCopy = (hash, algorithm) => {
    copyToClipboard(hash, algorithm)
  }

  const faqs = [
    {
      question: 'What is a hash function?',
      answer: 'A hash function converts input data of any size into a fixed-size string of characters. It\'s a one-way function - you cannot reverse it to get the original data.'
    },
    {
      question: 'What\'s the difference between MD5, SHA256, and SHA512?',
      answer: 'MD5 produces 128-bit hashes (deprecated for security), SHA256 produces 256-bit hashes (widely used), and SHA512 produces 512-bit hashes (most secure but slower).'
    },
    {
      question: 'Are hash functions secure?',
      answer: 'SHA256 and SHA512 are cryptographically secure. MD5 is no longer considered secure for cryptographic purposes but still useful for checksums.'
    },
    {
      question: 'What are common uses for hash functions?',
      answer: 'Password storage, file integrity verification, digital signatures, blockchain, data deduplication, and cache keys.'
    }
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <ToolLayout
        title="Free Hash Generator Online - MD5, SHA256, SHA512 | DevTools Hub"
        description="Generate MD5, SHA256, and SHA512 hashes online for free. Secure hash generator for passwords, files, and data integrity verification."
        icon="🔐"
      >
        <Breadcrumb 
          items={[
            { label: 'Hash Generator', href: '/hash-generator' }
          ]} 
        />

        <div className="mb-6">
          <AdComponent size="banner" />
        </div>

        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-text-primary mb-3">
              Input Text
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to hash..."
              className="w-full h-32 p-4 bg-bg-primary border border-border rounded-lg text-text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!input}
            className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            🔐 Generate Hashes
          </button>

          {Object.keys(hashes).length > 0 && (
            <div className="space-y-4">
              {Object.entries(hashes).map(([algorithm, hash]) => (
                <div key={algorithm} className="bg-bg-secondary rounded-lg p-4 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">{algorithm}</h3>
                    <button
                      onClick={() => handleCopy(hash, algorithm)}
                      className={`px-3 py-1 text-sm rounded transition-all ${
                        isCopied(algorithm)
                          ? 'bg-green-500 text-white'
                          : 'bg-primary text-white hover:opacity-90'
                      }`}
                    >
                      {isCopied(algorithm) ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                  <div className="bg-bg-primary p-3 rounded font-mono text-xs text-text-primary break-all border border-border">
                    {hash}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="my-8">
          <AdComponent size="leaderboard" />
        </div>

        <div className="mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            What is a Hash Generator?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A hash generator creates a unique fixed-size string (hash) from input data using cryptographic algorithms. 
            Hashes are one-way functions - you cannot reverse them to get the original data, making them perfect for 
            security applications like password storage and data integrity verification.
          </p>
        </div>

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
