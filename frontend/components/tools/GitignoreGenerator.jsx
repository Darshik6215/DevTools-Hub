'use client'

import { useState, useMemo, useEffect } from 'react'

const TEMPLATES = {
  'Node.js': `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1-v2 build output
dist
out

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next/
out/

# Nuxt.js build output
.nuxt
dist

# Gatsby files
.cache/
public

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VS Code state extensions, etc.
.vscode/`,

  'React': `# Dependency directories
node_modules/

# Build output
build/
dist/

# Logs
*.log

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editors
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`,

  'Next.js': `# Next.js build output
.next/
out/

# Dependency directories
node_modules/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts`,

  'Python': `# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py,cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Sphinx documentation
docs/_build/

# PyBuilder
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
.python-version

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyder-py3

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

# Cython debug symbols
cython_debug/`,

  'Django': `# Django
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal
media/

# Python
__pycache__/
*.py[cod]
*$py.class
*.so

# Environments
.env
.venv
env/
venv/
ENV/

# Static files
staticfiles/
/static/

# Distribution / packaging
build/
dist/
*.egg-info/
*.egg

# Unit test / coverage reports
htmlcov/
.coverage
.coverage.*
.pytest_cache/
coverage.xml

# Celery
celerybeat-schedule
celerybeat.pid

# mypy
.mypy_cache/`,

  'FastAPI': `# FastAPI / Python
__pycache__/
*.py[cod]
*$py.class
*.so

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/

# Distribution
build/
dist/
*.egg-info/
*.egg

# Unit test / coverage reports
htmlcov/
.coverage
.coverage.*
.pytest_cache/
coverage.xml

# Alembic (database migrations)
alembic/versions/__pycache__/

# mypy
.mypy_cache/
.dmypy.json

# Logs
*.log

# Uvicorn / Gunicorn
*.pid`,

  'Flask': `# Flask
instance/
.webassets-cache
flask_session/

# Python
__pycache__/
*.py[cod]
*$py.class
*.so

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/

# Distribution / packaging
build/
dist/
*.egg-info/
*.egg

# Unit test / coverage reports
htmlcov/
.coverage
.coverage.*
.pytest_cache/
coverage.xml

# Logs
*.log

# mypy
.mypy_cache/`,

  'Java': `# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*`,

  'PHP': `# Composer
vendor/
composer.phar
composer.lock

# Logs
*.log

# PHPUnit
.phpunit.result.cache

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/`,

  'VS Code': `.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix`,

  'macOS': `# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk`,
}

export default function GitignoreGenerator() {
  const [selectedTechs, setSelectedTechs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  // Filter technologies based on search
  const filteredTechs = useMemo(() => {
    return Object.keys(TEMPLATES).filter(tech => 
      tech.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Single-select: clicking a tech sets it as the only selection (deselects if already selected)
  const toggleTech = (tech) => {
    setSelectedTechs(prev =>
      prev.includes(tech) ? [] : [tech]
    )
  }

  // Generate .gitignore content
  useEffect(() => {
    if (selectedTechs.length === 0) {
      setOutput('')
      return
    }

    let combined = selectedTechs.map(tech => {
      return `### ${tech} ###\n${TEMPLATES[tech]}\n`
    }).join('\n')

    // Remove duplicates while preserving comments and structure
    const lines = combined.split('\n')
    const seen = new Set()
    const uniqueLines = []

    for (const line of lines) {
      const trimmedLine = line.trim()
      if (trimmedLine.startsWith('#') || trimmedLine === '') {
        uniqueLines.push(line)
      } else if (!seen.has(trimmedLine)) {
        seen.add(trimmedLine)
        uniqueLines.push(line)
      }
    }

    // Clean up excessive empty lines
    const result = uniqueLines.join('\n').replace(/\n{3,}/g, '\n\n')
    setOutput(result)
  }, [selectedTechs])

  const handleCopy = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy', err)
    }
  }

  const handleDownload = () => {
    if (!output) return
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = '.gitignore'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const selectAll = () => {
    setSelectedTechs(Object.keys(TEMPLATES))
  }

  const clearAll = () => {
    setSelectedTechs([])
    setSearchQuery('')
  }

  return (
    <div className="space-y-8 reveal">
      {/* Search and Controls */}
      <div className="bg-bg-secondary p-6 rounded-2xl border border-border shadow-xl">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-96">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">🔍</span>
            <input
              type="text"
              placeholder="Search technologies (e.g. Node, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-bg-primary border border-border rounded-xl text-text-primary focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={clearAll}
              className="flex-1 md:flex-none px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold text-sm"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Tech Grid - Radio-button style toggles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredTechs.map(tech => {
            const isSelected = selectedTechs.includes(tech)
            return (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all text-left w-full group
                  ${isSelected 
                    ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5' 
                    : 'bg-bg-primary border-border hover:border-primary/50'}
                `}
              >
                {/* Radio-style indicator */}
                <div className={`
                  flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                  ${isSelected 
                    ? 'border-primary bg-primary' 
                    : 'border-border group-hover:border-primary/60'}
                `}>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className={`font-bold transition-colors text-sm ${isSelected ? 'text-primary' : 'text-text-primary group-hover:text-primary'}`}>
                  {tech}
                </span>
              </button>
            )
          })}
          {filteredTechs.length === 0 && (
            <div className="col-span-full py-12 text-center text-text-secondary font-medium italic">
              No technologies found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      </div>

      {/* Output Section */}
      <div className="bg-bg-secondary p-6 rounded-2xl border border-border shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h3 className="text-xl font-black text-text-primary uppercase tracking-tight flex items-center gap-2">
              <span className="text-2xl">📄</span> Generated Content
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {selectedTechs.length > 0 
                ? `Including ${selectedTechs.length} template${selectedTechs.length > 1 ? 's' : ''}: ${selectedTechs.join(', ')}` 
                : 'Select technologies above to generate content'}
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleCopy}
              disabled={!output}
              className="flex-1 md:flex-none px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-black text-sm uppercase tracking-wider shadow-lg shadow-primary/20"
            >
              {copied ? '✓ Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handleDownload}
              disabled={!output}
              className="flex-1 md:flex-none px-6 py-3 bg-accent text-white rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-black text-sm uppercase tracking-wider shadow-lg shadow-accent/20"
            >
              Download
            </button>
          </div>
        </div>

        <div className="relative">
          <textarea
            value={output}
            readOnly
            placeholder="# Your .gitignore content will appear here..."
            className="w-full h-[500px] p-6 bg-bg-primary border border-border rounded-xl text-text-primary font-mono text-sm leading-relaxed resize-none focus:ring-2 focus:ring-primary outline-none transition-all custom-scrollbar"
          />
          {!output && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 flex-col gap-4">
              <div className="text-8xl">🚫</div>
              <p className="text-lg font-bold">Waiting for selection...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
