import Link from 'next/link'

export const metadata = {
  title: 'Web Image Formats Guide - PNG, JPG, WebP, SVG, GIF | DevTools Hub',
  description: 'Understand the differences between common web image formats. Learn when to use PNG vs JPG vs WebP for optimal web performance and quality.',
  keywords: ['image formats', 'webp vs png', 'jpg vs webp', 'svg vs png', 'image quality', 'convert image online', 'web design'],
}

export default function ImageFormatsGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on April 5, 2024 • 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Web Image Formats: Choosing the Right File for Your Site
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Not all image formats are created equal. Choosing the wrong one can result in blurry graphics 
            or a painfully slow website. Learn which format to use for every scenario.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🖼️</div>
          <p className="text-text-secondary">Image Converter Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Most Common Web Formats</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Understanding the strengths and weaknesses of each format is the first step toward a 
            performant website.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">JPG / JPEG (Photographic)</h3>
              <p className="text-text-secondary text-sm mb-4">The gold standard for photographs. It uses lossy compression to keep file sizes small but doesn't support transparency.</p>
              <p className="text-xs text-primary font-bold">Best for: Detailed photos, background images.</p>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">PNG (Graphics)</h3>
              <p className="text-text-secondary text-sm mb-4">Uses lossless compression and supports full transparency (alpha channel). Perfect for graphics with text and flat colors.</p>
              <p className="text-xs text-primary font-bold">Best for: Logos, icons, screenshots, images with transparency.</p>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">WebP (Modern Standard)</h3>
              <p className="text-text-secondary text-sm mb-4">A modern format that provides superior lossy and lossless compression. It supports transparency and is significantly smaller than JPG/PNG.</p>
              <p className="text-xs text-primary font-bold">Best for: All web images (if browser support allows).</p>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">SVG (Vector)</h3>
              <p className="text-text-secondary text-sm mb-4">An XML-based vector format. It can be scaled to any size without quality loss and is extremely small for simple graphics.</p>
              <p className="text-xs text-primary font-bold">Best for: Icons, simple logos, illustrations.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Comparison Matrix</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-primary">Format</th>
                  <th className="py-3 px-4 text-primary">Transparency</th>
                  <th className="py-3 px-4 text-primary">Compression</th>
                  <th className="py-3 px-4 text-primary">Best Use Case</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary text-sm">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">JPG</td>
                  <td className="py-3 px-4">No</td>
                  <td className="py-3 px-4">Lossy</td>
                  <td className="py-3 px-4">Photos</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">PNG</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">Lossless</td>
                  <td className="py-3 px-4">Graphics / Logos</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">WebP</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">Both</td>
                  <td className="py-3 px-4">Modern Web</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">SVG</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">Vector</td>
                  <td className="py-3 px-4">Icons / UI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">When to Convert?</h2>
          <p className="text-text-secondary mb-6">
            You should consider converting your images in these scenarios:
          </p>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>🚀 <strong className="text-text-primary">Legacy to Modern:</strong> Convert PNG/JPG to WebP to save up to 30% in file size.</li>
            <li>🚀 <strong className="text-text-primary">Transparency Needs:</strong> Convert JPG to PNG if you need to remove the background.</li>
            <li>🚀 <strong className="text-text-primary">Print to Web:</strong> Convert high-res CMYK images to sRGB JPG/WebP for correct web display.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Using Our Image Converter</h2>
          <p className="text-text-secondary mb-6">
            Our <Link href="/image-converter" className="text-primary hover:underline">Image Converter tool</Link> makes 
            switching formats a breeze:
          </p>
          <ol className="text-text-secondary space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Upload Image:</strong> Drag and drop your image into the converter.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Select Format:</strong> Choose between PNG, JPG, WebP, or GIF.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Convert & Download:</strong> Your image is processed instantly in the browser.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Mastering image formats is a core part of web development. By choosing the right format 
            for the right content, you ensure your users get high-quality visuals without a performance 
            penalty. Try our free image converter today!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Switch Formats Instantly</h3>
            <p className="text-white/90 mb-6">
              Convert your images between PNG, JPG, WebP, and more with our free online tool.
            </p>
            <Link
              href="/image-converter"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to Image Converter →
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
              <p className="text-text-secondary text-sm">Beyond formats: compressing and resizing</p>
            </Link>
            <Link href="/blog/base64-encoding-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Base64 Encoding Guide</h4>
              <p className="text-text-secondary text-sm">Embedding images as data URIs</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
