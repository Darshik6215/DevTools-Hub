'use client'

import { useState, useEffect } from 'react'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'

export default function DockerfileGenerator() {
  const [language, setLanguage] = useState('nodejs')
  const [framework, setFramework] = useState('express')
  const [port, setPort] = useState('3000')
  const [packageManager, setPackageManager] = useState('npm')
  const [includeIgnore, setIncludeIgnore] = useState(true)
  const [dockerfile, setDockerfile] = useState('')
  const [dockerignore, setDockerignore] = useState('')
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  const languages = {
    nodejs: {
      name: 'Node.js',
      frameworks: ['express', 'nextjs', 'nest', 'strapi'],
      packageManagers: ['npm', 'yarn', 'pnpm']
    },
    python: {
      name: 'Python',
      frameworks: ['django', 'flask', 'fastapi'],
      packageManagers: ['pip', 'poetry']
    },
    php: {
      name: 'PHP',
      frameworks: ['laravel', 'symfony', 'wordpress'],
      packageManagers: ['composer']
    },
    java: {
      name: 'Java',
      frameworks: ['spring-boot', 'maven', 'gradle'],
      packageManagers: ['maven', 'gradle']
    }
  }

  const generateDockerfile = () => {
    let content = ''
    let ignore = ''

    if (language === 'nodejs') {
      const lockFile = packageManager === 'yarn' ? 'yarn.lock' : (packageManager === 'pnpm' ? 'pnpm-lock.yaml' : 'package-lock.json')
      const installCmd = packageManager === 'yarn' ? 'yarn install' : (packageManager === 'pnpm' ? 'pnpm install' : 'npm install')
      
      content = `# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ${packageManager !== 'npm' ? lockFile : ''} ./
RUN ${installCmd}
COPY . .
${framework === 'nextjs' ? 'RUN npm run build' : ''}

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE ${port}
${framework === 'nextjs' ? 'CMD ["npm", "start"]' : 'CMD ["npm", "run", "dev"]'}
`
      ignore = `node_modules
npm-debug.log
build
.next
.git
.env
Dockerfile
.dockerignore`
    } else if (language === 'python') {
      content = `# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Expose port
EXPOSE ${port}

# Run the application
${framework === 'django' ? 'CMD ["python", "manage.py", "runserver", "0.0.0.0:' + port + '"]' : 
  framework === 'fastapi' ? 'CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "' + port + '"]' : 
  'CMD ["python", "app.py"]'}
`
      ignore = `__pycache__/
*.py[cod]
*$py.class
.env
.venv
venv/
ENV/
Dockerfile
.dockerignore`
    } else if (language === 'php') {
      content = `# Use PHP with Apache
FROM php:8.2-apache

# Install dependencies
RUN apt-get update && apt-get install -y \\
    libpng-dev \\
    zlib1g-dev \\
    libxml2-dev \\
    libzip-dev \\
    && docker-php-ext-install pdo_mysql gd zip

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set work directory
WORKDIR /var/www/html

# Copy project
COPY . .

# Expose port
EXPOSE ${port}
`
      ignore = `vendor/
.env
.git
Dockerfile
.dockerignore`
    } else if (language === 'java') {
      content = `# Build stage
FROM maven:3.8-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Production stage
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE ${port}
ENTRYPOINT ["java", "-jar", "app.jar"]
`
      ignore = `target/
.git
Dockerfile
.dockerignore`
    }

    setDockerfile(content.trim())
    setDockerignore(ignore.trim())
  }

  useEffect(() => {
    generateDockerfile()
  }, [language, framework, port, packageManager])

  const downloadFile = (filename, content) => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleClear = () => {
    setLanguage('nodejs')
    setFramework('express')
    setPort('3000')
    setPackageManager('npm')
    setIncludeIgnore(true)
  }

  const loadSample = () => {
    setLanguage('python')
    setFramework('fastapi')
    setPort('8000')
    setPackageManager('pip')
    setIncludeIgnore(true)
  }

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={loadSample}
          className="flex-1 py-3 bg-primary text-white rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:opacity-90"
        >
          📝 Load Sample
        </button>
        <button
          onClick={handleClear}
          className="flex-1 py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg font-bold transition-all border border-border"
        >
          🗑️ Reset
        </button>
      </div>

      {/* Configuration Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-text-primary font-semibold mb-2">Programming Language</label>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value)
                setFramework(languages[e.target.value].frameworks[0])
                setPackageManager(languages[e.target.value].packageManagers[0])
              }}
              className="w-full bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none"
            >
              {Object.entries(languages).map(([key, value]) => (
                <option key={key} value={key}>{value.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">Framework</label>
            <select
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
              className="w-full bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none capitalize"
            >
              {languages[language].frameworks.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-text-primary font-semibold mb-2">Port Number</label>
              <input
                type="number"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                placeholder="3000"
                className="w-full bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-text-primary font-semibold mb-2">Package Manager</label>
              <select
                value={packageManager}
                onChange={(e) => setPackageManager(e.target.value)}
                className="w-full bg-bg-secondary text-text-primary rounded-lg px-4 py-3 border border-border focus:border-primary outline-none capitalize"
              >
                {languages[language].packageManagers.map((pm) => (
                  <option key={pm} value={pm}>{pm}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2">
            <input
              type="checkbox"
              id="includeIgnore"
              checked={includeIgnore}
              onChange={(e) => setIncludeIgnore(e.target.checked)}
              className="w-5 h-5 accent-primary rounded border-border"
            />
            <label htmlFor="includeIgnore" className="text-text-primary font-medium cursor-pointer">
              Include .dockerignore
            </label>
          </div>

          <button
            onClick={handleClear}
            className="w-full py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg font-bold transition-all border border-border"
          >
            🗑️ Clear / Reset
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-text-primary font-semibold">Dockerfile</label>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(dockerfile)}
                className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-all font-bold"
              >
                {copyStatus ? '✅ Copied' : '📋 Copy'}
              </button>
              <button
                onClick={() => downloadFile('Dockerfile', dockerfile)}
                className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-md hover:bg-accent/20 transition-all font-bold"
              >
                📥 Download
              </button>
            </div>
          </div>
          <pre className="bg-bg-secondary text-text-primary p-4 rounded-xl border border-border overflow-x-auto font-mono text-sm h-[400px]">
            {dockerfile}
          </pre>
        </div>
      </div>

      {includeIgnore && (
        <div className="reveal reveal-delay-2">
          <div className="flex items-center justify-between mb-2">
            <label className="text-text-primary font-semibold">.dockerignore</label>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(dockerignore)}
                className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-all font-bold"
              >
                {copyStatus ? '✅ Copied' : '📋 Copy'}
              </button>
              <button
                onClick={() => downloadFile('.dockerignore', dockerignore)}
                className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-md hover:bg-accent/20 transition-all font-bold"
              >
                📥 Download
              </button>
            </div>
          </div>
          <pre className="bg-bg-secondary text-text-primary p-4 rounded-xl border border-border overflow-x-auto font-mono text-sm max-h-[200px]">
            {dockerignore}
          </pre>
        </div>
      )}
    </div>
  )
}
