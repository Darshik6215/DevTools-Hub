import Link from 'next/link'
import AdComponent from '@/components/AdComponent'
import { notFound } from 'next/navigation'

// Blog posts data
const blogPosts = {
  'how-to-fix-json-errors': {
    title: 'How to Fix Common JSON Errors',
    date: '2024-01-15',
    author: 'DevTools Team',
    category: 'JSON',
    readTime: '5 min read',
    content: `
      <h2>Understanding JSON Syntax Errors</h2>
      <p>JSON (JavaScript Object Notation) is a lightweight data format that's easy for humans to read and write, and easy for machines to parse and generate. However, even experienced developers encounter JSON syntax errors. This comprehensive guide will help you identify and fix the most common JSON errors quickly.</p>

      <h3>1. Missing or Extra Commas</h3>
      <p>One of the most common JSON errors is missing commas between key-value pairs or array elements. Conversely, trailing commas (commas after the last element) are also invalid in JSON.</p>
      
      <p><strong>Incorrect:</strong></p>
      <pre><code>{
  "name": "John"
  "age": 30
}</code></pre>

      <p><strong>Correct:</strong></p>
      <pre><code>{
  "name": "John",
  "age": 30
}</code></pre>

      <h3>2. Using Single Quotes Instead of Double Quotes</h3>
      <p>JSON requires double quotes for both keys and string values. Single quotes are not valid in JSON.</p>

      <p><strong>Incorrect:</strong></p>
      <pre><code>{'name': 'John'}</code></pre>

      <p><strong>Correct:</strong></p>
      <pre><code>{"name": "John"}</code></pre>

      <h3>3. Unquoted Keys</h3>
      <p>All keys in JSON must be enclosed in double quotes. JavaScript object notation allows unquoted keys, but JSON does not.</p>

      <h3>4. Trailing Commas</h3>
      <p>JSON does not allow trailing commas after the last element in an object or array.</p>

      <h3>5. Comments in JSON</h3>
      <p>Unlike JavaScript, JSON does not support comments. If you need to add notes, consider using a separate documentation file.</p>

      <h2>Using Our JSON Formatter Tool</h2>
      <p>Our <a href="/json-formatter" class="text-blue-600 hover:underline">JSON Formatter tool</a> automatically detects these errors and provides helpful error messages. Simply paste your JSON, and the tool will highlight any syntax issues with clear explanations.</p>

      <h2>Best Practices for Writing Valid JSON</h2>
      <ul>
        <li>Always use double quotes for strings and keys</li>
        <li>Ensure proper comma placement between elements</li>
        <li>Validate your JSON before using it in production</li>
        <li>Use a JSON formatter to maintain consistent formatting</li>
        <li>Keep your JSON structure simple and readable</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding common JSON errors and how to fix them is essential for any developer working with APIs and data exchange. Use our free JSON formatter tool to validate and beautify your JSON data instantly.</p>
    `,
    relatedTools: ['json-formatter']
  },
  'password-security-practices': {
    title: 'Best Password Security Practices in 2024',
    date: '2024-01-10',
    author: 'DevTools Team',
    category: 'Security',
    readTime: '7 min read',
    content: `
      <h2>Why Password Security Matters</h2>
      <p>In 2024, password security is more critical than ever. With increasing cyber threats and data breaches, protecting your online accounts with strong passwords is your first line of defense. This comprehensive guide covers the latest password security best practices.</p>

      <h3>1. Use Strong, Unique Passwords</h3>
      <p>A strong password should be at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special symbols. Never reuse passwords across different accounts.</p>

      <p><strong>Weak Password:</strong> password123</p>
      <p><strong>Strong Password:</strong> K9$mP2#xL5@qR8</p>

      <h3>2. Leverage Password Generators</h3>
      <p>Creating truly random passwords is difficult for humans. Use our <a href="/password-generator" class="text-blue-600 hover:underline">Password Generator tool</a> to create cryptographically secure passwords instantly. Our tool uses advanced algorithms to ensure maximum security.</p>

      <h3>3. Enable Two-Factor Authentication (2FA)</h3>
      <p>Two-factor authentication adds an extra layer of security by requiring a second form of verification beyond your password. Enable 2FA on all accounts that support it, especially for:</p>
      <ul>
        <li>Email accounts</li>
        <li>Banking and financial services</li>
        <li>Social media platforms</li>
        <li>Cloud storage services</li>
        <li>Work-related accounts</li>
      </ul>

      <h3>4. Use a Password Manager</h3>
      <p>Password managers securely store all your passwords in an encrypted vault, allowing you to use unique, complex passwords for every account without memorizing them. Popular options include:</p>
      <ul>
        <li>1Password</li>
        <li>LastPass</li>
        <li>Bitwarden</li>
        <li>Dashlane</li>
      </ul>

      <h3>5. Avoid Common Password Mistakes</h3>
      <p>Don't use:</p>
      <ul>
        <li>Personal information (birthdays, names, addresses)</li>
        <li>Dictionary words</li>
        <li>Sequential numbers or letters (123456, abcdef)</li>
        <li>Common substitutions (P@ssw0rd)</li>
        <li>The same password across multiple sites</li>
      </ul>

      <h3>6. Change Passwords Regularly</h3>
      <p>While you don't need to change passwords every month, it's good practice to update them periodically, especially for sensitive accounts. Change passwords immediately if:</p>
      <ul>
        <li>You suspect a breach</li>
        <li>A service announces a data leak</li>
        <li>You've shared the password with someone</li>
        <li>You've used it on a public computer</li>
      </ul>

      <h3>7. Be Wary of Phishing Attempts</h3>
      <p>Never enter your password on suspicious websites or in response to unsolicited emails. Always verify the URL before entering credentials.</p>

      <h2>Password Strength Checklist</h2>
      <ul>
        <li>✓ At least 12 characters long</li>
        <li>✓ Mix of uppercase and lowercase letters</li>
        <li>✓ Includes numbers</li>
        <li>✓ Contains special symbols</li>
        <li>✓ Not based on personal information</li>
        <li>✓ Unique to each account</li>
        <li>✓ Not a dictionary word</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Strong password security is essential in today's digital world. Use our <a href="/password-generator" class="text-blue-600 hover:underline">free password generator</a> to create secure passwords, enable two-factor authentication, and consider using a password manager for maximum security.</p>
    `,
    relatedTools: ['password-generator']
  },
  'convert-images-without-losing-quality': {
    title: 'Convert Images Without Losing Quality',
    date: '2024-01-05',
    author: 'DevTools Team',
    category: 'Images',
    readTime: '6 min read',
    content: `
      <h2>Understanding Image Formats</h2>
      <p>Converting images between formats is a common task for web developers and designers. However, choosing the wrong format or conversion settings can result in quality loss. This guide explains how to convert images while maintaining optimal quality.</p>

      <h3>Popular Image Formats Explained</h3>
      
      <h4>PNG (Portable Network Graphics)</h4>
      <p><strong>Best for:</strong> Graphics, logos, images with transparency</p>
      <p><strong>Pros:</strong> Lossless compression, supports transparency, excellent for graphics</p>
      <p><strong>Cons:</strong> Larger file sizes compared to JPG</p>

      <h4>JPG/JPEG (Joint Photographic Experts Group)</h4>
      <p><strong>Best for:</strong> Photographs, images with many colors</p>
      <p><strong>Pros:</strong> Small file sizes, widely supported</p>
      <p><strong>Cons:</strong> Lossy compression, no transparency support</p>

      <h4>WebP</h4>
      <p><strong>Best for:</strong> Modern web applications</p>
      <p><strong>Pros:</strong> Superior compression, supports transparency, smaller than PNG and JPG</p>
      <p><strong>Cons:</strong> Limited support in older browsers</p>

      <h4>GIF (Graphics Interchange Format)</h4>
      <p><strong>Best for:</strong> Simple animations, small graphics</p>
      <p><strong>Pros:</strong> Supports animation, widely supported</p>
      <p><strong>Cons:</strong> Limited to 256 colors, larger file sizes for photos</p>

      <h3>Conversion Best Practices</h3>

      <h4>1. Choose the Right Format</h4>
      <ul>
        <li>Use PNG for logos, icons, and images requiring transparency</li>
        <li>Use JPG for photographs and complex images</li>
        <li>Use WebP for modern web applications (with JPG/PNG fallbacks)</li>
        <li>Use GIF only for simple animations</li>
      </ul>

      <h4>2. Understand Compression</h4>
      <p><strong>Lossless compression:</strong> Reduces file size without losing quality (PNG, WebP lossless)</p>
      <p><strong>Lossy compression:</strong> Reduces file size by removing some data (JPG, WebP lossy)</p>

      <h4>3. Optimize Quality Settings</h4>
      <p>When converting to JPG or lossy WebP:</p>
      <ul>
        <li>Use 85-95% quality for photographs</li>
        <li>Use 90-100% quality for graphics and text</li>
        <li>Test different quality levels to find the best balance</li>
      </ul>

      <h3>Using Our Image Converter Tool</h3>
      <p>Our <a href="/image-converter" class="text-blue-600 hover:underline">Image Converter tool</a> automatically optimizes conversion settings to maintain the best possible quality. The tool:</p>
      <ul>
        <li>Preserves image quality during conversion</li>
        <li>Handles transparency correctly when converting between formats</li>
        <li>Optimizes file sizes without visible quality loss</li>
        <li>Supports batch conversion for multiple images</li>
      </ul>

      <h3>Common Conversion Scenarios</h3>

      <h4>PNG to JPG</h4>
      <p>When converting PNG to JPG, transparency is lost. Our tool automatically adds a white background to maintain image appearance.</p>

      <h4>JPG to PNG</h4>
      <p>Converting JPG to PNG won't improve quality but provides a lossless format for further editing.</p>

      <h4>Any Format to WebP</h4>
      <p>WebP offers the best compression while maintaining quality. Ideal for modern web applications.</p>

      <h3>Web Performance Tips</h3>
      <ul>
        <li>Use WebP with JPG/PNG fallbacks for maximum compatibility</li>
        <li>Compress images before uploading to your website</li>
        <li>Use responsive images with different sizes for different devices</li>
        <li>Implement lazy loading for images below the fold</li>
        <li>Use CDN for faster image delivery</li>
      </ul>

      <h2>Quality Checklist</h2>
      <ul>
        <li>✓ Choose appropriate format for your use case</li>
        <li>✓ Use lossless formats (PNG, WebP lossless) for graphics</li>
        <li>✓ Use lossy formats (JPG, WebP lossy) for photographs</li>
        <li>✓ Test quality settings before final conversion</li>
        <li>✓ Keep original files as backup</li>
        <li>✓ Optimize for web performance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Converting images without losing quality requires understanding different formats and their strengths. Use our <a href="/image-converter" class="text-blue-600 hover:underline">free image converter</a> to convert between PNG, JPG, WebP, and GIF formats with optimized quality settings.</p>
    `,
    relatedTools: ['image-converter']
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    keywords: [post.category, 'tutorial', 'guide', 'developer tools'],
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>

        {/* Ad Placement */}
        <div className="my-8">
          <AdComponent size="banner" />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Ad Placement - Mid Content */}
        <div className="my-12">
          <AdComponent size="rectangle" />
        </div>

        {/* Related Tools */}
        {post.relatedTools && post.relatedTools.length > 0 && (
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-center">🛠️ Try Related Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {post.relatedTools.map((tool) => (
                <Link
                  key={tool}
                  href={`/${tool}`}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-400 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">
                      {tool === 'json-formatter' ? '📋' : tool === 'password-generator' ? '🔐' : '🖼️'}
                    </span>
                    <h4 className="font-bold text-lg text-blue-600">
                      {tool.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    {tool === 'json-formatter' ? 'Format and validate JSON data instantly' : 
                     tool === 'password-generator' ? 'Generate secure passwords with custom options' : 
                     'Convert images between multiple formats'}
                  </p>
                  <span className="inline-block mt-3 text-blue-600 font-semibold text-sm">
                    Use Tool →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Read Next Articles */}
        <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-6">📚 Read Next</h3>
          <div className="space-y-4">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{relatedPost.category === 'JSON' ? '📋' : relatedPost.category === 'Security' ? '🔐' : '🖼️'}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {relatedPost.content.substring(0, 120).replace(/<[^>]*>/g, '')}...
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900">
              Facebook
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:underline font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>

      {/* Ad Placement - Before Footer */}
      <div className="container mx-auto px-4 py-8">
        <AdComponent size="banner" />
      </div>
    </div>
  )
}
