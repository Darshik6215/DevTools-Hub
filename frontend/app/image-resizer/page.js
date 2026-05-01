'use client'

import { useState, useRef } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Link from 'next/link'

export default function ImageResizerPage() {
  const [image, setImage] = useState(null)
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 })
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true)
  const [resizedImage, setResizedImage] = useState(null)
  const [format, setFormat] = useState('png')
  const [quality, setQuality] = useState(90)
  const fileInputRef = useRef(null)
  const canvasRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        setImage(img)
        setOriginalDimensions({ width: img.width, height: img.height })
        setWidth(img.width.toString())
        setHeight(img.height.toString())
        setResizedImage(null)
      }
      img.src = event.target.result
    }
    reader.readAsDataURL(file)
  }

  const handleWidthChange = (newWidth) => {
    setWidth(newWidth)
    if (maintainAspectRatio && image && newWidth) {
      const aspectRatio = originalDimensions.height / originalDimensions.width
      setHeight(Math.round(parseInt(newWidth) * aspectRatio).toString())
    }
  }

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight)
    if (maintainAspectRatio && image && newHeight) {
      const aspectRatio = originalDimensions.width / originalDimensions.height
      setWidth(Math.round(parseInt(newHeight) * aspectRatio).toString())
    }
  }

  const handleResize = () => {
    if (!image || !width || !height) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const newWidth = parseInt(width)
    const newHeight = parseInt(height)
    
    canvas.width = newWidth
    canvas.height = newHeight
    
    ctx.drawImage(image, 0, 0, newWidth, newHeight)
    
    const mimeType = format === 'jpg' ? 'image/jpeg' : `image/${format}`
    const qualityValue = format === 'png' ? 1 : quality / 100
    
    const resizedDataUrl = canvas.toDataURL(mimeType, qualityValue)
    setResizedImage(resizedDataUrl)
  }

  const handleDownload = () => {
    if (!resizedImage) return

    const link = document.createElement('a')
    link.download = `resized-image.${format}`
    link.href = resizedImage
    link.click()
  }

  const handleClear = () => {
    setImage(null)
    setOriginalDimensions({ width: 0, height: 0 })
    setWidth('')
    setHeight('')
    setResizedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const presetSizes = [
    { name: 'Instagram Post', width: 1080, height: 1080 },
    { name: 'Instagram Story', width: 1080, height: 1920 },
    { name: 'Facebook Cover', width: 820, height: 312 },
    { name: 'Twitter Header', width: 1500, height: 500 },
    { name: 'YouTube Thumbnail', width: 1280, height: 720 },
    { name: 'HD (1080p)', width: 1920, height: 1080 },
  ]

  const applyPreset = (preset) => {
    setWidth(preset.width.toString())
    setHeight(preset.height.toString())
    setMaintainAspectRatio(false)
  }

  return (
    <ToolLayout
      title="Image Resizer"
      description="Resize and crop images with custom dimensions"
    >
      {/* Top Ad */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      {/* Main Tool */}
      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Upload Section */}
        <div className="mb-6">
          <label className="block text-text-primary font-semibold mb-2">
            Upload Image
          </label>
          <div className="flex flex-wrap gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors cursor-pointer font-medium shadow-lg"
            >
              📁 Choose Image
            </label>
            {image && (
              <button
                onClick={handleClear}
                className="px-6 py-3 bg-bg-secondary hover:bg-border text-text-primary rounded-lg transition-colors border border-border font-medium"
              >
                🗑️ Clear
              </button>
            )}
          </div>
        </div>

        {/* Original Image Preview */}
        {image && (
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              Original Image ({originalDimensions.width} × {originalDimensions.height})
            </label>
            <div className="bg-bg-secondary rounded-lg p-4 border border-border">
              <img
                src={image.src}
                alt="Original"
                className="max-w-full h-auto max-h-[300px] mx-auto rounded"
              />
            </div>
          </div>
        )}

        {/* Preset Sizes */}
        {image && (
          <div className="mb-6">
            <label className="block text-text-secondary text-sm mb-2">Quick Presets:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {presetSizes.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => applyPreset(preset)}
                  className="px-3 py-2 bg-bg-secondary hover:bg-border text-text-primary text-sm rounded-lg transition-colors border border-border text-left"
                >
                  <div className="font-medium">{preset.name}</div>
                  <div className="text-xs text-text-secondary">{preset.width} × {preset.height}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dimensions Input */}
        {image && (
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              New Dimensions
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-1">Width (px)</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => handleWidthChange(e.target.value)}
                  placeholder="Width"
                  className="w-full bg-bg-secondary text-text-primary rounded-lg p-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-1">Height (px)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => handleHeightChange(e.target.value)}
                  placeholder="Height"
                  className="w-full bg-bg-secondary text-text-primary rounded-lg p-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                type="checkbox"
                id="aspect-ratio"
                checked={maintainAspectRatio}
                onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                className="w-4 h-4 text-primary bg-bg-secondary border-border rounded focus:ring-primary"
              />
              <label htmlFor="aspect-ratio" className="text-text-secondary text-sm cursor-pointer">
                Maintain aspect ratio
              </label>
            </div>
          </div>
        )}

        {/* Format and Quality */}
        {image && (
          <div className="mb-6">
            <label className="block text-text-primary font-semibold mb-2">
              Output Settings
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-1">Format</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full bg-bg-secondary text-text-primary rounded-lg p-3 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="png">PNG</option>
                  <option value="jpg">JPG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>
              {format !== 'png' && (
                <div>
                  <label className="block text-text-secondary text-sm mb-1">
                    Quality: {quality}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(parseInt(e.target.value))}
                    className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {image && (
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={handleResize}
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium shadow-lg"
            >
              ✨ Resize Image
            </button>
            {resizedImage && (
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-accent hover:opacity-90 text-white rounded-lg transition-colors font-medium shadow-lg"
              >
                💾 Download
              </button>
            )}
          </div>
        )}

        {/* Resized Image Preview */}
        {resizedImage && (
          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Resized Image ({width} × {height})
            </label>
            <div className="bg-bg-secondary rounded-lg p-4 border border-border">
              <img
                src={resizedImage}
                alt="Resized"
                className="max-w-full h-auto max-h-[400px] mx-auto rounded"
              />
            </div>
          </div>
        )}

        {/* Hidden Canvas */}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Middle Ad */}
      <div className="my-8">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose prose-invert max-w-none">
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          <h2 className="text-2xl font-bold text-text-primary mb-4">What is an Image Resizer?</h2>
          <p className="text-text-secondary mb-4">
            An Image Resizer is a tool that allows you to change the dimensions of your images. You can resize images to specific widths and heights, 
            maintain aspect ratios, and convert between different image formats. Perfect for optimizing images for web, social media, or printing.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">How to Use the Image Resizer</h2>
          <ol className="text-text-secondary space-y-2 list-decimal list-inside">
            <li>Click "Choose Image" and select your image file</li>
            <li>View the original image dimensions</li>
            <li>Choose a preset size or enter custom dimensions</li>
            <li>Toggle "Maintain aspect ratio" to prevent distortion</li>
            <li>Select output format (PNG, JPG, or WebP)</li>
            <li>Adjust quality slider for JPG and WebP formats</li>
            <li>Click "Resize Image" to process</li>
            <li>Preview the resized image and download it</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Popular Preset Sizes</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">Instagram Post:</strong> 1080 × 1080 px (square format)</li>
            <li><strong className="text-text-primary">Instagram Story:</strong> 1080 × 1920 px (vertical)</li>
            <li><strong className="text-text-primary">Facebook Cover:</strong> 820 × 312 px</li>
            <li><strong className="text-text-primary">Twitter Header:</strong> 1500 × 500 px</li>
            <li><strong className="text-text-primary">YouTube Thumbnail:</strong> 1280 × 720 px</li>
            <li><strong className="text-text-primary">HD (1080p):</strong> 1920 × 1080 px</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Benefits of Using Our Image Resizer</h2>
          <ul className="text-text-secondary space-y-2">
            <li>✅ Resize images to exact dimensions</li>
            <li>✅ Maintain aspect ratio to prevent distortion</li>
            <li>✅ Quick presets for social media platforms</li>
            <li>✅ Support for PNG, JPG, and WebP formats</li>
            <li>✅ Adjustable quality for smaller file sizes</li>
            <li>✅ Real-time preview before downloading</li>
            <li>✅ Client-side processing - images stay private</li>
            <li>✅ No file size limits</li>
            <li>✅ Free and unlimited usage</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Image Format Guide</h2>
          <ul className="text-text-secondary space-y-2">
            <li><strong className="text-text-primary">PNG:</strong> Best for graphics, logos, and images with transparency. Lossless compression.</li>
            <li><strong className="text-text-primary">JPG:</strong> Best for photographs. Smaller file size with adjustable quality.</li>
            <li><strong className="text-text-primary">WebP:</strong> Modern format with excellent compression. Smaller than JPG with similar quality.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Common Use Cases</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📱 Optimize images for social media posts</li>
            <li>🌐 Reduce image size for faster website loading</li>
            <li>📧 Resize images for email attachments</li>
            <li>🖼️ Create thumbnails from large images</li>
            <li>📊 Prepare images for presentations</li>
            <li>🎨 Resize graphics for design projects</li>
            <li>📷 Batch resize photos for portfolios</li>
            <li>💼 Create profile pictures and avatars</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">Tips for Best Results</h2>
          <ul className="text-text-secondary space-y-2">
            <li>📌 Always maintain aspect ratio unless you need specific dimensions</li>
            <li>📌 Use PNG for images with text or sharp edges</li>
            <li>📌 Use JPG with 80-90% quality for photos</li>
            <li>📌 Try WebP for the best compression and quality balance</li>
            <li>📌 Don't upscale images too much - it reduces quality</li>
            <li>📌 Preview the resized image before downloading</li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-text-primary mb-4">🔧 Related Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/image-compressor" className="text-primary hover:text-primary-hover transition-colors">
            → Image Compressor
          </Link>
          <Link href="/image-converter" className="text-primary hover:text-primary-hover transition-colors">
            → Image Converter
          </Link>
          <Link href="/qr-generator" className="text-primary hover:text-primary-hover transition-colors">
            → QR Code Generator
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
