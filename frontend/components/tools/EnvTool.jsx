'use client'

import { useState, useEffect } from 'react'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'

export default function EnvTool() {
  const [activeTab, setActiveTab] = useState('generate')
  const [rows, setRows] = useState([
    { key: 'PORT', value: '3000' },
    { key: 'DATABASE_URL', value: 'mongodb://localhost:27017/mydb' },
    { key: 'API_KEY', value: '' },
    { key: 'SECRET_KEY', value: '' }
  ])
  const [validateText, setValidateText] = useState('')
  const [errors, setErrors] = useState([])
  const [generatedEnv, setGeneratedEnv] = useState('')
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  // Database URL Helper State
  const [showDbHelper, setShowDbHelper] = useState(false)
  const [dbType, setDbType] = useState('mongodb')
  const [dbConfig, setDbConfig] = useState({
    host: 'localhost',
    port: '27017',
    user: '',
    pass: '',
    dbName: 'mydb',
    filePath: '/path/to/db.sqlite'
  })

  const dbTemplates = {
    mongodb: { name: 'MongoDB', defaultPort: '27017' },
    mysql: { name: 'MySQL', defaultPort: '3306' },
    postgresql: { name: 'PostgreSQL', defaultPort: '5432' },
    sqlite: { name: 'SQLite', defaultPort: '' },
    redis: { name: 'Redis', defaultPort: '6379' }
  }

  // Generator Logic
  const addRow = () => {
    setRows([...rows, { key: '', value: '' }])
  }

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index))
  }

  const updateRow = (index, field, value) => {
    const newRows = [...rows]
    newRows[index][field] = value
    setRows(newRows)
  }

  useEffect(() => {
    const env = rows
      .filter(row => row.key.trim())
      .map(row => `${row.key.trim()}=${row.value.trim()}`)
      .join('\n')
    setGeneratedEnv(env)
  }, [rows])

  // Validator Logic
  useEffect(() => {
    if (!validateText.trim()) {
      setErrors([])
      return
    }

    const newErrors = []
    const lines = validateText.split('\n')
    const keys = new Set()

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      if (!trimmedLine || trimmedLine.startsWith('#')) return

      const lineNum = index + 1

      if (!trimmedLine.includes('=')) {
        newErrors.push({ line: lineNum, message: 'Invalid syntax: Missing "=" separator' })
        return
      }

      const [key, ...valueParts] = trimmedLine.split('=')
      const value = valueParts.join('=')

      if (!key.trim()) {
        newErrors.push({ line: lineNum, message: 'Empty key name' })
      } else {
        if (key.includes(' ')) {
          newErrors.push({ line: lineNum, message: `Key "${key}" contains spaces (not allowed)` })
        }
        if (keys.has(key.trim())) {
          newErrors.push({ line: lineNum, message: `Duplicate key: "${key.trim()}"` })
        }
        keys.add(key.trim())
      }
    })

    setErrors(newErrors)
  }, [validateText])

  const generateDbUrl = () => {
    const { host, port, user, pass, dbName, filePath } = dbConfig
    switch (dbType) {
      case 'mongodb':
        return `mongodb://${host}:${port}/${dbName}`
      case 'mysql':
        return `mysql://${user}:${pass}@${host}:${port}/${dbName}`
      case 'postgresql':
        return `postgresql://${user}:${pass}@${host}:${port}/${dbName}`
      case 'sqlite':
        return `sqlite:///${filePath}`
      case 'redis':
        return `redis://${pass ? ':' + pass + '@' : ''}${host}:${port}`
      default:
        return ''
    }
  }

  const applyDbUrl = () => {
    const url = generateDbUrl()
    const dbIndex = rows.findIndex(r => r.key === 'DATABASE_URL')
    if (dbIndex !== -1) {
      updateRow(dbIndex, 'value', url)
    } else {
      setRows([...rows, { key: 'DATABASE_URL', value: url }])
    }
    setShowDbHelper(false)
  }

  const downloadEnv = (content) => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = '.env'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleClear = () => {
    if (activeTab === 'generate') {
      setRows([{ key: '', value: '' }])
    } else {
      setValidateText('')
    }
  }

  const loadSample = () => {
    if (activeTab === 'generate') {
      setRows([
        { key: 'PORT', value: '3000' },
        { key: 'DATABASE_URL', value: 'mongodb://localhost:27017/myapp' },
        { key: 'JWT_SECRET', value: 'super-secret-key-123' },
        { key: 'NODE_ENV', value: 'development' },
        { key: 'DEBUG', value: 'app:*' }
      ])
    } else {
      setValidateText(`# Sample .env file with errors
PORT=3000
DATABASE_URL=mongodb://localhost:27017
API KEY=wrong_format
PORT=duplicate_key
# Valid line
NODE_ENV=production`)
    }
  }

  return (
    <div className="space-y-8">
      {/* Tab Switcher & Load Sample */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex p-1 bg-bg-secondary rounded-xl border border-border w-full max-w-md">
          <button
            onClick={() => setActiveTab('generate')}
            className={`flex-1 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'generate' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            ✨ Generate
          </button>
          <button
            onClick={() => setActiveTab('validate')}
            className={`flex-1 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'validate' ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            🔍 Validate
          </button>
        </div>
        
        <button
          onClick={loadSample}
          className="px-6 py-3 bg-bg-secondary text-primary border border-primary/30 rounded-xl hover:bg-primary/10 transition-all font-bold flex items-center gap-2"
        >
          📝 Load Sample
        </button>
      </div>

      <div className="bg-card-bg rounded-2xl p-6 md:p-8 border border-border shadow-xl">
        {activeTab === 'generate' ? (
          <div className="space-y-8">
            {/* Database URL Helper Toggle */}
            <div className="reveal">
              <button
                onClick={() => setShowDbHelper(!showDbHelper)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-bold transition-all ${
                  showDbHelper ? 'bg-primary/20 border-primary text-primary' : 'bg-bg-secondary border-border text-text-secondary hover:text-text-primary'
                }`}
              >
                <span>🗄️</span>
                {showDbHelper ? 'Hide Database Helper' : 'Database URL Generator'}
              </button>

              {showDbHelper && (
                <div className="mt-4 p-6 bg-bg-secondary rounded-xl border border-primary/20 animate-fadeIn space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-primary font-semibold mb-2">Select Database Type</label>
                      <select
                        value={dbType}
                        onChange={(e) => {
                          setDbType(e.target.value)
                          setDbConfig({ ...dbConfig, port: dbTemplates[e.target.value].defaultPort })
                        }}
                        className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none"
                      >
                        {Object.entries(dbTemplates).map(([key, value]) => (
                          <option key={key} value={key}>{value.name}</option>
                        ))}
                      </select>
                    </div>

                    {dbType !== 'sqlite' && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-text-primary font-semibold mb-2">Host</label>
                          <input
                            type="text"
                            value={dbConfig.host}
                            onChange={(e) => setDbConfig({ ...dbConfig, host: e.target.value })}
                            className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-text-primary font-semibold mb-2">Port</label>
                          <input
                            type="text"
                            value={dbConfig.port}
                            onChange={(e) => setDbConfig({ ...dbConfig, port: e.target.value })}
                            className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['mysql', 'postgresql'].includes(dbType) && (
                      <>
                        <div>
                          <label className="block text-text-primary font-semibold mb-2">Username</label>
                          <input
                            type="text"
                            value={dbConfig.user}
                            onChange={(e) => setDbConfig({ ...dbConfig, user: e.target.value })}
                            placeholder="root"
                            className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-text-primary font-semibold mb-2">Password</label>
                          <input
                            type="password"
                            value={dbConfig.pass}
                            onChange={(e) => setDbConfig({ ...dbConfig, pass: e.target.value })}
                            placeholder="password"
                            className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                          />
                        </div>
                      </>
                    )}

                    {dbType === 'redis' && (
                      <div className="md:col-span-2">
                        <label className="block text-text-primary font-semibold mb-2">Password (Optional)</label>
                        <input
                          type="password"
                          value={dbConfig.pass}
                          onChange={(e) => setDbConfig({ ...dbConfig, pass: e.target.value })}
                          placeholder="redis-password"
                          className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                        />
                      </div>
                    )}

                    {['mongodb', 'mysql', 'postgresql'].includes(dbType) && (
                      <div>
                        <label className="block text-text-primary font-semibold mb-2">Database Name</label>
                        <input
                          type="text"
                          value={dbConfig.dbName}
                          onChange={(e) => setDbConfig({ ...dbConfig, dbName: e.target.value })}
                          className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                        />
                      </div>
                    )}

                    {dbType === 'sqlite' && (
                      <div className="md:col-span-3">
                        <label className="block text-text-primary font-semibold mb-2">File Path</label>
                        <input
                          type="text"
                          value={dbConfig.filePath}
                          onChange={(e) => setDbConfig({ ...dbConfig, filePath: e.target.value })}
                          className="w-full bg-card-bg text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none text-sm"
                        />
                        <p className="text-xs text-text-secondary mt-2">Example: /data/db.sqlite or ./dev.db</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs text-text-secondary mb-1 uppercase font-bold tracking-wider">Generated URL Preview</p>
                      <code className="text-primary font-mono text-sm break-all">{generateDbUrl()}</code>
                    </div>
                    <button
                      onClick={applyDbUrl}
                      className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                    >
                      Apply to .env
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-text-primary">Environment Variables</h3>
                  <button
                    onClick={addRow}
                    className="text-primary hover:text-primary-hover font-bold text-sm flex items-center gap-1"
                  >
                    ➕ Add Row
                  </button>
                </div>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {rows.map((row, index) => (
                    <div key={index} className="flex gap-2 group">
                      <input
                        type="text"
                        value={row.key}
                        onChange={(e) => updateRow(index, 'key', e.target.value)}
                        placeholder="KEY (e.g. PORT)"
                        className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none font-mono text-sm"
                      />
                      <input
                        type="text"
                        value={row.value}
                        onChange={(e) => updateRow(index, 'value', e.target.value)}
                        placeholder="VALUE"
                        className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none font-mono text-sm"
                      />
                      <button
                        onClick={() => removeRow(index)}
                        className="p-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleClear}
                  className="w-full py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg font-bold transition-all border border-border mt-4"
                >
                  🗑️ Clear All
                </button>
              </div>

              {/* Preview Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-text-primary">Preview (.env)</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(generatedEnv)}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all font-bold text-sm"
                    >
                      {copyStatus ? '✅ Copied' : '📋 Copy'}
                    </button>
                    <button
                      onClick={() => downloadEnv(generatedEnv)}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-all font-bold text-sm"
                    >
                      📥 Download
                    </button>
                  </div>
                </div>
                <pre className="w-full bg-bg-secondary text-text-primary p-6 rounded-xl border border-border font-mono text-sm h-[400px] overflow-auto">
                  {generatedEnv || '# Your variables will appear here'}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Validation Input */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary">Paste .env Content</h3>
              <textarea
                value={validateText}
                onChange={(e) => setValidateText(e.target.value)}
                placeholder="PORT=3000&#10;DATABASE_URL=mongodb://...&#10;API_KEY=your_key"
                className="w-full bg-bg-secondary text-text-primary p-6 rounded-xl border border-border font-mono text-sm h-[400px] focus:border-primary outline-none resize-none"
              />
              <button
                onClick={handleClear}
                className="w-full py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg font-bold transition-all border border-border"
              >
                🗑️ Clear Input
              </button>
            </div>

            {/* Validation Results */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary">Validation Results</h3>
              <div className="bg-bg-secondary rounded-xl border border-border h-[456px] overflow-auto p-6">
                {validateText.trim() === '' ? (
                  <div className="flex flex-col items-center justify-center h-full text-text-secondary text-center">
                    <span className="text-5xl mb-4">🔍</span>
                    <p className="font-medium">Enter your .env content to start validation</p>
                  </div>
                ) : errors.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-red-400 font-bold mb-4">
                      <span>⚠️ Found {errors.length} error(s)</span>
                    </div>
                    {errors.map((err, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-fadeIn">
                        <span className="text-red-400 font-bold shrink-0">Line {err.line}:</span>
                        <span className="text-text-primary text-sm">{err.message}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center animate-fadeIn">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                      <span className="text-2xl text-green-400">✓</span>
                    </div>
                    <p className="text-green-400 font-bold text-lg mb-2">No Errors Found!</p>
                    <p className="text-text-secondary text-sm">Your .env file syntax is valid.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
