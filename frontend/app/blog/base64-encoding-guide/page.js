import Link from 'next/link'

export const metadata = {
  title: 'Base64 Encoding Guide - How it Works and When to Use it | DevTools Hub',
  description: 'Learn everything about Base64 encoding/decoding. Understand how it converts binary data to text and its common use cases in web development.',
  keywords: ['base64 encoding', 'base64 decoding', 'binary to text', 'base64 image', 'data uri', 'convert base64 online'],
}

export default function Base64EncodingGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on March 20, 2024 • 8 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Base64 Encoding Guide: How it Works and When to Use it
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Base64 is a fundamental encoding scheme used across the internet to transmit binary data over text-based protocols. 
            Discover how it works and why it's essential for modern web development.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">📦</div>
          <p className="text-text-secondary">Base64 Converter Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is Base64?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format 
            by translating it into a radix-64 representation. The name "Base64" comes from the fact that it uses 
            64 unique characters to represent data.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How Base64 Encoding Works</h2>
          <p className="text-text-secondary mb-6">
            Base64 works by dividing every three bits of binary data into four 6-bit units. 
            Each 6-bit unit is then mapped to one of the 64 characters in the Base64 alphabet:
          </p>
          <div className="bg-card-bg border border-border p-6 rounded-xl mb-8">
            <h3 className="text-lg font-bold text-text-primary mb-4">The Base64 Alphabet</h3>
            <p className="font-mono text-primary break-all">
              ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
            </p>
            <p className="text-xs text-text-secondary mt-4 italic">* The '=' character is used for padding when the input data isn't a multiple of 3 bytes.</p>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">🖼️ Data URIs</h3>
              <p className="text-text-secondary text-sm">Embedding small images or fonts directly into HTML or CSS files to reduce HTTP requests.</p>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">📧 Email Attachments</h3>
              <p className="text-text-secondary text-sm">Transmitting binary files (like PDFs or ZIPs) over SMTP, which was originally designed for 7-bit text.</p>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">🔑 Basic Auth</h3>
              <p className="text-text-secondary text-sm">The "Authorization" header in HTTP Basic Authentication uses Base64 encoded username:password pairs.</p>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">📡 Data Transmission</h3>
              <p className="text-text-secondary text-sm">Safely passing complex data strings through URLs or in JSON payloads without breaking syntax.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Base64 Myths vs. Facts</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start bg-red-500/5 p-4 rounded-lg border border-red-500/10">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-bold text-text-primary">Myth: Base64 is Encryption</p>
                <p className="text-sm text-text-secondary">Base64 is NOT encryption. It is encoding. Anyone can decode it. Never use it to hide sensitive information.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-green-500/5 p-4 rounded-lg border border-green-500/10">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-bold text-text-primary">Fact: Base64 Increases File Size</p>
                <p className="text-sm text-text-secondary">Encoding data in Base64 typically increases the file size by about 33%. Use it sparingly for large files.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Using Our Base64 Converter</h2>
          <p className="text-text-secondary mb-6">
            Our <Link href="/base64-converter" className="text-primary hover:underline">Base64 Converter tool</Link> makes it 
            incredibly easy to handle your data:
          </p>
          <ol className="text-text-secondary space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Text to Base64:</strong> Enter your text and see it encoded instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Base64 to Text:</strong> Paste an encoded string to reveal the original data.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Safe Decoding:</strong> We handle padding and special characters automatically.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Base64 encoding is an indispensable part of a web developer's toolkit. Whether you're 
            embedding assets or debugging network traffic, knowing how to encode and decode data 
            is essential. Try our free Base64 converter for all your encoding needs!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Convert Your Data Now</h3>
            <p className="text-white/90 mb-6">
              Need to encode or decode Base64? Our fast, secure tool works right in your browser.
            </p>
            <Link
              href="/base64-converter"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to Base64 Converter →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/jwt-authentication-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🔑</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">JWT Authentication Guide</h4>
              <p className="text-text-secondary text-sm">Learn about JSON Web Tokens</p>
            </Link>
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">API Testing Guide</h4>
              <p className="text-text-secondary text-sm">Master REST API testing</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
