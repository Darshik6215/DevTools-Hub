import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to Hash Functions - MD5, SHA-1, SHA-256 | DevTools Hub',
  description: 'Understand cryptographic hash functions. Learn about MD5, SHA-1, SHA-256, their differences, and why hashing is NOT encryption.',
  keywords: ['hash functions', 'md5 hash', 'sha256', 'cryptographic hash', 'hashing vs encryption', 'hash generator online'],
}

export default function HashFunctionsGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on April 10, 2024 • 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Complete Guide to Hash Functions: Understanding Digital Fingerprints
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Hash functions are the unsung heroes of digital security. From verifying file integrity to 
            storing passwords securely, learn how these mathematical tools keep our data safe.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🔒</div>
          <p className="text-text-secondary">Hash Generator Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is a Hash Function?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            A hash function is a mathematical algorithm that takes an input (or 'message') and returns a fixed-size 
            string of bytes. The output, typically a "digest," is unique to that specific input. Think of it 
            as a digital fingerprint for data.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Key Properties of a Good Hash</h2>
          <ul className="text-text-secondary space-y-4 mb-8">
            <li>🎯 <strong className="text-text-primary">Deterministic:</strong> The same input will always produce the exact same hash output.</li>
            <li>🎯 <strong className="text-text-primary">Fast Computation:</strong> It should be quick to calculate the hash for any given message.</li>
            <li>🎯 <strong className="text-text-primary">Pre-image Resistance:</strong> It should be nearly impossible to generate the original input from its hash.</li>
            <li>🎯 <strong className="text-text-primary">Avalanche Effect:</strong> A tiny change in the input (like changing one letter) should result in a completely different hash.</li>
            <li>🎯 <strong className="text-text-primary">Collision Resistance:</strong> It should be extremely difficult to find two different inputs that produce the same hash.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common Hashing Algorithms</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-2">MD5 (Message Digest 5)</h3>
              <p className="text-text-secondary text-sm mb-2">Produces a 128-bit hash value. While once widely used, it is now considered cryptographically broken and should only be used for non-security checksums.</p>
              <code className="text-xs text-primary">Example: 7d09255a409559c77e4e138a2e22c9c7</code>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-2">SHA-1 (Secure Hash Algorithm 1)</h3>
              <p className="text-text-secondary text-sm mb-2">Produces a 160-bit hash. Like MD5, it is no longer considered secure against well-funded attackers.</p>
              <code className="text-xs text-primary">Example: 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12</code>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-2">SHA-256 (Part of SHA-2)</h3>
              <p className="text-text-secondary text-sm mb-2">Produces a 256-bit hash. Currently the industry standard for secure hashing, used in Bitcoin and SSL certificates.</p>
              <code className="text-xs text-primary">Example: d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592</code>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Hashing vs. Encryption</h2>
          <p className="text-text-secondary mb-4">Many people confuse these two, but they serve very different purposes:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-lg text-center">
              <h4 className="font-bold text-text-primary mb-2">Hashing (One-Way)</h4>
              <p className="text-xs text-text-secondary">Designed to be impossible to reverse. Used for integrity and password storage.</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-lg text-center">
              <h4 className="font-bold text-text-primary mb-2">Encryption (Two-Way)</h4>
              <p className="text-xs text-text-secondary">Designed to be reversed with a key. Used for private data transmission.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Real-World Applications</h2>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>✅ <strong className="text-text-primary">Password Storage:</strong> Servers store hashes of passwords, not the passwords themselves.</li>
            <li>✅ <strong className="text-text-primary">File Integrity:</strong> Verifying that a downloaded file hasn't been tampered with.</li>
            <li>✅ <strong className="text-text-primary">Blockchain:</strong> Hashing is the core technology that makes Bitcoin and Ethereum possible.</li>
            <li>✅ <strong className="text-text-primary">Data De-duplication:</strong> Quickly identifying identical files in a storage system.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Understanding hash functions is fundamental to digital literacy in the modern age. 
            Whether you're a developer or just a security-conscious user, knowing which algorithms 
            to trust is key. Use our Hash Generator to create and verify hashes instantly!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Generate Your Hashes</h3>
            <p className="text-white/90 mb-6">
              Need to create an MD5 or SHA-256 hash? Our free tool handles it instantly and securely.
            </p>
            <Link
              href="/hash-generator"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to Hash Generator →
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
              <p className="text-text-secondary text-sm">How tokens use hashing for signatures</p>
            </Link>
            <Link href="/blog/password-security-practices" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Password Security</h4>
              <p className="text-text-secondary text-sm">Best practices for modern security</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
