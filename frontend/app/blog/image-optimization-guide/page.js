import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to Image Optimization for Web - Performance & Quality | DevTools Hub',
  description: 'Learn how to optimize images for the web to improve site speed and SEO. Complete guide covering compression, formats, and best practices.',
  keywords: ['image optimization', 'image compression', 'webp vs png', 'image performance', 'optimize images online'],
}

export default function ImageOptimizationGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on March 5, 2024 • 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Complete Guide to Image Optimization for Web
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Images make up over 60% of the average web page's weight. Optimizing your images is the single 
            most effective way to improve your website's performance and Core Web Vitals.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🖼️</div>
          <p className="text-text-secondary">Image Optimization Tools</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why Image Optimization Matters</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Every byte counts on the web. High-resolution images that haven't been optimized can slow down your 
            site, frustrate users, and hurt your SEO rankings. Optimization is about finding the perfect balance 
            between the smallest file size and acceptable visual quality.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Key Optimization Techniques</h2>
          
          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">1. Choosing the Right Format</h3>
          <ul className="text-text-secondary space-y-4 mb-6">
            <li>🖼️ <strong className="text-text-primary">WebP:</strong> The modern standard. Offers superior compression (25-34% smaller than JPG/PNG) with no visible quality loss. Supported by all modern browsers.</li>
            <li>🖼️ <strong className="text-text-primary">JPG/JPEG:</strong> Best for photographs and complex images with many colors. Use for background images or product photos.</li>
            <li>🖼️ <strong className="text-text-primary">PNG:</strong> Best for graphics with transparency, logos, and screenshots where text must be sharp.</li>
            <li>🖼️ <strong className="text-text-primary">SVG:</strong> Best for icons, logos, and simple illustrations. Scalable without quality loss.</li>
          </ul>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">2. Lossy vs. Lossless Compression</h3>
          <p className="text-text-secondary mb-4">
            Understanding the difference is key to a good optimization strategy:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-card-bg border border-border p-4 rounded-lg">
              <h4 className="text-primary font-bold mb-2">Lossy</h4>
              <p className="text-sm text-text-secondary">Removes some data to significantly reduce file size. Most effective for photos where minor data loss isn't noticeable.</p>
            </div>
            <div className="bg-card-bg border border-border p-4 rounded-lg">
              <h4 className="text-green-500 font-bold mb-2">Lossless</h4>
              <p className="text-sm text-text-secondary">Compresses data without removing any. File sizes are larger but quality is identical to the original.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Image Optimization Checklist</h2>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>✅ <strong className="text-text-primary">Resize before uploading:</strong> Don't upload a 4000px image if it only displays at 800px.</li>
            <li>✅ <strong className="text-text-primary">Convert to WebP:</strong> Use modern formats whenever possible.</li>
            <li>✅ <strong className="text-text-primary">Strip Metadata:</strong> Remove EXIF data (GPS coordinates, camera settings) to save space.</li>
            <li>✅ <strong className="text-text-primary">Use Lazy Loading:</strong> Load images only when they enter the viewport.</li>
            <li>✅ <strong className="text-text-primary">Implement Responsive Images:</strong> Serve different sizes for mobile vs. desktop using `srcset`.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Our Image Tools Suite</h2>
          <p className="text-text-secondary mb-6">
            We offer three specialized tools to help you optimize your images perfectly:
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h4 className="text-xl font-bold text-text-primary mb-2">📉 Image Compressor</h4>
              <p className="text-text-secondary mb-4">Reduce file sizes by up to 90% without losing quality. Support for bulk compression.</p>
              <Link href="/image-compressor" className="text-primary font-bold">Try Image Compressor →</Link>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h4 className="text-xl font-bold text-text-primary mb-2">🔄 Image Converter</h4>
              <p className="text-text-secondary mb-4">Instantly convert between PNG, JPG, WebP, and GIF formats with optimized quality.</p>
              <Link href="/image-converter" className="text-primary font-bold">Try Image Converter →</Link>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h4 className="text-xl font-bold text-text-primary mb-2">📏 Image Resizer</h4>
              <p className="text-text-secondary mb-4">Resize images to exact dimensions or by percentage while maintaining aspect ratio.</p>
              <Link href="/image-resizer" className="text-primary font-bold">Try Image Resizer →</Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Image optimization isn't just about small files; it's about a better user experience. By choosing 
            the right formats and compression levels, you can make your site blazing fast without sacrificing 
            visual appeal. Use our free toolkit to automate your optimization workflow!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Start Optimizing Your Images</h3>
            <p className="text-white/90 mb-6">
              Use our bulk image compressor to speed up your website today. Free, fast, and secure.
            </p>
            <Link
              href="/image-compressor"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Compress Images Now →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/regex-tutorial" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🔤</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Regex Tutorial</h4>
              <p className="text-text-secondary text-sm">Master regular expressions for text processing</p>
            </Link>
            <Link href="/blog/json-formatter-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">JSON Formatter Guide</h4>
              <p className="text-text-secondary text-sm">Validate and format JSON data</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
