import Link from 'next/link'
import AdComponent from '@/components/AdComponent'
import ToolCard from '@/components/ToolCard'
import TrustBadges from '@/components/TrustBadges'
import FAQSchema from '@/components/FAQSchema'

// Enhanced SEO metadata
export const metadata = {
  title: 'Free Online JSON Formatter, Password Generator & Image Converter Tools | DevTools Hub',
  description: 'Free online developer tools: Format & validate JSON instantly, generate secure passwords, convert images between PNG/JPG/WebP. Fast, secure, no signup required.',
  keywords: ['json formatter', 'password generator', 'image converter', 'online tools', 'free developer tools', 'json validator', 'secure password', 'image format converter'],
  authors: [{ name: 'DevTools Hub' }],
  openGraph: {
    title: 'Free Online Developer Tools - JSON, Password, Image Converter',
    description: 'Professional-grade developer tools: JSON formatter, password generator, and image converter. 100% free, fast, and secure.',
    url: 'https://devtools-hub.com',
    siteName: 'DevTools Hub',
    type: 'website',
    images: [
      {
        url: 'https://devtools-hub.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevTools Hub - Free Online Developer Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Developer Tools - DevTools Hub',
    description: 'Format JSON, generate passwords, convert images - all free!',
    images: ['https://devtools-hub.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://devtools-hub.com',
  },
}

export default function Home() {
  // Tool cards configuration with steps
  const tools = [
    {
      title: 'JSON Formatter',
      description: 'Format, validate and beautify JSON data instantly with error detection',
      href: '/json-formatter',
      icon: '📋',
      features: ['Validate JSON', 'Pretty Print', 'Error Detection'],
      steps: ['Paste your JSON', 'Click Format', 'Copy result']
    },
    {
      title: 'Password Generator',
      description: 'Generate cryptographically secure passwords with custom options',
      href: '/password-generator',
      icon: '🔐',
      features: ['Customizable Length', 'Character Options', 'Secure Random'],
      steps: ['Choose length', 'Select options', 'Generate & copy']
    },
    {
      title: 'Image Converter',
      description: 'Convert images between PNG, JPG, WebP and GIF formats instantly',
      href: '/image-converter',
      icon: '🖼️',
      features: ['Multiple Formats', 'Fast Conversion', 'High Quality'],
      steps: ['Upload image', 'Select format', 'Download result']
    }
  ]

  // Latest blog posts
  const latestPosts = [
    {
      title: 'How to Fix Common JSON Errors',
      excerpt: 'Learn how to identify and fix the most common JSON syntax errors quickly.',
      slug: 'how-to-fix-json-errors',
      date: '2024-01-15'
    },
    {
      title: 'Best Password Security Practices in 2024',
      excerpt: 'Discover the latest password security best practices to protect your accounts.',
      slug: 'password-security-practices',
      date: '2024-01-10'
    },
    {
      title: 'Convert Images Without Losing Quality',
      excerpt: 'Complete guide to converting images while maintaining optimal quality.',
      slug: 'convert-images-without-losing-quality',
      date: '2024-01-05'
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: 'What is DevTools Hub?',
      answer: 'DevTools Hub is a free online platform offering essential developer tools including JSON formatter, password generator, and image converter. All tools are web-based and require no installation.'
    },
    {
      question: 'Is DevTools Hub free to use?',
      answer: 'Yes! All tools on DevTools Hub are completely free to use. There are no hidden fees, subscriptions, or limitations on usage.'
    },
    {
      question: 'Do you store my data?',
      answer: 'No, we do not store any of your data. All processing happens in your browser or temporarily on our servers and is immediately discarded after processing.'
    },
    {
      question: 'Can I use these tools offline?',
      answer: 'Currently, our tools require an internet connection. However, we are working on offline capabilities for future releases.'
    },
    {
      question: 'How secure is the password generator?',
      answer: 'Our password generator uses cryptographically secure random number generation (secrets module in Python) to ensure maximum security and unpredictability.'
    }
  ]

  return (
    <>
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      {/* Enhanced Hero Section with Trust Badges */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* SEO-Optimized H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Free Online JSON Formatter, Password Generator & Image Converter Tools
              </span>
            </h1>
            
            {/* Keyword-Rich Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Professional Developer Tools - Format JSON, Generate Secure Passwords, Convert Images Instantly
            </p>
            
            {/* Benefits Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              100% free online tools for developers and designers. Validate and beautify JSON data, 
              create cryptographically secure passwords, and convert images between PNG, JPG, WebP formats. 
              No signup required. Works in your browser. Lightning fast.
            </p>
            
            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="#tools"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                🚀 Use Tools Free
              </a>
              <Link
                href="/blog"
                className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              >
                📚 View Blog
              </Link>
            </div>
            
            {/* Trust Badges */}
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Ad Placement - Below Hero */}
      <div className="container mx-auto px-4 py-6">
        <AdComponent size="leaderboard" className="max-w-4xl mx-auto" />
      </div>

      {/* Popular Tools Section with Enhanced Cards */}
      <section id="tools" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular Developer Tools</h2>
          <p className="text-xl text-gray-600">
            Choose from our collection of powerful, free online tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <ToolCard key={tool.href} tool={tool} />
          ))}
        </div>
      </section>

      {/* SEO Content Section - What is JSON Formatter */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What is a JSON Formatter?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              A <Link href="/json-formatter" className="text-blue-600 hover:underline font-semibold">JSON formatter</Link> is an essential online tool that helps developers format, validate, and beautify JSON (JavaScript Object Notation) data. 
              JSON has become the standard data format for web APIs, configuration files, and data exchange between applications. However, raw JSON 
              data is often minified or poorly formatted, making it difficult to read and debug.
            </p>
            <p className="mb-4">
              Our <Link href="/json-formatter" className="text-blue-600 hover:underline font-semibold">free JSON formatter tool</Link> instantly transforms compressed or messy JSON into a clean, readable format with proper indentation and 
              syntax highlighting. Whether you&apos;re debugging API responses, validating configuration files, or simply trying to understand complex 
              JSON structures, our formatter makes the process effortless.
            </p>
            <p className="mb-4">
              <strong>Key features of our JSON formatter include:</strong> Real-time validation that catches syntax errors immediately, automatic 
              indentation for improved readability, error detection with helpful messages, and the ability to handle large JSON files efficiently. 
              The tool works entirely in your browser, ensuring your data remains private and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Placement - Between Sections */}
      <div className="container mx-auto px-4 py-8">
        <AdComponent size="banner" className="max-w-4xl mx-auto" />
      </div>

      {/* SEO Content Section - Password Generator */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Use a Password Generator?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              In today&apos;s digital age, password security is more critical than ever. Cybersecurity experts recommend using unique, complex passwords 
              for every online account, but creating and remembering such passwords is nearly impossible without help. That&apos;s where our <Link href="/password-generator" className="text-blue-600 hover:underline font-semibold">password generator</Link> comes in.
            </p>
            <p className="mb-4">
              Our <Link href="/password-generator" className="text-blue-600 hover:underline font-semibold">secure password generator</Link> creates cryptographically strong passwords using advanced random number generation algorithms. Unlike 
              simple password generators, we use Python&apos;s secrets module, which is specifically designed for generating cryptographically strong 
              random numbers suitable for managing data such as passwords and security tokens.
            </p>
            <p className="mb-4">
              <strong>Benefits of using our password generator:</strong> Generate passwords from 8 to 64 characters in length, customize character 
              types including uppercase letters, lowercase letters, numbers, and special symbols, instant password strength indicator, one-click 
              copy to clipboard functionality, and complete privacy - passwords are generated in real-time and never stored on our servers.
            </p>
            <p>
              Security experts recommend using passwords that are at least 12 characters long and include a mix of different character types. 
              Our tool makes it easy to create such passwords instantly, helping you maintain strong security across all your online accounts.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Image Converter */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Benefits of Using an Image Converter</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Image format conversion is a common need for web developers, designers, and content creators. Different platforms and use cases 
              require different image formats - websites need optimized WebP images for fast loading, social media platforms prefer JPG, while 
              graphics with transparency require PNG format.
            </p>
            <p className="mb-4">
              Our <Link href="/image-converter" className="text-blue-600 hover:underline font-semibold">free online image converter</Link> supports all major image formats including PNG, JPG, WebP, and GIF. The tool uses advanced image 
              processing algorithms to ensure high-quality conversions while optimizing file sizes. Whether you're converting a single image or 
              need to change formats regularly, our tool provides a fast and reliable solution.
            </p>
            <p className="mb-4">
              <strong>Key advantages of our image converter:</strong> Support for multiple formats (PNG, JPG, WebP, GIF), high-quality conversion 
              with optimized compression, instant preview of original and converted images, automatic handling of transparency when converting 
              between formats, fast processing with no file size limits up to 10MB, and secure processing - images are converted in real-time 
              and immediately deleted from our servers.
            </p>
            <p>
              Modern web development demands optimized images for better performance and user experience. WebP format, for example, can reduce 
              image file sizes by up to 30% compared to JPG while maintaining the same visual quality. Our <Link href="/image-converter" className="text-blue-600 hover:underline font-semibold">converter</Link> makes it easy to leverage 
              these modern formats for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Learn tips, tricks, and best practices from our blog
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-400 hover:-translate-y-1"
              >
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="bg-gray-50 py-16" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose DevTools Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for speed and performance. All tools load instantly and process data in real-time.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is processed securely and never stored on our servers. Complete privacy guaranteed.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Works perfectly on all devices - desktop, tablet, and mobile. Use anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement - Above Footer */}
      <div className="container mx-auto px-4 py-8">
        <AdComponent size="leaderboard" className="max-w-4xl mx-auto" />
      </div>
    </>
  )
}
