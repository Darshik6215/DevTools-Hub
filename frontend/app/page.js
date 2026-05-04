import Link from 'next/link'
import dynamic from 'next/dynamic'
import AdComponent from '@/components/AdComponent'
import TrustBadges from '@/components/TrustBadges'
import FAQSchema from '@/components/FAQSchema'
import FAQAccordion from '@/components/FAQAccordion'

// Dynamic import for Swiper to avoid SSR issues
const ToolSlider = dynamic(() => import('@/components/ToolSlider'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
    </div>
  ),
})

// Enhanced SEO metadata
export const metadata = {
  title: 'Free Online Developer Tools | DevTools Hub - DevTools Kit',
  description: 'DevTools Hub (devtoolskit.co.in): Free online developer tools for formatting JSON, testing APIs, generating passwords, and converting images. Fast, secure, and professional.',
  keywords: ['json formatter', 'password generator', 'image converter', 'online tools', 'free developer tools', 'devtoolskit', 'devtools hub', 'devtoolskit.co.in'],
  authors: [{ name: 'DevTools Hub' }],
  openGraph: {
    title: 'Free Online Developer Tools | JSON Formatter, API Tester & More',
    description: 'Professional-grade developer tools: JSON formatter, password generator, and image converter. 100% free, fast, and secure.',
    url: 'https://devtoolskit.co.in',
    siteName: 'DevTools Hub',
    type: 'website',
    images: [
      {
        url: 'https://devtoolskit.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevTools Hub - Free Online Developer Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Developer Tools | DevTools Hub',
    description: 'Format JSON, generate passwords, convert images - all free!',
    images: ['https://devtoolskit.co.in/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://devtoolskit.co.in',
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
      title: 'Image Compressor',
      description: 'Compress images by up to 80% without losing quality',
      href: '/image-compressor',
      icon: '🗜️',
      features: ['Reduce Size', 'Keep Quality', 'Fast Processing'],
      steps: ['Upload image', 'Adjust quality', 'Download result']
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
      title: 'JWT Encoder',
      description: 'Create and sign JWT tokens with custom payload and secret',
      href: '/jwt-encoder',
      icon: '🔐',
      features: ['Create JWT', 'Sign Tokens', 'Custom Payload'],
      steps: ['Add payload', 'Enter secret', 'Generate token']
    },
    {
      title: 'JSON ⇄ CSV Converter',
      description: 'Convert between JSON and CSV formats instantly',
      href: '/json-csv-converter',
      icon: '🔄',
      features: ['JSON to CSV', 'CSV to JSON', 'Download Files'],
      steps: ['Paste data', 'Convert', 'Download result']
    },
    {
      title: 'Base64 Converter',
      description: 'Encode and decode Base64 strings and files instantly',
      href: '/base64-converter',
      icon: '🔤',
      features: ['Text & Files', 'Encode/Decode', 'Fast Conversion'],
      steps: ['Enter text/file', 'Choose mode', 'Get result']
    },
    {
      title: 'Code Formatter',
      description: 'Minify and beautify HTML, CSS, JavaScript code',
      href: '/code-formatter',
      icon: '⚡',
      features: ['Minify Code', 'Beautify Code', 'Multiple Languages'],
      steps: ['Paste code', 'Select mode', 'Format instantly']
    },
    {
      title: 'Timestamp Converter',
      description: 'Convert Unix timestamps to human-readable dates',
      href: '/timestamp-converter',
      icon: '⏰',
      features: ['Unix to Date', 'Date to Unix', 'Multiple Formats'],
      steps: ['Enter timestamp', 'Convert', 'Copy result']
    },
    {
      title: 'Hash Generator',
      description: 'Generate MD5, SHA256, SHA512 hashes for security',
      href: '/hash-generator',
      icon: '🔐',
      features: ['Multiple Algorithms', 'Secure Hashing', 'Instant Results'],
      steps: ['Enter text', 'Generate hash', 'Copy hash']
    },
    {
      title: 'Color Picker',
      description: 'Pick colors and convert between HEX, RGB, HSL formats',
      href: '/color-picker',
      icon: '🎨',
      features: ['Color Picker', 'Format Converter', 'Preset Colors'],
      steps: ['Pick color', 'View formats', 'Copy code']
    },
    {
      title: 'UUID Generator',
      description: 'Generate unique identifiers for databases and APIs',
      href: '/uuid-generator',
      icon: '🆔',
      features: ['UUID v4', 'Bulk Generate', 'Instant Copy'],
      steps: ['Set count', 'Generate', 'Copy UUIDs']
    },
    {
      title: 'URL Encoder',
      description: 'Encode and decode URLs for safe transmission',
      href: '/url-encoder',
      icon: '🔗',
      features: ['Encode URLs', 'Decode URLs', 'Safe Characters'],
      steps: ['Enter URL', 'Choose mode', 'Get result']
    },
    {
      title: 'Image Converter',
      description: 'Convert images between PNG, JPG, WebP and GIF formats',
      href: '/image-converter',
      icon: '🖼️',
      features: ['Multiple Formats', 'Fast Conversion', 'High Quality'],
      steps: ['Upload image', 'Select format', 'Download result']
    },
    {
      title: 'Dockerfile Generator',
      description: 'Generate optimized Dockerfiles for Node.js, Python, PHP and more',
      href: '/dockerfile-generator',
      icon: '🐳',
      features: ['Multiple Languages', 'Custom Ports', 'Dockerignore Support'],
      steps: ['Select language', 'Configure options', 'Copy or Download']
    },
    {
      title: '.env Generator & Validator',
      description: 'Create and validate environment files for your projects',
      href: '/env-generator-validator',
      icon: '🛠️',
      features: ['Dynamic Generation', 'Real-time Validation', 'Syntax Checking'],
      steps: ['Choose mode', 'Enter variables', 'Copy or Download']
    },
    {
      title: '.gitignore Generator',
      description: 'Generate professional .gitignore files for your projects instantly',
      href: '/gitignore-generator',
      icon: '📄',
      features: ['9+ Tech Templates', 'Auto-Merge', 'Duplicate Removal'],
      steps: ['Select technologies', 'Review content', 'Copy or Download']
    },
    {
      title: 'SLA Uptime Calculator',
      description: 'Calculate allowed downtime for 99.9%, 99.99%, and 99.999% SLA targets',
      href: '/sla-uptime-calculator',
      icon: '⏱️',
      features: ['Preset SLA Levels', 'Multi-Period', 'Instant Results'],
      steps: ['Enter uptime %', 'Select period', 'Copy results']
    }
  ]

  // Latest blog posts (Updated with new ones)
  const latestPosts = [
    {
      title: 'Complete Guide to Dockerfile Generator - Containerize Your Apps',
      excerpt: 'Learn how to generate optimized Dockerfiles for Node.js, Python, PHP, and Java. Complete guide covering Docker basics.',
      slug: 'dockerfile-generator-guide',
      date: 'May 02, 2024',
      image: '🐳'
    },
    {
      title: 'JWT Authentication Guide - How JSON Web Tokens Work',
      excerpt: 'Understand JWT authentication, its structure, and how to use tokens securely in web applications.',
      slug: 'jwt-authentication-guide',
      date: 'Mar 15, 2024',
      image: '🔑'
    },
    {
      title: 'Regex Tutorial for Beginners - Master Regular Expressions',
      excerpt: 'Master Regular Expressions (Regex) with our beginner-friendly tutorial. Learn syntax and patterns.',
      slug: 'regex-tutorial',
      date: 'Feb 10, 2024',
      image: '🔤'
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
      answer: 'Yes! All tools on DevTools Hub are completely free to use. There are no hidden fees, subscriptions, or limitations on usage. We aim to help developers save time.'
    },
    {
      question: 'Do you store my data?',
      answer: 'No, we do not store any of your data. All processing happens in your browser or temporarily on our servers and is immediately discarded after processing. Privacy is our top priority.'
    },
    {
      question: 'Can I use these tools offline?',
      answer: 'Currently, our tools require an internet connection. However, many of our tools like the JSON Formatter and Password Generator work entirely client-side for maximum speed.'
    },
    {
      question: 'How secure is the password generator?',
      answer: 'Our password generator uses cryptographically secure random number generation to ensure maximum security. It never sends your generated passwords to any server.'
    }
  ]

  return (
    <>
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      {/* Enhanced Hero Section */}
      <section className="bg-bg-primary py-16 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto reveal">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Power Up Your Workflow with Free DevTools
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-primary mb-6 font-semibold">
              JSON Formatter • Password Generator • Image Converter • Dockerfile Generator
            </p>
            
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
              100% free, professional-grade tools for modern developers. Fast, secure, and built for productivity. 
              No signup, no tracking, just pure utility right in your browser.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#tools"
                className="w-full sm:w-auto px-12 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1"
              >
                Start Using Tools
              </a>
              <Link
                href="/blog"
                className="w-full sm:w-auto px-12 py-4 bg-card-bg text-primary text-lg font-bold rounded-xl border border-primary/30 hover:bg-bg-secondary transition-all shadow-lg"
              >
                Read Blogs
              </Link>
            </div>
            
            {/* Quick Stats / Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 py-8 border-y border-border/10 bg-white/5 backdrop-blur-sm rounded-3xl">
               <div className="text-center">
                 <div className="text-3xl font-black text-primary">18+</div>
                 <div className="text-xs uppercase tracking-widest text-text-secondary font-bold">Free Tools</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-black text-accent">100%</div>
                 <div className="text-xs uppercase tracking-widest text-text-secondary font-bold">Private</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-black text-green-500">Fast</div>
                 <div className="text-xs uppercase tracking-widest text-text-secondary font-bold">Performance</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="container mx-auto px-4 py-8 reveal">
        <AdComponent size="leaderboard" className="max-w-4xl mx-auto" />
      </div>

      {/* Popular Tools Section */}
      <section id="tools" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-text-primary uppercase tracking-tighter">Popular Tools</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
            Everything you need for data formatting, security, and image processing.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <ToolSlider tools={tools} />
        </div>

        <div className="text-center mt-16">
          <Link
            href="/tools"
            className="inline-block px-12 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1"
          >
            Explore All Tools →
          </Link>
        </div>
      </section>

      {/* SEO Info Section 1 - Dockerfile Generator */}
      <section className="bg-bg-secondary py-24 reveal overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl font-black mb-8 text-text-primary tracking-tight">Deploy Faster with Docker</h2>
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                <p>
                  Our <Link href="/dockerfile-generator" className="text-primary font-bold hover:underline">Dockerfile Generator</Link> is a must-have tool for modern developers and DevOps engineers. Eliminate the guesswork and generate production-ready Docker configurations in seconds.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Multi-Language Support:</strong> Optimized templates for Node.js, Python, PHP, and Java.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Security First:</strong> Best practices implemented to ensure minimal and secure image sizes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>One-Click Export:</strong> Download your Dockerfile or copy it directly to your project.</span>
                  </li>
                </ul>
                <p>
                  Whether you&apos;re containerizing a simple script or a complex microservice, our generator provides a clean, documented, and efficient starting point for your deployment.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 bg-card-bg p-12 rounded-[3rem] border border-border shadow-2xl relative">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
               <div className="text-[12rem] text-center animate-bounce-slow">🐳</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section 2 - .env Generator & Validator */}
      <section className="py-24 reveal overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 bg-card-bg p-12 rounded-[3rem] border border-border shadow-2xl relative">
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full"></div>
               <div className="text-[12rem] text-center animate-pulse">🛠️</div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-8 text-text-primary tracking-tight">Master Your Environment</h2>
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                <p>
                  Managing environment variables shouldn&apos;t be a headache. Our <Link href="/env-generator-validator" className="text-accent font-bold hover:underline">.env Generator & Validator</Link> provides a secure and intuitive interface for handling your project secrets.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-bg-secondary rounded-2xl border border-border">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-bold mb-1">Fast Generation</h4>
                    <p className="text-sm">Create standard .env files for any project in seconds.</p>
                  </div>
                  <div className="p-4 bg-bg-secondary rounded-2xl border border-border">
                    <div className="text-2xl mb-2">✅</div>
                    <h4 className="font-bold mb-1">Smart Validation</h4>
                    <p className="text-sm">Catch syntax errors and missing keys automatically.</p>
                  </div>
                </div>
                <p>
                  Securely generate DATABASE_URL, API_KEY, and other common variables. Perfect for keeping your local development and production environments in sync.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="bg-bg-secondary py-24 reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-text-primary uppercase tracking-tighter">Latest Blogs</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
              Expert guides and articles to help you master development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group bg-card-bg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border hover:border-primary hover:-translate-y-2`}
              >
                <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                  {post.image}
                </div>
                <div className="p-8">
                  <div className="text-xs text-text-secondary mb-3 font-bold uppercase tracking-widest">{post.date}</div>
                  <h3 className="text-2xl font-black mb-4 text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-text-secondary mb-6 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
                  >
                    Read Guide <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-block px-12 py-4 bg-accent text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-accent/20 transform hover:-translate-y-1"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-24 reveal" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-text-primary tracking-tight">Questions? Answers.</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-bg-secondary py-24 reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 text-center text-text-primary">Why DevTools Hub?</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for extreme speed. No waiting, just instant results every time.' },
              { icon: '🔒', title: 'Privacy First', desc: 'We never see your data. Everything happens right inside your browser.' },
              { icon: '📱', title: 'Perfectly Mobile', desc: 'Need a tool on the go? Our site is fully optimized for smartphones and tablets.' }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center group bg-card-bg p-10 rounded-[2.5rem] border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Subtle Background Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-7xl mb-8 transform group-hover:scale-110 transition-transform duration-500 relative z-10">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-text-primary uppercase tracking-tight relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed font-medium relative z-10">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="container mx-auto px-4 py-8 reveal">
        <AdComponent size="leaderboard" className="max-w-4xl mx-auto" />
      </div>
    </>
  )
}
