import Link from 'next/link'

export const metadata = {
  title: 'JWT Authentication Guide - How JSON Web Tokens Work | DevTools Hub',
  description: 'Understand JWT authentication, its structure (Header, Payload, Signature), and how to use tokens securely in your web applications.',
  keywords: ['jwt authentication', 'json web token', 'jwt structure', 'jwt vs session', 'decode jwt online'],
}

export default function JWTAuthenticationGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on March 15, 2024 • 12 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            JWT Authentication Guide: How JSON Web Tokens Work
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            JSON Web Tokens (JWT) have become the standard for modern web authentication. 
            Learn how they work, why they are used, and how to implement them securely.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🔑</div>
          <p className="text-text-secondary">JWT Decoder & Encoder Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is JWT?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for 
            securely transmitting information between parties as a JSON object. This information can be verified 
            and trusted because it is digitally signed.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Three Parts of a JWT</h2>
          <p className="text-text-secondary mb-4">A JWT typically looks like this: <code className="text-primary">xxxxx.yyyyy.zzzzz</code></p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">1. Header (Red)</h3>
              <p className="text-text-secondary text-sm mb-4">Contains the type of the token (JWT) and the signing algorithm being used (e.g., HS256 or RS256).</p>
              <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs text-text-primary">
{`{
  "alg": "HS256",
  "typ": "JWT"
}`}
              </pre>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-400 mb-3">2. Payload (Purple)</h3>
              <p className="text-text-secondary text-sm mb-4">Contains the claims. Claims are statements about an entity (typically, the user) and additional data.</p>
              <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs text-text-primary">
{`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`}
              </pre>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-3">3. Signature (Blue)</h3>
              <p className="text-text-secondary text-sm">To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">JWT vs Session Authentication</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-primary">Feature</th>
                  <th className="py-3 px-4 text-primary">Session Based</th>
                  <th className="py-3 px-4 text-primary">JWT Based</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary text-sm">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">Storage</td>
                  <td className="py-3 px-4">Server-side (Database/Redis)</td>
                  <td className="py-3 px-4">Client-side (LocalStorage/Cookie)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">Scalability</td>
                  <td className="py-3 px-4">Difficult with multiple servers</td>
                  <td className="py-3 px-4">Easy (Stateless)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-bold text-text-primary">Revocation</td>
                  <td className="py-3 px-4">Easy (Delete session from DB)</td>
                  <td className="py-3 px-4">Difficult (Needs Blacklisting)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">JWT Security Best Practices</h2>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>🔒 <strong className="text-text-primary">Use HTTPS:</strong> Always transmit tokens over an encrypted connection.</li>
            <li>🔒 <strong className="text-text-primary">Keep Payload Small:</strong> Don't store sensitive info like passwords in the payload.</li>
            <li>🔒 <strong className="text-text-primary">Set Expiration:</strong> Always use an `exp` claim to limit token lifetime.</li>
            <li>🔒 <strong className="text-text-primary">Use Strong Secrets:</strong> Use complex, long secrets for HS256 algorithm.</li>
            <li>🔒 <strong className="text-text-primary">HttpOnly Cookies:</strong> Store tokens in HttpOnly cookies to prevent XSS attacks.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Use Our JWT Tools</h2>
          <p className="text-text-secondary mb-6">
            We provide two essential tools for working with JSON Web Tokens:
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h4 className="text-xl font-bold text-text-primary mb-2">🔍 JWT Decoder</h4>
              <p className="text-text-secondary mb-4">Instantly decode any JWT to see its Header and Payload. Perfect for debugging tokens from your backend.</p>
              <Link href="/jwt-decoder" className="text-primary font-bold">Decode a Token →</Link>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h4 className="text-xl font-bold text-text-primary mb-2">✍️ JWT Encoder</h4>
              <p className="text-text-secondary mb-4">Create custom JWTs for testing your API authentication flow. Choose your algorithm and custom payload.</p>
              <Link href="/jwt-encoder" className="text-primary font-bold">Encode a Token →</Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            JWTs are a powerful tool for modern web security, but they must be used correctly. 
            Understanding the structure and security implications is essential for any developer. 
            Use our JWT suite to debug and test your authentication implementations!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Debug Your JWTs Now</h3>
            <p className="text-white/90 mb-6">
              Use our free JWT Decoder to inspect your tokens and verify their content instantly.
            </p>
            <Link
              href="/jwt-decoder"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to JWT Decoder →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">API Testing Guide</h4>
              <p className="text-text-secondary text-sm">Test REST APIs like a pro</p>
            </Link>
            <Link href="/blog/json-formatter-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">JSON Formatter Guide</h4>
              <p className="text-text-secondary text-sm">Master JSON data handling</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
