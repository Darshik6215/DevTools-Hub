import Link from 'next/link'

export const metadata = {
  title: 'URL Encoding & Decoding Guide - Percent Encoding Explained | DevTools Hub',
  description: 'Learn why URL encoding (percent-encoding) is necessary. Master special characters, query parameters, and how to encode/decode URLs safely.',
  keywords: ['url encoding', 'percent encoding', 'url decoding', 'url safe characters', 'query parameters', 'convert url online'],
}

export default function URLEncodingGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on April 25, 2024 • 7 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            URL Encoding Guide: Mastering Percent-Encoding
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Ever wondered why spaces in URLs turn into %20? 
            Discover the mechanics of URL encoding and how to handle special characters in your web links.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🌐</div>
          <p className="text-text-secondary">URL Encoder & Decoder Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is URL Encoding?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            URL encoding, also known as percent-encoding, is a mechanism for encoding information in a 
            Uniform Resource Identifier (URI). Characters that are not allowed in a URL must be encoded 
            so they can be transmitted safely over the internet.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why Do We Need It?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            URLs can only be sent over the internet using the ASCII character-set. Since URLs often contain 
            characters outside the ASCII set, they must be converted into a valid ASCII format. 
            Additionally, some characters have special meanings in URLs (like `?`, `&`, and `=`) and 
            must be encoded if they are intended to be part of the data.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common Encoded Characters</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-primary">Character</th>
                  <th className="py-3 px-4 text-primary">Description</th>
                  <th className="py-3 px-4 text-primary">Encoded Value</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-text-primary font-bold">(Space)</td>
                  <td className="py-3 px-4">Standard space character</td>
                  <td className="py-3 px-4 font-mono text-primary">%20 or +</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-text-primary font-bold">!</td>
                  <td className="py-3 px-4">Exclamation mark</td>
                  <td className="py-3 px-4 font-mono text-primary">%21</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-text-primary font-bold">#</td>
                  <td className="py-3 px-4">Pound/Fragment identifier</td>
                  <td className="py-3 px-4 font-mono text-primary">%23</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-text-primary font-bold">$</td>
                  <td className="py-3 px-4">Dollar sign</td>
                  <td className="py-3 px-4 font-mono text-primary">%24</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-text-primary font-bold">&</td>
                  <td className="py-3 px-4">Ampersand (Parameter separator)</td>
                  <td className="py-3 px-4 font-mono text-primary">%26</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-text-primary font-bold">+</td>
                  <td className="py-3 px-4">Plus sign</td>
                  <td className="py-3 px-4 font-mono text-primary">%2B</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Reserved vs. Unreserved Characters</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">Unreserved</h3>
              <p className="text-sm text-text-secondary mb-4">Characters that never need encoding. They have no special meaning in a URI.</p>
              <code className="text-primary break-all">A-Z, a-z, 0-9, -, _, ., ~</code>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">Reserved</h3>
              <p className="text-sm text-text-secondary mb-4">Characters that have special meaning. They must be encoded if used as data.</p>
              <code className="text-red-400 break-all">!, *, ', (, ), ;, :, @, &, =, +, $, ,, /, ?, %, #, [, ]</code>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Using Our URL Tools</h2>
          <p className="text-text-secondary mb-6">
            Our <Link href="/url-encoder" className="text-primary hover:underline">URL Encoder & Decoder</Link> makes 
            handling complex links effortless:
          </p>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>✅ <strong className="text-text-primary">Instant Encoding:</strong> Paste your plain text or parameters to get a URL-safe version.</li>
            <li>✅ <strong className="text-text-primary">Smart Decoding:</strong> Automatically handle %20 and other percent-encoded sequences.</li>
            <li>✅ <strong className="text-text-primary">Clean Results:</strong> Copy the result with one click for use in your code or browser.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            URL encoding is essential for the reliable transmission of data across the web. 
            By understanding which characters to encode and when, you can avoid broken links 
            and data loss in your applications. Use our free tool whenever you need to 
            clean up your URLs!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Clean Up Your URLs</h3>
            <p className="text-white/90 mb-6">
              Need to encode parameters or decode a messy link? Our free tool handles it instantly.
            </p>
            <Link
              href="/url-encoder"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to URL Encoder →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/base64-encoding-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Base64 Encoding Guide</h4>
              <p className="text-text-secondary text-sm">Another common data encoding scheme</p>
            </Link>
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">API Testing Guide</h4>
              <p className="text-text-secondary text-sm">Using encoded params in API requests</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
