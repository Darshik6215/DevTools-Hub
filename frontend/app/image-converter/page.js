'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { convertImage } from '@/lib/api'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function ImageConverter() {
  const [file, setFile] = useState(null)
  const [format, setFormat] = useState('png')
  const [convertedUrl, setConvertedUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')

  // Supported formats
  const formats = [
    { value: 'png', label: 'PNG', description: 'Lossless, supports transparency' },
    { value: 'jpg', label: 'JPG', description: 'Compressed, smaller file size' },
    { value: 'webp', label: 'WebP', description: 'Modern format, best compression' },
    { value: 'gif', label: 'GIF', description: 'Supports animation' },
  ]

  /**
   * Handle file selection
   */
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    
    if (!selectedFile) return

    // Validate file type
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select a valid image file')
      return
    }

    // Validate file size (max 10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB')
      return
    }

    setFile(selectedFile)
    setPreviewUrl(URL.createObjectURL(selectedFile))
    setConvertedUrl('')
    setError('')
  }

  /**
   * Convert image to selected format
   */
  const handleConvert = async () => {
    if (!file) {
      setError('Please select an image first')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const result = await convertImage(file, format)
      setConvertedUrl(result.url)
    } catch (err) {
      setError(err.message || 'Failed to convert image')
      console.error('Conversion error:', err)
    } finally {
      setLoading(false)
    }
  }

  /**
   * Download converted image
   */
  const handleDownload = () => {
    if (!convertedUrl) return

    const link = document.createElement('a')
    link.href = convertedUrl
    link.download = `converted-image.${format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  /**
   * Reset all states
   */
  const handleReset = () => {
    setFile(null)
    setPreviewUrl('')
    setConvertedUrl('')
    setError('')
    if (previewUrl) URL.revokeObjectURL(previewUrl)
  }

  return (
    <ToolLayout 
      title="Image Converter" 
      description="Convert images between PNG, JPG, WebP and GIF formats"
    >
      <div className="max-w-3xl mx-auto">
        {/* File Upload Section */}
        <div className="mb-8 reveal">
          <label className="block text-sm font-medium mb-3 text-text-primary">
            Select Image File
          </label>
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:border-primary hover:bg-primary/5 transition-all group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">📁</div>
                <p className="text-text-primary font-medium">
                  {file ? file.name : 'Click to select image or drag and drop'}
                </p>
                <p className="text-xs text-text-secondary mt-2">
                  Supports: PNG, JPG, WebP, GIF (Max 10MB)
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Format Selection */}
        <div className="mb-8 reveal reveal-delay-1">
          <label className="block text-sm font-medium mb-3 text-text-primary">
            Convert To
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((fmt) => (
              <label
                key={fmt.value}
                className={`cursor-pointer p-4 border-2 rounded-xl text-center transition-all transform hover:scale-105 active:scale-95 ${
                  format === fmt.value
                    ? 'border-primary bg-primary/10 shadow-md ring-2 ring-primary/20'
                    : 'border-border bg-bg-secondary hover:border-primary/50 text-text-secondary'
                }`}
              >
                <input
                  type="radio"
                  name="format"
                  value={fmt.value}
                  checked={format === fmt.value}
                  onChange={(e) => setFormat(e.target.value)}
                  className="hidden"
                />
                <div className={`font-bold text-lg mb-1 ${format === fmt.value ? 'text-primary' : 'text-text-primary'}`}>{fmt.label}</div>
                <div className="text-xs opacity-70">{fmt.description}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        {previewUrl && (
          <div className="mb-8 reveal">
            <label className="block text-sm font-medium mb-3 text-text-primary">
              Original Image Preview
            </label>
            <div className="border border-border rounded-xl p-4 bg-bg-secondary">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full h-auto max-h-96 mx-auto rounded-lg shadow-sm"
              />
              <div className="mt-3 text-sm text-text-secondary text-center font-medium">
                Size: {(file.size / 1024).toFixed(2)} KB
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border-l-4 border-red-500 rounded-lg reveal">
            <div className="flex items-start">
              <span className="text-red-500 text-xl mr-3">⚠</span>
              <div>
                <h3 className="font-semibold text-text-primary">Error</h3>
                <p className="text-red-500 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 reveal reveal-delay-2">
          <button
            onClick={handleConvert}
            disabled={!file || loading}
            className="flex-1 px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:opacity-90 disabled:bg-border disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-lg transform active:scale-95"
          >
            {loading && <LoadingSpinner size="small" />}
            {loading ? 'Converting...' : '🔄 Convert Image'}
          </button>
          
          <button
            onClick={handleReset}
            className="px-8 py-4 bg-bg-secondary text-text-primary border border-border rounded-xl hover:bg-border transition-all font-semibold"
          >
            Reset
          </button>
        </div>

        {/* Converted Image Display */}
        {convertedUrl && (
          <div className="p-6 bg-bg-secondary rounded-xl border-2 border-primary/20 shadow-xl reveal">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <h3 className="font-bold text-text-primary flex items-center gap-2">
                <span className="text-green-500 text-xl font-bold">✓</span> Conversion Successful!
              </h3>
              <button
                onClick={handleDownload}
                className="w-full md:w-auto px-8 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-all font-bold shadow-md transform active:scale-95"
              >
                ⬇ Download {format.toUpperCase()}
              </button>
            </div>
            <div className="border border-border rounded-lg p-4 bg-bg-primary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={convertedUrl}
                alt="Converted"
                className="max-w-full h-auto max-h-96 mx-auto rounded shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 p-6 bg-bg-secondary rounded-xl border border-border reveal">
          <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-xl">ℹ️</span> Format Guide:
          </h3>
          <ul className="text-sm text-text-secondary space-y-3">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> <strong className="text-text-primary">PNG:</strong> Best for graphics with transparency, lossless quality</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> <strong className="text-text-primary">JPG:</strong> Best for photos, smaller file size, no transparency</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> <strong className="text-text-primary">WebP:</strong> Modern format with best compression and quality</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> <strong className="text-text-primary">GIF:</strong> Supports animation, limited colors</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
