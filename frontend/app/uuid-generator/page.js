'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState([])
  const [count, setCount] = useState(1)
  const [version, setVersion] = useState('v4')
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const generateUUID = () => {
    // UUID v4 generator
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  const handleGenerate = () => {
    const newUuids = []
    for (let i = 0; i < count; i++) {
      newUuids.push(generateUUID())
    }
    setUuids(newUuids)
  }

  const handleCopy = (uuid, index) => {
    copyToClipboard(uuid, `uuid-${index}`)
  }

  const handleCopyAll = () => {
    copyToClipboard(uuids.join('\n'), 'all')
  }

  return (
    <ToolLayout
      title="Free UUID Generator Online - Generate Unique IDs | DevTools Hub"
      description="Generate UUID/GUID instantly. Create unique identifiers for databases, APIs, and applications. Free online UUID v4 generator."
      icon="🆔"
    >
      <Breadcrumb 
        items={[
          { label: 'UUID Generator', href: '/uuid-generator' }
        ]} 
      />

      <div className="mb-6">
        <AdComponent size="banner" />
      </div>

      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Number of UUIDs
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-full p-3 bg-bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Version
            </label>
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="w-full p-3 bg-bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="v4">UUID v4 (Random)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md mb-6"
        >
          🆔 Generate UUID{count > 1 ? 's' : ''}
        </button>

        {uuids.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-text-primary">
                Generated UUIDs ({uuids.length})
              </h3>
              <button
                onClick={handleCopyAll}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  isCopied('all')
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:opacity-90'
                }`}
              >
                {isCopied('all') ? '✅ Copied All!' : '📋 Copy All'}
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {uuids.map((uuid, index) => (
                <div key={index} className="flex items-center gap-2 bg-bg-secondary p-3 rounded-lg border border-border">
                  <span className="flex-1 font-mono text-sm text-text-primary">{uuid}</span>
                  <button
                    onClick={() => handleCopy(uuid, index)}
                    className={`px-3 py-1 text-sm rounded transition-all ${
                      isCopied(`uuid-${index}`)
                        ? 'bg-green-500 text-white'
                        : 'bg-primary text-white hover:opacity-90'
                    }`}
                  >
                    {isCopied(`uuid-${index}`) ? '✅' : '📋'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="my-8">
        <AdComponent size="leaderboard" />
      </div>

      <div className="mt-8 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          What is a UUID?
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. 
          UUIDs are also known as GUIDs (Globally Unique Identifiers). They're designed to be unique across space and time 
          without requiring a central registration authority.
        </p>

        <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
          Common Use Cases
        </h2>
        <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
          <li><strong>Database Primary Keys:</strong> Unique identifiers for database records</li>
          <li><strong>API Request IDs:</strong> Track requests across distributed systems</li>
          <li><strong>Session IDs:</strong> Identify user sessions securely</li>
          <li><strong>File Names:</strong> Generate unique file names to avoid conflicts</li>
          <li><strong>Transaction IDs:</strong> Track financial or business transactions</li>
        </ul>
      </div>
    </ToolLayout>
  )
}
