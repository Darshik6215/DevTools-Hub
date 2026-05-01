import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to Image Resizing - Maintain Aspect Ratio & Quality | DevTools Hub',
  description: 'Learn how to resize images properly for the web. Understand aspect ratio, interpolation, and how to scale images without losing clarity.',
  keywords: ['image resizing', 'aspect ratio', 'resize image online', 'scale image', 'pixel density', 'image dimensions', 'web performance'],
}

export default function ImageResizingGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on April 8, 2024 • 8 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Image Resizing Guide: Scaling Your Graphics Correctly
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            One of the most common mistakes in web development is serving images that are too large 
            for their display area. Learn how to resize images to perfection.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">📏</div>
          <p className="text-text-secondary">Image Resizer Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Importance of Correct Sizing</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            If your website displays a profile picture at 100x100 pixels, but you're loading a 2000x2000 
            pixel source file, you're forcing your users to download 400 times more data than necessary. 
            Resizing images to their actual display dimensions is critical for mobile performance.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Understanding Aspect Ratio</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            The aspect ratio is the proportional relationship between an image's width and its height. 
            When resizing, it's crucial to maintain this ratio to prevent your images from looking 
            stretched or squashed.
          </p>
          <div className="bg-card-bg border border-border p-6 rounded-xl mb-8">
            <h3 className="text-lg font-bold text-text-primary mb-3">Common Aspect Ratios</h3>
            <ul className="text-sm space-y-2">
              <li>📐 <strong className="text-primary">1:1 (Square):</strong> Popular for profile pictures and social media posts.</li>
              <li>📐 <strong className="text-primary">16:9 (Widescreen):</strong> The standard for most modern displays and YouTube videos.</li>
              <li>📐 <strong className="text-primary">4:3 (Traditional):</strong> Common for digital photography and older monitors.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Resize vs. Crop</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Resizing</h4>
              <p className="text-sm text-text-secondary">Changes the overall dimensions of the entire image. The content remains the same, but the pixels are scaled down.</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Cropping</h4>
              <p className="text-sm text-text-secondary">Removes the outer parts of an image to change its focus or fit a specific aspect ratio.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Resizing Best Practices</h2>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>✅ <strong className="text-text-primary">Always keep a backup:</strong> Never resize your only copy of a high-res original. Scaling up later will result in pixelation.</li>
            <li>✅ <strong className="text-text-primary">2x for Retina:</strong> For high-density displays (like iPhones), serve images at twice their display size (e.g., a 100px icon should be 200px).</li>
            <li>✅ <strong className="text-text-primary">Combine with compression:</strong> Always run your resized images through a compressor to shave off extra bytes.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Using Our Image Resizer</h2>
          <p className="text-text-secondary mb-6">
            Our <Link href="/image-resizer" className="text-primary hover:underline">Image Resizer tool</Link> makes 
            scaling easy and precise:
          </p>
          <ol className="text-text-secondary space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Set Dimensions:</strong> Enter your target width or height. Our tool can lock the aspect ratio for you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Percent Scaling:</strong> Or simply scale by percentage (e.g., "reduce to 50%").</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Instant Preview:</strong> See exactly how your resized image will look before downloading.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Properly sized images are the foundation of a fast, professional website. By understanding 
            aspect ratios and serving only the pixels you need, you significantly improve your 
            site's performance and user experience. Try our image resizer today!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Resize Your Images</h3>
            <p className="text-white/90 mb-6">
              Need to fit an image into a specific space? Resize it perfectly with our free online tool.
            </p>
            <Link
              href="/image-resizer"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to Image Resizer →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/image-optimization-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🖼️</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Image Optimization Guide</h4>
              <p className="text-text-secondary text-sm">Combining resizing with compression</p>
            </Link>
            <Link href="/blog/image-formats-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🖼️</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Image Formats Guide</h4>
              <p className="text-text-secondary text-sm">Choosing the best format after resizing</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
