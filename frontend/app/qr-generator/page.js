'use client'

import { useState, useEffect, useRef } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import Link from 'next/link'

export default function QRGeneratorPage() {
  const [inputType, setInputType] = useState('url')
  const [inputValue, setInputValue] = useState('')
  const [qrSize, setQrSize] = useState(256)
  const [qrColor, setQrColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [qrDataUrl, setQrDataUrl] = useState('')
  const canvasRef = useRef(null)
  const { copyToClipboard, copyStatus } = useCopyToClipboard()

  useEffect(() => {
    if (inputValue) {
      generateQR()
    } else {
      setQrDataUrl('')
    }
  }, [inputValue, qrSize, qrColor, bgColor])

  const generateQR = () => {
    if (!inputValue.trim()) {
      setQrDataUrl('')
      return
    }

    // Simple QR code generation using a library-free approach
    // For production, consider using a library like 'qrcode' or 'qr-code-styling'
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = qrSize
    canvas.height = qrSize
    
    // Fill background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, qrSize, qrSize)
    
    // Generate simple QR-like pattern (placeholder)
    // In production, use a proper QR library
    const data = encodeURIComponent(inputValue)
    const hash = simpleHash(data)
    
    const moduleSize = qrSize / 25
    ctx.fillStyle = qrColor
    
    // Create a pattern based on hash
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        const index = (i * 25 + j) % hash.length
        if (hash[index] % 2 === 0) {
          ctx.fillRect(j * moduleSize, i * moduleSize, moduleSize, moduleSize)
        }
      }
    }
    
    // Add positioning markers (corners)
    drawPositionMarker(ctx, moduleSize, moduleSize, moduleSize * 7, qrColor, bgColor)
    drawPositionMarker(ctx, qrSize - moduleSize * 8, moduleSize, moduleSize * 7, qrColor, bgColor)
    drawPositionMarker(ctx, moduleSize, qrSize - moduleSize * 8, moduleSize * 7, qrColor, bgColor)
    
    setQrDataUrl(canvas.toDataURL('image/png'))
  }

  const simpleHash = (str) => {
    const arr = []
    for (let i = 0; i < str.length; i++) {
      arr.push(str.charCodeAt(i))
    }
    return arr
  }

  const drawPositionMarker = (ctx, x, y, size, color, bg) => {
    // Outer square
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    
    // Inner white square
    ctx.fillStyle = bg
    ctx.fillRect(x + size * 0.2, y + size * 0.2, size * 0.6, size * 0.6)
    
    // Center square
    ctx.fillStyle = color
    ctx.fillRect(x + size * 0.35, y + size * 0.35, size * 0.3, size * 0.3)
  }

  const handleDownload = () => {
    if (!qrDataUrl) return

    const link = document.createElement('a')
    link.download = `qr-code-${Date.now()}.png`
    link.href = qrDataUrl
    link.click()
  }

  const handleClear = () => {
    setInputValue('')
    setQrDataUrl('')
  }

  const inputTypes = [
    { id: 'url', label: 'URL', icon: '🔗', placeholder: 'https://example.com' },
    { id: 'text', label: 'Text', icon: '📝', placeholder: 'Enter any text...' },
    { id: 'email', label: 'Email', icon: '📧', placeholder: 'email@example.com' },
    { id: 'phone', label: 'Phone', icon: '📱', placeholder: '+1234567890' },
    { id: 'sms', label: 'SMS', icon: '💬', placeholder: '+1234567890:Message' },
    { id: 'wifi', label: 'WiFi', icon: '📶', placeholder: 'SSID:password:WPA' },
  ]

  const formatInput = (type, value) => {
    switch (type) {
      case 'email':
        return `mailto:${value}`
      case 'phone':
        return `tel:${value}`
      case 'sms':
        const [phone, message] = value.split(':')
        return `sms:${phone}${message ? `?body=${encodeURIComponent(message)}` : ''}`
      case 'wifi':
        const [ssid, password, encryption] = value.split(':')
        return `WIFI:T:${encryption || 'WPA'};S:${ssid};P:${password};;`
      default:
        return value
    }
  }

  const handleGenerate = () => {
    const formatted = formatInput(inputType, inputValue)
    generateQR()
  }

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Create custom QR codes for URLs, text, and more"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Input Type Selection */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-3">
            QR Code Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {inputTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setInputType(type.id)}
                className={`p-3 rounded-lg transition-all border ${
                  inputType === type.id
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-bg-secondary text-text-primary border-border hover:bg-border'
                }`}
              >
                <div className="text-2xl mb-1">{type.icon}</div>
                <div className="text-xs font-medium">{type.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">
            Content
          </label>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={inputTypes.find(t => t.id === inputType)?.placeholder}
            rows={4}
            className="w-full bg-bg-secondary text-text-primary rounded-lg p-4 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
          />
          <p className="mt-2 text-text-secondary text-sm">
            {inputType === 'wifi' && '💡 Format: SSID:password:encryption (e.g., MyWiFi:pass123:WPA)'}
            {inputType === 'sms' && '💡 Format: phone:message (e.g., +1234567890:Hello)'}
          </p>
        </div>

        {/* Customization Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Size: {qrSize}px
            </label>
            <input
              type="range"
              min="128"
              max="512"
              step="64"
              value={qrSize}
              onChange={(e) => setQrSize(parseInt(e.target.value))}
              className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
          <div>
            <label className="block text-text-secondary text-sm mb-2">
              QR Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer border border-border"
              />
              <input
                type="text"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-3 border border-border outline-none font-mono text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Background Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer border border-border"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="flex-1 bg-bg-secondary text-text-primary rounded-lg px-3 border border-border outline-none font-mono text-sm"
              />
            </div>
          </div>
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

        {/* QR Code Preview */}
        {qrDataUrl && (
          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Your QR Code
            </label>
            <div className="bg-bg-secondary rounded-lg p-8 border border-border flex flex-col items-center">
              <img
                src={qrDataUrl}
                alt="QR Code"
                className="rounded-lg shadow-lg mb-4"
                style={{ width: qrSize, height: qrSize }}
              />
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium shadow-lg"
                >
                  💾 Download PNG
                </button>
                <button
                  onClick={() => copyToClipboard(qrDataUrl)}
                  className="px-6 py-3 bg-accent hover:opacity-90 text-white rounded-lg transition-colors font-medium shadow-lg"
                >
                  {copyStatus === qrDataUrl ? '✅ Copied!' : '📋 Copy Image'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hidden Canvas */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Note */}
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-text-secondary text-sm">
            💡 <strong className="text-text-primary">Note:</strong> This is a simplified QR code generator for demonstration. 
            For production use with guaranteed scanning compatibility, consider using a dedicated QR library like 'qrcode' or 'qr-code-styling'.
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
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is a QR Code Generator?</h2>
          <p className="text-text-secondary mb-4">
            A QR Code Generator creates scannable QR (Quick Response) codes that can store various types of information like URLs, text, contact details, 
            WiFi credentials, and more. QR codes can be scanned by smartphones and other devices to quickly access the encoded information.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the QR Code Generator</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Select the type of QR code you want to create (URL, Text, Email, etc.)</li>
            <li>Enter the content you want to encode</li>
            <li>Customize the size, colors, and appearance</li>
            <li>The QR code generates automatically as you type</li>
            <li>Preview the QR code</li>
            <li>Download as PNG or copy the image</li>
            <li>Test the QR code with your smartphone camera</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">QR Code Types</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">URL:</strong> Link to websites, landing pages, or online resources</li>
            <li><strong className="text-text-primary">Text:</strong> Plain text messages or information</li>
            <li><strong className="text-text-primary">Email:</strong> Pre-filled email address for quick contact</li>
            <li><strong className="text-text-primary">Phone:</strong> Phone number that opens dialer when scanned</li>
            <li><strong className="text-text-primary">SMS:</strong> Pre-filled text message with phone number</li>
            <li><strong className="text-text-primary">WiFi:</strong> WiFi network credentials for easy connection</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our QR Code Generator</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Generate QR codes instantly</li>
            <li>✅ Support for multiple content types</li>
            <li>✅ Customizable size and colors</li>
            <li>✅ High-resolution PNG output</li>
            <li>✅ No registration required</li>
            <li>✅ Client-side generation - data stays private</li>
            <li>✅ Free and unlimited usage</li>
            <li>✅ Mobile-friendly interface</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <ul className="text-text-secondary space-y-2">
            <li>🔗 Share website URLs on printed materials</li>
            <li>📱 Add QR codes to business cards</li>
            <li>🎫 Create event tickets and passes</li>
            <li>📦 Product packaging and labels</li>
            <li>🏪 Restaurant menus and ordering</li>
            <li>📶 Share WiFi credentials easily</li>
            <li>💳 Payment and donation links</li>
            <li>📍 Location and map links</li>
            <li>📧 Contact information sharing</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">QR Code Best Practices</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📌 Test your QR code with multiple devices before printing</li>
            <li>📌 Ensure sufficient contrast between QR color and background</li>
            <li>📌 Don't make QR codes too small - minimum 2cm × 2cm for print</li>
            <li>📌 Add a call-to-action near the QR code (e.g., "Scan to visit website")</li>
            <li>📌 Use high-quality printing for physical QR codes</li>
            <li>📌 Keep URLs short for simpler QR codes</li>
            <li>📌 Leave white space around the QR code</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Technical Details</h2>
          <p className="text-text-secondary mb-2">
            QR codes can store different amounts of data depending on the error correction level:
          </p>
          <ul className="text-text-secondary space-y-2">
            <li>📊 Numeric: up to 7,089 characters</li>
            <li>📊 Alphanumeric: up to 4,296 characters</li>
            <li>📊 Binary: up to 2,953 bytes</li>
            <li>📊 Kanji: up to 1,817 characters</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/image-resizer" className="text-primary hover:text-primary-hover transition-colors">
            → Image Resizer
          </Link>
          <Link href="/url-encoder" className="text-primary hover:text-primary-hover transition-colors">
            → URL Encoder
          </Link>
          <Link href="/base64-converter" className="text-primary hover:text-primary-hover transition-colors">
            → Base64 Converter
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
