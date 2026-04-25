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
        <div className="mb-8">
          <label className="block text-sm font-medium mb-3 text-gray-700">
            Select Image File
          </label>
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="text-4xl mb-2">📁</div>
                <p className="text-gray-600">
                  {file ? file.name : 'Click to select image'}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Supports: PNG, JPG, WebP, GIF (Max 10MB)
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Format Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-3 text-gray-700">
            Convert To
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((fmt) => (
              <label
                key={fmt.value}
                className={`cursor-pointer p-4 border-2 rounded-lg text-center transition-all ${
                  format === fmt.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
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
                <div className="font-bold text-lg mb-1">{fmt.label}</div>
                <div className="text-xs text-gray-500">{fmt.description}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        {previewUrl && (
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3 text-gray-700">
              Original Image Preview
            </label>
            <div className="border rounded-lg p-4 bg-gray-50">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full h-auto max-h-96 mx-auto rounded"
              />
              <div className="mt-3 text-sm text-gray-600 text-center">
                Size: {(file.size / 1024).toFixed(2)} KB
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <div className="flex items-start">
              <span className="text-red-500 text-xl mr-3">⚠</span>
              <div>
                <h3 className="font-semibold text-red-800">Error</h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleConvert}
            disabled={!file || loading}
            className="flex-1 px-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-3"
          >
            {loading && <LoadingSpinner size="small" />}
            {loading ? 'Converting...' : '🔄 Convert Image'}
          </button>
          
          <button
            onClick={handleReset}
            className="px-6 py-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Converted Image Display */}
        {convertedUrl && (
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-green-900">✓ Conversion Successful!</h3>
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                ⬇ Download {format.toUpperCase()}
              </button>
            </div>
            <div className="border rounded-lg p-4 bg-white">
              <img
                src={convertedUrl}
                alt="Converted"
                className="max-w-full h-auto max-h-96 mx-auto rounded"
              />
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">ℹ️ Format Guide:</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• <strong>PNG:</strong> Best for graphics with transparency, lossless quality</li>
            <li>• <strong>JPG:</strong> Best for photos, smaller file size, no transparency</li>
            <li>• <strong>WebP:</strong> Modern format with best compression and quality</li>
            <li>• <strong>GIF:</strong> Supports animation, limited colors</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  )
}
