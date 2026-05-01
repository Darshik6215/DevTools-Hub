'use client'

import { useState, useCallback } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSchema from '@/components/FAQSchema'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function ImageCompressor() {
  const [originalImage, setOriginalImage] = useState(null)
  const [compressedImage, setCompressedImage] = useState(null)
  const [originalSize, setOriginalSize] = useState(0)
  const [compressedSize, setCompressedSize] = useState(0)
  const [quality, setQuality] = useState(80)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState('')
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file')
      return
    }

    setFileName(file.name)
    setOriginalSize(file.size)
    
    const reader = new FileReader()
    reader.onload = (event) => {
      setOriginalImage(event.target.result)
      compressImage(event.target.result, file.type)
    }
    reader.readAsDataURL(file)
  }, [quality])

  const compressImage = useCallback((imageSrc, fileType) => {
    setLoading(true)
    
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, img.width, img.height)
      
      // Compress with quality setting
      canvas.toBlob(
        (blob) => {
          setCompressedSize(blob.size)
          const reader = new FileReader()
          reader.onload = (e) => {
            setCompressedImage(e.target.result)
            setLoading(false)
          }
          reader.readAsDataURL(blob)
        },
        fileType === 'image/png' ? 'image/jpeg' : fileType,
        quality / 100
      )
    }
    img.src = imageSrc
  }, [quality])

  const handleQualityChange = (newQuality) => {
    setQuality(newQuality)
    if (originalImage) {
      compressImage(originalImage, 'image/jpeg')
    }
  }

  const downloadImage = () => {
    if (!compressedImage) return
    
    const link = document.createElement('a')
    link.href = compressedImage
    link.download = `compressed-${fileName}`
    link.click()
  }

  const clearAll = () => {
    setOriginalImage(null)
    setCompressedImage(null)
    setOriginalSize(0)
    setCompressedSize(0)
    setFileName('')
    setQuality(80)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const compressionRatio = originalSize > 0 
    ? Math.round((1 - compressedSize / originalSize) * 100) 
    : 0

  const faqs = [
    {
      question: 'How does image compression work?',
      answer: 'Image compression reduces file size by removing unnecessary data while maintaining visual quality. Our tool uses lossy compression to significantly reduce file sizes.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support JPG, PNG, WebP, and most common image formats. The tool automatically converts PNG to JPG for better compression.'
    },
    {
      question: 'Is my image data secure?',
      answer: 'Yes! All compression happens in your browser. Your images are never uploaded to our servers, ensuring complete privacy.'
    },
    {
      question: 'What quality setting should I use?',
      answer: '80% quality provides excellent balance between file size and visual quality. Use 90%+ for high-quality images, 60-70% for web thumbnails.'
    }
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <ToolLayout
        title="Free Online Image Compressor - Reduce Image Size Without Losing Quality"
        description="Compress JPG, PNG, WebP images instantly. Reduce file size by up to 80% while maintaining quality. Fast, free, and secure image compression tool."
        icon="🗜️"
      >
        <Breadcrumb 
          items={[
            { label: 'Image Compressor', href: '/image-compressor' }
          ]} 
        />

        {/* Ad Placement - Above Tool */}
        <div className="mb-6">
          <AdComponent size="banner" />
        </div>

        {/* Tool Interface */}
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
          {/* Upload Section */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-text-primary mb-3">
              Upload Image
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex-1 cursor-pointer">
                <div className="border-2 border-dashed border-border hover:border-primary rounded-lg p-8 text-center transition-all hover:bg-bg-secondary">
                  <div className="text-5xl mb-3">📁</div>
                  <p className="text-text-primary font-medium mb-1">
                    Click to upload or drag & drop
                  </p>
                  <p className="text-sm text-text-secondary">
                    JPG, PNG, WebP (Max 10MB)
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Quality Slider */}
          {originalImage && (
            <div className="mb-6 p-4 bg-bg-secondary rounded-lg">
              <label className="block text-lg font-semibold text-text-primary mb-3">
                Compression Quality: {quality}%
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => handleQualityChange(parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-2">
                <span>Smaller Size</span>
                <span>Better Quality</span>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
              <p className="text-text-secondary mt-4">Compressing image...</p>
            </div>
          )}

          {/* Results */}
          {compressedImage && !loading && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-bg-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {formatFileSize(originalSize)}
                  </div>
                  <div className="text-sm text-text-secondary mt-1">Original Size</div>
                </div>
                <div className="bg-bg-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-500">
                    {formatFileSize(compressedSize)}
                  </div>
                  <div className="text-sm text-text-secondary mt-1">Compressed Size</div>
                </div>
                <div className="bg-bg-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">
                    {compressionRatio}%
                  </div>
                  <div className="text-sm text-text-secondary mt-1">Size Reduced</div>
                </div>
              </div>

              {/* Image Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-2">Original</h3>
                  <img src={originalImage} alt="Original" className="w-full rounded-lg border border-border" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-2">Compressed</h3>
                  <img src={compressedImage} alt="Compressed" className="w-full rounded-lg border border-border" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={downloadImage}
                  className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                >
                  📥 Download Compressed
                </button>
                <button
                  onClick={clearAll}
                  className="flex-1 sm:flex-none px-6 py-3 bg-bg-secondary text-text-primary font-semibold rounded-lg hover:bg-border transition-all"
                >
                  🗑️ Clear All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Ad Placement - After Tool */}
        <div className="my-8">
          <AdComponent size="leaderboard" />
        </div>

        {/* SEO Content */}
        <div className="mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            What is Image Compression?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Image compression is the process of reducing the file size of an image while maintaining acceptable visual quality. 
            Our free online image compressor uses advanced algorithms to compress JPG, PNG, and WebP images by up to 80% 
            without noticeable quality loss.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            Why Compress Images?
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Faster Website Loading:</strong> Smaller images load faster, improving user experience and SEO rankings</li>
            <li><strong>Save Storage Space:</strong> Reduce storage costs on servers and cloud platforms</li>
            <li><strong>Better Performance:</strong> Compressed images use less bandwidth and load faster on mobile devices</li>
            <li><strong>Improved SEO:</strong> Google favors fast-loading websites with optimized images</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
            How to Use the Image Compressor
          </h2>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Click the upload area or drag and drop your image</li>
            <li>Adjust the quality slider (80% recommended for best balance)</li>
            <li>Preview the compressed image and compare with original</li>
            <li>Download the compressed image to your device</li>
          </ol>
        </div>

        {/* FAQ Section */}
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
